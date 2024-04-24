using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

//RenameFile();
DocfxReferences();

static void DocfxReferences()
{
    var docsFolder = "bimlflex";
    var docfxRootDirectory = @"C:\varigencedocs";
    var docfxDirectory = Path.Combine(docfxRootDirectory, docsFolder);

    var imageExtensions = new[] { ".png", ".gif", ".svg", ".jpg", ".jpeg" };
    var imageRegex = $@"(!\[.*?\]\()((.*\/)?(.*?(\.({imageExtensions.Aggregate((current, next) => $"{current.Replace(".", "")})" + "|" + $"({next.Replace(".", "")}")}))))";
    var imageSrcRegex = $@"(src="")((.*\/)?(.*?(\.({imageExtensions.Aggregate((current, next) => $"{current.Replace(".", "")})" + "|" + $"({next.Replace(".", "")}")}))))";
    var allImageFiles = new Dictionary<string, string?>();

    //foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.*", SearchOption.AllDirectories)
    //             .Where(file => imageExtensions.Any(ext => file.EndsWith(ext, StringComparison.OrdinalIgnoreCase))))
    //{
    //    if (enumerateFile.Replace($"\\{Path.GetFileName(enumerateFile)}", "") != Path.Combine(docfxDirectory, @"static\img"))
    //    {
    //        CopyFile(enumerateFile, Path.Combine(docfxDirectory, @"static\img"), true);
    //    }
    //}

    var allFiles = new Dictionary<string, string?>();
    foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories))
    {
        GetFileDictionaries(enumerateFile, ref allFiles);
        //ConsolidateImageFiles(enumerateFile, docfxDirectory);
    }

    foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.*", SearchOption.AllDirectories)
                 .Where(file => imageExtensions.Any(ext => file.EndsWith(ext, StringComparison.OrdinalIgnoreCase))))
    {
        GetFileDictionaries(enumerateFile, ref allImageFiles);
    }

    foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.md", SearchOption.AllDirectories))
    {
        RemapFileReferences(enumerateFile, imageRegex, imageSrcRegex, ref allFiles, ref allImageFiles);
    }

    //foreach (var enumerateFile in Directory.EnumerateFiles(docfxDirectory, "*.*", SearchOption.AllDirectories)
    //             .Where(file => imageExtensions.Any(ext => file.EndsWith(ext, StringComparison.OrdinalIgnoreCase))))
    //{
    //    if (enumerateFile.IndexOf("bimlflex-app-", StringComparison.OrdinalIgnoreCase) > -1)
    //    {
    //        File.Move(enumerateFile, enumerateFile.Replace("bimlflex-app-", "bimlflex-"), true);
    //    }
    //}

    //GetTocSidebar(docfxDirectory, ref fileUids, ref tocFiles, docfxDirectory, docusaurusDirectory);
}

static void GetFileDictionaries(string? filePath, ref Dictionary<string, string?> allFiles)
{
    var input = File.ReadAllText(filePath);
    var fileName = Path.GetFileName(filePath);

    if (!fileName.EndsWith("index.md", StringComparison.OrdinalIgnoreCase))
    {
        try
        {
            allFiles.Add(fileName, filePath);
        }
        catch
        {
            Console.WriteLine($"Duplicate File: {filePath}");
        }
    }
}

