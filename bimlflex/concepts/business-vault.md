---
uid: bimlflex-business-vault
title: Designing Business Vault Entities
summary: Walk through on how to approach adding of various BDV entities into your BimlFlex Solution
---
# Designing a Calculated Satellite

## Virtualization and Virtual Constructs

## Satellite Derivatives

### Calculated Satellite (CSAT)

## Link Derivatives

### Calculated Link (CLNK)

### Exploration Link (XAL)

## Simple Business Rules

## Advanced Business Rules (Multi-pass/Dependencies)

## Maintaining History

---

The Business Vault constructs you have listed do not differ in design from any of their RDV counterparts.
The loading of a COMPUTED SATELLITE (CSAT) is no different from the loading of an RDV SAT.

BimlFlex does not design the rules


1.	How BIMLFlex will manage the “Microsoft Azure SQL Change Tracking solution” to get the source delta data and load the staging area? (±30 minutes)
    - Loading 37-lrb-bfx-test-00-df

2.	How to load a COMPUTED SATELLITE with a simple business rule? (±15 minutes)
    - STG Query SAT (CREATE)

3.	Then how to deal with complex multi-pass business rule?  (±30 minutes)
    - STG Query SAT (CREATE)

4.	How do BIMLFlex manage the interdependency of the different business rules (the result of a computed satellite use by another one)?  (±15 minutes)
    - **Object** *DEPEND ON OBJECT*
      - Only support one depending entity
      - Can chain dependencies ( A <- B <- C:  C needs B and B needs A.  A will run first, then B, then C.)
    - Possible Convention Adjusts
      - Use separate **Projects** for separate layers of decencies

5.	How to create a computed aggregated link? (±15 minutes)
    - STG Query

6.	How to create an exploration link? (±15 minutes)
    - STG Query

7.	How to create an virtual computed satellite (VIEW)? (±15 minutes)
    - Custom SQL View.
    - Outside the BimlFlex Ecosystem

8.	How do we maintain an history of the business rules evolution (versions, business and technical descriptions, creation and modification date, approbation information, etc…) (±15 minutes)
    - Source Control Views
    - Use a a **Object Level Setting Override** for `RowRecordSource` with view version number

9.	Could you demonstrate how to generate the project documentation?   What is available? Data mapping, business rules, etc…   (±15 minutes)
    - Schema Diagram
    - Column Mapping
    - Notes:
      - Custom views not tracked (CSAT, CLNK, DM Views, etc.)
      - PIT / BRG Relationships not yet tracked
      - Mapping only support 1 layer at a time (STG => RDV)

10.	Wrap up (±15 minutes)


