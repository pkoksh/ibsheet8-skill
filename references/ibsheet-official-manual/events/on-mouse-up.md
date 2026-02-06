---
KEY: onMouseUp
KIND: event
PATH: events/on-mouse-up
ALIAS_EN: event, called, pressed, mouse, button, released, sheet, occurring
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-mouse-up
---
# onMouseUp ***(event)***
> Event called when the pressed mouse button is released on the sheet, occurring after [onMouseDown](./on-mouse-down).

> Returning `1(true)` prevents the default action of `onMouseUp`.

> The parameters `row, col, x, y` can be `undefined` or `null` when pressing on a non-cell area (e.g., cell border).

### Syntax

```
    onMouseUp : function(paramObject) {

    }
or
    sheet.bind("onMouseUp" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the mouse was pressed|
|col|`string`|Column name of the cell where the mouse was pressed|
|x|`number`|X coordinate of the mouse press position within the cell|
|y|`number`|Y coordinate of the mouse press position within the cell|
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
    onMouseUp:function(evtParam){
        // Check the pressed column
        if (evtParam.row && evtParam.col) alert("Row " + sheet.getRowIndex(evtParam.row) + ", Column " + sheet.getColIndex(evtParam.col) + " was pressed.");
    }
}
```

### Read More

- [onMouseDown event](./on-mouse-down)
- [onClick event](./on-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
