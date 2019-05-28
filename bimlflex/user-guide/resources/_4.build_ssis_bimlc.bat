@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call the Biml Compiler with the specific resp file to build the SSIS projects

"%programfiles%\Varigence\BimlStudio\5.0\bimlc.exe" @"SsisOnly.mst.bimlc.resp"