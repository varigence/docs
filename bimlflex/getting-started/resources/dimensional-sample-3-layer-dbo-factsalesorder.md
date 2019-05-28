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

CREATE OR ALTER VIEW [dbo].[factSalesOrder] 
AS

SELECT	 psod.[PIT_SalesOrderLine_SK] AS [FactSalesOrderLine_BK]
		,pc.[Customer_BK]
		,pp.[Product_BK]
		,pba.[Address_BK] AS [BillToAddress_BK]
		,psa.[Address_BK] AS [ShipToAddress_BK]
		,ssoh.[OrderDate]
		,ssoh.[DueDate]
		,ssoh.[ShipDate]
		,CONVERT(INT, CONVERT(CHAR(8), ssoh.[OrderDate], 112)) AS [OrderDateKey]
		,CONVERT(INT, CONVERT(CHAR(8), ssoh.[DueDate], 112)) AS [DueDateKey]
		,CONVERT(INT, CONVERT(CHAR(8), ssoh.[ShipDate], 112)) AS [ShipDateKey]
		,ssoh.[Status]
		,ssoh.[SubTotal]
		,ssoh.[TaxAmt]
		,ssoh.[Freight]
		,ssoh.[TotalDue]
		-- SalesOrderLine
		,ssod.[OrderQty]
		,ssod.[UnitPrice]
		,ssod.[UnitPriceDiscount]
		,ssod.[LineTotal]
FROM	[rdv].[PIT_SalesOrder] psoh
INNER JOIN [rdv].[BRG_SalesOrder] bsoh
	ON	psoh.[SalesOrder_SK] = bsoh.[SalesOrder_SK]
INNER JOIN [rdv].[SAT_SalesOrder_awlt] ssoh
	ON	psoh.[SAT_SalesOrder_awlt_SalesOrder_SK] = ssoh.[SalesOrder_SK]
	AND psoh.[SAT_SalesOrder_awlt_FlexRowEffectiveFromDate] = ssoh.[FlexRowEffectiveFromDate]
-- Customer
INNER JOIN [rdv].[PIT_customer] pc
	ON	bsoh.[LNK_SalesOrder_L1_customer_SK] = pc.[customer_SK]
	AND psoh.[FlexRowEffectiveFromDate] >= pc.[FlexRowEffectiveFromDate]
	AND psoh.[FlexRowEffectiveFromDate] < pc.[FlexRowEffectiveToDate]
-- ShipToAddress
INNER JOIN [rdv].[PIT_address] psa
	ON	bsoh.[LNK_SalesOrder_L1_ShipToAddress_SK] = psa.[Address_SK]
	AND psoh.[FlexRowEffectiveFromDate] >= psa.[FlexRowEffectiveFromDate]
	AND psoh.[FlexRowEffectiveFromDate] < psa.[FlexRowEffectiveToDate]
-- BillToAddress
INNER JOIN [rdv].[PIT_address] pba
	ON	bsoh.[LNK_SalesOrder_L1_BillToAddress_SK] = pba.[address_SK]
	AND psoh.[FlexRowEffectiveFromDate] >= pba.[FlexRowEffectiveFromDate]
	AND psoh.[FlexRowEffectiveFromDate] < pba.[FlexRowEffectiveToDate]
-- SalesOrderLine
INNER JOIN [rdv].[BRG_SalesOrderLine] bsod
	ON	psoh.[SalesOrder_SK] = bsod.[LNK_SalesOrderLine_L1_SalesOrder_SK]
INNER JOIN [rdv].[PIT_SalesOrderLine] psod
	ON	bsod.[SalesOrderLine_SK] = psod.[SalesOrderLine_SK]
	AND psoh.[FlexRowEffectiveFromDate] >= psod.[FlexRowEffectiveFromDate]
	AND psoh.[FlexRowEffectiveFromDate] < psod.[FlexRowEffectiveToDate]
INNER JOIN [rdv].[SAT_SalesOrderLine_awlt] ssod
	ON	psod.[SAT_SalesOrderLine_awlt_SalesOrderLine_SK] = ssod.[SalesOrderLine_SK]
	AND psod.[SAT_SalesOrderLine_awlt_FlexRowEffectiveFromDate] = ssod.[FlexRowEffectiveFromDate]
-- Product
INNER JOIN [rdv].[PIT_product] pp
	ON	bsod.[LNK_SalesOrderLine_L1_product_SK] = pp.[product_SK]
	AND psoh.[FlexRowEffectiveFromDate] >= pp.[FlexRowEffectiveFromDate]
	AND psoh.[FlexRowEffectiveFromDate] < pp.[FlexRowEffectiveToDate]
GO
```