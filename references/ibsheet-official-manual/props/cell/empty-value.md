---
KEY: emptyValue
KIND: cell-property
PATH: props/cell/empty-value
ALIAS_EN: text, display, cell, value, emptyvalue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/empty-value
---
# EmptyValue ***(cell)***

> Sets the text to display when the cell has no value.

> Similar to the `placeholder` attribute of an `Html` input element. When reading (getValue), saving, or downloading to Excel, the value is treated as empty. 

> The data affected by this property is as follows:
```javascript
{Type: "Text", Name: "sText", EmptyValue : "No value available."}

data: [
    {"e": null},      //null data
    {"e": undefined}, //undefined data
    {"e": ""},        //empty string data
    {}                //no data
]
```

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Content to display when there is no value in new rows or when loading|


### Example
```javascript
// Set a guide message for required input
{
    data:[
        {... , "CLSEmptyValue":"This field is required." , ...}
    ]
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
