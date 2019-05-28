@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call the Biml Compiler with the specific resp file, use the path to the installed version of BimlStudio
rem 64 bit: %programfiles%
rem 32 bit: %programfiles(x86)%

"%programfiles%\Varigence\BimlStudio\5.0\bimlc.exe" @"SqlOnly.mst.bimlc.resp"