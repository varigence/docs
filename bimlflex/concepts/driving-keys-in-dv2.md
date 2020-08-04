# Driving Keys in Data Vault 2.0

## Driving Key Observability

Driving Keys are, from a modelling perspective within the Data Vault 2.0 methodology, not a visible entity.
Driving Keys are a unique business key or combination of Business Keys, often one of the primary keys of a source system, and will identify the relationship between business objects in connected Hubs.
Business Keys exist as an index which identified uniqueness of a row based on columns that exist within a table according to predefined business rules.
A Business Key could be a customer number, invoice number, vehicle identification number (VIN), or a driver's license number. 
A combination of Business Keys could be a customer number combined with a region code or a driver's license number combined with a state code.
In a Data Vault model, there are Hubs for each type of Business Key.
As mentioned above, if a Driving Key is the combination of Business Keys, then the Business Key is the "visible" entity while the Driving Key remains "invisible."

## Relationships in a Data Vault

In a Data Vault, Link tables exist as many-to-many relationships.
This is a core tenet of Data Vault 2.0 modelling methodology.
The primary purpose of a Driving Key is to enforce a many-to-one relationship in a system that perpetuates many-to-many relationships.
For data modelling purposes, a business entity will need to be defined as "Driving."
Once defined, ETL logic will enforce the rule that he subject entity cannot be associated with multiple relationships at any given point in time.
A Driving Key will confirm the instance of a relationship but not the effectivity of one.

For example: Within AdventureWorksLT there exists a relationship between a Product and its Product Category. AdventureWorksLT only allows a single Product to be a part of a single Category. If the Product is moved from one category to another, then it will cease to be a part of the previous category.

## End-Dating and Zero Records 

Driving Keys utilize "end-dating" to indicate when one relationship has ended, and will create a subsequent record to initiate a second relationship. 
Driving Keys will also utilize a "zero record" to acknowledge the start of a timeline prior to the first available record. Using Driving Keys to indicate which records are active versus those which are not differentiates between "end-dated" historical information and "active" real-time information.

## Driving Key Link Satellites (LSAT)

A common model in Data Vault 2.0 methodology is to create a Link Satellite (LSAT) which contains history specific to a Driving Key.
This allows one to track specific changes to a Driving Key without having to reference or query any of the Hubs or Links associated with the data.
Using a Link Satellite to track Driving Key history provides users with two different perspectives of data over time: The history of the individual relationships as kept within the Links, and the history from a Driving Key perspective, as kept within the Driving Key LSAT.
Using Link Satellites is a benefit of Data Vault 2.0 that allows maintaining historical data where end-dated relationships may need to be reopened or reactiviated again without fear of losing any data.

## BimlFlex Handling of Driving Keys

BimlFlex is able to automatically apply Driving Key relationships to any Links that are derived out of a Hub, but also allows users the ability to define Driving Keys manually.
Driving Keys will automatically be included in the load logic, negating the need to edit any Attributes metadata.
To manually define a Driving Key attribute, users may edit the Link Table SK column that represents the Driving Key. The Data Vault build logic within the BimlFlex framework will include the required processing in the Link Satellite to maintain data consistency throughout loading by adding and closing relationships, emulating the behavior of the single Foreign Key relationship from the source.

[!TIP]
For additional information regarding BimlFlex's assignment of Driving Keys or the technical walkthrough for manually defining Driving Keys, please reference the following document:

