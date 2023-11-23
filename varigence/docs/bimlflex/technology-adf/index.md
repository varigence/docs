---
sidebar_position: 1
title: Overview
description: Guidance in Azure Data Factory concurrent development, CI/CD delivery, sensitive information management, and deployment through PowerShell and Azure portal 
---
# BimlFlex for Azure Data Factory

Azure Data Factory (ADF), the cloud-based data integration service for Microsoft Azure, is a common target for BimlFlex data solutions. In this section we will discuss items that pertain to ADF deployment.

## Azure Data Factory Build & Deployment Concepts

During the [build](../build-and-deployment) process, BimlFlex produces all ADF assets needed for deployment. When the build has been completed, the ADF components can be deployed in a number of ways.

The following links contain detailed information on specific topics:

* [ADF deployment guide](./using-powershell). BimlFlex produces all required ADF assets
* [Deploying ADF components using PowerShell](./using-powershell). BimlFlex produces all Azure Data Factory assets needed for deployment, and also generates a PowerShell deployment script with values pulled directly from your settings for ease of deployment.
* [Deploying ADF components using the Azure Portal](./using-azure-portal). Although the recommended practice is to use the automated deployment process using PowerShell, all of the ADF assets are provided for a manual deployment via the [Azure Portal](https://portal.azure.com).
* [Using ARM templates for BimlFlex](./bfx-arm-templates). Azure Resource Manager (ARM) templates are the Microsoft preferred way of deploying infrastructure-as-code to Azure, and BimlFlex supports this as a mechanism to facilitate deployment.
* [Configuring a Landing Area for ELT in ADF](./landing-area). Using an ELT approach for data integration, BimlFlex uses a Landing Area that is accessible for Stored Procedures to transform data. This allows for data to be directly transformed while using the Copy Activity to efficiently transfer the results.
* [BimlFlex Project and Batch structures in ADF](./project-batch-structure-in-adf). The configuration of Projects and Batches in BimlFlex metadata governs how the resulting ADF resources are organised.
* [Using the Function Bridge to support exception cases in ADF](./project-batch-structure-in-adf). The configuration of Projects and Batches in BimlFlex metadata governs how the resulting ADF resources are organised.

## Continuous Integration and Continuous Delivery

One of the core features of BimlFlex is that it can be used in a Continuous Integration (CI) and Continuous Delivery (CD) pipeline.

There are many viable approaches to configure CI/CD, and data solutions tend to have their own special considerations compared to the more generic CI/CD processes. BimlFlex caters for this, and can be used for the manual automation of build and deployment steps using command line scripts as well as the automatic build and processing of changes through a build server pipeline.

* [More about Continuous Integration and Continuous Delivery](./continuous-integration-and-continuous-delivery)

## Sensitive Information Management

In certain BimlFlex solutions there are properties that get stored in **Azure Key Vaults** (AKV) for security purposes. AKV is a cloud service that provides secure storage for sensitive information. Users can securely store keys, passwords, certificates, and other secrets.

* [More about Sensitive Information Management](./sensitive-info-management)
