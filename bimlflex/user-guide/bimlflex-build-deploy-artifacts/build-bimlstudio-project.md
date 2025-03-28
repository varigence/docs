---
uid: bimlflex-build-bimlstudio-project
title: Building a BimlFlex project from BimlStudio.
summary: Building a BimlFlex project from BimlStudio.
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---
# Building a BimlFlex Project

A BimlStudio project for BimlFlex can be used to generate output artifacts by 'building' the metadata.

## Open the Project

Open the project by double clicking the `.mst` file in the Windows File Explorer or by opening BimlStudio and locating the `.mst` file in the dialog.

## Building the BimlFlex project

[!include[BimlFlexProjectBuild](../includes/_incl-header-bimlstudio-project-build.md)]

## Debugging

If the project fails to build, examine the *Output* window at the bottom of BimlStudio.
This window will display compiler error messages, and additional information such as the commands needed to replicate this build [in a command-line setting](xref:bimlflex-command-line-build).

If building for SSIS with script components, such as when enabling the RowSourceId configuration and the build machine has only Visual Studio 2019 installed, a build error might be logged in the output, indicating that the DLL could not be found.

`MSBUILD : error : Error:: Metadata file 'Microsoft.SqlServer.DTSPipelineWrap, Version=<VersionNo>.0.0.0, Culture=neutral, PublicKeyToken=<Token>, processorArchitecture=MSIL' could not be found`

In Visual Studio 2019, the SSIS Extensions installer no longer registers the required DLL's for script building in the GAC. Run the registration manually to allow using these DLL's in the build process.

Example commands:

```dos
REM Visual Studio Community 2019 and SQL Server 2019

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.DTSPipelineWrap.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.DTSRuntimeWrap.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.ManagedDTS.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.PipelineHost.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.ScriptTask.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\PublicAssemblies\SSIS\150\Microsoft.SqlServer.TxScript.dll"

REM Visual Studio Enterprise 2019 and SQL Server 2017

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.DTSPipelineWrap.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.DTSRuntimeWrap.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.ManagedDTS.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.PipelineHost.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.ScriptTask.dll"

"C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe" -i "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\PublicAssemblies\SSIS\140\Microsoft.SqlServer.TxScript.dll"
```

Update paths to the gacutil.exe file and the DLL files as needed based on the local environment.

A similar error might be logged in the output if a 64-bit build is initiated on a machine without the corresponding 64-bit SQL Server components. These 64-bit components are normally only installed with SQL Server. For installations without SQL Server, in BimlStudio, in the Build & Deploy Ribbon UI Tab, change the build bitness from 64-bit to 32-bit and restart the build process.
