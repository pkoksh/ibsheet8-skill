---
KEY: exportData
KIND: method
PATH: funcs/core/export-data
ALIAS: sheet.exportData, exportData()
ALIAS_EN: downloads, sheet, contents, excel, file, exportdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/export-data
---
# exportData ***(method)***

> Downloads the sheet contents as an Excel file. 

> This feature uses the `jszip` library for Excel file creation. 

> This feature is a client-side feature processed in the browser. 

> The `plugins/jszip.min.js` file must exist.

> If the file does not exist, the Excel download feature will not work.

> Supported file formats are **xlsx, txt, csv**.

### Syntax
```javascript
void exportData( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|Optional|Name of the Excel file to create (`default: Excel.xlsx`)
If no extension is entered, it is downloaded with the default filename (xlsx).
If the extension is specified as `xlsx`, `txt`, or `csv`, it is downloaded in that format.|
|sheetName|`string`|Optional|Name to assign to the WorkSheet of the created Excel file `(xlsx only)`|
|downRows|`string`|Optional|Downloads only the specified rows.
(ex: "1\|3\|4\|5\|9" format string)
 Without separate settings, all rows are downloaded.
If you want to include only visible rows on screen or filtered rows, set it to `"Visible"`.
 When using `downRows`, the **merge feature** does not work.
 Only data rows can be set, and the starting index of data rows begins from 1.|
|downCols|`string`|Optional|Downloads only the specified columns.
 Without separate settings, all columns are downloaded.
 If you want to download only visible columns, set it to `"Visible"`.
(ex: "Price\|AMT\|TOTAL" format string)|
|downTreeHide|`boolean`|Optional|When using tree, sets whether to also download collapsed rows to Excel.
`1(true)`: All collapsed child nodes are also downloaded.(`default: 0(false)`)|
|downHeader|`boolean`|Optional|Sets whether to download the header row.(`default: 1(true)`)|
|sheetDesign|`number`|Optional|Sets whether to reflect the sheet's design elements in Excel as well. 
 The design elements that are reflected are as follows: header background color, font name, font size, data background color 
 `0`: Does not apply any design except cell borders.
 `1`: Applies all design including cell borders. (default) 
 `2`: Applies cell styles except cell borders. 
 `3`: Does not apply any cell borders or styles.`(xlsx only)` 
  `4`: Applies all design to header rows only.
|titleText|`string`|Optional|Adds a desired string at the top of the Excel document.
 The string can be composed using the column delimiter ("\|") and row delimiter (`"\r\n"`).
For example, if "A\|B\|C\r\nD\|E\|F" is entered, the first row's 3 cells are filled with A, B, C values respectively,
and the second row's 3 cells are filled with D, E, F values respectively.
To include a line break within a value, insert `"\r"` or `"\n"`.
 If 10 `"\r\n"` are included, it takes up 11 lines and the sheet content starts from the 12th row. `(xlsx only)`|
|userMerge|`string`|Optional|Used together with `titleText` to merge the titleText into the desired shape.
 The input method consists of 4 numbers: `"merge start cell row index, merge start cell col index, number of rows to merge downward (set to 1 for no merge), number of cells to merge to the right"`. 
(When merging multiple areas, separate with spaces)
For example, if set as `"2,2,1,6 3,2,3,3"`,
from cell 2,2 it merges 6 cells to the right,
and from cell 3,2 it merges 3 cells downward and 3 cells to the right. `(xlsx only)`
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: Screenshot/Example Image - userMerge -->|
|excelRowHeight|`number`|Optional|Sets the row height of the Excel document.
When set to -1, the row height of the Excel document is adjusted to fit the cell content size. `(xlsx only)`|
|excelHeaderRowHeight|`number`|Optional|Sets the header row height of Excel.
`(xlsx only)`|
|wordWrap|`boolean`|Optional|Sets whether to enable "text wrapping" in the Excel document.
(`default: 1(true)`) `(xlsx only)`|
|comboValidation|`boolean`|Optional|For columns created as Enum type, represents them as a dropdown list using the data validation feature in Excel as well.
`(xlsx only)`|
|rowDelim|`string`|Optional|Row delimiter when creating text files (default line break string `"\r\n"`)
`(txt, csv only)`
|colDelim|`string`|Optional|Column delimiter for txt download (`default: \t (tab character)`)
Column delimiter for csv download (`default: , (comma)`) 
The default delimiter changes according to the uploaded file.
`(txt, csv only)`
|hiddenColumn|`boolean`|Optional|When downloading hidden columns to Excel,
the column is not visible but when selecting "Unhide" from the Excel menu, the column becomes visible again.
`hiddenColumn:1` and `downCols` **must never be used together.**
`0(false)`: When downloading to Excel, hidden columns are displayed as normal columns like Visible:1 columns (`default`)
`1(true)`:When downloading, hidden columns are downloaded in "column hidden" format in Excel|
|merge|`number`|Optional|Sets whether to reflect the sheet's merge state as-is in Excel.
 `0`: Not used (`default`)
 `1`: Used (when merging cells, subsidiary cell values are kept as original)
 `2`: Used (when merging cells, subsidiary cell values are cleared) `(xlsx only)`|
|textToGeneral|`boolean`|Optional|Type:`Text`Excel format style of
`0(false)`: Type:`Text`Set Excel format to text format 
`1(true)`: Type:`Text`Set Excel format to general format(`default`)|
|allTypeToText|`boolean`|Optional|Set when you want to receive all columns' Excel format as `Text` type, excluding `Int` and `Float` types from the sheet.
(`default: 0(false)`) `(xlsx only)`|
|checkBoxOnValue|`string`|Optional|When a checkbox or radio box is checked, uses the specified value instead of `1`.
`(xlsx only)`|
|checkBoxOffValue|`string`|Optional|When a checkbox or radio box is unchecked, uses the specified value instead of `0`.
`(xlsx only)`|
|downSum|`boolean`|Optional|Sets whether to download the total row.(`default: 1(true)`)|
|excelFontSize|`number`|Optional|Sets the Excel font size. `(xlsx only)`|
|excludeFooterRow|`boolean`|Optional|Sets whether to exclude the footer row.(`default: 0(false)`) `(xlsx only)`|
|numberTypeToText|`boolean`|Optional|Sets whether to download `Int`, `Float` type columns as `Text` type.
(`default: 0(false)`) `(xlsx only)`|
|excelFontFamily|`string`|Optional|Sets the Excel font.
`(xlsx only)`|
|exHead|`array[object]`|Optional|Sets content to display at the top of the sheet.
**Cannot be used together with the titleText property; when used together, the titleText property is ignored.**`(xlsx only)`
ex) First row height 30, first cell text specified
exHead:[{Height:30, Cells:[{Value:"Department"}]}]|
|exFoot|`array[object]`|Optional|Sets content to display at the bottom of the sheet.`(xlsx only)`
ex) First row at the bottom of the sheet with height 30, first cell text specified
exFoot:[{Height:30, Cells:[{Value:"Output: 2023-06-23 John Doe"}]}]|appendPrevSheet|`boolean`|Optional|When using the [exportDataBuffer](./export-data-buffer) method to download 2 or more sheets to Excel, sets whether to append this sheet's content to the last written worksheet. 
 `0(false)`: Creates a new worksheet and writes. (`default`) 
 `1(true)`: Appends to the last written worksheet. `(xlsx only)`|
|onlyHeaderMerge|`boolean`|Optional|When set to `1(true)`, forcefully restricts merge in the sheet's data area and reflects only header area merge in Excel.(`default: 0(false)`)|
|freezePane|`number`|Optional|Option to freeze top rows and left columns when downloading. Freeze pane is applied differently based on option settings, and operates with bitwise operations. 
 
 `0`: Do not apply freeze pane(`default`) 
 `1`: Apply header freeze pane (When applied together with `2`, operates as head area freeze pane) 
 `2`: Apply head area freeze pane 
 `4`: Apply left fixed column freeze pane|
|numberFormatMode|`number`|Optional|Sets the cell format configuration method for float-type data types.
`0`:Follows the sheet column format. (`default`)
`1`:Sets cell format as integer or float based on the cell value.
`2`:Sets to general format.|
|excelPage|`object`|Optional|Sets Excel paper-related behavior. `(xlsx only)`
ex) Excel paper setting (Landscape direction)
excelPage: { orientation: "landscape" }|

<!--!
|`[Private]` directExcelData|`object`|Optional|Feature for downloading to Excel using separate data instead of sheet data (xlsx only)|
|`[Private]` downCombo|`string`|Optional|Sets which format to use for downloading `Enum` type select items between the `Enum` property and `EnumKeys` property.
 `TEXT`: Downloaded using the `Enum` property. (`default`)
 `CODE`: Downloaded using the `EnumKeys` property.|
|`[Private]` requiredMark|`string`|Optional|Sets whether to include the required input field mark (`*`) in download.(`default: 1(true)`)|
!-->

### excelPage Options

|Name|Type|Required|Description|
|----------|-----|---|----|
|paperSize|`string`|Optional|Sets the paper size. If not set, defaults to `A4`. (`default: "A4"`)|
|orientation|`string`|Optional|Sets the paper orientation.
Portrait: "portrait", Landscape: "landscape" (`default: "portrait"`)|
|marginLeft|`number`|Optional|Sets the left margin of the paper. (`default: 1.8`)|
|marginRight|`number`|Optional|Sets the right margin of the paper. (`default: 1.8`)|
|marginTop|`number`|Optional|Sets the top margin of the paper. (`default: 1.9`)|
|marginBottom|`number`|Optional|Sets the bottom margin of the paper. (`default: 1.9`)|
|marginHeader|`number`|Optional|Sets the header margin of the paper. (`default: 0.8`)|
|marginFooter|`number`|Optional|Sets the footer margin of the paper. (`default: 0.8`)|
|fitToWidth|`number`|Optional|Sets the page layout width. (`default: 0`)|
|fitToHeight|`number`|Optional|Sets the page layout height. (`default: 0`)|

### exHead,exFoot options
|Name|Type|Required|Description|
|----------|-----|---|----|
|Height|`number`|Optional|Row height|
|Cells|`array[object]`|Optional|Content and attribute settings to display in each cell of the row|
|Cells[{Value}]|`string`|Optional|Content to display in the cell|
|Cells[{Color}]|`string`|Optional|Cell background color (ex `#FFDDEE`)|
|Cells[{TextColor}]|`string`|Optional|Cell text color (ex `#446622`)|
|Cells[{TextSize}]|`number`|Optional|Cell text size|
|Cells[{TextStyle}]|`number`|Optional|Cell text style ([Reference](/docs/props/cell/text-style))|
|Cells[{TextFont}]|`string`|Optional|Cell text font family ([Reference](/docs/props/cell/text-font))|
|Cells[{Wrap}]|`boolean`|Optional|Auto line break setting (default: true)|
|Cells[{Type}]|`string`|Optional|Cell type (set to Img only when Image is needed)|
|Cells[{ColSpan}]|`number`|Optional|Number of cells to merge horizontally (default: 1)|
|Cells[{RowSpan}]|`number`|Optional|Number of cells to merge vertically (default: 1)|
|Cells[{BorderTop}]|`string`|Optional|`Top border` - string composed of thickness, style, color connected with " " as delimiter
(ex: "1 solid #FF0000")|
|Cells[{BorderBottom}]|`string`|Optional|`Bottom border` - string composed of thickness, style, color connected with " " as delimiter
(ex: "1 solid #FF0000")|
|Cells[{BorderLeft}]|`string`|Optional|`Left border` - string composed of thickness, style, color connected with " " as delimiter
(ex: "1 solid #FF0000")|
|Cells[{BorderRight}]|`string`|Optional|`Right border` - string composed of thickness, style, color connected with " " as delimiter
(ex: "1 solid #FF0000")|

