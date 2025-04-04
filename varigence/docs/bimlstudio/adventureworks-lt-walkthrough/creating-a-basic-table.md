---
sidebar_position: 9
title: Creating a Basic Table
description: Documentation of how to create a basic table in BimlStudio
tags: [BimlStudio, Walkthrough]
---
Biml supports several types of tables, so when you are creating a new one, your first action will be to choose a type. Here are the types and their uses:

<table>
<tbody>
<tr>
<th>Type</th>
<th>Use</th>
</tr>
<tr>
<td>Table</td>
<td>Represents a basic relational table</td>
</tr>
<tr>
<td>CloneTable</td>
<td>Represents a copy of an existing table, with the ability to add additional columns.</td>
</tr>
<tr>
<td>View</td>
<td>Represents a view, and supports additional modeling necessary for defining SQL definition.</td>
</tr>
</tbody>
</table>

#### Create Table

1.  Right click on the Tables node in the logical view, and click Add Table from the resulting menu. A new table will be added with the default name Table_n_, where n equals the count of tables in the model.  
    ![Context Menu - Add Table](/img/bimlstudio/006_Step01.png)
2.  Right click on the newly added table node in the logical view, and choose Rename. Enter the new name value (EtlLog in this example) and press Enter to save the change.  

3.  Select EtlLog in the logical view, and change the Schema drop down in the Properties tool window to AdventureWorksLTDataMartDatabase.AdventureWorksLTDataMartSchema.  

    If the Properties tool window is not visible, you can show it by selecting the Home tab and the View split button.

4.  Double-click or right-click on EtlLog and choose View Designer to open the designer.  

5.  Add a column to the table by clicking the **Column** button on the Tables ribbon, alternatively you can also click the **Add Table Column** plus sign. For this example, add a regular Table Column.  
    ![Table Ribbon - Add Table Column](/img/bimlstudio/006_Step06.png)
6.  Change the column's name from Column1 to EtlLogId by selecting the Column1 value in the grid, and pressing F2 to begin editing. You can also just begin typing in the field.
7.  Repeat steps 6 and 7 to add the following columns:

    <table>
    <tbody>
    <tr>
    <th>Name</th>
    <th>Data Type</th>
    <th>Length</th>
    </tr>
    <tr>
    <td>StartTime</td>
    <td>DateTime</td>
    </tr>
    <tr>
    <td>EndTime</td>
    <td>DateTime</td>
    </tr>
    <tr>
    <td>Status</td>
    <td>String</td>
    <td>50</td>
    </tr>
    </tbody>
    </table>


    After adding the columns, the columns grid should look like this:  
    ![Table Columns Data Grid](/img/bimlstudio/006_Step08.png)
8.  To add an identity key, click the lower portion of the Key split button, and select Identity.  

9.  Drag and drop the EtlLogId column to the newly created key. Start dragging from the Type column. The cursor will change to black pointer with 4 arrows when your mouse is in the correct location to start a drag and drop operation. Drop the column on the IK_EtlLog key to add the column to it.  
    ![Table Designer - Add Column to Key](/img/bimlstudio/006_Step10.gif)

    <div class="Note">Identity Keys are automatically treated as the primary key for a table in BIML. If you need an identity column that is not the primary key, this can presently be done with an alter table script in the CustomExtensions for the table.</div>

10.  To add an index, click the Index button in the ribbon. A new index will be added. You may need to scroll the designer window to the right to see the indexes section.
11.  Right click on the Columns folder under IX_EtlLog1, and choose Add Columns..EtlLogId.  
    ![Context Menu - Add Column to Table Index](/img/bimlstudio/006_Step12.png)
12.  Save the project to persist your changes to the project files.

The table has now been created and is part of the model.


#### View Biml
If you right click the table and click **View Biml** it should look similar to the following snippet.
```biml
        <Biml xmlns="http://schemas.varigence.com/biml.xsd">
            <Tables>
                <Table Name="EtlLog" SchemaName="AdventureWorksLTDataMartDatabase.AdventureWorksLTDataMartSchema" LogicalDisplayFolder="AwDm">
                    <Columns>
                        <Column Name="EtlLogId" />
                        <Column Name="StartTime" DataType="DateTime" />
                        <Column Name="EndTime" DataType="DateTime" />
                        <Column Name="Status" DataType="String" Length="50" />
                    </Columns>
                    <Keys>
                        <Identity Name="IK_EtlLog" Clustered="true">
                            <Columns>
                                <Column ColumnName="EtlLogId" />
                            </Columns>
                        </Identity>
                    </Keys>
                    <Indexes>
                        <Index Name="IX_EtlLog1">
                            <Columns>
                                <Column ColumnName="EtlLogId" />
                            </Columns>
                        </Index>
                    </Indexes>
                </Table>
            </Tables>
        </Biml>
```
