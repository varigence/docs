using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

var docFxRootDirectory = @"C:\varigencedocs\bimlflex"; // Path to your DocFX project
var docusaurusRootDirectory = @"C:\varigencedocs\varigence\docs\bimlflex"; // Path to your Docusaurus project

var docFxDirectory = $@"{docFxRootDirectory}"; // Path to your DocFX project
var docusaurusDirectory = $@"{docusaurusRootDirectory}"; // Path to your Docusaurus project
string[] imageExtensions = {".png", ".gif", ".svg", ".jpg", ".jpeg"};

foreach (var file in Directory.EnumerateFiles(docFxRootDirectory, "*.*", SearchOption.AllDirectories).Where(s => imageExtensions.Any(ext => ext == Path.GetExtension(s))))
{
    CopyFile(file, docFxRootDirectory, docusaurusRootDirectory);
}

var fileUids = new Dictionary<string, Tuple<string, string>>();
var includeFiles = new Dictionary<string, Tuple<string, string>>();
var tocFiles = new Dictionary<string, Tuple<string, string>>();

foreach (var file in Directory.EnumerateFiles(docFxDirectory, "*.md", SearchOption.AllDirectories))
{
    GetFileDictionaries(file, ref fileUids, ref includeFiles);
}

GetTocSidebar(docFxRootDirectory, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);

foreach (var file in Directory.EnumerateFiles(docFxDirectory, "*.md", SearchOption.AllDirectories))
{
    MigrateFile(file, fileUids, includeFiles, docFxDirectory, docusaurusDirectory);
}

static void MigrateFile(string filePath, Dictionary<string, Tuple<string, string>> fileUids, Dictionary<string, Tuple<string, string>> includeFiles, string docFxDirectory, string docusaurusDirectory)
{
    var fileContent = File.ReadAllText(filePath);

    fileContent = Regex.Replace(fileContent, @"(uid:\W.*\s)", "");
    fileContent = Regex.Replace(fileContent, @"(name:\W)", "title: ");
    fileContent = Regex.Replace(fileContent, @"(summary:\W)", "description: ");
    fileContent = Regex.Replace(fileContent, @"(varigenceProduct:\W)(.*?)(\r\n)(varigenceArticleType:\W)(.*?)(\r\n)", "tags: [$2, $5]$6", RegexOptions.Compiled);

    fileContent = Regex.Replace(fileContent, @"(^>\[!)", "> [!");
    fileContent = Regex.Replace(fileContent, @"(^>\W\[!)", "$\r\n$2");
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!NOTE\]\s)(?s)(.+?)(^\s*$)", ":::note$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!NOTE\]\s)(?s)(.+?)(^\s*$)", ":::note$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!TIP\]\s)(?s)(.+?)(^\s*$)", ":::tip$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!INFO\]\s)(?s)(.+?)(^\s*$)", ":::info$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!WARNING\]\s)(?s)(.+?)(^\s*$)", ":::warning$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(\s)(^>\W\[!IMPORTANT\]\s)(?s)(.+?)(^\s*$)", ":::danger$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    fileContent = Regex.Replace(fileContent, @"(^>\W)", "\r\n");
    fileContent = Regex.Replace(fileContent, @"(!\[.*?\]\()(/bimlflex/)", "$1../");
    fileContent = Regex.Replace(fileContent, @"(<#.*?#>)", "`$1`");
    fileContent = Regex.Replace(fileContent, @"(""`)(<#.*?#>)(`"")", "\"$2\"");
    fileContent = Regex.Replace(fileContent, @"(<br>)", "<br/>");
    fileContent = Regex.Replace(fileContent, @"(\*\*)(\<==\W)(.*?)(\*\*)", "**($3)**");

    foreach (var fileUid in fileUids)
    {
        var replace = "(" + fileUid.Key.Replace("C:\\varigencedocs", "/docs").Replace(@"\", "/").Replace(".md", "") + ")";
        fileContent = Regex.Replace(fileContent, $@"(\(xref:{fileUid.Key}\))", replace, RegexOptions.IgnoreCase);
    }

    var position = fileContent.IndexOf("---", fileContent.IndexOf("---", StringComparison.OrdinalIgnoreCase) + 3, StringComparison.OrdinalIgnoreCase) + 3;
    var importText = "";
    foreach (var includeFile in includeFiles)
    {
        var regex = new Regex($@"(\[!include.*?\()((.*?\/)?{includeFile.Key})(\)\])", RegexOptions.IgnoreCase);
        foreach (Match match in regex.Matches(fileContent))
        {
            if (match.Success)
            {
                var extension = includeFile.Value.Item2;
                var importFile = match.Groups[2].Value.Trim();
                importFile = (importFile.StartsWith(".") ? "" : "./") + importFile;
                importText += $"\r\nimport {includeFile.Value.Item1} from '{importFile.Replace(".md", extension)}';";
                fileContent = fileContent.Replace(match.Groups[0].Value, $"<{includeFile.Value.Item1} />");
                if (includeFile.Key == "_incl-header-new-customer.md")
                {
                    var here = "";
                }
            }
        }
    }

    if (!string.IsNullOrWhiteSpace(importText))
    {
        fileContent = fileContent.Substring(0, position) + $"\r\n{importText}\r\n" + fileContent.Substring(position);
        filePath = filePath.Replace(".md", ".mdx");
    }

    if(filePath.StartsWith("_") && filePath.EndsWith(".md"))
    {

    }
    
    var newFilePath = filePath.Replace(docFxDirectory, docusaurusDirectory);
    var newDirectory = Path.GetDirectoryName(newFilePath);
    if (!Directory.Exists(newDirectory))
    {
        Directory.CreateDirectory(newDirectory);
    }
    File.WriteAllText(newFilePath, fileContent);
}

