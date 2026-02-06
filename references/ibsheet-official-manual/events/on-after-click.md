---
KEY: onAfterClick
KIND: event
PATH: events/on-after-click
ALIAS_EN: event, called, last, clicking, inside, cell, mouse, onafterclick
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-click
---
# onAfterClick ***(event)***
> Event called last when clicking inside a cell with the mouse.

> When clicking a specific cell, this event fires after all events related to focus movement, value change (`Bool type`), or edit start (`Text type`) have occurred. 

> When migrating the OnClick event from `ibsheet7` product, it is recommended to use this event. See [OnClick event migration](/docs/appx/ibsheet7-migration).

### Syntax

```
    onAfterClick : function(paramObject) {

    }
or
    sheet.bind("onAfterClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the mouse click event occurred|
|row|`object`|[Data row object](/docs/appx/row-object) of the clicked cell|
|col|`string`|Column name of the clicked cell|
|x|`number`|`x coordinate` of the mouse click within the cell|
|y|`number`|`y coordinate` of the mouse click within the cell|
|event|`object`|`javascript` mouse event object|
<!--!
|`[Private]` canState|`string`|Edit/focus availability status information of where the mouse event occurred
(`"Editable"`, `"ReadOnly"`, `"NoFocus"`)|
|`[Private]` cellType|`string`|Type information of where the mouse event occurred
(`"Text"`, `"Int"`, `"Float"`, etc.)|
|`[Private]` part|`string`|Cell area information of where the mouse event occurred
(`"Tree"(tree icon area)`, `"Content"(cell data area)`, `"Caption"(header data (title) area)`, `"Side"(left side of cell icon area)`, `"Button"(cell button area)`)|
|`[Private]` partType|`string`|Cell area type information of where the mouse event occurred
(`"Expand"(tree icon expand button)`, `"SideClear"(delete icon)`, `"SideFile"(file select icon)`, `"SideCheck"(checkbox icon)`, `"SideButton"(button icon)`, `"SideDate"(calendar icon)`, `"SideSort"(sort icon)`, `"SideDefaults"(Defaults icon)`, `"SideIcon"(icon)`, `"SideFilter"(filter icon)`, `"EditEnum"(Enum data)`, `"EditText"(Text data)`, `"EditDate"(Date data)`, `"EditInt"(Int data)`, etc.)|
|`[Private]` section|`string`|Column area information of where the mouse event occurred
(`"Left"(LeftCols area)`, `"Mid"(Cols area)`, `"Right"(RightCols area)`)|
|`[Private]` kind|`string`|Row type information of where the mouse event occurred
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
!-->

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterClick:function(evtParam){
        if(evtParam.row["CloseQ"] == 1 && evtParam.col == "ConfirmYN" && evtParam.row[col] == 1){
            if(confirm("Would you like to submit this item for approval?")){
                window.open("processBuild.do?swid="+evtParam.row["SWID"],"width=200,height=100");
            }
        }
    }
}
```

### Read More
- [onClick event](./on-click)
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
