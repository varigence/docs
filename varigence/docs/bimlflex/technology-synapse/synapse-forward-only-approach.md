---
sidebar_position: 3
title: Forward-Only Deployment
description: Background on supporting a forward-only approach for Synapse deployment
---
# Forward Only Deployment Approach

A forward-only deployment approach (migration plan) is recommended to work with Synapse, and it is how BimlFlex updates the generated data solution artifacts on the target Synapse platform.

This approach means that changes in the structures are applied as new version / structures in the target platform.

For example, when a table structure changes the forward-only approach will mean that a new table is created and the data is loading into this - as opposed to updating the table in place.
