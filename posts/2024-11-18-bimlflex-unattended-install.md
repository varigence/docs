
---
categories: [BimlFlex]
layout: post
published: false
summary: How to perform a silent, unattended BimlFlex installation using a batch file for consistent and efficient deployment across multiple machines.
tags: [BimlFlex]
title: How to Perform an Unattended Install of BimlFlex
---
# How to Perform an Unattended Install of BimlFlex

In this tutorial, we'll walk you through the steps to perform an unattended (silent) installation of **BimlFlex**. This method is suitable whether you're installing a new version or upgrading an existing one. The assumption is that the database has already been installed or upgraded, and we're focusing on installing or upgrading the BimlFlex application and its components on a developer's or user's machine.

### Watch the Video:

![How to Perform an Unattended Install of BimlFlex](https://www.youtube.com/watch?v=73qwfJAAtUQ?rel=0&autoplay=0)

## Preparation Steps

### 1. Download the Latest BimlFlex Setup

- Visit our website and download the latest BimlFlex setup file.
- After downloading, right-click on the setup file, select **Properties**, and check if the file is blocked.
  - Depending on your system's global policies, the file may be blocked. If so, unblock it by checking the **Unblock** option and applying the changes.

### 2. Place Installation Media Locally

- It's recommended to place the installation media on your local drive (e.g., `C:\Installers`) rather than a network drive. This ensures the installer is trusted and can run without issues.

## Creating a Batch File for Silent Installation

### 1. Create a Batch File

- Create a batch file (`.cmd`) in the same directory as the setup file.
- This batch file will contain the command-line instructions for the unattended installation.

### 2. Specify Installation Components

- Determine which components you need to install:
  - **BimlStudio**
  - **BimlFlex Application**
  - **BimlFlex Excel Add-in** (ensure you install the version that matches your Excel bitness)
  - **SQL Server Integration Services (SSIS) Components** (for the versions of SQL Server you are targeting, e.g., 2019, 2022)

### 3. Construct the Command Line

- Use the appropriate switches to specify components and versions.
- For example, to install all 64-bit components:

  ```batch
  start /wait bimlflexdevsetup_x64_NN.N.NNN.0.exe -s -InstallFeature:BimlStudio_X64,BIMLFLEXADDIN_X64,BIMLFLEXAPP_X64,BIMLFLEXSSIS2022_X64,SNOWFLAKESSIS2022_X64
  ```

- Replace `x64` with `x86` for 32-bit installations.
- **Note:** Do not install both 64-bit and 32-bit Excel add-ins. Install only the one that matches your Excel installation.

### 4. Use `start /wait` Command

- Prefix the installation command with `start /wait` to ensure the batch file waits for the installation to complete before proceeding.

## Running the Installation

- Open a Command Prompt and navigate to the directory containing your batch file and setup file (e.g., `C:\Installers`).
- Execute the batch file.
- If prompted by the User Account Control (UAC), confirm the administrative permissions by clicking **Yes**.
- The installation will proceed silently and complete quickly.

## Notes

### SSIS Components:
  - If you are not using SQL Server Integration Services and are instead using **Azure Data Factory** or **Databricks**, you can omit the SSIS components from the installation command.
  - You can install multiple versions of SSIS components if you are targeting different versions of SQL Server.

### Excel Bitness:
  - Ensure that you install the Excel add-in that matches your Excel application's bitness. Refer to our documentation on **Excel Bitness** to determine which version you have.

## Conclusion

By following these steps, you can perform a silent, unattended installation of BimlFlex, ensuring that all users have the same setup on their machines. This method is especially useful when deploying to teams of multiple users. For more information and advanced options, please refer to our documentation under **Continuous Integration and Delivery**, specifically the section on silent installation of BimlStudio and BimlFlex.

Thank you for reading, and make sure to check the documentation for any of the continuous integration setup features.