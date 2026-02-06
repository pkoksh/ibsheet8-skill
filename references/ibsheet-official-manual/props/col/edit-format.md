---
KEY: editFormat
KIND: column-property
PATH: props/col/edit-format
ALIAS_EN: format, display, user, double, clicks, cell, enter, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/edit-format
---
# EditFormat ***(col)***
> Sets the format to display when the user double-clicks a cell to enter edit mode.

> The setting method and behavior differ depending on the column [Type](/docs/appx/type).
> To understand easily, for a column using date format, if you set "EditFormat":"ddMMyyyy", the cell displays as "2019-12-31" format normally, but when the user tries to edit the cell data, it appears as "31122019".

> For detailed information about formats, please refer to [Format appendix](/docs/appx/format).
> For `Int` or `Float` types, % cannot be used in `EditFormat`.


### Type
`mixed`( `string` \| `object`)

### Options
|Type|Category|Usage|
|---|---|---|
|`Text, Lines`|`object`|Sets the format to display the original value when entering edit mode by double-clicking the cell.
ex) "EditFormat":{"KOR":"South Korea", "JPN":"Japan", "USA":"United States"}
When the cell value is KOR, entering edit mode shows South Korea
![EditFormat Text](/assets/imgs/editFormatText.png)
<!-- IMAGE: Screenshot/Example Image - EditFormat Text -->|
|`Date`|`string`|Order of year, month, day shown during editing
ex) "EditFormat":"ddMMyyyy"
![EditFormat Date](/assets/imgs/editFormatDate.png)
<!-- IMAGE: Screenshot/Example Image - EditFormat Date -->|




### Example
```javascript
// Set to display in day-month-year order when editing a specific column
options.Cols = [
    ...
    {Type: "Date", Format: "yyyy-MM-dd", EditFormat: "ddMMyyyy", Name: "enterDate",Width: 120 ...},
    ...
];
```

### Read More
- [Format col](./format)
- [DataFormat col](./data-format)
- [EditFormat cell](/docs/props/cell/edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
