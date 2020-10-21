#### Object Types

| Value               | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| Table               | A database table or view.                                           |
| Satellite           | A modeling Satellite which holds attribute data.                    |
| Link                | An association of keys between objects.                             |
| Hub                 | List of Integration keys.                                           |
| Link Satellite      | A Satellite off of a link.                                          |
| Reference           | A Reference table.                                                  |
| Point In Time       | Object holding keys and timelines for multiple Satellites for a Hub.|
| Bridge              | Object for holding keys for a Hub, its Links, and related Hubs.     |
| Reference Satellite | Object referenced from a satellite.                                 |
| Ignore              | Exclude Object from processing.                                     |
| Exclude DV          | Include Object in Source to Staging, exclude it from Data Vault.    |
| Same As Link        | Same As Link, linking a Hub in a Same As relationship.              |
| Hierarchy Link      | Hierarchy Link, linking a Hub in a Hierarchy relationship.          |
