# Installing Custom Ssis Components

## Supporting Videos

![Installing the SSIS Components](https://www.youtube.com/watch?v=bBlYkYchZOo?rel=0&autoplay=0)

## Supporting BimlFlex Documentation

- [Server Installation](../user-guide/Server-Installation.md)

## Installing Custom SSIS Components

BimlFlex uses a set of custom SSIS components in the data processing to enable additional functionality. The components are part of the open source [BimlCatalog project available on GitHub](https://github.com/varigence/BimlCatalog).

[Direct link for downloading the SQL Server 2016 custom components](https://github.com/varigence/BimlCatalog/blob/master/BimlCatalogComponents/Varigence.Ssis/varigence.ssis.2016.xcopyinstall.zip)

The components are installed through the supplied `install.bat` file

## Detailed Steps

The following detailed steps walks through the installation of the custom SSIS components required for BimlFlex SSIS packages

### Downloading the components

Download the components using the link in the Trial email or through the BimlCatalog repository link and store the file locally.

[Direct link for downloading the Sql Server 2016 custom components](https://github.com/varigence/BimlCatalog/raw/master/BimlCatalogComponents/Varigence.Ssis/varigence.ssis.2016.xcopyinstall.zip)

### Unpack the file

Once downloaded, unpack the zip file contents to a convenient location

### Running the installation batch file

Run the `install.bat` file with administrator privileges. This will install the custom components into the required locations.
As the installation copies the components to the global assembly cache it needs to run using admin privileges.
