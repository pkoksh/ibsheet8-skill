---
KEY: infoRowConfig
KIND: config-property
PATH: props/cfg/info-row-config
ALIAS_EN: count, retrieved, data, page, navigation, separate, row, top
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/info-row-config
---
# InfoRowConfig ***(cfg)***
> Sets the count of retrieved data or page navigation through a separate row at the top or bottom of the sheet.

> It is also possible to add arbitrary text or numbers to the count information display row.

> You can set properties and types for cells in the `Layout`.

### Type
`object`

### Options
|Value|Type|Description|
|----------|-----|---|
|Visible|`boolean`|Whether to display the info row on screen
`0(false)`: Do not display info row (`SearchMode : 0,2,3 default`)
`1(true)`: Display info row (`SearchMode : 1,4,5 default`)|
|Layout|`array`\[`string`\|`object`\]|Sets the layout for paging, count information display, selection summary/average display, status information display, and user-defined areas.
**Note**: `Paging, Paging2` work in `SearchMode:1,4,5`.<ul><li>**Paging**: Enables page navigation (reserved word), thousands separator with ','. e.g.) `1/1,000`
![Paging](/assets/imgs/Paging.png "Paging")
<!-- IMAGE: Screenshot/Example Image - Paging --></li><li>**Paging2**: Enables numeric page navigation (reserved word), `Caution`: Cannot be used simultaneously with Paging
![Paging2](/assets/imgs/paging2.png "Paging2")
<!-- IMAGE: Screenshot/Example Image - Paging2 --></li><li>**Count**: Displays count information (reserved word)
![Count](/assets/imgs/Count.png "Count")
<!-- IMAGE: Screenshot/Example Image - Count --></li><li>**SummaryLabel**: Displays sum/average information for the selected area
![Paging](/assets/imgs/summaryLabel.png "Paging")
<!-- IMAGE: Screenshot/Example Image - Paging --></li><li>**StatusLabel**: Displays data editing, data retrieval, row movement, filtering, sorting, column movement, file upload/removal information
![status](/assets/imgs/statusLabel.png "status")
<!-- IMAGE: Screenshot/Example Image - status --></li><li>**User area string**: String to display, HTML tags like \<Span\>\<Div\> can be used</li></ul>
(`default: ["Paging","Count"]`)

e.g.):
**["Paging",{Value:"\<div style='background-color:#FFFFAA'>1234\</div>",Color:"#FFDDFF"},"ABC","Count"]**
When set as above, it is displayed as follows:
![InfoRow](/assets/imgs/infoRow0.png "")
<!-- IMAGE: Screenshot/Example Image - InfoRow -->|
|ViewCount|`number`|When Paging2 is set in Layout, determines whether to display the selectBox for changing `PageLength`. `0`: Not displayed (`default`), `1`: Displayed
![ViewCount](/assets/imgs/viewCount.png "ViewCount")
<!-- IMAGE: Screenshot/Example Image - ViewCount -->|
|ViewFormat|`string`|When `ViewCount:1` is set after Paging2 in Layout, configures the selectBox options for `ViewCount`. Values are separated by "\|" delimiter, such as "10\|20\|30\|40\|50". 
 If ViewFormat is not set, the default selectBox options are "10\|20\|30\|50\|100". 
 The sheet's `PageLength` is included and selected in the options. (If PageLength is not included in the ViewFormat string, it is automatically added and selected)
|Paging2Count|`number`|When Paging2 is set in Layout, sets the number of page numbers displayed in the page navigation. (`default: 5, max: 10`)|
|Space|`string`|Position of the info row ("Top": top, "Bottom": bottom) (`default: "Bottom"`)|
|Format|`string`|Combination of reserved words for the cell (count information) set as `Count` in the `Layout` above
`default: [BOTTOMDATAROW / TOTALROWS]`
<ul><li>TOTALROWS: (server paging) Total data count</li><li>ROWCOUNT: Retrieved data count</li><li>VISIBLECOUNT: Visible data count</li><li>ADDROWS: Added data count</li><li>CHANGEROWS: Changed data count</li><li>DELETEROWS: Deleted data count</li><li>BOTTOMDATAROW: Number of the last currently visible row</li></ul>|

![InfoRowConfig](/assets/imgs/infoRow1.png "InfoRowConfig")
<!-- IMAGE: Screenshot/Example Image - InfoRowConfig -->

### Example
```javascript
// Html
options.Cfg = {
    InfoRowConfig: {
        "Visible": true,
        "Layout": [
            "Paging", // Reserved word for pagination
            {Value:"Closing scheduled for 2024/01/05.", TextColor:"#FF0000"}, // Custom cell
            "Count" // Reserved word for count information
        ],
        "Space": "Bottom", // InfoRow top/bottom position
        "Format": "CHANGEROWS rows have been modified." // Count information format
    }
 };

 // Paging2 in Layout is configured as follows.
 options.Cfg = {
    InfoRowConfig: {
        "Visible": true,
        "Layout": [
            "Paging2", // Reserved word for pagination
            {Value:"Closing scheduled for 2024/01/05.", TextColor:"#FF0000"}, // Custom cell
            "Admin Hong Gil-dong", // Custom cell 2
            "Count" // Reserved word for count information
        ],
        "ViewCount": 1, // Display selectBox
        "ViewFormat": "10|20|30|40|50", // selectBox option configuration
        "Paging2Count": 8, // Number of page numbers displayed in page navigation
        "Space": "Bottom" // InfoRow top/bottom position
    }
 };
// Creating a button cell in InfoRow
options.Cfg = {
    InfoRowConfig: {
        "Visible": true,
        "Layout": [
            // Button cell information settings
            {Value:"Confirm", Type:"Button",TextColor:"#FFFFFF", Color:"#53629E", RelWidth:0, Width: 100, OnClick: function(){alert("Confirm");}},
            "Count"
        ],
        "Space": "Top"
    }
};
```

### Try it
- [Demo of InfoRowConfig](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/InfoRowConfig/)

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)
- [setInfoRow method](/docs/funcs/core/set-info-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|Added Layout.Cells (individual cell property settings) feature to InfoRow|
|core|8.1.0.96|Added StatusLabel|
|core|8.1.0.97|Added Paging2, ViewCount, ViewFormat, Paging2Count|
