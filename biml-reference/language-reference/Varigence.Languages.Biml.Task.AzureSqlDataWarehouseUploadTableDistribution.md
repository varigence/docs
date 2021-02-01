---
uid: biml-azuresqldatawarehouseuploadtabledistribution-enumeration
title: AzureSqlDataWarehouseUploadTableDistribution Enumeration
varigenceProduct: Biml Langauge
varigenceArticleType: Reference
---

## AzureSqlDataWarehouseUploadTableDistribution Enumeration<div class="LanguageSummary"><div class ="SummaryItem">Provides options for the distribution method of new tables.</div></div><div class="EnumValueGroup">### Enumeration Values<table id="EnumValue" class="MemberList"><tbody><tr><th class="MemberTypeIconColumnHeader">&nbsp;</th><th class="MemberNameColumnHeader">Name</th><th class="MemberSummaryColumnHeader">Summary</th></tr><tr class="cd0"><td align="center" class="MemberTypeIcon"><img src="enumValue.png"></img></td><td class="MemberName">Hash</td><td class="MemberSummary"><div class ="SummaryItem">Distributes rows across the Compute nodes through a deterministic hash function in order to assign each row to a distribution.</div></td></tr><tr class="cd1"><td align="center" class="MemberTypeIcon"><img src="enumValue.png"></img></td><td class="MemberName">RoundRobin</td><td class="MemberSummary"><div class ="SummaryItem">Distributes table rows evenly across all distributions. Unlike Hash-distributed tables, rows with equal values are not guaranteed to be assigned to the same distribution.</div></td></tr></tbody></table></div>