---
KEY: getSelectionSummaryInfoElement
KIND: method
PATH: funcs/core/get-selection-summary-info-element
ALIAS: sheet.getSelectionSummaryInfoElement, getSelectionSummaryInfoElement()
ALIAS_EN: selected, area, cell, count, sum, average, value, information
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/get-selection-summary-info-element
---
# getSelectionSummaryInfoElement ***(method)***

> When the selected area's cell count and sum/average value information is displayed in a Dom Element outside the sheet, returns the Dom Element where the information is output.


### Syntax
```javascript
HTML Element getCountInfoElement ();
```

### Return Value
***object*** : Dom Element where the selected area's cell count and sum/average value information is output

### Example
```javascript
// Check the Dom Element where the selected area's cell count and sum/average value information is output
sheet.getSelectionSummaryInfoElement ();
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)
- [setSelectionSummaryInfoElement method](./set-selection-summary-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|Feature added|
