# Parameterize Connections

SSIS Project Connections can be parameterized through BimlFlex.

Parameters are managed on a per project basis in SSIS. A Connection Manager can have properties, such as the connection string, defined by an expression. This expression can be defined as a Project Parameter or a combination of Project Parameters. These parameters can then be controlled through environment overrides in the SSIS catalog.

The following video shows an example of overriding the connection string property of the connection through an extension point and defining the Project parameter through another extension point that has the target set to `@@global` so that it is applied to all projects in the solution

More information:

* [Working with environments and the SSIS catalog](../user-guide/deployment-guide.md)
* [Working with sensitive settings in the SSIS catalog](using-sensitive-parameters-in-ssis-catalog.md)

## Video

![Parameterize Connections -center](https://www.youtube.com/watch?v=4V8v4Brbg7E?rel=0&autoplay=0)
