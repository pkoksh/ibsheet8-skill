---
KEY: hasSheet
KIND: static-member
PATH: static/has-sheet
ALIAS_EN: checks, whether, sheet, specific, exists, hassheet, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/has-sheet
---
# hasSheet ***(static)***

> Checks whether a sheet with a specific ID exists.
> Returns true if a sheet with the specified ID exists, and false otherwise.

### Syntax
```javascript
object IBSheet.hasSheet(id);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|id|`string`|The ID to search for whether a sheet exists|


### Return Value
***boolean***

### Example
```javascript
  IBSheet.hasSheet("sheet"); // Checks if a sheet with the ID "sheet" exists.
```
### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.18|Feature added|
