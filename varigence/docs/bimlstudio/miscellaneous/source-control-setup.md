# Source Control Setup

BimlStudio has the ability to work with projects that are stored in TFS and Subversion source control environments. To work with either source control environment, some additional setup is required.

## Subversion

1. Install CollabNet's Subversion client, which can be downloaded from [CollabNet Subversion downloads](http://www.collab.net/downloads/subversion/).
    * Neither SlikSVN nor other Subversion clients are currently supported.

1. Install TortoiseSVN from [TortoiseSVN downloads](http://tortoisesvn.net/downloads.html).
    * Do **not** install the command line client tools when installing Tortoise SVN.

1. Ensure paths to svn.exe (installed with CollabNet's Subversion client) and tortoiseproc.exe (installed with TortoiseSVN) are in your Path environment variable.

1. Add your BimlStudio project to your Subversion working copy.
    * If no working copy is present, then it must be created. See the [Tortoise documentation](http://tortoisesvn.net/docs/nightly/TortoiseSVN_en/tsvn-dug-checkout.html) for more information.

1. Open the project in BimlStudio.

## TFS

1. Ensure tf.exe is available on the machine where BimlStudio is installed.
    * tf.exe is not included in VS 2008 installations. It can be downloaded from the[Visual Studio Team System 2008 Team Explorer](http://www.microsoft.com/en-us/download/details.aspx?id=16338) package.
    * tf.exe is included, by default, in VS 2010 installations.

1. Install the Team Foundation Server Power Tools, which can be downloaded from [Visual Studio Power Tools](http://msdn.microsoft.com/en-us/vstudio/bb980963.aspx)

1. Add your BimlStudio project to a TFS workspace. 
    * To create a TFS workspace that contains your project, see the MSDN documentation for [Visual Studio 2008](http://msdn.microsoft.com/en-us/library/cc138512) and [Visual Studio 2010](http://msdn.microsoft.com/en-us/library/cc138514) users.
    * To add files and folders to TFS version control, see the [MSDN documentation](http://msdn.microsoft.com/en-us/library/ms181392)
    * For those just getting started with TFS, MSDN provides detailed documentation on how TFS works and how to use it.

1. Open the project in BimlStudio.

1. In Project View, right click on the project and select **Properties**.

    ![Project Context menu](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/1.png)

1. In the Properties designer, press the **Locate tf...** button.

    ![Locate tf button highlighted](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/2.png)

1. Find tf.exe on your system and press **Open**. The path to tf.exe will be automatically inserted in the tf Path textbox.

    ![Locate tf dialog box](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/3.png)

    ![tf Path textbox](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/3a.png)

1. If your TFS enlistment requires logon credentials, press the **Change Credentials** button.

    ![Change Credentials button highlighted](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/4.png)

1. Enter your username and password in the Credentials dialog box and press **OK**.

    ![Credentials dialog box](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/5.png)

1. Click the **Reload Project** button.

    ![Reload Project button highlighted](https://varigencecom.blob.core.windows.net/images-mistdocumentation-sourcecontrolsetup/6.png)
