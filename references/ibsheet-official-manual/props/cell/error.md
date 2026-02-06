---
KEY: error
KIND: cell-property
PATH: props/cell/error
ALIAS_EN: modified, value, cell, violates, validation, declared, resultmask, result
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/error
---
# Error ***(cell)***

> When the modified value in a cell violates the validation declared in [ResultMask](./result-mask), the property value is set to `1(true)`.

> It is recommended to use this property for checking validation status rather than directly changing its value.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|`Validation` violated|


### Example
```javascript
// Check whether the cell value has an error. (assuming column name is CLS)
var error = sheet.getAttribute(sheet.getRowById("AR99"), "CLS", "Error");
if (error) {
    // There is incorrectly entered content.
}
```

### Read More
- [ResultMask cell](./result-mask)
- [ResultText cell](./result-text)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
