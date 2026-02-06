---
KEY: setInfoRow
KIND: method
PATH: funcs/core/set-info-row
ALIAS: sheet.setInfoRow, setInfoRow()
ALIAS_EN: displays, record, count, page, navigation, user, defined, area
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-info-row
---
# setInfoRow ***(method)***
> Displays a record count, page navigation, and user-defined area at the top or bottom of the sheet.




### Syntax
```javascript
void setInfoRow( visible, layout, space, format, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|visible|`boolean`|Optional|Information row visible/hidden setting
`0(false)`:Information row hidden (`default`)
`1(true)`:Information row visible|
|layout|`array`\[`string`\|`object`\]|Optional|Paging, user-defined area, count information display settings<ul><li>`"Paging"` : Enable page navigation</li><li>`"Paging2"` : Enable numeric page navigation</li><li>`"Count"`: Display count information</li><li>`"SummaryLabel"`: Display total/average information for the selected area</li><li>`"StatusLabel"`: Display information about data editing, row movement, filtering, sorting, column movement, file upload/removal</li><li>`"user area string"` : String to display, `<span>`, `<div>` tags etc. can be used</li></ul>|
|viewCount|`number`|Optional|When layout is set to Paging2, whether to display selectBox
`0`:Not displayed (`default`)
`1`:Displayed|
|viewFormat|`string`|Optional|When layout is set to Paging2, sets the selectBox options for `viewCount`.|
|paging2Count|`number`|Optional|When layout is set to Paging2, sets the number of visible page numbers in page navigation. (`default: 5, max: 10`)|
|space|`string`|Optional|Position of the information row (`"Top"`: top, `"Bottom"`: bottom)|
|format|`string`|Optional|Record count input format combination|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected (`default`)
`1(true)`:Immediately reflected|

### Return Value
***none***

### Example
```javascript
//Display page navigation and count information (row count/total count) at the bottom of the sheet
sheet.setInfoRow( 1, ["Paging", "Count"], "Bottom", "[BOTTOMDATAROW / TOTALROWS]", 1);
```
```javascript
//Display page navigation and user-defined string at the bottom of the sheet
sheet.setInfoRow( 1, ["Paging","Test string display."], "Bottom");
```
```javascript
//Display record count at the bottom of the sheet
sheet.setInfoRow( 1, ["Count"], "Bottom", "[BOTTOMDATAROW / TOTALROWS]", 1);
```


### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.96|StatusLabel added|
|core|8.1.0.97|paging2, viewCount, viewFormat, paging2Count added|
