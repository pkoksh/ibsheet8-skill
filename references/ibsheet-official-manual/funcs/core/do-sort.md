---
KEY: doSort
KIND: method
PATH: funcs/core/do-sort
ALIAS: sheet.doSort, doSort()
ALIAS_EN: sorts, specified, columns, function, dosort, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-sort
---
# doSort ***(method)***
> Sorts the specified columns in a function. 

> `doSort` operates asynchronously. 

> subtotalin `doSort` When using `stdCol` is not sorted.
### Syntax
```javascript
void doSort( sortcols );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|sortcols|`string`|Required|column names to sort `","`as delimiter in order
(column nameonly if used ascending, column name before `"-"`sorts descending)

### Return Value
***none***

### Example
```javascript
//department descendingas name ascendingas sort
sheet.doSort("-dempNm,empNm");
```

### Read More
- [clearSort method](./clear-sort)
- [onBeforeSort event](/docs/events/on-before-sort)
- [onAfterSort event](/docs/events/on-after-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
