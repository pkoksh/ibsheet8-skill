---
KEY: caseSensitive
KIND: cell-property
PATH: props/cell/case-sensitive
ALIAS_EN: whether, distinguish, uppercase, lowercase, letters, sorting, filter, feature
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/case-sensitive
---
# CaseSensitive ***(cell)***
> Sets whether to distinguish between uppercase and lowercase letters during sorting (or when using the filter feature).


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Case insensitive|
|`1(true)`|Case sensitive (`default`)|


### Example
```javascript
// Disable case sensitivity when sorting data of a specific cell.
// Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSCaseSensitive":"0" , ...}
    ]
}
```

### Read More
- [RawSort cell](./raw-sort)
- [NumberSort cell](./number-sort)
- [SortValue cell](./sort-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
