---
KEY: focusMode
KIND: config-property
PATH: props/cfg/focus-mode
ALIAS_EN: behavior, moving, tab, shift, keys, cell, edit, state
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/focus-mode
---
# EditTabMode ***(cfg)***
> Sets the behavior when moving with `tab / shift + tab` keys from a cell in edit state.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| Tab moves while maintaining edit mode to cells where `CanEdit:0,3,4` and `CanFocus:0,2` are not set. 
 (`default`)|
|`1(true)`|Tab moves regardless of `CanEdit` and `CanFocus` settings.
 Editable columns maintain edit mode while moving, and editing ends when focusing on a non-editable column.|

### Example
```javascript
options.Cfg :{
    EditTabMode: 1
};
```

### Read More

- [CanEdit Cfg](./can-edit)
- [CanEdit Row](../row/can-edit)
- [CanEdit Col](../col/can-edit)
- [CanEdit Cell](../cell/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.53|Feature added|
