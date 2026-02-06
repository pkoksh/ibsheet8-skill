---
KEY: reqStatusName
KIND: config-property
PATH: props/cfg/req-status-name
ALIAS_EN: variable, name, row, status, added, changed, deleted, calling
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/req-status-name
---
# ReqStatusName ***(cfg)***

> Sets the variable name for each row's status (`Added`, `Changed`, `Deleted`) when calling save functions ([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string), [getSaveJson](/docs/funcs/core/get-save-json)).

> If no separate configuration is made, it is sent as `"STATUS"`. 

> The status values sent to the server can be modified by editing the strings in the `local/language.js` file (`"ReqStatusAdded": "Added"`\(I\), `"ReqStatusChanged": "Changed"`\(U\), `"ReqStatusDeleted": "Deleted"`\(D\), `"ReqStatusEmpty": ""`\(R\)).

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Status name to be sent to the server (`default: STATUS`)|


### Example
```javascript
options.Cfg = { "ReqStatusName": "mySheet_st" };
```
// When actually sent to the server, it is transmitted as follows.
```javascript
var saveStr = sheet.getSaveString();
//saveStr
//mySheet_st=Changed&ColName1=chris&ColName2=43 ...
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
