# IBSheet8 InfoRow (Pagination & Row Count Display)

> A feature that displays **page navigation**, **data count information**, **selection summary/average**, **status information**, etc. at the top or bottom of ibsheet8.

---

## 1. InfoRowConfig (cfg property)

Set via `Cfg.InfoRowConfig` in ibsheet8 options.

### Basic Structure

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging", "Count"],
        Space: "Bottom",
        Format: "[BOTTOMDATAROW / TOTALROWS]"
    }
};
```

### Key Options

| Option | Type | Description |
|------|------|------|
| **Visible** | `boolean` | Whether to display InfoRow. Default `true` for `SearchMode: 1,4,5`, default `false` for `SearchMode: 0,2,3` |
| **Layout** | `array` | List of cells to place in InfoRow (default: `["Paging", "Count"]`) |
| **Space** | `string` | InfoRow position. `"Top"` or `"Bottom"` (default: `"Bottom"`) |
| **Format** | `string` | Display format for Count cell (default: `[BOTTOMDATAROW / TOTALROWS]`) |
| **ViewCount** | `number` | Whether to show PageLength change selectBox when using Paging2. `0`: hidden (default), `1`: shown |
| **ViewFormat** | `string` | ViewCount selectBox option configuration. Format like `"10\|20\|30\|40\|50"`. Default when not set: `"10\|20\|30\|50\|100"` |
| **Paging2Count** | `number` | Number of page numbers displayed in Paging2 (default: `5`, max: `10`) |

### Layout Reserved Words

| Reserved Word | Description |
|--------|------|
| **Paging** | Page navigation (e.g., `1/1,000`). Works in `SearchMode: 1,4,5` |
| **Paging2** | Numeric page navigation. **Cannot be used simultaneously with Paging** |
| **Count** | Display data count information |
| **SummaryLabel** | Display sum/average information for the selected area |
| **StatusLabel** | Display data editing, retrieval, row movement, filtering, sorting, etc. status information |
| User string | Arbitrary text. HTML tags (`<Span>`, `<Div>`, etc.) can be used |
| `object` format | Use cell-level properties such as Type, CanFocus to enable desired functionality (e.g., `{Type: "Bool", Width: 50, RelWidth: 0, OnClick:function(evt){} }`) |

### Format Reserved Words

| Reserved Word | Description |
|--------|------|
| `TOTALROWS` | (Server paging) Total data count |
| `ROWCOUNT` | Retrieved data count |
| `VISIBLECOUNT` | Visible data count |
| `ADDROWS` | Added data count |
| `CHANGEROWS` | Changed data count |
| `DELETEROWS` | Deleted data count |
| `BOTTOMDATAROW` | Number of the last currently visible row |

---

## 2. Usage Examples

### Basic Paging + Count Display

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging", "Count"],
        Space: "Bottom",
        Format: "CHANGEROWS rows have been modified."
    }
};
```

### Paging2 + ViewCount selectBox

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging2", "Count"],
        ViewCount: 1,
        ViewFormat: "10|20|30|40|50",
        Paging2Count: 8,
        Space: "Bottom"
    }
};
```

### Custom Cells (HTML, Text) Mixed

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: [
            "Paging",
            "<div style='background-color:#FFFFAA'>E-HR System [DEV]</div>",
            "ABC",
            "Count"
        ],
        Space: "Bottom"
    }
};
```

### Adding Button Cell

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: [
            {
                Value: "Confirm",
                Type: "Button",
                TextColor: "#FFFFFF",
                Color: "#53629E",
                RelWidth: 0,
                Width: 100,
                OnClick: function() { alert("Confirm"); }
            },
            "Count"
        ],
        Space: "Top"
    }
};
```

---

## 3. Methods for Displaying Information in External DOM

Instead of InfoRow, information can be output to DOM elements outside ibsheet8.

### setCountInfoElement

Display data row count information in an external DOM.

```javascript
// Usage
sheet.setCountInfoElement('countElem');
sheet.setCountInfoElement(document.getElementById('countElem'));
// Return value: boolean (true: success, false: failure)
```

### setSelectionSummaryInfoElement

Display cell count and sum/average information for the selected area in an external DOM.

```javascript
var option = {
    Mode: "DelRow|AllRange",
    SumFormat: "#,###"
};
sheet.setSelectionSummaryInfoElement('summaryElem', option);
sheet.setSelectionSummaryInfoElement(document.getElementById('summaryElem'), option);
// Return value: boolean (true: success, false: failure)
```

> The `opt` parameter uses settings from the [SelectionSummary cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selection-summary) options excluding `Align` and `Width`.

---

## 4. Related References

- [InfoRowConfig cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/info-row-config)
- [SearchMode cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-mode)
- [SelectionSummary cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selection-summary)
- [setInfoRow method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-info-row)
- [setCountInfoElement method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-count-info-element)
- [setSelectionSummaryInfoElement method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-selection-summary-info-element)
- [Demo: InfoRowConfig](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/InfoRowConfig/)
