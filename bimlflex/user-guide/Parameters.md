Parameters for load queries are added either as metadata in the Parameters sheet or via Extension Points. For high watermark delta loads and similar simple parameters adding the Parameter to the metadata will generate and include all required logic to the load process. 

Extension Points can be added for more complex parameters that require custom logic. 

Parameters added to a project, batch package or regular package can be used as any other SSIS parameter. BimlFlex applies standard practices for using parameters but supports any custom use of added parameters. 

## Parameters

The most common scenario is to add parameters to a source query or add parameters that hold details about the particular BI solution. The approach used for these scenarios are different.

When the parameter metadata is entered into BimlFlex Excel Add-in, BimlFlex uses the `[BimlCatalog]` database to manage parameterized source queries. Parameters are persisted in `[BimlCatalog].[ssis].[ConfigVariable]` and logged to `[BimlCatalog].[ssis].[AuditLog]`.

Here is an example of a parameter being stored in the `BimlCatalog` database in the `[ssis].[ConfigVariable]` table.


<table class="ItemList">
<thead>
<tr>
<th>SystemName</th><th>ObjectName</th><th>VariableName</th><th>VariableValue</th><th>ExecutionID</th></tr>
</thead>
<tbody>
<tr><td>AW_SRC</td><td>AW_SRC.Sales.SalesPerson.ModifiedDate</td><td>LastLoadDate</td><td>20/09/2015</td><td>109</td></tr>
</tbody>
</table>
<br>

## Parameters in BimlFlex Excel

When a parameter is added to an object in BimlFlex Excel Add-in, the metadata will be managed the BimlFlex framework and used to generate all the required components to track and update the value defined. Below demonstrates how a data parameter has been incorporated into a source to target loading package. Note that this load starts and ends with sequence containers that are specifically for managing this new parameter.

![Parameters ETL Pattern](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_parameters_etl_pattern.png "Parameters ETL Pattern")

Using the above process, a package that tracks the maximum ID as a parameter can be rerun any number of times. Each time BimlFlex will store the maximum value and update it as it increases over time.

The process starts before the main container. The first control flow task looks up any relevant parameters. LookupParameter is used to check the catalog table `[BimlCatalog].[ssis].[ConfigVariable]` for the parameter that matches the current object being loaded.

The parameter value will be injected in to the source query in the normal data flow as a `WHERE` clause using the specified logic from the metadata.

After the load the Set Parameters tasks will get the new value for the parameter and update the `[BimlCatalog].[ssis].[ConfigVariable]` table.

## Parameters in Extension Points

Extension Point-based parameters are available for more complex scenarios where the logic needed for the flow and parameter isn't easily injected through the normal parameter process. 

It also supports specifying Project level Parameters that are commonly available in all packages in the project.

### Extension Point Project Parameters

Add Extension Points in BimlStudio. 

More details on Extension Points are in the [Extension Points](Extension%20Points.md) documentation

![Create Project Parameter](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_extension_points_create_project_parameter.png "Create Project Parameter")

The newly created file contains some sample scripts:

<pre class="brush: bimlscript;">
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="ProjectParameter" target="ProjectName" #>
<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstParameterNode -->
<!-- The below example configures parameters that will be used in combination with Connection Expressions-->
<Parameter Name="ServerName" DataType="String" IsRequired="true">localhost</Parameter>
<Parameter Name="UserName" DataType="String" IsRequired="true">varigence</Parameter>
<Parameter Name="UserPassword" DataType="String" IsRequired="true">P@ssw0rd!</Parameter>
</pre>

The directives are required for the Extension Point. An additional attribute for the target of the Extension Point needs to be specified. For a project parameter it is the name of the project it targets. 

Once the Project Parameter is defined through the Extension Point it can be reused throughout the project in either metadata or additional Extension Points as needed.

### Extension Point Package Parameters

Package Parameters only affect the individual package it targets. Package parameters can be used when a single package requires bespoke logic that doesnt fit the existing parameter logic. These parameters can be used for any logic and might not need to be persisted in the BimlCatalog database.

Add Extension Points in BimlStudio

![Create Package Parameter](https://varigencecom.blob.core.windows.net/walkthroughs/bimlflex_ss_v5_extension_points_create_package_parameter.png "Create Package Parameter")

The newly created file contains some sample scripts:

<pre class="brush: bimlscript;">
<#@ extension bundle="BimlFlex.bimlb" extensionpoint="PackageVariable" target="ObjectName"#>
<#@ property name="table" type="BimlFlexModelWrapper.ObjectsWrapper" #>
<!-- You can find more details on the Varigence website. https://www.varigence.com/Documentation/Language/Element/AstVariableNode -->
<!-- Variables can also be added to all the packages for the Batch using the PackageVariable combined with CustomOutput.ObjectInherit = true; -->
<#* 	CustomOutput.ObjectInherit = true; *#>
<Variable Name="TenantCode" DataType="String">UNK</Variable>
<Variable Name="CurrentModifiedDate" DataType="String" Namespace="User">1900-01-01</Variable>
</pre>

The directives are required for the Extension Point. An additional attribute for the target of the Extension Point needs to be specified. For a package parameter it is the name of the package it targets. 

Once the Package Parameter is defined through the Extension Point it can be reused throughout the Package in either metadata or additional Extension Points as needed.