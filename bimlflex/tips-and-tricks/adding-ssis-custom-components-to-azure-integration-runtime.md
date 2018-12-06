# Adding BimlFlex custom SSIS components to Azure Integration Runtime

The Azure Integrated Runtime allows deployment and running of SSIS packages in the Azure cloud environment.

The BimlFlex custom SSIS components are required for the BimlFlex packages to execute and they are deployed to the Runtime As part of the Azure Integration Runtime setup.

More information about the custom configuration step is available in the Azure documentation: [https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

## Sample main.cmd file

In the container, the main.cmd file provides the entry point to the custom configuration setup. Add all required custom setup information in this file, including other drivers, applications and functions that are required by the SSIS packages.

Either call the install.bat file for the Varigence Custom Components from the main.cmd or add the installation directly to the main.cmd as illustrated below:

```cmd
@echo off

rem SQL Server 2016
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles%\Microsoft SQL Server\130\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2016.dll "%ProgramFiles(x86)%\Microsoft SQL Server\130\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2016.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for SQL Server 2016.

rem SQL Server 2017
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles%\Microsoft SQL Server\140\DTS\Tasks"
xcopy /F /Y Varigence.Ssis.2017.dll "%ProgramFiles(x86)%\Microsoft SQL Server\140\DTS\Tasks"
gacutil\gacutil /i Varigence.Ssis.2017.dll /f
echo Successfully installed Varigence BimlFlex Custom Components for SQL Server 2017.
```

Once the runtime is configured to deploy the custom components it is possible to deploy and validate a project without warnings or errors relating to the custom components.