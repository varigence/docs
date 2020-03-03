# Dim SalesOrder source view

Sample View Creation Script for a Dimension table load.

This is created in the Staging layer and is part of a source to target mapping or load process for Dimension table loads.

```sql
----------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 2 layer approach
-- These views present a source layer for the dimension load process from staging directly to data mart
-- (c) 2019 - Varigence
----------------------------------------------------------------------------------------------------
USE BFX_STG
GO

-- Create schema src. This schema is used for the source objects used to load the next layer
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'src') EXEC ('CREATE SCHEMA [src] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW src.DimSalesOrder
AS
SELECT
    SalesOrderHeader_BK
  , SalesOrderID
  , SalesOrderNumber
  , PurchaseOrderNumber
  , AccountNumber
FROM (
  SELECT
    -- Dimension integration key, this is used for fact to dimension lookups later
    SalesOrderHeader_BK
    -- dimension attributes, defined as type 1 or type 2 in the destination table
    , SalesOrderID
    , SalesOrderNumber
    , PurchaseOrderNumber
    , AccountNumber
  -- Derive IsCurrent Flag
  , ROW_NUMBER() OVER(PARTITION BY SalesOrderHeader_BK ORDER BY FlexRowEffectiveFromDate DESC) AS IsCurrent
  FROM AWLT.SalesOrderHeader
) AWLT_SalesOrderHeader
WHERE IsCurrent = 1
```
