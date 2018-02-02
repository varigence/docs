# Using the utility application to update and configure BimlFlex

[Back to overview](https://varigence.com/Documentation/BimlFlex/Article/Trial+Process+Overview)

**Supporting Videos**

<iframe width="853" height="480" src="https://www.youtube.com/embed/nEmGq6ORI3U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Supporting BimlFlex Documentation**

- [Support Utility Application](https://varigence.com/Documentation/BimlFlex/Article/Support+Utility+Application)

## Using the utility application to update and configure BimlFlex

The BimlFlex utility application is providing some additional BimlFlex functionality not yet integrated into BimlStudio. It allows for:

- Creating and updating the 2 databases used by BimlFlex
- Updating the BimlFlex Bundle file that provides BimlFlex projects with the Data Warehousing logic engine

The app itself is delivered in a single archive. Unpack the file to a folder. When the executable is run it will create a subfolder with the Bundle file and Sql Server Dacpac files. It is possible to deploy the files from the application but for instances where direct deployment is not available the files can be used individually.

## Detailed Steps

The following detailed steps walks through the creation of database scripts and building of the Ssis project

For the trial process both the databases needs to be created and the Bundle file needs to be available for creating the new project.

1. run the application with admin privileges.
2. enter the address and login information of the Sql Server to use for the Data Warehouse databases for the trial.
3. once the connection is defined, switch to the `Deploy Dacpac` tab and deploy the BimlCatalog and BimlFlex databases through the utility application. The deployment will create the databases in the database engine and will populate them with base data.
4. switch to the `Deploy Bundle` tab and copy the Biml Bundle file to the installation folders by clicking the corresponding button.

The BimlFlex development environment is now be ready for project creation.
