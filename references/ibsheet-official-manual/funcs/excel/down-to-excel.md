---
KEY: downToExcel
KIND: method
PATH: funcs/excel/down-to-excel
ALIAS: sheet.downToExcel, downToExcel()
ALIAS_EN: downloads, sheet, contents, excel, file, down, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-excel
---
# down2Excel ***(method)***

> Downloads the sheet's contents as an Excel file.

> This function sends the sheet's contents to the `Down2Excel.jsp` file bundled with the product, and the file creates the actual Excel file and sends it back to the client.

> Therefore, to use this function, for Java Server Module, `Down2Excel.jsp` along with the `ibsheet8-1.0.x.jar` file and `apache POI library` are required, and for .NET Server Module, `Down2Excel.aspx` along with the `IBSheet8-4.0.dll` file and `Syncfusion library dll` are required.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> The path to `Down2Excel.jsp` or `Down2Excel.aspx` is set through the `Cfg` `Export` property.

> Instead of setting the `Export`attribute every time a sheet is created, [IBSheet.CommonOptions](/docs/static/common-options) you can set it commonly for all sheets in the attribute.

> To summarize, the following steps are required.

###
**Java Server Module**

1. Add `ibsheet8-1.0.x.jar` file and `Common library(POI jar)` to WEB-INF/lib.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `Down2Excel.jsp` file through the `Cfg` `Export` property when creating a sheet.

**.NET Server Module**

1. Add `IBSheet8-4.0.dll` file and `Common library(Syncfusion dll)` to bin or reference.
2. `/plugins/ibsheet-excel.js` file must be included in the page.
3. Set the path to the `Down2Excel.aspx` file through the `Cfg` `Export` property when creating a sheet.

[Basic information about download/upload](/docs/appx/import-export)