#### Cells Notes when setting Border attribute within

1. Thickness is not in px units; 1 displays thin, 2 displays bold

   Provides styles: `solid`, `dashed`, `dotted` 

   Color is set with hex code (ex `#FF00FF`)
2. When adjacent left-right cells have different right border and left border settings, the left border value set on the right cell is applied

   When adjacent top-bottom cells have different bottom border and top border settings, the top border value set on the bottom cell is applied
3. Even for cells merged through RowSpan,ColSpan properties, border settings are required for each individual cell



### Return Value
***none***

### Example
```javascript
// Download with xlsx extension, downloading only visible rows.
sheet.exportData({fileName: "InventoryList.xlsx",downRows: "Visible"});

// Download with txt extension, changing column delimiter to ','.
var param = {fileName: "exportTEXT.txt", colDelim: ","};
sheet.exportData(param);

// Download with csv extension, without downloading the total row.
var param = {fileName: "exportCSV.csv", downSum: 0}
sheet.exportData(param);
```

<!--!
### [`Private`] Example
```js
// Temporary data
var tmpData = [
  {
    SEQ: 1,
    TextData: 'Park Man-woo',
    ComboData: '02',
    ISO: 'AWG',
    Currency: 'Aruban Florin',
    IntData: 1120,
    FloatData: 115.25,
    DateData: '20100922',
    PhoneNo: '0425741245',
    LinesData: 'Will be affected by a high pressure system located in the West Sea.',
    Userformat: '',
    ImageData: '|../assets/imgs/fe.jpg|||||',
    PassData: '75646',
    RadioData: 'M:1',
    CheckData: 0
  },
  {
    SEQ: 3,
    TextData: 'Choi Ho-geon',
    ComboData: '01',
    ISO: 'GBP',
    Currency: 'British Pound',
    IntData: 65,
    FloatData: 154.36,
    DateData: '',
    PhoneNo: '',
    LinesData: '',
    Userformat: '',
    ImageData: '|../assets/imgs/ch.jpg|||||',
    PassData: '4564',
    RadioData: 'H:1',
    CheckData: 0
  }
];

// Excel download using temporary data
sheet.exportData({ directExcelData: tmpData });
```
!-->

