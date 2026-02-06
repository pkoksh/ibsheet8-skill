---
KEY: visible
KIND: column-property
PATH: props/col/visible
ALIAS_EN: show, hide, state, column, visible, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/visible
---
# Visible ***(col)***
> Sets the show/hide state of a column.

> When set to `Visible:0` during sheet creation, to show the column later, use the [showCol()](/docs/funcs/core/show-col) function rather than changing the property value through `setAttribute()`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Hide column|
|`1(true)`|Show column (`default`)|

### Example
```javascript
// Hide a specific column
options.Cols = [
    ...
    {Type: "Int", Name: "Pvt_TSum", Visible: 0, ...},
    ...
];
```

### Read More
- [showCol method](/docs/funcs/core/show-col)
- [hideCol method](/docs/funcs/core/hide-col)
- [onShowColumn event](/docs/events/on-show-column)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
