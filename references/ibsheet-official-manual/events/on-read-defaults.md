---
KEY: onReadDefaults
KIND: event
PATH: events/on-read-defaults
ALIAS_EN: event, called, menu, configured, defaults, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-read-defaults
---
# onReadDefaults ***(event)***
> Event called when the menu configured in [Defaults](/docs/props/col/defaults) is about to be displayed on screen.

> When a desired menu is returned as a string or object, the corresponding menu is displayed on screen, and the previously configured menu is ignored.

> Returning `null` prevents the menu from being displayed on screen.

### Syntax

```
    onReadDefaults : function(paramObject) {

    }
or
    sheet.bind("onReadDefaults" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the menu will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the menu will be displayed|
|col|`string`|Column name of the cell where the menu will be displayed|
|defaults|`object`|`Defaults` configuration value to be displayed on screen|

### Return
***mixed( `string` \| `object` )***

### Example
```javascript

options.Events = {
    onReadDefaults:function(evtParam){
        // Configure the menu to display when the sProgress column value in the row is "In Progress" or "Completed"
        if(evtParam.col == "sTitle" && evtParam.row["sProgress"] == "In Progress") {
            return "{Items:[{Columns:1,Items:[ { Name: '30%' },{ Name: '40%' },{ Name: '50%' },{ Name: '60%' },{ Name: '80%' }]}]}"
        } else if (evtParam.col == "sTitle" && evtParam.row["sProgress"] == "Completed") return null;
        else {
            return evtParam.defaults; // For other cases, display the previously configured menu as-is.
        }
    }
}
```

### Read More

- [Defaults col](/docs/props/col/defaults)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
