# Driving Keys in Data Vault

A **Driving Key** is a **Unique Key** on a Link that is used to determine the effectivity of relationship or series of relationships.
This is commonly used when a relationship should be tracked based around a Business Concept itself vs individual expiry records on the Link table.
These can be used to enforce a many-to-one relationship on the otherwise many-to-many construct of a Link.
The a Driving Key is used to shift the focus to a driving Business Concept vs an observed interaction.

# Driving Key Observability

From a modelling perspective Driving Keys are not so much a separate construct as much as they are a qualifier on an existing one.
In practice a Driving Key is a term given to an existing Business Concept to 'drive' a Link.
The key itself is commonly the Business Key of the driving Business Concept or a source key persisted as a degenerate field on the Link itself.
Driving Keys don't some much change a model, rather they indicate how ELT/ETL should be performed and a relationship maintained.

## Relationships in a Data Vault

A core tenet of Data Vault modelling methodology is to track relationships in a Link and to be modeled as a many-to-many relationship.
Effectivity is then tracked in a Satellite based on the observation of when a unique interaction of business concepts are observed.
When a relationship is observed for the first time it is created and marked as active based on the date it was observed.
When a relationship is terminated similar logic is used and the relationship is terminated based on the date of the observed termination.
By nature these exist exclusively with no relation to any other observed relationship.
A Driving Key is required when a relationship should be tracked, observed and terminated based around a central Business Concept vs the relationship itself.
Effectivity is then started and ended based on when a Business Concept was first observed and when a relationship change occurs on the driving business concept..

<!--
### Tracking by Historical Relationship
##  TODO: Outline example of a normal Link lifecycle demonstrating no relationship or importance to any other record. ##
##  TODO: Also highlight the ability to accomadate a shift from many-to-on => many-to-many without issue. ##
-->

<!--
### Tracking by Driving Key
##  TODO: Outline example of a Driving Key and demonstrate the termination of a new relationship coming into a driving key. ##
##  TODO: Also highlight the requirement of a many-to-one and the potential pitfalls. ##
-->

Once defined, ETL logic will enforce the rule that he subject entity cannot be associated with multiple relationships at any given point in time.
A Driving Key will confirm the instance of a relationship but not the effectivity of one.

For example: Within AdventureWorksLT there exists a relationship between a Product and its Product Category. AdventureWorksLT only allows a single Product to be a part of a single Category. If the Product is moved from one category to another, then it will cease to be a part of the previous category.

<!-- Refactor below into above examples. -->
## Driving Key Link Satellites (LSAT)

A common model in Data Vault 2.0 methodology is to create a Satellite on the Link (LSAT) which contains history specific to a Driving Key.
This allows one to track specific changes to a Driving Key without having to reference or query any of the Hubs or Links associated with the data.
Using a LSAT to track Driving Key history provides users with two different perspectives of data over time: The history of the individual relationships as kept within the Links, and the history from a Driving Key perspective, as kept within the Driving Key LSAT.
Using LSAT is a benefit of Data Vault 2.0 that allows maintaining historical data where end-dated relationships may need to be reopened or reactivated again without fear of losing any data.

## BimlFlex Handling of Driving Keys

<!-- TODO: Clarify requirements for the automatic application of a driving key along with the reason it can be applied.  -->
BimlFlex is able to automatically apply Driving Key relationships to any Links that are derived out of a Hub, but also allows users the ability to define Driving Keys manually.
Driving Keys will automatically be included in the load logic, negating the need to edit any Attributes metadata.
<!-- TODO: Show screens of the process in BimlFlex.  -->
To manually define a Driving Key attribute, users may edit the Link Table SK column that represents the Driving Key. The Data Vault build logic within the BimlFlex framework will include the required processing in the Link Satellite to maintain data consistency throughout loading by adding and closing relationships, emulating the behavior of the single Foreign Key relationship from the source.

> [!TIP]
> For additional information regarding BimlFlex's assignment of Driving Keys or the technical walkthrough for manually defining Driving Keys, please reference the following document:
