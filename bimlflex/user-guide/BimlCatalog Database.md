The BimlCatalog database explained

The BimlCatalog database contains the orchestration and run time information needed to properly load the data warehouse. It logs audit information and errors from processes and provides orchestration for batches in case failures occur mid load. 
Any parameter variable values are stored in the configuration tables. 

The catalog database is open and queryable and can be interacted with by the data warehousing team. 
It also provides an abstraction layer through Stored Procedures for interacting with the data. 
For reporting there are views provided that simplifies querying information about the loads.

