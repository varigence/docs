---
uid: ssis-deployment-overview
title: SSIS Deployment Overview
---
# SSIS Deployment Overview

The ability to create SSIS projects is a central part of BimlFlex. In this section there is ample information regarding the deployment of your BimlFlex SSIS assets. When using SSIS for an ELT process, SSIS serves as the orchestration engine for running SQL-based transformations on the database. When using SSIS for an ETL process, SSIS serves both as the orchestration engine and the data transformation system. This article touches on a number of topics related to SSIS deployment. 

## Concurrent Development

The majority of BimlFlex deployments consist of several teams working on the same Data Warehouse at the same time. A successful combination of concurrent development and Data Warehouse management typically leverages several features in BimlFlex for support.

[More about Concurrent Development](concurrent-development.md)

## Continuous Integration and Continuous Delivery

One of the core features of the BimlFlex Data Warehouse Automation solution is that it can be used in a CI/CD pipeline. There are many different approaches used for CI/CD. Additionally, Data Warehouses have their own special considerations compared to the more generic CI/CD processes. BimlFlex is useful both in the manual automation of build and deployment steps using command line scripts, and the automatic build and processing of changes through a build server pipeline.

[More about Continuous Integration and Continuous Delivery](continuous-integration-and-continuous-delivery.md)


## Sensitive Information Management

SSIS Projects and SQL Server SSIS Catalog deployments support configuring project parameters as sensitive. This allows sensitive information, like passwords, to be managed more securely in SSIS. While Microsoft generally recommends using account based security there are some scenarios and sources that require management of sensitive data. This document highlights the BimlFlex configuration required to maintain password security in SSIS.


[More about Sensitive Information Management](sensitive-info-management.md)

## SSIS Custom Components

The BimlFlex custom SSIS components are used for ETL load processes in SSIS packages. These components simplify the data processing and allows the BimlFlex generated packages to more easily process data.

[More about SSIS Custom Components](ssis-custom-components.md)

## SSIS Server Installation

For SSIS Server installations, the Varigence Custom SSIS components used in BimlFlex generated SSIS packages are required to be available on the server.
This installation is required for SQL/SSIS Servers that run BimlFlex created packages.

[More about SSIS Server Installation](ssis-server-installation.md)

## PowerShell Deployment

Not only does BimlFlex produce all of your SSIS projects and packages, it also generates a PowerShell deployment file with values pulled directly from your settings. Deployment has never been easier!

[More about PowerShell deployment](using-powershell.md)



## SSIS Deployment Wizard

BimlFlex generates all of the SSIS assets that you need to manually deploy through the deployment wizard.

[More about SSIS Deployment Wizard](using-deployment-wizard.md)

