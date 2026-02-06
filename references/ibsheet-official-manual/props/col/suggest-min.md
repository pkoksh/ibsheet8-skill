---
KEY: suggestMin
KIND: column-property
PATH: props/col/suggest-min
ALIAS_EN: minimum, number, characters, required, show, menu, suggest, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/suggest-min
---
# SuggestMin ***(col)***

> Sets the minimum number of characters required to show the menu set through the `Suggest` property. 

> If not set, the `Suggest list` will be shown immediately upon entering even a single character.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Minimum number of input characters (`default: 1`)|



### Example
```javascript
// Using Suggest feature
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|Santa Fe Hyundai|Porter2 Hyundai|Grandeur Hyundai|Carnival Kia...",
        SuggestMin: 3, // Activate Suggest feature when 3 or more characters are entered
        Name: "CarName",
        Width: 120
    }
    ...
];
```

### Read More
- [Suggest col](./suggest)
- [SuggestType col](./suggest-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
