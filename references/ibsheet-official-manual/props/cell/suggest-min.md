---
KEY: suggestMin
KIND: cell-property
PATH: props/cell/suggest-min
ALIAS_EN: minimum, number, characters, entered, menu, configured, suggest, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/suggest-min
---
# SuggestMin ***(cell)***

> Sets the minimum number of characters that must be entered before the menu configured through [Suggest](/docs/props/cell/suggest) is displayed. 

> If not set, the `Suggest` list will be displayed immediately when even one character is entered.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum number of characters to enter (`default: 1`)|



### Example
```javascript
// Using Suggest feature
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|Santa Fe Hyundai|Porter2 Hyundai|Grandeur Hyundai|Carnival Kia...",
        SuggestMin: 3,// Suggest feature activates when 3 or more characters are entered
        Name: "CarName",
        Width: 120 ...
    },
    ...
];
```

### Read More
- [Suggest cell](./suggest)
- [SuggestType cell](./suggest-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
