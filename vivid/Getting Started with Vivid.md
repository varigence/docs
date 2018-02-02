<div class="LanguageTitle">Getting Started with Vivid</div>

We're not just changing the way you interact with Excel, but how you make decisions and analyze your business. This guide will get you started with Vivid. In this walkthrough you'll do the following:

1. Download and install Vivid
2. Get a license key
3. Run Excel/Vivid to create a pivot table against a cube
4. Use a few of the interesting pivot table features of Vivid

###Downloading & Installing

The first thing you need to do is get Vivid downloaded and installed. To download Vivid go to the [Vivid product page](http://varigence.com/Vivid)
Simply execute Vivid.exe to start the installation process. You may be prompted to install several prerequisites that include .NET Fx 3.5SP1, .NET Fx 4.0, ADOMD.NET, VSTO 4.0 Runtime. If you have any issues during installation, please contact [support@varigence.com](mailto:support@varigence.com "").

###Running Vivid

As Vivid is an Excel add-in, to run Vivid simply start Excel. The first time you start Excel you will be prompted with a dialog requesting a license key:
<br></br>
![Enter Product Key](https://varigencecom.blob.core.windows.net/walkthroughs/1.1-getting-started.PNG 'title here.')
<br></br>
If you already have a license key; copy it into the text field (white space is ignored, so you don't need to worry about trailing spaces or carriage returns) once you've entered the license key click "Commit". If you don't have a license key then you can request one by clicking the "Get Trial Key" button. This opens the following dialog requesting your email address, Name, and Company. After filling out your information click the "Submit" button and the license key will be shortly emailed to you (usually within a minute).
<br></br>
![Trial Activation](https://varigencecom.blob.core.windows.net/walkthroughs/1.0-trial-activation.PNG)
<br></br>
If you don't see it, please be sure to check your spam inbox in your email client. If you still don't see it, click the "Request License Key" button again, only this time, click the "Behind a Firewall?" link on the bottom left, and fill out the information on the webpage. If neither of these options work, send an email to support@varigence.com to your request for trial license key. After you get your license key in email, copy it to the dialog and click "Commit". After this Excel will load and you will see a tab in the ribbon labeled "Vivid".
<br></br>
![Vivid Ribbon](https://varigencecom.blob.core.windows.net/walkthroughs/1.3-getting-started.PNG)
<br></br>
###Creating a Pivot Table for a Cube

The next step is connecting to a SQL Server Analysis Services (SSAS) datasource or a PowerPivot source. In this tutorial we assume that you already have a connection saved to an existing SSAS datasource. The steps to create a new pivot table to a cube are identical to the steps you would use if you were using basic Excel without Vivid. Follow these steps:

1. Click the "Data" tab in the ribbon.
2. Click "Existing Connections" in the ribbon.
3. Double-click one of the SSAS connections in your list.
4. In the "Import Data" dialog, click "OK" to accept the default setting.

When the cube loads it should have an empty pivot table in the sheet.
<br></br>
![Pivot Table](https://varigencecom.blob.core.windows.net/walkthroughs/1.4-getting-started.PNG)
<br></br>
###Playing With Pivot Tables and Vivid

Go to the Vivid Pivot Table Editor on the right side of the screen and expand some of the measure groups and dimensions. Hover over some of the measures and dimensions and you will immediately see useful information in the form of hover popups.
<br></br>
![Pivot Table Editor](https://varigencecom.blob.core.windows.net/walkthroughs/1.5-getting-started.PNG)
<br></br>
Now we'll just show a few features of Vivid. First let's add a measure to the pivot table.

1. Click the "expand/collapse all" button to expand all of the measure groups.
2. Next, click a measure to add it to the pivot table.

Next we'll add a hierarchy to the pivot table.

1. Click the "expand/collapse all" button to expand all of the dimensions.
2. Now drag any hierarchy to the pivot table overlay and place it in rows. As you begin to drag any hierarchy the pivot table overlay will appear.

<br></br>
![Drag and Drop Editor](https://varigencecom.blob.core.windows.net/walkthroughs/1.6-getting-started.gif)
<br></br>

If you're using Excel 2010 then let's add a hierarchy to the slicers. If you're using Excel 2007, skip this step.

1. Drag any hierarchy from the pivot table editor to the image in the pivot table overlay that looks like a slicer and drop it on the image.
2. If the hierarchy has multiple levels, the slicers will be stacked on top of each other. Just move them to view the underlying slicer.

<br></br>
![Pivot Table](https://varigencecom.blob.core.windows.net/walkthroughs/1.7-getting-started.PNG)
<br></br>

Now let's perform a pivot table transformation. We will perform a cross drill. To do this right click the name of hierarchy in the row of the pivot table and then click "Vivid Cross Drill". From there you will see list of eligible hierarchies: click any one of these hierarchies. The resulting pivot table has been cross drilled and thus the hierarchy that was original in the row now in the page filter, and the hierarchy you just clicked on is now in the row of the pivot table.

<br></br>
![Pivot Table Transformation](https://varigencecom.blob.core.windows.net/walkthroughs/1.8-getting-started.gif)
<br></br>

###Review

Those are just a few features in Vivid:

1. Expand/Collapse measure groups/dimensions
2. Drag and drop slicer support
3. Pivot Table Editor hover captions
4. Cross drill transformation

There are many [additional features](http://www.varigence.com/vivid ""). Check them out and start experimenting. You will quickly see that Vivid will be an integral part of Excel going forward.
