---
title: Troubleshooting Tips
description: Troubleshooting tips for when errors occur within BimlFlex or BimlStudio
---
# Troubleshooting Tips

When an error occurs in any of the BimlFlex components, or the operation of your data solution in general, these tips can help to identify the root cause.

The approach of BimlFlex is to deliver high quality output (data logistics, table structures) that are deployed to the native environment - for example Azure, Snowflake or on-premise SQL Server. The design and management of the design information is managed in the BimlFlex App, but the day-to-day operation of the outputs are in the domain of application control and (database) administration and fall outside the scope of the platform.

## BimlFlex Community

Even though BimlFlex contains all features necessary to deliver a complete data solution, there may be different ways a given organization or team would like to work with some of the (many) aspects that comprise a data solution.

Varigence has created [`BimlFlex Community`](https://github.com/varigence/BimlFlex-Community), an open source repository on GitHub, to provide a public space to share useful scripts, additional tooling and performance tuning ideas that may help to improve your data solution.

This repository contains various content such as, but not limited to:

* SQL scripts that validate the data solution against conventions.
* Additional reporting models for Power BI.
* Troubleshooting hints and tips.
:::note


> The BimlFlex Community GitHub content is not supported by Varigence, but managed by BimlFlex practitioners. Scripts and tooling may need to be adjusted for a local environment.

:::


## Managing Performance Concerns

The topic of (adequate) performance is complex and multi-faceted. Many factors play a role, including the configuration of the technical environment, the way data logistics are implemented (code, patterns, SQL) and maintenance schedules.

The team at BimlFlex is always interested to understand how generated code can be improved, and feedback is welcome via [support@bimlflex.com](mailto:support@bimlflex.com).

Managing the day-to-day operation of the data solution is done by the incumbent team within the organization, for example the BI or Data Warehouse team that has designed the solution using BimlFlex.

There are various high-quality frameworks for investigating and addressing performance issues, and they are a good place to start in case performance is a concern:

* The '[First Responder Kit](https://github.com/BrentOzarULTD/SQL-Server-First-Responder-Kit)' for SQL Server by Brent Ozar has extensive monitoring capabilities, and will find many common issues.
* It is important that databases run on a maintenance plan. For this the [SQL Server maintenance solution](https://ola.hallengren.com/) by Ola Hallengren is a good solution to consider.
:::note


> Public GitHub or 3rd party scripts and concepts are not supported by Varigence.

:::


## Reviewing BimlStudio Errors

BimlStudio has an error window that will display all metadata errors and validation issues, errors, and warnings. For most metadata errors resulting in known build errors, the logical view will be left empty. This stops any follow on errors to be displayed. Review the error message in the errors list and resolve it to re-populate the entity list.
