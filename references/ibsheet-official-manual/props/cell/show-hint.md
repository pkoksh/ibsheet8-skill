---
KEY: showHint
KIND: cell-property
PATH: props/cell/show-hint
ALIAS_EN: whether, hint, feature, cell, showhint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/show-hint
---
# ShowHint ***(cell)***

> Sets whether to use the hint feature for the cell.

> The hint is a feature that temporarily expands the cell width to show hidden content when the cell is too narrow to display all its content, only for the cell under the mouse cursor.

> This feature does not work on checkbox or radio type columns.

###
![Hint enabled](/assets/imgs/hint1.png "When the mouse cursor is on the cell, hidden content is shown through the hint")
<!-- IMAGE: Screenshot/Example Image - Hint enabled -->



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not use the hint feature|
|`1`|Activates when the cell is too small to show all content (`default`)|
|`2`|In addition to option 1, activates when a cell is at the bottom of a sheet with scrollbars and the lower part of the content is not visible|
|`3`|The hint feature does not normally work and only operates through the [onShowHint](/docs/events/on-show-hint) event (allows setting what content to show in the hint via the event)|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ShowHint", "0");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSShowHint"] = 2;
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... ,"CLSShowHint": "0", ...}
    ]
}
```

### Read More
- [HintValue cell](./hint-value)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
