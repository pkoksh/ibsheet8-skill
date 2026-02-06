---
KEY: reloadData
KIND: method
PATH: funcs/core/reload-data
ALIAS: sheet.reloadData, reloadData()
ALIAS_EN: reverts, sheet, data, initial, creation, state, reloaddata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/reload-data
---
# reloadData ***(method)***
> Reverts the sheet's data to its initial creation state.

> In other words, it reverts to the data loaded through the [IBSheet.create()](/docs/static/create) function.

> Properties assigned to columns after creation (color, editability, etc.) are maintained, but properties assigned to rows or cells are initialized.

> This function does not affect the `Head, Foot, Solid` area.

### Syntax
```javascript
void reloadData( func );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|func |`function`|Optional|Callback function definition after reload completion|

### Return Value
***none***

### Example
```javascript
if(confirm("Do you want to cancel your work and revert to the initially searched data?")){
    sheet.reloadData(
        function(){ alert("Data initialization is complete."); }
    );
}
```

### Read More

- [reload method](./reload)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
