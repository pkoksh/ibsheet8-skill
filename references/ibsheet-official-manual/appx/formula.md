---
KEY: formula
KIND: appendix
PATH: appx/formula
ALIAS_EN: cells, formula, calculated, results, editable, default, editing, possible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/formula
---
# Formula ***(appendix)***
A feature that sets the value or attributes (text color, background color, etc.) of a cell to a result calculated from surrounding columns.

### The sheet's Formula features include
1. Formula for general arithmetic calculations (hereinafter **value Formula**), and
2. Attribute+Formula used for changing cell attribute values (hereinafter **attribute Formula**).

> Cells with Formula-calculated results are not editable by default, but editing is possible when CanEditFormula is set to 1.

> Within Formula, the sheet, data row object, and column name can be accessed through the reserved words Sheet, Row, Col.

> When a specific column name is used in a Formula setting, the cell value of the corresponding column for each data row object is used in the calculation.

> **When using an external function alone in Formula, the function must return a value.**

> Formula basically displays the changed value on screen when a value is changed, regardless of whether other cells are refreshed.
>
> * <mark>**To apply Formula to the sheet, you must basically set the (row)[CanFormula](/docs/props/row/can-formula) property,**</mark>

> * <mark>**and when using attribute+Formula, you must also set the (row)[CalcOrder](/docs/props/row/calc-order) property.**</mark>

**Important: When using `attribute+Formula` and regular `Formula` together, you must set the `column name` in `CalcOrder` for the regular Formula.**
>

### Syntax
```Javascript
options.Def = {
    Row: {
        // Enable Formula usage in regular rows
        CanFormula: 1,
        CalcOrder:"Column name where Formula is declared"
    }
};
options.Cols = [
    {
        // Value Formula
        "Formula": "Use the result calculated from surrounding columns as the cell value"

        or

        // Target is an attribute (Color, TextColor, CanEdit, etc.)
        AttributeNameFormula: "Calculation expression for setting the attribute value"
    }
]
```


### Formula Target
|Target|Description|
|----|----|
|Cell value|Dynamically calculates the value to be placed in the cell.|
|Cell attribute|Dynamically calculates the value to be set for a specific attribute of the cell.|
|Column attribute|Dynamically calculates the value to be set for a specific attribute of the column.|

### Example
```Javascript
    options.Def = {
        Row:{
            // Sets whether to use the Formula feature.
            CanFormula: 1,
            // Sets the calculation order of Formula. CalcOrder must be set when using Formula.
            // Do not add spaces between column names; write them all together.
            CalcOrder:"sCountColor,sMoneyTextColor,sResult,sComment,sGrade"
        }
    };

    options.Cols = [
        {
            Name:"sCount",
            Type:"Int",
            // Formula for setting the background color displayed on screen
            ColorFormula: 'Value < 0 ? "rgb(245, 226, 24)" : Value == 0 ? "" : "rgb(11, 231, 109)"'
        },
            ...
        {
            Name: "sMoney",
            Type: "Int",
            // Formula for setting the text color attribute displayed on screen
            TextColorFormula: "Value < 3000 ? '#ff0000' : '#f0694e'",
        },
            ...
        {
            Name:"sResult",
            Type:"Float",
            // Formula for setting the value
            Formula: "sCount * sPrice - (sCount * sPrice * sDiscount) / 100"
        },
            ...
        {
            Name:"sComment",
            Type:"Text",
            // Example of using an external function in Formula
            Formula: "useFormula1(Sheet,Row,Col)"
        },
            ...
        {
            Name:"sGrade",
            Type:"Text",
            // Example 2 of using an external function in Formula
            Formula: useFormula2
        }

    ];

    function useFormula1(fr) {
        //fr is the formula object; accessible via fr.Sheet, fr.Row, fr.Col
        var rtnValue = (fr.Row['QT1']+fr.Row['QT2'])/2;
        ...
        //Must have a return value.
        return rtnValue;
    }
    //obj.Sheet, obj.Row, obj.Col
    function useFormula2(obj) {
        var Value = obj.Row[obj.Col];
        ...
        //Must have a return value.
        return Value;
    }
```

### Read More

 - [CanFormula Row](/docs/props/row/can-formula)
 - [CalcOrder Row](/docs/props/row/calc-order)
 - [attribute+Formula col](/docs/props/col/attributeformula)
 - [FormulaRow col](/docs/props/col/formula-row)
 - [Formula col](/docs/props/col/formula)
 - [attribute+Formula cell](/docs/props/cell/attribute-formula)
 - [calculate method](/docs/funcs/core/calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