static void GetFileDictionaries(string filePath, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> includeFiles)
{
    var fileContent = File.ReadAllText(filePath);
    var fileName = Path.GetFileName(filePath);
    var extension = fileContent.Contains("[!include", StringComparison.OrdinalIgnoreCase) ? ".mdx" : ".md";

    if (fileName == extension) return;



    if (!fileName.EndsWith("index.md", StringComparison.OrdinalIgnoreCase))
    {
        var importName = ToPascalCase(fileName.Replace(".md", ""));
        if (!includeFiles.TryGetValue(fileName, out _))
        {
            includeFiles.Add(fileName, new Tuple<string, string>(importName, extension));
        }
        else
        {
            Console.WriteLine(fileName + " " + filePath);
        }
    }

    var regex = new Regex(@"(uid:)(.*\s)", RegexOptions.IgnoreCase | RegexOptions.Multiline);

    foreach (Match match in regex.Matches(fileContent))
    {
        if (match.Success)
        {
            var uid = match.Groups[2].Value.Trim();
            if (!fileUids.TryGetValue(uid, out _))
            {
                fileUids.Add(uid, new Tuple<string, string>(filePath, extension));
            }
            else
            {
                Console.WriteLine(uid + " " + filePath);
            }
        }
    }
}

static void GetTocSidebar(string docFxRootDirectory, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> tocFiles, string docFxDirectory, string docusaurusDirectory)
{
    var filePath = Path.Combine(docFxRootDirectory, "toc.yml");
    
    var tocPosition = 1;
    GetTocDictionary(docFxRootDirectory, filePath, ref tocPosition, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);

    var test = "here";
}

static void GetTocDictionary(string rootDirectory, string filePath, ref int tocPosition, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> tocFiles, string docFxDirectory, string docusaurusDirectory)
{
    var yamlContent = File.ReadAllText(filePath);
    var deserializer = new DeserializerBuilder()
        .WithNamingConvention(CamelCaseNamingConvention.Instance)
        .Build();

    var tocEntries = deserializer.Deserialize<List<TocEntry>>(yamlContent);

    var position = 1;
    foreach(var tocEntry in tocEntries)
    {
        
        if (tocEntry.items != null && tocEntry.items.Any())
        {
            foreach (var item in tocEntry.items)
            {
                if (item.href.EndsWith(".yml"))
                {
                    var categoryJson = $"{{\r\n\t\"label\": \"{item.name}\",\r\n\t\"position\": {tocPosition},\r\n\t\"link\": {{\r\n\t\"type\": \"generated-index\"\r\n\t}}\r\n}}";
                    var tocFilePath = Path.Combine(rootDirectory, item.href);

                    var newDirectory = Path.GetDirectoryName(tocFilePath).Replace(docFxDirectory, docusaurusDirectory);
                    var newFilePath = Path.Combine(newDirectory, "_category_.json");
                    
                    if (!Directory.Exists(newDirectory))
                    {
                        Directory.CreateDirectory(newDirectory);
                    }
                    File.WriteAllText(newFilePath, categoryJson);

                    GetTocDictionary(Path.GetDirectoryName(tocFilePath), tocFilePath, ref tocPosition, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);
                    tocPosition++;
                }
                if (item.href.EndsWith(".md"))
                {
                    tocFiles.Add(Path.Combine(rootDirectory, item.href), new Tuple<string, string>(item.name, $"sidebar_position: {position}"));

                    position++;
                }
            }
        }
    }
}

static void CopyFile(string filePath, string docFxDirectory, string docusaurusDirectory)
{
    // Define the new file path based on Docusaurus's expected structure
    var newFilePath = filePath.Replace(docFxDirectory, docusaurusDirectory);

    // Create the directory if it doesn't exist
    var newDirectory = Path.GetDirectoryName(newFilePath);
    if (!Directory.Exists(newDirectory))
    {
        Directory.CreateDirectory(newDirectory);
    }

    try
    {
        File.Copy(filePath, newFilePath, true); // true allows the file to be overwritten if it already exists
    }
    catch (IOException iox)
    {
        Console.WriteLine(iox.Message);
    }
}

static string ToPascalCase(string s)
{
    var result = new StringBuilder();
    var nonWordChars = new Regex(@"[^a-zA-Z0-9]+");
    var tokens = nonWordChars.Split(s);
    foreach (var token in tokens)
    {
        result.Append(PascalCaseSingleWord(token));
    }

    return result.ToString();
}

static string PascalCaseSingleWord(string s)
{
    var match = Regex.Match(s, @"^(?<word>\d+|^[a-z]+|[A-Z]+|[A-Z][a-z]+|\d[a-z]+)+$");
    var groups = match.Groups["word"];

    var textInfo = Thread.CurrentThread.CurrentCulture.TextInfo;
    var result = new StringBuilder();
    foreach (var capture in groups.Captures.Cast<Capture>())
    {
        result.Append(textInfo.ToTitleCase(capture.Value.ToLower()));
    }

    return result.ToString();
}

public class TocEntry
{
    public string name { get; set; }
    public string href { get; set; }
    public string topicHref { get; set; }
    public List<TocEntry> items { get; set; }
}
