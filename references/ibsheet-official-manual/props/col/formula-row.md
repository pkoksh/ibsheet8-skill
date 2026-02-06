---
KEY: formulaRow
KIND: column-property
PATH: props/col/formula-row
ALIAS_EN: creates, fixed, row, foot, area, display, column, totals
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/formula-row
---
# FormulaRow ***(col)***
> Creates a fixed row in the `Foot` area to display column totals or average values. 

> The `id` is generated as `FormulaRow`, and the `NoColor:2` property is included by default. 

> Cannot be used when `SearchMode:3, 4, 5`. 

> For columns other than numeric columns (`Int`, `Float`), only `"Count"` can be used.

###
![FormulaRow](/assets/imgs/formulaRow.png)
<!-- IMAGE: Screenshot/Example Image - FormulaRow -->
![FormulaRow](/assets/imgs/formulaRow1.png)
<!-- IMAGE: Screenshot/Example Image - FormulaRow -->
### Type
`mixed`( `string` \| `function` )

### Options

|Value|Description|
|-----|-----|
|`'Sum'` or `'Total {Sum} won'`|Sum of the column values|
|`'Avg'` or `'Average {Avg}'`|Average of the column values|
|`'Max'` or `'Maximum {Max}'`|Maximum value of the column|
|`'Min'` or `'Minimum {Min}'`|Minimum value of the column|
|`'Count'` or `'{Count} items'`|Number of rows|
|`function`|User-defined function|

### Example

```javascript
options.Cols = [
    // ...
    {
        Type: "Int",
        Name: "qt",
        FormulaRow: "Sum",
        Width: 120,
        // ...
    },
    {
        Type: "Int",
        Name: "rate",
        FormulaRow: "Avg",
        Width: 120,
        // ...
    },
    {
        Type: "Int",
        Name: "brnSaleAmt",
        FormulaRow: "Maximum {Max}", // Display as text+value format in the FormulaRow row
        Width: 120,
        // ...
    },
    {
        // User-defined function (returns the count of rows with TextColor "#FF0000")
        Type: "Text",
        Name: "user",
        FormulaRow: function(fr){
            var rows = fr.Sheet.getDataRows();
            var count = 0;
            for(var i = 0; i < rows.length; i++){ // Count only rows where the row's TextColor is red
                if( rows[i].TextColor == "#FF0000"){
                    count++;
                }
            }
            return "Warning: " + count + " items";
        },
        Width: 120,
        // ...
    },
    // ...
];


// Directly access the object to replace the sDetail cell value of the FormulaRow row
sheet.getRowById("FormulaRow")["sDetailVisible"] = 1; // Change the cell's Visible property
sheet.getRowById("FormulaRow")["sDetail"] = "ABC";
sheet.refreshRow(sheet.getRowById("FormulaRow"));

// Replace value with setValue
sheet.setValue(sheet.getRowById("FormulaRow"),"sDetail","ABC");

```

### Read More
- [NoCalculate row](/docs/props/row/no-calculate)
- [NoColor row](/docs/props/row/no-color)
- [Formula appendix](/docs/appx/formula)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.2.0.3|{Sum, Avg, Max, Min, Count} feature added|
