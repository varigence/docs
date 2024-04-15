---
uid: bimlflex-reference-documentation-setting-SsdtDefaultExternalDataSource
title: BimlFlex Settings Definition for SsdtDefaultExternalDataSource
summary: Documentation of settings option within BimlFlex for SsdtDefaultExternalDataSource
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Default External Data Source

The default External Data Source SQL Statement to use.

Notes:

* This setting is part of the *SSDT* settings category.
* The default value for this setting is `CREATE EXTERNAL DATA SOURCE [dwhload_storage]
    WITH (
        LOCATION = N'wasbs://staging@<accountname>.blob.core.windows.net'
        , TYPE = HADOOP
        , CREDENTIAL = [bimlflex]
    );`.
