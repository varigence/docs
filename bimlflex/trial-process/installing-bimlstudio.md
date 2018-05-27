---
uid: bimlflex-trial-process-installing-bimlStudio
title: Installing BimlStudio
---
# Installing BimlStudio

## Supporting Videos

![Installing BimlFlex Add In](https://www.youtube.com/watch?v=e_wzLtyGVS8?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- @bimlflex-developer-installation
- [BimlStudio User Guide](https://varigence.com/Documentation/BimlStudio/)

## BimlStudio

BimlStudio is the development environment provided for BimlFlex. The installation provides the platform for creating and working with BimlFlex projects. The building of SSIS packages and SSIS projects also require that the matching Visual Studio and SQL Server Data Tools with SSIS support is available on the machine. For machines where there is a local installation of a 64 bit SQL server there will be 64 bit build components available. For an installation without SQL Server but with Visual Studio and SSDT there will be 32 bit build components available.

BimlStudio is available in 2 bitness flavors, 32 and 64 bit. For the trial it is recommended that both versions are installed.

For scenarios where only 32 bit SSIS build components are available locally it is still possible to run the 64 bit version of BimlStudio and build using the 32 bit components by configuring the build process to target 32 bit.

Once the installation is completed it is possible to start BimlStudio.

The first time it is opened it will ask for a license key. The trial license key is provided in the trial welcome email together with the download locations and documentation. Adding the license key enables the use of BimlStudio and the BimlFlex functions.

BimlStudio supports both classical BimlStudio projects and BimlFlex projects. For the BimlFlex projects to work for the trial it is important that the databases are created and that the BimlFlex Bundle file is updated through the BimlFlex Utility Application.

## Detailed Steps

The following detailed steps walks through the installation of BimlStudio

### Download BimlStudio

Navigate to the [BimlStudio page](https://varigence.com/bimlstudio) or use the link in the Trial email to download the installer.

### Install BimlStudio

Run the installer to install the application. When presented with the choice of 32 and/or 64 bit installation, choose to install both versions.

### Enter product key

Once BimlStudio is started for the first time, enter your Trial key from the trial welcome email to activate the product.
