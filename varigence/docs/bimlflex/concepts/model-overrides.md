---
title: BimlFlex Model Overrides
description: Explanation of Model Override concept in BimlFlex
tags: [BimlFlex, Conceptual]
---
# Model Overrides

## Model Override Name

The Override name to use for the accelerated column.

Use this to translate source column names to business entity names. This will allow the Data Vault to use business names while the source to staging and persistent staging uses the source names.

In the trial, a model override name is applied to the Product table. The `ThumbNailPhoto` column name does not match the naming convention used by the business analysts and a requirement has been presented to name it `ThumbnailPhoto` instead.

This changes the casing for the `N` in the name to `n` to match business naming conventions. The column will be staged using the original column name to match the source and will be accelerated to the business process-aligned name in the Data Vault.

Use the column ModelOverrideName to override the name to be used in the Data Vault.

| Object Name     | ColumnName     | ModelOverrideName |
| --------------- | -------------- | ----------------- |
| SalesLT.Product | ThumbNailPhoto | ThumbnailPhoto    |

This will override the names used in the Data Vault. This exemplifies the naming convenience in BimlFlex.

## Model Grouping

Is used by the Data Vault Accelerator to group columns into different Satellites and Links/Unit of Work.

Allows a single source table to populate multiple destination Satellites. Breaking attributes into separate Satellites is used to manage different storage requirements or change rates.

The default naming convention accelerates Satellites with the same name as the primary Hub object. The `SalesLT.Customer` source table is of Object candidate type `Hub` so it will accelerate to a `HUB_Customer` for the Integration Key and all attributes will be accelerated to a `SAT_Customer_AWLT`.

For the trial process, add `Password` to the `ModelGrouping` column for the `SalesLT.Customer` Objects `PasswordHash` and `PasswordSalt` columns. These 2 columns will be accelerated into a separate Satellite named `SAT_Customer_Password_AWLT`.

This allows the password-related fields to be treated differently with ease.

BimlFlex also employs row compression on different change sets. This means that a change in the `Phone` column will result in a new row in the standard satellite and no change to the `Password` Satellite whereas an updated password generates a new row only in the `Password` Satellite.

For the AdventureWorksLT Source table columns, add Model Grouping information to the following columns.

| Column Name                            | Model Grouping |
| -------------------------------------- | -------------- |
| SalesLT.Product.StandardCost           | Price          |
| SalesLT.Product.ListPrice              | Price          |
| SalesLT.Product.ThumbNailPhoto         | Thumbnail      |
| SalesLT.Product.ThumbnailPhotoFileName | Thumbnail      |
| SalesLT.Customer.PasswordHash          | Password       |
| SalesLT.Customer.PasswordSalt          | Password       |

This will Accelerate 3 satellites from the Product source table and an additional one for the Customer source.

These changes demonstrate the model grouping feature and the ability to accelerate out several Satellites with their storage options and rate of change management through the BimlFlex row compression feature.

This will also assist in illustrating the creation of Point In Time constructs later.

## Model Reference

The Model Reference is a friendly name for the connection to another entity. BimlFlex uses this to drive the naming of Links from referenced tables. BimlFlex derives a default name for all reference columns by removing the suffix from the name.

As an example, the source column `ProductCategoryId` becomes `ProductCategory_BK` as the referencing Integration key and its ModelReference becomes `ProductCategory`.