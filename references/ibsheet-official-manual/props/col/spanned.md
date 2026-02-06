---
KEY: spanned
KIND: column-property
PATH: props/col/spanned
ALIAS_EN: whether, allow, merging, cells, vertically, down, belonging, specific
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/spanned
---
# Spanned ***(col)***
> Sets whether to allow merging cells vertically (up/down) for cells belonging to a specific column. 

> The actual merging uses the [RowSpan](/docs/props/cell/row-span) property. 

> When using the cell merge feature, auto-merge functions independently and must be turned off. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Merge not allowed (`default`)|
|`1(true)`|Merge allowed|

### Example
```javascript
// Allow vertical merge for all columns
options.Def.Col = {Spanned: true};
opiotns.Cfg = {
    HeaderMerge: 0 // Turn off auto-merge
};
// Merge header rows vertically
options.Cols = [
    {Header:[{Value: "Store Name", RowSpan: 2, Align: "Center"},{}], Type: "Text", Name: "EmployeeName"},
    ...
];
```

### Read More
- [RowSpan cell](/docs/props/cell/row-span)
- [Span cell](/docs/props/cell/span)
- [Spanned row](/docs/props/row/spanned)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
