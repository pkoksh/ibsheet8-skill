---
KEY: doPivotFilter
KIND: method
PATH: funcs/core/do-pivot-filter
ALIAS: sheet.doPivotFilter, doPivotFilter()
ALIAS_EN: reflects, given, values, filter, row, creates, pivot, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-pivot-filter
---
# doPivotFilter ***(method)***

> Reflects the given values in the filter row and creates a pivot sheet based on the filtered data results from the original sheet.

> You can perform OR operations on values you want to filter using ;(ex |Tteokbokki;Oden|...).

> You can perform AND operations on values you want to filter using ,(ex |Tteokbokki,Oden|...).



### Syntax
```javascript
void doPivotFilter( cols , vals , operators );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|Required|Columns to perform filtering on
The first character is used as the delimiter to compose a string connecting column names(ex:"\|DEPTNM\|POSITION\|SALARY" )|
|vals|`string`|Required|Values to filter
The first character is used as the delimiter to compose a string connecting column names (ex:"\|General Affairs\|Assistant Manager\|3500" )|
|operators|`string`|Required|Filtering operator(Number)
The first character is used as the delimiter to compose a string connecting column names (ex:"\|7\|7\|5" )|


**operators Detailed description**

|value|type|desc|
|---|---|---|
|`0`|Common|Filter not used|
|`1`|Common|Equal|
|`2`|Common|Not equal|
|`3`|Number, Date|Less than|
|`4`|Number, Date|Less than or equal|
|`5`|Number, Date|Greater than|
|`6`|Number, Date|Greater than or equal|
|`7`|String|Starts with|
|`8`|String|Does not start with|
|`9`|String|Ends with|
|`10`|String|Does not end with|
|`11`|String|Contains|
|`12`|String|Does not contain|
|`13`|Number|Top 10|
|`14`|Common|Has value|
|`15`|Common|No value|

### Return Value
***none***

### Example
```javascript
//Filters the original sheet based on rows where deptName column ends with 'Research Team' and cardAmt column value is greater than 50000, then creates a pivot sheet.
pivotSheet_sheet.doPivotFilter("|deptName|cardAmt", "|Research Team|50000", "|9|6");
```

### Read More
- [clearPivotFilter method](./clear-pivot-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|Feature added|

