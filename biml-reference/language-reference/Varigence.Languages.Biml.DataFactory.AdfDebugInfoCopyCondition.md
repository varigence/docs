---
uid: biml-adfdebuginfocopycondition-enumeration
title: AdfDebugInfoCopyCondition Enumeration
varigenceProduct: Biml Language
varigenceArticleType: Reference
---

## AdfDebugInfoCopyCondition Enumeration<div class="LanguageSummary"><div class ="SummaryItem">The AdfDebugInfoCopyCondition enumeration provides options for determining when log files containing debug information should be copied to the Azure Storage account associated with an HDInsight cluster.</div></div><div class="EnumValueGroup">### Enumeration Values<table id="EnumValue" class="MemberList"><tbody><tr><th class="MemberNameColumnHeader">Name</th><th class="MemberSummaryColumnHeader">Summary</th></tr><tr class="cd0"><td class="MemberName">None</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that log files will never be copied.</div></td></tr><tr class="cd1"><td class="MemberName">Always</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that log files will be copied for every script execution.</div></td></tr><tr class="cd0"><td class="MemberName">Failure</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that log files will only be copied when there is a failure during script execution.</div></td></tr></tbody></table></div>