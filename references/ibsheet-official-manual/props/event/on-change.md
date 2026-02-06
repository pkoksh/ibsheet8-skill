---
KEY: onChange
KIND: event-property
PATH: props/event/on-change
ALIAS_EN: json, event, called, cell, value, edited, different, editing
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/event/on-change
---
# OnChange ***(json event)***

> A `Json` event that is called when the cell value and the edited cell value are different after editing.

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
            OnChange: Handler,  // Simple logic can be set through a string instead of a function call
                                // ** The following reserved words can be used
                                // sheet (current sheet object),
                                // row (data row object of the cell where the event was called),
                                // col (column name where the event was called)
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
            OnChange: Handler,
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
        columnNameOnChange: Handler,
        ...
    },
    ...
];

// When adding to a specific row
var data = [
    {
        ...
        OnChange: Handler,
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
|row|`object`|[Data row object](/docs/appx/row-object) of the cell whose value was changed|
|col|`string`|Column name of the cell whose value was changed|
|event|`object`|Object containing information about the event|

### Return
*boolean*

### Example
```javascript
/*
  Example 1: Declaring OnChange event on a column
*/

// When the value is changed, show an alert.
function Handler(evtParam) {
    alert("The changed value is " + evtParam.sheet.getValue({row:evtParam.row,col:evtParam.col}));
}
var options = {
    Cols: [
        {
            Name: "sCountry",
            Type: "Text",
            OnChange: Handler
        }
        ...
    ]
};


/*
  Example 2: Declaring OnChange event on a cell (declared in data used by the sheet)
*/
var data = [
    {
        "sCountry": "Korea",
        sCountryOnChange: "alert('The value has been changed')",
    },
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
