---
KEY: onClick
KIND: event-property
PATH: props/event/on-click
ALIAS_EN: json, event, called, cell, clicked, onclick
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/event/on-click
---
# OnClick ***(json event)***

> A `Json` event that is called when a cell is clicked.

> `Json` events can be declared on cells, rows, and columns, and the priority order is **cell > row > column**. 

> For example, if declared on both a cell and a row, the event declared on the row will not fire due to priority.

### Syntax

```javascript
function Handler(evtParam) {
    ...
}

// When adding to a row
var options = {
    ...
    Def: {
        Row: {
            ...
            OnClick: Handler,  // Simple logic can be set through a string instead of a function call
                                // ** The following reserved words can be used
                                // Sheet (current sheet object),
                                // Row (data row object of the cell where the event was called),
                                // Value (value of the cell where the event was called),
                                // Col (column name where the event was called),
                                // ex) "Value && alert('Changed')"
            ...
        }
    }
    ...
};

// When adding to a column
var options = {
    ...
    Cols: [
        {
            ...
            OnClick: Handler,
            ...
        }
        ...
    ]
    ...
};

// When adding to a specific cell
var data = [
    {
        ...
        columnName: "",
        columnNameOnClick: Handler,
        ...
    },
    ...
];

// When adding to a specific row
var data = [
    {
        ...
        OnClick: Handler,
        ...
    },
    ...
];

// Pass the options or data object configured above as arguments to the sheet constructor.
IBSheet.create({
    id: "sheet",
    el: "Main",
    options: options,
    data: data
});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the clicked cell|
|col|`string`|Column name of the clicked cell|
|event|`object`|Object containing information about the event|

### Return
boolean


### Example
```javascript
/*
  Example 1: Declaring OnClick event on a column
*/

// When clicking a cell in the PCount column, multiply its value by the sProduct column value and set the result in the sTotal column.
function Handler(evtParam) {
    evtParam.sheet.setValue({row: evtParam.row, col: "sTotal", val: evtParam.sheet.getValue({row: evtParam.row,col: evtParam.col}) * evtParam.sheet.getValue({row: evtParam.row,col: "sProduct"}), render:1});
}
var options = {
    Cols: [
        {
            Name: "PCount",
            Type: "Int",
            OnClick: Handler
        }
        ...
    ]
};


/*
  Example 2: Declaring OnClick event on a cell (declared in data used by the sheet)
*/
var data = [
    {
        "PCount": "5",
        PCountOnClick: "Sheet.setValue({row: Row, col: 'sTotal', val: Sheet.getValue({row: Row, col: Col}) * Sheet.getValue({row: Row, col: 'sProduct'}), render:1})",
    },
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
