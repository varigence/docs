using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

//RenameFile();
MigrateDocFx();

static void MigrateDocFx()
{
    var docsFolder = "bimlstudio";
    var docfxRootDirectory = @"C:\varigencedocs";
    var docusaurusRootDirectory = @"C:\varigencedocs\varigence";

    var docfxDirectory = Path.Combine(docfxRootDirectory, docsFolder);
    var docusaurusDirectory = Path.Combine(docusaurusRootDirectory, "docs", docsFolder);
    var imageExtensions = new[] { ".png", ".gif", ".svg", ".jpg", ".jpeg" };
    var imageRegex = $@"(!\[.*?\]\()((.*\/)?(.*?(\.({imageExtensions.Aggregate((current, next) => $"{current.Replace(".", "")})" + "|" + $"({next.Replace(".", "")}")}))))";

    foreach (var filePath in Directory.EnumerateFiles(docfxDirectory, "*.*", SearchOption.AllDirectories).Where(file => imageExtensions.Any(ext => file.EndsWith(ext, StringComparison.OrdinalIgnoreCase))))
    {
        CopyFile(filePath, Path.Combine(docusaurusRootDirectory, @"static\img", docsFolder));
    }

    var fileUids = new Dictionary<string, Tuple<string, string>>();
    var includeFiles = new Dictionary<string, Tuple<string, string>>();
    var tocFiles = new Dictionary<string, Tuple<string, string>>();

    foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories))
    {
        GetFileDictionaries(enumerateFile, ref fileUids, ref includeFiles);
    }
    GetTocSidebar(docfxDirectory, ref fileUids, ref tocFiles, docfxDirectory, docusaurusDirectory);
    foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories))
    {
        MigrateFile(enumerateFile, imageRegex, docsFolder, docusaurusRootDirectory, fileUids, includeFiles, tocFiles, docfxDirectory, docusaurusDirectory);
    }
}

