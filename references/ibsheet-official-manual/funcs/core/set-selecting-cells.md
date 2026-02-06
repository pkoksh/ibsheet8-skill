---
KEY: setSelectingCells
KIND: method
PATH: funcs/core/set-selecting-cells
ALIAS: sheet.setSelectingCells, setSelectingCells()
ALIAS_EN: dynamically, changes, value, selectingcells, setselectingcells, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-selecting-cells
---
# setSelectingCells ***(method)***
> Dynamically changes the value of `SelectingCells`. 

> However, for MultiRecord ([MultiRecord](/docs/props/cfg/multi-record)), `SelectingCells` is fixed to `0`.

### Syntax
```javascript
boolean setSelectingCells( mode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|mode|`number`|Optional|Selection mode (`default: 1`)|


### Return Value
***boolean*** : Whether the value was dynamically changed.

### Example
```javascript
// Change SelectingCells to 0.
sheet.setSelectingCells(0);
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|Feature added|
