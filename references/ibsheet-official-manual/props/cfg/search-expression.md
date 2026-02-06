---
KEY: searchExpression
KIND: config-property
PATH: props/cfg/search-expression
ALIAS_EN: string, search, sheet, searchexpression, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-expression
---
# SearchExpression ***(cfg)***

> Sets the string to search for in the sheet.

> You can use general strings and search conditions just like searching on Google.

### Type
`string`

### Search Conditions
|Name| Description |
|----------|----|
|`'-Seoul'`| Search excluding `Seoul` |
|`'Seoul OR Gyeonggi'`| Search for `Seoul` and `Gyeonggi` |
|`'#'`| Search for data rows where at least one cell value is empty |

### Example
```javascript
// Search for data rows containing 'Seoul' in the sheet with case sensitivity
sheet.SearchCaseSensitive = true;
sheet.SearchExpression = "Seoul";
sheet.findRows('Find');
```

### Read More
- [SearchCount cfg](./search-count)
- [SearchCaseSensitive cfg](./search-case-sensitive)
- [findRows method](/docs/funcs/core/find-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
