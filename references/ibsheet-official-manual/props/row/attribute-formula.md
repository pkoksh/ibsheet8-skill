---
KEY: attributeFormula
KIND: row-property
PATH: props/row/attribute-formula
ALIAS_EN: various, row, attributes, canedit, textcolor, etc, formula, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/attribute-formula
---
# attribute+Formula ***(row)***
> Various row attributes (`CanEdit, TextColor, etc.`) can be set through `Formula`.

> For example, setting attributes such as `CanEdit or Color` through `Formula` can be declared as follows:
>```javascript
> options.Def.Row = [
>   {
>       "CanFormula": true,      //Always required when using formula.
>       "CalcOrder": "Color",    //Using Color formula.
>       "ColorFormula": function (param) {
>           //If the department name is "General Affairs", display the entire row background in yellow.
>           if (param.Row["DeptNm"] == "General Affairs") {
>               return "#FFFFDD";
>           }
>        }
>   }
> ];
> ```
> `*Very Important*`

> 1. When using any formula feature, [**CanFormula** row](/docs/props/row/can-formula) must be set to 1 for it to work.
> 2. When using `attribute+Formula(row)`, you must set the `attribute names` in calculation order in [**CalcOrder** row](/docs/props/row/calc-order). 

> For example, if you set a `CanEdit` attribute formula and a `Color` attribute formula, set `CalcOrder` to `"CanEdit,Color"`.
> 3. **When setting `CalcOrder`, names must be written without spaces between them. If there are spaces between names, the Formula will not work correctly.**

### Type
`function`

### Options
|Value|Description|
|-----|-----|
|`Sheet`|The sheet object|
|`Row`|The row object where `formula` operates|
|`Attr`|The attribute to apply `formula` to (`Color`, `CanEdit`, etc.)|


### Example
```javascript
//When using formula, CanFormula:1 must be set, and when using attribute+Formula, CalcOrder must also be set.
options.Def.Row = {
    CanFormula: 1,                //Must be set to use formula.
    // When setting CalcOrder, write attribute names without spaces between them.
    CalcOrder: "Color,CanEdit",  //Set attributes to apply in order.
    CanEditFormula: function (param) {
        //Disable editing for rows where settlement is checked.
        if (param.Row["FinishedYN"]) {
            return 0;
        }
    },
    ColorFormula:function(param) {
        //Set background color to "#FFFFDD" when department is Accounting.
        if(param.Row["DeptCd"] == "1B"){
            return "#FFFFDD";
        }
    }
};

options.Cols = [
    ...
    {Header:"Settlement Completed", Type:"Bool", Name:"FinishedYN"},
    {Header:"Department", Type:"Enum", Name:"DeptCd", Enum:"|General Affairs|Accounting|HR|Sales|Development", EnumKeys:"|2A|1B|C9|B4|D0"},
    ...
];
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attrbute+formula col](/docs/props/col/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
