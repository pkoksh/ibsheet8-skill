# Formula (Expression Calculation)

A feature that automatically calculates cell values by setting calculation logic between columns as strings or functions.

## Required Settings

To use Formula, you must set `CanFormula` and `CalcOrder`.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // Write column names where Formula is declared in order (no spaces allowed)
    CalcOrder: "yearSum,total"
  }
}
```

> **Note**: `CalcOrder` determines the calculation order. `yearSum` is calculated first, then `total` is calculated.

---

## String Method

Write calculation expressions using column names directly.

```javascript
Cols: [
  { Type: "Int", Name: "sCount" },
  { Type: "Int", Name: "sPrice" },
  { Type: "Float", Name: "sDiscount" },
  {
    Type: "Float", Name: "sResult",
    Formula: "sCount * sPrice - (sCount * sPrice * sDiscount) / 100"
  }
]
```

### External Function Call (String)

```javascript
{
  Type: "Text", Name: "sComment",
  // When calling an external function within a string, pass Sheet, Row, Col reserved words
  Formula: useFormula1
}

function useFormula1(fr) {
  // Accessible via fr.Sheet, fr.Row, fr.Col
  var rtnValue = (fr.Row['QT1'] + fr.Row['QT2']) / 2;
  // Must have a return value
  return rtnValue;
}
```

---

## Function Method

Assign a function object directly. Access `Sheet`, `Row`, and `Col` through the parameter `fr`.

```javascript
Cols: [
  { Type: "Int", Name: "qt1" },
  { Type: "Int", Name: "qt2" },
  { Type: "Int", Name: "qt3" },
  { Type: "Int", Name: "qt4" },
  {
    Type: "Int", Name: "yearSum",
    Formula: function(fr) {
      return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
    }
  },
  { Type: "Float", Name: "rate" },
  {
    Type: "Float", Name: "total",
    Formula: function(fr) {
      return fr.Row["yearSum"] * fr.Row["rate"];
    }
  }
]
```

### Function Parameter (fr) Reserved Words

| Reserved Word | Description |
|---------------|-------------|
| `fr.Sheet` | ibsheet8 object |
| `fr.Row` | Current row object (access cell values with `fr.Row["columnName"]`) |
| `fr.Col` | Current column name |

---

## Editing Formula Cells

Cells calculated by Formula are not editable by default. To allow editing, set `CanEditFormula`.

```javascript
{
  Type: "Float", Name: "sResult",
  Formula: "sCount * sPrice",
  CanEditFormula: 1  // Formula cell is also editable
}
```

---

## Full Example

```javascript
var options = {};

options.Def = {
  Row: {
    CanFormula: 1,
    CalcOrder: "yearSum,total,sComment,sGrade"
  }
};

options.Cols = [
  { Type: "Int", Name: "qt1", Header: "Q1" },
  { Type: "Int", Name: "qt2", Header: "Q2" },
  { Type: "Int", Name: "qt3", Header: "Q3" },
  { Type: "Int", Name: "qt4", Header: "Q4" },
  {
    Type: "Int", Name: "yearSum", Header: "Annual Total",
    Formula: function(fr) {
      return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
    }
  },
  { Type: "Float", Name: "rate", Header: "Rate" },
  {
    Type: "Float", Name: "total", Header: "Total Amount",
    Formula: function(fr) {
      return fr.Row["yearSum"] * fr.Row["rate"];
    }
  },
  {
    Type: "Text", Name: "sComment", Header: "Remarks",
    Formula: "calcComment(Sheet,Row,Col)"
  },
  {
    Type: "Text", Name: "sGrade", Header: "Grade",
    Formula: calcGrade
  }
];

function calcComment(fr) {
  var avg = (fr.Row['qt1'] + fr.Row['qt2']) / 2;
  return avg > 100 ? "Excellent" : "Average";
}

function calcGrade(obj) {
  var value = obj.Row["yearSum"];
  if (value >= 400) return "A";
  if (value >= 300) return "B";
  if (value >= 200) return "C";
  return "D";
}
```

---

## Cautions

- **Modifying the value of your own column** within a Formula can cause an infinite loop, so it is not recommended.
- When using an external function standalone, you **must return a value**.
- When the value of a related column is edited, the Formula is automatically recalculated.
- When used together with attribute Formulas (`ColorFormula`, `CanEditFormula`, etc.), the **column name of the standard Formula must also be included in `CalcOrder`**.
- Set calculation logic between columns as functions rather than strings (CSP issues).
