---
uid: kb-adding-headers-and body-to-web-activities
title: Adding Headers and Body to Web Activities in Azure Data Factory (ADF)
summary: How to populate header and body properties to use a Web Activity to call a REST endpoint from inside of a pipeline in Azure Data Factory
varigenceProduct: Shared
varigenceArticleType: KnowledgeBase
---
# Issue

In Azure Data Factory (ADF), users can use a Web Activity to call a REST endpoint from inside of a pipeline. It is possible to pass both datasets and linked services to be consumed by the endpoint. Just like a normal REST request that can be made in a web application, these activities have both a header property and a body property, which need to be populated by the user.   
  
**\*Note:** For more information regarding web activities, please see ADF documentation on the subject [here](https://docs.microsoft.com/en-us/azure/data-factory/control-flow-web-activity).   
 

# Resolution

Follow the below instruction to populate both header and body properties of a web activity using Biml.  

  
**Step 1: Adding Headers**

  
HTTP headers allow the client and server to pass additional information along with the request body. This information is typically described in JSON notation using key/value pairs. Since Biml is XML based, rather than JSON based, configuring headers inside of web activity requires tweaks.  
  
<Pipelines>  
     <Pipeline Name="Pipeline">  
          <Activities>  
               <Web Method="Put" Name="MyWebActivity" Url="www.testurl.com">  
                    <Headers>  
                         <Header Name="Content-Type">application/json</Header>  
                    </Headers>  
               </Web>  
          </Activities>  
     </Pipeline>  
</Pipelines>  
 

In the above example, the configuration defines the "Content-Type" in the header node, and has set the value to "application/json." 

**\*Note:** The "Content-Type" header is required for all ADF Web Activities.    
 

**Step 2: Adding the Body**  
  
The body of a REST request contains the heft of the operation, whether that be data to be consumed by the server, or being provided to the client from the server. In Biml, adding the body is similar to the process in which the header was added above, however the name of the node is 'KeyValue' rather than 'Header'.  
  
For example, presume that the intention is to pass the following to the Body of the Web Activity:

  
{  
"ETLProcess": "MyEtlProcessName",  
"Message": "@{pipeline().parameters.Message}",  
"Priority": "High",  
"SendToEmail": "@{pipeline().parameters.SendToEmail}",  
"Subject": "@{pipeline().parameters.Subject}"  
}  
  
  
To mimic this behavior inside of a Biml Web Activity, it must appear as such:   
  
  
<Body>  
     <KeyValues>  
          <KeyValue Name="ETLProcess">MyEtlProcessName</KeyValue>  
          <KeyValue Name="Message">@{pipeline().parameters.Message}</KeyValue>  
          <KeyValue Name="Priority">High</KeyValue>  
          <KeyValue Name="SendToEmail">@{pipeline().parameters.SendToEmail}</KeyValue>  
          <KeyValue Name="Subject">@{pipeline().parameters.Subject}</KeyValue>  
     </KeyValues>  
</Body>  
  
  
Following both steps will correctly configure the Body and Header properties of Web Activities in ADF.