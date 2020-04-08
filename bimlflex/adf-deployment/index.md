---
uid: adf-deployment-overview
title: ADF Deployment Overview
---
# Azure Data Factory Deployment Overview

Azure Data Factory (ADF) is a common target for BimlFlex Data Warehouse Automation solutions. In this section we will discuss items that pertain to ADF deployment. Currently ADF only supports the ELT model. This means orchestration of SQL-based transformations only.

## Concurrent Development

The majority of BimlFlex deployments consist of several teams working on the same Data Warehouse at the same time. A successful combination of concurrent development and Data Warehouse management typically leverages several features in BimlFlex for support.

[More about Concurrent Development](concurrent-development.md)

## Continuous Integration and Continuous Delivery

One of the core features of the BimlFlex Data Warehouse Automation solution is that it can be used in a CI/CD pipeline. There are many different approaches used for CI/CD. Additionally, Data Warehouses have their own special considerations compared to the more generic CI/CD processes. BimlFlex is useful both in the manual automation of build and deployment steps using command line scripts, and the automatic build and processing of changes through a build server pipeline.

[More about Continuous Integration and Continuous Delivery](continuous-integration-and-continuous-delivery.md)

## Sensitive Information Management

In certain BimlFlex solutions there are properties that get stored in **Azure Key Vaults** (AKV) for security purposes. AKV is a cloud service that provides secure storage for sensitive information. Users can securely store keys, passwords, certificates, and other secrets.

[More about Sensitive Information Management](sensitive-info-management.md)

## PowerShell Deployment

Not only does BimlFlex produce all of your Azure Data Factory assets needed for deployment, it also generates a PowerShell deployment script with values pulled directly from your settings. Deployment has never been easier!

[More about PowerShell deployment](using-powershell.md)

## Azure Portal Deployment

Although the recommended practice is to use the automated deployment process mentioned above, all of the ADF assets are provided for a manual deployment via the [Azure Portal](https://portal.azure.com).

[More about Azure Portal Deployment](using-azure-portal.md)
