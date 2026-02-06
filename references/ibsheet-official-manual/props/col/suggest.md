---
KEY: suggest
KIND: column-property
PATH: props/col/suggest
ALIAS_EN: similar, auto, complete, feature, portal, site, search, bars
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/suggest
---
# Suggest ***(col)***

> Similar to the auto-complete feature on portal site search bars, if you define a list of content to be entered in a cell, values that start with the same characters are filtered and displayed during input. 

> Set as a string using the first character as a delimiter.


###
![Suggest](/assets/imgs/suggest.gif "Suggest")
<!-- IMAGE: Screenshot/Example Image - Suggest -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String using the first character as a delimiter (e.g.: "\|Rockfish\|Flounder\|Red Snapper\|Black Rockfish\|Flatfish\|Yellowtail")


### Example
```javascript
// Pre-register suggested words for the CarName column
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|Santa Fe Hyundai|Porter2 Hyundai|Grandeur Hyundai|Carnival Kia...",
        Name: "CarName",
        Width: 120,
        ...
    },
    ...
];
```

### Try it
- [Demo of Suggest](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Suggest/)

### Read More
- [SuggestType col](./suggest-type)
- [SuggestMin col](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
