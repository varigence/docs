---
uid: bimlflex-reference-documentation-setting-EnableEndDatePsa
title: BimlFlex Settings Definition for EnableEndDatePsa
summary: Documentation of settings option within BimlFlex for EnableEndDatePsa
varigenceProduct: BimlFlex
varigenceArticleType: Reference
---

# Enable End Date

Apply end dating in the PSA. This will allow timelines to be maintained in the PSA. Using end dating requires more resources since updates are applied on the PSA, but allows queries to directly reuse complete effective from and to dates for each record in the PSA. Disable this to configure an insert-only approach for the PSA for optimized load performance.

Notes:

* This setting is part of the *Staging Persistent* settings category.
* The default value for this setting is `N`.