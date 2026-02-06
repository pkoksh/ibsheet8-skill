---
KEY: onAfterSectionResize
KIND: event
PATH: events/on-after-section-resize
ALIAS_EN: fires, left, right, section, size, changed, onaftersectionresize, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-section-resize
---
# onAfterSectionResize ***(event)***
> Fires when the left/right section size is changed.

> When the cfg [SectionCanResize](/docs/props/cfg/section-can-resize) property is set, users can change the size of the left/right areas, and this event fires after the size has been changed.
>


### Syntax
```
    onAfterSectionResize : function(paramObject {

    }
or
    sheet.bind("onAfterSectionResize" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that sent changed content to the server|
|section |`number`|Left or right changed section
`0`:When left section size is changed
`2`:When right section size is changed|

### Return
***none***


### Example
```javascript
options.Events = {
    onAfterSectionResize:function(evtParam){
        //Move the horizontal scrollbar when the left section size is changed
        if(evtParam.section==0){
            sheet.setScrollLeft(0 , 1);
        }
    }
}
```

### Read More

- [SectionCanResize cfg](/docs/props/cfg/section-can-resize)
- [LeftCanResize cfg](/docs/props/cfg/Left-can-resize)
- [RightCanResize cfg](/docs/props/cfg/right-can-resize)
- [LeftWidth cfg](/docs/props/cfg/left-width)
- [RightWidth cfg](/docs/props/cfg/right-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
