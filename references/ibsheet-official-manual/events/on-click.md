---
KEY: onClick
KIND: event
PATH: events/on-click
ALIAS_EN: event, called, clicking, inside, cell, mouse, onclick
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-click
---
# onClick ***(event)***
> Event called when clicking inside a cell with the mouse.

> Fires after the [onMouseDown](./on-mouse-down), [onMouseUp](./on-mouse-up) events that occur on mouse click.

> Returning `1(true)` prevents the default action caused by the click.

> To use click events on a per-column basis, use the [OnClick](/docs/events/on-click) event.

> <mark>`Caution is needed when using this with columns where the value is modified simultaneously with the click, such as Bool, Radio.`</mark> 

> At the point when this event is called, the value before modification is still obtained, so for columns of the above types, it is recommended to handle click results in the [onAfterChange](./on-after-change) or [onAfterClick](./on-after-click) events.

### Syntax

```
    onClick : function(paramObject) {

    }
or
    sheet.bind("onClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the mouse click event occurred|
|row|`object`|[Data row object](/docs/appx/row-object) of the clicked cell|
|col|`string`|Column name of the clicked cell|
|x|`number`|x-coordinate where the mouse click occurred within the cell|
|y|`number`|y-coordinate where the mouse click occurred within the cell|
|event|`object`|JavaScript mouse event object|
<!--!
|`[Private]` canState|`string`|Edit/focus capability status information of the area where the mouse event occurred
(`"Editable"`, `"ReadOnly"`, `"NoFocus"`)|
|`[Private]` cellType|`string`|Type information of the area where the mouse event occurred
(`"Text"`, `"Int"`, `"Float"`, etc.)|
|`[Private]` part|`string`|Cell area information of the area where the mouse event occurred
(`"Tree"(tree icon area)`, `"Content"(cell data area)`, `"Caption"(header data(title) area)`, `"Side"(cell icon left area)`, `"Button"(cell button area)`)|
|`[Private]` partType|`string`|Cell area type information of the area where the mouse event occurred
(`"Expand"(tree icon expand button)`, `"SideClear"(delete icon)`, `"SideFile"(file select icon)`, `"SideCheck"(checkbox icon)`, `"SideButton"(button icon)`, `"SideDate"(calendar icon)`, `"SideSort"(sort icon)`, `"SideDefaults"(Defaults icon)`, `"SideIcon"(icon)`, `"SideFilter"(filter icon)`, `"EditEnum"(Enum data)`, `"EditText"(Text data)`, `"EditDate"(Date data)`, `"EditInt"(Int data)`, etc.)|
|`[Private]` section|`string`|Column area information of the area where the mouse event occurred
(`"Left"(LeftCols area)`, `"Mid"(Cols area)`, `"Right"(RightCols area)`)|
|`[Private]` kind|`string`|Row type information of the area where the mouse event occurred
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
!-->

### Return
***boolean***

### Example
```javascript
options.Events = {
    onClick:function(evtParam){
        // If any of the following conditions are met, the sheet action by click will not be executed.
        // 1) If the column name is 'sName'
        // 2) If the cell value in the sProgress column of the row is "Completed"
        if (evtParam.col == "sName" || evtParam.row["sProgress"] == "Completed") return true;
    }
}
```

### Read More

- [onAfterChange event](./on-after-change)
- [onAfterClick event](./on-after-click)
- [onRightClick event](./on-right-click)
- [onDblClick event](./on-dbl-click)
- [onLongClick event](./on-long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
