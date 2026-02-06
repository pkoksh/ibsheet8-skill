---
KEY: setMergeCancel
KIND: method
PATH: funcs/core/set-merge-cancel
ALIAS: sheet.setMergeCancel, setMergeCancel()
ALIAS_EN: cellof, merge, span, cancel, setmergecancel, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-merge-cancel
---
# setMergeCancel ***(method)***
> cellof merge(`span`) Cancel .

> **[SearchMode](/web-service/manuals/ibsheet8/-/wikis/docs/props/cfg/search-mode):0 has a structural issue where merge state is not maintained when scrolling, therefore this feature is not properly supported.** 


### Syntax
```javascript
void setMergeCancel( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|Required|merge applied [data row object](/docs/appx/row-object)|
|col |`string`|Required|merge applied column name|


### Return Value
***none***

### Example
```javascript
//mergeapplied cell again split(split) 
sheet.setMergeCancel( sheet.getRowById("AR2"), "deptCd");
```

### Read More
- [setMergeRange method](./set-merge-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
