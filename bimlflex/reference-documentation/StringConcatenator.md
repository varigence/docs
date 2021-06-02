---
uid: bimlflex-app-reference-documentation-setting-StringConcatenator
title: BimlFlex Settings Definition for StringConcatenator
summary: Documentation of settings option within BimlFlex for StringConcatenator
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# String Concatenator

The string value used in concatenating Integration Keys and Hash values (sanding element). Defaults to "~".

For a source column with an "SsisDataflowExpression" using the "FlexToBk(@@rs,ProductId,OtherAttribute)" expression the resulting string Integration Key would be similar to "AWLT~680~XYZ", concatenating the record source of the connection, the ProductId column value and the OtherAttribute column value.

Notes:

* This setting is part of the `Core` settings category.
* The default value for this setting is `~`.