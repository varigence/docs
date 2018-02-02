<div class="LanguageTitle">Vivid User Guide</div>

The Drillthrough Detail function provides drillthrough information for a specific value in the pivot table. This feature is similar to the Drillthrough Detail action that is provided by Microsoft SQL Server 2005 Analysis Services (SSAS) to Excel, with some key enhancements, as described in the section, "Drillthrough Detail Advantages."

### Performing a Drillthrough

To perform a drillthrough, right click a value in the pivot table and select Vivid Drillthrough Detail, or double-click a value in the pivot table.

![Drillthrough Details](https://varigencecom.blob.core.windows.net/walkthroughs/Drillthrough-1.PNG)

###### **Performing a Vivid Drillthrough.**

The drillthrough creates one new sheet for each measure group for which it is returning drillthrough information. Multiple sheets can be returned when drillthrough is being performed on a calculation that is composed of multiple measure groups.

If the process of computing a drillthrough requires retrieving more than 10,000 rows, a warning box is displayed, and you are given the option to end the drillthrough at 10,000 rows or to continue. (Note: This 10,000-row warning does not mean that the result will have 10,000 rows in it. The 10,000 rows may be necessary for intermediate processing.)

### Drillthrough Detail Advantages

- Ability to perform a drillthrough when there are multiple selections of a member in the page filter.
- Ability to perform a drillthrough on calculations and named sets, minus the limitations detailed in the "Drillthrough Detail Limitations" section.
- The set of returned drillthrough columns can be defined directly in the report rather than requiring a change to the server-side cube. See the "Drillthrough Column Editor" section for more details about how to specify the columns to be returned by a drillthrough.

### Drillthrough Detail Limitatio

- Drillthrough cannot be performed on a key performance indicator (KPI) value.
- Drillthrough cannot be performed on calculations or named sets that contain MDX queries.
- Drillthrough performance can be adversely affected by having multiple-selection page filters. See the "Optimizing your Drillthrough Detail Query" section for more information.

### Optimizing your Drillthrough Detail Query

- Multiple selections in the page filter do not improve the performance of drill-throughs.
- Converting a single-select page filter to a multiple selection might decrease the performance of the drillthrough, and, in some cases, the performance degradation could be significant.
- Single-selects on distinct members might improve the performance of the drillthrough. They will never make the performance worse.

