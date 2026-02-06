---
KEY: basicStructure
KIND: guide
PATH: start/basic-structure
ALIAS_EN: sheet, object, basic, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/start/basic-structure
---
# Sheet Object Basic Structure

***Sheet Object Initialization (options)***

## Initialization Syntax Structure
```
options.(ROOT)
├── Cfg:{}            // Sheet global feature settings
│
├── LeftCols:[]       // Left fixed area column settings
├── Cols:[]           // Default column settings (center area)
├── RightCols:[]      // Right fixed area column settings
│
└── Events:{}         // Event declarations
```

Sheet configuration example)
```javascript
var OPT =
{
    "Cfg": {                // Global feature settings (cfg property)
        "CanEdit": 0,
    },
    "LeftCols": [           // Left area (LeftSection) fixed column settings (col property)
        { "Header": "NO", "Type": "Int", "Name": "SEQ", "Width": 50 },
        { "Header": "Select", "Type": "Bool", "CanEdit": 1, "Name": "CHK"}
    ],
    "Cols": [               // Default column settings (center area) (col property)
        { "Header": "Department Name", "Name": "deptName", "Type": "Text", "Size": 30 },
        { "Header": "Q1", "Name": "qt1", "Type": "Int", "Width": 100, "Format": "#,##0 ten thousand won", "FormulaRow": "Avg" },
        { "Header": "Q2", "Name": "qt2", "Type": "Int", "Width": 100, "Format": "#,##0 ten thousand won", "FormulaRow": "Avg", "Color": "#EDEDED" },
        { "Header": "Q3", "Name": "qt3", "Type": "Int", "Width": 100, "Format": "#,##0 ten thousand won", "FormulaRow": "Avg" },
        { "Header": "Q4", "Name": "qt4", "Type": "Int", "Width": 100, "Format": "#,##0 ten thousand won", "FormulaRow": "Avg", "Color": "#EDEDED"}
    ],
    "RightCols": [],        // Right area (RightSection)
    "Events":{              // Event settings
        "onBeforeChange":function (evt) {
            ...
        }
    }
};
```

## Search Data Structure
```js
var DATA = [
        {"deptName": "Domestic Sales Team 1", "qt1": 15030, "qt2": 21102, "qt3": 20308, "qt4": 23041},
        {"deptName": "Domestic Sales Team 2", "qt1": 25100, "qt2": 42460, "qt3": 38740, "qt4": 54765},
        {"deptName": "Domestic Sales Team 3", "qt1": 11474, "qt2": 19671, "qt3": 24746, "qt4": 20754},
        {"deptName": "Overseas Sales Team", "qt1": 24146, "qt2": 24654, "qt3": 24164, "qt4": 48121}
    ]
```

## Sheet Creation Syntax
```js
IBSheet.create({
    "id": "mySheet", // Sheet object name (not used in SPA)
    "el": document.querySelector("div.part1 .gridarea"), // HTML element where the sheet will be created
    "options": OPT, // Initialization options
    "data": DATA  // Initial data
});
```

![Loaded sheet image](/assets/imgs/basicStructure.png "Loaded sheet image")
<!-- IMAGE: Sheet/Table View - Loaded sheet image -->

[Loaded sheet image]


### Read More
- [Detailed structure](/docs/appx/init-structure)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
