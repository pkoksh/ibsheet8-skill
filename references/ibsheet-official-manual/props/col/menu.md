---
KEY: menu
KIND: column-property
PATH: props/col/menu
ALIAS_EN: context, menu, display, right, mouse, button, click, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/menu
---
# Menu ***(col)***
> Sets the context menu to display on right mouse button click.



### Type
`mixed`( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies the context menu string using the first character as a delimiter (e.g.: @Save@Temp Save@Cancel or *Submit*Cancel) |
|`object`|[Refer to Menu Object configuration link](/docs/appx/menu)

### Example
```javascript
// Set the menu to display on right-click in the procs column
options.Cols = [
    ...
    {Type: "Text", Menu: "|Proceed|Reject|Final Approval|Hold", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Menu appendix](/docs/appx/menu)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
