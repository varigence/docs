@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem set these to match your environment

SET "ProjectList=(EXT_AWLT_SRC)"
SET "VisualStudioPath=Microsoft Visual Studio\2017\Enterprise"

rem build the ispac files from the SSIS Projects
rem this loops through all projects specified in the ProjectList variable array

for %%i in %ProjectList% do "%programfiles(x86)%\%VisualStudioPath%\Common7\IDE\devenv.com" "output\\%%i\\%%i_Project.dtproj" /rebuild