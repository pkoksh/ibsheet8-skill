---
KEY: radioUncheck
KIND: column-property
PATH: props/col/radio-uncheck
ALIAS_EN: whether, allow, unchecking, selected, item, clicking, again, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/radio-uncheck
---
# RadioUncheck ***(col)***
> Sets whether to allow unchecking a selected item by clicking it again in columns with [Type](/docs/appx/type) `Radio`.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not allow unchecking (`default`)
|`1(true)`|Allows unchecking|

### Example
```javascript
// Allow unchecking
options.Cols = [
    ...
    {Type: "Radio", Name: "relation", RadioUncheck: 1 ...},
    ...
];
```

### Read More
- [Range col](./range)
- [HRadio col](./h-radio)
- [RadioIcon col](./radio-icon)
- [RadioIconWidth col](./radio-icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
