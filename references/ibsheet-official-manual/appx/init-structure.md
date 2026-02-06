---
KEY: initStructure
KIND: appendix
PATH: appx/init-structure
ALIAS_EN: sheet, object, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/init-structure
---
# Sheet Object Structure

***Sheet object initialization (options)***

## Initialization Syntax Structure
```
options.(ROOT)
├── Def               // Common feature settings for each area
│   ├── Row:{}        // Common feature settings for all data rows
│   ├── Col:{}        // Common feature settings for all data columns
│   ├── Header:{}     // Common feature settings for header rows
│   ├── CustomID:{}   // Settings for arbitrary rows
│   ├── Group: {}     // Settings for Group rows
│   ├── SubSum : {}   // Settings for subtotal/cumulative rows
│   └── FormulaRow:{} // Settings for FormulaRow (summary) rows
│
├── Cfg:{}            // Sheet global feature settings
│
├── LeftCols:[]       // Left fixed area column settings
├── Cols:[]           // Default column settings (center area)
├── RightCols:[]      // Right fixed area column settings
│
├── Events:{}         // Event declarations
│
├── Head:[]           // Add/define custom rows in the Head area
├── Foot:[]           // Add/define custom rows in the Foot area
├── Solid:[]          // Add/define Solid rows
└── Filter:{}         // Add/define Filter rows
```

Sheet configuration example)
```javascript
var OPT =
{
    "Def" : {               // Common property settings
        "Col": {            // Common settings for all columns  (col property)
            "CanEdit": 0
        },
        "Row": {            // Common settings for all rows  (row property)
            "AlternateColor": "#FEEDFF",
            "Spanned": 1
        },
        "Header": {          // Header row common settings (row property)
            "Align": "Center",
            "TextStyle": 1
        },
        "MyCustomRow": {     // Custom row common settings (row property)
            "Color": "#666666",
            "TextColor": "#FFFFFF",
            "CanFocus": 0
        },
        "FormulaRow": {     // FormulaRow settings (row property)
            "Spanned": true,
            "SEQSpan": 2
        },
        "Group": {          // Group row settings (row property)
            "Expanded": 1,
            "sPrice": {
               "Formula": sPriceFormula
             }
        },
        "SubSum": {         // Subtotal/cumulative row settings (row property)
            "AFormat": "#,##0.##",
            "BFormat": "#,##0"
        }
    },
    "Cfg": {                // Global feature settings (cfg property)
        "LeftCanResize": 1,
        "LeftWidth": 100,
        "RightCanResize": 1,
        "RightWidth": 100
    },
    "LeftCols": [           // Left section fixed column settings (col property)
        {
            "Header": "NO",
            "Type": "Int",
            "Name": "SEQ",
            "Width": 50
        },{
            "Header": {"Value": "", "Type": "Bool"},
            "Type": "Bool",
            "CanEdit": 1,
            "CanSort": 0,
            "Name": "CHK",
            "MaxWidth": 40
        }
    ],
    "Cols": [               // Default column settings (center area)  (col property)
        {
            "Header": {     // Header setting for individual cell configuration
                "Value": "Department Name",
                "Color": "#085820"
            },
            "Name": "deptName",
            "Type": "Text",
            "Size": 30
        }, {
            "Header": "Q1",
            "Name": "qt1",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 won",
            "FormulaRow": "Avg"
        }, {
            "Header": "Q2",
            "Name": "qt2",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 won",
            "FormulaRow": "Avg",
            "Color": "#EDEDED"
        }, {
            "Header": "Q3",
            "Name": "qt3",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 won",
            "FormulaRow": "Avg"
        }, {
            "Header": "Q4",
            "Name": "qt4",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 won",
            "FormulaRow": "Avg",
            "Color": "#EDEDED"
        }
    ],
    "RightCols": [          // Right section fixed column settings (col property)
        {
            "Header": "Annual Total",
            "Name": "YEARSUM",
            "Type": "Int",
            "Format": "#,##0 won",
            "Formula": "qt1+qt2+qt3+qt4",
            "Width": 100
        }
    ],
    "Foot": [               // Foot area settings
        {
            "Def": "MyCustomRow",
        	"SEQ": {"Type": "Text"},
        	"CHK": {"Type": "Text"},
            "deptName": {"Value": "2017 Data", "TextColor": "#FF0000", "Span": 5, "Format": "", "Type": "Text", "Align": "Center"},
            "YEARSUM": {"Type": "Text", "Format": "", "Value": "", "Formula": ""}
        }
    ],
    "Events":{              // Event settings
        "onSelectMenu":function (evt) {

        }
    },
    "Solid": [              // Solid row settings
    ],
    "Filter": {              // Filter row settings
        ColumnName: {        // Features can be set on a per-column basis.
          Button: 'Defaults',
          Defaults: '|*Rows'
        }
    }
};
```

## Search Data Structure
```js
{
    "data":[
        {"deptName": "Domestic Sales Team 1", "qt1": 15030, "qt2": 21102, "qt3": 20308, "qt4": 23041},
        {"deptName": "Domestic Sales Team 2", "qt1": 25100, "qt2": 42460, "qt3": 38740, "qt4": 54765},
        {"deptName": "Domestic Sales Team 3", "qt1": 11474, "qt2": 19671, "qt3": 24746, "qt4": 20754},
        {"deptName": "Overseas Sales Team", "qt1": 24146, "qt2": 24654, "qt3": 24164, "qt4": 48121}
    ]
}
```
![Loaded sheet image](/assets/imgs/basicSheet.png "Loaded sheet image")
<!-- IMAGE: Sheet/Table View - Loaded sheet image -->

[Loaded sheet image]

## Event Invocation (event)

The sheet generally has basic events and `JSON events` that can be configured on rows, columns, and cells.

There are various events that can be used in sheet creation, data & communication, row, column, cell, cell type, paging, and global configuration sections.

Event configuration method: Set in the `options` used during sheet creation
```javascript
options.Events : { // Regular event
    onAfterChange:function (params) {
        alert(params.oldval + " value has been changed to " + params.val + ".");
    }
}

options.Cols: [ // JSON event
    {
        Name: "ColName", OnClickSide:function () {alert("JSON Event");}
    }, ...
]
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
