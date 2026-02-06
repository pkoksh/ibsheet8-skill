---
KEY: setAutoMergeCancel
KIND: method
PATH: funcs/core/set-auto-merge-cancel
ALIAS: sheet.setAutoMergeCancel, setAutoMergeCancel()
ALIAS_EN: cancels, data, based, cell, merging, setautomergecancel, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-auto-merge-cancel
---
# setAutoMergeCancel ***(method)***

> Cancels data-based cell merging.

> The area to cancel merge can be selected according to the argument.

### Syntax
```javascript
void setAutoMergeCancel( mode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|mode|`string`|Optional|Select the area to cancel merge. 
When not specified, merge is cancelled in all areas.
`"Data"`:Cancel merge in the data area
`"Header"`:Cancel merge in the header area
`"Head"`:Cancel merge in the Head area
`"Foot"`:Cancel merge in the Foot area|

### Return Value
***none***

### Example
```javascript
// Cancel cell merge in the data area.
sheet.setAutoMergeCancel( {mode:"Data"} );
```

### Read More
- [setAutoMerge method](./set-auto-merge)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.14|`mode` `Head`, `Foot` added|
