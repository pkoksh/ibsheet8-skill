---
KEY: downToHwpx
KIND: method
PATH: funcs/excel/down-to-hwpx
ALIAS: sheet.downToHwpx, downToHwpx()
ALIAS_EN: downloads, sheet, contents, hangul, hwpx, file, down, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/excel/down-to-hwpx
---
# down2Hwpx ***(method)***

> Downloads the sheet's contents as a Hangul (Hwpx) file.

> This function sends the sheet's contents to the `Down2Hwpx.jsp` file bundled with the product, and the file creates the actual Hangul (Hwpx) file and sends it back to the client.

> Therefore, to use this function, `Down2Hwpx.jsp` along with the `hwpx.jar` file is required.

> **To use this feature, the `/plugins/ibsheet-excel.js` file provided with the distribution must be included.**
>
> The path to the `Down2Hwpx.jsp` file is set through the `Cfg` `Export` property.

> Instead of setting the `Export`attribute every time a sheet is created, [IBSheet.CommonOptions](/docs/static/common-options) you can set it commonly for all sheets in the attribute.

> To summarize, the following steps are required.

###
1. Add `ibsheet8-hwpx-1.0.x.jar` file to WEB-INF/lib.
2. Include the `/plugins/ibsheet-excel.js` file in the corresponding page.
3. Set the path to the `Down2Hwpx.jsp` file through the `Cfg` `Export` property when creating a sheet.


[Basic information about download/upload](/docs/appx/import-export)

