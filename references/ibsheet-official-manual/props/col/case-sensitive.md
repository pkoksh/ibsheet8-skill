---
KEY: caseSensitive
KIND: column-property
PATH: props/col/case-sensitive
ALIAS_EN: whether, distinguish, uppercase, lowercase, letters, sorting, filters, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/case-sensitive
---
# CaseSensitive ***(col)***

> Sets whether to distinguish between uppercase and lowercase letters when sorting (or using filters) on the column.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Case insensitive|
|`1(true)`|Case sensitive (`default`)|


### Example
```javascript
// Enable case sensitivity when sorting a specific column
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", CaseSensitive: 1, ...},
    ...
];
```

### Read More
- [RawSort col](./raw-sort)
- [CanSort col](./can-sort)
- [NumberSort col](./number-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
