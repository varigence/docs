# Driving Keys in Data Vault

A **Driving Key** is a **Unique Key** on a Link that is used to determine the effectivity of relationship or series of relationships.
This is commonly used when a relationship should be tracked based around a Business Concept itself as opposed to individual expiry records on the Link table.
These can be used to enforce a many-to-one relationship on the otherwise many-to-many construct of a Link.
The a Driving Key is used to shift the focus to a driving Business Concept from simply an observed interaction.

## Driving Key Observability

From a modelling perspective, Driving Keys are not so much a separate construct as much as they are a qualifier on an existing one.
In practice a Driving Key is a term given to an existing Business Concept to 'drive' a Link.
The key itself is commonly the Business Key of the driving Business Concept or a source key persisted as a degenerate field on the Link itself.
Driving Keys don't change a model, but rather indicate how ELT/ETL should be performed and a relationship maintained.

## Relationships in a Data Vault

A core tenet of Data Vault modelling methodology is to track relationships in a Link and to be modeled as a many-to-many relationship.
Effectivity is then tracked in a Satellite based on the observation of when a unique interaction of business concepts are observed.
When a relationship is observed for the first time it is created and marked as active based on the date it was observed.
When a relationship is terminated similar logic is used and the relationship is terminated based on the date of the observed termination.
By nature these exist exclusively with no relation to any other observed relationship.
A Driving Key is required when a relationship should be tracked, observed and terminated based around a central Business Concept vs the relationship itself.
Effectivity is then started and ended based on when a Business Concept was first observed and when a relationship change occurs on the driving business concept.

<!--
### Tracking by Historical Relationship
##  TODO: Outline example of a normal Link lifecycle demonstrating no relationship or importance to any other record. ##
##  TODO: Also highlight the ability to accommodate a shift from many-to-on => many-to-many without issue. ##
-->

**For example:** Imagine the operation of a bar, which opens for business on August 10, 2020. A bar will store kegs of different varieties of beer and then distribute those beverages through their tap system.

This hypothetical bar has five (5) varieties of beer in stock: Pale Ale, Stout, Lager, IPA, and Cider.
There is only one (1) tap for distribution.
This architecture demonstrates a one-to-many relationship.
There is one tap and many beers.
The *type* of beer available on tap is, essentially, inconsequential.
At any given time only one beer is going to be available despite there being five (5) different options.

![One-to-Many Link Relationship](/bimlflex/concepts/images/beer-link-one-to-many.jpg "One-To_Many Link Relationship")

On month later on September 10, 2020 the bar decides to install a second tap subsequent to successful business operation.
Now there are two (2) possible options for available beer.
The Hub for Taps can be edited to include a second tap without any issue.
The architecture has now changed from a one-to-many relationship to many-to-many.

![Many-to-Many Link Relationship](/bimlflex/concepts/images/beer-link-many-to-many.jpg "Many-To_Many Link Relationship")

In the above scenario the Taps business entity is defined as "driving," meaning that ETL enforces the logic that a single tap cannot be associated with multiple beers at the same point in time.

<!--
### Tracking by Driving Key
##  TODO: Outline example of a Driving Key and demonstrate the termination of a new relationship coming into a driving key. ##
##  TODO: Also highlight the requirement of a many-to-one and the potential pitfalls. ##
-->

<!-- Refactor below into above examples. -->
## Driving Key Link Satellites (LSAT)

A common model in Data Vault 2.0 methodology is to create a Satellite on the Link (LSAT) which contains history specific to a Driving Key.
This allows one to track specific changes to a Driving Key without having to reference or query any of the Hubs or Links associated with the data.
Using LSAT is a benefit of Data Vault 2.0 that allows maintaining historical data where end-dated relationships may need to be reopened or reactivated again without fear of losing any data.

Referencing the above example of bar ownership again, a Link Satellite in this example might look like such:

![Link Satellite](/bimlflex/concepts/images/link-sat-beers.jpg "Link Satellite")

The Link Satellite has, by design, created a "zero record" to initiate a historical data timeline.
The zero record acknowledges the business entity 1001 (beer on Tap #1) but acknowledges that nothing was known about this relationship until the first record, August 10, 2020, when the bar first opened and the relationship was created.
The record for business entity 2002 (beer on Tap #2) was entered on September 10, 2020.
This record does not require a zero record since it did not exist prior to the creation of any historical data.

After enough pints sold a keg will be kicked (emptied).
A new beer will then replace the old beer.
Data Vault keeps historical data so the record for the now kicked beer will be end-dated, and a new record will be created for the new relationship.

Assume that the Pale Ale on Tap #1 was kicked on October 10, 2020, and replaced later that same day with the cider being held in storage.

The changes to inventory might appear as such in the Link and Link Satellite:

![Link Satellite 2](/bimlflex/concepts/images/link-sat-beers-02.jpg "Link Satellite 2")

The record for Pale Ale on Tap #1 expired on October 10, 2020, the date the keg kicked.
A new record was created to mark the termination on October 10, 2020, noting the status as "empty."
A new record was created, and activated, to mark the cider now hooked up to Tap #1, with the status noted as "full."
The two active relationships at this point in time, October 10, 2020, are the Stout on Tap #2 and the Cider on Tap #1.

## BimlFlex Handling of Driving Keys

<!-- TODO: Clarify requirements for the automatic application of a driving key along with the reason it can be applied.  -->
BimlFlex is able to automatically apply Driving Key relationships to any Links that are derived out of a Hub, as they are based on Foreign Keys in the source and by definition imply a Driving Key scenario.
This will be automatically included in the SSIS package, no separate attribute will be added in the Attributes Sheet.
Driving Keys will automatically be included in the load logic, negating the need to edit any Attributes metadata.

<!-- TODO: Show screens of the process in BimlFlex.  -->
BimlFlex also offers users the ability to manually define Driving Keys.
To manually define a Driving Key attribute, users may edit the Link Table SK column that represents the Driving Key.
The Data Vault logic within the BimlFlex framework will include the required processing in the Link Satellite to maintain data consistency throughout loading by adding and closing relationships, emulating the behavior of the single Foreign Key relationship from the source.
Once defined, ETL logic will enforce the rule that he subject entity cannot be associated with multiple relationships at any given point in time.

> [!TIP]
> For additional information regarding BimlFlex's assignment of Driving Keys or the technical walkthrough for manually defining Driving Keys, please reference the following documents:
> * [Data Vault Templates](xref:data-vault-templates)
> * [BimlFlex Data Vault Best Practices](xref:data-vault-standards)
> * [Driving Keys](xref:driving-keys)