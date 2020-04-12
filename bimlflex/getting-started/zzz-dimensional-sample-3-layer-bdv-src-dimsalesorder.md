# Dim SalesOrder source view

<!-- TODO: Delete as covered in sample metadata now -->

Sample View Creation Script for a Dimension table load.

This is created in the Data Vault layer and is part of a source to target mapping or load process for Dimension table loads.

```sql
----------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 3 layer approach on top of the Business Data Vault performance constructs (Bridge, Point In Time table)
-- These views present a source layer for the dimension load process from Data Vault to Data Mart
-- (c) 2019 - Varigence
----------------------------------------------------------------------------------------------------
USE BFX_RDV
GO

-- Create schema src. This schema is used for the source objects used to load the next layer
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'src') EXEC ('CREATE SCHEMA [src] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW src.DimSalesOrder
AS
SELECT
  -- Dimension integration key, this is used for fact to dimension lookups later
  pso.SalesOrderHeader_BK
  -- dimension attributes, defined as type 1 or type 2 in the destination table
  , s.SalesOrderID
  , s.SalesOrderNumber
  , s.PurchaseOrderNumber
  , s.AccountNumber
FROM rdv.PIT_SalesOrder pso
INNER JOIN rdv.SAT_SalesOrder_AWLT s ON s.SalesOrder_SK = pso.SAT_SalesOrder_AWLT_SalesOrder_SK AND s.FlexRowEffectiveFromDate = pso.SAT_SalesOrder_AWLT_FlexRowEffectiveFromDate
WHERE pso.FlexRowEffectiveToDate = '9999-12-31'
```