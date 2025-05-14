---
uid: kb-resolving-setup-and-installation-errors
title: Resolving Setup and Installation Errors
summary: How to Resolve Common Installation and Setup Errors for Varigence Products
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

When installing or upgrading a Varigence application (BimlExpress, BimlStudio, or BimlFlex), an error was encountered which prevented successful installation.  
 

# Cause

There are numerous reasons that an installation can error out. An installation error could be the result of an invalid installer file, any number of known or unknown issues with a user's machine, or even as a result of the data within a user's environment (if upgrading). Resolving an installation error may or may not require involvement by Varigence Support.   
 

# Resolution 

The most helpful piece of documentation to diagnosis an installation or upgrade error will be the user's Temp directory. From there, a recommended course of action can be determined.   
  
**Step 1: Locate the Temp Directory and Installation Log**   
  
Please see "Method 2" in [Providing a Temp Log Due to Upgrade/Installation Error](xref:kb-providing-a-temp-log) for instructions on how to access the Temp directory and installation log.  
  
**Step 2: Open and Review the Installation Log**  
  
A .log file can be opened in any basic text editor, most commonly Notepad/++. 

  
Review the log for lines that resemble the following:   
  
\[34EC:3634\]\[2022-01-19T13:52:28\]i338: Acquiring package: vc140\_x86, payload: vc140\_x86, download from: https://aka.ms/vs/17/release/vc\_redist.x86.exe  
\[0060:3100\]\[2022-01-19T13:52:30\]e000: Error 0x80070490: Failed to find expected public key in certificate chain.  
\[0060:3100\]\[2022-01-19T13:52:30\]e000: Error 0x80070490: Failed to verify expected payload against actual certificate chain.  
\[0060:3100\]\[2022-01-19T13:52:30\]e000: Error 0x80070490: Failed to verify signature of payload: vc140\_x86  
\[0060:3100\]\[2022-01-19T13:52:30\]e310: Failed to verify payload: vc140\_x86 at path: C:\\ProgramData\\Package Cache\\.unverified\\vc140\_x86, error: 0x80070490. Deleting file.  
\[0060:3100\]\[2022-01-19T13:52:30\]e000: Error 0x80070490: Failed to cache payload: vc140\_x86  
\[34EC:3634\]\[2022-01-19T13:52:30\]e314: Failed to cache payload: vc140\_x86 from working path: C:\\WINDOWS\\Temp\\{F2E21308-F7B6-49D8-B5AB-2DC2759591D7}\\vc140\_x86, error: 0x80070490.  
  
If your log contains similar entries, the following combination of issues are preventing installation:   
  
1\. A recent version of the Microsoft Visual C++ Runtime (VCRuntime) is **not** installed on the target machine. VC Runtime is a dependency of the Chromium dependency that Varigence uses to host its applications for use on Windows desktops.   
  
2\. Security is configured on the target machine, such that, the root certifying authority used by Microsoft when they signed the latest version of VCRuntime has not been added to the system's trusted certifying authorities.   
  
**Step 3a: Install VCRuntime Manually**  
  
The easiest method to resolve an installation issue is to manually install VCRuntime prior to installing/upgrading BimlFlex.  
  
The installers are available directly from Microsoft [here](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170), "Microsoft Visual C++ Redistributable Latest Supported Downloads." The linked docs article from MSFT provides download links for the latest versions of Visual C++ Redistributable packages.   
  
**Note:** Be sure to install the VCRuntime for all system/CPU architectures intended to be used (X86 for 32-bit and X64 for 64-bit). Some users have reported a local dependency in the X64 installer on X86 C++ Runtime.   
  
Additionally, be sure to clear all folders on C:/ named "%varigence%" and all registry entries with "%biml%". This will require users to re-enter their Biml license key upon reistallation.   
  
**Step 3b: Contact Your IT/Support Team for Certifying Authority Certificates**  
  
For users who are unable to install VCRuntime manually, the alternative method would be to contact your IT/Support team. Request that they add Microsoft's latest root certifying authority certificates to the trusted certificate list.   
 

# Conclusion

By review the installation logs for common error entries shown above, most installation issues can be easily and quickly resolved.   
  
If the above issues do not resolve the installation issue, reference [Providing a Temp Log Due to Upgrade/Installation Error](xref:kb-providing-a-temp-log), and open a ticket with Varigence Support and provide your log for technical review.