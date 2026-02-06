---
KEY: wrap
KIND: column-property
PATH: props/col/wrap
ALIAS_EN: whether, line, wrapping, feature, cell, content, long, trailing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/wrap
---
# Wrap ***(col)***

> Sets whether to use the line wrapping feature when the cell content is too long and the trailing part is not visible.

> When line wrapping occurs, the row height increases.

> Generally used with `Text` type, and can also be used with `Radio` type.

> For [Lines type](/docs/appx/type) columns, it is set to `default: 1(true)`.

<!--!> In large data mode [(SearchMode:0)](/docs/props/cfg/search-mode), dynamic data row heights are not supported, so this feature cannot be used. 
!-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Line wrapping disabled (`default`)|
|`1(true)`|Line wrapping enabled (`default: 1(true) when column Type is Lines`)|


### Example
```javascript
// Allow line wrapping on a specific column
options.Cols = [
    ...
    {Header: "Comments", Type: "Text", Wrap: 1, Name: "DESC", ...},
    ...
];
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
