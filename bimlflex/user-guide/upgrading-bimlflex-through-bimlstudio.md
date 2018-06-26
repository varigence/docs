---
uid: bimlflex-upgrade
title: Upgrading BimlFlex
---
# Upgrading BimlFlex through BimlStudio

The BimlFlex product and framework is Bundled as an addon to the BimlStudio. A developer uses BimlStudio with a BimlFlex project type to create data warehousing solutions with BimlFlex.

The BimlFlex functionality is provided by a Bundle file called `bimlflex.bimlb` that comes with the BimlStudio installer. This Bundle file contains the data warehousing functionality as well as the current versions of the BimlFlex metadata database and the BimlCatalog orchestration and auditing database.

New and existing projects are created from the local Bundle file. Existing projects have a local copy of the Bundle file in the project folder.

Varigence provides updates to the BimlFlex framework through an online download mechanism. On project open, BimlStudio will check for the latest version of the BimlFlex components and offer to download and deploy them, should an update be available.

## Deploying updates

Steps for deploying updates:

1. Update the template Bundle version that is used for new projects
1. Update the Bundle file that is used for the project
1. Update the BimlFlex metadata database used by the project
1. Update the BimlCatalog orchestration and auditing database used by the project

Once the project has identified that a new version is available online the following dialog is displayed:

![BimlFlex Upgrade Assets](images/bimlflex-ss-v5-bimlflex-upgrade-assets-dialog.png "BimlFlex Upgrade Assets")

## Update template Bundle version

The template Bundle is the Bundle that is used by BimlStudio when creating a new BimlFlex project. if a new Bundle has been published online by Varigence the upgrade process will be able to download the new version and use that for new projects going forward. This template Bundle is also used to update local projects so the template Bundle needs to be updated first.

## Update project Bundle

The local project that is opened in BimlStudio has a local Bundle version used in the project. Upgrading the local project Bundle to the new version to enable the new functionality in the project.

## Update BimlFlex metadata database

BimlFlex stores the Data Warehouse metadata in the BimlFlex metadata database. The new, updated version might have a new version of the database embedded. The upgrade process will enable the upgrade of the BimlFlex database to the new version. Some Bundle updates have new features that require the new database version to be deployed.

The connection to the BimlFlex database is derived from the project configuration.

## Update BimlCatalog orchestration and auditing database

BimlFlex stores Data Warehouse operational data such as logging and auditing data in the BimlCatalog database. The new, updated version might have a new version of the database embedded. The upgrade process will enable the upgrade of the BimlCatalog database to the new version. Some Bundle updates have new features that require the new database version to be deployed.

The connection to the BimlCatalog database is derived from the BimlCatalog connection string in the BimlFlex database referenced by the project configuration.

## Upgrade progress

All upgrade progress is logged to the output window in BimlStudio.

## Post upgrade

Once the upgrade is completed, restart BimlStudio and reopen the project to apply the new Bundle.

Once the project and databases have been updated, refer to the [testing documentation](upgrade-and-testing-process.md) to validate that the new version provides the same output as before