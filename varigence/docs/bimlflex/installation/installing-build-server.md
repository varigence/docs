---
sidebar_position: 7
title: Installing a BimlFlex Build Server
description: Assistance on how to install a BimlFlex build server as part of a CI/CD pipeline
tags: [BimlFlex, Walkthrough]
---
# BimlFlex Build Server Install

BimlFlex can be installed on a build server as part of a Continuous Integration and Continuous Delivery pipeline.

## Installation Media

A build server setup will require either the **BimlFlex Developer Installation** or the **BimlFlex Runtime Installation** based on the functionality of the build server. For more information on different build server setups and scenarios, see the [BimlFlex Continuous Integration and Continuous Delivery](bimlflex-adf-continuous-integration-and-continuous-delivery) documentation.  

The latest installer is available here: [BimlFlex Release Notes](bimlflex-release-notes-overview)

## Installation

Depending on the build server setup and capabilities, the **BimlFlex Developer Installation** can be used for metadata access and compilation; or the **BimlFlex Runtime Installation** for building SSIS projects from pre-compiled SSDT projects.

### BimlFlex Developer Installation

For a full developer installation that will allow for more complete and customized automation, complete the BimlFlex Developer Installation using the [Installing BimlFlex](bimlflex-setup-installing-bimlflex) guide.

### BimlFlex Runtime Installation

For a process which uses pre-compiled SSDT packages, follow the [SSIS Server Installation](bimlflex-setup-ssis-server-install) guide.
