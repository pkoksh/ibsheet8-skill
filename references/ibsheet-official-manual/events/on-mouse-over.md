---
KEY: onMouseOver
KIND: event
PATH: events/on-mouse-over
ALIAS_EN: event, called, whenever, mouse, enters, different, cell, within
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-mouse-over
---
# onMouseOver ***(event)***
> Event called whenever the mouse enters a different cell within the sheet, and is also called when a hint is displayed on screen or when entering edit mode.

> The parameters `row, col, x, y` can be `undefined` or `null` when pressing on a non-cell area (e.g., cell border).

### Syntax

```
    onMouseOver : function(paramObject) {

    }
or
    sheet.bind("onMouseOver" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the mouse is located|
|col|`string`|Column name of the cell where the mouse is located|
|orow|`object`|[Data row object](/docs/appx/row-object) of the cell where the mouse was previously located|
|ocol|`string`|Column name of the cell where the mouse was previously located|
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
|`[Private]` ocanState|`string`|Edit and focus availability state information just before the mouse event occurred
(`"Editable"(editable)`, `"ReadOnly"(not editable)`, `"NoFocus"(not focusable)`)|
|`[Private]` ocellType|`string`|Type information just before the mouse event occurred
(`"Text"`, `"Int"`, `"Float"`, etc.)|
|`[Private]` opart|`string`|Cell area information just before the mouse event occurred
(`"Tree"(tree icon area)`, `"Content"(cell data area)`, `"Caption"(header data (title) area)`, `"Side"(left side of cell icon area)`, `"Button"(cell button area)`)|
|`[Private]` opartType|`string`|Cell area type information just before the mouse event occurred
(`"Expand"(tree icon expand button)`, `"SideClear"(delete icon)`, `"SideFile"(file select icon)`, `"SideCheck"(checkbox icon)`, `"SideButton"(button icon)`, `"SideDate"(calendar icon)`, `"SideSort"(sort icon)`, `"SideDefaults"(Defaults icon)`, `"SideIcon"(icon)`, `"SideFilter"(filter icon)`, `"EditEnum"(Enum data)`, `"EditText"(Text data)`, `"EditDate"(Date data)`, `"EditInt"(Int data)`, etc.)|
|`[Private]` osection|`string`|Column area information just before the mouse event occurred
(`"Left"(LeftCols area)`, `"Mid"(Cols area)`, `"Right"(RightCols area)`)|
|`[Private]` okind|`string`|Row type information just before the mouse event occurred
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
!-->

### Return
***none***


### Example
```javascript
options.Events = {
    onMouseOver:function(evtParam){
        if (evtParam.row && evtParam.col && evtParam.orow && evtParam.ocol) {
            console.log("Previous cell value is "+ sheet.getValue({row:evtParam.orow, col:evtParam.ocol}));
            console.log("Current cell value is "+ sheet.getValue({row:evtParam.row, col:evtParam.col}));
        }
    }
}
```

### Read More
- [onMouseMove event](./on-mouse-move)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind`, `ocanState`, `ocellType`, `opart`, `opartType`, `osection`, `okind` parameters added|
!-->
