---
theme : "moon"
customTheme : "varigence"
transition: "none"
highlightTheme: "darkula"
---

# Todo

[] complete content

---

# BimlFlex Training

## Source To Staging

BimlFlex Training materials for source to staging and persistent staging processes

---

# Source To Staging

BimlFlex Training materials for source to staging and persistent staging processes

A core feature of BimlFlex is to be able to load data from a source and consistently stage and persist this data through the loading process. The source to staging to persistent staging process contains the following components

* Source
* Staging database or location
* Persistent Staging database

The staging area is generally dedicated to holding delta datasets loaded from the source.

The persistent staging is generally dedicated to tracking all changes to the source by applyign deltas from the staging area to the persistent staging area.

---

## Different flavors of sources

BimlFlex uses SSIS to extract data from sources to staging. There are a number of sources directly supported by BimlFlex and there are options to override the sourcing for custom sources.

For sourcing data it is also possible to apply parameters to the loads so that only the required data is loaded from the source.

---

## Different flavors of staging

The staging area can be either a database destination or a blob storage destination.

database staging areas store the deltas in tables. blob storage staging stores the deltas in flat files in Azure blob storage.

---


Different flavors of persistent staging

---

# vscode-reveal

### Awesome VS code extension using The HTML Presentation Framework Revealjs

<small>Created by [Hakim El Hattab](http://hakim.se) / [@hakimel](http://twitter.com/hakimel)</small>

---

## Hello There

reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.

---

## Vertical Slides

Slides can be nested inside of each other.

Use the _Space_ key to navigate through all slides.

<a href="#" class="navigate-down">
    <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
</a>

--