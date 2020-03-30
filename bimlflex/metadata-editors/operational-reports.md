---
uid: bimlflex-operational-reporting
title: BimlFlex Operational Reporting
---
# Operational Reporting

Execution logging it built into BimlFlex package runs. The package execution details are logged to a BimlCatalog database and this data is available for reporting. The BimlFlex app surfaces the data into Operational Reporting screens to allow users to see the status of their package runs at a high level and to drill down into details and view errors of failing packages.

## Configuring Operational Reporting

The Operational Reporting BimlCatalog is set up on a per-customer basis and is only required once per customer.

Create BimlCatalog connections for each environment by providing the Name and Connection String.

![Operational Reporting Selection -center](images/bimlflex-app-operational-reporting-selected.png "Operational Reporting Selection")

## Reporting Screens

If there is reporting data for the Batches and Projects in the currently selected version the Dashboard will display a summary view.

The reporting screens are broken up into three views of the data:

* The top-level summary view will show the latest execution details for each batch.
* The second level shows the 5 most recent execution runs for a specific batch.
* The third level shows the package details and errors (if any) for a specific execution batch and its child packages

Level 1 - Latest execution details for each batch

![Operational Reporting Level 1 -center](images/bimlflex-app-operational-reporting-level1.png "Operational Reporting Level 1")

Level 2 - 5 most recent execution runs for a specific batch

![Operational Reporting Level 2 -center](images/bimlflex-app-operational-reporting-level2.png "Operational Reporting Level 2")

Level 3 - details of specific execution batch and its child packages

![Operational Reporting Level 3 -center](images/bimlflex-app-operational-reporting-level3.png "Operational Reporting Level 3")

### Lookup Execution Id

There is a Execution Id lookup field in the First Level screen. Use it if you know the execution id (may be called Audit Id in SSIS) and you would like to go straight to the package execution details. If the Execution Id points to a batch all the batch and child information will be available. If it points to a child package, then only that package information will be available on the details screen.