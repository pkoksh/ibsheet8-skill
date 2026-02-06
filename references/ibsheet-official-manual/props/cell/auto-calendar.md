---
KEY: autoCalendar
KIND: cell-property
PATH: props/cell/auto-calendar
ALIAS_EN: whether, display, calendar, user, enters, edit, mode, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/auto-calendar
---
# AutoCalendar ***(cell)***
> Sets whether to display a calendar when the user enters edit mode for a cell with [Type](/docs/appx/type) Date.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Feature disabled (`default`)|
|`1(true)`|Show calendar when editing|


### Example
```javascript
// Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "AutoCalendar", 1);
```

### Read More
- [AutoCalendar col](/docs/props/col/auto-calendar)
- [AutoCalendar cfg](/docs/props/cfg/auto-calendar)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
