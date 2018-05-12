# Chapter 2

## The Stages of Data Warehousing

### Steps to Implement Data Warehouse

The best way to address the business risk associated with a Datawarehouse implementation is to employ a three-prong strategy as below

1. **Enterprise strategy**: Here we identify technical including current architecture and tools. We also identify facts, dimensions, and attributes. Data mapping and transformation is also passed.
2. **Phased delivery**: Datawarehouse implementation should be phased based on subject areas. Related business entities like booking and billing should be first implemented and then integrated with each other.
3. **Iterative Prototyping**: Rather than a big bang approach to implementation, the Datawarehouse should be developed and tested iteratively.

| **Step** | **Tasks**                                     | **Deliverables**                          |
| -------- | --------------------------------------------- | ----------------------------------------- |
| 1        | Need to define project scope                  | Scope Definition                          |
| 2        | Need to determine business needs              | Logical Data Model                        |
| 3        | Define Operational Datastore requirements     | Operational Data Store Model              |
| 4        | Acquire or develop Extraction tools           | Extract tools and Software                |
| 5        | Define Data Warehouse Data requirements       | Transition Data Model                     |
| 6        | Document missing data                         | To Do Project List                        |
| 7        | Maps Operational Data Store to Data Warehouse | D/W Data Integration Map                  |
| 8        | Develop Data Warehouse Database design        | D/W Database Design                       |
| 9        | Extract Data from Operational Data Store      | Integrated D/W Data Extracts              |
| 10       | Load Data Warehouse                           | Initial Data Load                         |
| 11       | Maintain Data Warehouse                       | On-going Data Access and Subsequent Loads |

### DW Jargon Busting

1. **Business Function** Something an enterprise does, or needs to do, in order to achieve its objectives.  
2. **Business Meta data** The information whereby users can understand and access the data warehouse. It focuses on what data is in the warehouse, how it was transformed, the source, and the timeliness of the data.  
3. **Business Process** The complete response that a business makes to an event. A business process entails the execution of a sequence of one or more process steps. It has a clearly defined deliverable or outcome. A Business Process is defined by the business event that triggers the process, the inputs and outputs, all the operational steps required to produce the output, the sequential relationship between the process steps, the business decisions that are part of the event response, and the flow of material and/or information between process steps.  
4. **Central Repository** Location of a collection of documentation, customizations, modifications, or enhancements designed to alleviate the recreation of successfully completed work.  
5. **Data Acquisition** The process of extracting, transforming, and transporting data from the source systems and external data sources to the data warehouse database objects.  
6. **Database** A collection of data, usually in the form of tables or files, under the control of a database management.
7. **Data Extraction** The process of pulling data from operational and external data sources in order to prepare the source data for the data warehouse environment.  
8. **Data Integrity** The quality of the data residing in the database objects. The measurement which users consider when analyzing the value and reliability of the data.  
9. **Data Transformation** The process of redefining data based on some predefined rules. The values are redefined based on a specific formula or technique.  
10. **Data Warehouse** An enterprise structured repository of subject-oriented, time-variant, historical data used for information retrieval and decision support. The data warehouse stores atomic and summary data. The data warehouse is the source data stored in the data marts.  
11. **Data Warehousing:**The process of designing, building, and maintaining a data warehouse system.  
12. **Data Warehouse Integration** The process on reconciling each data warehouse increment with the strategic data warehouse architecture.  
13. **Data Warehouse Method (DWM)** A structured method for full life-cycle custom development data warehouse projects.  
14. **Deliverable** A tangible, measurable output of a task.  
15. **Enterprise** A group of departments, divisions, or companies which make up an entire business.  
16. **Entity** A thing of significance, whether real or imagined, about which information eeds to be known or held. It is implemented in a database as one or more tables.  
17. **Extraction,** Transformation and Loading (ETL) Tool: Software that is used to extract data from a data source like a operational system or data warehouse, modify the data and then load it into a data mart, data warehouse or multi-dimensional data cube.  
18. **Implementation** The installation of an increment of the data warehouse solution that is complete, tested, operational, and ready. An implementation includes all necessary software, hardware, documentation, and all required data.  
19. **Iterative Development** The application of a cyclic, evolutionary approach to the development of requirements definition, design, or construction using prototyping and iterative build techniques.  
20. **Meta data** Also known as data about data is the information about the contents and uses of the data warehouse. Meta data is created by several components of the data warehouse and provides a business and technical view of the data warehouse solution.  
21. **On-Line Analytical Processing (OLAP)** On-line retrieval and analysis of data to reveal business trends and statistics not directly visible in the data directly retrieved from a data warehouse. Also known as multidimensional analysis.  
22. **Relational Online Analytical Processing (ROLAP):** OLAP software that employs a relational strategy to organize and store the data in its database 
23. **Repository** A mechanism for storing any information about the definition of a system at any point in its life-cycle. Repository services would typically be provided for extensibility, recovery, integrity, naming standards, and a wide variety of other management function.
24. **Structured Query Language (SQL)** The ANSI internationally accepted standard for relational database systems, covering not only query but also data definition, manipulation, security, and some aspects of referential and entity integrity.  
25. **Target Database** The data warehouse database object that is to store the source data once it is extracted, transformed and transported.  