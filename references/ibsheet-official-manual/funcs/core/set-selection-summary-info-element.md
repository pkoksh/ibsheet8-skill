---
KEY: setSelectionSummaryInfoElement
KIND: method
PATH: funcs/core/set-selection-summary-info-element
ALIAS: sheet.setSelectionSummaryInfoElement, setSelectionSummaryInfoElement()
ALIAS_EN: displays, selected, area, cell, count, sum, average, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-selection-summary-info-element
---
# setSelectionSummaryInfoElement ***(method)***

> Displays the selected area's cell count and sum/average value information in a Dom Element outside the sheet.


### Syntax
```javascript
boolean setCountInfoElement ( element, opt );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|element |`object` \| `string`|Required| Dom Element or its id to display the selected area's cell count and sum/average value information|
|opt |`object`|Optional| [SelectionSummary cfg](/docs/props/cfg/selection-summary) option information
`Align`, `Width` excluded|

### Return Value
***boolean*** : `true`: Successfully displayed in the external Dom Element, `false`: Failed

### Example
```javascript
var option = {
    "Mode": "DelRow|AllRange",
    "SumFormat":"#,###"
}
// Set the div with id 'countElem' to output the selected area's cell count and sum/average value information
sheet.setSelectionSummaryInfoElement ( 'countElem' , option  );
sheet.setSelectionSummaryInfoElement ( docuemnt.getElementById('countElem') , option  );
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)
- [getSelectionSummaryInfoElement method](./get-selection-summary-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|Feature added|
