@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "SqlServerVersionPath=140"
SET "CustomerUID=Your-Customer-Guid-Here"
SET "VersionName=Version 1"
SET "DatabaseList=(BFX_STG,BFX_ODS)"
SET "ServerName=localhost"

rem call SqlPackage.exe to deploy the Dacpacs to the SQL Server instance for the ssdt projects.
rem this loops through all databases specified in the DatabaseList variable array

for %%i in %DatabaseList% do "%programfiles(x86)%\Microsoft SQL Server\%SqlServerVersionPath%\DAC\bin\SqlPackage.exe" /Action:Publish /SourceFile:"output\\SSDT\\%CustomerUID%\\%VersionName%\\%%i\\bin\\Debug\\%%i.Dacpac" /TargetDatabaseName:%%i /TargetServerName:%ServerName%