---
KEY: doFilter
KIND: method
PATH: funcs/core/do-filter
ALIAS: sheet.doFilter, doFilter()
ALIAS_EN: applies, given, values, filter, row, filters, sheet, dofilter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-filter
---
# doFilter ***(method)***

> Applies the given values to the filter row and filters the sheet.

> **This function must [ShowFilter](/docs/props/cfg/show-filter)only be used when the filter is visible in**

> You can perform OR operations on values you want to filter using ;(ex |Tteokbokki;Oden|...).

> You can perform AND operations on values you want to filter using ,(ex |Tteokbokki,Oden|...).



### Syntax
```javascript
void doFilter( cols , vals , operators , nofilter , noclear );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|Required|Columns to perform filtering on
The first character is used as the delimiter to compose a string connecting column names(ex:"\|DEPTNM\|POSITION\|SALARY" )|
|vals|`string`|Required|Values to filter
The first character is used as the delimiter to compose a string connecting column names (ex:"\|General Affairs\|Assistant Manager\|3500" )|
|operators|`string`|Required|Filtering operator(Number)
The first character is used as the delimiter to compose a string connecting column names (ex:"\|0\|1\|2" )|
|nofilter|`boolean`|Optional|whether only enter text in the filter row without actually filtering
`0(false)`:Execute filtering (`default`)
`1(true)`:Do not execute filtering, only enter text in filter row|
|noclear|`boolean`|Optional|In the filter row, `cols`in whether to clear the values of columns not specified in `cols`
`0(false)`:`cols`in clear the values of columns not specified (`default`)
`1(true)`:`cols`in clear the values of columns not specified inside|


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
//deptName In the content of column Research Teamrows ending with cardAmt column value is 50000greater than, only showing those rows
sheet.doFilter("|deptName|cardAmt", "|Research Team|50000", "|9|6");
```

### Read More
- [ShowFilter cfg](/docs/props/cfg/show-filter)
- [clearFilter method](./clear-filter)
- [setFilter method](./set-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.27|13 Feature added|
|core|8.1.0.27|14,15 Feature added|
