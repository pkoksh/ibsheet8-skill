---
KEY: onSame
KIND: event-property
PATH: props/event/on-same
ALIAS_EN: json, event, called, cell, value, edited, editing, onsame
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/event/on-same
---
# OnSame ***(json event)***

> A `Json` event that is called when the cell value and the edited cell value are the same after editing.

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
            OnSame: Handler,  // Simple logic can be set through a string instead of a function call
                                // ** The following reserved words can be used
                                // Sheet (current sheet object),
                                // Row (data row object of the cell where the event was called),
                                // Value (value of the cell where the event was called),
                                // Col (column name where the event was called),
                                // ex) "Value && alert('Same')"
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
            OnSame: Handler,
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
        columnNameOnSame: Handler,
        ...
    },
    ...
];

// When adding to a specific row
var data = [
    {
        ...
        OnSame: Handler,
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
|row|`object`|[Data row object](/docs/appx/row-object) of the cell whose value is the same as before editing|
|col|`string`|Column name of the cell whose value is the same as before editing|
|event|`object`|Object containing information about the event|

### Example
```javascript
/*
  Example 1: Declaring OnSame event on a column
*/

// If the value is the same as before editing, show an alert and change the cell background to red.
function Handler(evtParam) {
    alert("The value is the same as the original.");
    evtParam.sheet.setCellStyle({row: evtParam.row, col: evtParam.col, attr: {Color:'red'}, render:1});

}
var options = {
    Cols: [
        {
            Name: "sCountry",
            Type: "Text",
            OnSame: Handler
        }
        ...
    ]
};


/*
  Example 2: Declaring OnSame event on a cell (declared in data used by the sheet)
*/
var data = [
    {
        "sCountry": "Korea",
        sCountryOnSame:"alert('The value is the same as the original.') || Sheet.setCellStyle({row: Row, col: Col, attr: {Color:'red'}, render:1});",
    },
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
