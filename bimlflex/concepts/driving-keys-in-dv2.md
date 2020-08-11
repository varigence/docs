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

### Tracking by Historical Relationship

A common model in Data Vault 2.0 methodology is to create a Satellite on the Link (LSAT) which contains history specific to the Link.
This allows one to track specific historical changes to a relationship.
<!-- without having to reference or query any of the Hubs or Links associated with the data. -->
<!-- The above cut out sections doesn't really fit that well. -->
Using LSAT is a benefit of Data Vault 2.0 that allows maintaining historical data where end-dated relationships may need to be reopened or reactivated again without fear of losing any data.
<!-- Tweaked above paragraph and migrated from the DK section.  LSAT's do not depend on a Driving Key.  -->

**For example:** Imagine the operation of a bar, which opens for business on August 10, 2020.
A bar will store kegs of different varieties of beer and then distribute those beverages through their tap system.

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
<!-- The architecture has now changed from a one-to-many relationship to many-to-many. -->
<!-- 
The above line is not correct.  The architecture is still one-to-many.  Tap #1 having both Pale Ale AND Stout at the SAME TIME would be many-to-many.
The above example shows TWO taps, each with a separate relationships, and each only having ONE beer. 
-->

<!-- 
## TODO: Also highlight the ability to accommodate a shift from many-to-on => many-to-many without issue.
## Almost there but has the issues stated above.  You could use the next for lines as adjustments.
## Take out the concept of tap and replace it with a BAR which would have multiple taps.  We start out only supplying one beer in Jan (due to one tap).
## Then next month we add a second tap to the BAR.  At this point we have two active relationship to the bar, Pale Ale (Jan) and Stout (Feb).
## This would be an example of many-to-many.  Important note, many-to-many CAN NOT have a Driving Key.  That is what I wanted to highlight.
-->

![Many-to-Many Link Relationship](/bimlflex/concepts/images/beer-link-many-to-many.jpg "Many-To_Many Link Relationship")

<!--
##  TODO: Outline example of a Driving Key and demonstrate the termination of a new relationship coming into a driving key. ##
##  TODO: Also highlight the requirement of a many-to-one and the potential pitfalls. ##
-->

<!-- Refactor below into above examples. -->

### Tracking by Driving Key

<!-- 
## TODO: Comment on how the above BEER/BAR design was an early business model which has since changed to your current BEER_TAP.
## Something to the effect of: After the instalation of the second tap (a previously unforseen circumenstance) the old model became
## difficulat to manage and report on.  Multiple active relationships were causing problems so after meeting with the business
## to gather more information we created a TAP concept and associated TAP_BEER.

## There would also then also be a BAR_TAP relationship that would close the gap and complete the previous report requirements.
## This is likely not needed to be mentioned though.  Just adding for context.
-->

<!-- 
## Note on your Link name.  Generally the primary business concept (if there is one) would be placed first in the name.
## In this case it is the TAP so it should really be TAP_BEER (or LNK_TAP_BEER if you want to use BFX default naming practice).
-->

In the above scenario the Taps business entity is defined as "driving," meaning that ETL enforces the logic that a single tap cannot be associated with multiple beers at the same point in time.

Referencing the above example of bar ownership again, a Link Satellite in this example might look like such:
<!-- 
## TODO: Do a similar example as below but for ## Historical Tracking above.
| LNK_TAP_BAR | STATUS | EFFECTIVE_FROM | EFFECTIVE_TO | IS_CURRENT |
| ----------- | ------ | -------------- | ------------ | ---------- |
| 1001        | FULL   | 2020-08-10     | 9999-12-31   | Y          |
| 2002        | FULL   | 2020-09-10     | 9999-12-31   | Y          |
-->

![Link Satellite](/bimlflex/concepts/images/link-sat-beers.jpg "Link Satellite")

<!-- The Link Satellite has, by design, created a "zero record" to initiate a historical data timeline. -->
<!--The above line is not accurate for basic LSAT design, and the "zero record" is a DK reference, not LSAT. -->

