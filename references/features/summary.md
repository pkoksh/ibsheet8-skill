# Formula Row & SubTotal

## Overview

IBSheet8 provides two methods for displaying aggregated values such as sum, average, maximum, minimum, and count.

- **FormulaRow**: Creates a fixed summary row in the `Foot` area to display column-level aggregated values.
- **makeSubTotal**: Dynamically adds subtotal/cumulative rows to the data area based on the values of a criteria column.

---

## FormulaRow (Summary Row)

Creates a fixed row in the `Foot` area to display aggregated values such as column sum and average.

- The created row has an `id` of `"FormulaRow"`, and the `NoColor:2` property is applied by default.
- Cannot be used with `SearchMode:3, 4, 5`.
- For columns other than numeric types (`Int`, `Float`), only `"Count"` can be used.

### Type

`string` | `function`

### Aggregation Options

| Value | Description |
|-------|-------------|
| `"Sum"` or `"Total {Sum} Won"` | Sum of the column |
| `"Avg"` or `"Average {Avg}"` | Average of the column |
| `"Max"` or `"Maximum {Max}"` | Maximum of the column |
| `"Min"` or `"Minimum {Min}"` | Minimum of the column |
| `"Count"` or `"{Count} items"` | Number of rows |
| `function` | User-defined function |

> When placeholders like `{Sum}`, `{Avg}` are used with text, they render as `"Total 1,000 Won"`.

### Basic Example

```javascript
options.Cols = [
  {
    Type: "Int",
    Name: "qt",
    FormulaRow: "Sum",       // Sum
    Width: 120
  },
  {
    Type: "Int",
    Name: "rate",
    FormulaRow: "Avg",       // Average
    Width: 120
  },
  {
    Type: "Int",
    Name: "brnSaleAmt",
    FormulaRow: "Maximum {Max}",  // Text + value format
    Width: 120
  }
];
```

### User-Defined Function Example

You can access `Sheet`, `Row`, and `Col` through the function parameter `fr`.

```javascript
{
  Type: "Text",
  Name: "user",
  FormulaRow: function(fr) {
    var rows = fr.Sheet.getDataRows();
    var count = 0;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].TextColor == "#FF0000") {
        count++;
      }
    }
    return "Warning: " + count + " items";
  },
  Width: 120
}
```

### Directly Modifying FormulaRow Cell Values

```javascript
// Access object directly and replace values
sheet.getRowById("FormulaRow")["sDetailVisible"] = 1;  // Change Visible property
sheet.getRowById("FormulaRow")["sDetail"] = "ABC";
sheet.refreshRow(sheet.getRowById("FormulaRow"));

// Replace value using setValue
sheet.setValue(sheet.getRowById("FormulaRow"), "sDetail", "ABC");
```

---

## FormulaRow API Methods

### setFormulaRow

Changes the calculation method of the summary row or hides the row.

```javascript
sheet.setFormulaRow(val, cols, visible, render);
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| val | `string` \| `object` | Required | One of `"Sum"`, `"Avg"`, `"Min"`, `"Max"`. When using object format `{"ColName1":"Sum","ColName2":"Avg"}`, cols is not needed |
| cols | `string` | Optional | Column names for calculation (multiple columns separated by `,`) |
| visible | `boolean` | Optional | `0`: Hidden (default), `1`: Visible |
| render | `boolean` | Optional | `0`: Do not apply (default), `1`: Apply immediately. When using `0`, `rerender()` is needed after operation |

```javascript
// Change summary row calculation to average
sheet.setFormulaRow("Avg", "AMT1,AMT2", 1, 1);

// Hide summary row
sheet.setFormulaRow({ visible: 0 });
```

### setFormulaRowPosition

Changes the position of the summary row to top or bottom.

```javascript
sheet.setFormulaRowPosition(pos, norender);
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| pos | `number` | Required | `0`: Move to top, `1`: Move to bottom (default) |
| norender | `boolean` | Optional | `0`: Apply immediately (default), `1`: Do not apply. When using `1`, `renderBody()` must be executed first |

```javascript
// Move summary row to top
sheet.setFormulaRowPosition(0);

// Move summary row to bottom
sheet.setFormulaRowPosition({ pos: 1 });
```

---

## SubTotal/Cumulative (makeSubTotal)

