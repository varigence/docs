---
title: BimlFlex Settings Definition for ExtractFileEncoding
description: Documentation of settings option within BimlFlex for ExtractFileEncoding
tags: [BimlFlex, Reference]
---

# Extract File Encoding

For an extracted file, specify a different encoding than the standard Unicode as produced by the BimlFlex source to file process. This setting will be ignored if the standard extract process is used and not overriden by an extension point. Valid choices are `ASCII`, `BigEndianUnicode`, `UTF32`, `UTF7`, `UTF8`, `Unicode`.

Notes:

* This setting is part of the *Staging* settings category.
* The default value for this setting is `Unicode`.
