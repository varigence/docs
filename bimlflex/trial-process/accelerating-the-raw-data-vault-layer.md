# Accelerating the Raw Data Vault Layer

## Supporting Videos

TODO: Coming Soon

## Supporting BimlFlex Documentation

- [Data Vault Accelerator](../user-guide/data-vault-accelerator.md)

## Data Vault Acceleration

Data Vault acceleration can be performed once the Enterprise Logical Model, the source data model and corresponding Data Vault model is done. The acceleration uses the source metadata to create a Raw Data Vault layer. BimlFlex provides this Data Vault acceleration by technical analysis of the source metadata and its defined relationships. Based on this metadata BimlFlex will automatically create the required Data Vault structures and the source to target mappings.

The accelerator first creates a preview of the Data Vault artefacts so that the model can be reviewed and refined through the normal modelling and development process. Once the preview matches expectations it is published to the metadata repository.

Once the metadata has been refreshed in BimlStudio and in the Excel based metadata management solution, it can be built and implemented, or further refined.

## Detailed Steps

The following detailed steps walks through the acceleration of the Raw Data Vault Layer:

### Configuring the Accelerator

To start the acceleration process, configure the Data Vault Accelerator to the record source and project used. This is done through the Data Vault Accelerator group of buttons in the BimlFlex Ribbon in BimlStudio.

![Data Vault Accelerator UI -center -50%](../user-guide/images/bimlflex-ss-v5-accelerator-ui-tab-group.png)

Click the `Preview Options` button and configure the accelerator.

For the trial this is:

- Record Source: `AWLT`
- Connection: `BFX_RDV`
- Project `LOAD_BFX_RDV`

![Data Vault Accelerator Options -center -50%](../user-guide/images/bimlflex-ss-v5-data-vault-accelerator-options.png)

### Previewing the Acceleration result

Click the preview button to generate a preview of the Data Vault.

The corresponding preview tables will be visible in the preview schema in the BimlStudio logical view.

The accelerated Data Vault schema can be visualized and reviewed using the schema visualization tool in the documentation tab.

- Click Preview in the Documentation tab, choose Database Schema Diagram.
- In the generated diagram type, change from Default to BimlFlexDataVaultPreview or BimlFlexDataVaultPreviewBackbone to filter the schema to the preview. The backbone option only include Hubs and Links so that the Core Business Concept and Unit Of Work parts of the model can be more easily reviewed.

![Data Vault Accelerator Schema Preview -center -50%](../user-guide/images/bimlflex-ss-v5-data-vault-schema-preview.png)

Review the previewed model and compare it with the Enterprise Logical Model. 

If changes are required:

- Disable the preview in BimlStudio
- Update the model information in BimlFlex Excel based metadata editor
- Push any updates to the repository
- Refresh the metadata in BimlStudio
- recreate the preview using the new metadata

### Publishing the Acceleration result

Once the preview model meets requirements, publish the results to the Metadata Repository by clicking the publish button.

![Data Vault Accelerator Publish -center -50%](../user-guide/images/bimlflex-ss-v5-accelerator-publish-metadata-changes.png)

Once the accelerated entities are published they are available in the Metadata Repository and visible in both BimlStudio and BimlFlex Excel-based metadata editor.

### Refreshing the metadata in Excel to review the Data Vault

Switch to the Excel-based metadata editor and click the `Get All Entities` button to read the accelerated entities in to the Excel sheets.

The Objects and Columns sheets are now populated with the accelerated objects. The existing source metadata has been updated with target tables and columns representing the source to target mappings of the data from the source to the Data Vault layer.

### Building the new solution

BimlStudio will automatically refresh the metadata once the preview objects are published to the repository. The logical view in BimlStudio is updated to reflect the new metadata. In the `Relational` node the new Data Vault tables are visible. In the `Data Integration`, `Integration Services` node the new project, batch and load packages are visible.

To enable the build of the new project, start by creating the tables. Use the `Generate Scripts`, `Create Table Script` function to generate the required tables. The new Data Vault tables and database is included. The existing Staging tables are updated to include any derived keys needed for Link relationships. By default, these keys are not persisted, so the Persistent Staging tables will be the same.

Execute the new create table script to drop and create all tables.

Once the tables are available, build the SSIS projects using BimlStudio's `Build` function.

The Data Vault keys are derived in to the staging area so the existing Source to Staging packages have been rebuilt and updated to derive them as needed.

Open the Data Vault load project in a compatible version of Visual Studio and review the packages. Execute the `LOAD_BFX_RDV_Batch.dtsx` package to load the Data Vault from the staging tables. Once completed, the Data Vault will contain data.