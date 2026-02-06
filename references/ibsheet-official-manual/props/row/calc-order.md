---
KEY: calcOrder
KIND: row-property
PATH: props/row/calc-order
ALIAS_EN: defines, calculation, order, columns, formula, regular, attribute, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/calc-order
---
# CalcOrder ***(row)***

> Defines the calculation order for columns with formula (`regular or attribute+Formula`) set, as a string connected by the delimiter ",".

>
> When setting [attribute + Formula](/docs/props/col/attribute-formula) on a column, **CalcOrder** must be set as `column name + attribute name` (ex: "SalaryCanEdit"), and for columns that only perform formula calculations, just the column name is needed.

>
> `**Very Important**`

> 1. In sheets that only use regular Formula (formula calculations), **CalcOrder** is not required for `Formula` to work. However, when using [attribute + Formula](/docs/props/col/attribute-formula) together with regular `Formula`, the regular `Formula` must also be defined in **CalcOrder** (specifying the column name) for it to work.
> 2. **When setting `CalcOrder`, names must be written without spaces between them. If there are spaces between names, the Formula will not work correctly.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|A string connecting column names (or column name + attribute name) with "," as delimiter in calculation order|



### Example
```javascript
//Formula operates for SubTotal and Total, then ColorFormula for SubTotal and TextColorFormula for Total operate next.
options.Def.Row = { CalcOrder: "SubTotal,Total,SubTotalColor,TotalTextColor" };
options.Cols = [
    {Type:"Int", Name:"QT1"},
    {Type:"Int", Name:"QT2"},
    {Type:"Int", Name:"SubTotal", Formula:QT12SUM, ColorFormula:STColur},
    {Type:"Int", Name:"QT3"},
    {Type:"Int", Name:"QT4"},
    {Type:"Int", Name:"Total", Formula:TOTSUM, TextColorFormula:TOTTextColur},
];

function QT12SUM(fr){
    return fr.Row["QT1"] + fr.Row["QT2"];
}
function TOTSUM(fr){
    return fr.Row["QT1"] + fr.Row["QT2"] + fr.Row["QT3"] + fr.Row["QT4"];
}
function STColur(fr){
    return fr.Value > 500 ? "#FF0000" : "#333333";
}
function TOTTextColur(fr){
    if (fr.Value > 1000) {
        return '#FF0000';
    } else {
        return '#333333';
    }
}
```

### Read More

- [CanFormula row](./can-formula)
- [Formula col](/docs/props/col/formula)
- [attribute+Formula col](/docs/props/col/attribute-formula)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
