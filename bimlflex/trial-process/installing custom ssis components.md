# Installing Custom Ssis Components

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

<iframe width="853" height="480" src="https://www.youtube.com/embed/bBlYkYchZOo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Supporting BimlFlex Documentation**

- [Server Installation](https://varigence.com/Documentation/BimlFlex/Article/Server+Installation)

## Installing Custom Ssis Components

BimlFlex uses a set of custom Ssis components in the data processing to enable additional functionality. The components are part of the open source [BimlCatalog project available on GitHub](https://github.com/varigence/BimlCatalog).

[Direct link for downloading the Sql Server 2016 custom components](https://github.com/varigence/BimlCatalog/blob/master/BimlCatalogComponents/Varigence.Ssis/varigence.ssis.2016.xcopyinstall.zip)

The components are installed through the supplied `install.bat` file

## Detailed Steps

The following detailed steps walks through the installation of the custom Ssis components required for BimlFlex Ssis packages

### Downloading the components

Download the components using the link in the Trial email or through the BimlCatalog repository link and store the file locally.

[Direct link for downloading the Sql Server 2016 custom components](https://github.com/varigence/BimlCatalog/raw/master/BimlCatalogComponents/Varigence.Ssis/varigence.ssis.2016.xcopyinstall.zip)

### Unpack the file

Once downloaded, unpack the zip file contents to a convenient location

### Running the installation batch file

Run the `install.bat` file with administrator privileges. This will install the custom components into the required locations.
As the installation copies the components to the global assembly cache it needs to run using admin privileges.
