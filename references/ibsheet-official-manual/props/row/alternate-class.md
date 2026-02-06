---
KEY: alternateClass
KIND: row-property
PATH: props/row/alternate-class
ALIAS_EN: css, class, name, applied, even, rows, setting, different
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/alternate-class
---
# AlternateClass ***(row)***

> Sets the `CSS class name` to be applied to even rows when setting different background colors for odd and even rows to improve readability.

> This property is affected by [Alternate](/docs/props/cfg/alternate).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|CSS class name|

### Example
```css
<style>
    .alternateRow{background-color:#EDEDED;color:#666666;}
</style>
```
```javascript
//Set the class for even rows in the data area.
options.Def.Row = {"AlternateClass": "alternateRow"};
```

### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [AlternateColor row](./alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
