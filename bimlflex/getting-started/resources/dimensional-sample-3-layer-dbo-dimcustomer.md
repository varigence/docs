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

CREATE OR ALTER VIEW [dbo].[dimCustomer] 
AS

SELECT	 pc.[Customer_BK]
		,sc.[Title]
		,sc.[FirstName]
		,sc.[MiddleName]
		,sc.[LastName]
		,sc.[Suffix]
		,scp.[NameStyle]
		,scp.[CompanyName]
		,scp.[SalesPerson]
		,scp.[EmailAddress]
		,scp.[Phone]
FROM	[rdv].[PIT_Customer] pc
INNER JOIN [rdv].[SAT_Customer] sc
	ON	pc.[SAT_Customer_Customer_SK] = sc.[Customer_SK]
	AND	pc.[SAT_Customer_FlexRowEffectiveFromDate] = sc.[FlexRowEffectiveFromDate]
INNER JOIN [rdv].[SAT_Customer_Details_awlt] scp
	ON	pc.[SAT_Customer_Details_awlt_Customer_SK] = scp.[Customer_SK]
	AND	pc.[SAT_Customer_Details_awlt_FlexRowEffectiveFromDate] = scp.[FlexRowEffectiveFromDate]
```
