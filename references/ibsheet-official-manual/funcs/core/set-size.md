---
KEY: setSize
KIND: method
PATH: funcs/core/set-size
ALIAS: sheet.setSize, setSize()
ALIAS_EN: dynamically, changes, cfg, size, docs, props, setting, setsize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-size
---
# setSize ***(method)***
> Dynamically changes the [(Cfg) Size](/docs/props/cfg/size) setting. 


### Syntax
```javascript
void setSize( size );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|size|`string`|Required|to set `Size` property|


### Return Value
***none***

### Example
```javascript
// sheet Cfg.Size setting "Tiny"as Changed
sheet.setSize('Tiny');
```

### Try it

- [Demo of setSize](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Size/)

### Read More
- [Size cfg](/docs/props/cfg/size)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.13|Feature added|
