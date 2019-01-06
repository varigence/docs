---
uid: bimlflex-cumulative-update-bundle-release-notes
name: BimlFlex Cumulative Update Bundle Release Notes
---
# Cumulative Update Bundle Release Notes

The Cumulative Update Bundle channel is available as an option in the Upgrade Assets Bundle in BimlStudio 2018 R3 and later. Use this to apply the latest updates and fixes before they are included in public Bundle updates.

> [!NOTE]
> Please make sure you have a backup of your database and projects prior to upgrading or applying any updates. We also recommend that your project and bundles are checked into your source control.
> Please email bimlflex-support@varigence.com should you experience any issues while upgrading.

> [!IMPORTANT]
> The Cumulative Update Bundle channel allows users to apply fixes to identified issues. Apply updates in a testing or development environment before committing to a production environment. Only apply the Cumulative Update if there are identified issues that have been documented as addressed in these release notes.

## Bundle 63707

* Updates to the Data Vault Publisher. Previously some scenarios would result in the Publish failing due to the updated metadata model entity names.

## Bundle 63704

> [!IMPORTANT]
> This Bundle introduces placeholder metadata entities for Azure Data Factory and requires an update to the BimlFlex Excel plug-in. Please download and install build 63513 or later
> * BimlFlex: [https://varigence.com/downloads/bimlflexsetup_5.0.63513.0.exe](https://varigence.com/downloads/bimlflexsetup_5.0.63513.0.exe)

This Bundle introduces additional metadata attributes for columns and configurations that is planned to be used in the Azure Data Factory patters, such as `AdfDataFlowExpression`. It also renames the `SsisExpression` attribute to `SsisDataFlowExpression`

* Update Salesforce source query parameter to use UTC format instead of the provided local time default value. Previously, due to the different ways datetimes are presented by the Salesforce interface there were scenarios where the process used local and UTC times inconsistently.

## Bundle 63528

* Update: the Package Variable Extension Point now overrides MDS system variables as expected. It is possible to address the following MDS-specific system variables: `MdsBatchTag`, `MdsVersionName`, `MdsLogFlag`, `MdsImportType`
* Update: superfluous file cache entities are no longer created for Delete detection objects when both the `PsaUseCacheLookup` and `DeleteDetectionEnabled` settings are set to `Y`
* Update: The `RowChangeType` column is now included in the Row Hash for ELT load processing. This allows easy change detection for rows where only the Change Type indicator has been changed.
* Add: Support for column dependency resolution for Business Key columns in delete detection load packages. Dependent columns are now identified and added to the delete detection packages as Derived Column transformations.
* Update: SSIS Custom Components now has updated support for a range of configurable hashing options, including MD5, SHA1, SHA256, SHA512 for both binary hash values and string representations.