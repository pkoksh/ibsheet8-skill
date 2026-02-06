---
KEY: showCalendar
KIND: method
PATH: funcs/core/show-calendar
ALIAS: sheet.showCalendar, showCalendar()
ALIAS_EN: allows, calendar, control, externally, within, sheet, method, showcalendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-calendar
---
# showCalendar ***(method)***
> Allows using a calendar control externally within the sheet through a method. 


### Syntax
```javascript
object showCalendar(row, col, calendar, pos, func, date, always);
```


### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|[data row object](/docs/appx/row-object)|
|col |`string`|Required|column name|
|calendar|`object`|Optional|Calendar configuration JSON object (refer to `calOption` of [showCalendar](/docs/static/show-calendar))
|pos|`object`|Optional|Adjust the horizontal/vertical position of the displayed calendar ex) `{x:10, y:10}`
|func|`function`|Optional|`callback` function called when user selects from the context menu
|date|`string`|Optional|Initial date of the displayed calendar
|always|`boolean`|Optional|Whether to keep showing when a calendar is already displayed
`0(false)`:Toggle calendar Visible/Hidden (`default`)
`1(true)`:Show calendar|


### Return Value
***object*** : Calendar object


### Example
```javascript
// Create a calendar at the sDate column of the currently focused row.
sheet.showCalendar(sheet.getFocusedRow(), "sDate", {Date: "2020-06-02", Format: "yyyy-MM-dd"});
```

### Read More

- [showCalendar static](/docs/static/show-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|Feature added|
