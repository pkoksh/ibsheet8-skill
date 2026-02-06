---
KEY: noUpload
KIND: row-property
PATH: props/row/no-upload
ALIAS_EN: whether, specified, row, included, saving, noupload
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/no-upload
---
# NoUpload ***(row)***

> Sets whether a specified row is included when saving.

> Rows set to `1(true)` are ignored regardless of their status when save functions ([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string), etc.) are called.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Send to server (data row `default: 0(false)`)|
|`1(true)`|Exclude from sending to server (filter or total rows `default: 1(true)`)|

### Example
```javascript
function save(){
    //Exclude specific rows from being sent to server when saving.
    var rows = sheet.getDataRows();
    for(var i = 0; i < rows.length; i++){
        if (rows[i]["CHK"] == 0 && rows[i]["UpYEAR"] < 2018) {
            rows[i]["NoUpload"] = 1;
        }
    }
    //Call save function.
    sheet.doSave(url);
}
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
