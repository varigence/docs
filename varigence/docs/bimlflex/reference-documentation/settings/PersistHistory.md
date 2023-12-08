---
title: BimlFlex Settings Definition for PersistHistory
description: Documentation of settings option within BimlFlex for PersistHistory
tags: [BimlFlex, Reference]
---

# Persist History

Provides an option to override the [Connection](../entities/Connection) level attribute `PersistHistory` for more granular control.

If you want to have some tables persisted, but not all, then you can not define this at Connection level as an override. This can be used to override the Connection level attribute `PersistHistory` for more granular control.

If some objects in the connection should be persisted and some should not, override the behavior from the connection through this setting.

Notes:

* This setting is part of the *Staging* settings category.

