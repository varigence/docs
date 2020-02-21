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

CREATE OR ALTER VIEW [dbo].[dimProduct] 
AS
SELECT	 pp.[Product_BK]
		,sp.[ProductID]
		,sp.[Name] AS [ProductName]
		,sp.[ProductNumber]
		,sp.[Color]
		,sp.[StandardCost]
		,sp.[ListPrice]
		,sp.[Size]
		,sp.[Weight]
		,sp.[DiscontinuedDate]
		,spc.[ProductCategoryID]
		,spc.[Name] AS [ProductCategoryName]
		,spm.[ProductModelID]
		,spm.[Name] AS [ProductModelName]
FROM	[rdv].[PIT_Product] pp
INNER JOIN [rdv].[SAT_Product_awlt] sp
	ON	pp.[SAT_Product_awlt_Product_SK] = sp.[Product_SK]
	AND	pp.[SAT_Product_awlt_FlexRowEffectiveFromDate] = sp.[FlexRowEffectiveFromDate]
-- ProductCategory
INNER JOIN [rdv].[BRG_Product] bp
	ON	pp.[Product_SK] = bp.[Product_SK]
INNER JOIN [rdv].[PIT_ProductCategory] ppc
	ON	bp.[LNK_Product_ProductCategory_L1_ProductCategory_SK] = ppc.[ProductCategory_SK]
	AND pp.[FlexRowEffectiveFromDate] >= ppc.[FlexRowEffectiveFromDate]
	AND pp.[FlexRowEffectiveFromDate] < ppc.[FlexRowEffectiveToDate]
INNER JOIN [rdv].[SAT_ProductCategory_awlt] spc
	ON	ppc.[SAT_ProductCategory_awlt_ProductCategory_SK] = spc.[ProductCategory_SK]
	AND	ppc.[SAT_ProductCategory_awlt_FlexRowEffectiveFromDate] = spc.[FlexRowEffectiveFromDate]
-- ProductModel
INNER JOIN [rdv].[PIT_ProductModel] ppm
	ON	bp.[LNK_Product_ProductModel_L2_ProductModel_SK] = ppm.[ProductModel_SK]
	AND pp.[FlexRowEffectiveFromDate] >= ppm.[FlexRowEffectiveFromDate]
	AND pp.[FlexRowEffectiveFromDate] < ppm.[FlexRowEffectiveToDate]
INNER JOIN [rdv].[SAT_ProductModel_awlt] spm
	ON	ppm.[SAT_ProductModel_awlt_ProductModel_SK] = spm.[ProductModel_SK]
	AND	ppm.[SAT_ProductModel_awlt_FlexRowEffectiveFromDate] = spm.[FlexRowEffectiveFromDate]
GO
```
