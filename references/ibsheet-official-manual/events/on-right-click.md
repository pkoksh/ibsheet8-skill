---
KEY: onRightClick
KIND: event
PATH: events/on-right-click
ALIAS_EN: event, called, user, right, clicks, cell, mouse, onrightclick
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-right-click
---
# onRightClick ***(event)***
> Event called when the user right-clicks a cell with the mouse.

> Returning `1(true)` prevents the default action triggered by the right-click.

> The parameters `row, col, x, y` can be `undefined` or `null` when pressing on a non-cell area (e.g., cell border).

### Syntax

```
    onRightClick : function(paramObject) {

    }
or
    sheet.bind("onRightClick" , function(paramObject) {});
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
    onRightClick:function(evtParam){
        // Prevent the default right-click action except when a menu is configured for the right-clicked column.
        if (!evtParam.sheet.Cols[evtParam.col].Menu) return true;
    }
}
```

### Read More

- [onClick method](./on-click)
- [onRightLongClick method](./on-right-long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
