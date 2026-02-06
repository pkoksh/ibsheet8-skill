---
KEY: stackCol
KIND: column-property
PATH: props/col/stack-col
ALIAS_EN: feature, pins, rows, top, bottom, screen, checking, columns
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/stack-col
---
# Stack ***(col)***
> A feature that pins rows to the top/bottom of the screen by checking in columns with [Type](/docs/appx/type) `Bool`. 

> When this property is set, rows can be pinned/unpinned through clicking.

> Data rows must have the same height, and there are `restrictions` on operations that dynamically change the number of scrollable rows (`sorting, adding/removing rows, filtering`). 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Pin feature not used (`default`)|
|`1(true)`|Pin feature used|

### Example
```javascript
// Set a column to pin checked rows
options.Cfg = {
  SearchMode: 0,
  CanSort: 0
};
options.Cols = [
    ...
    { Type: "Bool", Header: "Pin Row", Name: "StackColumn", Stack: 1... },
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [(Appendix) Large data mode restrictions](/docs/appx/fastload-constraints)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.31|Feature added|
