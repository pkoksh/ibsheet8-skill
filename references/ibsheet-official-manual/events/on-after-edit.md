---
KEY: onAfterEdit
KIND: event
PATH: events/on-after-edit
ALIAS_EN: event, called, converting, edit, mode, string, cell, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-after-edit
---
# onAfterEdit ***(event)***
> Event called when converting the edit mode string to a cell value before cell editing is completed.

> Called after the [onEndEdit](./on-end-edit) event and before the [onBeforeChange](./on-before-change) event, allowing you to modify and return the final value from edit mode that will be applied to the cell.

> This event is not called for types ([Type](/docs/props/col/type)) that do not enter edit mode, such as .

### Syntax



### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet||Sheet object where edit mode will end|
|row||[Data row object](/docs/appx/row-object) where the cell with ending edit mode is located|
|col||Column name of the cell where edit mode will end|
|val||Value entered before edit mode ends|


### Return
***string***

### Example


### Read More

- [onStartEdit event](./on-start-edit)
- [onShowEdit event](./on-show-edit)
- [onEndEdit event](./on-end-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
