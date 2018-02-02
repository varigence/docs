<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">New Features in 3.2</div>
<p>Mist 3.2 continues our commitment to frequent updates. Mist 3.2&apos;s theme 
is improving the user experience, and providing several enhancements.
These include:</p>
<ul>
	<li>
	    <strong>UI Improvements</strong>
        <ul>
		    <li>Modernized User Interface</li>
            <li>
			    <em>Package Designer Details</em>
				<ul>
				    <li>Modernized Package Designer UI</li>
					<li>Improved package dashboard</li>
					<li>Package surface can scroll during drag and drop</li>
					<li>When adding a task to the designer, vertical padding is added beneath it</li>
				</ul>
			</li>
            <li>Added visual notification to the Windows task bar when a build finishes</li>
			<li>Added context menus to the Configuration designer</li>
			<li>Project View multi-select works with shift+click</li>
	    </ul>
	</li>
    <li>
	    <strong>SSIS 2012</strong>
        <ul>
		    <li>Fixed emission issues with package and project parameters</li>
            <li>Fixed emission issues with log events</li>
			<li>Proper emission of project connections with the Execute Package task</li>
			<li>Native support for Expression task</li>
			<li>Added protection level to package projects</li>
			<li>Added package parameters to Expression Builder</li>
	    </ul>
	</li>
	<li>
	    <strong>Package Import</strong>
        <ul>
		    <li>Import without IDs is now the default behavior</li>
			<li>
			    <em>The following now import correctly</em>
				<ul>
				    <li>Log Events in SSIS 2012</li>
					<li>Output paths for packages with script components</li>
					<li>Packages with package parameters</li>
					<li>Packages with connection names containing a backslash</li>
					<li>Script tasks and components that use VB</li>
				</ul>
			</li>
	    </ul>
	</li>
    <li>
	    <strong>Logical View</strong>
        <ul>
		    <li>Execute Transformers context menu now sorts transformers alphabetically</li>
            <li>Execute Transformers context menu now displays transformers that start with an underscore</li>
			<li>Fixed duplication error when duplicating a package that references a script task or component</li>
	    </ul>
	</li>
	<li>
	    <strong>Project Designer</strong>
        <ul>
		    <li>Use Project Deployment is only enabled when targeting SSIS 2012</li>
	    </ul>
	</li>
	<li>
	    <strong>Biml</strong>
        <ul>
		    <li>Added ValidationReporter.Report(IFrameworkItem, Severity, Message, Recommendation) overload</li>
            <li>Several improvements to error and validation reporting</li>
	    </ul>
	</li>
	<li>
	    <strong>Setup</strong>
        <ul>
            <li>Streamlined installer</li>
		    <li>Eliminated the SQL Server prerequisites from Mist installations</li>
	    </ul>
	</li>
</ul>
</div>

