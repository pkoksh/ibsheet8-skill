---
KEY: hideCol
KIND: method
PATH: funcs/core/hide-col
ALIAS: sheet.hideCol, hideCol()
ALIAS_EN: hides, specific, column, hidecol, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/hide-col
---
# hideCol ***(method)***
> Hides a specific column. 

> When hiding multiple columns, set the `render` argument to `false`, and after completing all operations, `rerender` must be called.

### Syntax
```javascript
void hideCol( col, userHidden, merge, render );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|Required|Column name to hide|
|userHidden|`boolean`|Optional|Whether the column is hidden by the sheet user rather than the developer
Used when implementing the personalization feature (*a feature that saves the user's column position, width, and Visible status, and restores the saved appearance when the user accesses the page again*).
 When this property value is set to `1(true)`, a flag is created internally indicating that the user hid this column. When the [saveCurrentInfo()](./save-current-info) function is called, it is saved, and the setting is reflected in the sheet when the page is accessed again later.
`0(false)`:Not a column hidden by the user (`default`)
`1(true)`:Column hidden by the user|
|merge|`boolean`|Optional| Auto merge while hiding the column.
 May become slow when there is a large amount of data in the sheet.
`0(false)`:Do not execute merge (`default`)
`1(true)`:Execute merge|
|render|`boolean`|Optional|whether immediately reflect on screen
If this feature is set to `0(false)`, you must execute `rerender()` at the end of the operation for it to be reflected on screen.
`0(false)`:Not reflected
`1(true)`:Immediately reflected (`default`)|

### Return Value
***none***

### Example
```javascript
// Hide the CPT_NM column.
sheet.hideCol( "CPT_NM" );


// Hide the AMT column and set as user Hidden.
sheet.hideCol( "AMT" , 1 );

// Using the render argument.
sheet.hideCol( { col: "AMT", render: false } );
sheet.rerender();

```

### Read More
- [getCurrentInfo method](./get-current-info)
- [saveCurrentInfo method](./save-current-info)
- [showCol method](./show-col)
- [onShowColumn event](/docs/events/on-show-column)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.6|`merge` argument added|
|core|8.0.0.17|`render` argument added|
