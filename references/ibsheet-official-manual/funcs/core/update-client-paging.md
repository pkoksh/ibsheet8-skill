---
KEY: updateClientPaging
KIND: method
PATH: funcs/core/update-client-paging
ALIAS: sheet.updateClientPaging, updateClientPaging()
ALIAS_EN: changes, number, rows, display, per, page, client, paging
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/update-client-paging
---
# updateClientPaging ***(method)***

> Changes the number of rows to display per page when using client paging (`(Cfg)SearchMode: 1`).

### Syntax
```javascript
boolean updateClientPaging( length, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|length|`number`|Required|Number of rows to display per page|
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|


### Return Value
***boolean***

### Example
```javascript
// Update the number of rows displayed per screen to 30.
sheet.updateClientPaging(30);
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [PageLength cfg](/docs/props/cfg/page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
