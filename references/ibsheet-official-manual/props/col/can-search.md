---
KEY: canSearch
KIND: column-property
PATH: props/col/can-search
ALIAS_EN: determines, whether, include, column, search, targets, searching, findrows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-search
---
# CanSearch ***(col)***
> Determines whether to include the column in search targets when searching through findRows, search dialog, etc. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Excluded from search targets|
|`1(true)`|Included in search targets (`default`)|

### Example
```javascript
// Exclude the column from search targets
options.Cols = [
    ...
    {Type: "Text", Name: "sName", CanSearch: 0 ...},
    ...
];
```

### Read More
- [SearchCount cfg](/docs/props/cfg/search-count)
- [SearchCaseSensitive cfg](/docs/props/cfg/search-case-sensitive)
- [findRows method](/docs/funcs/core/find-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
