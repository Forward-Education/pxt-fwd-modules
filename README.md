# Extension Development Tips

## Intellisense

-   To get intellisense throughout this repo run './init.sh'.
-   You can get intellisense for any individual module or extension by running 'mkc init'.

## Testing

To test a module, import it using the import button on the MakeCode homepage. You will need to import by URL to specify the module rather than the whole repo. From there you can generally add the appropriate simulators using 'ADD SIMULATORS' button and view console logs in 'Show data' view. You can edit the module files in MakeCode and push / pull changes using the button next to the project name. Do not have modules in this repo depend on other modules in this repo. It creates headaches. Use pxt-fwd-base repo for that.

## Versioning

'mkc bump' creates a new version of the extension. You can run it from the top level and it will also update the pxt.json files in any nested extensions. You can specify either the version or commit of a dependency.

> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#v1.0.0</br>
> "fwd-dial": "github:Forward-Education/pxt-fwd-modules/fwd-dial#253d6ef9d5641a783ec666412b6e9bd9fea0eeb0
