---
KEY: hintValue
KIND: cell-property
PATH: props/cell/hint-value
ALIAS_EN: hint, feature, column, width, narrow, part, cell, content
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/hint-value
---
# HintValue ***(cell)***

> Hint is a feature that, when the column width is narrow and part of the cell content is not visible, temporarily expands the cell width for the cell under the mouse cursor to reveal the hidden content.

> Sets the content to be displayed instead of the original cell content when the hint feature is activated.


###
![Hint activated](/assets/imgs/hint1.png "Hidden content is shown through hint when mouse cursor is over the cell")
<!-- IMAGE: Screenshot/Example Image - Hint activated -->

[Hint feature usage example]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Text to display when the hint feature is activated (when mouse cursor hovers over the cell)|



### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "HintValue", "Please check the 'Balance Sheet' column first.");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSHintValue"] = "This period has been closed.";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSHintValue":"Please enter the construction start date first." , ...}
    ]
}
```

### Read More
- [ShowHint cell](./show-hint)
- [ShowHint col](/docs/props/col/show-hint)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
