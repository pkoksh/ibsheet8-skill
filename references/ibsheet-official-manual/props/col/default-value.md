---
KEY: defaultValue
KIND: column-property
PATH: props/col/default-value
ALIAS_EN: default, value, column, defaultvalue, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/default-value
---
# DefaultValue ***(col)***
> Sets a default value for the column.

> When adding a new row or when there is no data for the column in the retrieved data, the specified value is automatically displayed.

> Especially when using `Button` type, if you set the default content to display on the button, the value is displayed even without separate data retrieval for the button column. 

> When reading values (getValue), saving, or downloading to Excel, the DefaultValue is used. 

> The data affected by this property is as follows:

```javascript
{Type: "Text", Name: "sText", DefaultValue : "John Doe"}

data: [
    {"e": null},      //null data
    {"e": undefined}, //undefined data
    {}                //no data
]
```
When `DefaultValue` and `EmptyValue` are set simultaneously on a column without `CanEmpty` set, 

- For `null`, `undefined`, or `no data`, `DefaultValue` takes priority.

- For empty string (""), `EmptyValue` is applied.


On columns with `CanEmpty:1` set, the `DefaultValue` setting is ignored.


### Type
`mixed`

### Options
|Value|Description|
|-----|-----|
|`mixed`|Content to display as default value when there is no value in a new row or during data retrieval|

### Example
```javascript
// Set default title for a button column
options.Cols = [
    {Header: "Details", Type: "Button", Name: "DetailBnt", Button: "Button", DefaultValue: "Confirm"},
    ...
];
```
![Default](/assets/imgs/button5.png)
<!-- IMAGE: Button Image - Default -->

"Confirm" is displayed in the detail view column even without retrieved data.

### Read More
- [EmptyValue col](./empty-value)
- [SpaceForDefaultValue cfg](/docs/props/cfg/space-for-default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
