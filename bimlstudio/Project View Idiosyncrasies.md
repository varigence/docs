<div class="LanguageTitle">Mist User Guide</div>
<div class="TopicHeader">Project View Idiosyncracies</div>
<p>
	Mist's Project View reflects the state of folders and files on disk. From 
	within it, users can:</p>
	<ul>
		<li>add, delete, rename, copy, and move files and folders</li>
		<li>include and exclude files and folders from the project</li>
		<li>interact with Subversion or TFS</li>
		<li>open files in their associated editors</li>
		<li>build individual files</li>
	</ul>
	<p>For those acquainted with Visual Studio or other IDEs, 
	Mist&apos;s Project View will feel very familiar. However, Mist&apos;s Project View 
	has some unique characteristics that this article explains.</p>
	
<h3>Root Folders</h3>
<p>
Project View allows a user to view, and interact with, their file system. However, Mist doesn&apos;t display the entire file system in Project View as it could be overwhelming, and a user likely wants to see only a small portion of it.
</p>
<p>
Thus, root folders are used to control what portions of the file system are displayed within Project View. When creating or opening a Mist project, at least one root folder will typically be present. Within Project View, it&apos;s possible to navigate the file system beneath a root folder.
</p>
<p>
If a user wants to interact with other parts of the file system, he can add additional root folders by right clicking on the root project in Project View and selecting the Add Root Folder command. 
</p>
<p>
Note that adding a folder, as a root folder, has no impact on the file system.
</p>
<h4>Show All Files</h4>
<p>
When a new root folder is added, its contents can be viewed in Project View in one of two ways. The first option is to enable the Show All Files feature. This feature allows you to see all folders and files on disk that are underneath the project&apos;s root folder, even if they&apos;re not included in the Mist project. 
A grayed out folder or file icon indicates that the item is excluded from the project.
</p>
<h4>Include Descendants in Project</h4>
<p>
The second option is to right click on the root folder and select Include Descendants in Project. This command includes all folders and files, underneath the root folder, in the project. This isn&apos;t done automatically since a user may want to only include specific files under a root folder. Furthermore, for very deep directory structures, this operation can produce a noticeable delay.
</p>
<h3>Persist Path As</h3>
<p>
When opening a Mist project, Mist uses a root folder&apos;s path to locate included files beneath the root folder. Thus, Mist is dependent on the project file containing accurate root folder path information to load a project&apos;s files.
</p>
<p>
When sending a Mist project to another user, it&apos;s possible that the root folder paths on the sender&apos;s machine won&apos;t exist on the receiver&apos;s machine. As a result, the receiver won&apos;t be able to view the project&apos;s files within Mist.
</p>
<p>
To handle this scenario, Mist allows users to store their root folder paths in absolute or relative form via the 
<strong>Persist Path As</strong> setting. This setting is exposed in a root folder&apos;s context menu and offers two choices: Absolute and Relative. 
</p>
<p>
Absolute indicates that the complete root folder path is stored in the project file, starting at the drive letter. If the project is opened on another machine, the same root folder needs to exist at the same location. Otherwise, the root folder&apos;s files won&apos;t be found. 
</p>
<p>
Relative means that the root folder&apos;s path is stored relative to the project file. Thus, the project&apos;s files will be located as long as the directory structure, that contains the project file, is preserved when sending the Mist project to other users.
</p>
<p>
Therefore, to send a project to someone, a sender should typically set a root folder&apos;s 
<strong>Persist Path As</strong> setting to relative, save the project to preserve the setting, and then send the user the entire directory tree that the project uses. This guarantees that the receiver can successfully use the project.
</p>
<p>
Setting <strong>Persist Path As</strong> to relative is also useful when multiple users share the same files, perhaps via source control, but their working folders are in different locations. As long as all users place the project file in the same location, relative to the project&apos;s other files, the project will load correctly when it&apos;s opened.
</p>
<p>
A scenario where <strong>Persist Path As</strong> should be set to Absolute is when the root folder points to a location that both the sender and receiver can access, such as a network location. In this case, the sender won&apos;t need to copy the network location&apos;s contents with the project because the receiver can access it using the same path.
</p>
<h3>Refresh</h3>
<p>Although Mist&apos;s Project View displays the state of folders and files on disk, it will not automatically update itself when changes happen outside of Mist. For instance, Project View may be showing a project&apos;s Connections directory that contains three Biml files. Outside of Mist, however, a user copies two additional Biml files into the Connections directory. When returning to Mist, Project View will still only show three files in the Connections directory.</p>
<p>
To update the Project View, so it reflects the current state of your file system, use the Refresh button. 
</p>
<h3>
Moving Files in Subversion</h3>
<p>
Mist's Project View has integrated support for common Subversion and TFS 
commands. However, it's important to note that when using Project View to move 
files in Subversion, the moved files can be orphaned from the repository. The 
underlying issue is that Project View performs file moves within Explorer, but 
Tortoise fails to recognize file moves within Explorer. Thus, Tortoise treats 
the moved file as missing from its original location and ignores the moved file 
at its new location. The workaround is to manually add moved files back into 
Subversion.</p>

