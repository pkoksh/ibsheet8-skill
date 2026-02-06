---
KEY: showCol
KIND: method
PATH: funcs/core/show-col
ALIAS: sheet.showCol, showCol()
ALIAS_EN: shows, previously, hidden, column, showcol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/show-col
---
# showCol ***(method)***
> Shows a previously hidden column.

> When showing a column that was created with `options.Cols = [{Visible:0}];` during sheet creation, it may take some time for the initial display. 

> When showing multiple columns, set the `render` argument to `false`, perform the operations, and then `rerender` must be called.

### Syntax
```javascript
void showCol( col, merge, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|Optional|Column name to show
**If the property value is not set, only columns hidden with `userHidden:1` setting by the [hideCol()](./hide-col) function are all shown.**|
|merge|`boolean`|Optional| Auto merge while showing the column.
 May become slow when there is a lot of data in the sheet.
`0(false)`:Do not perform merge (`default`)
`1(true)`:Perform merge|
|render|`boolean`|Optional|Whether to immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|


### Return Value
***none***

### Example
```javascript
// Show the hidden "CPT_NM" column.
sheet.showCol( "CPT_NM" );

// Use with `render` argument set to `false`.
sheet.showCol( "CPT_NM", false, false );
// Must call rerender.
sheet.rerender();
```

### Read More

- [hideCol method](./hide-col)
- [onShowCol event](/docs/events/on-show-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.6|`merge` argument added|
|core|8.0.0.17|`render` argument added|
