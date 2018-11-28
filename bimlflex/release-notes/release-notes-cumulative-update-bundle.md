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
> The Cumulative Update Bundle channel allows users to apply fixes to identified issues. Apply updates in a testing or development environment before committing to a production environment. Only apply the Cumulative Update if there identified issues that have ben documented as addressed in these release notes.

## Bundle 63528

* Update: the Package Variable Extension Point now overrides MDS system variables as expected. It is possible to address the following MDS-specific system variables: `MdsBatchTag`, `MdsVersionName`, `MdsLogFlag`, `MdsImportType`
* Update: superfluous file cache entities are no longer created for Delete detection objects when both the `PsaUseCacheLookup` and `DeleteDetectionEnabled` settings are set to `Y`
* Update: The `RowChangeType` column is now included in the Row Hash for ELT load processing. This allows easy change detection for rows where only the Change Type indicator has been changed.