---
KEY: textSize
KIND: column-property
PATH: props/col/text-size
ALIAS_EN: text, size, specified, column, textsize, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/text-size
---
# TextSize ***(col)***

> Sets the text size for the specified column.

> `px, pt, em` units can be used, and if no unit is specified, it defaults to px.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String consisting of size number and unit (e.g.: 25px)|

### Example
```javascript
// Set the text of a specific column to 1.2em.
options.Cols = [
    ...
    {TextSize: "1.2em", Header: "Department", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextColor col](./text-color)
- [TextFont col](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
