---
KEY: haveChild
KIND: row-property
PATH: props/row/have-child
ALIAS_EN: row, dynamic, loading, adds, tree, icon, column, maincol
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/have-child
---
# HaveChild ***(row)***

> When set on a row for dynamic loading, adds a tree icon to the column with `MainCol`.

> This feature works only when there are no children, and when set to `true`, a collapsed icon is created. 

> You can use the `parent` parameter (specifying the parent row to load data for) in `loadSearchData, doSearch` to perform dynamic tree loading.
> You can use `setAttribute` to control it dynamically.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not create tree icon.|
|`1(true)`|Create collapsed tree icon|

### Example
```javascript
    Items: [
    {
        Cls: 'Beans',
        HaveChild: true // No children, so create a collapsed tree icon.
    },
    ...
    ]
// ---------------------

    sheet.setAttribute(row, null, 'HaveChild', true);
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.25|Feature added|
