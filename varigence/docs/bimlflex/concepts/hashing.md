---
sidebar_position: 5
title: Hashing
description: Overview of hashing concepts as available in BimlFlex
tags: [BimlFlex, Conceptual]
---
# Introduction to hashing in BimlFlex

Hashing is the term used for one-way encryption which can be implemented by applying a selected encryption algorithm. BimlFlex provides various approaches for implementing hashing techniques for the data solution

BimlFlex uses hashing in two common scenarios, for generating surrogate Data Warehouse keys (as hash-based keys) and for row checksums to simplify identifying changes to attributes.

Hashing keys to generate Data Warehouse keys allows integration keys to be loaded in a deterministic way from multiple sources in parallel. This also removes the need for key lookups between related entities.

Hashing row checksums for identifying changes allows the load process to compare a single generated hash to identify if an attribute has changed for a key. This allows for flexible and fast loading of only changes to data.

BimlFlex provides two main ways of hashing:

* Using a custom SSIS component that provides hashing of data in the SSIS Data Flow Task for SSIS-based loads
* Using the SQL `HASHBYTES()` script function in ELT code

## Hash configurations

Both of these approaches provides a set of optional configurations and settings. The hashing approach in the SSIS packages are controlled through the following settings:

| SettingKey              | SettingValue | Description |
| ----------              | ------------ | ----------- |
| HashAlgorithm           | `SHA1`       | Hashing Algorithm (`MD5`, `SHA1`, `SHA2_256`, `SHA2_512`) |
| HashBinary              | `N`          | Binary or String hash representation (`Y`, `N`) |
| HashIntegrationKey      | `N`          | Should the Object's Integration Key be hashed. This is always applied for loads with a [Data Vault])xref:bimlflex-data-vault-index) target model (`Y`, `N`) |
| UseSqlCompatibleHash    | `Y`          | Should the Integration Key hashing use a SQL `HASHBYTES()` compatible pattern (`Y`, `N`) |
| UseSqlCompatibleRowHash | `Y`          | Should the row checksum hashing use a SQL `HASHBYTES()` compatible pattern (`Y`, `N`) |

### Hash representation

This defines how the resulting hash value is stored

* String representation, the resulting hash is stored using the text representation of the binary hash value. This makes the hash value legible and can easily be copied and stored in plain text format
* Binary representation, the hash is stored in its native, binary form. This requires less storage however is not as well suited for readability or agnostic storage

When considering the hash data type, storage requirements and SQL Server performance is one aspect, while direct joinability to other sources without converting the hash is another.

### Hash algorithm

The cryptographic algorithm used to derive the hash. The different algorithms result in differently sized hash values, require different amount of processing power and have different risks for key collisions.

* MD5
* SHA1
* SHA2_256
* SHA2_512

### Data Types and storage requirements for hash columns

| Hash Algorithm | String representation | Binary Representation |
| -------------- | --------------------- | --------------------- |
| `MD5`          | char(32)              | binary(16)            |
| `SHA1`         | char(40)              | binary(20)            |
| `SHA2_256`     | char(64)              | binary(32)            |
| `SHA2_512`     | char(128)             | binary(64)            |

## Attribute Separators and Field Order

The hash algorithm runs its logic on a single input object. For data warehousing scenarios, the fields that are part of the hash are all concatenated together into a single string.

When hashing multiple concatenated values it is important to separate them to distinguish patterns. This is sometimes called hash or field concatenator, separator or sanding value. The default field separator in BimlFlex is `~` and it is configurable in the settings. This is used so that hashing `A` and `BC` generates a different hash compared to `AB` and `C`. without the separator both scenarios would generate the input value `ABC` to the hashing process and result in identical hash values, whereas using the separator gives either `A~BC` or `AB~C`, resulting in different hashes. The separator is also used in the Integration Key creation when concatenating multiple fields into a single string Integration Key representation.

The hash is dependent on the order of the included attributes. For the row hash BimlFlex orders the columns in the same order as they are ordered in the metadata. This is controlled by the `Ordinal` metadata attribute. This is a flexible approach and, for instance, allows a column to be renamed without affecting the hash outcome.

## Null value replacements

it is not possible to hash a null value, therefore the BimlFlex hashing procedure has an optional null value replacement value. The default value is `NVL` and it is configurable in the settings.

## Hashing Integration Keys

