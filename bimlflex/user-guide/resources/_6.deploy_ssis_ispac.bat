@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "SqlServerVersionPath=140"
SET "ProjectList=(EXT_AWLT_SRC)"
SET "ServerName=localhost"
SET "SsisDbName=SSISDB"
SET "FolderName=BimlFlex-CICD-Demo"

rem create the folder in the SSISDB catalog if needed

sqlcmd -S %servername%  -d %ssisdbname% -Q "EXEC catalog.create_folder @folder_name = '%FolderName%';"

rem call isdeploymentwizard.exe to deploy the ispacs to the SQL Server SSIS Catalog instance for the SSIS projects.
rem this loops through all Projects specified in the ProjectList variable array

for %%i in %ProjectList% do "%programfiles(x86)%\Microsoft SQL Server\%SqlServerVersionPath%\DTS\Binn\isdeploymentwizard.exe" /S /SP:"output\%%i\bin\%%i_Project.ispac" /DS:%ServerName% /DP:"/%SsisDbName%/%FolderName%/%%i/"
