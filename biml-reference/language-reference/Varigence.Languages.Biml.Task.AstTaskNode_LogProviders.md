# Log Providers

<div class="LanguageSummary"><div class ="SummaryItem">Defines the log providers to use for the SSIS task or container</div><div class ="SummaryItem">This is a container for log provider definitions that are specific to this task, container, or package.</div></div><div class="SchemaBindingGroup"><div class="SchemaBindingGroupHeader">Permitted Collection Child Definitions</div><table id="SchemaBindingList" class="SchemaBindingList"><tbody><tr><th class="SchemaBindingIconColumnHeader">&nbsp;</th><th class="SchemaBindingNameColumnHeader">Child</th><th class="SchemaBindingTypeColumnHeader">API Type</th><th class="SchemaBindingSummaryColumnHeader">Description</th></tr><tr class="cd0"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstCustomLogProviderNode.html">CustomLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstCustomLogProviderNode.html">AstCustomLogProviderNode</a></td><td class="SchemaBindingSummary">SQL Server Integration Services includes several log providers that enable users to record a log of events that occur during package execution. You can also create a custom log provider.</td></tr><tr class="cd1"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstProfilerLogProviderNode.html">ProfilerLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstProfilerLogProviderNode.html">AstProfilerLogProviderNode</a></td><td class="SchemaBindingSummary">The SQL Server Profiler log provider writes traces that can be viewed using SQL Server Profiler. The default file name extension for these files is .trc.</td></tr><tr class="cd0"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstSqlServerLogProviderNode.html">SqlServerLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstSqlServerLogProviderNode.html">AstSqlServerLogProviderNode</a></td><td class="SchemaBindingSummary">The SQL Server log provider writes log entries to the sysssislog table in a SQL Server database.</td></tr><tr class="cd1"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstTextLogProviderNode.html">TextLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstTextLogProviderNode.html">AstTextLogProviderNode</a></td><td class="SchemaBindingSummary">The Text log provider writes log entries in comma-separated value (CSV) format to ASCII text files with the file name extension of .log.</td></tr><tr class="cd0"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstWindowsEventLogProviderNode.html">WindowsEventLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstWindowsEventLogProviderNode.html">AstWindowsEventLogProviderNode</a></td><td class="SchemaBindingSummary">The Windows Event log provider writes log entries to the application log in the Windows Event log on the local computer.</td></tr><tr class="cd1"><td class="SchemaBindingIcon"><div class="NotRequired" /></td><td class="SchemaBindingName"><span class="punc">&lt;</span><a href=Varigence.Languages.Biml.LogProvider.AstXmlLogProviderNode.html">XmlLogProvider</a><span class="punc"> /&gt;</span></td><td class="SchemaBindingType"><a href="../api-reference/Varigence.Languages.Biml.LogProvider.AstXmlLogProviderNode.html">AstXmlLogProviderNode</a></td><td class="SchemaBindingSummary">The XML File log provider writes log entries to an XML file.</td></tr></tbody></table></div>