static void ConsolidateImageFiles(string filePath, string docfxDirectory)
{
    var content = File.ReadAllText(filePath);

    foreach (Match match in new Regex(@"(!\[.*?\]\()(https:.*?)((\W"".*?\))|\))", RegexOptions.IgnoreCase).Matches(content))
    {
        if (match.Success)
        {
            var imageUrl = match.Groups[2].Value.Trim();
            var imageName = imageUrl.Substring(imageUrl.LastIndexOf("/", StringComparison.Ordinal) + 1);
            var localPath = Path.Combine(docfxDirectory, @"static\img", imageName);
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
}

static void RemapFileReferences(string filePath, string imageRegex, string imageSrcRegex, ref Dictionary<string, string?> allFiles, ref Dictionary<string, string?> allImageFiles)
{
    var input = File.ReadAllText(filePath);
    var changed = false;

    //    foreach (Match match in new Regex($@"(\[!include.*?\()(.*?)(_incl.*?.md)(\)\])", RegexOptions.IgnoreCase).Matches(input))
    //    {
    //        if (match.Success)
    //        {
    //            var includeFileName = match.Groups[3].Value.Trim();

    //            if (allFiles.TryGetValue(includeFileName, out var includeFilePath))
    //            {
    //                var relativeUri = new Uri(filePath).MakeRelativeUri(new Uri(includeFilePath));
    //                var relativePath = Uri.UnescapeDataString(relativeUri.ToString());

    //                input = input.Replace(match.Groups[0].Value, $"{match.Groups[1].Value}{relativePath})]");
    //                changed = true;
    //            }
    //        }
    //    }

    //    foreach (Match match in new Regex($@"(\[!include.*?\()(.*?)(_enum.*?.md)(\)\])", RegexOptions.IgnoreCase).Matches(input))
    //    {
    //        if (match.Success)
    //        {
    //            var includeFileName = match.Groups[3].Value.Trim();

    //            if (allFiles.TryGetValue(includeFileName, out var includeFilePath))
    //            {
    //                var relativeUri = new Uri(filePath).MakeRelativeUri(new Uri(includeFilePath));
    //                var relativePath = Uri.UnescapeDataString(relativeUri.ToString());

    //                input = input.Replace(match.Groups[0].Value, $"{match.Groups[1].Value}{relativePath})]");
    //                changed = true;
    //            }
    //        }
    //    }

    //    foreach (Match match in new Regex($@"(\[!include.*?\()(.*?)(_dialog.*?.md)(\)\])", RegexOptions.IgnoreCase).Matches(input))
    //    {
    //        if (match.Success)
    //        {
    //            var includeFileName = match.Groups[3].Value.Trim();

    //            if (allFiles.TryGetValue(includeFileName, out var includeFilePath))
    //            {
    //                var relativeUri = new Uri(filePath).MakeRelativeUri(new Uri(includeFilePath));
    //                var relativePath = Uri.UnescapeDataString(relativeUri.ToString());

    //                input = input.Replace(match.Groups[0].Value, $"{match.Groups[1].Value}{relativePath})]");
    //                changed = true;
    //            }
    //        }
    //    }

    //    foreach (Match match in new Regex(imageRegex, RegexOptions.IgnoreCase).Matches(input))
    //    {
    //        if (match.Success)
    //        {
    //            var imageFileName = match.Groups[4].Value.Trim();

    //            if (allImageFiles.TryGetValue(imageFileName, out var imageFilePath))
    //            {
    //                var relativeUri = new Uri(filePath).MakeRelativeUri(new Uri(imageFilePath));
    //                var relativePath = Uri.UnescapeDataString(relativeUri.ToString());

    //                input = input.Replace(match.Groups[0].Value, $"{match.Groups[1].Value}{relativePath}");
    //                changed = true;
    //            }
    //        }
    //    }

    foreach (Match match in new Regex(imageSrcRegex, RegexOptions.IgnoreCase).Matches(input))
    {
        if (match.Success)
        {
            var imageFileName = match.Groups[4].Value.Trim();

            if (allImageFiles.TryGetValue(imageFileName, out var imageFilePath))
            {
                var relativeUri = new Uri(filePath).MakeRelativeUri(new Uri(imageFilePath));
                var relativePath = Uri.UnescapeDataString(relativeUri.ToString());

                input = input.Replace(match.Groups[0].Value, $"{match.Groups[1].Value}{relativePath}");
                changed = true;
            }
        }
    }

    if (changed)
    {
        File.WriteAllText(filePath, input);
    }
}

static void CopyFile(string filePath, string directory, bool move = false)
{
    var fileName = Path.GetFileName(filePath);
    var newFilePath = Path.Combine(directory, fileName);

    var newDirectoryName = Path.GetDirectoryName(newFilePath);
    if (!Directory.Exists(newDirectoryName)) Directory.CreateDirectory(newDirectoryName);
    try
    {
        if (move)
        {
            File.Move(filePath, newFilePath, true);
        }
        else
        {
            File.Copy(filePath, newFilePath, true);
        }
    }
    catch (IOException ex)
    {
        Console.WriteLine(ex.Message);
    }
}

static void SaveImageFromUrl(string file_name, string url)
{
    try
    {
        byte[] content;
        var request = (HttpWebRequest) WebRequest.Create(url);
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