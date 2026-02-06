---
KEY: hasChangedData
KIND: method
PATH: funcs/core/has-changed-data
ALIAS: sheet.hasChangedData, hasChangedData()
ALIAS_EN: checks, whether, there, changed, content, input, modification, deletion
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/has-changed-data
---
# hasChangedData ***(method)***
> Checks whether there is changed content (input, modification, deletion) within the sheet.



### Syntax
```javascript
number hasChangedData(dataonly);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|dataonly|`boolean`|Optional|Whether to target the entire sheet area or only the data area for modification check
`0(false)`:Target entire sheet area(`default`)
`1(true)`:Target data area only|


### Return Value
***number*** : Returns 1 if there is modified content, 0 if there is none

### Example
```javascript
window.onbeforeunload = function() {
    if(sheet.hasChangedData()) {
    return "There is modified content in the sheet.\nIf you continue, the modified content will be lost.";
    }
}

sheet.hasChangedData(true); // Returns 1 if there is modified content in the data area, 0 if there is none
```
### Read More
- [acceptChangedData method](./accept-changed-data)
- [getChangedData method](./get-changed-data)
- [getSaveJson method](./get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.20|dataonly argument added|
