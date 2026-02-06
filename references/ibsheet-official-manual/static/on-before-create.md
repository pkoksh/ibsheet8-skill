---
KEY: onBeforeCreate
KIND: static-member
PATH: static/on-before-create
ALIAS_EN: type, event, allows, you, modify, parameters, options, etc
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/on-before-create
---
# onBeforeCreate ***(static)***

> A type of event that allows you to modify the `parameters (el, id, options, etc.)` passed before a sheet is created after the [(Static) IBSheet.create()](./create) function is called.

> Receives the `options` that have been merged between [(Static) IBSheet.CommonOptions](./common-options) and the options used for sheet creation as a `parameter`.

> You can implement this function directly to define or modify project-common content that should be set in `options`.

> <mark>When using this function, you must return the modified parameter object for the sheet to be created properly.</mark>

### Syntax
```javascript
IBSheet.onBeforeCreate = function(obj){
    ...
};
```

### Parameters
| Name | Type | Description |
|----------|----|----|
|id|`string`|Sheet object `id`|
|el|`string`|`id` of the div element where the sheet will be created|
|options|`object`|`json object` containing sheet initialization information|
|data|`array[object]`|`Data array` to be loaded simultaneously with sheet creation|

### Return Value
***object*** : Return the content received as the `options` parameter with partial modifications or as-is

### Example
```javascript
// ibsheet initialization common settings
IBSheet.onBeforeCreate = function (obj) {
    // Set a default context menu for sheets on all screens.
    obj.options["Def"]["Row"]["Menu"] = {
        Items:[
            {Name: "Add Row"},
            {Name: "Delete Row"},
            {
                Menu: 1,
                Name: "Save File",
                Items: [
                    {Name: "Excel Download", Icon: "./images/xls.gif"},
                    {Name: "Text Download", Icon: "./images/txt.gif"},
                    {Name: "PDF Download", Icon: "./images/pdf.gif"},
                ]
            }
        ]
    };
    obj.options["Events"]["onSelectMenu"] = function (evt) {
        switch (evt.result) {
            case "Add Row":
                evt.sheet.addRow({next: evt.row, visible: 1})
            break;
            case "Delete Row":
                evt.sheet.deleteRow({row: evt.row, del: 1});
            break;
        }
    }
    return obj;
}
```
### Read More
 - [IBSheet.create static](./create)
 - [IBSheet.CommonOptions static](./common-options)
 - [Common event handling method](/docs/appx/shared-event)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|Renamed from `beforeCreate` to `onBeforeCreate` (the existing `beforeCreate` can still be used but is not recommended.)|
