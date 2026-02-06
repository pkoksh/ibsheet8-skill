---
KEY: ctrlArange
KIND: config-property
PATH: props/cfg/ctrl-arange
ALIAS_EN: feature, extends, selection, copy, range, header, foot, ctrl
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/ctrl-arange
---
# CtrlARange ***(cfg)***

> This feature extends the selection copy range from header to foot when using `Ctrl + A`. 

> Since this feature checks for `CanSelect`, you need to set `CanSelect: 1` on `Def.Header, Def.Foot`. 

> For example, if you set `CanSelect: 1` only on `Header` and set `CanSelect: 0` on `Foot`, the `Foot` will not be included in the selection copy.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Only view data area when selection copying. (`default`)|
|`1(true)`|View from header to foot area when selection copying.|


### Example
```javascript
options.Def = {
    Header: {
        CanSelect: true
    },
    Foot: {
        CanSelect: true
    },
};
options.Cfg = {
    CtrlARange: true        // Extends Ctrl + A selection copy range from header to foot.
};
```

### Read More
- [CanSelect row](/docs/props/row/can-select)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|Feature added|
