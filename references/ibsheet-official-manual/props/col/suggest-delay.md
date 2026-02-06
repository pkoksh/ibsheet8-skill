---
KEY: suggestDelay
KIND: column-property
PATH: props/col/suggest-delay
ALIAS_EN: delay, suggest, appears, entering, characters, column, suggestdelay, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/suggest-delay
---
# SuggestDelay ***(col)***

> Sets the delay in ms before `Suggest` appears when entering characters in a column with `Suggest` set. 

> Similar to `debounce` concept, if another key is entered during the delay period, it waits for the set time again before displaying `Suggest`.

> For example, when querying a database in the `onSuggest()` event based on entered characters, this can prevent calling the server too frequently. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Input wait time (`default: 0`)|



### Example
```javascript
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "",
        // Wait 300ms after input in a column with Suggest set before triggering Suggest.
        SuggestDelay: 300,
        Name: "CarName",
        Width: 120
    },
    ...
];
```

### Read More
- [SuggestMin col](./suggest-min)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
