---
KEY: attributeFormula
KIND: cell-property
PATH: props/cell/attribute-formula
ALIAS_EN: you, combine, various, cell, properties, canedit, color, etc
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/attribute-formula
---
# attribute+Formula ***(cell)***
> You can combine various cell properties (`CanEdit, Color, etc.`) with a Formula string so that property values are applied based on calculations.

> For more details, please refer to [attribute + Formula](/docs/props/col/attribute-formula) in the `col` settings.

>
> `※**Very Important**`

> 1. To use any formula feature, (row)[**CanFormula**](/docs/props/row/can-formula) must be set to `1`.
> 2. When using `attribute + Formula`, the calculation order for each formula must be defined in (row)[**CalcOrder**](/docs/props/row/calc-order) in the format `ColumnName+FunctionName`. 

>For example, if you set a `CanEdit` property formula for column "A" and a `Color` property formula for column "B", specify `CalcOrder` as "ACanEdit,BColor".
> 3. **When setting `CalcOrder`, names must be written without spaces between them. If there are spaces between names, the Formula will not work correctly.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A calculation formula that computes the value for each property|


### Example
```javascript
// Define CalcOrder at creation time
options.Def.Row = {
    // Do not add spaces between column names; write them all together.
    CalcOrder: "CLSCanEdit,CLSColor"
};

// Apply property within loaded data
// If the CHK column value is false, the CLS column is not editable
// If the AMT column value is greater than 4000, apply a pink background color to the CLS column
{
    data:[
        {..., "CLSCanEditFormula": "CHK?1:0", "CLSColorFormula": "AMT>4000?'#FFDDDD':''", ...}
    ]
}
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
