---
KEY: suggestDelay
KIND: cell-property
PATH: props/cell/suggest-delay
ALIAS_EN: cells, suggest, docs, props, cell, configures, delay, appears
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/suggest-delay
---
# SuggestDelay ***(cell)***

> In cells where [Suggest](/docs/props/cell/suggest) is set, configures the delay in ms before the [Suggest](/docs/props/cell/suggest) appears after entering characters. 

> Similar to the concept of debounce, if another key is entered during the set delay time, it waits for the configured time again before displaying the [Suggest](/docs/props/cell/suggest).

> For example, when performing a database query in the `onSuggest()` event based on the entered characters, this can prevent too frequent server calls. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Input wait time (`default: 0`)|



### Example
```javascript
// Set a 300ms wait time before showing Suggest in the "SaName" column of the 3rd row.
var row = sheet.getRowByIndex(3);
row["SaNameSuggetDelay"] = 300;
```

### Read More
- [Suggest cell](/docs/props/cell/suggest)
- [SuggestMin cell](./suggest-min)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
