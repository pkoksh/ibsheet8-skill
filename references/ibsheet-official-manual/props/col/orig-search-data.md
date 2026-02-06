---
KEY: origSearchData
KIND: column-property
PATH: props/col/orig-search-data
ALIAS_EN: stores, data, row, object, without, converting, formats, numbers
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/orig-search-data
---
# OrigSearchData ***(col)***

> Stores data in the `Row` object as-is without converting data formats such as numbers or strings during retrieval. 

> Does not affect `getValue` or `getString`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|During retrieval, transforms numeric and string type data to their respective type formats before storing (`default`)|
|`1(true)`|During retrieval, maintains numeric and string type data as-is without transformation|

### Example
```javascript
// Store retrieved data in the Row object as-is without format transformation
options.Cols = [
    ...
    {Type: "Text", OrigSearchData: 1, Name: "CarName", Width: 120, ...},
    ...
];

// Retrieved data
[
    {"CarName":"1234"}
]

// Return value of CarName via getDataRows before OrigSearchData setting
CarName: 1234 , returned as numeric type

// Return value of CarName via getDataRows after OrigSearchData setting
CarName: "1234" , returned as string type

```

### Read More
- [Sheet object structure](/docs/appx/init-structure)
- [loadSearData method](/docs/funcs/core/load-search-data)
- [doSearch method](/docs/funcs/core/do-search)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.17|Feature added|
