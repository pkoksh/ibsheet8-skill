---
KEY: editSelect
KIND: config-property
PATH: props/cfg/edit-select
ALIAS_EN: whether, input, value, selected, entering, edit, mode, editselect
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/edit-select
---
# EditSelect ***(cfg)***
> Sets whether the `input` value is selected when entering edit mode.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Do not select when editing|
|`1`|Select when entering edit mode via mouse|
|`2`|Select when entering edit mode via keyboard key|
|`7`|Always select when entering edit mode (`default`)|

### Example
```javascript
options.Cfg :{
    EditSelect: 0
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
