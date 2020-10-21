#### Integration Stages

| Value                   | Description                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Source System           | A data source that is being extracted, generally with the intent to be processed into the BimlFlex data integration environment.   |
| Staging Area            | A temporary storage area between the source systems and a data warehouse.                                                          |
| Persistent Staging Area | A staging area where history is kept and changed data capture (CDC) is managed for all source attributes.                          |
| Intermediate Area       | This is the same as a target staging area, but is only used in SSIS DataWarehouse and Data Mart templates.                         |
| Data Warehouse          | A large storage of data, collected from a wide range of sources, that is used to guide management decisions.                       |
| Raw Data Vault          | A uniquely linked set of normalized tables that support one or more functional areas of business and provides historical tracking. |
| Business Data Vault     | This layer represents the data following the application of the soft business rules that may be required.                          |
| Data Mart               | A subset of data stored within the data warehouse, for the needs of a specific team, section or department within the enterprise.  |
| Master Data Services    | Microsoft's solution for handling "master" data within an enterprise.                                                              |
| File Export             | A file or series of files that contain a subset of the data in a Data Warehouse.                                                   |
| Landing Area            | Only applicable to Cloud Enabled Connections.                                                                                      |
