---
KEY: onClickSide
KIND: event-property
PATH: props/event/on-click-side
ALIAS_EN: json, event, called, clicking, button, created, cell, uses
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/event/on-click-side
---
# OnClickSide ***(json event)***

> A `Json` event that is called when clicking a button created in a cell that uses the [Button](/docs/props/col/button) or [Icon](/docs/props/col/icon) property.

> `Json` events can be declared on cells, rows, and columns, and the priority order is **cell > row > column**. 

> For example, if declared on both a cell and a row, the event declared on the row will not fire due to priority.


***When the Icon or Button property value is Check, retrieving the value within this event will return the value before the change.
This is because the timing of this event precedes the actual check change.
Therefore, when using "Check", you must input the opposite of the obtained value.***

### Syntax

```js
function Handler(evtParam) {
  // ...
}

// When adding to a row
var options = {
  // ...
  Def: {
    Row: {
      // ...
      // Simple logic can be set through a string instead of a function call
      // ** The following reserved words can be used
      // Sheet (current sheet object),
      // Row (data row object of the cell where the event was called),
      // Value (value of the cell where the event was called),
      // Col (column name where the event was called),
      // ex) 'Value && alert("Changed")'
      OnClickSide: Handler,
      // ...
    }
  }
  // ...
};

// When adding to a column
var options = {
  // ...
  Cols: [{
        // ...
        OnClickSide: Handler,
        // ...
      }
      // ...
    ]
    // ...
};

// When adding to a specific cell
var data = [{
    // ...
    'columnName': '',
    'columnNameOnClickSide': Handler,
    // ...
  },
  ...
];

// When adding to a specific row
var data = [{
    // ...
    OnClickSide: Handler,
    // ...
  },
  // ...
];

// Pass the options or data object configured above as arguments to the sheet constructor.
IBSheet.create({
  id: 'sheet',
  el: 'Main',
  options: options,
  data: data
});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|Sheet object|
|row|`object`|[Data row object](/docs/appx/row-object) of the cell where the clicked button/icon is located|
|col|`string`|Column name of the cell where the clicked button/icon is located|
|event|`object`|Object containing information about the event|

### Return
boolean

### Example
```js
/**
 * [Example 1]
 * Declaring OnClickSide event on a column
 * */

// When clicking the right button in a cell, open http://www.ibsheet.com in a new window.
function Handler(evtParam) {
  window.open('http://www.ibsheet.com', '_blank');
}
var options = {
  Cols: [{
      Name: 'sCompany',
      Type: 'Text',
      Button: 'http://ibsheet.com/demo/images/11/s1.jpg',
      OnClickSide: Handler
    }
    // ...
  ]
};

/**
 * [Example 2]
 * Declaring OnClickSide event on a cell (declared in data used by the sheet)
 * */
var data = [{
    sCompany: 'Sheet',
    sCompanyOnClickSide: 'window.open("http://www.ibsheet.com", "_blank")',
  },
  // ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
