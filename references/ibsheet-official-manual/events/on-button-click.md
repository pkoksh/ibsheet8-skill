---
KEY: onButtonClick
KIND: event
PATH: events/on-button-click
ALIAS_EN: event, called, clicking, side, button, within, cell, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-button-click
---
# onButtonClick ***(event)***
> Event called when clicking the side button within a cell when the [Button](/docs/props/col/button) property value is `Button, Html`.

> If the cell with [Button](/docs/props/col/button) set is not editable, this event is called not only when clicking the button but also when clicking inside the cell.

> This event is limited to buttons positioned on the side (![When the type is not "Button"](/assets/imgs/button4.png "When the type is not Button")
<!-- IMAGE: Button Image - When the type is not "Button" -->), and for button-type forms (![When the type is "Button"](/assets/imgs/typeButton.png "When the type is Button")
<!-- IMAGE: Button Image - When the type is "Button" -->), you should configure the button click logic through [onClick](./on-click).

> Returning `1(true)` ignores the default action for the button.

### Syntax

```
    onButtonClick : function(paramObject) {

    }
or
    sheet.bind("onButtonClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) where the cell is located|
|col|`string`|Column name of the cell|
|x|`number`|Mouse click x-coordinate within the button|
|y|`number`|Mouse click y-coordinate within the button|

<!--!
### Return
`[Private]` ***number***
!-->

### Example
```javascript
options.Cols = [
    {
        Header : "ID",
        Name: "sId",
        Type: "Text",
        Button: "Button",
        ButtonText: "Check Duplicate",
        WidthPad: 100       //Button width setting
    } ...
]

options.Events = {
    onButtonClick:function(evtParam){
        if (evtParam.col == "sId") {
            // If there is a duplicate value in the sId column, show an alert.
            var value = evtParam.row[evtParam.col];
            var r = evtParam.sheet.getFirstRow();
            while (r) {
                if (r != evtParam.row && r[evtParam.col] == value) {
                    alert("The same ID exists. Please enter a different ID.");
                    break;
                }
                r = r.nextSibling;
            }
        }
    }
}
```

### Try it
- [Demo of onButtonClick](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Button/)

### Read More

- [Button col](/docs/props/col/button)
- [ButtonText col](/docs/props/col/button-text)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
