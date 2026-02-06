---
KEY: zIndex
KIND: config-property
PATH: props/cfg/z-index
ALIAS_EN: base, value, css, index, sheet, popup, dialogs, messages
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/z-index
---
# ZIndex ***(cfg)***

> Sets the base value for `css z-index` for the sheet and its popup dialogs, messages, and cursors.

> When a base value is set, objects belonging to the sheet will have `css z-index` values from `ZIndex` to `ZIndex+20`.



### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`number`|Sets the base value, for `ZIndex`. |


### Example
```javascript
options.Cfg = {
   // Set the z-index base value for the sheet and internal objects to 300
   // Internal objects will have z-index values up to 320
   ZIndex: 300,
   ...
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
