@echo off
rem (c) Varigence 2018
rem https://varigence.com/BimlFlex

pushd %~dp0

rem call msbuild.exe with the specific resp file, use the path to a compatible, installed version of msbuild.exe

C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe @"SsisOnly.mst.resp"