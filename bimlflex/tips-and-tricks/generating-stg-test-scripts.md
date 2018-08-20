# Sample test generation Biml script

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