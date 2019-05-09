C:\docfxsrc\docfx\src\docfx\bin\Debug\net462\docfx metadata docfx.json
rem docfx build docfx.json -t varigence-template-html\ --serve
C:\docfxsrc\docfx\src\docfx\bin\Debug\net462\docfx build docfx.json 
node templates\varigence-template-html\styles\build-index.js
C:\docfxsrc\docfx\src\docfx\bin\Debug\net462\docfx serve _site
