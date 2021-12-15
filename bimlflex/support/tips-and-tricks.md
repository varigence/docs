---
uid: bimlflex-tips-and-tricks-overview
title: Tips and Tricks
summary: BimlFlex tips and tricks including custom SSIS components, Extension Point abilities, importing metadata, custom scripts and setting options 
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# BimlFlex Tips and Tricks

The tips-and-tricks section contains focused design and implementation notes that illustrate core BimlFlex features, nifty tricks or similar.

## Adding BimlFlex custom SSIS components to Azure Integration Runtime

The Azure Integrated Runtime allows deployment and running of SSIS packages in the Azure cloud environment.

The BimlFlex custom SSIS components are required for the BimlFlex packages to execute and they are deployed to the Runtime As part of the Azure Integration Runtime setup.

More information about the custom configuration step is available in the Azure documentation: [https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup)

### Sample main.cmd file

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

## Sample test generation Biml script

Add this as a separate Biml file to the BimlFlex solution in BimlStudio.

Use the preview to expand the code in to a SQL Script that can be copied and executed in Management Studio.

It includes a set of test scripts for testing the Staging and Persistent Staging layers.

```biml
<#
    string tablename;
    string databasename;
    string limit = "100";
    string IntegrationStage;
    string selectstatement;
#>
-- SELECT TOP <#=limit#> per table for STG

<#
    foreach (var table in  RootNode.Tables) { 
        if (table.GetTag("IntegrationStage") == "STG") {#>
            USE <#=table.PackageSubpath #>
            GO
            <#break;
 }} #>

<#
    foreach (var table in  RootNode.Tables) {
        if (table.GetTag("IntegrationStage") == "STG") {
            tablename = table.Schema + "." + table.Name;
#>
SELECT TOP <#=limit#> * FROM <#=tablename#>
<# }} #>

-- SELECT TOP <#=limit#> per table for PSA

<# 
    foreach (var table in  RootNode.Tables) {
        if (table.GetTag("IntegrationStage") == "PSA") {#>
            USE <#=table.PackageSubpath #>
            GO
            <#break;
 }} #>

<#
foreach (var table in  RootNode.Tables) {
    if (table.GetTag("IntegrationStage") == "PSA") {
            tablename = table.Schema + "." + table.Name;
#>
SELECT TOP <#=limit#> * FROM <#=tablename#>
<# }} #>

-- truncate all PSA tables
/*
<# 
    foreach (var table in  RootNode.Tables) { 
        if (table.GetTag("IntegrationStage") == "PSA") {#>
            USE <#=table.PackageSubpath #>
            GO
            <#break;
 }} #>

<# 
foreach (var table in  RootNode.Tables) { 
    if (table.GetTag("IntegrationStage") == "PSA") {
            tablename = table.Schema + "." + table.Name;
#>
TRUNCATE TABLE <#=tablename#>
<#}}#>
*/

-- Rowcounts per database per table
<# 
    foreach (var table in  RootNode.Tables) {
        if (table.GetTag("IntegrationStage") == "STG") {#>
            USE <#=table.PackageSubpath #>
            GO
            <#break;
 }} #>

<# 
selectstatement = "";
foreach (var table in  RootNode.Tables) {
    if (table.GetTag("IntegrationStage") == "STG") {
            tablename = table.Schema + "." + table.Name;
            selectstatement += "SELECT '" + tablename + "' AS TableName, Count(1) AS [RowCount] FROM " +tablename + " UNION ALL\n";
#>
<# }} #>
<#=selectstatement.Substring(0, selectstatement.Length-11)#>

<#
    foreach (var table in  RootNode.Tables) {
        if (table.GetTag("IntegrationStage") == "PSA") {#>
            USE <#=table.PackageSubpath #>
            GO
            <#break;
 }} #>

<#
selectstatement = "";
foreach (var table in  RootNode.Tables) { 
    if (table.GetTag("IntegrationStage") == "PSA") {
            tablename = table.Schema + "." + table.Name;
            selectstatement += "SELECT '" + tablename + "' AS TableName, Count(1) AS [RowCount] FROM " +tablename + " UNION ALL\n";
#>
<# }} #>
<#=selectstatement.Substring(0, selectstatement.Length-11)#>
```

