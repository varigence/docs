---
uid: bimlflex-app-reference-documentation-setting-SsdtDefaultExternalFileFormat
title: BimlFlex Settings Definition for SsdtDefaultExternalFileFormat
summary: Documentation of settings option within BimlFlex for SsdtDefaultExternalFileFormat
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Default External File Format

The default External File Format SQL Statement to use.

Notes:
* This setting is part of the `SSDT` settings category.
* The default value for this setting is `CREATE EXTERNAL FILE FORMAT [pipe_zip_format]
    WITH (
        FORMAT_TYPE = DELIMITEDTEXT,
        FORMAT_OPTIONS (
            FIELD_TERMINATOR = N'|',
            USE_TYPE_DEFAULT = FALSE
        ),
        DATA_COMPRESSION = N'org.apache.hadoop.io.compress.GzipCodec'
    );`.