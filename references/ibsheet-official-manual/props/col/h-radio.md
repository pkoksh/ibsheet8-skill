---
KEY: hRadio
KIND: column-property
PATH: props/col/h-radio
ALIAS_EN: whether, single, selection, applied, type, radio, column, hradio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/h-radio
---
# HRadio ***(col)***
> Sets whether single selection is applied for `Type` `Radio` column(s).

> When set to `0(false)`, only a single cell can be selected within the column.

> When set to `1(true)`, only a single cell can be selected within the row.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Select only one within a column|
|`1(true)`|Select only one within a row|



### Example
```javascript
// Allow only a single cell to be selected within the st1 column
// Allow only one cell to be selected among the st2 and st3 columns
options.Cols = [
    ...
    {Type: "Radio", Name: "st1", HRadio: 0 ...},
    {Type: "Radio", Name: "st2", HRadio: 1 ...},
    {Type: "Radio", Name: "st3", HRadio: 1 ...},
    ...
];
```

### Read More
- [Radio col](./radio)
- [Range col](./range)
- [RadioIcon col](./radio-icon)
- [RadioIconWidth col](./radio-icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
