---
KEY: onDblClick
KIND: event
PATH: events/on-dbl-click
ALIAS_EN: event, called, user, double, clicks, mouse, ondblclick
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-dbl-click
---
# onDblClick ***(event)***
> Event called when the user double-clicks with the mouse.

> Due to the nature of the web, the [onClick](./on-click) event fires first, then this event fires.

> The arguments row, col, x, y may be `undefined` or `null` when clicking on a non-cell area (e.g., cell border).

<!--!
> `[Private note]` ***Returning true prevents the default action caused by double-click.***
!-->

### Syntax

```
    onDblClick : function(paramObject) {

    }
or
    sheet.bind("onDblClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object where the mouse double-click event occurred|
|row|`object`|[Data row object](/docs/appx/row-object) of the double-clicked cell|
|col|`string`|Column name of the double-clicked cell|
|x|`number`|x-coordinate where the mouse double-click occurred within the cell|
|y|`number`|y-coordinate where the mouse double-click occurred within the cell|
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

<!--!
### Return
`[Private]` ***boolean***
!-->

### Example
```javascript
options.Events = {
    onDblClick:function(evtParam){
        alert("Entering edit mode on double-click.");
    }
}
```

### Read More
- [onClick event](./on-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
<!--!
|`[Private]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` parameters added|
!-->
