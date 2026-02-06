---
KEY: changed
KIND: row-property
PATH: props/row/changed
ALIAS_EN: indicates, whether, row, modified, changed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/changed
---
# Changed ***(row)***

> Indicates whether a row has been modified.

> When a row's value is modified, this is automatically set to `1(true)`, and when the value is restored to its original value, this property is automatically removed.

> Unless the [NoColor](./no-color) property is separately set, the background color when modified will change to the color defined by `.IBColorChanged` in the css/default(theme)/main.css file (`default: #FFFFD6` light yellow).

> It is recommended to use this property for checking modification status rather than directly changing its value.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|Modified|


### Example
```javascript
// Check the number of modified rows among all data.
// The example below was written to demonstrate the Changed property;
// to actually check the number of modified rows, use the getRowsByStatus() function.
var rows = sheet.getDataRows();
var cnt = 0;
for (var i = 0; i < rows.length; i++) {
    if (rows[i]["Changed"]) cnt++;
}
alert(cnt+" modified row(s) exist.");
```

### Read More
- [Added row](./added)
- [Deleted row](./deleted)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
