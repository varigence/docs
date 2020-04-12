# Fact SalesOrder source view

<!-- TODO: Delete as covered in sample metadata now -->

Sample View Creation Script for a Fact table load.

This is created in the Data Vault layer and is part of a source to target mapping or load process for Fact table loads.

```sql
----------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 3 layer approach on top of the Raw Data Vault (Hub, Link, Satellite)
-- These views present a source layer for the dimension load process from Data Vault to Data Mart
-- (c) 2019 - Varigence
----------------------------------------------------------------------------------------------------
USE BFX_RDV
GO

-- Create schema src. This schema is used for the source objects used to load the next layer
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'src') EXEC ('CREATE SCHEMA [src] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW src.FactSalesOrder
AS
SELECT
  -- Fact Integration Key, identifies a fact row
    pso.SalesOrderHeader_BK
  -- Dimension integration key references, these are used for dimension lookups
    pso.SalesOrderHeader_BK AS DimSalesOrderHeader_BK
  , hc.Customer_BK
  -- Dimension smart keys, these are used as is in the fact without lookups
  , CONVERT(INT, CONVERT(CHAR(8), ssoh.OrderDate, 112)) AS OrderDate_DateKey
  , CONVERT(INT, CONVERT(CHAR(8), ssoh.ShipDate, 112)) AS ShipDate_DateKey
  -- Fact metrics
  , 1 AS OrderCount
  , ssoh.SubTotal
  , ssoh.TaxAmt
  , ssoh.Freight
  , ssoh.TotalDue
FROM rdv.PIT_SalesOrder pso
INNER JOIN rdv.BRG_SalesOrder bso ON bso.SalesOrder_SK = pso.SalesOrder_SK
INNER JOIN rdv.SAT_SalesOrder_AWLT ssoh ON ssoh.SalesOrder_SK = pso.SAT_SalesOrder_AWLT_SalesOrder_SK AND ssoh.FlexRowEffectiveFromDate = pso.SAT_SalesOrder_AWLT_FlexRowEffectiveFromDate
INNER JOIN rdv.HUB_Customer hc ON hc.Customer_SK = bso.Customer_SK
WHERE pso.FlexRowEffectiveToDate = '9999-12-31'
```