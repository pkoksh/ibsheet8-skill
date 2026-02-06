---
KEY: suggest
KIND: cell-property
PATH: props/cell/suggest
ALIAS_EN: similar, auto, complete, feature, portal, site, search, boxes
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/suggest
---
# Suggest ***(cell)***

> Similar to the auto-complete feature in portal site search boxes, if you define a list of content to be entered in the cell, values from the list that start with the same characters are filtered and displayed during input. 

> Set as a string using the first character as a delimiter.


###
![Suggest](/assets/imgs/suggest.gif "Suggest")
<!-- IMAGE: Screenshot/Example Image - Suggest -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string using the first character as a delimiter (e.g.: "\|Apple\|Banana\|Cherry\|Date\|Elderberry")


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Suggest", "|Santa Fe Hyundai|Porter2 Hyundai|Grandeur Hyundai|Carnival Kia...");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSuggest"] = "|Aviation|Rail|Road";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSSuggest":"|Senior|Disabled|Child|Infant" , ...}
    ]
}
```

### Read More
- [SuggestType cell](./suggest-type)
- [SuggestMin cell](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