### Syntax
```javascript
void down2Hwpx( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|Optional|Name of the Hangul file to create (`default: "Hwpx.hwpx"`) 
**Specify the Hangul (hwpx) filename.**|
|downRows|`string`|Optional|Downloads only the specified rows.
 Without separate settings, all rows are downloaded.
 If you want to download only visible rows, set it to `"Visible"`.
 (ex: "1\|3\|4\|5\|9" format string column)
 `downRows` does not work when using the merge feature.|
|downCols|`string`|Optional|Downloads only the specified columns.
 Without separate settings, all columns are downloaded.
 If you want to download only visible columns, set it to `"Visible"`.
(ex: "Price\|AMT\|TOTAL" format string column)|
|downHeader|`boolean`|Optional|Whether to download the header row.
`0(false)`:Do not include header row in download
`1(true)`:Include header row in download (`default`)|
|sheetDesign|`number`|Optional|Whether to reflect the sheet's design elements (from `main.css` file settings) in the Hangul document's table.
 The applied design elements are as follows: header background color, font name, font size, data background color 
`0`:No design applied except cell borders.
`1`:All design applied including cell borders. (`default`) 
`2`:Cell style applied except cell borders. 
`3`:No design or cell borders applied. 
`4`:All design applied to header row only.|
|merge|`boolean`|Optional|Whether to reflect the sheet's merge state in the table as-is.
`0(false)`:Do not reflect the sheet's merge state in the table (`default`)
`1(true)`:Reflect the sheet's merge state in the table|
|downSum|`boolean`|Optional|Whether to download the total row.
`0(false)`:Do not include total row in download
`1(true)`:Include total row in download (`default`)|
|sheetFontSize|`number`|Optional|Sets the sheet's font size. 
 The set font size is applied only to the Hangul document's table.|
|excludeFooterRow|`boolean`|Optional|Whether to exclude the footer row.
`0(false)`:Include footer row (`default`) 
`1(true)`:Exclude footer row|
|reqHeader|`object`|Optional|Sets user-specified header information in the server transmission header.|
|extendParam|`string`|Optional|When there is content that must be sent to the server, it is connected as `GET` method `QueryString` and sent together to the server.
 (ex: `sheet.down2Excel({extendParam: "sido=Seoul&sigungu=Gwanak-gu"}`)|
|extendParamMethod|`string`|Optional|Sets whether to send `extendParam` content via `GET` or `POST`. (`default: "GET"`)|
|excludeSubSum|`boolean`|Optional|Whether to exclude subtotal/cumulative total rows.
 `0(false)`: Do not exclude subtotal/cumulative total. (`default`)
 `1(true)`: Exclude all subtotal/cumulative total.|
|landScape|`boolean`|Optional|Sets the paper orientation of the Hangul document.
`0(false)`:Portrait orientation (`default`)
`1(true)`:Landscape orientation|
|top|`object`|Optional|Inserts a string to display above the sheet.
<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>topAlign</td><td>`string`</td><td>Optional</td><td>Alignment setting among `left, center, right`. (`default: "center"`)</td></tr><tr><td>topFontBold</td><td>`boolean`</td><td>Optional</td><td>Font bold setting. (`default: 0(false)`)</td></tr><tr><td>topFontColor</td><td>`string`</td><td>Optional</td><td>Font color setting.</td></tr><tr><td>topFontSize</td><td>`number`</td><td>Optional</td><td>Font size setting.</td></tr><tr><td>topText</td><td>`string`</td><td>Optional</td><td>String to display above. Line break is possible using \r\n.</td></tr></table>(ex: `top: [{topText: "Top area first line", topAlign: "center", topFontSize: 10, topFontBold: true, topFontColor:"#ff0000"},`
 `{topText: "Top area second line", topAlign: "right", topFontSize: 8, topFontBold: false, topFontColor:"#000000"}]`)|
|bottom|`object`|Optional|Inserts a string to display below the sheet.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>bottomAlign</td><td>`string`</td><td>Optional</td><td>Alignment setting among `left, center, right`. (`default: "center"`)</td></tr><tr><td>bottomFontBold</td><td>`boolean`</td><td>Optional</td><td>Font bold setting. (`default: 0(false)`)</td></tr><tr><td>bottomFontColor</td><td>`string`</td><td>Optional</td><td>Font color setting.</td></tr><tr><td>bottomFontSize</td><td>`number`</td><td>Optional</td><td>Font size setting.</td></tr><tr><td>bottomText</td><td>`string`</td><td>Optional</td><td>String to display below. Line break is possible using \r\n.</td></tr></table>(ex: `bottom: [{bottomText: "Bottom area first line", bottomAlign: "center", bottomFontSize: 10, bottomFontBold: true, bottomFontColor:"#ff0000"},`
 `{bottomText: "Bottom area second line", bottomAlign: "right", bottomFontSize: 8, bottomFontBold: false, bottomFontColor:"#000000"}]`)|
|hwpxHeader|`object`|Optional|Inserts a string to display in the document header area.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>hwpxHeaderAlign</td><td>`string`</td><td>Optional</td><td>Alignment setting among `left, center, right`. (default: "center")</td></tr><tr><td>hwpxHeaderFontBold</td><td>`boolean`</td><td>Optional</td><td>Font bold setting. (default: false)</td></tr><tr><td>hwpxHeaderFontColor</td><td>`string`</td><td>Optional</td><td>Font color setting.</td></tr><tr><td>hwpxHeaderFontSize</td><td>`number`</td><td>Optional</td><td>Font size setting.</td></tr><tr><td>hwpxHeaderText</td><td>`string`</td><td>Optional</td><td>String to display in the header. Line break is possible using \r\n.</td></tr></table>(ex: `hwpxHeader: [{hwpxHeaderText: "Header area first line", hwpxHeaderAlign: "center", hwpxHeaderFontSize: 10, hwpxHeaderFontBold: true, hwpxHeaderFontColor:"#ff0000"},`
 `{hwpxHeaderText: "Header area second line", hwpxHeaderAlign: "right", hwpxHeaderFontSize: 8, hwpxHeaderFontBold: false, hwpxHeaderFontColor:"#000000"}]`)|
|hwpxFooter|`object`|Optional|Inserts a string to display in the document footer area.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>hwpxFooterAlign</td><td>`string`</td><td>Optional</td><td>Alignment setting among `left, center, right`. (default: "center")</td></tr><tr><td>hwpxFooterFontBold</td><td>`boolean`</td><td>Optional</td><td>Font bold setting. (default: false)</td></tr><tr><td>hwpxFooterFontColor</td><td>`string`</td><td>Optional</td><td>Font color setting.</td></tr><tr><td>hwpxFooterFontSize</td><td>`number`</td><td>Optional</td><td>Font size setting.</td></tr><tr><td>hwpxFooterText</td><td>`string`</td><td>Optional</td><td>String to display in the footer. Line break is possible using \r\n.</td></tr></table>(ex: `hwpxFooter: [{hwpxFooterText: "Footer area first line", hwpxFooterAlign: "center", hwpxFooterFontSize: 10, hwpxFooterFontBold: true, hwpxFooterFontColor:"#ff0000"},`
 `{hwpxFooterText: "Footer area second line", hwpxFooterAlign: "right", hwpxFooterFontSize: 8, hwpxFooterFontBold: false, hwpxFooterFontColor:"#000000"}]`)|
|topMargin|`number`|Optional|Sets the top margin of the document paper. (`unit:mm`) (`default: 20`)|
|bottomMargin|`number`|Optional|Sets the bottom margin of the document paper. (`unit:mm`) (`default: 20`)|
|leftMargin|`number`|Optional|Sets the left margin of the document paper. (`unit:mm`) (`default: 30`)|
|rightMargin|`number`|Optional|Sets the right margin of the document paper. (`unit:mm`) (`default: 30`)|
|headerMargin|`number`|Optional|Sets the header area margin of the document paper. (`unit:mm`) (`default: 15`)|
|footerMargin|`number`|Optional|Sets the footer area margin of the document paper. (`unit:mm`) (`default: 15`)|
|botPage|`boolean`|Optional|Whether to display page numbers at the bottom of the Hangul document. 
`0(false)`:Do not display page numbers at the bottom of the Hangul document (`default`)
`1(true)`:Display page numbers at the bottom of the Hangul document|
|repeatHeader|`boolean`|Optional|Whether to repeat the sheet header output when the sheet spans multiple pages. 
`0(false)`:Do not repeat the sheet header when spanning multiple pages
`1(true)`:Repeat the sheet header when spanning multiple pages (`default`)|
|tempFile|`string`|Optional|Sets the template filename. 
For template files, the `setTempRoot` setting must be configured in `Down2Hwpx.jsp`. 
`setTempRoot` is the server path where the template file exists.|
|keyField|`object`|Optional|Property used when utilizing the Hangul `field` feature with the template feature.
 When the `field name` in a `field` matches the key value of `keyField`, the corresponding value is mapped.
 (ex: `sheet.down2Excel({keyField: {"name": "John Doe"}}` 
The field with `field name` set to `name` is mapped with the value `John Doe`)|
|sheetField|`string`|Optional|Property used when utilizing the Hangul `field` feature with the template feature.
 When a `field name` in a `field` matches the value of `sheetField`, the field is converted to a Hangul table.
 (ex: `sheet.down2Excel({sheetField: "ibsheet"}`
 The field with `field name` set to `ibsheet` is downloaded at the position of `ibsheet`)|


### Using the Hangul field feature summary
Hangul supports the `field` feature. Simply put, it can be thought of as similar to the placeholder property of an `<input>` tag.

With `down2Hwpx`, you can use the field feature to represent a sheet table and input desired values at desired positions.

![image](/assets/imgs/hanField1.png)
<!-- IMAGE: Screenshot/Example Image - image -->

![image](/assets/imgs/hanField2.png)
<!-- IMAGE: Screenshot/Example Image - image -->

If the `field name` is set to "year", setting the `keyField` property as shown below will display year as 2024.
```javascript
var param1 = {
    fileName:"document.hwpx",
        // tempFile and keyField are set only in the first sheet.
        tempFile:"template.hwpx",
        keyField: {
                "year": "2024",
        },
        sheetField : "sheet1"
};
sheet1.down2Hwpx(param1);
```




### downCols, downRows When using merge applied summary

| downCols |Configure columns same as screen | Configure columns different from screen |
| ------ | ------ | ------ |
| downRows use| X |  X |
| downRows Not used | O | See description below|

To use downCols with the merge option, downCols must contain all merged columns **in order** and **all** must be included. **If Visible: 0 columns are set, those columns must also be included in downCols.** 


If a specific column among the merged columns is missing, or even if all merged columns are included but the download column order is different, merge will not be properly applied in the Hangul document. 





![downCols when using merge](/assets/imgs/downcols_merge.png "downCols when using merge")
<!-- IMAGE: Screenshot/Example Image - downCols when using merge -->




To explain with an image, if you want to download the "merge column" with merge fully applied, you should configure as downCols: "column1|column2|column3|column4". 


If you exclude a specific column like downCols: "column2|column3|column4" or change the column order like downCols: "column4|column1|column3|column2", merge will not be fully applied.



### Return Value
***none***

### Example
```javascript
var param = {
    merge: 1,
    hwpxHeader: [{
    hwpxHeaderText: "Header area",
        hwpxHeaderAlign: "Center",
        hwpxHeaderFontSize: 8,
        hwpxHeaderFontColor: '#945151'
    }],
    top: [{
    topText: "Top of the sheet area first line",
        topAlign: "center",
        topFontSize: 10,
        topBorder: true
    }, {
    topText: "Top of the sheet area second line",
        topAlign: "center",
        topFontSize: 30,
        topFontColor: '#821751'
    }],
    sheetDesign: 1,
    fileName: "test",
    bottom: [{
    bottomText: "Bottom of the sheet area first line",
        bottomAlign: "center",
        bottomFontSize: 20
    }, {
    bottomText: "Bottom of the sheet area second line",
        bottomAlign: "right",
        bottomFontSize: 10
    }],
    topMargin: 10,
    leftMargin: 10,
    rightMargin: 10,
    headerMargin: 10,
    hwpxFooter: [{
        hwpxFooterText: "Footer text area",
        hwpxFooterAlign: "Center",
        hwpxFooterFontSize: 8,
        hwpxFooterFontColor: '#245151'
    }, {
    hwpxFooterText: "Footer text area second line",
        hwpxFooterAlign: "Center",
        hwpxFooterFontSize: 5,
        hwpxFooterFontColor: '#142991'
    }],
    sheetFontSize: 10,
    // Paper orientation setting
    landScape: false
};
sheet.down2Hwpx(param);
```

### Read More

- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.85|Down2Hwpx Feature added|
|excel|1.1.2|Down2Hwpx Feature added|
|jar|1.0.0|Down2Hwpx Feature added|
