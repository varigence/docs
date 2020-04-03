# Preparing to Build the Example Project

At this point, all the tables necessary for the example project have been modeled. This is a good point to build the project, so that you can verify what's been produced so far. There are several steps involved in building the project: verifying the physical setup of the project, checking for design time errors, and verifying project settings.

## Checking for Errors

The Error List tool window displays errors. By default, it is displayed in a tab at the bottom of the BimlStudio window. If it is not visible, you can show it by selecting the Error List from the View button on the Home tab of the ribbon. The Error List shows 3 categories of messages. Errors will prevent a build from succeeding. Warnings are issues that should be addressed, but will not prevent a successful build. Messages provide suggestions for improvements, and will not prevent a successful build. You can filter each category of message by clicking the buttons at the top of the Error List. The example project should only have one item in the error list, a warning. This warning comes from the source tables that you imported in an earlier step. You can safely ignore it, since the source tables are only included for metadata. If there are any errors or other warnings, review the preceding steps to see if there are any differences.

![Error List](https://varigencecom.blob.core.windows.net/images-mistdocumentation/011_ErrorList.png)

### Verify Project Settings

The project settings allow you to control various aspects of the project and build process. This includes the version of the SQL Server technologies that you are targeting, the location of the Hadron compiler, and the output folder for the compiled BI assets. To review the project settings, see [Configuring Project Settings](../miscellaneous/configuring-project-settings.md). For the example project, make sure that all versions are targeting your current version of SQL Server. Also confirm that the Warn As Error check box is unchecked. Your project settings should look similar to this, but with the appropriate version of the SQL Server technologies selected:

![Project Settings](https://varigencecom.blob.core.windows.net/images-mistdocumentation/011_ProjectSettings1.png)

![Project Settings](https://varigencecom.blob.core.windows.net/images-mistdocumentation/011_ProjectSettings2.png)

Once you have verified the project settings and that there are no errors, you are ready to build the project.