static void MigrateFile(string filePath, string imageRegex, string docsFolder, string docusaurusRootDirectory, Dictionary<string, Tuple<string, string>> fileUids, Dictionary<string, Tuple<string, string>> includeFiles, Dictionary<string, Tuple<string, string>> tocFiles,
    string docFxDirectory, string docusaurusDirectory)
{
    var newPath = filePath.Replace(docFxDirectory, docusaurusDirectory);
    var content = File.ReadAllText(filePath);

    foreach (Match match in new Regex(@"(!\[.*?\]\()(https:.*?)((\W"".*?\))|\))", RegexOptions.IgnoreCase).Matches(content))
    {
        if (match.Success)
        {
            var imageUrl = match.Groups[2].Value.Trim();
            var imageName = imageUrl.Substring(imageUrl.LastIndexOf("/", StringComparison.Ordinal) + 1);
            var localPath = Path.Combine(docusaurusRootDirectory, @"static\img", docsFolder, imageName);
            try
            {
                SaveImageFromUrl(localPath, imageUrl);
                Console.WriteLine("Image downloaded and saved successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("ImageUrl Missing: " + imageUrl);
            }
        }
    }

    // Applying multiple Regex.Replace operations
    content = Regex.Replace(content, @"(uid:\W.*\s)", "");
    content = Regex.Replace(content, @"(name:\W)", "title: ");
    content = Regex.Replace(content, @"(summary:\W)", "description: ");
    content = Regex.Replace(content, @"(varigenceProduct:\W)(.*?)(\r\n)(varigenceArticleType:\W)(.*?)(\r\n)", "tags: [$2, $5]$6", RegexOptions.Compiled);
    content = Regex.Replace(content, @"(^)(>\[!)", "$1> [!", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!)", "\r\n$1$2", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!NOTE\]\s)(?s)(.+?)(^\s*$)", "\r\n:::note\r\n$3\r\n:::\r\n\r\n$4", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!TIP\]\s)(?s)(.+?)(^\s*$)", "\r\n:::tip\r\n$3\r\n:::\r\n\r\n$4", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!INFO\]\s)(?s)(.+?)(^\s*$)", "\r\n:::info\r\n$3\r\n:::\r\n\r\n$4", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!WARNING\]\s)(?s)(.+?)(^\s*$)", "\r\n:::warning\r\n$3\r\n:::\r\n\r\n$4", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\W\[!IMPORTANT\]\s)(?s)(.+?)(^\s*$)", "\r\n:::danger\r\n$3\r\n:::\r\n\r\n$4", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(^)(>\s)", "", RegexOptions.Multiline);
    content = Regex.Replace(content, @"(!\[.*?\]\()(/bimlflex/)", "$1../");
    content = Regex.Replace(content, "(<#.*?#>)", "`$1`");
    content = Regex.Replace(content, "(\"`)(<#.*?#>)(`\")", "\"$2\"");
    content = Regex.Replace(content, "(<br>)", "<br/>");
    content = Regex.Replace(content, @"(\*\*)(\<==\W)(.*?)(\*\*)", "**($3)**");
    content = Regex.Replace(content, imageRegex, $"$1/img/{docsFolder}/$4");

    // Processing fileUids
    foreach (var fileUid in fileUids)
    {
        var newFilePath = fileUid.Value.Item1.Replace(docFxDirectory, docusaurusDirectory);
        var newFileName = Path.GetFileName(newFilePath);
        var relativePath = Path.GetRelativePath(newPath, newFilePath);
        relativePath = relativePath == "." ? newFileName : (relativePath.StartsWith(@"..\") ? relativePath.Substring(3) : relativePath).Replace(@"\", "/");
        relativePath = relativePath.Replace("/index.md", "", StringComparison.OrdinalIgnoreCase);
        relativePath = (relativePath == newFileName ? $"./{newFileName}" : relativePath).Replace(".md", "");
        var replacement = "(" + relativePath + "$2";
        content = Regex.Replace(content, $@"(\(xref:{fileUid.Key})([\)|#])", replacement, RegexOptions.IgnoreCase);
        replacement = "$1" + relativePath + "$3";
        content = Regex.Replace(content, $@"(\[.*?\]\()({fileUid.Key})([\)|#])", replacement, RegexOptions.IgnoreCase);
    }

    // Processing title
    foreach (var tocFile in tocFiles)
    {
        if (tocFile.Key == filePath)
        {
            content = Regex.Replace(content, @"(title:\W)(.*\s)", $"{tocFile.Value.Item2}\r\ntitle: {tocFile.Value.Item1}\r\n");
        }
    }

    // Finding the header index
    var headerIndex = content.IndexOf("---", content.IndexOf("---", StringComparison.OrdinalIgnoreCase) + 3, StringComparison.OrdinalIgnoreCase) + 3;
    var importStatements = "";

    // Processing includeFiles
    foreach (var includeFile in includeFiles)
    {
        foreach (Match match in new Regex($@"(\[!include.*?\()((.*?\/)?{includeFile.Key})(\)\])", RegexOptions.IgnoreCase).Matches(content))
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

    if (Regex.IsMatch(content, @"style\s*=\s*""([^""]*)""", RegexOptions.IgnoreCase))
    {
        content = ConvertHtmlStylesToReact(content);
        filePath = filePath.Replace(".md", ".mdx");
    }

    content = Regex.Replace(content, @"(```biml[\s\S]*?```)", m => m.Value.Replace("`<", "<").Replace(">`", ">"), RegexOptions.Multiline);

    // Saving the modified content to a new path
    newPath = filePath.Replace(docFxDirectory, docusaurusDirectory);
    var directoryName = Path.GetDirectoryName(newPath);
    if (!Directory.Exists(directoryName)) Directory.CreateDirectory(directoryName);

    File.WriteAllText(newPath, content);
}

static void GetFileDictionaries(string filePath, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> includeFiles)
{
    var input = File.ReadAllText(filePath);
    var fileName = Path.GetFileName(filePath);
    var extension = input.Contains("[!include", StringComparison.OrdinalIgnoreCase) || Regex.IsMatch(input, @"style\s*=\s*""([^""]*)""", RegexOptions.IgnoreCase) ? ".mdx" : ".md";

    if (fileName == extension) return;

    if (!fileName.EndsWith("index.md", StringComparison.OrdinalIgnoreCase))
    {
        string pascalCase = ToPascalCase(fileName.Replace(".md", ""));
        if (!includeFiles.TryGetValue(fileName, out _))
            includeFiles.Add(fileName, new Tuple<string, string>(pascalCase, extension));
        else
            Console.WriteLine(fileName + " " + filePath);
    }

    foreach (Match match in new Regex(@"(uid:\W)(.*\s)", RegexOptions.IgnoreCase | RegexOptions.Multiline).Matches(input))
    {
        if (match.Success)
        {
            var key = match.Groups[2].Value.Trim();
            if (!fileUids.TryGetValue(key, out _))
                fileUids.Add(key, new Tuple<string, string>(filePath, extension));
            else
                Console.WriteLine(key + " " + filePath);
        }
    }
}

static void GetTocSidebar(string docFxRootDirectory, ref Dictionary<string, Tuple<string, string>> fileUids, ref Dictionary<string, Tuple<string, string>> tocFiles, string docFxDirectory,
    string docusaurusDirectory)
{
    var filePath = Path.Combine(docFxRootDirectory, "toc.yml");
    var tocPosition = 1;
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
                    var hrefFilePath = Path.Combine(rootDirectory, item.href);
                    var newDirectory = Path.GetDirectoryName(hrefFilePath).Replace(docFxDirectory, docusaurusDirectory);
                    var newFilePath = Path.Combine(newDirectory, "_category_.json");
                    if (!Directory.Exists(newDirectory)) Directory.CreateDirectory(newDirectory);
                    File.WriteAllText(newFilePath, configJson);
                    GetTocDictionary(Path.GetDirectoryName(hrefFilePath), hrefFilePath, ref tocPosition, ref fileUids, ref tocFiles, docFxDirectory, docusaurusDirectory);
                    tocPosition++;
                }

                if (item.href.EndsWith(".md"))
                {
                    tocFiles.Add(Path.Combine(rootDirectory, item.href), new Tuple<string, string>(item.name, $"sidebar_position: {position}"));
                    position++;
                }
            }
        }
        if (tocEntry.href.EndsWith(".md"))
        {
            tocFiles.Add(Path.Combine(rootDirectory, tocEntry.href), new Tuple<string, string>(tocEntry.name, $"sidebar_position: {position}"));
            position++;
        }
    }
}

