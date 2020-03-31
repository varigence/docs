---
uid: connections
title: Connections
---
# Connections Editor

Connections provide the information required to connect to data sources. It also acts as containers for objects and allows setting overrides. Additionally, it has metadata to identify the integration stage along with package execution settings.

![Connections User Interface](../metadata-editors/images/bimlflex-app-connections-full-ui.png "Connections User Interface")

## Action Buttons

||||
|--- |--- |--- |
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="../metadata-editors/images/svg-icons/save.svg"/></div>| <span class="nowrap-col m-5">Save</span> | Save changes. Ctrl+S shortcut available.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="../metadata-editors/images/svg-icons/duplicate-objects.svg"/></div>| <span class="nowrap-col m-5">Duplicate</span> | Duplicate connection.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="../metadata-editors/images/svg-icons/archive-delete.svg"/></div>| <span class="nowrap-col m-5">Archive</span> | Archive Connection.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="../metadata-editors/images/svg-icons/import-metadata.svg"/></div>| <span class="nowrap-col m-5">Import Metadata</span> | Import Metadata from Source Database - [More info](../concepts/importing-metadata.md).|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img src="../metadata-editors/images/svg-icons/refresh.svg"/></div>| <span class="nowrap-col m-5">Refresh</span> | Refresh clears all changes.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="images/bimlflex-app-action-switch.png" /></div>|Cloud|Enable for Cloud. This shows all the Linked Service fields.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="images/bimlflex-app-action-switch.png" /></div>|Exclude|This will remove the `Object` and all associated entities from processing and validation.  This is designed to be paired with the [Use My Exclusions (Locally)] global setting to allow for multiple developers to work on different functional areas without deleting or globally excluding entities.|
|<div class="icon-col m-5" style="width:30px; height:30px;background:#EEE;"><img style="filter: brightness(100%) contrast(95%) grayscale(100%);" src="images/bimlflex-app-action-switch.png" /></div>|Deleted|This will `soft delete` the currently selected `Parameter`.  This will remove the `Parameter` and all associated entities from processing and validation.|

[//]: # (TODO: Connection String Editor document an link from Connection String Field)

## Field Descriptions

|Field|Description|Validation|
|-|-|-|
|Connection|The name of the connection.|String, Unique|
|Integration Stage|Integration Stage may include Source, Staging, Raw Data Vault, Data Mart etc. [More info](_enum-integration-stage.md).|Dropdown|
|Connection Type|Connection type to be used to connect to database. [More info](_enum-connection-type.md).|Dropdown|
|System Type|Connection type of the datasource. [More info](_enum-system-type.md).|Dropdown|
|Description|Free text.|String|
|Connection String|Connection String to be used to connect to database.|String|
|File Path|Only availabe for File Connection Types.|String|
|File Pattern|Only availabe for File Connection Types.|String|
|Database|Only availabe for MSSQL System Type.|String|
|Catalog|For all non-MSSQL System Types.|String|
|Record Source|Only availabe for Source Integration Stage.|String|
|Provider|Only availabe for ADONET Connection Type (ConnectionType : ADONET).|String|
|Landing Connection|Only availabe for Cloud Enabled Source Integration Stage.|String|
|Persist History|Only availabe for Source Integration Stage.|Checkbox|
|Threads|The number of threads to use during SSIS package execution. Zero means no limit.|Integer|

## Tab Details

## Objects Tab

The `Objects Tab` provides quick access to all `Objects` included in the `Connection`.

[!include[Objects Tab](_tab-objects.md)]

## Attributes Tab

The `Attributes Tab` provides a view of any `Configurations` or `Settings` overrides that have been applied to the selected `Connection`.  

[!include[Attributes Tab](_tab-attributes.md)]

## Parameters Tab

The `Parameters Tab` provides a view of any `Parameters` overrides that are associated with the selected `Connection`.  

[!include[Parameters Tab](_tab-parameters.md)]
