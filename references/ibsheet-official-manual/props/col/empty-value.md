---
KEY: emptyValue
KIND: column-property
PATH: props/col/empty-value
ALIAS_EN: text, display, cell, value, emptyvalue, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/empty-value
---
# EmptyValue ***(col)***

> Sets the text to display when the cell has no value.

> Similar to the `placeholder` attribute of an HTML input object, when reading values (getValue), saving, or downloading to Excel, it is treated as having no value. 

> The data affected by this property is as follows:
```javascript
{Type: "Text", Name: "sText", EmptyValue : "No value."}

data: [
    {"e": null},      //null data
    {"e": undefined}, //undefined data
    {"e": ""},        //empty string data
    {}                //no data
]
```
When `DefaultValue` and `EmptyValue` are set simultaneously on a column without `CanEmpty` set, 

- For `null`, `undefined`, or `no data`, `DefaultValue` takes priority.

- For empty string (""), `EmptyValue` is applied.


On columns with `CanEmpty:1` set, the `DefaultValue` setting is ignored.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Content to display when there is no value in a new row or during data retrieval|


### Example
```javascript
// Set guidance for required input
options.Cols = [
    ...
    {Type: "Text", Name: "sa_point", EmptyValue: "This is a required field.", ...},
    ...
];

```

### Read More
- [CanEmpty col](./can-empty)
- [DefaultValue col](./default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