### Syntax
```javascript
void down2Excel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|Optional|Name of the Excel file to create (`default: "Excel.xlsx"`) 
**The file is created in xls or xlsx format depending on whether the xls or xlsx extension is appended to the filename in this property.**|
|sheetName|`string`|Optional|Name to assign to the Excel file WorkSheet being created|
|downRows|`string`|Optional|Downloads only the specified rows.
(ex: "1\|3\|4\|5\|9" format string column)
 Without separate settings, all rows are downloaded.
 If you want to include only visible rows on screen or filtered rows, set it to `"Visible"`.
 `downRows` does not work when using the **merge feature**.
 Only data rows can be set, and the data row start Index starts from 1.|
|downCols|`string`|Optional|Downloads only the specified columns.
 Without separate settings, all columns are downloaded.
 If you want to download only visible columns, set it to `"Visible"`.
(ex: "Price\|AMT\|TOTAL" format string column)|
|downTreeHide|`boolean`|Optional|When using tree, whether to include collapsed rows in Excel download
`0(false)`:Exclude collapsed rows (child nodes) from download target (`default`)
`1(true)`:Include collapsed rows (child nodes) in download target|
|downHeader|`boolean`|Optional|Whether to download the header row.
`0(false)`:Do not include header row in download
`1(true)`:Include header row in download (`default`)|
|sheetDesign|`number`|Optional|Whether to reflect the sheet's design elements (from `main.css` file settings) in Excel as well.
 The applied design elements are as follows:
header background color, header font color,
 font name (IBMain class property value set in main.css file),
font size (excelFontSize property value), data background color 
 `0`:No design applied except cell borders.
 `1`:All design applied including cell borders. (`default`)
`2`:Cell style applied except cell borders.
`3`:No design or cell borders applied.
 `4`:All design applied to header row only. **To use this option, the server module must be updated to version 1.1.16 or later.**|
|titleText|`string`|Optional|Adds a desired string at the top of the Excel document.
 Strings can be composed using column delimiter("\|") and row delimiter("\r\n").
For example, if "A\|B\|C\r\nD\|E\|F" is entered, the first row's 3 cells are filled with A,B,C values, and the second row's 3 cells are filled with D,E,F values. 
 To include a newline within the value, insert \r or \n. If \r\n is included, there is a difference between lines 10 and 11, and from the 12th row, the sheet content is output.|
|userMerge|`string`|Optional|Used additionally with `TitleText` to merge a desired area within Excel.
 The input method consists of 4 numbers: 
`"merge start cell row index, merge start cell col index, number of rows to merge downward (1 if no merge), number of cells to merge to the right"`
(For multiple merges, separate with spaces)
For example, if set as `"2,2,1,6 3,2,3,3"`, cell 2,2 merges 6 cells to the right, and cell 3,2 merges 3 cells downward and 3 cells to the right.
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: Screenshot/Example Image - userMerge -->|
|excelRowHeight|`number`|Optional|Sets the Excel document row height. When set to -1, the Excel document row height adjusts to fit the cell content size.|
|excelHeaderRowHeight|`number`|Optional|Sets the Excel header row height.|
|wordWrap|`boolean`|Optional|Whether to apply "text line break" in the Excel document.
`0(false)`:Line break not applied
`1(true)`:Line break applied (`default`)|
|comboValidation|`boolean`|Optional|For columns created as Enum type, uses the data validation feature in Excel to display as a dropdown list.
Ignored when the Enum type has too many items.
`0(false)`:Dropdown list form not used (`default`)
`1(true)`:Dropdown list form used|
|hiddenColumn|`boolean`|Optional|When downloading hidden columns to Excel, the column is not visible to the eye, but when selecting "Unhide" from the Excel menu, the column becomes visible again.
 `hiddenColumn:1` **must never be used together with** `downCols`.
`0(false)`: When downloading to Excel, hidden columns are displayed as normal columns like Visible:1 columns (`default`)
`1(true)`:Hidden columns are downloaded in "column hide" form in Excel|
|merge|`number`|Optional|Whether to reflect the sheet's merge state as-is in Excel.
`0`:Not used (`default`)
`1`:Used (when cells are merged, subsidiary cell values are kept as original)
`2`:Used (when cells are merged, subsidiary cell values are cleared)|
|textToGeneral|`boolean`|Optional|Excel format style for Type:`Text`
`0(false)`: Set Excel format to text format for Type:`Text` 
`1(true)`: Set Excel format to general format for Type:`Text` (`default`)|
|allTypeToText|`boolean`|Optional|Sets Excel format to `Text` type for all columns excluding `Int` and `Float` types.
`0(false)`:Do not set Excel format to `Text` type for all columns excluding `Int`, `Float` types (`default`)
`1(true)`:Set Excel format to `Text` type for all columns excluding `Int`, `Float` types|
|appendPrevSheet|`boolean`|Optional|When downloading 2 or more sheets to Excel using the [down2ExcelBuffer](./down-to-excel-buffer) method, whether to append the sheet content to the last written worksheet.
`0(false)`: Create a new worksheet and write. (`default`)
`1(true)`: Append the sheet content to the last written worksheet.|
|checkBoxOnValue|`string`|Optional|When a checkbox or radio box is checked, uses the specified value instead of `1`.|
|checkBoxOffValue|`string`|Optional|When a checkbox or radio box is unchecked, uses the specified value instead of `0`.|
|downSum|`boolean`|Optional|Whether to download the total row.
`0(false)`:Do not include total row in download
`1(true)`:Include total row in download (`default`)|
|excelFontSize|`number`|Optional|Sets the Excel font size.|
|excludeFooterRow|`boolean`|Optional|Whether to exclude the footer row.
`0(false)`:Include footer row (`default`) 
`1(true)`:Exclude footer row|
|numberTypeToText|`boolean`|Optional|Whether to download `Int`, `Float` type columns as `Text` type.
`0(false)`:Do not set `Int`, `Float` type columns to `Text` type (`default`)
`1(true)`:Set `Int`, `Float` type columns to `Text` type|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|extendParam|`string`|Optional|When there is content that must be sent to the server, it is connected as `GET` method `QueryString` and sent together to the server.
 (ex: `sheet.down2Excel({extendParam: "sido=Seoul&sigungu=Gwanak-gu"}`)|
|extendParamMethod|`string`|Optional|Sets whether to send `extendParam` content via `GET` or `POST`. (`default: "GET"`)|
|requiredMark|`boolean`|Optional|Whether to include the required input field mark(`*`) in the download.
`0(false)`:Do not include required input field mark(`*`) in download
`1(true)`:Include required input field mark(`*`) in download (`default`)|
|titleAlign|`string`|Optional|Sets the alignment for content set with `titleText` to `left`, `center`, or `right`. (`default: "center"`)|
|downCombo|`string`|Optional|Sets the format for downloading `Enum` type select items using `Enum` property and `EnumKeys` property.
 `TEXT`: Downloaded using `Enum` property. (`default`)
 `CODE`: Downloaded using `EnumKeys` property.|
|onlyHeaderMerge|`boolean`|Optional|Whether to forcefully restrict data area merge and reflect only header area merge in Excel.
`0(false)`:Reflect both header area and data area merge in download (`default`)
`1(true)`:Reflect only header area merge in download|
|numberExMode|`boolean`|Optional|Whether to download `Int`, `Float` type columns in Number format. When not set, downloads in currency or user-specified format.
`0(false)`:Download `Int`, `Float` type columns in currency or user-specified format (`default`)
`1(true)`:Download `Int`, `Float` type columns in Number format|
|numberFormatMode|`number`|Optional|Sets the cell format configuration method for float-type data types.
`0`:Follows the sheet column format. (`default`)
`1`:Sets cell format as integer or float based on the cell value.
`2`:Sets to general format.|
|useXhr|`boolean`|Optional|Download Excel file using xhr communication.
`0(false)`:xhr communication not used (`default`)
`1(true)`:xhr communication used|
|exHead|`object`|Optional|Sets content to display at the top of the sheet.
Cannot be used together with titleText, userMerge, header, footer properties; when used together, titleText, userMerge, header, footer properties are ignored. 
 This property can only be set when using POI.|
|exFoot|`object`|Optional|Sets content to display at the bottom of the sheet.
Cannot be used together with titleText, userMerge, header, footer properties; when used together, titleText, userMerge, header, footer properties are ignored. 
 This property can only be set when using POI.|
|tempFile|`string`|Optional|Sets the Excel filename to use as a template. **The template path must be set in `Down2Excel.jsp` or `Down2Excel.aspx`.**|
|sheetNo|`number`|Optional|Sets the worksheet number to use as a template in the Excel file specified by the `tempFile` argument. (`default: 0`)|
|startCol|`number`|Optional|Sets the column number to start writing data in the Excel file when applying a template. (`default: 0`)|
|startRow|`number`|Optional|Sets the row number to start writing data in the Excel file when applying a template. (`default: 0`)|
|freezePane|`number`|Optional|Option to freeze top rows and left columns when downloading. Freeze pane is applied differently based on option settings, and operates with bitwise operations. 
 
 `0`: Do not apply freeze pane(`default`) 
 `1`: Apply header freeze pane (When applied together with `2`, operates as head area freeze pane) 
 `2`: Apply head area freeze pane 
 `4`: Apply left fixed column freeze pane|
|workbookPassword|`string`|Optional|Option to set a password on the downloaded Excel file.
Only for xlsx extension files.|
|enableFilter|`boolean`|Optional|When downloading the sheet to Excel, enables the Excel filter feature on the sheet area. 
 **This option is unrelated to whether a filter is currently applied to the sheet. Additionally, this option does not download filtered results, but merely sets the Excel filter feature on the sheet area so it can be used.**|
<!--!
|`[Private]` excludeSubSum|`boolean`|Optional|Whether to exclude subtotal/cumulative total rows.
 `0(false)`: Do not exclude subtotal/cumulative total. (`default`)
 `1(true)`: Exclude all subtotal/cumulative total.|
|`[Private]` autoSizeColumn|`boolean`|Optional|Whether to automatically adjust Excel column width. (However, the auto-adjustment result may not be accurate.) (`default: 0(false)`)|
|`[Private]` printSetup|`object`|Optional|Print-related settings (paper size, paper orientation, etc.) when downloading to Excel.|
|`[Private]` reportXMLURL|`boolean`|Optional|Settings for Excel title or pattern through a separate XML file.|
|`[Private]` treeLevel|`boolean`|Optional|When downloading tree-structured data, whether to display the tree level as a separate column in Excel. (`default: 0(false))`|
|`[Private]` URL|`string`|Optional|When there is additional content to process on the server besides `down2Excel`, sets the URL to process.|

!-->

### downCols, downRows When using merge applied summary

| downCols |Configure columns same as screen | Configure columns different from screen |
| ------ | ------ | ------ |
| downRows use| X |  X |
| downRows Not used | O | See description below|

To use downCols with the merge option, downCols must contain all merged columns **in order** and **all** must be included. **If Visible: 0 columns are set, those columns must also be included in downCols.** 


If a specific column among the merged columns is missing, or even if all merged columns are included but the download column order is different, merge will not be properly applied when downloading to Excel. 





![downCols when using merge](/assets/imgs/downcols_merge.png "downCols when using merge")
<!-- IMAGE: Screenshot/Example Image - downCols when using merge -->




To explain with an image, if you want to download the "merge column" with merge fully applied, you should configure as downCols: "column1|column2|column3|column4". 


If you exclude a specific column like downCols: "column2|column3|column4" or change the column order like downCols: "column4|column1|column3|column2", merge will not be fully applied.

### exHead,exFoot options
|Name|Type|Required|Description|
|----------|-----|---|----|
|Height|`number`|Optional|Row height|
|Cells|`array[object]`|Optional|Content and attribute settings to display in each cell of the row|
|Cells[{Value}]|`string`|Optional|Content to display in the cell|
|Cells[{Color}]|`string`|Optional|Cell background color (ex `#FFDDEE`)|
|Cells[{TextColor}]|`string`|Optional|Cell text color (ex `#446622`)|
|Cells[{TextSize}]|`number`|Optional|Cell text size|
|Cells[{TextStyle}]|`number`|Optional|Cell text style 
 8, 16, 32 cannot be set. ([Reference](/docs/props/cell/text-style))|
