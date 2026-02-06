---
KEY: findRows
KIND: method
PATH: funcs/core/find-rows
ALIAS: sheet.findRows, findRows()
ALIAS_EN: finds, data, matching, search, expression, searchexpression, docs, props
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/find-rows
---
# findRows ***(method)***
> Finds data matching the search expression ([SearchExpression](/docs/props/cfg/search-expression)) in the sheet, and can perform selection, marking, focus, etc.


### Syntax
```javascript
void findRows( action, match, callback );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|action|`string`|Required| Search feature (action) setting.|
|match|`boolean`|Optional| Include in search target only when the entire cell content matches.
`0(false)`:When search data is included in the data (`default`)
`1(true)`:When search data matches the data exactly|
|callback|`function`|Optional| Callback function called after data search is completed by findRows. 
 Two arguments are given to the callback function. 

 1. `action`: Currently executed search feature 
 2. `result`: Data result value searched by findRows|

### Search feature (action)
|Name| Description |
|----------|----|
|`'Find'`|  Search for the next row |
|`'FindPrev'`| Search for the previous row |
|`'Mark'`| Highlight rows matching the search expression (total count is set in `sheet.SearchCount`) |
|`'Select'`| Select rows matching the search expression (total count is set in `sheet.SearchCount`) |
|`'Filter'`| Filter to show only rows matching the search expression (total count is set in `sheet.FilterCount`) |
|`'Clear'`| Initialize search results |

### Example
```javascript
// Search for data rows containing 'Seoul' in the sheet
sheet.SearchExpression = 'Seoul';
sheet.findRows('Find');
```

### Read More

- [SearchCaseSensitive cfg](/docs/props/cfg/search-case-sensitive)
- [SearchCount cfg](/docs/props/cfg/search-count)
- [SearchExpression cfg](/docs/props/cfg/search-expression)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.98|`callback` Feature released|
<!--!
|`[Private]` core|8.0.0.25|`match`, `callback` Feature added|
!-->
