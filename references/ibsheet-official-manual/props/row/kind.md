---
KEY: kind
KIND: row-property
PATH: props/row/kind
ALIAS_EN: represents, function, row, kind
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/kind
---
# Kind ***(row)***

> Represents the function that each row has.

> Used to check the function of each row (header, data, filter, group, etc.).

> The value of this property cannot be dynamically modified; it is recommended to use it for reference only.

> For detailed types of `Kind`, refer to [Kind attribute](/docs/appx/kind) in the **Appendix**.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Row function|


### Example
```javascript
//Check the Kind of a row.
var row = sheet.getRowById("CustRow");

alert(row["Kind"]);
```

### Read More
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
