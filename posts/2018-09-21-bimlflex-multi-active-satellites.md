---
categories: [BimlFlex]
layout: post
published: false
summary: This BimlFlex webinar looks at Multi-Active Satellites in Data Vault
tags: [BimlFlex]
title: BimlFlex 2018 - Multi-Active Satellites in Data Vault
---
# BimlFlex 2018 - Multi-Active Satellites in Data Vault

This BimlFlex webinar looks at Multi-Active Satellites in Data Vault.

This webinar is based on a post by [Roelant Vos](http://roelantvos.com/blog/) that is available here: [http://roelantvos.com/blog/?p=2175](http://roelantvos.com/blog/?p=2175)

## Overview - What is multi-active

Multi-Activeness follows several different schools of thought:

* Various options and consequences to consider
* Multi-active, 'Multi-variant' or 'Multi-valued'
* Satellites is one of these areas where opinions vary
* Data doesn’t fit the ideal world of your target
* Context doesn’t quite fit the granularity of the Hub
* Satellite has multiple active records for a given business key

## Multi-active patterns

Three options for implementing:

Some would argue that multi-active breaks the Satellite pattern. After all, the context is not directly describing the business key anymore.

* Incorporate a multi-active attribute in the Satellite
* The advantage of this is that you limit the number of tables
* The disadvantage is support additional ETL pattern
* Development and interpretation of model more complex
* Context is stored at different level and more complex to query
* Impact on Point in Time queries

## Scenario 1: Multi-active attribute in the Satellite

This scenario adds the attribute from the source that defines the multi-activeness as an additional key in the Satellite. This changes the grain of the table and allows multiple values for the same Hub key to be active at the same time. This approach allows for easy storing of multiple values directly attached to a Hub, however also presents challenges for querying the Satellite and adding the contents to a Point In Time construct

**BimlFlex Demo**  
Data Warehousing at the best of times is a complex undertaking and BimlFlex has been specifically designed to simplify the development process and subsequent maintenance.

## Scenario 2: Separate Satellite

This scenario adds separate Satellites for each multi-active attribute and works well when there is a distinct, well-defined, static number of attributes. By separating the contextual information across separate Satellites it is possible to easily add them to a Point In Time construct, however should the multi-valued attribute domain change, new Satellites or even a new approach is required

**BimlFlex Demo**  
Data Warehousing at the best of times is a complex undertaking and BimlFlex has been specifically designed to simplify the development process and subsequent maintenance.

## Scenario 3: Creating a Keyed Instance Hub

By viewing the multi-activeness as a Data Vault Unit Of Work rather than a set of attributes attached to a single Hub it is possible to create a separate relationship to a separate Hub bearing the attributes in a separate Satellite. This applies the original grain to the original Hub, and a Link relationship to a new Hub on the same grain as the previously multi-active attributes. This approach views the multi-activeness as a relationship in its own right and allows the Data Vault constructs store the data without multi-active Satellites

**BimlFlex Demo**  
Data Warehousing at the best of times is a complex undertaking and BimlFlex has been specifically designed to simplify the development process and subsequent maintenance.

## Which approach should I pick?

**Roelant Vos**  
Scenario 1:  
The approach to follow largely depends on your personal preferences and (almost philosophical) views.

**Peter Avenant**  
Scenario 3:  
Multi-active functionality (i.e. the 'scenario 1') will be hidden by default in a future release of BimlFlex (still supported however).

It does appear that the traditional multi-active concept comes with certain challenges for many people. It's a recurring topic in the trainings I host, and I have seen it go wrong in various projects.

The reason seems to be that in these cases the selected multi-active key wasn’t as immutable as first thought, which can lead to overloading complexity when querying data from the Data Vault.

## Watch the Webinar

<iframe width="853" height="480" src="https://www.youtube.com/embed/8UdK9opFWL4?rel=0&autoplay=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>