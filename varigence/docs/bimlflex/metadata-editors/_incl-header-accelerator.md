---
title: Accelerator
description: Overview of the BimlFlex Accelerator feature.
tags: [BimlFlex, Reference]
---
This guide provides information on using the BimlFlex [**Data Vault Accelerator**](./accelerator), which can be used to simplify the delivery of data solutions that adopt the [**Data Vault**](../delivering-data-vault) modeling approach.

The Accelerator allows the modeler to create and modify the target Data Vault from available source [**Objects**](./object-editor) and other modeled entities, such as views.

Initially, the Accelerator will use the available source metadata to suggest an initial Data Vault model. This provides a best-effort, though technical, representation of the ('Raw') Data Vault based on the references and constraints available in the source metadata. This initial technical Data Vault model can then be further modified and configured to complete the intended target Data Vault model.

The process for modifying the Data Vault towards the intended final result includes applying Business Names or [**Business Modeling**](./business-modeling), to provide the correct object names in the target model. This also involves defining additional Hub, Link, and Satellite objects, grouping and splitting objects, relationships, and/or columns as needed.

Multiple Links can be grouped together to create a single unit of work, or split back into multiple Links. Columns can be split into multiple Satellites, or grouped back into a single Satellite.

The Accelerator can be rerun as many times as necessary for incremental modeling and rapid (re)generation of the Data Vault model. In BimlFlex, changes to the model are recommended to be defined using the Accelerator as opposed to manually modifying the objects directly.



:::tip

The Varigence YouTube channel contains various introduction videos about using BimlFlex and BimlStudio. [This video](https://www.youtube.com/watch?v=w1UTANpF_ug?rel=0&autoplay=0) provides an overview of how to use the Data Vault Accelerator.

:::

