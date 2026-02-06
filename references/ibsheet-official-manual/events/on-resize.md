---
KEY: onResize
KIND: event
PATH: events/on-resize
ALIAS_EN: event, fires, sheet, size, changed, onresize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-resize
---
# onResize ***(event)***
> Event that fires when the sheet size is changed.

### Syntax

```
    onResize : function(paramObject) {

    }
or
    sheet.bind("onResize" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|oldwidth|`number`|Width before the size change|
|oldheight|`number`|Height before the size change|
|width|`number`|Width after the size change|
|height|`number`|Height after the size change|

### Return
***none***

### Example
```javascript
options.Events = {
    onResize:function(evtParam){
        // If the sheet size becomes too small, hide some columns
        if (evtParam.sheet.getBodyWidth(1) < 1200) {
            evtParam.sheet.setAttribute(null , "SN", "Visible", 0, 0);
            evtParam.sheet.setAttribute(null , "ProductID", "Visible", 0, 0);
            evtParam.sheet.setAttribute(null , "CustomerID", "Visible", 0, 0);
        } else {
            evtParam.sheet.setAttribute(null , "SN", "Visible", 0, 1);
            evtParam.sheet.setAttribute(null , "ProductID", "Visible", 0, 1);
            evtParam.sheet.setAttribute(null , "CustomerID", "Visible", 0, 1);
        }
        evtParam.sheet.rerender();

    }
}
```

### Read More
- [onColResize event](./on-col-resize)
- [onAfterColResize event](./on-after-col-resize)
- [onSectionResize event](./on-section-resize)
- [onAfterSectionResize event](./on-after-section-resize)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
