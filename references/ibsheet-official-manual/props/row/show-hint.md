---
KEY: showHint
KIND: row-property
PATH: props/row/show-hint
ALIAS_EN: hint, feature, expands, width, cell, show, content, exceeds
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/show-hint
---
# ShowHint ***(row)***

> A hint is a feature that expands the width of a cell to show its content when the cell content exceeds the column width and the mouse cursor hovers over the cell.

> Sets whether to activate the hint feature at the row level. It does not work on checkbox or radio type columns.


###
![Hint activated](/assets/imgs/hint1.png "When the mouse cursor hovers over a cell, hidden content is shown through the hint")
<!-- IMAGE: Screenshot/Example Image - Hint activated -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Hint feature disabled|
|`1`|Activates when the cell size is too small to show all cell content (`default`)|
|`2`|In addition to option 1, activates when the bottom part of the content is not visible because the cell is at the bottom of a sheet with scrollbar|
|`3`|The hint feature does not normally activate and only works through the [onShowHint](/docs/events/on-show-hint) event (allows setting what content to display in the hint through the event)|


### Example
```javascript
//Remove the Hint feature for row 10.
var row = sheet.getRowById("AR10");
row["ShowHint"] = 0;
sheet.refreshRow(row);

//Remove the Hint feature for some rows in the loaded data.
{"data":[
    {"ShowHint": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [onShowHint event](/docs/events/on-show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
