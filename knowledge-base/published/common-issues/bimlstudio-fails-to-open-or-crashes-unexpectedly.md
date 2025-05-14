---
uid: kb-bimlstudio-fails-to-open-or-crashes-unexpectedly
title: BimlStudio Fails to Open or Crashes Unexpectedly
summary: Numerous resolutions to known issues relating to BimlStudio application launch and interaction
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue 

After installing BimlStudio, some users may experience an error where the program fails to start. The application could potentially fail to load past the BimlStudio splash screen, progress beyond the splash screen but close immediately, or appear to have opened yet the application cannot be interacted with and remains unresponsive from the taskbar. Additionally, the below steps could be used to troubleshoot instances where BimlStudio crashes unexpectedly.

# Resolutions

There exist numerous possible resolutions to this known issue. The methods below have been listed from most to least common, and are likely to resolve the issue prior to having to contact Varigence Support Desk for further assistance.   
  
**Method 1:** **Delete the .muo file**  
  
Navigate to the project directory of the most recent project used in BimlStudio and delete the file with the ".muo" extension. If the most recent BimlStudio project was named "TestProject," the file to locate and delete would appear as such: "TestProject.v50.muo. 

**\*Note:** The file could also be named "TestProject.v40.muo" if the project was started in an older version of BimlStudio. The version number in this instance is inconsequential to the solution.    
  
**Method 2: BimlStudio is off-screen**  
  
If BimlStudio has loaded beyond the splash screen and the application appears in the taskbar, the active window may simply be off-screen and unable to be interacted with. This issue is most prominent with users running multiple monitors. 

Hover the mouse over the BimlStudio icon in the taskbar to reveal any open instances of the program, right click on the application preview, and select "_Move."_ Now that the application has been selected to move, simply press either the left or right arrow keys to move the BimlStudio onto the screen, allowing it to be interacted with, now that the application is visible on screen.   
  
**Method 3: Uninstalling and reinstalling, with registry key deletion**  
  
If the prior two methods have not resolved BimlStudio's failure to load, a full uninstallation and reinstallation of the application may be necessary. In addition to uninstalling and reinstalling BimlStudio, it is recommended to also delete the contents of the following registry using Regedit: 

HKEY_CURRENTUSER →_ SOFTWARE → Varigence → BimlStudio → 5.0   
  
**Method 4: Assessment of BimlStudio crash logs** 

  
If BimlStudio continues to fail to open, further assessment of BimlStudio crash logs would be needed. Navigate to the following path in Windows Explorer: 

%LocalAppData%\\Varigence,\_Inc

In this directory should exist another directory that starts with "BimlStudio." Enter that directory, and then enter the sub-directory which has a name that matches the currently installed version of BimlStudio. In that folder will exist one or more files that begin with "BimlStudioError." These documents can be provided to Varigence Support as attachments, and will allow support to stack trace the failure and allow further assistance. 

It is possible that BimlStudio crash logs do not exist, depending on _when_ the application is failing. If no BimlStudio crash logs exist, please see below.   
  
**Method 5: Assessment of Windows Event Viewer logs** 

  
Similar to the assessment of BimlStudio Crash Logs, further assessment into BimlStudio's failure to open can be gleaned from Windows Event Viewer logs. Windows Event Viewer will display detailed information about significant events on your computer, such as errors, warnings, success audits, and failure audits. 

To run Windows Event Viewer, simply search for "Windows Event Viewer" in the search bar on the task bar. Once opened, in the left sidebar, navigate to Windows Logs → Application view. Now try to open BimlStudio. As BimlStudio opens, any errors or failures will be logged and should appear in real time in Event Viewer. Now, right-click on the log to be saved, and select "_Save All Events As._" 

Once saved, these logs can be provided to Varigence support to provide a better understanding of the environment, and what may actually be going wrong therein.