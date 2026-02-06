---
KEY: defaults
KIND: column-property
PATH: props/col/defaults
ALIAS_EN: defines, values, user, string, first, character, delimiter, assist
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/defaults
---
# Defaults ***(col)***
> Defines values that the user can set as a string with the first character as a delimiter to assist with input convenience.

> This can only be used when the column's [Button](./button) or [Icon](./icon) property value is `Defaults`.

> Several reserved words starting with `*` can be used to add special features.

> When used with `Text` type, you can also use [Format](./format) and [EditFormat](./edit-format) properties together to use different values for display and server transmission, similar to HTML's \<select\>.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|String of selectable values with the first character as delimiter
ex) `Defaults: "\|Strawberry\|Banana\|Orange\|Grape\|Pineapple\|*All\|*None"`
![Defaults](/assets/imgs/defaults1.png)
<!-- IMAGE: Screenshot/Example Image - Defaults -->|

### Special features (reserved words)
|Reserved word|Function|
|---|---|
|`*Date`|A "Select date ..." text is displayed in the list item, and a calendar opens when selected.|
|`*Button`|A "Select ..." text is displayed in the list item, and an [onButtonClick](/docs/events/on-button-click) event is triggered when selected.|
|`*FilterOff`|Only in the filter row, an "All" text is displayed in the list, and the filter cell value is cleared when selected.|
|`*All`|When the [Range](./range) property is set to `1`, checkboxes are displayed on the right side of each list item allowing multiple item selection.
The item with this value displays "Select All" text, and all items are checked when selected.|
|`*None`|When the [Range](./range) property is set to `1`, checkboxes are displayed on the right side of each list item allowing multiple item selection.
The item with this value displays "Clear All" text, and all items are unchecked when selected.|
|`*Rows`|When included, no separate item is created; instead, all values in the column are added to the list. 
To add only visible rows to the list, append the `Visible` keyword after `*Rows`. (`*RowsVisible`)|

### Example
```javascript
// Dropdown list using Defaults (multiple selection)
options.Cols = [
    {
        Header: "Destination",
        Type: "Text",
        Name: "Nation",
        Range: 1,
        Button: "Defaults", // Create Default button on the right side of the sheet
        Defaults: "|LOC|USA|EST|CHN|JPN|*None",
        Format: "{'LOC':'Domestic','USA':'USA','EST':'Southeast Asia','CHN':'China','JPN':'Japan'}",
        EditFormat: "{'LOC':'Domestic','USA':'USA','EST':'Southeast Asia','CHN':'China','JPN':'Japan'}",
    },
    ...
];
```
![Default](/assets/imgs/defaults2.png)
<!-- IMAGE: Screenshot/Example Image - Default -->

List displayed when configured as in the Example
(When saving, **"LOC;EST"** is sent to the server)

### Read More
- [Button col](./button)
- [Icon col](./icon)
- [Range col](./range)
- [Format col](./format)
- [EditFormat col](./edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.25|`Visible` keyword added|
