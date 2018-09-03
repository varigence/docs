# Adding BimlFlex custom SSIS components to Azure Integration Runtime

The Azure Integrated Runtime allows deployment and running of SSIS packages in the Azure cloud environment.

The BimlFlex custom SSIS components are required for the BimlFlex packages to execute and they are deployed to the Runtime As part of the Azure Integration Runtime setup.

TODO: Add link to Azure documentation (https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

TODO: Add sample cmd and information on gacutil for deployment to IR virtual env.

Once the runtime is configured to deploy the custom components it is possible to validate a valid project without warnings or errors relating to the custom components.

```cmd
@echo off

rem template
xcopy /F /Y SleepTask.dll "%ProgramFiles%\Microsoft SQL Server\140\DTS\Tasks"
xcopy /F /Y SleepTask.dll "%ProgramFiles(x86)%\Microsoft SQL Server\140\DTS\Tasks"
gacutil\gacutil /i SleepTask.dll /f
echo Successfully installed Sleep Task.

rem 2017
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles%\Microsoft SQL Server\130\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles(x86)%\Microsoft SQL Server\130\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2016.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for 2016.


rem 2017
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles%\Microsoft SQL Server\140\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles(x86)%\Microsoft SQL Server\140\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2017.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for 2017.

REM If you want to persist access credentials for file shares, use the command below:
REM cmdkey /add:fileshareserver /user:xxx /pass:yyy
REM You can then access \\fileshareserver\folder directly in your SSIS packages.
```