# Fact SalesOrder source view

Sample View Creation Script for a Fact table load.

This is created in the Staging layer and is part of a source to target mapping or load process for Fact table loads.

```sql
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 2 layer approach
-- These views present a source layer for the dimension load process from staging directly to data mart
-- (c) 2019 - Varigence
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
USE BFX_STG
GO

-- Create schema src. This schema is used for the source objects used to load the next layer
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'src') EXEC ('CREATE SCHEMA [src] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW src.FactSalesOrder
AS
SELECT
    SalesOrderHeader_BK
  , Customer_BK
  , OrderDate_DateKey
  , ShipDate_DateKey
  , OrderCount
  , SubTotal
  , TaxAmt
  , Freight
  , TotalDue
FROM (
  SELECT
  -- Fact Integration Key, identifies a fact row
    SalesOrderHeader_BK
  -- Dimension integration key references, these are used for dimension lookups
  , Customer_BK
  -- Dimension smart keys, these are used as is in the fact without lookups
  , CONVERT(INT, CONVERT(CHAR(8), ssoh.OrderDate, 112)) AS OrderDate_DateKey
  , CONVERT(INT, CONVERT(CHAR(8), ssoh.ShipDate, 112)) AS ShipDate_DateKey
  -- Fact metrics
  , 1 AS OrderCount
  , SubTotal
  , TaxAmt
  , Freight
  , TotalDue
  -- Derive IsCurrent Flag
  , ROW_NUMBER() OVER(PARTITION BY SalesOrderHeader_BK ORDER BY FlexRowEffectiveFromDate DESC) AS IsCurrent
  FROM AWLT.SalesOrderHeader
) AWLT_SalesOrderHeader
WHERE IsCurrent = 1

GO
```