# Project View Idiosyncrasies

Mist's Project View reflects the state of folders and files on disk. From within it, users can:

* Add, delete, rename, copy, and move files and folders
* Include and exclude files and folders from the project
* Interact with Subversion or TFS
* Open files in their associated editors
* Build individual files

For those acquainted with Visual Studio or other IDEs, Mist's Project View will feel very familiar. However, Mist's Project View has some unique characteristics that this article explains.

## Root Folders
Project View allows a user to view, and interact with, their file system. However, Mist doesn't display the entire file system in Project View as it could be overwhelming, and a user likely wants to see only a small portion of it.

Thus, root folders are used to control what portions of the file system are displayed within Project View. When creating or opening a Mist project, at least one root folder will typically be present. Within Project View, it's possible to navigate the file system beneath a root folder.

If a user wants to interact with other parts of the file system, he can add additional root folders by right clicking on the root project in Project View and selecting the Add Root Folder command.

Note that adding a folder, as a root folder, has no impact on the file system.

### Show All Files

When a new root folder is added, its contents can be viewed in Project View in one of two ways. The first option is to enable the Show All Files feature. This feature allows you to see all folders and files on disk that are underneath the project's root folder, even if they're not included in the Mist project. A grayed out folder or file icon indicates that the item is excluded from the project.

### Include Descendants in Project

The second option is to right click on the root folder and select Include Descendants in Project. This command includes all folders and files, underneath the root folder, in the project. This isn't done automatically since a user may want to only include specific files under a root folder. Furthermore, for very deep directory structures, this operation can produce a noticeable delay.

### Persist Path As

When opening a Mist project, Mist uses a root folder's path to locate included files beneath the root folder. Thus, Mist is dependent on the project file containing accurate root folder path information to load a project's files.

When sending a Mist project to another user, it's possible that the root folder paths on the sender's machine won't exist on the receiver's machine. As a result, the receiver won't be able to view the project's files within Mist.

To handle this scenario, Mist allows users to store their root folder paths in absolute or relative form via the **Persist Path As** setting. This setting is exposed in a root folder's context menu and offers two choices: Absolute and Relative.

Absolute indicates that the complete root folder path is stored in the project file, starting at the drive letter. If the project is opened on another machine, the same root folder needs to exist at the same location. Otherwise, the root folder's files won't be found. 

Relative means that the root folder's path is stored relative to the project file. Thus, the project's files will be located as long as the directory structure, that contains the project file, is preserved when sending the Mist project to other users.

Therefore, to send a project to someone, a sender should typically set a root folder's **Persist Path As** setting to relative, save the project to preserve the setting, and then send the user the entire directory tree that the project uses. This guarantees that the receiver can successfully use the project.

Setting **Persist Path As** to relative is also useful when multiple users share the same files, perhaps via source control, but their working folders are in different locations. As long as all users place the project file in the same location, relative to the project's other files, the project will load correctly when it's opened.

A scenario where **Persist Path As** should be set to Absolute is when the root folder points to a location that both the sender and receiver can access, such as a network location. In this case, the sender won't need to copy the network location's contents with the project because the receiver can access it using the same path.

### Refresh

Although Mist's Project View displays the state of folders and files on disk, it will not automatically update itself when changes happen outside of Mist. For instance, Project View may be showing a project's Connections directory that contains three Biml files. Outside of Mist, however, a user copies two additional Biml files into the Connections directory. When returning to Mist, Project View will still only show three files in the Connections directory.

To update the Project View, so it reflects the current state of your file system, use the Refresh button.

### Moving Files in Subversion

Mist's Project View has integrated support for common Subversion and TFS commands. However, it's important to note that when using Project View to move files in Subversion, the moved files can be orphaned from the repository. The underlying issue is that Project View performs file moves within Explorer, but Tortoise fails to recognize file moves within Explorer. Thus, Tortoise treats the moved file as missing from its original location and ignores the moved file at its new location. The workaround is to manually add moved files back into Subversion.