```javascript
//exHead usage example
var param = {
          sheetDesign: 1,
          merge: 1,
          fileName: '2022_OvertimeAllowance.xlsx'
        };

        param["exHead"] = [
          { // First row
            Height: 30,
            Cells:[
              {
                // First cell image setting
                Type:"Img",
                Value:"|/assets/imgs/logo.png|78|28"
              },
              {},{},{},{},{},{},{}, //7 empty cells
              {
                Type:"Text",
                Value:"(Handling Note) Confidential",
                TextColor:"#FF0000",
                Wrap: 0,
                TextSize: 14
              }
            ]
          },
          { // Second row
            Height: 40,
            Cells:[
              {}, //First empty cell
              {
                Type:"Text",
                Align: "Center",
                Value: "2022 Overtime Allowance Claim Details",
                Color:"#DEDEDE",
                TextSize: 45,
                TextStyle: 1,
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF",
                BorderLeft:"2 dashed #0000FF",
                ColSpan: 8
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF",
                BorderRight:"2 dashed #0000FF"
              }
            ]
          },
          {}, // 3rd row (empty row)
          {// 4th row
            Cells:[
              {
                Value:"Department",
                Align:"Right",
                Color:"#DEDEDE",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },{
                ColSpan: 3,
                Value:"General Affairs Dept.",
                Align:"Left",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222"
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderRight:"1 solid #222222"
              }
            ]
          },
          {// 5th row
            Cells:[
              {
                Value:"Period",
                Align:"Right",
                Color:"#DEDEDE",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                ColSpan: 3,
                Value:"2022/01/01 ~ 2022/12/31",
                Align:"Left",
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222"
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderRight:"1 solid #222222"
              }
            ]
          }
        ];
        param["exFoot"] = [
          {}, //First row (empty row)
          {
            Height:30,
            Cells:[
              {
                Value: "Output: 2023-06-23 John Doe",
                Align: "Left",
                Wrap: 0
              }
            ]
          }
        ];


        sheet.exportData(param);

```
![exHead,exFoot](/assets/imgs/exportDataExHeadExFoot.png "exHead,exFoot")
<!-- IMAGE: Screenshot/Example Image - exHead,exFoot -->


