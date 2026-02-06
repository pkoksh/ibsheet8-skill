---
KEY: suggestType
KIND: cell-property
PATH: props/cell/suggest-type
ALIAS_EN: configures, various, additional, features, related, suggest, property, suggesttype
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/suggest-type
---
# SuggestType ***(cell)***

> Configures various additional features related to using the [Suggest](./suggest) property. 

> Multiple features can be set using `","` as a delimiter.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Replace`|When the `Suggest` menu is shown, moving the cursor to the menu using keyboard arrow keys changes the cell value.|
|`Start`|Shows the `Suggest` menu based on the cell's content when entering edit mode.|
|`StartAll`|Shows all `Suggest` menu items regardless of the cell's content when entering edit mode.|
|`Empty`|Shows all `Suggest` menu items when the cell value is empty.|
|`All`|Always shows all `Suggest` menu items.|
|`Case`|Shows the `Suggest` menu with case-sensitive matching.|
|`Begin`|When filtering `Suggest` menu items based on entered characters, only items that start with the entered characters are shown.|
|`Search`|Shows all items that contain the entered characters.|
|`Complete`|When the `Suggest` menu list has only one item, it is automatically entered.|
|`IgnoreSpace`|Prevents values from being selected with `Space` in the `Suggest` menu list.|
|`Validate`|When exiting edit mode or pasting into a cell, if the cell value does not match a value set in `Suggest`, it is changed to an empty value.|
<!--!
|`[Private]` `Existing`|Prevents entering values that are not in the `Suggest` menu list.
Currently has issues with Korean input (only English and numbers work, so this is excluded for now)|
!-->

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "SuggestType", "Empty,Complete, Existing");

//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSuggestType"] = "Empty,Complete,Existing";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSSuggestType": "Start,Search", ...}
    ]
}
```

### Read More
- [Suggest cell](./suggest)
- [SuggestMin cell](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.27|Added `IgnoreSpace` feature|
|core|8.3.0.1|Added `Validate` feature|
