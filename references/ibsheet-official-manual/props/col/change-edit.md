---
KEY: changeEdit
KIND: column-property
PATH: props/col/change-edit
ALIAS_EN: whether, column, editable, canedit, docs, props, row, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/change-edit
---
# ChangeEdit ***(col)***

> Sets whether the column is editable ([CanEdit](/docs/props/row/can-edit)) for rows with Changed ([Changed](/docs/props/row/changed)) or retrieved status.

> If you want to set it so that editing is disabled on data retrieval, editing is possible after adding a row, and editing is disabled after saving, you should also set [AddEdit](/docs/props/col/add-edit). 

> `Caution` When this property is set, the `(Cell,Row,Col)CanEdit` settings will be ignored.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Column is not editable when the row status is Changed or retrieved|
|`1(true)`|Column is editable when the row status is Changed or retrieved|


### Example
```javascript

// Block editing of the AMT column for Changed or retrieved rows
options.Cols = [
    ...
    {Type: "Int", ChangeEdit: 0, Name: "AMT", Width: 120 ...},
    ...
];

// Block editing of the AMT column on data retrieval, allow editing when added via addRow, and disable editing after saving
options.Cols = [
    ...
    {Type: "Int", AddEdit: 1, ChangeEdit:0, Name: "AMT", Width: 120 ...},
    ...
];

```

### Try it
- [Demo of ChangeEdit](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/ChangeEdit/)

### Read More
- [CanEdit col](/docs/props/col/can-edit)
- [CanEdit row](/docs/props/row/can-edit)
- [AddEdit col](/docs/props/col/add-edit)
- [Changed row](/docs/props/row/changed)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.87|Feature added|
