# Dim Customer source view

Sample View Creation Script for a Dimension table load.

This is created in the Data Vault layer and is part of a source to target mapping or load process for Dimension table loads.

```sql
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Sample Source views for dimension loads for 3 layer approach on top of the Business Data Vault performance constructs (Bridge, Point In Time table)
-- These views present a source layer for the dimension load process from Data Vault to Data Mart
-- (c) 2019 - Varigence
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
USE BFX_RDV
GO

-- Create schema src. This schema is used for the source objects used to load the next layer
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'src') EXEC ('CREATE SCHEMA [src] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW src.DimCustomer
AS
SELECT
    -- Dimension integration key, this is used for fact to dimension lookups later
    pc.Customer_BK
    -- Dimension attributes, defined as type 1 or type 2 in the destination table
  , s.CustomerID
  , s.FirstName
  , s.LastName
  , s.EmailAddress
  , s.CompanyName
FROM rdv.PIT_Customer pc
INNER JOIN rdv.SAT_Customer_AWLT s ON s.Customer_SK = pc.Customer_SK AND s.FlexRowEffectiveFromDate = pc.SAT_Customer_AWLT_FlexRowEffectiveFromDate
WHERE pc.FlexRowEffectiveToDate = '9999-12-31'

GO
```