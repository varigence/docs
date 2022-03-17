---
uid: bimlflex-concurrent-development
title: Concurrent Development
summary: Details regarding concurrent development between teams, customers, and shared metadata
varigenceProduct: BimlFlex
varigenceArticleType: Conceptual
---
# Concurrent Development

Most BimlFlex deployments feature several teams working on the same data solution at the same time. A successful combination of concurrent development and regular data solution maintenance normally involves several features in BimlFlex for support.

This section covers various scenarios on how to manage bigger teams to work on shared metadata.

 [!NOTE]
> The concepts in this section are closely related to Continuous Integration / Continuous Delivery (CI/CD). Varigence has provided specific guides related to this for ADF and SSIS:
>
> * [CI/CD using SSIS](xref:bimlflex-ssis-continuous-integration-and-continuous-delivery)
> * [CI/CD using ADF](xref:bimlflex-adf-continuous-integration-and-continuous-delivery)

## Metadata setup and database considerations

Use a single [BimlFlex (metadata) database](xref:bimlflex-setup-metadata-database-installation). The metadata database is a development resource and does not need to be provisioned per environment. It is only used by the development team.

The [BimlCatalog](xref:bimlflex-setup-bimlcatalog-database-installation) audit and logging database is used at run time by the loading processes. The BimlCatalog needs to be available as a separate database in each environment. This is because [parameter](xref:bimlflex-concepts-metadata-parameters) and configuration values are stored, and these are related directly to the data logistics processes. It is also important that each BimlCatalog database is backed-up regularly, because it is an essential component to maintain a correct audit trails and parameter integrity.

## Customers and Versions

The recommended approach is to use a single [Customer](xref:bimlflex-concepts-customer) per target data solution. Most projects will have a single data solution, and thus only need a single Customer defined in BimlFlex.

Use [Versions](xref:bimlflex-concepts-version) to progress through development cycles. For sprint scenarios, name the current Version after the current sprint, e.g. 'Sprint 23'.

Using a single Customer, and making sure all developers work on the same Version, means that all artifacts are located in a single BimlFlex metadata context. This will also direct the compiler to generate a SQL Server Data Tools (SSDT) database project that represents a complete database, and that all shared artifacts for the Data Vault are co-located.

This simplifies the building of [Point-In-Time](xref:bimlflex-data-vault-concept-pit) constructs across data from multiple sources, and also makes it possible to track any potential object name collisions in the target layer.

## Use exclusions for work separation

BimlFlex has a metadata exclusion feature, **Exclude From Model**, that can be used to exclude metadata from the current scope. This is available both globally, and for individual developers. This property can be set on most of the metadata components in BimlFlex.

For example, a global exclusion at [Project](xref:bimlflex-project-editor) level can be used for the scenario that source system metadata has been imported, but that needs to be put on hold while a more high-priority source is processed. The global exclusion for that project will hide it completely from the visible metadata. Once the project is ready to be picked up, it can be included back into the live metadata set.

For scenarios where multiple developers work on different sources or projects in the same repository, use the **Use My Exclusions** feature to exclude the Projects that are currently out of scope for each developer. This typically includes already delivered Projects, as well as Projects other teams are working on.

The following example scenario illustrates the process:

* There is a completed ingestion Project in the metadata for the 'Sales' source
* Team A consists of Kim and Jane, they work on the 'CRM' source
* Team B consists of Karen and Mel, they work on the 'Finance' source

The developers in Team A create a Project for the CRM ingestion in the metadata. Team B creates a Project for the Sales ingestion. The Metadata Team leader excludes the Sales project in the global metadata scope. Neither Team A, nor Team B developers will see the Sales Project in the metadata.

The developers in Team A Switch on the `Use My Exclusions` feature in the BimlFlex app. Once this is completed, they both set the Finance project as Excluded. Team B does the same but excludes the 'CRM project Team A is working on.

The BimlFlex app will only display the relevant source Projects for the members in the respective development teams, allowing them to work in the same Customer at the same time.

The developers within each Team collaborate and communicate on their respective responsibilities, the start with importing the metadata from the source together and then start modeling of the source in grouped iterations. They use the **Model Grouping** feature of the source Objects to divide the work up in smaller deliverables.

## Automated build considerations

The recommended approach is to use a dedicated Version for the build (compilation) process. Before running a build, always clone the current version to a dedicated 'build' version - e.g. the build Version is used by the automated build process.

When a build is needed, commit the current repository with the required Extension Points, merge the repository to the build branch in source control, and clone the metadata to the build version, overwriting the existing build version.

A pipeline can be used to build the outputs from the committed data in the build branch, using Build version metadata.

If build errors are encountered, the following process can be followed:

* Fix the metadata in the current sprint Version in the development branch
* Push the changes to source control
* Clone the current sprint version to the build version again
* Finally re-run the build pipeline

For a separate UAT or production pipeline, consider using a separate 'Production' Version that is used the same way as the build Version, but used only to promote the solution to the production environment.

## Sprint Progression

Snapshot the current Version whenever a build is performed, and snapshot the Version before a sprint progression. When starting a new sprint, the recommended approach is clone the current version to a new sprint version (e.g. 'Sprint 23' to 'Sprint 24'), and use that version going forward.

Always move forward, once a move to a new version has happened, never go back and change any previous versions. If any issues are identified, fix them in the current version.

Snapshots are also used before any major metadata change to allow easy rollback. Coordinate snapshots and rollbacks with other team members. Remember to do the snapshot before the metadata change.

Always perform regular backups of the metadata database to allow for quick and easy disaster recovery when needed.

## Feature Branches, Metadata considerations

BimlFlex does not provide an automated metadata merge function. A manual merge process is applied when multiple Metadata Customers should be consolidated into a single version. Consider using multiple Metadata Customers for development testing, not for feature branching or concurrent development to minimize the need for manual metadata merging. Use the project approach per source to divide feature development, using Model Groupings to isolate parts of each source. Use separate Data Mart projects for each Data Mart to isolate dimensional models.

## Single database project considerations

The SQL Server Data Tools project scope is based on a single project per database. The BimlFlex build process creates these single projects per database at build. By using a single Metadata Customer, there is no additional requirement to merge and consolidate database artifacts into a single SSDT project.
