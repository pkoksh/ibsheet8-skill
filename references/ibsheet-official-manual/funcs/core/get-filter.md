---
KEY: getFilter
KIND: method
PATH: funcs/core/get-filter
ALIAS: sheet.getFilter, getFilter()
ALIAS_EN: checks, content, filter, row, getfilter, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-filter
---
# getFilter ***(method)***
> Checks the content set in the filter row.


### Syntax
```javascript
object getFilter( spec );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|spec|`boolean`|Optional|Whether to get general filter or [setFilter](./set-filter) content
`0(false)`:General filter setting (`default`)
`1(true)`:setFilter setting|

### Return Value
***object*** : Filter setting value (multidimensional array)
|input value|type|return data format|
|---|---|---|
|`0`|general filter|`[["colName1" , "filtervalue" , operator ], ["colName2","filtervalue",operator] ...]`|
|`1`|setFilter|`[["filtername", "cardAmt>=5000?1:0"], ["filtername", "deptNm=='Materials department'?1:0"] ...]`|



### Example
```javascript
//Reset filter
var filterDesc = sheet.getFilter(0);
```

### Read More
- [setFilter method](./set-filter)
- [doFilter method](./do-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