<!--
The zero record acknowledges the business entity 1001 (beer on Tap #1) but acknowledges that nothing was known about this relationship until the first record, August 10, 2020, when the bar first opened and the relationship was created.
The record for business entity 2002 (beer on Tap #2) was entered on September 10, 2020.
This record does not require a zero record since it did not exist prior to the creation of any historical data.
-->
<!-- The actual creation of the "zero record" is optional and not required so we should probably remove it from examples.  -->

<!--
Is isn't since when the record enters the system that determines the zero record creation, it is the relationship to the DK.
If it is the first record of a DK (in this case it would be Tap Number) then it would get a zero record.
2002 uses a separate TAP so it would get zero record.

Corrected Zero Record Example.
| LNK_TAP_BAR | STATUS  | EFFECTIVE_FROM | EFFECTIVE_TO | IS_CURRENT |
| ----------- | ------- | -------------- | ------------ | ---------- |
| 1001        | UNKNOWN | 1900-01-01     | 2020-08-10   | N          |
| 1001        | FULL    | 2020-08-10     | 9999-12-31   | Y          |
| 2002        | UNKNOWN | 1900-01-01     | 2020-09-10   | N          |
| 2002        | FULL    | 2020-09-10     | 9999-12-31   | Y          |
-->

After enough pints sold a keg will be kicked (emptied).
A new beer will then replace the old beer.
Data Vault keeps historical data so the record for the now kicked beer will be end-dated, and a new record will be created for the new relationship.

Assume that the Pale Ale on Tap #1 was kicked on October 10, 2020, and replaced later that same day with the cider being held in storage.

The changes to inventory might appear as such in the Link and Link Satellite:

![Link Satellite 2](/bimlflex/concepts/images/link-sat-beers-02.jpg "Link Satellite 2")

<!-- See inserted examples for what happens at each step. -->
The record for Pale Ale on Tap #1 expired on October 10, 2020, the date the keg kicked.
A new record was created to mark the termination on October 10, 2020, noting the status as "empty."

| LNK_TAP_BAR | STATUS    | EFFECTIVE_FROM | EFFECTIVE_TO   | IS_CURRENT |
| ----------- | --------- | -------------- | -------------- | ---------- |
| 1001        | UNKNOWN   | 1900-01-01     | 2020-08-10     | N          |
| 1001        | FULL      | 2020-08-10     | **2020-10-10** | **N**      |
| **1001**    | **EMPTY** | **2020-10-10** | **9999-12-31** | **Y**      |

A new record was created, and activated, to mark the cider now hooked up to Tap #1, with the status noted as "full."

| LNK_TAP_BAR | STATUS   | EFFECTIVE_FROM | EFFECTIVE_TO   | IS_CURRENT |
| ----------- | -------- | -------------- | -------------- | ---------- |
| 1001        | UNKNOWN  | 1900-01-01     | 2020-08-10     | N          |
| 1001        | FULL     | 2020-08-10     | 2020-10-10     | N          |
| 1001        | EMPTY    | 2020-10-10     | **2020-10-10** | **N**      |
| **1005**    | **FULL** | **2020-10-10** | **9999-12-31** | **Y**      |

The two active relationships at this point in time, October 10, 2020, are the Stout on Tap #2 and the Cider on Tap #1.

| LNK_TAP_BAR | STATUS  | EFFECTIVE_FROM | EFFECTIVE_TO | IS_CURRENT |
| ----------- | ------- | -------------- | ------------ | ---------- |
| 1001        | UNKNOWN | 1900-01-01     | 2020-08-10   | N          |
| 1001        | FULL    | 2020-08-10     | 2020-10-10   | N          |
| 1001        | EMPTY   | 2020-10-10     | 2020-10-10   | N          |
| 1005        | FULL    | 2020-10-10     | 9999-12-31   | Y          |
| 2002        | UNKNOWN | 1900-01-01     | 2020-09-10   | N          |
| 2002        | FULL    | 2020-09-10     | 9999-12-31   | Y          |

## BimlFlex Handling of Driving Keys

<!-- TODO: General intro section. -->

### Implied Creation of Driving Keys

<!-- TODO: Show screens of the Object table set appropriately and of the columns tab showing a relationship that will have a DK.  -->

BimlFlex is able to automatically apply Driving Key to any relationship created from a table being loaded with a *MODEL OBJECT TYPE* = `Hub`.
Due to the Foreign Keys in a database requiring a many-to-one in the source the application of a Driving Key scenario can be applied.
This will be automatically included in the ETL logic required and no separate **Attribute** will be added in the **Attributes Editor**.

### Manual Creation of Driving Keys

<!-- TODO: Show screens of the process in BimlFlex.  -->

> [!NOTE]
> Perquisites:
>
> - The Link must already be accelerated.
> - The column to be used for the Driving Key must be on the LNK (not LSAT).

BimlFlex also offers users the ability to manually define Driving Keys to the assignment of **Column Attributes**.
This is done be flagging the required **Column** on the LNK with an **Attribute** to indicate that it is the Driving Key.
The BimlFlex App will automatically enforce a Driving Key relationship on the LSATs associated with the LNK, terminating relationships as needed.

**Objects** => Select LNK => Attributes Tab => [Add]

| Field          | Entered Value           |
| -------------- | ----------------------- |
| Attribute Type | Column                  |
| Column         | Column to be used as DK |
| Attribute      | IsDrivingKey            |

> [!NOTE]
> For additional information regarding BimlFlex's assignment of Driving Keys or the technical walkthrough for manually defining Driving Keys, please reference the following documents:
>
> - [Data Vault Templates](xref:data-vault-templates)
> - [BimlFlex Data Vault Best Practices](xref:data-vault-standards)
> - [Driving Keys](xref:driving-keys)