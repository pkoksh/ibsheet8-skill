---
KEY: height
KIND: row-property
PATH: props/row/height
ALIAS_EN: height, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/height
---
# Height ***(row)***
> Sets the height of a row.

> If the cell height needs to be larger than the value set in the `Height` property (due to cell content), the row height will be adjusted to fit the cell content.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Row height (in pixels)|



### Example
```javascript
options.Def.Row = {
    "Height": 50,
}
```

### Read More
- [Size cfg](/docs/props/cfg/size)
- [MaxHeight row](./max-height)
<!--!
- `[Private]` [MinHeight row](./min-height)
!-->


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
