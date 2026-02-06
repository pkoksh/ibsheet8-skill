---
KEY: setCurrentInfo
KIND: method
PATH: funcs/core/set-current-info
ALIAS: sheet.setCurrentInfo, setCurrentInfo()
ALIAS_EN: reconstructs, current, sheet, column, information, string, setcurrentinfo, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-current-info
---
# setCurrentInfo ***(method)***
> Reconstructs the current sheet through a sheet column information string.

### Syntax
```javascript
string setCurrentInfo( info );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|---|
|info |`string`|Required|Sheet information to be applied to the current sheet columns|

### Return Value
***boolean***

### Example
```javascript
var info = '[[["SEQ"],["sCheck","sNation","sTitle","sShare","sCount","sDate"],[]],{"SEQ":{"Visible":1,"Width":60,"RelWidth":0,"UserHidden":false},"sCheck":{"Visible":1,"Width":61,"RelWidth":0,"UserHidden":false},"sNation":{"Visible":1,"Width":85,"RelWidth":0,"UserHidden":false},"sTitle":{"Visible":1,"Width":1371,"RelWidth":1,"UserHidden":false},"sShare":{"Visible":1,"Width":60,"RelWidth":0,"UserHidden":false},"sCount":{"Visible":1,"Width":95,"RelWidth":0,"UserHidden":false},"sDate":{"Visible":1,"Width":120,"RelWidth":0,"UserHidden":false}},""]' // Same format as the result obtained from getCurrentInfo

sheet.setCurrentInfo( info );
```

### Read More
- [getCurrentInfo method](./get-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