### `downCols, downRows` When using `merge` - summary

| downCols |Configure columns same as screen | Configure columns different from screen |
| ------ | ------ | ------ |
| downRows used| X |  X |
| downRows Not used | O | See description below|

To use downCols with the merge option, downCols must contain all merged columns **in order** and **all** must be included. **If Visible: 0 columns are set, those columns must also be included in downCols.** 


If a specific column is missing from the merged columns, or even if all merged columns are included but the download column order differs, merge will not be properly applied when downloading to Excel. 





![downCols when using merge](/assets/imgs/downcols_merge.png "downCols when using merge")
<!-- IMAGE: Screenshot/Example Image - downCols when using merge -->




To explain with the image, if you want to download the "merged columns" with merge fully applied, you should configure as downCols: "Column1|Column2|Column3|Column4". 


If you exclude a specific column like downCols: "Column2|Column3|Column4", or change the column order like downCols: "Column4|Column1|Column3|Column2", merge will not be fully applied.

### Download Excel file using template file

`tempFile` option is used when you want to prepare a template on the server in advance, then download an Excel file by inserting only sheet data into that template.  

To use the template feature, `Down2Excel.jsp` or `Down2Excel.aspx` must have `TempRoot` setting configured to specify the template file folder location. 

`startRow`, `startCol` options to specify the starting position for writing data in the template file, and `sheetNo` option to specify the worksheet for writing data in the template file. 

