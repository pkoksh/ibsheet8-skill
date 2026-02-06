---
KEY: editMask
KIND: cell-property
PATH: props/cell/edit-mask
ALIAS_EN: characters, allowed, input, cell, javascript, regular, expressions, editmask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/edit-mask
---
# EditMask ***(cell)***
> Sets the characters allowed for input in a cell using JavaScript regular expressions.

> The entered characters are validated using the regular expression's `search()` method.
>
> "inputValue".search(EditMask)>=0 

> `true` - input allowed

> `false` - input restricted

>
> Allow all characters except spaces: "^\\\\S\*\$"

> Allow only numbers: "^\\\\d\*\$"

> Allow only alphabets: "^\\\\w\*\$"

> Allow only up to 10 digits: "^\\\\d{0,10}$"

>
> Characters that do not match the regular expression will not be entered.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|JavaScript regular expression string|

### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EditMask", "^\\S*$");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSEditMask"] = "^\\w*$";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSEditMask":"^\\d{0,10}$" , ...}
    ]
}
```
### Read More
- [EditMask col](/docs/props/col/edit-mask)
- [ResultMask cell](./result-mask)
<!--!
- `[Private]` [MaskColor cell](./mask-color)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
