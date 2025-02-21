---
uid: biml-containertransactionmode-enumeration
title: ContainerTransactionMode Enumeration
varigenceProduct: Biml Language
varigenceArticleType: Reference
---

## ContainerTransactionMode Enumeration<div class="LanguageSummary"><div class ="SummaryItem">The ContainerTransactionMode enumeration provides options for the transaction context of a given container.</div></div><div class="EnumValueGroup">### Enumeration Values<table id="EnumValue" class="MemberList"><tbody><tr><th class="MemberNameColumnHeader">Name</th><th class="MemberSummaryColumnHeader">Summary</th></tr><tr class="cd0"><td class="MemberName">Join</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that the execution of this container will join any currently running transaction, but run normally if there is not an existing transaction.</div></td></tr><tr class="cd1"><td class="MemberName">StartOrJoin</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that the execution of this container will join any currently running transaction, and start a new transaction if there is not an existing transaction.</div></td></tr><tr class="cd0"><td class="MemberName">NoTransaction</td><td class="MemberSummary"><div class ="SummaryItem">Specifies that the execution of this container will always run outside of a transaction.</div></td></tr></tbody></table></div>