---
KEY: attributeFormula
KIND: column-property
PATH: props/col/attribute-formula
ALIAS_EN: various, column, attributes, canedit, textcolor, etc, formula, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/attribute-formula
---
# attribute+Formula ***(col)***
> Various column attributes (`CanEdit, TextColor`, etc.) can be set through `Formula`.

> For example, setting attributes such as `CanEdit, Color` via `Formula` can be declared as follows:
> ```js
> options.Cols = [
>   {Type:"Text", Name:"Total",
>       CanEditFormula:"CHK==1&&AMT>10?1:0",
>       ColorFormula:"Value>10000 ? '#FF0000':'#FFFF00'",
>       FormatFormula:function(param){
>           if(param.Row["SaupJuminNo"].length == 10){
>               return "###-##-#####";
>           }else{
>                return "######-#######";
>            }
>       }
>   }
> ];
> ```
> `* **Very Important**`

> 1. When using any formula feature, (row)[**CanFormula**](/docs/props/row/can-formula) must be set to 1 for it to work.
> 2. When using `attribute+Formula`, the calculation order for each formula must be defined in (row)[**CalcOrder**](/docs/props/row/calc-order) in the format `ColumnName+AttributeName`. 

> For example, if you set a `CanEdit` attribute formula for column "A" and a `Color` attribute formula for column "B", you should specify "ACanEdit,BColor" in [**CalcOrder**](/docs/props/row/calc-order).
> 3. **When setting `CalcOrder`, names must be written without spaces between them. If there are spaces between names, the Formula will not work correctly.**

### Type
`mixed`( `function` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Calculation logic based on column names (ex: `"sCount \* sPrice - ( Discount \* Rate ) \* 1.24"`)|
|`function`|Calculation through a separate function (within the function, access is available via the reserved words `Sheet`, `Row`, `Col`, `Attr`)|


### Example
```javascript
// When using formula, CanFormula:1 must be set, and when using attribute+Formula, CalcOrder must also be set
options.Def.Row = {
    CanFormula: 1,
    CalcOrder: "yearSumColor,rateCanEdit" // Names must be written without spaces between them
};
options.Cols = [
    ...
    {Type: "Bool" Name: "CHK"},
    // If the column value is greater than 100, the background color automatically changes to red; otherwise, to light yellow
    {Type: "Int",  Name: "yearSum",
        ColorFormula:function(fr){
            return fr.Value>100?'#FF0000':'#FFFFAA';
        }
    },
    // Editing is only possible when the CHK column is checked and the yearSum column value is greater than 150
    {Type: "Float", Name: "rate",
        CanEditFormula:function(fr) {
            if (fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150)
                return true;
            else
                return false;
        }
    },
    ...
];
```

### Try it
- [Demo of attribute+Formula](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/attributeFormula/)

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attribute+formula row](/docs/props/row/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
