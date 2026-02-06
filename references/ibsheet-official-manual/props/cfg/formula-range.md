---
KEY: formulaRange
KIND: config-property
PATH: props/cfg/formula-range
ALIAS_EN: feature, extends, formula, operation, range, columns, header, foot
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/formula-range
---
# FormulaRange ***(cfg)***

> A feature that extends the formula operation range of columns from header to foot. 

> When using this feature, it checks for the presence of `CanFormula`. 

> For headers, it does not reference `Def.Row.CalcOrder` content, and you need to set it separately in `Def.Header.CalcOrder`.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Formula operates up to the data area. (`default`)|
|`1(true)`|Formula operates across the entire area.|


### Example
```javascript
options.Def: {
    "Row": {
      "CanFormula": 1,
      "CalcOrder": "AAAButton"
    },
    "Filter": {
      CanFormula: 0 // Do not apply formula to filter
    },
    "Foot": {
      CanFormula: 0 // Do not apply formula to foot
    },
    Header: {
      CanFormula: 1,
      CalcOrder: "AAAButton" // Must be set to use formula in header.
    }
  },
options.Cfg = {
    Cfg.FormulaRange = true        // Enables column formula operation across the entire area.
};
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|Feature added|
