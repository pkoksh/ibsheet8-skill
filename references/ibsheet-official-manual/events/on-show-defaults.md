---
KEY: onShowDefaults
KIND: event
PATH: events/on-show-defaults
ALIAS_EN: event, called, menu, configured, defaults, docs, props, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-defaults
---
# onShowDefaults ***(event)***
> Event called when the menu configured in [Defaults](/docs/props/col/defaults) is displayed on screen. (Fires after the [onReadDefaults](/docs/events/on-read-defaults) event.)

> You can modify the order or content of the menu to be displayed.


### Syntax

```
    onShowDefaults : function(paramObject) {

    }
or
    sheet.bind("onShowDefaults" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the menu will be displayed|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the menu will be displayed|
|col|`string`|Column name of the cell where the menu will be displayed|
|menu|`object`|Menu object to be displayed on screen|
|pos|`object`|`Position` object for the menu|


### Return
***none***


### Example
```javascript

options.Events = {
    onShowDefaults:function(evtParam){
        // Remove some items from the menu shown through Defaults before displaying.
        evtParam.menu.Items.splice(0,3); // Remove the first 3 items
    }
}
```

### Read More

- [Defaults col](/docs/props/col/defaults)
- [onReadDefaults event](/docs/events/on-read-defaults)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|Feature added|
