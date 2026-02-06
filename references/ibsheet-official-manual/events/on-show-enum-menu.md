---
KEY: onShowEnumMenu
KIND: event
PATH: events/on-show-enum-menu
ALIAS_EN: event, called, opening, list, enum, type, column, onshowenummenu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-show-enum-menu
---
# onShowEnumMenu ***(event)***
> Event called when opening a list in an Enum type column.

> You can create and return a new list to use instead of [EnumMenu](/docs/props/col/enum-menu) (can be used even if [EnumMenu](/docs/props/col/enum-menu) is not previously configured).


### Syntax

```
    onShowEnumMenu : function(paramObject) {

    }
or
    sheet.bind("onShowEnumMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the combo will open|
|col|`string`|Column name of the cell where the combo will open|
|enummenu|`string`|Value set in [EnumMenu](/docs/props/col/enum-menu)|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowEnumMenu:function(evtParam){
        // If EnumMenu is not configured and the column name is "sCity", create and return a new EnumMenu.
        if (!evtParam.enummenu && evtParam.col == "sCity") {
            if (evtParam.sheet.getString({row: evtParam.row, col: "sLocal"}) === "Asia") {
                return "{Items: [{ Text: 'Korea',Menu: 1,Items: [{ Value: '01', Text: 'Seoul' }, { Value: '02', Text: 'Incheon' }]}, {Text: 'Japan', Menu: 1,Items: [{ Value: '03', Text: 'Tokyo' }, { Value: '04', Text: 'Osaka' }] }]}";
            }
            else {
                return "{Items: [{Text: 'USA',Menu: 1,Items: [{ Value: '05', Text: 'Washington' }, { Value: '06', Text: 'New York' }]}, {Text: 'Canada',Menu: 1,Items: [{ Value: '07', Text: 'Toronto' }, { Value: '08', Text: 'Montreal' }]}]}";
            }
        }

    }
}
```

### Read More

- [EnumMenu col](/docs/props/col/enum-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
