---
uid: bimlflex-build-server-install
title: BimlFlex Build Server Install
summary: Assistance on how to install a BimlFlex build server as part of a CI/CD pipeline
product: BimlFlex
type: Walkthrough
---
# BimlFlex Build Server Install

BimlFlex can be installed on a build server as part of a Continuous Integration and Continuous Delivery pipeline.

## Installation Media

A build server setup will require either the **BimlFlex Developer Installation** or the **BimlFlex Runtime Installation** based on the functionality of the build server. For more information on different build server setups and scenarios, see the [BimlFlex Continuous Integration and Continuous Delivery](xref:bimlflex-adf-continuous-integration-and-continuous-delivery) documentation.  

The latest installer is available here: [BimlFlex Release Notes](xref:bimlflex-release-notes)

## Installation

Depending on the build server setup and capabilities, the **BimlFlex Developer Installation** can be used for metadata access and compilation; or the **BimlFlex Runtime Installation** for building SSIS projects from pre-compiled SSDT projects.

### BimlFlex Developer Installation

For a full developer installation that will allow for more complete and customized automation, complete the BimlFlex Developer Installation using the [Installing BimlFlex](xref:bimlflex-installing-bimlflex) guide.

### BimlFlex Runtime Installation

For a process which uses pre-compiled SSDT packages, follow the [SSIS Server Installation](xref:bimlflex-ssis-server-install) guide.
