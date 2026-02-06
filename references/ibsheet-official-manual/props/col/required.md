---
KEY: required
KIND: column-property
PATH: props/col/required
ALIAS_EN: whether, data, input, required, field, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/required
---
# Required ***(col)***
> Sets whether data input is required for the field.

> When set to `1`, a warning message is displayed and editing is prompted if a cell has no data when a save function is called.

> Can be set to the left/right of the header content using the [RequiredPosition](/docs/props/cfg/required-position) option.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Does not designate as a required input field. (`default`) |
|`1`|Designates as a required input field.
![option1](/assets/imgs/required1.png "option1")
<!-- IMAGE: Screenshot/Example Image - option1 -->|

### Example
```javascript
// Declare unique names when creating columns
options.Cols = [
    {Type: "Text", Name: "sName", Required: 1 ...},
    {Type: "Int", Name: "ssalary",Width: 70 ...},
    ...
];
```

### Read More
- [RequiredPosition cfg](/docs/props/cfg/required-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