Adds subtotal/cumulative rows to the ibsheet8 based on the data of a criteria column. The subtotal description ("Subtotal: value") is displayed in the column to the left of the criteria column.

### Constraints

- `SearchMode`: Only `0, 2` are supported
- When using subtotals during data retrieval, it must be called in the `onDataLoad` event.
- When using `usermerge:0` (default), `DataMerge` and `PrevColumnMerge` settings are ignored.
- `addRow` cannot be used within subtotal groups; rows can only be added outside the groups (top or bottom).

### Syntax

```javascript
sheet.makeSubTotal(subTotalRows, usermerge, excludeSubTotalRowCount);
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| subTotalRows | `array[object]` | Required | Configuration array for subtotal rows |
| usermerge | `boolean` | Optional | `0`: Do not execute merge behavior (default), `1`: Merge according to user-configured `DataMerge`, `PrevColumnMerge` |
| excludeSubTotalRowCount | `boolean` | Optional | `0`: Include subtotal/cumulative rows in SEQ and InfoRow count (default), `1`: Exclude |

### subTotalRows Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| stdCol | `string` | Required | Criteria column |
| sumCols | `string` | Optional | Column names for sum calculation (connected by `\|`) |
| avgCols | `string` | Optional | Column names for average calculation (connected by `\|`) |
| countCols | `string` | Optional | Column names for row count calculation (connected by `\|`) |
| color | `string` | Optional | Subtotal row background color |
| showCumulate | `boolean` | Optional | `0`: Do not show cumulative row (default), `1`: Show cumulative row |
| cumulateColor | `string` | Optional | Cumulative row background color |
| sort | `string` | Optional | `""`: No sorting (default), `"asc"`: Ascending, `"desc"`: Descending |
| position | `string` | Optional | `"bottom"`: Bottom of group (default), `"top"`: Top of group, `"bottomAll"`: Very bottom, `"topAll"`: Very top |
| mode | `number` | Optional | `0`: Show subtotal rows for all groups (default), `1`: Only groups with 2+ items, `2`: Only groups with 1+ items |
| hidden | `boolean` | Optional | `0`: Exclude Visible:0 rows from subtotal (default), `1`: Include |
| captionCol | `array[object]` | Optional | Caption configuration (see below) |

### captionCol Properties

| Property | Type | Description |
|----------|------|-------------|
| col | `string` | Column name where caption will be set (not applied to `sumCols`, `countCols`, `avgCols` calculation columns) |
| val | `string` \| `function` | Subtotal caption value |
| cumVal | `string` | Cumulative caption value |
| span | `number` | Column merge value based on captionCol's col |

**captionCol Reserved Words**

| Reserved Word | Description |
|---------------|-------------|
| `%s` | Represents 'Subtotal (Cumulative)' |
| `%col` | Outputs the subtotal criteria value |
| `%cnt` | Displays subtotal (cumulative) count |
| `%capCol` | Displays the last row value of the column set in col on the subtotal row |

### Basic Example

```javascript
Events: {
  onDataLoad: function(evt) {
    evt.sheet.makeSubTotal([
      {
        stdCol: "sPolicy",
        avgCols: "A|D",
        countCols: "E",
        showCumulate: 1,
        sort: "desc",
        captionCol: [
          { col: "sPolicy", val: "%s: %col" }
        ]
      },
      {
        stdCol: "sUnit",
        sumCols: "B|C",
        showCumulate: 1
      }
    ]);
  }
}
```

### captionCol Function Usage Example

```javascript
sheet.makeSubTotal([
  {
    stdCol: "sPolicy",
    sumCols: "A|B|C|D",
    position: "bottom",
    captionCol: [
      {
        col: "E",
        val: function(fr) {
          var val = (fr.Row["A"] + fr.Row["B"]) * 10;
          return "E: " + val + " percent!";
        }
      },
      {
        col: "F",
        val: function(fr) {
          return "1,000,000";  // Return numeric data with separators
        }
      }
    ]
  }
]);
```

### SEQ Exclusion and span Configuration Example

```javascript
sheet.makeSubTotal({
  subTotalRows: [
    {
      stdCol: "sPolicy",
      sumCols: "B|C|D",
      avgCols: "A",
      position: "bottom",
      captionCol: [
        { col: "sPolicy", val: "%s: %col", cumVal: "%s: %col", span: 3 },
        { col: "E", val: " ", cumVal: " ", span: 2 }
      ]
    }
  ],
  excludeSubTotalRowCount: 1  // Exclude subtotal/cumulative rows from SEQ
});
```

### Subtotal Cell Format (v8.0.0.25+)

Using `Def.SubSum`, you can apply formatting only to subtotal rows. Only the Format of columns set in `sumCols`, `avgCols`, and `countCols` can be changed.

```javascript
Def: {
  SubSum: {
    AFormat: "Total: #,##0.##",  // Text + decimal format for subtotal row cell A
    BFormat: "#,##0"              // Integer format for subtotal row cell B
  }
}
```

---

## SubTotal Related API Methods

### removeSubTotal

Removes all subtotal/cumulative rows from the ibsheet8.

```javascript
sheet.removeSubTotal();
```

### getSubTotalRows

Returns the generated subtotal/cumulative rows.

```javascript
var totalRows = sheet.getSubTotalRows();
// Return value: {
//   subTotal: [[Subtotal rows for first criteria column], [Subtotal rows for second criteria column], ...],
//   Total: [[Cumulative rows for first criteria column], [Cumulative rows for second criteria column], ...]
// }
```

---

## Comprehensive Example

An example that uses FormulaRow and makeSubTotal together.

```javascript
var options = {
  Cfg: {
    SearchMode: 0
  },
  Def: {
    SubSum: {
      BFormat: "#,##0",
      CFormat: "#,##0",
      DFormat: "#,##0"
    }
  },
  Cols: [
    { Header: "Policy Project", Name: "sPolicy", Type: "Text", Width: 140 },
    { Header: "Unit Project", Name: "sUnit", Type: "Text", Width: 140 },
    {
      Header: "Budget Amount", Name: "B", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",   // Display sum in Foot area
      Width: 120
    },
    {
      Header: "Execution Amount", Name: "C", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",
      Width: 120
    },
    {
      Header: "Balance", Name: "D", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",
      Width: 120
    },
    {
      Header: "Ratio", Name: "A", Type: "Float",
      FormulaRow: "Avg",   // Display average in Foot area
      Width: 100
    },
    {
      Header: "Count", Name: "E", Type: "Text",
      FormulaRow: "{Count} items",  // Display count in Foot area
      Width: 100
    }
  ],
  Events: {
    onDataLoad: function(evt) {
      // Add subtotal rows after data load
      evt.sheet.makeSubTotal([
        {
          stdCol: "sPolicy",
          sumCols: "B|C|D",
          avgCols: "A",
          countCols: "E",
          showCumulate: 1,
          sort: "asc",
          position: "bottom",
          color: "#E0F0FF",
          cumulateColor: "#FFE0E0",
          captionCol: [
            { col: "sPolicy", val: "%s: %col", cumVal: "Cumulative: %col" }
          ]
        }
      ]);
    }
  }
};
```

### Example Attribute Summary

| Attribute | Location | Description |
|-----------|----------|-------------|
| `FormulaRow: "Sum"` | Col | Display column sum in Foot area |
| `FormulaRow: "Avg"` | Col | Display column average in Foot area |
| `FormulaRow: "{Count} items"` | Col | Display count + text in Foot area |
| `Def.SubSum.BFormat` | Def | Specify format for subtotal row cell B |
| `stdCol: "sPolicy"` | makeSubTotal | Create subtotal based on Policy Project column |
| `sumCols: "B\|C\|D"` | makeSubTotal | Calculate sum for columns B, C, D |
| `avgCols: "A"` | makeSubTotal | Calculate average for column A |
| `showCumulate: 1` | makeSubTotal | Display cumulative rows as well |
| `captionCol` | makeSubTotal | Configure subtotal row caption |

---

## Notes

- **FormulaRow** cannot be used with `SearchMode:3, 4, 5`.
- **makeSubTotal** only supports `SearchMode:0, 2`.
- When calling makeSubTotal at data retrieval time, it must be used in the `onDataLoad` event.
- When using `usermerge:0` (default), `DataMerge` and `PrevColumnMerge` settings are ignored.
- `addRow` cannot be used within subtotal groups; rows can only be added outside the groups (top or bottom).
- `excludeSubTotalRowCount` does not work when using the server paging feature.
- For non-numeric columns, FormulaRow can only use `"Count"`.
