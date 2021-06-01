---
uid: bimlflex-app-reference-documentation-setting-SnowflakeFileFormat
title: BimlFlex Settings Definition for SnowflakeFileFormat
summary: Documentation of settings option within BimlFlex for SnowflakeFileFormat
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# File Format

The Snowflake file format to use.

Notes:
* This setting is part of the `Snowflake` settings category.
* The default value for this setting is `CREATE FILE FORMAT IF NOT EXISTS "PUBLIC".NOHEADER_PIPE_CSV_FORMAT COMPRESSION = 'GZIP' ESCAPE_UNENCLOSED_FIELD = NONE FIELD_DELIMITER = '|' RECORD_DELIMITER = '\n' SKIP_HEADER = 0 TRIM_SPACE = FALSE NULL_IF = ('\\N');`.