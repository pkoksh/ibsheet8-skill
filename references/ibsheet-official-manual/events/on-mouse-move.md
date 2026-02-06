---
KEY: onMouseMove
KIND: event
PATH: events/on-mouse-move
ALIAS_EN: event, called, mouse, moves, sheet, onmousemove
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-mouse-move
---
# onMouseMove ***(event)***
> Event called when the mouse moves on the sheet.

> Returning `1(true)` prevents the default action of `onMouseMove`.

> Since this event fires continuously while the mouse moves over the sheet, adding too many operations in this event may **cause slowdowns**.

> The parameters `row, col, x, y` can be `undefined` or `null` (e.g., cell border).

### Syntax

```
    onMouseMove : function(paramObject) {

    }
or
    sheet.bind("onMouseMove" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the mouse cursor is located|
|col|`string`|Column name where the mouse cursor is located|
|x|`number`|X coordinate of the mouse position within the cell|
|y|`number`|Y coordinate of the mouse position within the cell|
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
    onMouseMove:function(evtParam){
        if (evtParam.row && evtParam.col) {
            console.log("Current cell value is "+ sheet.getValue({row:evtParam.row, col:evtParam.col}));
        }
    }
}
```

### Read More

- [onMouseOver event](./on-mouse-over)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
