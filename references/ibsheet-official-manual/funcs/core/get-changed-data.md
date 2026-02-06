---
KEY: getChangedData
KIND: method
PATH: funcs/core/get-changed-data
ALIAS: sheet.getChangedData, getChangedData()
ALIAS_EN: extracts, changed, content, added, modified, deleted, within, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-changed-data
---
# getChangedData ***(method)***

> Extracts the changed content (added, modified, deleted) within the sheet as a JSON format **String**.

> When called without arguments, all modified data is extracted. When the row argument is set to a [data row object](/docs/appx/row-object), only the modified content for that row is extracted.

> Through the second argument, if PK columns are specified, those columns are always extracted regardless of whether they were modified.

> *Note that this function extracts only the cells where modifications were made, not all data of the row.*

### Syntax
```javascript
string getChangedData(row, attrs, dataonly);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|Optional|[data row object](/docs/appx/row-object)|
|attrs|`array[string]`|Optional|Array containing column names (ex:`["ColName1","ColName3"]`)|
|dataonly|`boolean`|Optional|Whether to specify the modification check target as the entire sheet area or only the data area
`0(false)`:Target entire sheet area(`default`)
`1(true)`:Target data area only|


### Return Value
***json format string***
```js
'{"Changes":[{"id":"AR4","Changed":1,"ColName1":"1234","ColName5":"ABCDE"},{"id":"AR12","Changed":1,"ColName2":"23456"},{"id":"AR15","Deleted":1},{"id":"0","Added":1,"ColName1":"2345","ColName2":"4567"...}]}'
```

### Example
```javascript
var chgData = JSON.stringify(sheet.getChangedData({attrs:["CONTRACTNO","RETURNDATE"]}), null, '\t');
//Returned JSON string (2 records modified, 1 record deleted, 1 record new)
/*
"{
  "IO": {},
  "Changes": [{
      "id": "AR5",
      "Changed": 1,
      "CONTRACTNO": "SS1944111234933",
      "RETURNDATE": "1325602800000",
   "CARNO": "52HE571123"
    },
    {
      "id": "AR9",
      "Changed": 1,
      "CONTRACTNO": "SS1937111124325",
      "RETURNDATE": "1325430000000",
      "CARNO": "33"
    },
    {
      "id": "AR12",
      "Deleted": 1,
      "CONTRACTNO": "SS1140111240995",
      "RETURNDATE": "1326034800000"
    },
    {
      "id": "AR101",
      "Added": 1,
      "Def": "R",
      "Parent": "0",
      "Next": "AR14",
      "Prev": "AR13",
      "CONTRACTNO": "",
      "RETURNDATE": "",
      "SEQ": "14",
      "CHK": "0",
      "DELIVERYDEPTNAME": "",
      "CARNO": "321234",
   "CARNAMEMSTNAME": "Tucson Hyundai",
      "RENTFEE": "",
      "RENTDATE": "",
      "PROMOCODE": "",
      "NO": "",
      "DISCOUNTRATE": "0",
      "NETSALEAMT": "0",
      "SALEVATAMT": "0",
      "SALEAMT": "0",
      "OBJCARNO": "",
      "DEPTNAME": "",
      "CARNAMEMSTNAME2": "",
      "UNIT24": "0",
      "ACCNO": "",
      "ACCPERSONNAME": "",
      "ACCDATE": "",
      "REPAIRNO": "",
      "REPAIRPERSONNAME": "",
      "STARTDATE": "",
      "ENDDATE": "",
      "cls1": "",
      "cls2": ""
    }]
}"
*/
//When there are no modified values, the following JSON string is returned
/*
{
  "IO": {},
  "Changes": []
}
*/
```

### Read More
- [acceptChangedData method](./accept-changed-data)
- [hasChangedData method](./has-changed-data)
- [getSaveJson method](./get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.3.0.20|`dataonly` argument added|
