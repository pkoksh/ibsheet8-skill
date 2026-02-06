---
KEY: row
KIND: guide
PATH: start/row
ALIAS_EN: dividing, ibsheet, horizontally, broadly, separated, header, body, footer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/start/row
---
# Understanding Row Structure

> When dividing `ibsheet` horizontally, it is broadly separated into the `Header`, `Body`, and `Footer`.

> The header is the fixed area displayed at the top of the data area, and header rows and filters belong to the header area.

> The body is the data area displayed through scrolling, and the footer refers to the area that is always displayed at the bottom of the body area regardless of scrolling, such as total rows.

---
## Header Area

### *Header Row*
The values set through `options.Cols.Header` during sheet creation are placed in the header.

Header cells perform roles such as sorting when clicked, moving column positions through dragging, and resizing columns.

```javascript
var options = {
    "Cols": [
        {
            Header: [
                {    // Individual cell settings for column header
                    "Value": "Department Info",
                    "Color": "#085820",
                    "Span": 2
                }, "Department Name"
            ],
            "Name": "deptName", "Type": "Text", "Size": 100
        }, {
            Header: ["", "Department Code"],
            "Name": "deptCd", "Type": "Text", "Width": 100
        }, {
            Header: [
                {
                    "Value": "2014 Performance",
                    "Color": "#6699FF",
                    "Span": 4
                }, "Q1"
            ],
            "Name": "qt1", "Type": "Int", "Width": 100
        }, {
            Header: ["", "Q2"],
            "Name": "qt2", "Type": "Int", "Width": 100
        }, {
            Header: ["", "Q3"],
            "Name": "qt3", "Type": "Int", "Width": 100
        }, {
            Header: ["", "Q4"],
            "Name": "qt4", "Type": "Int", "Width": 100
        }
    ]
};
```
![Header Row](/assets/imgs/header1.png "Header Row")
<!-- IMAGE: Screenshot/Example Image - Header Row -->

[Created header row]

### *Filter Row*
The filter row created through (`cfg`) [ShowFilter](/docs/props/cfg/show-filter) or the sheet.[showFilterRow()](/docs/funcs/core/show-filter-row) function is also positioned in the header area.
```javascript
sheet.showFilterRow();
```
![Filter Row](/assets/imgs/header2.png "Filter Row")
<!-- IMAGE: Screenshot/Example Image - Filter Row -->

[Filter row]

### *Custom Row (Head)*
You can create as many rows as desired below the header row (or below the filter row if it exists) that are always displayed regardless of vertical scrolling.

Custom header rows are configured through the `options.Head` property.

You can assign column properties and create custom header rows like `columnName : {"Type":"Text", "Value":"Test"}`.
```javascript
options = {
    Head: [
        {
            "id": "myHeadRow1",          // Refers to the ID of the custom header row's Row object. By declaring it as id in Def,
                                         // the properties of the custom header row can be used commonly.
            "Spanned": 1,                 // Enable Span merging for custom header row
            "deptName": {
                "Type": "Text", "Value": "Include Outstanding Receivables",
                "Span": 2, "Color": "#EDEDED", "Align": "center", "TextStyle": 1
            }, // Sets the Type, Value, Span, Color, Align, TextStyle properties for the deptName column in the custom header row.
            "qt1": {"Type": "Bool"},
            "qt2": {"Type": "Bool"},
            "qt3": {"Type": "Bool"},
            "qt4": {"Type": "Bool"}
        }
    ]
}
```
The image below is an example of a custom row (Head) created with the above settings.

![Custom Header Row](/assets/imgs/header3.png "Custom Header Row")
<!-- IMAGE: Screenshot/Example Image - Custom Header Row -->

[Custom header row]

---
## Body Area
The body is the area where data retrieved through the [doSearch()](/docs/funcs/core/do-search) and [loadSearchData()](/docs/funcs/core/load-search-data) functions or data added through the [addRow()](/docs/funcs/core/add-row) function is displayed.

![Body Area](/assets/imgs/body.png "Body Area")
<!-- IMAGE: Screenshot/Example Image - Body Area -->

[**Body area**]

---
## Footer Area
### *Total Row*
When the (`col`) [FormulaRow](/docs/props/col/formula-row) property is set during column creation, a fixed total row is created at the bottom of the sheet to display total values.

