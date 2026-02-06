---
KEY: formula
KIND: column-property
PATH: props/col/formula
ALIAS_EN: calculation, logic, columns, strings, functions, formula, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/formula
---
# Formula ***(col)***
> Sets calculation logic between columns through strings or functions. 

> When setting `Formula` in function form, it must have a `return value` for it to be applied.

>
> * **Very Important**

> 1. When using any formula feature, (row)[**CanFormula**](/docs/props/row/can-formula) must be set to 1 for it to work.
> 2. (row)[**CalcOrder**](/docs/props/row/calc-order) must be defined to determine the order of calculation between columns.
>
> The feature set by `Formula` is automatically calculated and applied when data is retrieved or when the value of a related column is changed by user editing.

> In particular, since value changes through Formula also trigger Formula, modifying the column's own value through Formula is not recommended. (If modified by Formula, it triggers Formula again, which may result in an infinite loop)

> For detailed information, please refer to Chapter 7 [Formula appendix](/docs/appx/formula).


### Type
`mixed`( `function` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Calculation logic based on column names (ex: "sCount \* sPrice - ( Discount \* Rate ) \* 1.24")|
|`function`|Calculation through a separate function (within the function, access is available via the reserved words `Sheet, Row, Col`)|

### Example
```javascript
//                           yearSum column is calculated first, then total column
options.Def.Row = {CanFormula: 1, CalcOrder: "yearSum,total"};
options.Cols = [
    ...
    {Type: "Int", Name: "qt1", Width: 120 ...},
    {Type: "Int", Name: "qt2", Width: 120 ...},
    {Type: "Int", Name: "qt3", Width: 120 ...},
    {Type: "Int", Name: "qt4", Width: 120 ...},
    {Type: "Int", Name: "yearSum",
        Formula:function(fr){
            return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
        }
    },
    {Type: "Float", Name: "rate"},
    {Type: "Float", Name: "total",
        Formula:function(fr){
            return fr.Row["yearSum"] * fr.Row["rate"];
        }
    },
    ...
];
```

### Try it
- [Demo of Formula](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Formula/)

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attribute+Formula appendix](/docs/props/col/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
