---
KEY: editFormat
KIND: cell-property
PATH: props/cell/edit-format
ALIAS_EN: format, display, user, double, clicks, cell, enter, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/edit-format
---
# EditFormat ***(cell)***

> Sets the format to display when the user double-clicks a cell to enter edit mode.

> The setting method and behavior differ depending on the [Type](/docs/appx/type) of each column.
> To put it simply, in a column that uses a date format, if "EditFormat":"ddMMyyyy" is set, the cell will display "2019-12-31" format in view mode, but when the user tries to edit the cell data, it will appear as "31122019".

> For more details on formats, please refer to [Format](/docs/appx/format) in the appendix.


### Type
`mixed`( `string` \| `object` )

### Options
| Column Type | Type | Description |
|---|---|---|
|Text, Lines|`object`|Sets the format for displaying the original value when entering edit mode by double-clicking in a cell.
e.g., "EditFormat":{"KOR":"South Korea", "JPN":"Japan", "USA":"United States"}
When the cell value is KOR, it shows "South Korea" when entering edit mode
![EditFormat Text](/assets/imgs/editFormatText.png)
<!-- IMAGE: Screenshot/Example Image - EditFormat Text -->|
|Date|`string`|Order of year, month, day to display when editing
e.g., "EditFormat":"ddMMyyyy"
![EditFormat Date](/assets/imgs/editFormatDate.png)
<!-- IMAGE: Screenshot/Example Image - EditFormat Date -->|


### Example
```javascript
//1. Change the format of a specific cell via method
sheet.setAttribute( sheet.getRowById("AR99") , "EDate" , "EditFormat" ,"MMddyyyy");


//2. Change format by directly accessing the object (change CLS column format to "dd-MM-yyyy")
var ROW = sheet.getRowById("AR10");
ROW["CLSEditFormat"] = "ddMMyyyy";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Change format within loaded data
{
    data:[
        {... , "CLSEditFormat":"yyyyMMdd" , ...}
    ]
}
```

### Read More
- [Format cell](./format)
- [DataFormat cell](./data-format)
- [EditFormat col](/docs/props/col/edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
