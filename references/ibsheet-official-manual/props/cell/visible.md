---
KEY: visible
KIND: cell-property
PATH: props/cell/visible
ALIAS_EN: whether, cell, data, shown, hidden, visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/visible
---
# Visible ***(cell)***

> Sets whether the cell data is shown or hidden.

> This property only controls the visibility of the data value displayed in the cell.

> Therefore, **UI elements and user interactions based on the cell type (Button, Bool, Enum, File, etc.) are maintained**.

> For example, Enum type will still open the list box, and Bool type can still be checked/unchecked.

> To restrict cell editing and behavior, use properties such as `CanEdit` and `Disabled`.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Hidden|
|`1(true)`|Visible (default)|

### Example
```javascript
// Hide the data of the cell in the first row corresponding to the "CLS" column.
sheet.setAttribute(sheet.getRowById("AR1"), "CLS", "Visible", 0, 1);


// Hide a specific cell in loaded data.
{"data":[
    ...
    {"ColName1Visible": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```


### Read More
- [Visible row](/docs/props/row/visible)
- [Visible col](/docs/props/col/visible)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
