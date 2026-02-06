---
KEY: editMask
KIND: column-property
PATH: props/col/edit-mask
ALIAS_EN: characters, allowed, input, cell, javascript, regular, expressions, editmask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/edit-mask
---
# EditMask ***(col)***

> Sets the characters allowed for input in a cell using JavaScript regular expressions.

> The entered characters are validated using the regular expression's `search() function` to determine whether input is allowed.
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
// Allow all characters except spaces
options.Cols = [
    ...
    {Type: "Text", EditMask: "^\\S*$", Name: "CN_Code", Width: 120, ...},
    ...
];
```
### Read More

<!--!
- `[Private]` [MaskColor col](./mask-color)
!-->
- [ResultMask col](./result-mask)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
