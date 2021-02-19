---
uid: biml-adfazuretablesinkinserttype-enumeration
title: AdfAzureTableSinkInsertType Enumeration
varigenceProduct: Biml Language
varigenceArticleType: Reference
---

## AdfAzureTableSinkInsertType Enumeration<div class="LanguageSummary"><div class ="SummaryItem">The desired method for inserting data into Azure table. This setting determines whether existing rows in the ouput table with matching partition and row key have their values replaced or merged. Merge is the default value.</div></div><div class="EnumValueGroup">### Enumeration Values<table id="EnumValue" class="MemberList"><tbody><tr><th class="MemberNameColumnHeader">Name</th><th class="MemberSummaryColumnHeader">Summary</th></tr><tr class="cd0"><td class="MemberName">Merge</td><td class="MemberSummary"><div class ="SummaryItem">Source properties will be retained even if the new entity didn't define new properties in the new entity.</div> </td></tr><tr class="cd1"><td class="MemberName">Replace</td><td class="MemberSummary"><div class ="SummaryItem">Replaces entire property of previous entity with new entity if the entity exists.</div> </td></tr></tbody></table></div>