|Cells[{Wrap}]|`boolean`|Optional|Auto line break setting
`0(false)`:Auto line break not applied
`1(true)`:Auto line break applied (`default`)|
|Cells[{Type}]|`string`|Optional|Cell type (set to Img only when Image is needed)|
|Cells[{ColSpan}]|`number`|Optional|Number of cells to merge horizontally(`default: 1`) (Note: Horizontal merge option cannot span across sheets.)|
|Cells[{RowSpan}]|`number`|Optional|Number of cells to merge vertically(`default: 1`) (Note: Vertical merge option cannot span across sheets.)|
|Cells[{BorderTop}]|`string`|Optional|`top border` thickness, style, color connected with " " delimiter (ex: "1 solid #FF0000")|
|Cells[{BorderBottom}]|`string`|Optional|`bottom border` thickness, style, color connected with " " delimiter (ex: "1 solid #FF0000")|
|Cells[{BorderLeft}]|`string`|Optional|`left border` thickness, style, color connected with " " delimiter (ex: "1 solid #FF0000")|
|Cells[{BorderRight}]|`string`|Optional|`right border` thickness, style, color connected with " " delimiter (ex: "1 solid #FF0000")|

#### Notes when setting Border attribute within Cells

1. Thickness is not in px units; 1 displays as thin and 2 displays as bold. 

   Three styles are provided: `solid`, `dashed`, `dotted`. 

   Color is set as hex code. (ex `#FF00FF`)
