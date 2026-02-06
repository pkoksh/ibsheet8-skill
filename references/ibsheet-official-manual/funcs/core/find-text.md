---
KEY: findText
KIND: method
PATH: funcs/core/find-text
ALIAS: sheet.findText, findText()
ALIAS_EN: returns, first, data, row, object, docs, appx, matching
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/find-text
---
# findText ***(method)***
> Returns the first [data row object](/docs/appx/row-object) matching a specific string within a column.


### Syntax
```javascript
object findText( col, searchText, startRow, matchMode, caseSensitive, excludeKeys );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|Required|column name|
|searchText |`string`|Required|find string|
|startRow |`object`|Optional|[data row object](/docs/appx/row-object) to start the search from (`default: sheet's first row`)|
|matchMode|`number`|Optional|string matching mode
`-1`:Exact match (`default`)
`0`:Prefix match
`1`:Suffix match
`2`:Partial match|
|caseSensitive |`boolean`|Optional|case-sensitivity whether
`0(false)`:case-sensitivity inside (`default`)
`1(true)`:case-sensitivity applied|
|excludeKeys |`boolean`|Optional|Whether to include [EnumKeys](/docs/props/col/enum-keys) in the search when searching [Enum](/docs/props/col/enum) columns
`0(false)`:Do not include [EnumKeys](/docs/props/col/enum-keys) when searching [Enum](/docs/props/col/enum) columns
`1(true)`:Include [EnumKeys](/docs/props/col/enum-keys) when searching [Enum](/docs/props/col/enum) columns (`default`)|

### Return Value
***object*** : [data row object](/docs/appx/row-object)

### Example
```javascript
// Return the first data row object that exactly matches "Java Project1" in the sTitle column's cell value.
var row = sheet.getFirstRow();
var sdata = sheet.findText("sTitle", "Java project1", row, -1, 1);
```

### Read More

- [getString method](./get-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.21|`excludeKeys` Feature added|
