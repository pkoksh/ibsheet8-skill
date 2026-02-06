---
KEY: removeSepReqValue
KIND: config-property
PATH: props/cfg/remove-sep-req-value
ALIAS_EN: sending, data, server, functions, like, getsavejson, getsavestring, dosave
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/remove-sep-req-value
---
# RemoveSepReqValue ***(cfg)***

> When sending data to the server using functions like `getSaveJson, getSaveString, doSave`, this feature removes the `CustomFormat` delimiter from the data before sending it to the server when the data format matches the `CustomFormat`. 

> This feature does not support user-customized formats; it only supports the 6 built-in formats provided by the sheet: `["IdNo", "IdNoMask", "PostNo", "SaupNo", "CardNo", "PhoneNo"]`

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Send the original data as-is. (`default`)|
|`1(true)`|When the data format matches the `CustomFormat`, remove delimiters from the data before sending to the server.|

### Example
```javascript
options.Cfg = { "RemoveSepReqValue": true };
```
```javascript
Cols = [
  {
    ...
    CustomFormat: "IdNo"
    Name: "idnoformat"
    ...
  },
  {
    ...
    CustomFormat: "######-#######",
    Name: "userformat"
    ...
  }
];
data = [
  {
    idnoformat: "123456-1234567",
    userformat: "123456-1234567"
  }
];

var saveStr = sheet.getSaveJson(0);
console.log(saveStr);
/*
 idnoformat: "1234561234567", // Matches IdNo format, so delimiters are removed before sending data.
 userformat: "123456-1234567" // User-created format is not applied, original data is sent as-is.
*/
```
### Read More
- [CustomFormat col](/docs/props/col/custom-format)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|Feature added|