## Importing Metadata from DB2 Sources

Importing metadata from a DB2 source database requires the IBM OLE DB Provider for Db2 to be installed on the client machine. Once the driver is installed and the source connection is defined, the source tables are available to import through the BimlFlex import metadata wizard. As there are multiple versions of Db2 and multiple drivers available the template below might need to be updated to accommodate specific local requirements.

Sample Connection definition to connect to and allow metadata import from Db2:

| Metadata Column  | Sample Value |
| ---------------- | ------------ |
| Connection       | `Your Connection Name` |
| ConnectionString | `ConnectionString here` |
| Catalog          | `Database Name` |
| ConnectionType   | `OLEDB` |
| SystemType       | `DB2` |
| IntegrationStage | `Source` |

Sample Db2 connection string:

```
Data Source=<Data Source Name>;User ID=<User Id>;Password=<Password>;Initial Catalog=<Catalog/Database Name>;Provider=DB2OLEDB.1;Mode=Read;Use Early Metadata=True;Rowset Cache Size=0;Database Name=<Database Name>;Network Address=<Server Address>;Network Port=<Server Post>;Package Collection=DB2OLE;AutoCommit=False;
```
<!--
## Importing Metadata from Oracle Sources

TODO: placeholder for tips and tricks for connecting to and importing from Oracle sources

Importing metadata from a Oracle source database requires the Oracle OLE DB Provider for the relevant Oracle product to be installed on the client machine.

Sample Connection definition to connect to and allow metadata import from Oracle:

| Metadata Column | Sample Value |
| --- | --- |
| Connection | Your Connection Name |
| ConnectionString | `TODO: Add sample ConnectionString here` |
| Catalog | Database Name |
| ConnectionType | `OLEDB` |
| SystemType | `Oracle` |
| IntegrationStage | `Source` |
-->

## Memory usage in SSIS

SQL Server SSIS projects require memory to process data and load from source to target.

When the SSIS engine is running on the same server as the SQL Server engine the SSIS load process needs to contest with the database engine for memory. The default behavior and configuration for SQL Server is to use and hold on to as much memory as possible. This might lead to memory issues running SSIS Packages.

BimlFlex provides a main setting to allow the lookup and delta detection process in SQL, which will minimize the memory usage in SSIS. 

Apart from options to:

* increase total memory in the machine
* run SQL Server and SSIS on different machines
* configure SQL Server max memory usage to leave RAM available to SSIS
* optimize loads to minimize memory usage

the following considerations are also available in BimlFlex to affect memory usage

### Settings

use the BimlFlex settings metadata sheet to tweak the behavior of the created packages.

| SettingKey | SettingValue | Comment |
| --- | --- | --- |
| `DvUseCacheLookup` | default: `N` | Setting this to `Y` will configure the SSIS packages to use Cache Lookups for the Data Vault load. This will cache the lookup data to disk |
| `PsaUseCacheLookup` | default: `N` | Setting this to `Y` will configure the SSIS packages to use Cache Lookups for the PSA lookup in Source to Staging loads. This will cache the lookup data to disk |
| `SsisBufferTempStoragePath` | |
| `SsisBLOBTempStoragePath` | |
| `SsisDefaultBufferMaxRows` | default: `10000` | Start by setting AutoAdjust to `True` |
| `SsisDefaultBufferSize` | default: `10485760` | Start by setting AutoAdjust to `True` |
| `SsisMaximumInsertCommitSize` | default: `2147483647` | |
| `SsisRowsPerBatch` | default: `500000` | |
| `SsisAutoAdjustBufferSize` | default: `TRUE` | Allows SSIS to adjust buffer sizes as needed |

### 32 vs 64-bit runtime

