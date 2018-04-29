# Varigence Documentation

Product documentation contents is located in their respecitve folder.

## DocFX documentation site

Documentation site is built using DocFX. [Download DocFX](https://github.com/dotnet/docfx/releases) as a release zip, expand to a folder and add that folder, with docfx.exe, to the path.

Build and host the site using the `serve.bat` or `serve.ps1` files in the `proj2` folder. The default site is served on port 8080. Use the shortcut file to open localhost on port 8080, or [click here](http://localhost:8080). Peruse the site and its contents.

Content is stored in md files. Use linting and adhere to best practises for markdown formatting as well as for file names for DocFX.

Sample extensions For Visual Studio code:

* `code --install-extension DavidAnson.vscode-markdownlint`
* `code --install-extension shd101wyy.markdown-preview-enhanced`
* `code --install-extension tintoy.docfx-assistant`
* `code --install-extension docsmsft.docs-markdown`

Guidelines for DocFX based markdown format and styling can be [found here](http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)

Rendering engine is Markdig. Additional styling and formatting options described at the [Markdig Github page](https://github.com/lunet-io/markdig). This allows direct embedding of Youtube videos etc using Markdown syntax rather than html.

Table of contents files are stored as toc.yml files. Refer to the [DocFX page on toc's](https://dotnet.github.io/docfx/tutorial/intro_toc.html) for more information

## Documentation Contents

Main product content pages:

* [Biml](biml/index.md)
* [BimlExpress](bimlexpress/index.md)
* [BimlFlex](bimlflex/index.md)
* [BimlStudio](bimlstudio/index.md)