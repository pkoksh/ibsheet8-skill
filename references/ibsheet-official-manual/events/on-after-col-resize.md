---
KEY: onAfterColResize
KIND: event
PATH: events/on-after-col-resize
ALIAS_EN: event, called, column, width, changed, user, onaftercolresize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-col-resize
---
# onAfterColResize ***(event)***
> Event called when the column width is changed by the user.

> Not called when using the [setColWidth](/docs/funcs/core/set-col-width) method.

### Syntax



### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet||Sheet object|
|col||Column name of the column whose width was changed|
|row||[Header row object](/docs/appx/row-object) that was dragged to change the column width|
|chg||Amount of width change|

### Return
***none***

### Example


### Read More
- [setColWidth method](/docs/funcs/core/set-col-width)
- [onColResize event](./on-col-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
