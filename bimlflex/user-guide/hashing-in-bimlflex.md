---
uid: bimlflex-hashing
title: Hashing in BimlFlex
---
# Introduction to hashing in BimlFlex

BimlFlex uses hashing in two common scenarios, for Data Vault hash-based keys and for row checksums for identifying changes to attributes.

Hashing keys in Data Vault allows integration keys to be loaded in a deterministic way from multiple sources in parallel. This also removes the need for key lookups between related entities.

Hashing row checksums for identifying changes allows the load process to compare a single generated hash to identify if an attribute has changed for a key. This allows for flexible and fast loading of only changes to data.

BimlFlex provides 2 main ways of hashing:

* Using a custom SSIS component that provides hashing of data in the SSIS Data Flow Task for SSIS-based loads
* Using the SQL `HASHBYTES()` script function in ELT code

## Hash configurations

Both of these approaches provides a set of optional configurations

### Hash representation

This defines how the resulting hash value is stored

* String representation, the resulting hash is stored using the text representation of the binary hash value. This makes the hash value legible and can easily be copied and stored in plain text format
* Binary representation, the hash is stored in its native, binary form. This requires less storage however is not as well suited for readability or agnostic storage

### Hash algorithm

The cryptographic algorithm used to derive the hash. The different algorithms result in differently sized hash values, and have different risks for key collisions.

* MD5
* SHA1
* SHA2_256
* SHA2_512

### Data Types and storage requirements for hash columns

| Hash Algorithm | String representation | Binary Representation |
| -------------- | --------------------- | --------------------- |
| `MD5`          | char(32)              | binary(16)            |
| `SHA1`         | char(40)              | binary(20)            |
| `SHA2_256`     | char(64)              | binary(32)            |
| `SHA2_512`     | char(128)             | binary(64)            |

## Attribute Separators

When hashing multiple concatenated values it is important to separate them to distinguish patterns. This is sometimes called hash concatenator, separator or sanding value. The default field separator in BimlFlex is `~` and it is configurable in the settings. This is used so that hashing `A` and `BC` generates a different hash compared to `AB` and `C`. without the separator both scenarios would generate the input value `ABC` to the hashing process and identical hash values, whereas using the separator gives either `A~BC` or `AB~C`, resulting in different hashes.

## Null value replacements

it is not possible to hash a null value, therefore the BimlFlex hashing procedure has an optional null value replacement value. The default value is `NVL` and it is configurable in the settings.

## Hashing Business Keys

A Business or Integration key is used as the main identifier for entities. This is most commonly used as the base key for Hub entities in Data Vault. BimlFlex has a built in feature to convert source columns and concatenate them into a Business Key. There is also an optional setting to upper case the string. This is useful where the database is case insensitive and keys with different casings are considered the same entity. As different casings are hashed to different hash values whereas the database engine would consider Business Keys with different casings to be the same this provides a convenient way to automatically align all Business Keys. BimlFlex always store the original values in Satellites by default, so no data is lost in this process.

## Hashing Row Checksums

TODO: Coming soon

## Key collisions

There is a risk for key collisions using hashing where different values generate the same key. This is a calculated risk in using hashing and a collision mitigation strategy should be in place for the integration process to accommodate these potential issues should they arise. It is out of the scope of this article to detail the mathematical background information or gauge the risk or the required responses to that risk.

## Hash compatibility

The most important part of using hashing of data is a consistent behavior, so that the same input value results in the same hash value. This is especially true when hashing data from different systems using different tools and approaches are used for hashes where they will be used for joining and linking at a later stage. For this compatibility, BimlFlex provides a `HASHBYTES()` compatible hashing approach that allows other systems to hash using the same approach so that matching is possible. This document details the hashing approach so that it is easy to replicate the approach either manually in SQL or in a different process.

## Sample setup script for test scenario

TODO: Coming Soon