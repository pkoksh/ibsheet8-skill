---
KEY: onSectionResize
KIND: event
PATH: events/on-section-resize
ALIAS_EN: fires, size, left, right, sections, changed, onsectionresize, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-section-resize
---
# onSectionResize ***(event)***
> Fires when the size of the left/right sections is changed.

> When the cfg [SectionCanResize](/docs/props/cfg/section-can-resize) attribute is set, users can change the size of the left/right areas, and this event fires just before the size is changed.
>


### Syntax

```
    onSectionResize : function(paramObject {

    }
or
    sheet.bind("onSectionResize" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object that sent the changed content to the server|
|section |`number`|Left or right section that was changed
`0`:When the left section size is changed
`2`:When the right section size is changed|

### Return
***none***


### Example
```javascript
options.Events = {
    onSectionResize:function(evtParam){
        // When the left section size is changed, move the horizontal scrollbar
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