Additionally, when downloading an Excel file using the `tempFile` option, the design entirely follows the design set in the template file, and options such as `excelFontSize`, `excelRowHeight`, `sheetDesign` etc. are ignored.


### Read More

- [importData method](./import-data)
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [LevelMark cfg](/docs/props/cfg/level-mark)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.6|`fileName`, `sheetName`, `downRows`, `downCols`, `downRows`, `downTreeHide`, `downHeader`, `sheetDesign`, `titleText`, `userMerge`, `excelRowHeight`, `excelHeaderRowHeight`, `wordWrap`, `comboValidation`, `rowDelim`, `colDelim`, `downSum` Feature added|
|core|8.0.0.20|File format content added|
|core|8.0.0.21|`merge`, `allTypeToText`, `checkBoxOnValue`, `checkBoxOffValue`, `excelFontSize`, `excludeFooterRow`, `numberTypeToText` (xlsx only)|
|core|8.0.0.29|`excelFontFamily` Feature added (xlsx only)|
|core|8.1.0.30|`exHead`,`exFoot` Feature added (xlsx only)|
|core|8.1.0.39|`excelRowHeight : -1` setting added|
|core|8.1.0.41|`sheetDesign : 4` setting added|
|core|8.1.0.83|`appendPrevSheet` setting added (available only when using exportDataBuffer)|
|core|8.2.0.5|`onlyHeaderMerge` setting added|
|core|8.2.0.11|`hiddenColumn` setting added|
|core|8.2.0.25|`freezePane` setting added|
|core|8.3.0.16|`numberFormatMode` setting added|
<!--!
|`[Private]` core|8.0.0.22|`downCombo` Feature added|
|`[Private]` core|8.1.0.4|`excelPage.paperSize`, `excelPage.orientation`, `excelPage.marginLeft`, `excelPage.marginRight`, `excelPage.marginTop`, `excelPage.marginBottom`, `excelPage.marginHeader`, `excelPage.marginFooter` Feature added|
|`[Private]` core|8.1.0.6|`directExcelData` Feature added|
|`[Private]` core|8.1.0.40|`requiredMark` Feature added|
|`[Private]` core|8.1.0.73|`excelPage.fitToWidth`, `excelPage.fitToHeight` Feature added|
!-->
