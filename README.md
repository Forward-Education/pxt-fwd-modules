# Extension Development Tips

## Architecture

Our extension ecosystem starts with a base (pxt-fwd-base). This base holds internally developed dependencies for our module library (pxt-fwd-modules) like theming, enums, blocks, and clients. The reason it's in a separate repo is that versioning can get tricky when a module depends on another module in the same repo.

The module library (pxt-fwd modules) contains all the individual functionalities that are depended on by our kits. Generally a module represents a Jacdac module, but in the case of the breakout board it has actually been broken out into 3 modules: fwd-pump, fwd-servo-continuous, and fwd-servo-positional. Each of these modules is a standalone extension, so a kit could contiain the pump functionality of the breakout board but not the servo functionality.

The dependency chain ends with kit extensions (ie pxt-solar). A kit extension does not introduce any functionality. It represents a collection of functionalities from the module library. This is where tutorials are stored.

In summary, a kit has one or more module dependencies and a module has one or more base dependencies.

## Intellisense

-   To get intellisense throughout the module library run './init.sh'.
-   You can get intellisense for any individual module or extension by running './init.sh \<directory\>'.
-   These scripts are just 'mkc init' followed by deletion of files that I didn't find useful.
-   Intellisense comes from pxt_modules, so when a dependency is updated you need to update pxt_modules.

## Testing

The 'test.ts' file is a MakeCode program that can be used in a few ways.

One way is to import the extension using the import button on the MakeCode homepage. You will need to import by URL to specify a module rather than the whole repo. The 'test.ts' program will automatically run in the simulator. You can generally add the appropriate simulators using 'ADD SIMULATORS' button and view console logs in 'Show data' view. You can edit the module files in MakeCode and push / pull changes using the GitHub interface. This interface is accessible through a button next to the project name in the bottom bar.

Another way is to run 'mkc' to see if the 'test.ts' program compiles. This compilation test can also happen through the makecode.yml GitHub action for kit extensions. You can deploy the program to a micro:bit with 'mkc -d'

## Versioning

'mkc bump' creates a new version of the extension. Always run it from the top level of the repo. It will update the pxt.json files for all nested extensions. In other words, do not bump an indivudual module. Always bump the whole module library.

You can specify either the version or commit of a dependency.

> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#v1.0.0</br>
> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#253d6ef9d5641a783ec666412b6e9bd9fea0eeb0

When the version or commit is not specified for the dependency, most of the time MakeCode pick up the most recent tag, or the most recent commit if there are no tags. However, most of the time is not all of the time and specifying a version reduces the risk of bad code making it into production, so always specify the versions of dependencies for production. Kit extensions should not be dependencies of other extensions because their version gets bumped automatically with every tutorial addition or change.

Kit extensions can safely take advantage of the autobump GitHub action since they have less risk of introducing critical errors. It automatically bumps the version anytime a change is pushed to main. This prevents software developers from being a gatekeeper to lesson content.

## Development

Since the kit extensions are the last item in the dependency chain and have specified the versions of their module dependencies you can safely have changes in main of pxt-fwd-base and pxt-fwd-modules without affecting production.

After making changes to pxt-fwd-base you can use 'update-dependency.py' to quickly set that dependency throughout pxt-fwd-modules to either the new commit hash or version. Remember to run './init.sh' afterwards to update your intellisense.

Extension approval from micro:bit is a surprisingly rigorous process. Some things to do to meet their standards:

-   make sure function and parameter descriptions are complete by clicking on blocks in the JavaScript MakeCode view
-   follow the observable code formatting throughout these extension repos, it's the way it is for a reason

## Block Order

Blocks are first formally grouped by module. Then they are informally grouped by service (if a module uses more than one service). The order within a service is event blocks, action blocks, status blocks, conditional blocks. I'm not sure if these are formal block categories. You can tell the block type by it's shape. The order within a block type is a qualitative assessment of it's usefulness. More useful to less useful. Exceptions can be made. For example, the calibrate pH action block is the only action block for pH and it fits much nicer below the other block types.

module -> service -> block type -> usefulness

## Common Issues

An extension is introduced as a dependency more than once and there are inconsistencies in name, version, or organization.

> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#v2.2.2</br>
> "**fwd-edu-dial**": "github:Forward-Education/pxt-fwd-modules/fwd-dial#v2.2.2</br>
> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#**v1.1.1**</br>
> "fwd-dial": "github:**ssande-fwd**/pxt-fwd-modules/fwd-dial#v2.2.2

You ran 'mkc bump' in a module rather than in the top-level.

You didn't include 'test.ts' in 'testFiles' or you included it in 'files' (pxt.json).
