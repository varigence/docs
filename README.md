# Varigence Documentation

Product documentation contents is located in their respective folder.

## DocFX documentation site

Documentation site is built using DocFX. [Download DocFX](https://github.com/dotnet/docfx/releases) as a release zip, expand to a folder and add that folder, with docfx.exe, to the path.

Build and host the site using the `serve.bat` or `serve.ps1` files in the `docfx` folder. The default site is served on port 8080. Use the shortcut file to open localhost on port 8080, or [click here](http://localhost:8080). Peruse the site and its contents.

Content is stored in md files. Use linting and adhere to best practices for markdown formatting as well as for file names for DocFX.

Sample extensions For [Visual Studio Code](https://code.visualstudio.com/), run from [command line](https://code.visualstudio.com/docs/editor/command-line) to install:

* `code --install-extension DavidAnson.vscode-markdownlint`
* `code --install-extension shd101wyy.markdown-preview-enhanced`
* `code --install-extension docsmsft.docs-markdown`
* `code --install-extension ms-docfx.docfx`

Guidelines for DocFX based markdown format and styling can be [found here](http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html)

Rendering engine is Markdig. Additional styling and formatting options described at the [Markdig GitHub page](https://github.com/lunet-io/markdig). This allows direct embedding of YouTube videos etc. using Markdown syntax rather than html.

Table of contents files are stored as toc.yml files. Refer to the [DocFX page on toc's](https://dotnet.github.io/docfx/tutorial/intro_toc.html) for more information

## DocFX PDF Builds

to build the PDF version the following prerequisites are needed:

* [wkhtmltopdf](https://wkhtmltopdf.org/downloads.html)
* Add `C:\Program Files\wkhtmltopdf\bin` to Path

Build sample PDF version using the following command, or use the buildPfd.bat file

`docfx pdf`

More overview information on building to PDF is [available in the tutorial](https://dotnet.github.io/docfx/tutorial/walkthrough/walkthrough_generate_pdf.html)

## Documentation Contents

Main product content pages:

* [Biml](biml/index.md)
* [BimlExpress](bimlexpress/index.md)
* [BimlFlex](bimlflex/index.md)
* [BimlStudio](bimlstudio/index.md)
