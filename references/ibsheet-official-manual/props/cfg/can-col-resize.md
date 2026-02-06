---
KEY: canColResize
KIND: config-property
PATH: props/cfg/can-col-resize
ALIAS_EN: whether, column, width, adjusted, mouse, cancolresize, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/can-col-resize
---
# CanColResize ***(cfg)***

> Sets whether column width can be adjusted using the mouse. 

> The default value is `1(true)`, which allows width adjustment using the mouse between columns in the header area.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Column width adjustment not allowed|
|`1(true)`|Column width adjustment allowed (`default`)|


### Example
```javascript
options.Cfg = {
    "CanColResize": true        // Allow column width adjustment
};
```

### Try it
- [True by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanColResize-true/)

### Read More
- [CanResize col](/docs/props/col/can-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
