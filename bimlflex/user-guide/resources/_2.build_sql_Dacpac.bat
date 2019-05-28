@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "MsBuildVersion=15.0"
SET "VSVersion=2017\Enterprise"
SET "CustomerUID=Your-Customer-Guid-Here"
SET "VersionName=Version 1"
SET "DatabaseList=(BFX_STG,BFX_ODS)"

rem call MSBuild to build the Dacpac for the ssdt projects.
rem this loops through all databases specified in the DatabaseList variable array
rem note that the path to msbuild needs to be specified and match machine.

for %%i in %DatabaseList% do "%programfiles(x86)%\Microsoft Visual Studio\%VSVersion%\MSBuild\%MsBuildVersion%\Bin\MSBuild.exe" "%~dp0\\output\\SSDT\\%CustomerUID%\\%VersionName%\\%%i\\%%i.sqlproj"
