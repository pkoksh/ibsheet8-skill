---
KEY: canFocus
KIND: column-property
PATH: props/col/can-focus
ALIAS_EN: whether, column, receive, focus, via, click, keyboard, navigation
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/can-focus
---
# CanFocus ***(col)***
> Sets whether the column can receive focus via click or keyboard navigation.

> For columns set with `CanFocus: 0`, focus cannot be entered via click, and the column is skipped when navigating with the Tab key.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Focus entry disabled|
|`1(true)`|Focus entry enabled (`default`)|



### Example
```javascript
// Set a specific column to not receive focus
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", CanFocus: 0 ...},
    ...
];
```

### Read More
- [CanEdit col](./can-edit)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
