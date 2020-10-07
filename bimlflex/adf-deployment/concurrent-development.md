---
uid: bimlflex-adf-concurrent-development
title: BimlFlex Concurrent Development
summary: Details regarding concurrent development between teams, customers, and shared metadata
---
# Concurrent Development

Most BimlFlex deployments feature several teams working on the same Data Warehouse at the same time. A successful combination of concurrent development and Data Warehouse management normally uses several features in BimlFlex for support. A sample process is described below.

Supporting documentation: [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery)

## Metadata setup and Database considerations

Use a single Metadata Customer per target Data Warehouse. Most projects will have a single Data Warehouse and thus a single Metadata Customer.

Use a single Metadata (BimlFlex) Database. The metadata database is a development resource and does not need to be provisioned per environment. It is only used by the development team.

The BimlCatalog Audit and Logging database is used at run time by the loading process. This needs to be available as a separate database in each environment. As parameter and configuration values are stored in this database there must be a separate database per environment. It is also important that they are backed up as required for audit trails and parameter integrity.

## Metadata Customers and versions

Use a single Metadata Customer per Data Warehouse. Most scenarios have a single Data Warehouse and as such a single, main customer

Use Versions to progress through development cycles. For sprint scenarios, name the current Version after the current sprint, e.g. `Sprint 23`

A single customer means all artifacts are in a single repository. That means all SSDT database projects represent a whole database and that all shared artifacts in the Data Vault are all co-located. This enables the building of Point In Time constructs across data from multiple sources and also makes it possible to track name collisions in the target layer.

## Use Exclusions for work separation

BimlFlex has a metadata Exclusion feature to Exclude metadata from the current scope. This is available both globally and for individual developers.

In the scenario where metadata has been imported from a source system that needs to be put on hold while a more high-priority source is processed, use the global exclusion to exclude that project completely from the metadata. Once the project is ready to be picked up, include it back into the live metadata set.

For scenarios where multiple developers work on different sources or projects, use the `Use My Exclusions` feature to exclude the projects currently out of scope. This would be already delivered projects as well as projects other teams are working on.

This sample scenario illustrates the process:

There is a completed ingestion project in the metadata for the Sales source.

Team A consists of Kim and Jane, they work on the CRM source.

Team B consists of Karen and Mel, they work on the Finance source.

The developers in Team A create a project for the CRM ingestion in the metadata. Team B creates a project for the Sales ingestion.

The Metadata Team leader excludes the Sales project in the global metadata scope. Neither Team A nor Team B developers sees it in the metadata.

The developers in Team A Switch on the `Use My Exclusions` feature in the BimlFlex app. Once this is completed, they both set the Finance project as Excluded. Team B does the same but excludes the project Team A is working on.

The BimlFlex app will only display the relevant source projects for the members in the development teams, allowing them to work in the single metadata Customer at the same time.

The developers within each Team collaborate and communicate on their respective responsibilities, the start with importing the metadata from the source together and then start modeling of the source in grouped iterations. They use the Model Grouping feature of the source objects to divide the work up in smaller deliverables.

## Automated Build considerations

Use a single Build version for the build process, always clone from the current version to the build version. E.g. The `Build` Version is used by the automated build process. When a Build is needed, commit the current repository with the required Extension Points, merge the repository to the Build branch, clone the metadata to the `Build` version, overwriting the existing Build version. Use a pipeline to build from the committed data in the Build Branch in the repository against the metadata Build version. Continue to work on the `Sprint 23` metadata version and the development Branch in the repository. If there are Build errors, fix the metadata in the `Sprint 23` version and the development branch, re-push changes to the repo, re-clone the Sprint 23 version to the Build version and rerun the pipeline.

For a separate UAT or production pipeline, consider using a separate `Production` Version that is used the same way as the Build Version, but for the next promotion layer.

## Sprint Progression

Snapshot the current version whenever a build is performed. Snapshot the Version before a sprint progression. When starting a new sprint, clone the current version `Sprint 23` to the new Sprint version, `Sprint 24`, and use that version going forward. Always move forward, once a move to a new version has happened, never go back and change any previous versions. If any issues are identified, fix them in the current version.

Snapshots are also used before any major metadata change to allow easy rollback. Coordinate snapshots and rollbacks with other team members. Remember to do the snapshot before the metadata change.

Always perform regular backups of the metadata database to allow for quick and easy disaster recovery when needed.

## Feature Branches, Metadata considerations

BimlFlex does not provide an automated metadata merge function. A manual merge process is applied when multiple Metadata Customers should be consolidated into a single version. Consider using multiple Metadata Customers for development testing, not for feature branching or concurrent development to minimize the need for manual metadata merging. Use the project approach per source to divide feature development, using Model Groupings to isolate parts of each source. Use separate Data Mart projects for each Data Mart to isolate dimensional models.

## Single database project considerations

The SQL Server Data Tools project scope is based on a single project per database. The BimlFlex build process creates these single projects per database at build. By using a single Metadata Customer, there is no additional requirement to merge and consolidate database artifacts into a single SSDT project.
