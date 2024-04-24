---
uid: biml-teradatabuffermode-enumeration
title: TeradataBufferMode Enumeration
varigenceProduct: Biml Language
varigenceArticleType: Reference
---

## TeradataBufferMode Enumeration<div class="LanguageSummary"><div class ="SummaryItem">Provides options for setting the buffering mode during Teradata extracts and loads.</div></div><div class="EnumValueGroup">### Enumeration Values<table id="EnumValue" class="MemberList"><tbody><tr><th class="MemberNameColumnHeader">Name</th><th class="MemberSummaryColumnHeader">Summary</th></tr><tr class="cd0"><td class="MemberName">ProcessRowByRow</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that no buffering should be used in a Teradata Source or Destination component.  Instead, each row should be processed individually.</div></td></tr><tr class="cd1"><td class="MemberName">ProcessBufferedRows</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that a buffer should be used when processing data from Teradata Source and Destination components.  The size of the buffer is specified in another property on those components.</div></td></tr></tbody></table></div>