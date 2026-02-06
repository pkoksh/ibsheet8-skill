---
KEY: solid
KIND: appendix
PATH: appx/solid
ALIAS_EN: you, create, fixed, rows, near, header, footer, within
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/solid
---
# Solid ***(appendix)***
> You can create fixed rows near the header or footer within the sheet.
Rows created as Solid are configured independently without being affected by the number or width of sheet columns.

![Solid row](/assets/imgs/solid1.gif "Solid usage example")
<!-- IMAGE: Screenshot/Example Image - Solid row -->

[Example of Solid-created rows]


## Configuration Syntax
```javascript
options.Solid = [
     {
        "id": "mySolidRow", //Assign ID to the Solid row
        "Space": 5, //Position of the Solid row (see Position below)
        "Height": 40, //Height of the Solid row
        "Cells": "Today,Spacer1,DESC,BtnRed,Spacer1,BtnYellow,Spacer2,DESC2,DESC3", //Order of custom cells
        "CanFormula": 1,
        "CalcuOrder": "DESC3",

        //Define features for each cell
        "Spacer1": { // Middle spacer cell
          Type: "Text",
          Width: 3,
          CanEdit: 0,
          CanFocus: 0
        },
        "Spacer2": { // Middle spacer cell definition
          Type: "Text",
          Width: 10,
          CanEdit: 0,
          CanFocus: 0
        },
        "Today": { //Today's date cell
          Type: "Text",
          CanFocus: 0,
          CanEdit: 0,
          Color: "#334477",
          TextColor: "#EEEEEE",
          Align: "Center",
          Value: "Today's Date : " + IBSheet.dateToString(new Date(), "yyyy-MM-dd")
        },
        "DESC": { // Label cell
          Type: "Text",
          CanFocus: 0,
          CanEdit: 0,
          Align: "Right",
          Width: 120,
          Value: "Change Risk Level :"
        },
        "BtnRed": { //Danger button cell
          Type: "Button",
          Button: "Button",
          Name: "redBtn",
          Class: "RED",
          Value: "Danger",
          Width: 40,
          OnClick: function (e) {
            if (e.row) {
              e.row.Color = "#FFAAAA";
              e.sheet.refreshRow(e.row);
            }
          }
        },
        "BtnYellow": { //Caution button cell
          Type: "Button",
          Button: "Button",
          Name: "yellowBtn",
          Class: "YELLOW",
          Value: "Caution",
          Width: 40,
          OnClick: function (e) {
            if (e.row) {
              e.row.Color = "#FFFFAA";
              e.sheet.refreshRow(e.row);
            }
          }
        },
        "DESC2": { // Label cell
          Type: "Text",
          Value: "Days until inspection:",
          Align: "Right",
          CanFocus: 0,
          CanEdit: 0,
          Width: 120
        },
        "DESC3": { // Remaining days calculation cell using Formula
          Type: "Text",
          Color: "#DDD",
          Formula: function (f) {
            return f.Row ? ((f.Row.DTDY31 - new Date(2018, 1, 23)) / 86400000) + " days" : "";
          },
          Width: 120
        }
      }
];
```

## Position
Solid rows can be positioned as follows depending on the Space property value.
|Position|Space Value|Creation Example|
|---|---|---|
|Outside sheet top|-1|!["Outside sheet top"](/assets/imgs/solid-1.png "Outside sheet top")
<!-- IMAGE: Sheet/Table View - "Outside sheet top" -->|
|Inside sheet above header|0|!["Inside sheet above header"](/assets/imgs/solid0.png "Inside sheet above header")
<!-- IMAGE: Sheet/Table View - "Inside sheet above header" -->|
|Inside sheet below header|1|!["Inside sheet below header"](/assets/imgs/solid1.png "Inside sheet below header")
<!-- IMAGE: Sheet/Table View - "Inside sheet below header" -->|
|Inside sheet above footer|2|!["Inside sheet above footer"](/assets/imgs/solid2.png "Inside sheet above footer")
<!-- IMAGE: Sheet/Table View - "Inside sheet above footer" -->|
|Inside sheet below footer|3|!["Inside sheet below footer"](/assets/imgs/solid3.png "Inside sheet below footer")
<!-- IMAGE: Sheet/Table View - "Inside sheet below footer" -->|
|Inside sheet below horizontal scrollbar|4|!["Inside sheet below horizontal scrollbar"](/assets/imgs/solid4.png "Inside sheet below horizontal scrollbar")
<!-- IMAGE: Sheet/Table View - "Inside sheet below horizontal scrollbar" -->|
|Outside sheet bottom|5|!["Outside sheet bottom"](/assets/imgs/solid5.png "Outside sheet bottom")
<!-- IMAGE: Sheet/Table View - "Outside sheet bottom" -->|


---

## Reserved Features Using Solid
You can use Solid rows to create **group rows** or **search rows**.

1. Using Group Rows

You can create group rows through the following configuration. 

When a group row is created, dragging a column header cell and dropping it onto the group row will group data by that column.
   ```javascript
options.Solid = [
    {
        "id":"myGroupRow",      //Assign ID to the Solid row
        "Space":0,              //Position of the Solid row
        "Kind":"Group"          //Type of the Solid row
    }
];
   ```
![Using group row](/assets/imgs/group.png "Group row creation")
<!-- IMAGE: Screenshot/Example Image - Using group row -->




2. Using Search Rows

Through search rows, you can select or highlight desired data within the sheet.
   ```javascript
options.Solid = [
    {
        "Kind": "Search",           // Type of the Solid row
        "Space": 1,                 // Position of the Solid row
        "id": "searchZone",         // Assign ID to the Solid row

        Cells: "Expression,Spacer1,Filter,Select,Mark,Find,Clear,Spacer2", // Create Cells within the Solid row.
                //Expression, Filter, Select, Mark, Find, FindPrev, Clear are built-in reserved keywords

        Expression: { // Expression settings for searching
            Action: "Last", // Setting for the action to take when the expression cell content changes
                            //Filter, Select, Mark, Find, FindPrev, Last can be set (Last continues the previous action.)
            Left: "5", // Creates empty space of specified px on the left side of the cell
            MinWidth: "90", // Minimum width in px
            // MaxWidth: "300",
            EmptyValue: "<s>Please enter a search term</s>"  // Same function as the input placeholder attribute
        },
        Spacer1: {   // Middle spacer cell definition
            Width: "10",
            Type: "Empty",
            CanFocus:0
        },
        Spacer2: {
            Width: "10",
            Type: "Empty",
            CanFocus:0
        },
        Filter: {   //Filter function button (Filters all columns based on text entered in the Expression cell)
            ButtonText: "Filter"
        },
        Select: {   //Select function button (Selects rows based on text entered in the Expression cell)
            ButtonText: "Select"
        },
        Mark: {     //Mark function button (Changes the background color of rows containing the text entered in the Expression cell)
            ButtonText: "Mark"
        },
        Find: {     //Find function button (Finds cells containing the text entered in the Expression cell. Can continue finding downward)
            ButtonText: "Find"
        },
        Clear: {    //Clear function button (Reverts actions performed above (filter, select, marking, etc.))
            ButtonText: "Clear",
            Width: "50"
        }
    }
];

   ```
![Using search row](/assets/imgs/searchRow2.png "Search row creation")
<!-- IMAGE: Screenshot/Example Image - Using search row -->




### Read More
[Kind appendix](./kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
