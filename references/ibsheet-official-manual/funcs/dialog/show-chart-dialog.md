---
KEY: showChartDialog
KIND: method
PATH: funcs/dialog/show-chart-dialog
ALIAS: sheet.showChartDialog, showChartDialog()
ALIAS_EN: displays, dialog, window, creates, chart, based, selected, area
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/dialog/show-chart-dialog
---
# showChartDialog ***(method)***

> Displays a dialog window that creates a chart based on the selected area of the sheet.

>
> <mark>This function requires the `"/plugins/ibsheet-dialog.js"` file and `IBChart` to be included.</mark>

> Detailed modifications to the dialog can be made through the `ibsheet-dialog.js` file.

### Detailed Description
> The chart type can be specified using the `chartType` argument when creating the dialog.

> The selected area must include `Int` or `Float` numeric type columns.

> Only `Text`, `Lines`, and `Enum` [Type](/docs/appx/type) columns are set as categories.

> If a hidden column exists within the selected area, the dialog will not be created.

> Cannot be used when `MultiRecord` is in use.


### Screen Description
![download](../../../assets/imgs/showChartDialog.png)
<!-- IMAGE: Screenshot/Example Image - download -->

#### Dialog button menu
![download](../../../assets/imgs/showChartDialog_menu2.png)
<!-- IMAGE: Screenshot/Example Image - download -->
> Clicking the download button allows you to download the chart as an image or Excel file.

> Clicking the settings button displays the related menu.

> When the settings menu is open, the zoom in/out button becomes available.

> Clicking the zoom in/out button enlarges the dialog to the size of the browser window.

#### Settings button menu
##### 1. Chart type
![download](../../../assets/imgs/showChartDialog_menu3.png)
<!-- IMAGE: Screenshot/Example Image - download -->
> You can change the chart type.
##### 2. Chart data
![download](../../../assets/imgs/showChartDialog_menu4.png)
<!-- IMAGE: Screenshot/Example Image - download -->
> 1. Category: Can be set based on the horizontal axis.

> 2. Data area: Can be set based on the vertical axis.

> 3. Select entire area: Creates the chart using data from all rows currently displayed on the sheet screen, not just the rows selected when calling `showChartDialog`.
##### 3. Other settings
![download](../../../assets/imgs/showChartDialog_menu5.png)
<!-- IMAGE: Screenshot/Example Image - download -->
> 1. Tooltip/data label usage: Can show or hide chart tooltips/data labels.

> 2. Color palette: Can change the chart colors.

> 3. Legend position: Can set the display position of the legend.

> 4. Data pivot: Swaps the horizontal axis and vertical axis bases.

### Syntax
```javascript
void showChartDialog(chartType);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|chartType|`string`|Optional|Chart type (`default: line`)|
<!--!
|`[Private]`exrtaOpt|`object`|Optional|Initial settings for chart ([IBChart Reference](https://docs.ibsheet.com/ibchart/v1/manual/#docs/intro/feature))|
!-->

### chartType Options
|Value|Description|
|----------|-----|
|`line`|Standard line chart|
|`spline`|Curved line chart|
|`lineStep`|Step line chart|
|`column`|Standard vertical bar chart|
|`columnStacked`|Stacked vertical bar chart|
|`columnStacked100`|100% stacked vertical bar chart|
|`bar`|Standard horizontal bar chart|
|`barStacked`|Stacked horizontal bar chart|
|`barStacked100`|100% stacked horizontal bar chart|
|`pie`|Pie chart|
|`doughnut`|Doughnut chart|
|`area`|Standard area chart|
|`areaStacked`|Stacked area chart|
|`areaStacked100`|100% stacked area chart|
|`combination1`|Vertical bar + area chart|
|`combination2`|Vertical bar + curved line chart|

### Return Value
***none***

### Example
```javascript
// Create a bar chart
sheet.showChartDialog("bar");

// Create a line chart
sheet.showChartDialog("line");
```
<!--!
```javascript
var extraOpt = {
  chart : {
    backgroundColor : "#EDEDED",
    type : "column",
    style : {
      fontSize : "20px"
    }
  },
  legend : {
    layout : "vertical",
    align : "right",
    verticalAlign : "top"
  },
  plotOptions : {
    series : {
      shadow : false,
      dataLabels : {
        enabled : true,
        align : "center"
      }
    },
    column : {
      pointPadding : 0.02
    }
  },
  tooltip: {
    pointFormat: "{point.y} hPa"
  },
  yAxis: {
    labels: {
      format: "{value} test-scale"
    }
  }
}

sheet.showChartDialog("", extraOpt);
```
!-->

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|1.0.17|Feature added|
