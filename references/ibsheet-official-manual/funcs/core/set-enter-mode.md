---
KEY: setEnterMode
KIND: method
PATH: funcs/core/set-enter-mode
ALIAS: sheet.setEnterMode, setEnterMode()
ALIAS_EN: dynamically, changes, cfg, entermode, docs, props, enter, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-enter-mode
---
# setEnterMode ***(method)***
> Dynamically changes the (Cfg) [EnterMode](/docs/props/cfg/enter-mode) setting.

### Syntax
```javascript
boolean setEnterMode(enterMode);
```

### Parameters
|Name|Type|Required|Description|
|----|----|--------|-----------|
|enterMode|`number`|Required|[EnterMode](/docs/props/cfg/enter-mode) property value to change to|

### Return Value
***boolean*** : Whether the function operated normally. (Returns false if the argument values are invalid and could not be executed, `false` return)

### Example
```javascript
// Cfg.EnterMode 5as Changed
sheet.setEnterMode(5);
```

### Try it

- [Demo of setEnterMode](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EnterMode/)

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.13|Feature added|