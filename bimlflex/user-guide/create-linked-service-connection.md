---
uid: create-linked-service-connection
title: Configuring a Linked Service Connection
---
# Configuring a Linked Service Connection

[//]: # (Include a summary of Linked Service purpose and use in connections)

Connections can be enabled to work with cloud based linked services.

## Enable Connection for Cloud Services

In the `Connections` module click `+ Add` in the top left of the screen; or select an existing connection to edit.

In the `Details` tab of the connection form, select the `Integration Stage`, `Connection Type`, and `System Type` for your connection. If the configuration provided supports linked service access, a `Cloud` setting will appear in the top right of the connection form.

After toggling the `Cloud` setting, a tab for Linked Services will appear at the bottom of the form and any availble linked services will appear in the `Linked Service Types` dropdown. Select a `Linked Service Type` to configure it.

## Configuring Linked Service

The linked service form is modeled after the selected `Linked Service Type`. Refer to the documentation for the linked service you have selected for questions about the form. 

For information on ADF Linked Service types and their connection requirements see [Azure Data Factory Connector documentation](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview).

[//]: # (**`Connect via Integration Runtime`** is required for all linked services. The default value `AutoResolveIntgrationRuntime` will use the integration runtime defined in \(your project / your linked service\).)
