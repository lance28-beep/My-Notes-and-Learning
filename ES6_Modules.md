## ES6 Modules

The History of Javascript

#NPM
- the node package manager is a command-line tool that gives you access to a gigantic repository of plugins, libraries and tools.if you have done our fundamentals course, you will probably have encountered it when you installed the jest testing framework to do our exercises.

- NPM is the world's largest software registry.
- Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
- NPM consist to 3 distinct components:
* the website
* the Command Line Interface (CLI)
* the registry
- use the <em>Website</em> to discover packages, set up profiles, and manage other aspects of your npm experience.for example, you can set up organizations to manage access to public or private packages.
- use <em>CLI</em> runs from a terminal, and is how most developers interact with npm.
- the <em>registry</em> is a large public database of javascript software and the meta-information surrounding it.

## Use NPM to..
* Adapt packages of code for your apps, or incorporate packages as they are.
* Download standalone tools you can use right away.
* Run packages without downloading using npx.
* Share code with any npm user, anywhere.
* Restrict code to specific developers.
* Create organizations to coordinate package maintenance, coding, and developers
* Form virtual teams by using organizations.
* Manage multiple versions of code and code dependencies.
* Update applications easily when underlying code is updated.
* Discover multiple ways to solve them same puzzle.
* Find other developers who are working on similar problems and projects.

## Downloading and installing packages
- unscoped packages are always public, which means they can be searched for,
downloaded, and installed by anyone. To install a public package, on the command line, run:
> npm install <i>package_name</i>
- this will create the node_modules directory in your current directory(if one doesn't exist yet) and will download the package to that directory.

## Creating a package.json file
- You can add a package.json file to your package to make it easy for others to manage and install.Packages published to the registry must contain a <i>package.json</i> file.