static void CopyFile(string filePath, string docusaurusDirectory)
{
    var fileName = Path.GetFileName(filePath);
    var newFilePath = Path.Combine(docusaurusDirectory, fileName);

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

static string ConvertHtmlStylesToReact(string html)
{
    return Regex.Replace(html, @"style\s*=\s*""([^""]*)""", match =>
    {
        var styleString = match.Groups[1].Value;
        return "style={{" + ConvertStyleString(styleString) + " }}";
    });
}

static string ConvertStyleString(string styleString)
{
    return Regex.Replace(styleString, @"([\w-]+)\s*:\s*([^;]+);?", m =>
    {
        var propertyName = ConvertToCamelCase(m.Groups[1].Value);
        var propertyValue = m.Groups[2].Value;
        return $" {propertyName}: '{propertyValue}',";
    }).TrimEnd(',');
}

static string ConvertToCamelCase(string input)
{
    return Regex.Replace(input, @"-\w", m => m.Value[1].ToString().ToUpper());
}

static void RenameFile()
{
    var fileDirectory = @"C:\varigencedocs\varigence\docs\bimlflex\reference-documentation\settings";
    var files = Directory.GetFiles(fileDirectory, "*.md", SearchOption.AllDirectories);
    foreach (var file in files)
    {
        var newFilePath = Path.Combine(Path.GetDirectoryName(file), "_" + Path.GetFileName(file));
        File.Move(file, newFilePath, true);
    }
}

static void SaveImageFromUrl(string file_name, string url)
{
    try
    {
        byte[] content;
        var request = (HttpWebRequest)WebRequest.Create(url);
        var response = request.GetResponse();

        var stream = response.GetResponseStream();

        using (BinaryReader br = new BinaryReader(stream))
        {
            content = br.ReadBytes(500000);
            br.Close();
        }
        response.Close();

        var fs = new FileStream(file_name, FileMode.Create);
        var bw = new BinaryWriter(fs);
        try
        {
            bw.Write(content);
        }
        finally
        {
            fs.Close();
            bw.Close();
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"#{url}#");
        Console.WriteLine(ex.Message);
    }
}
public class TocEntry
{
    public string name { get; set; }
    public string href { get; set; }
    public string topicHref { get; set; }
    public List<TocEntry> items { get; set; }
}

