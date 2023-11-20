---
title: BimlFlex Settings Definition for SsdtDefaultCredential
description: Documentation of settings option within BimlFlex for SsdtDefaultCredential
tags: [BimlFlex, Reference]
---

# Default Credential

The default Credential SQL Statement to use.

Notes:

* This setting is part of the *SSDT* settings category.
* The default value for this setting is `CREATE DATABASE SCOPED CREDENTIAL [bimlflex]
WITH
    IDENTITY = 'bimlflex',
    SECRET = '<Storage Key>';`.
