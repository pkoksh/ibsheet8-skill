---
KEY: onLongClick
KIND: event
PATH: events/on-long-click
ALIAS_EN: event, called, user, clicks, cell, mouse, longer, time
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-long-click
---
# onLongClick ***(event)***
> Event called when the user clicks a cell with the mouse for longer than the time set in [LongClick](/docs/props/cfg/long-click).

> Returning `1(true)` prevents the default action triggered by the click.

### Syntax

```
    onLongClick : function(paramObject) {

    }
or
    sheet.bind("onLongClick" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the mouse click event occurred|
|row|`object`|[Data row object](/docs/appx/row-object) of the clicked cell|
|col|`string`|Column name of the clicked cell|
|x|`number`|X coordinate of the mouse click within the cell|
|y|`number`|Y coordinate of the mouse click within the cell|
|event|`object`|JavaScript mouse event object|
<!--!
|`[Private]` canState|`string`|Edit and focus availability state information of the location where the mouse event occurred
(`"Editable"(editable)`, `"ReadOnly"(not editable)`, `"NoFocus"(not focusable)`)|
|`[Private]` cellType|`string`|Type information of the location where the mouse event occurred
(`"Text"`, `"Int"`, `"Float"`, etc.)|
|`[Private]` part|`string`|Cell area information of the location where the mouse event occurred
(`"Tree"(tree icon area)`, `"Content"(cell data area)`, `"Caption"(header data (title) area)`, `"Side"(left side of cell icon area)`, `"Button"(cell button area)`)|
|`[Private]` partType|`string`|Cell area type information of the location where the mouse event occurred
(`"Expand"(tree icon expand button)`, `"SideClear"(delete icon)`, `"SideFile"(file select icon)`, `"SideCheck"(checkbox icon)`, `"SideButton"(button icon)`, `"SideDate"(calendar icon)`, `"SideSort"(sort icon)`, `"SideDefaults"(Defaults icon)`, `"SideIcon"(icon)`, `"SideFilter"(filter icon)`, `"EditEnum"(Enum data)`, `"EditText"(Text data)`, `"EditDate"(Date data)`, `"EditInt"(Int data)`, etc.)|
|`[Private]` section|`string`|Column area information of the location where the mouse event occurred
(`"Left"(LeftCols area)`, `"Mid"(Cols area)`, `"Right"(RightCols area)`)|
|`[Private]` kind|`string`|Row type information of the location where the mouse event occurred
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
!-->

### Return
***boolean***

### Example
```javascript
options.Events = {
    onLongClick:function(evtParam){
        // When long-clicked, copies the value of the clicked cell in the current sheet to the sFrom column of the first row in sheet2.
        if (evtParam.col == "sCountry") {
            sheet2.setValue({row:sheet2.getRowByIndex(1), col:"sFrom", val:sheet.getValue({row:params.row, col:params.col}), render:1});
        }
    }
}
```

### Read More
- [onClick event](./on-click)
- [onRightLongClick event](./on-right-long-click)
- [LongClick cfg](/docs/props/cfg/long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
