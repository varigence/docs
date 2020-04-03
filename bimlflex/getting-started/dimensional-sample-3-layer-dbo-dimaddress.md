# Dim Customer source view

Sample View Creation Script for a Dimension table load.

This is created in the Data Vault layer and is part of a source to target mapping or load process for Dimension table loads.

```sql
----------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 3 layer approach on top of the 
-- Business Data Vault performance constructs (Bridge, Point In Time table)
-- These views present a source layer for the dimension load process from Data Vault to Data Mart
-- (c) 2019 - Varigence
----------------------------------------------------------------------------------------------------
USE [BFX_RDV]
GO

CREATE OR ALTER VIEW [dbo].[dimAddress] 
AS

SELECT	 pc.[Address_BK]
		,sa.[AddressLine1]
		,sa.[AddressLine2]
		,sa.[City]
		,sa.[StateProvince]
		,sa.[CountryRegion]
		,sa.[PostalCode]
FROM	[rdv].[PIT_Address] pc
INNER JOIN [rdv].[SAT_Address_awlt] sa
	ON	pc.[SAT_Address_awlt_Address_SK] = sa.[Address_SK]
	AND	pc.[SAT_Address_awlt_FlexRowEffectiveFromDate] = sa.[FlexRowEffectiveFromDate]
GO
```