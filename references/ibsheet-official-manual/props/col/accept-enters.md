---
KEY: acceptEnters
KIND: column-property
PATH: props/col/accept-enters
ALIAS_EN: behavior, pressing, enter, key, while, editing, lines, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/accept-enters
---
# AcceptEnters ***(col)***

> Sets the behavior when pressing `Enter key` while editing in `Lines` type. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Finish value change and exit edit mode (`default`)|
|`1`|A line break character is inserted and edit mode is maintained
Editing ends when `Ctrl or Shift or Alt + Enter` is pressed or `Tab key` is pressed|
|`2`|Finish value change and exit edit mode
Line break is possible by pressing `Ctrl or Shift or Alt + Enter`|
|`3`|Both `Ctrl or Shift or Alt + Enter` and plain `Enter` insert a line break character
Editing ends when pressing the `Tab key` or clicking `another cell` with the mouse|


### Example
```javascript
// Line break behavior when pressing Enter key during editing
options.Cols = [
    ...
    {Type: "Lines", AcceptEnters: 1, Name: "CarName", Width: 120, ...},
    ...
];
```

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)
- [AcceptEnters cell](/docs/props/cell/accept-enters)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
