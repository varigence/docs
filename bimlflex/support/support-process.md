---
uid: bimlflex-support-process
title: BimlFlex Support Process
summary: Documentation on accessing Varigence Biml support, including creating a case and required information to be provided
---
# Support Process

For Varigence to be able to provide the best possible support for issues encountered while using BimlFlex the following process is recommended.

## Creating a Support Case

BimlFlex support is provided through a dedicated email address:

[support@bimlflex.com](mailto:support@bimlflex.com)

The BimlFlex Support team will create a support ticket and communicate as appropriate to resolve issues. Please reply to the ticket email when updating the case with any additional information.

## Support Case Required Information

For Varigence to be able to analyze and provide information for a case, the included information needs to be detailed enough so that the context is clear and the steps to reproduce the scenario are available.

To minimize the potential waiting period, and if possible, always include the metadata debug when opening a BimlFlex support case, including any Extension Points that the project may have adopted.

This information can be extracted through either the BimlFlex Applicationor BimlStudio.

Saving the metadata to file creates a zip file that can be sent to the BimlFlex support team. If a secure upload link is needed due to size or security concerns, please contact the support team.

### Exporting metadata from BimlFlex

In the BimlFlex Application the relevant metadata can be made available, by using the `Export Metadata` feature in the Actions pane. The Actions pane is located on the home screen of the application.

![Export Metadata](../static/img/bimlflex-ss-v5-bimlflexapp-actions-pane.png "Export Metadata")

### Exporting metadata from BimlStudio

In BimlStudio, the exporting metadata feature can be accessed by using the `Debug Utilities` feature in the BimlFlex Ribbon.

![Debug Utilities](../static/img/bimlflex-ss-v5-debug-bimlflex-utility.png "Debug Utilities").

From here, a connection to the BimlFlex metadata database can be made.

Please choose the relevant Customer and Version in the dropdown boxes and verify the obfuscation options. Obfuscation will replace / obfuscate keys and passwords from the database connections and settings.

Tick the Include Project Folder in Zip checkbox to also add the project files and Extension Points to the generated archive file.

Metadata can be saved to file from here and emailed to the support team.
