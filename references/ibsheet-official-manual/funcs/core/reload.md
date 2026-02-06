---
KEY: reload
KIND: method
PATH: funcs/core/reload
ALIAS: sheet.reload, reload()
ALIAS_EN: recreates, sheet, initial, creation, state, reload, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/reload
---
# reload ***(method)***
> Recreates the sheet to its initial creation state.

> Here, the initial state refers to the point created through [IBSheet.create()](/docs/static/create), without reflecting modifications or search results made afterwards.


> **<mark>Note</mark> : This is a sheet re-creation operation to the initial state, not an operation to revert to the initial state.**
### Syntax
```javascript
void reload( callback );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|callback|`function`|Optional|Callback function to call after `reload` (same point as `onRenderFirstFinish`)|


### Return Value
***none***

### Example
```javascript
// Recreate the sheet to its initial creation state.
sheet.reload();
```
```javascript
// Point when the first rendering is triggered after reload
sheet.reload(function (r) { r.sheet.disable(1); })
```

### Read More

- [reloadData method](./reload-data)
- [dispose method](./dispose)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.26|`callback` Feature added|
