#### Object Types

| Value               | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| Table               | A database table or view.                                           |
| Dimension           | Collection of related objects.                                      |
| Fact                | A business fact table.                                              |
| Satellite           | A modeling Satellite which holds attributes or columns.             |
| Link                | An association of keys between objects.                             |
| Hub                 | List of Integration keys.                                           |
| Link Satellite      | A Satellite off of a link.                                          |
| Reference           | A Reference table.                                                  |
| Point In Time       | Object holding keys and timelines for multiple Satellites for a Hub.|
| Bridge              | Object for holding keys for a Hub, its Links, and related Hubs.     |
| Reference Satellite | Object referenced from a satellite.                                 |
| Flat File           | A file holding data in a flat structure.                            |
| Ignore              | Exclude Object from processing.                                     |
| CDC All             | Change Data Capture with all change history.                        |
| CDC Last            | Change Data Capture with only the most recent change.               |
| Exclude DV          | Include Object in Source to Staging, exclude it from Data Vault.    |
| Stored Procedure    | A database procedure or query.                                      |
| Change Tracking     | An object used for change tracking.                                 |
| Same As Link        | Same As Link, linking a Hub in a Same As relationship.              |
| Hierarchy Link      | Hierarchy Link, linking a Hub in a Hierarchy relationship.          |
| Staged Query        | A database query used to create a representation of data.           |
