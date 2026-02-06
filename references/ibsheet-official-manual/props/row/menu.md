---
KEY: menu
KIND: row-property
PATH: props/row/menu
ALIAS_EN: context, menu, displayed, right, mouse, button, clicked, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/menu
---
# Menu ***(row)***

> Sets the context menu to be displayed when the right mouse button is clicked.



### Type
`mixed`( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies a context menu string using the first character as delimiter (ex: @Save@Temp Save@Cancel or *Submit*Cancel) |
|`object`|[Refer to Menu Object settings link](/docs/appx/menu)

### Example
```javascript
//Activate Excel download settings when right-clicking on the header row.
var rows = sheet.getHeaderRows();
for(var i = 0; i < rows.length; i++){
    rows[i]["Menu"] = "|Excel Download|Text Download|PDF Download";
}

//Apply context menu feature to specific rows in loaded data.
{"data":[
    {"Menu":"|Submit|Hold","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Menu appendix](/docs/appx/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
