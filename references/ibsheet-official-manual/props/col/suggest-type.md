---
KEY: suggestType
KIND: column-property
PATH: props/col/suggest-type
ALIAS_EN: various, additional, features, related, suggest, property, suggesttype, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/suggest-type
---
# SuggestType ***(col)***

> Sets various additional features related to using the [Suggest](./suggest) property. 

> Multiple features can be set using `","` as a delimiter.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Replace`|When the `Suggest` menu is displayed, moving the cursor to the menu using keyboard arrow keys changes the cell value.|
|`Start`|Shows the `Suggest` menu based on the cell content when entering edit mode.|
|`StartAll`|Shows the `Suggest` menu for an empty value ("") regardless of the cell content when entering edit mode.
 When using this feature, `Start` cannot be used.|
|`Empty`|Shows all `Suggest` menu items when the cell value is empty.|
|`All`|Always shows all `Suggest` menu items.|
|`Case`|Shows the `Suggest` menu with case sensitivity.|
|`Begin`|When filtering `Suggest` menu items based on entered characters, only items that start with the entered characters are shown.|
|`Search`|Shows all items that contain the entered characters.|
|`Complete`|Automatically inputs when the `Suggest` menu list has only one item.|
|`IgnoreSpace`|Prevents values from being selected with `Space` in the `Suggest` menu list.|
|`Validate`|When ending edit mode or pasting to a cell, if the cell value does not match a value set in `Suggest`, it is changed to an empty value.|
<!--!
|`[Private]` `Existing`|Prevents input of values that are not in the `Suggest` menu list.
Currently has issues with Korean (only works with English and numbers, so excluded for now)|
!-->

### Example
```javascript
// Using Suggest feature
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|Santa Fe Hyundai|Porter2 Hyundai|Grandeur Hyundai|Carnival Kia...",
        SuggestType: "Empty,Begin",
        Name: "CarName",
        Width: 120
    },
    ...
];
```

### Read More
- [Suggest col](./suggest)
- [SuggestMin col](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.27|`IgnoreSpace` feature added|
|core|8.3.0.1|`Validate` feature added|
