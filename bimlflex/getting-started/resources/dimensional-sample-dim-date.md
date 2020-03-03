# Date Dimension

Sample View Creation Script for a Date Dimension.

This is created in the Data Mart and is not part of a source to target mapping or load process. This illustrates how existing and external Dimensions can be used in BimlFlex.

```sql
----------------------------------------------------------------------------------------------------
-- Date Dimension. This is a virtual dimension that provides a date list from 2000 to 2020. It is implemented in the DM and referenced in the Fact table through smart keys.
-- For Date dimension requirements that include table processing and flags etc, consider using a source to target load process as for a normal dimension and then pre- and post-process the dimension as needed.
-- (c) - Varigence 2019
----------------------------------------------------------------------------------------------------

USE BFX_DM
GO

-- create schema Dim. This schema is used for the Dimension objects
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'Dim') EXEC ('CREATE SCHEMA [Dim] AUTHORIZATION [dbo]')
GO

CREATE OR ALTER VIEW Dim.Date
AS (
SELECT
   CONVERT(INT, CONVERT(VARCHAR(10), d, 112)) [DateKey]
  ,CONVERT(DATE, d) [Date]
  ,CONVERT(TINYINT, DATEPART(dd,d)) [DayOfMonth]
  ,CONVERT(VARCHAR(10), DATENAME(w, d)) [WeekdayName]
  ,CONVERT(TINYINT, DATEPART(mm,d)) [Month]
  ,CONVERT(VARCHAR(10), DATENAME(mm,d)) [MonthName]
  ,CONVERT(INT, DATEPART(yy,d)) [Year]
  ,CASE WHEN d = CAST(GETDATE() AS DATE) THEN 1 ELSE 0 END AS CurrentDateFlag
FROM
  (
    SELECT d
    FROM
    (
      SELECT DATEADD(DAY, rn - 1, '2000-01-01') d
      FROM
      (
        SELECT TOP (DATEDIFF(DAY, '2000-01-01', '2020-12-31'))
          ROW_NUMBER() OVER (ORDER BY sao1.[object_id]) rn
        FROM sys.all_objects sao1
        CROSS JOIN sys.all_objects sao2
      ) q1
    ) q2
  ) dates
)
```