2. When adjacent cells on the left and right have different right border and left border settings, the right cell's left border value is applied.

   When adjacent cells on the top and bottom have different bottom border and top border settings, the bottom cell's top border value is applied.
3. Even for cells that are merged through RowSpan or ColSpan properties, border settings are required for each cell.





### Downloading Excel file with template applied

The `tempFile` option is used when you want to prepare a template on the server in advance, then download an Excel file by inserting only sheet data into that template.  


To use the template feature, `Down2Excel.jsp` or `Down2Excel.aspx` must have the `TempRoot` setting configured to specify the template file folder location. 


Use the `startRow` and `startCol` options to specify the starting position for writing data in the template file, and the `sheetNo` option to specify the worksheet for writing data in the template file. 


Additionally, when downloading an Excel file using the `tempFile` option, the design entirely follows the template file's design settings, and options such as `excelFontSize`, `excelRowHeight`, `sheetDesign` are ignored. 


```js

// Start writing data from the 5th row, 3rd column
sheet.down2Excel({
      fileName: "sheet.xlsx",
      tempFile: "template.xlsx",
      startRow: 4,
      startCol: 2,
})
```

```java
// Server side setting
// Set the folder path where the template file is located
down.setTempRoot("D:/");
```

[Template file example]

<img src="../../../assets/imgs/down2ExcelTempFile1.png" width="700" height="400"/>

[Download result using template file]

<img src="../../../assets/imgs/down2ExcelTempFile2.png" width="700" height="400"/>
 


### Return Value
***none***

### Example
```javascript
var param = {
  fileName:"John Doe Transportation details.xlsx",
 titleText:"||2019 March Transportation\r\n|||||||John Doe",
  userMerge:"0,2,1,4"
};
sheet.down2Excel(param);
```

### Read More
- [Down2ExcelConfig cfg](/docs/props/cfg/down-to-excel-config)
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [exportData method](/docs/funcs/core/export-data)
- [loadExcel method](./load-excel)
- [down2Text method](./down-to-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|Feature added|
|excel|0.0.8|`reqHeader` Feature added|
|excel|1.0.19|`sheetDesign: 4` option added|
|excel|1.0.18|`requiredMark` Feature modified: available as lowercase string|
|excel, servermodule|1.1.0, 1.1.24|`exHead`, `exFoot` Feature added|
|excel, servermodule|1.1.15, 1.1.37|`freezePane` Feature added|
|excel, servermodule|1.1.32(excel), 2.0.15(servermodule) |`enableFilter` Feature added|
