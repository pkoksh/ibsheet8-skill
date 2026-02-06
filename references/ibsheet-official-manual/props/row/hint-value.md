---
KEY: hintValue
KIND: row-property
PATH: props/row/hint-value
ALIAS_EN: hint, feature, expands, width, cell, show, hidden, content
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/hint-value
---
# HintValue ***(row)***

> A hint is a feature that expands the width of a cell to show hidden content when the mouse cursor hovers over a cell whose content exceeds the column width.

> This feature changes/sets the content to be displayed when the hint feature is activated at the row level.


###
![HintValue](/assets/imgs/hintValue.png "When the mouse cursor hovers over a cell, the configured text is displayed")
<!-- IMAGE: Screenshot/Example Image - HintValue -->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Content to be displayed when hint is activated|

### Example
```javascript
//For row 10, show different content from the original when using the Hint feature.
var row = sheet.getRowById("AR10");
row["HintValue"] = "This transaction has been completed.";


//Show different content from the original cell content for some rows in the loaded data.
{"data":[
    {"HintValue":"This is a suspicious transaction item.", "ColName1":"Value1", "ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [ShowHint row](./show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