A Business or Integration key is used as the main identifier for entities. This is most commonly used as the base key for Hub entities using [Data Vault](../delivering-data-vault) methodology. BimlFlex has a built in feature to convert source columns and concatenate them into a Integration Key. There is also an optional setting to upper case the string. This is useful where the database is case insensitive and keys with different casings are considered the same entity. As different casings are hashed to different hash values whereas the database engine would consider Integration Keys with different casings to be the same this provides a convenient way to automatically align all Integration Keys. BimlFlex always store the original values in Satellites by default, so no data is lost in this process.

Sample Script used for hashing Integration Keys. When using AdventureWorksLT and the Product table the following hashes are created by the SQL Compatible SSIS Hashing component and they can be recreated using SQL Server `HASHBYTES()` and the below sample script.

## Hashing Row Checksums

A row hash is a hash of all relevant attributes in the row and is mainly used to identify changes to records. In the default source to staging to persistent staging pattern there is a lookup that compares the stored row hash in the persistent staging with the new row hash to see if there has been a change to any attributes or if the row should be ignored.

Special consideration for changes in the row change type indicator is normally required. This is due to the fact that a row with the same attributes but with a change indicator indicating it has been deleted would result in the same attribute hash but completely different meaning in the data warehouse.

## Key collisions

There is a risk for key collisions using hashing where different values generate the same key. This is a calculated risk in using hashing and a collision mitigation strategy should be in place for the integration process to accommodate these potential issues should they arise. It is out of the scope of this article to detail the mathematical background information or gauge the risk or the required responses to that risk.

## Hash compatibility

The most important part of using hashing of data is a consistent behavior, so that the same input value results in the same hash value. This is especially true when hashing data from different systems using different tools and approaches are used for hashes where they will be used for joining and linking at a later stage. For this compatibility, BimlFlex provides a `HASHBYTES()` compatible hashing approach that allows other systems to hash using the same approach so that matching is possible. This document details the hashing approach so that it is easy to replicate the approach either manually in SQL or in a different process.

## Using deterministic representation in hash input

Some data types, such as dates and date times have culture specific representations as the default in certain scenarios. To ensure deterministic hashing these data types are converted to strings with a format applied. This allows the same input value to be derived regardless of the current culture or default implicit string conversion of the current environment.

## Hashing approximate and complex data types

Some data types are by definition approximate representations. In SQL Server they are represented by the `real` and `float` data types. Depending on the values and the processing entity the actual value used in the hashing might be different. For example, SQL and SSIS store some values slightly different. For these scenarios it is important to note that the generated hash is not deterministic and can lead to different hash values for the apparent same input value. In most scenarios this will only lead to the occasional added row when a change has not occurred. For scenarios where this is not acceptable, consider using exact numeric data types.

Some complex data types, such as `geography`, `geometry`, `hierarchyid` and `image`, don't have obvious string representations and can therefore be interpreted differently by different hashing approaches. For scenarios where these data types are used and a deterministic hashing is needed, consider manually converting them to a string, known format, or object representation before hashing.

## Sample comparison script

The below SQL Script queries the AdventureWorksLT staging table for the AWLT.Product table and recreates the SSIS derived hash for the Integration Key and Row hash using SQL `HASHBYTES()` syntax. Note the use of `CAST` and `CONVERT` with formats.

```sql
SELECT

CONVERT(CHAR(40), HASHBYTES('SHA1', CONVERT(NVARCHAR(MAX),
    COALESCE(LTRIM(RTRIM(CAST(Product_BK AS NVARCHAR(100)))), 'NVL')
)),2) AS FlexRowHashKeyInSql,

FlexRowHashKey,

CONVERT(CHAR(40), HASHBYTES('SHA1', CONVERT(NVARCHAR(MAX),
    COALESCE(LTRIM(RTRIM(CAST([ProductID] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([Name] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([ProductNumber] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([Color] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(100), [StandardCost],2 ))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(100), [ListPrice],2 ))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([Size] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([Weight] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([ProductCategoryID] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([ProductModelID] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(30), [SellStartDate], 127))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(30), [SellEndDate], 127))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(30), [DiscontinuedDate], 127))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST([ThumbnailPhotoFileName] AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CAST(REPLACE(REPLACE([rowguid], '{',''),'}','')  AS NVARCHAR(100)))), 'NVL') +'~'+
    COALESCE(LTRIM(RTRIM(CONVERT(NVARCHAR(30), ModifiedDate, 127))), 'NVL')
)),2) AS FlexRowHashInSql,

FlexRowHash, *

FROM AWLT.Product ORDER BY ProductID
```
