---
KEY: searchCaseSensitive
KIND: config-property
PATH: props/cfg/search-case-sensitive
ALIAS_EN: whether, search, case, sensitivity, english, languages, distinguish, uppercase
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-case-sensitive
---
# SearchCaseSensitive ***(cfg)***

> Sets whether to search with case sensitivity for English (or languages that distinguish uppercase/lowercase).

> The default value is `0(false)`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Does not distinguish uppercase/lowercase when searching. (`default`)|
|`1(true)`|Distinguishes uppercase/lowercase when searching.|


### Example
```javascript
options.Cfg = {
    SearchCaseSensitive: true       // Distinguishes uppercase/lowercase for English when using the search feature
};
```

### Read More
- [SearchCount cfg](./search-count)
- [SearchExpression cfg](./search-expression)
- [findRows method](/docs/funcs/core/find-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
