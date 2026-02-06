---
KEY: visible
KIND: row-property
PATH: props/row/visible
ALIAS_EN: whether, row, shown, hidden, visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/visible
---
# Visible ***(row)***

> Sets whether a row is shown or hidden.

> Rows hidden through filtering automatically have the `Visible: (0)false` property set.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Hidden|
|`1(true)`|Visible|

### Example
```javascript
//Hide rows where the Chk column value is 1.
var rows = sheet.getDataRows();
for(var i = 0; i < rows.length; i++){
    if (rows[i]["Chk"] == 1) {
        //Changing the property value does not immediately hide the row (rendering does not occur).
        rows[i]["Visible"] = 0;
    }
}
sheet.renderBody(); //Apply hidden rows to the screen (rendering)


//Hide a specific row in the loaded data.
{"data":[
    ...
    {"Visible": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```


### Read More
- [Hidden row](./hidden)
- [hideRow method](/docs/funcs/core/hide-row)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
