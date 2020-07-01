---
uid: bimlflex-driving-keys
title: Data Vault Driving Keys
---
# Data Vault Driving Keys

Data Vault Links represent many to many relationships. Any Hub entity in Data Vault can therefore have multiple active relationships to other entities through Links.

If there is a Foreign Key relationship between two entities in the source, or if there is application logic that manages opening and closing of relationships in mapping tables, that same behavior might need to be maintained in the Data Vault.

An example is the relationship in AdventureWorksLT between a Product and its Product Category. By definition, the source system only allows a product to be part of a single Category at a given point in time. If the product is moved from a category to another it will cease to be part of the previous category.

Since Links can maintain any number of relationship, e.g. a Product can be in any number of Categories through the Link, this behavior needs to be enforced by rules. These rules are implemented through the Driving Key concept in Data Vault. The Driving Key in the relationship is the consistent part of the key. This is the primary driver for the relationship. For the Product to Category example, the Product is the Driving Key.

It is possible to define Driving Keys for Link Relationships in the BimlFlex Metadata Attributes. These keys define which parts of the Link drive the changing of existing relationships.

BimlFlex manages the information about the effectiveness of the relationship in the corresponding Link Satellite. For the Product to Product Category Link this is maintained by the `LSAT_Product_ProductCategory_AWLT` Link Satellite table.

The Accelerator and the BimlFlex framework will automatically apply Driving Key type relationships for any Links derived out of a Hub, as they are based on Foreign Keys in the source and by definition imply a Driving Key scenario. This will be automatically included in the load logic, no separate attribute will be added in the Attributes metadata.

If a Driving Key behavior needs to be manually defined, such as from a Link type source table, a corresponding Driving Key attribute is added to the Attributes metadata. This is defined using the Link table SK column that represents the Driving Key column

![Driving Key Metadata](images/bimlflex-ss-v5-app-driving-key-metadata-attributes.png "Driving Key Metadata")

The Data Vault build logic will include the required processing in the Link Satellite to maintain data consistency throughout load by adding and closing relationships, emulating the behavior of the single Foreign Key relationship from the source.

The Driving Key logic only operates on the Effective To date of the Link Satellite, so for BimlFlex to maintain the Driving Key relationship information the Link need to have Link Satellites enabled, and that Link Satellite need to implement end dating. Both of these are controlled through Configurations and Settings. The settings for creation of Link Satellites (`DvAccelerateLinkSatellite`) and End Dating in the Data Vault (`DvEndDateSatellite`) that can be enabled selectively for only the objects that require it, or globally for all entities.
