using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.RegularExpressions;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

string docfxDirectory = "C:\\varigencedocs\\bimlflex";
string docusaurusDirectory = "C:\\varigencedocs\\varigence\\docs\\bimlflex";
var imageExtensions = new[] {".png", ".gif", ".svg", ".jpg", ".jpeg"};

foreach (string filePath in Directory.EnumerateFiles(docfxDirectory, "*.*", SearchOption.AllDirectories)
             .Where(file => imageExtensions.Any(ext => file.EndsWith(ext, StringComparison.OrdinalIgnoreCase))))
{
    CopyFile(filePath, docfxDirectory, docusaurusDirectory);
}

var fileUids = new Dictionary<string, Tuple<string, string>>();
var includeFiles = new Dictionary<string, Tuple<string, string>>();
var tocFiles = new Dictionary<string, Tuple<string, string>>();

foreach (string enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories)) GetFileDictionaries(enumerateFile, ref fileUids, ref includeFiles);
GetTocSidebar(docfxDirectory, ref fileUids, ref tocFiles, docfxDirectory, docusaurusDirectory);
foreach (string enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories)) MigrateFile(enumerateFile, fileUids, includeFiles, docfxDirectory, docusaurusDirectory);

static void MigrateFile(string filePath, Dictionary<string, Tuple<string, string>> fileUids, Dictionary<string, Tuple<string, string>> includeFiles, string docFxDirectory, string docusaurusDirectory)
{
    var content = File.ReadAllText(filePath);

    // Applying multiple Regex.Replace operations
    content = Regex.Replace(content, "(uid:\\W.*\\s)", "");
    content = Regex.Replace(content, "(name:\\W)", "title: ");
    content = Regex.Replace(content, "(summary:\\W)", "description: ");
    content = Regex.Replace(content, "(varigenceProduct:\\W)(.*?)(\\r\\n)(varigenceArticleType:\\W)(.*?)(\\r\\n)", "tags: [$2, $5]$6", RegexOptions.Compiled);
    content = Regex.Replace(content, "(^>\\[!)", "> [!");
    content = Regex.Replace(content, "(^>\\W\\[!)", "$\r\n$2");
    content = Regex.Replace(content, "(\\s)(^>\\W\\[!NOTE\\]\\s)(?s)(.+?)(^\\s*$)", ":::note$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    // Repeat for other patterns as in the original code
    content = Regex.Replace(content, "(\\s)(^>\\W\\[!TIP\\]\\s)(?s)(.+?)(^\\s*$)", ":::tip$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    content = Regex.Replace(content, "(\\s)(^>\\W\\[!INFO\\]\\s)(?s)(.+?)(^\\s*$)", ":::info$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    content = Regex.Replace(content, "(\\s)(^>\\W\\[!WARNING\\]\\s)(?s)(.+?)(^\\s*$)", ":::warning$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    content = Regex.Replace(content, "(\\s)(^>\\W\\[!IMPORTANT\\]\\s)(?s)(.+?)(^\\s*$)", ":::danger$1$1$3$1:::$1$1$4", RegexOptions.Multiline);
    content = Regex.Replace(content, "(^>\\W)", "\r\n");
    content = Regex.Replace(content, "(!\\[.*?\\]\\()(/bimlflex/)", "$1../");
    content = Regex.Replace(content, "(<#.*?#>)", "`$1`");
    content = Regex.Replace(content, "(\"`)(<#.*?#>)(`\")", "\"$2\"");
    content = Regex.Replace(content, "(<br>)", "<br/>");
    content = Regex.Replace(content, "(\\*\\*)(\\<==\\W)(.*?)(\\*\\*)", "**($3)**");

    // Processing fileUids
    foreach (var fileUid in fileUids)
    {
        var replacement = "(" + fileUid.Key.Replace("C:\\varigencedocs", "/docs").Replace("\\", "/").Replace(".md", "") + ")";
        content = Regex.Replace(content, "(\\(xref:" + fileUid.Key + "\\))", replacement, RegexOptions.IgnoreCase);
    }

    // Finding the header index
    var headerIndex = content.IndexOf("---", content.IndexOf("---", StringComparison.OrdinalIgnoreCase) + 3, StringComparison.OrdinalIgnoreCase) + 3;
    var importStatements = "";

    // Processing includeFiles
    foreach (var includeFile in includeFiles)
    {
        foreach (Match match in new Regex("(\\[!include.*?\\()((.*?\\/)?" + includeFile.Key + ")(\\)\\])", RegexOptions.IgnoreCase).Matches(content))
        {
            if (match.Success)
            {
                var newValue = includeFile.Value.Item2;
                var pathPrefix = match.Groups[2].Value.Trim();
                var formattedPath = (pathPrefix.StartsWith(".") ? "" : "./") + pathPrefix;
                importStatements += $"\r\nimport {includeFile.Value.Item1} from '{formattedPath.Replace(".md", newValue)}';";
                content = content.Replace(match.Groups[0].Value, $"<{includeFile.Value.Item1} />");
            }
        }
    }

    // Adding import statements
    if (!string.IsNullOrWhiteSpace(importStatements))
    {
        content = content.Substring(0, headerIndex) + "\r\n" + importStatements + "\r\n" + content.Substring(headerIndex);
        filePath = filePath.Replace(".md", ".mdx");
    }

    // Saving the modified content to a new path
    var newPath = filePath.Replace(docFxDirectory, docusaurusDirectory);
    var directoryName = Path.GetDirectoryName(newPath);
    if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName);

    File.WriteAllText(newPath, content);
}

static void GetFileDictionaries(string filePath, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> includeFiles)
{
    var input = File.ReadAllText(filePath);
    var fileName = Path.GetFileName(filePath);
    var str = input.Contains("[!include", StringComparison.OrdinalIgnoreCase) ? ".mdx" : ".md";
    if (fileName == str) return;

    if (!fileName.EndsWith("index.md", StringComparison.OrdinalIgnoreCase))
    {
        string pascalCase = ToPascalCase(fileName.Replace(".md", ""));
        if (!includeFiles.TryGetValue(fileName, out _))
            includeFiles.Add(fileName, new Tuple<string, string>(pascalCase, str));
        else
            Console.WriteLine(fileName + " " + filePath);
    }

    foreach (Match match in new Regex("(uid:)(.*\\s)", RegexOptions.IgnoreCase | RegexOptions.Multiline).Matches(input))
    {
        if (match.Success)
        {
            var key = match.Groups[2].Value.Trim();
            if (!fileUids.TryGetValue(key, out _))
                fileUids.Add(key, new Tuple<string, string>(filePath, str));
            else
                Console.WriteLine(key + " " + filePath);
        }
    }
}


static void GetTocSidebar(string docFxRootDirectory, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> tocFiles, string docFxDirectory,
    string docusaurusDirectory)
{
    string filePath = Path.Combine(docFxRootDirectory, "toc.yml");
    int tocPosition = 1;
    GetTocDictionary(docFxRootDirectory, filePath, ref tocPosition, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);
}

static void GetTocDictionary(string rootDirectory, string filePath, ref int tocPosition, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> tocFiles,
    string docFxDirectory, string docusaurusDirectory)
{
    var input = File.ReadAllText(filePath);
    var tocEntries = new DeserializerBuilder().WithNamingConvention(CamelCaseNamingConvention.Instance).Build().Deserialize<List<TocEntry>>(input);

    var position = 1;
    foreach (var tocEntry in tocEntries)
    {
        if (tocEntry.items != null && tocEntry.items.Any())
        {
            foreach (var item in tocEntry.items)
            {
                if (item.href.EndsWith(".yml"))
                {
                    var configJson = $"{{\r\n\t\"label\": \"{item.name}\",\r\n\t\"position\": {tocPosition},\r\n\t\"link\": {{\r\n\t\"type\": \"generated-index\"\r\n\t}}\r\n}}";
                    var str1 = Path.Combine(rootDirectory, item.href);
                    var str2 = Path.GetDirectoryName(str1).Replace(docFxDirectory, docusaurusDirectory);
                    var path = Path.Combine(str2, "_category_.json");
                    if (!Directory.Exists(str2)) Directory.CreateDirectory(str2);
                    File.WriteAllText(path, configJson);
                    GetTocDictionary(Path.GetDirectoryName(str1), str1, ref tocPosition, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);
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

static void CopyFile(string filePath, string docfxDirectory, string docusaurusDirectory)
{
    var newFilePath = filePath.Replace(docfxDirectory, docusaurusDirectory);
    var newDirectoryName = Path.GetDirectoryName(newFilePath);
    if (!Directory.Exists(newDirectoryName)) Directory.CreateDirectory(newDirectoryName);
    try
    {
        File.Copy(filePath, newFilePath, true);
    }
    catch (IOException ex)
    {
        Console.WriteLine(ex.Message);
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