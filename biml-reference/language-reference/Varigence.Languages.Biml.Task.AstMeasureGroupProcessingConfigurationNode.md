---
uid: biml-measuregroupprocessingconfiguration-element
title: Measure Group Processing Configuration Element
varigenceProduct: Biml Language
varigenceArticleType: Reference
---
## Measure Group Processing Configuration Element<div class="AssemblyInfoGroup"><div class="CrossReferenceGroup"><div class="CrossReferenceHeader">API Type:</div><div class="CrossReferenceValue"><a href="../api-reference/Varigence.Languages.Biml.Task.AstMeasureGroupProcessingConfigurationNode.html">Varigence.Languages.Biml.Task.AstMeasureGroupProcessingConfigurationNode</a></div></div><div class="CrossReferenceGroup"><div class="CrossReferenceHeader">X-Ref:</div><ul class="xrefRow"><li><a class='xref' href ="Varigence.Languages.Biml.Task.AstMeasureGroupProcessingConfigurationNode.html">Ast Measure Group Processing Configuration Node</a></li><li><span>Ast Processing Configuration Node</span></li></ul></div></div><div class="AttributeGroup"><h3>Attributes</h3><table id="AttributeList" class="AttributeList"><tbody><tr><th class="AttributeNameColumnHeader">Attribute</th><th class="AttributeTypeColumnHeader">API Type</th><th class="AttributeDefaultColumnHeader">Default</th><th class="AttributeSummaryColumnHeader">Description</th></tr><tr class="ad0"><td class="AttributeName">ProcessingOption</td><td class="AttributeType"><a href="../api-reference/Varigence.Languages.Biml.Task.MeasureGroupProcessingOption.html">MeasureGroupProcessingOption</a></td><td class="AttributeDefault">ProcessDefault</td><td class="AttributeSummary"><div class ="SummaryItem">This value specifies which of the supported Analysis Services processing options will be used to process this object. This is a required property</div></td></tr><tr class="ad1"><td class="AttributeName">CubeId</td><td class="AttributeType"><a href="https://msdn.microsoft.com/en-us/library/System.String.aspx">String</a></td><td class="AttributeDefault">&nbsp;</td><td class="AttributeSummary"><div class ="SummaryItem">This value specifies the Id of the Analysis Services cube that containing the measure group that will be processed. </div></td></tr><tr class="ad0"><td class="AttributeName">DatabaseId</td><td class="AttributeType"><a href="https://msdn.microsoft.com/en-us/library/System.String.aspx">String</a></td><td class="AttributeDefault">&nbsp;</td><td class="AttributeSummary"><div class ="SummaryItem">This value specifies the Id of the Analysis Services database containing the cube and measure group that will be processed. </div></td></tr><tr class="ad1"><td class="AttributeName">MeasureGroupName</td><td class="AttributeType"><a href="../api-reference/Varigence.Languages.Biml.MeasureGroup.AstCubeMeasureGroupNode.html">AstCubeMeasureGroupNode</a></td><td class="AttributeDefault">&nbsp;</td><td class="AttributeSummary"><div class ="SummaryItem">This value specifies a reference to the measure group that will be processed. This references an existing definiton.</div></td></tr><tr class="ad0"><td class="AttributeName">MeasureGroupId</td><td class="AttributeType"><a href="https://msdn.microsoft.com/en-us/library/System.String.aspx">String</a></td><td class="AttributeDefault">&nbsp;</td><td class="AttributeSummary"><div class ="SummaryItem">This value specifies the Id of the Analysis Services measure group that will be processed. </div></td></tr></tbody></table></div><div class="ChildGroup">### Collection Children<table id="ChildList" class="ChildList"><tbody><tr><th class="ChildNameColumnHeader">Child</th><th class="ChildTypeColumnHeader">API Type</th><th class="ChildSummaryColumnHeader">Description</th></tr><tr class="cd0"><td class="ChildName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.AstNode_Annotations.html">Annotations</a><span class="punc">&gt;</span><br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="punc">&lt;</span><a href=Varigence.Languages.Biml.AstAnnotationNode.html">Annotation</a> <span class="punc">/&gt;</span><br /><span class="punc">&lt;/</span><a href=Varigence.Languages.Biml.AstNode_Annotations.html">Annotations</a><span class="punc">&gt;</span></td><td class="ChildType"><a href="../api-reference/Varigence.Languages.Biml.AstAnnotationNode.html">AstAnnotationNode</a></td><td class="ChildSummary"><div class ="SummaryItem">This is a collection of annotation items that can be used to specify documentation, tags, or other information.  Annotations are particularly useful for storing information about nodes that can be used by BimlScript code. </div></td></tr></tbody></table></div>