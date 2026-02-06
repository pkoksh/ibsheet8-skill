---
KEY: radioUncheck
KIND: cell-property
PATH: props/cell/radio-uncheck
ALIAS_EN: whether, allow, unchecking, selected, item, clicking, again, cells
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/radio-uncheck
---
# RadioUncheck ***(cell)***
> Sets whether to allow unchecking a selected item by clicking it again in cells where [Type](/docs/appx/type) is `Radio`.
### Type
`Boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not allow unchecking (`default`)
|`1(true)`|Allow unchecking|

### Example
```javascript
// Allow unchecking
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioUncheck", 1);
```

### Read More

- [RadioIcon cell](./radio-icon)
- [RadioIconWidth cell](./radio-icon-width)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