The position of the total row can be moved to the top, but the total row created by default is positioned in the footer area.
```javascript
var options = {
    "Cols": [
        ...
       }, {
            "Header": [
                {
                    "Value": "2014 Performance",
                    "Color": "#6699FF",
                    "Span": 4
                }, "Q1"
            ],
            "Name": "qt1", "Type": "Int", "Width": 100, FormulaRow: "Sum"
        }, {
            "Header": ["", "Q2"],
            "Name": "qt2", "Type": "Int", "Width": 100, FormulaRow: "Avg"
        }, {
        ...
    ]
}
```
![Total Row](/assets/imgs/formulaRow.png "Total Row")
<!-- IMAGE: Screenshot/Example Image - Total Row -->

[Total row]

### *Custom Row (Foot)*
Just like the header area, you can also add custom rows to the footer area.

Custom footer rows are configured through the `options.Foot` property.

You can assign column properties and create custom footer rows like `columnName : {"Type":"Text", "Value":"Test"}`.
```javascript
options = {
    Foot: [ // Custom row (Foot) area settings
        {
            "id": "MyFootRow1", // Refers to the ID of the custom footer row's Row object. By declaring it as id in Def,
                                // the properties of the custom footer row can be used commonly.
            "Spanned" 1,        // Enable Span merging for custom footer row
            "Color": "#666666",
            "TextColor": "#FFFFFF",
            "deptName": {"Value": "2015 Data", "TextColor": "#FFBBBB", "Span": 5},
            // Sets the Value, TextColor, Span properties for the deptName column in the custom footer row.
            "qt4": {"Type": "Int", "Format": "#,###", "Value": 1248423}
        }
    ]
}
```
The image below is an example of a custom row (Foot) created with the above settings.

![Footer Row](/assets/imgs/foot.png "Footer Row")
<!-- IMAGE: Screenshot/Example Image - Footer Row -->

[Footer row]

---

## Others

### *Solid Row*
You can add arbitrary rows around the header or footer area.

Rows added in this way can have features and sizes independent of the columns within the sheet.

For more details, refer to (appendix) [Solid](/docs/appx/solid).




### *Row ID*
All rows have a unique `ID`.

Data rows have `IDs` in the format `AR1, AR2, AR3...` in order.

**Header rows have the name Header when there is a single header line, and from the 2nd header row onward, they have `IDs` in the format `HR1, HR2...`.**

Custom rows created in the header area or footer area, or solid rows, use the id property value assigned during creation as their unique ID.

(If no separate id is specified when creating footer rows, they have `IDs` in the format `FR1, FR2..`.)


**Additionally, the filter row has an ID of `Filter`, and the total row has an ID of `FormulaRow`.**

You can change values or check content for rows using these IDs.

```javascript
// example1: Modify header row title
var hrow = sheet.getRowById("Header"); // Get header row object
hrow["colName"] = "Modified Header Name";
sheet.refreshCell(hrow, "colName");

// example2: Set features on a regular row
var trow = sheet.getRowById("AR34"); // Get row AR34
trow["CanEdit"] = 0; // Set row to non-editable
trow["CanFocus"] = 0; // Set row to non-focusable
sheet.refreshRow(trow);
```


### *Common Row Settings through Def*
You can set design and features for custom rows through `Def`, which configures common features for rows/columns during sheet creation.
```javascript
var options = {
    Def: {
        "Col": {},  // Common settings for all columns
        "Row": {},  // Common settings for all data rows
        "Header": {}, // Common settings for header rows

        myCustomRow2: {  // Common feature settings for an arbitrary custom row
            "Color": "#555555",
            "TextColor": "#FFFFFF",
            "CanFocus": 0,
            "Tip": "This is a custom row."
        }
    }
};
```
The "myCustomRow2" created above can be applied to custom rows as shown below.
```javascript
options = {
    Head:[
        {       // Custom header row
            Def: "myCustomRow2", // Apply the common settings defined in Def
            id: "headRow1",
            "colName1": {"Type": "Text", "Align": "Right", "Value": "Status"},
            "colName2": {"Type": "Text", "Align": "Left", "Value": "Work Complete"}
        }
    ]
};
```
### Read More
- [ShowFilter cfg](/docs/props/cfg/show-filter)
- [FormulaRow col](/docs/props/col/formula-row)
- [addRow method](/docs/funcs/core/add-row)
- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [Row object appendix](/docs/appx/row-object)
- [Solid appendix](/docs/appx/solid)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
