# New Features in 3.2

Mist 3.2 continues our commitment to frequent updates. Mist 3.2's theme is improving the user experience, and providing several enhancements.
These include:

* **UI Improvements**
  * Modernized User Interface
  * *Package Designer Details*
    * Modernized Package Designer UI
    * Improved package dashboard
    * Package surface can scroll during drag and drop
    * When adding a task to the designer, vertical padding is added beneath it
  * Added visual notification to the Windows task bar when a build finishes
  * Added context menus to the Configuration designer
  * Project View multi-select works with shift+click
* **SSIS 2012**
  * Fixed emission issues with package and project parameters
  * Fixed emission issues with log events
  * Proper emission of project connections with the Execute Package task
  * Native support for Expression task
  * Added protection level to package projects
  * Added package parameters to Expression Builder
* **Package Import**
  * Import without IDs is now the default behavior
  * *The following now import correctly*
    * Log Events in SSIS 2012
    * Output paths for packages with script components
    * Packages with package parameters
    * Packages with connection names containing a backslash
    * Script tasks and components that use VB
* **Logical View**
  * Execute Transformers context menu now sorts transformers alphabetically
  * Execute Transformers context menu now displays transformers that start with an underscore
  * Fixed duplication error when duplicating a package that references a script task or component
* **Project Designer**
  * Use Project Deployment is only enabled when targeting SSIS 2012
* **Biml**
  * Added ValidationReporter.Report(IFrameworkItem, Severity, Message Recommendation) overload
  * Several improvements to error and validation reporting
* **Setup**
  * Streamlined installer
  * Eliminated the SQL Server prerequisites from Mist installations