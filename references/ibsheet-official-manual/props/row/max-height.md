---
KEY: maxHeight
KIND: row-property
PATH: props/row/max-height
ALIAS_EN: maximum, height, row, maxheight
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/max-height
---
# MaxHeight ***(row)***
> Sets the maximum height of a row.

> When Wrap is enabled, the row height increases depending on the amount of data; this sets the maximum height it can increase to.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Maximum row height (in pixels)|



### Example
```javascript
options.Def.Row = {
    "MaxHeight": 50,
}
```

### Read More
<!--!
- `[Private]` [MinHeight row](./min-height)
!-->


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
