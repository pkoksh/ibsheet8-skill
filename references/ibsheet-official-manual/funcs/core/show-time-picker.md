---
KEY: showTimePicker
KIND: method
PATH: funcs/core/show-time-picker
ALIAS: sheet.showTimePicker, showTimePicker()
ALIAS_EN: opens, hour, minute, second, dialog, specific, cell, showtimepicker
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-time-picker
---
# showTimePicker ***(method)***

> Opens a hour/minute/second dialog on a specific cell.

> The dialog is only displayed when [Type](/docs/appx/type) is set to `Date` / `Text`.

> When `check` is clicked, for `Text` type cells, the value is set in `HH:mm:ss` format.

![TimePicker](/assets/imgs/timepicker.png)
<!-- IMAGE: Screenshot/Example Image - TimePicker -->


### Syntax
```javascript
boolean showTimePicker( row , col , format );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Required|[data row object](/docs/appx/row-object)|
|col|`string`|Required|column name|
|format|`string`|Optional|Select hour/minute or hour/minute/second TimePicker
 (`"HHmmss"` or `"HHmm"` only support) (`defualt: "HHmmss"`)|


### Return Value
***boolean*** : Whether the dialog was displayed successfully (returns true if properly displayed, returns false if display failed)

### Example
```javascript
sheet.showTimePicker({row:sheet.getRowById("AR5"), col:"Date1", foramt:"HHmm"});
```

### Read More
- [TimePicker col](/docs/props/col/time-picker)


### Since
|product|version|desc|
|---|---|---|
|core|8.1.0.6|Feature added|
|core|8.1.0.10|`format` argument `default` specified|
