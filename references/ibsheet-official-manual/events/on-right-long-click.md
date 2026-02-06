---
KEY: onRightLongClick
KIND: event
PATH: events/on-right-long-click
ALIAS_EN: event, called, user, right, clicks, cell, mouse, longer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-right-long-click
---
# onRightLongClick ***(event)***
> Event called when the user right-clicks a cell with the mouse for longer than the time set in [LongClick](/docs/props/cfg/long-click).

> Returning `1(true)` prevents the default action triggered by the right-click.

### Syntax

```
    onRightLongClick : function(paramObject) {

    }
or
    sheet.bind("onRightLongClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the right-click event occurred|
|row|`object`|[Data row object](/docs/appx/row-object) of the right-clicked cell|
|col|`string`|Column name of the right-clicked cell|
|x|`number`|X coordinate of the right-click within the cell|
|y|`number`|Y coordinate of the right-click within the cell|
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
    onRightLongClick:function(evtParam){
        // When the sTotal column cell is long right-clicked, the following operation is performed.
        // Multiplies the sCount column cell value of the first row in sheet2 by the sWeight column cell value of the clicked row in the current sheet.
        // Sets the result as the value of the currently long-clicked cell.
        if (evtParam.col == "sTotal") {
            if (confirm("Would you like to receive the value?")) {
                evtParam.sheet.setValue({
                    row: evtParam.row,
                    col: evtParam.col,
                    val: sheet2.getValue({row: sheet2.getRowByIndex(1), col: "sCount"}) * evtParam.sheet.getValue({row: evtParam.row, col: "sWeight"}),
                    render: 1
                })
            }
        }
    }
}
```

### Read More

- [onClick event](./on-click)
- [onRightClick event](./on-right-click)
- [onLongClick event](./on-long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
