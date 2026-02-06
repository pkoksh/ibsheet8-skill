---
KEY: getSheetData
KIND: method
PATH: funcs/excel/get-sheet-data
ALIAS: sheet.getSheetData, getSheetData()
ALIAS_EN: extracts, sheet, data, specified, argument, format, getsheetdata, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/get-sheet-data
---
# getSheetData ***(method)***

> Extracts the sheet's data in the specified argument format. 

> If the target column is not set, all columns are targeted. 


### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|type|`string`|Optional|Select whether to extract sheet data as JSON or as `CSV`.(`default: json`)|
|cols|`string`|Optional|Specifies the columns to extract. If not set, all column data is extracted. To extract only visible columns, set it to "Visible".|
|colDelim|`string`|Optional|Specifies the column delimiter for the output target. This option can only be used when type is specified as `CSV`.(`default: ,`)|
|newLine|`string`|Optional|Sets the line break delimiter when cell data contains line breaks. This option can only be used when type is specified as `CSV`.(`default: \r\n`)|

|rowDelim|`string`|Optional|Sets the row delimiter for the output target. This option can only be used when type is specified as `CSV`.(`default: \r\n`)|
|styleProperty|`string`|Optional|Sets whether to include style-related property values for rows and cells in the extraction. This option can only be used when type is specified as `JSON`.(`default: 0`)|
<!-- |formattedText|`string`|Optional|Sets whether to extract data as format-applied strings.(`default: 0`)| -->

### Data extracted with styleProperty
|Target|Propery|Description|
|----------|-----|---|----|
|Row|CanEdit|Whether editing is allowed for the target row|
|Row|Color|Background color of the target row|
|Row|TextColor|Font color of the target row|
|Cell|CanEdit|Whether editing is allowed for the target cell|
|Cell|Color|Background color of the target cell|
|Cell|TextColor|Font color of the target cell|
|Cell|TextBold|Whether the target cell's font is bold (Bold)|
|Cell|TextItalic|Whether the target cell's font is italic (Italic)|
|Cell|TextUnderLine|Whether the target cell's font has underline (Underline)|
|Cell|TextStrike|Whether the target cell's font has strikethrough (Strike)|
|Cell|TextOverline|Whether the target cell's font has overline (Overline)|
|Cell|Text|Whether the target cell's font uses small caps (Small Caps)|

### Return Value
***none***

### Example
```javascript
// Extract sheet's data in JSON format.
sheet.getSheetData({type: "json"});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|excel|1.1.12|Feature added|