When running the SSIS package, it can be executed by either the 32 or 64-bit version. The 64-bit version can address more memory so it is the recommended choice unless there is a specific, other requirement for the 32-bit engine.

### Debugging projects in Visual Studio

For larger projects, Visual Studio might run out of memory running the packages in debug mode. For these scenarios, consider running the packages using the `Start Without Debugging (Ctrl+F5)` option in Visual Studio.

## Extension Point - Override the Default Row Start Date for Dimensions

This is an example where a Target Pipeline Extension Point is used to override the default `FlexRowStartDate` column derived value so that new rows are always valid from 1900-01-01. This allows direct joins on all dimension members for Type 2 attributes, even if the dimension data was late arriving.

Create the Extension Point in the project by choosing the `Data Mart` button in the `BimlFlex` ribbon tab, `Extension Points` group. In the drop down, choose `Data Warehouse Insert Pipeline`.

Add the target Batch name in the `target` definition. This will override all Dimension Loads with the new behavior.

If the `FlexRowStartDate` column name has been changed from the default, update to the new name in the derived column transformation.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="DwhInsertPipeline" target="LOAD_BFX_DM" #>
<#@ property name="sourceTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="targetTable" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<#@ property name="inputPath" type="String" #>

<# CustomOutput.ObjectInherit = true; #>
<DerivedColumns Name="DC - FlexRowStartDate Override">
    <InputPath OutputPathName="<#=inputPath #>" />
    <Columns>
        <Column Name="FlexRowStartDate" DataType="DateTime" Length="100" ReplaceExisting="true">(DT_DBTIMESTAMP2, 7)"1900-01-01 00:00:00.000"</Column>
    </Columns>
<# CustomOutput.OutputPathName = @"DC - FlexRowStartDate Override.Output"; #>
</DerivedColumns>
```

## Parameterize Connections

SSIS Project Connections can be parameterized through BimlFlex.

Parameters are managed on a per project basis in SSIS. A Connection Manager can have properties, such as the connection string, defined by an expression. This expression can be defined as a Project Parameter or a combination of Project Parameters. These parameters can then be controlled through environment overrides in the SSIS catalog.

The following video shows an example of overriding the connection string property of the connection through an extension point and defining the Project parameter through another extension point that has the target set to `@@global` so that it is applied to all projects in the solution

## Identify Connections per Project

You can use this script to identify which **Project** reference the **Connection** you are adding an `ConnectionExpression` extension point for.

```biml
<#@ template language="C#" hostspecific="True" tier="99999"#>
<#    foreach(var project in RootNode.PackageProjects){
           var connections = new List<string>();
        foreach (var package in RootNode.Packages.Where(i=> i.PackageSubpath == project.ProjectSubpath)){
            foreach(var packageConnection in package.Connections.Where(c => c.Connection != null && !string.IsNullOrWhiteSpace(c.Connection.Name)).Select(c => c.Connection.Name).Distinct()){
                connections.Add(packageConnection);
            } #>
<# } #>
<#=project.Name #>
<#    foreach(var connection in connections.Distinct()) {#>
    <#=connection #>
<# } #>

<# } #>
```

More information:

* [Deployment Through the SSIS Deployment Wizard](xref:bimlflex-ssis-deployment-wizard)
* [Sensitive Information Management in SSIS](xref:bimlflex-ssis-deployment-sensitive-info-management)

### Video

![Parameterize Connections](https://www.youtube.com/watch?v=4V8v4Brbg7E?rel=0&autoplay=0)

## Replace columns in the SSIS Data Flow

To replace an existing source column with a new, derived column from an SSIS Expression, use a combination of `SqlSourceExpression`, `ColumnAlias` and `SsisDataFlowExpression`.

As an example, consider the need to apply an operation to a source column in a load process. In this case, replace part of an email address with another value.

The following approach will select the source column as an alternative name and replace it's value in the Data Flow with the SSIS expression in a Derived Column transformation. The replaced values will be sent to the target using the original column name:

|Column                   |Expression                                    |
|---                      |---                                           |
|ColumnName               |`EmailAddress`                                |
|SqlSourceExpression      |`EmailAddress`                                |
|SsisDataFlowExpression   |`REPLACE(ALT_@@this,"value","other value")`   |
|ColumnAlias              |`ALT_@@this`                                  |

Add this to the columns page or sheet, for the `EmailAddress` source column to change the select statement for it to `EmailAddress AS ALT_EmailAddress` and derive the `EmailAddress` column with a Derived Column transformation using the defined Expression that refers to the source column using the defined column alias.

## Executing custom scripts on Snowflake using BimlFlex

The following example uses the custom Snowflake components to call a Snowflake database to run custom scripts.

This is an example Batch Pre-processing Extension Point that injects the correct Snowflake component at the start of the Batch execution and calls the specified Stored Procedure.

The Target on line 1 needs to match the target batch where the pre-processing should happen. The `SnowflakeSqlStatement` expression should contain the required Snowflake SQL Statement.

```biml
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="BatchPreProcess" target="YOUR_BATCH_NAME" #>
<#@ property name="batch" type="BimlFlexModelWrapper.BatchesWrapper" #>

<#   var ssisVersion = RootNode.BuildSettings.SsisVersion.ToString();
    var componentVersion = ssisVersion == "Ssis2008R2" ? ".2008, Version=1.5.0.0"
        : ssisVersion == "Ssis2012" ? ".2012, Version=2.0.0.0"
        : ssisVersion == "Ssis2014" ? ".2014, Version=3.0.0.0"
        : ssisVersion == "Ssis2016" ? ".2016, Version=4.0.0.0"
        : ssisVersion == "Ssis2017" ? ".2017, Version=5.0.0.0"
        : ssisVersion == "Ssis2019" ? ".2017, Version=6.0.0.0"
        : ".2005, Version=1.0.0.0";
    var targetServerVersion = ssisVersion == "Ssis2008R2" ? "90"
        : ssisVersion == "Ssis2012" ? "110"
        : ssisVersion == "Ssis2014" ? "120"
        : ssisVersion == "Ssis2016" ? "130"
        : ssisVersion == "Ssis2017" ? "140"
        : ssisVersion == "Ssis2019" ? "150"
        : "80";
#>

<Container Name="SEQC - Snowflake BatchPreProcess" ConstraintMode="Parallel">
    <Tasks>
        <CustomTask Name="SFLSQL - CALL flex_WW_VW_WW_STAGE" CreationName="Varigence.Ssis.Snowflake.SnowflakeSql, Varigence.Ssis.Snowflake<#=componentVersion #>, Culture=neutral, PublicKeyToken=e9fb56b2a63ffbab" TaskContact="">
            <Expressions>
                <Expression ExternalProperty="SnowflakeSqlStatement">"CALL \"rdv\".\"flex_RS_ENTITY_STAGE\"();"</Expression>
            </Expressions>
            <ObjectData>&lt;InnerObject&gt;
            &lt;SnowflakeAccount Type="8" Value="User::SnowflakeAccount" /&gt;
            &lt;SnowflakeDatabase Type="8" Value="User::SnowflakeDatabase" /&gt;
            &lt;SnowflakePassword Type="8" Value="User::SnowflakePassword" /&gt;
            &lt;SnowflakeRegion Type="8" Value="User::SnowflakeRegion" /&gt;
            &lt;SnowflakeSchema Type="8" Value="User::SnowflakeSchema" /&gt;
            &lt;SnowflakeSqlStatement Type="8" Value="" /&gt;
            &lt;SnowflakeUser Type="8" Value="User::SnowflakeUser" /&gt;
            &lt;SnowflakeWarehouse Type="8" Value="User::SnowflakeWarehouse" /&gt;
            &lt;TargetServerVersion Type="3" Value="<#=targetServerVersion #>" /&gt;
            &lt;/InnerObject&gt;</ObjectData>
        </CustomTask>
    </Tasks>
</Container>
```
