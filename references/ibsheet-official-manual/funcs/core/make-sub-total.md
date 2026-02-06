---
KEY: makeSubTotal
KIND: method
PATH: funcs/core/make-sub-total
ALIAS: sheet.makeSubTotal, makeSubTotal()
ALIAS_EN: adds, subtotal, cumulative, total, rows, sheet, based, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/make-sub-total
---
# makeSubTotal ***(method)***
> Adds subtotal/cumulative total rows to the sheet based on the data of the base column.

> A description is displayed ("subtotal : value") in the column to the left of the base column, and for the first column, the description is displayed within that column. 

>
> Generally, for subtotals with merge `usermerge:0(default)`, merge is performed based on the `stdCol` column, and if multiple columns are specified, merge is performed based on each `stdCol`. 

> Rows where the value is the same as the previous row for the specified `stdCol` column are merged, operating the same as `DataMerge:1`.


> **<mark>Note</mark> : Only supported for `SearchMode`:`0, 2`** 

> **<mark>Note</mark> : When using subtotals during search, [onDataLoad (event)](/docs/events/on-Data-Load) event can be used.** 

> **<mark>Note</mark> : When using `usermerge:0(default)`, [DataMerge (cfg)](/docs/props/cfg/data-merge) and [PrevColumnMerge (cfg)](/docs/props/cfg/prev-column-merge) settings are ignored.** 

> **<mark>Note</mark> : `captionCol` usage may be affected by merge depending on the method used.** 

> **<mark>Note</mark> : For `addRow`, it cannot be used inside a subtotal group. Rows can only be added outside the subtotal applied area (at the very top or very bottom).** 

> **<mark>Note</mark> : `excludeSubTotalRowCount` does not work when using the server paging feature.** 


###
[Single subtotal]

![Single subtotal](/assets/imgs/makeSubTotal1.png)
<!-- IMAGE: Screenshot/Example Image - Single subtotal -->

[`stdCol`: Policy Project (Policy Project column with `CaptionCol` set), Unit Project (without `CaptionCol` set)]

![Single subtotal](/assets/imgs/makeSubTotal2.png)
<!-- IMAGE: Screenshot/Example Image - Single subtotal -->

[`stdCol`: Policy Project (Policy Project column with `CaptionCol` set), Unit Project (Policy Project column with `CaptionCol` set)]

![Single subtotal](/assets/imgs/makeSubTotal3.png)
<!-- IMAGE: Screenshot/Example Image - Single subtotal -->

[`stdCol`: Policy Project, `CaptionCol({col: 'Policy Project', val: '%s: %col'}, {col: 'Unit Project', val: '%capCol'}, {col: 'Detail Project', val: '%cnt'})`]

![captionCol](/assets/imgs/makeSubTotal_capCol.png)
<!-- IMAGE: Screenshot/Example Image - captionCol -->


### Syntax
```javascript
void makeSubTotal( subTotalRows, usermerge, excludeSubTotalRowCount );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|subTotalRows|`array[object]`|Required|Settings for the subtotal row. 
Enter an `object` **array**, and the properties of one array entry are described in the `subTotalRows` table below.|
|usermerge|`boolean`|Optional|Whether to use user-set `DataMerge` and `PrevColumnMerge` options for merge.
 **When `usermerge:1` is set and this function is called, merge is performed according to user-set `DataMerge` and `PrevColumnMerge`.**
`0(false)`:Merge operation not performed (`default`)
`1(true)`:Merge operation performed according to user-set merge conditions|
|excludeSubTotalRowCount|`boolean`|Optional|Whether to exclude subtotal and cumulative total rows from `SEQ` column and `InfoRow` row number count.
`0(false)`:Include subtotal and cumulative total rows in `SEQ` column and `InfoRow` row number count (`default`)
`1(true)`:Exclude subtotal and cumulative total rows from `SEQ` column and `InfoRow` row number count|

### subTotalRows
|Name|Type|Required|Description|
|----------|-----|---|----|
|stdCol|`string`|Required|Base column|
|sumCols|`string`|Optional|Column names to calculate subtotal (sum), connected with '\|' as a string|
|countCols|`string`|Optional|Column names to calculate the count of data rows for the subtotal row, connected with '\|' as a string
 When (Cfg)`CalcMergeMode` is set, a value must be set.|
|avgCols|`string`|Optional|Column names to calculate subtotal (average), connected with '\|' as a string|
|color|`string`|Optional|Background color of the subtotal row|
|showCumulate|`boolean`|Optional|Whether to display cumulative total row for subtotal
`0(false)`:Do not display cumulative total row for subtotal (`default`)
`1(true)`:Display cumulative total row for subtotal|
|cumulateColor|`string`|Optional|Background color of the cumulative total row|
|sort|`string`|Optional|Sort processing method for the base column 
`""`:Not used (`default`)
`"asc"`:Ascending sort
`"desc"`:Descending sort|
|position|`string`|Optional|Creation position of the subtotal row 
`"bottom"`:Display at the bottom of the group (`default`)
`"top"`:Display at the top of the group
`"bottomAll"`:Display at the very bottom
`"topAll"`:Display at the very top|
|captionCol|`array[object]`|Optional|Caption information settings.
An array of objects consisting of the caption column name and caption value.
`"col"`:Column name to set the caption (cannot be applied to columns with calculated values such as `sumCols, countCols, avgCols`.)
`"val"`:Subtotal caption value, supports formula operations in function form (for thousand separators in Number data, return with separators attached). `ex) [{col: 'Policy Project', val: '%s: %col'}, {col: 'Unit Project', val: function(fr) { return fr.Row['Unit Project'] + '%' }}]` 
`"cumVal"`:Cumulative total caption value
`"span"`: Determines the column merge value based on `captionCol`'s `col` in the subtotal row 

 **Reserved words available in captionCol** 
 `"%s"`: Reserved word meaning 'subtotal (cumulative total)' 
`"%col"`:Output the subtotal base value 
`"%cnt"`:Display the subtotal (cumulative total) count
`"%capCol"`:Display the last row's value of the column set in **col** on the subtotal row 

(`default: [ { col : "base column", val:"%s: %col" } ]`)|
|mode|`number`|Optional|Setting for how to display the subtotal row 
`0`:Display subtotal row for all target groups (`default`)
`1`:Display subtotal row only for target groups with 2 or more items
`2`:Display subtotal row only for target groups with 1 or more items
(The subtotal row is merely hidden, not uncreated.)|
|hidden|`boolean`|Optional|Whether to include `Visible:0(false)` rows in subtotal calculation
`0(false)`:Exclude `Visible:0(false)` rows from subtotal calculation target (`default: 0`)
`1(true)`:Include `Visible:0(false)` rows in subtotal calculation target|

### Return Value
***none***

### Example
```javascript

Events: {
 // When using subtotal with merge after search, set subtotal rows (use onDataLoad.)
  onDataLoad: function (evt) {
    evt.sheet.makeSubTotal([
        {
          stdCol: "sPolicy",
          avgCols: "A|D",
          countCols: "E",
          showCumulate: 1,
          sort: "desc",
          captionCol: [
            {
              col: 'sPolicy',
              val: '%s: %col'
            }
          ]
        }, {
          stdCol: "sUnit",
          sumCols: "B|C",
          showCumulate: 1,
        },
              .
              .
              .
    ]);
  }
}

sheet.makeSubTotal([
  {
    stdCol: 'sPolicy',
    sumCols: 'A|B|C|D',
    position: 'bottom',
    captionCol: [
      {
    // E cell formula operation
        col: 'E',
        val: function (fr) {
          var val = (fr.Row["A"] + fr.Row["B"]) * 10;
     return "E: " + val + " percent!"; // "E: 80 percent!"
        }
      },
      {
        col: 'F',
        val: function (fr) {
     return '1,000,000' // For Number data, must return with delimiter attached.
        }
      },
    ]
  }
]);

// Exclude subtotal and cumulative total rows from `SEQ`
sheet.makeSubTotal({
    subTotalRows:[
        {
	    stdCol: 'sPolicy',
	    sumCols: 'B|C|D',
	    avgCols: 'A',
	    position: 'bottom',
	    captionCol: [
		{
	           col: 'sPolicy',
		   val: '%s: %col',
		   cumVal: '%s: %col',
		   span: 3
		},
		{
		    col: 'E',
		    val: ' ',
		    cumVal: ' ',
   		    span: 2
		}
	    ],
	}
    ],
    excludeSubTotalRowCount:1
});

```

### Applying Format to subtotal cells (operates from version `8.0.0.25`) - Only the Format of columns set in sumCols, avgCols, countCols can be changed
```js
Def: {
 SubSum: { // When using Def.SubSum, Def properties are applied only to subtotal rows
  AFormat: 'total : #,##0.##', // Subtotal row A cell with total Text and float format applied
  BFormat: '#,##0' // Subtotal row B cell with integer format applied
  }
}

sheet.makeSubTotal([
  {
    stdCol: 'sPolicy',
    sumCols: 'B|C|D',
    avgCols: 'A',
    position: 'bottom',
    captionCol: [
      {
        col: 'sPolicy',
        val: '%s: %col',
        cumVal: '%s: %col',
        span: 3
      },
      {
        col: 'E',
        val: ' ',
        cumVal: ' ',
        span: 2
      }
    ],
  }
]);

//
sheet.makeSubTotal(
{
    subTotalRows:[
      {
        stdCol: 'sPolicy',
        sumCols: 'B|C|D',
        avgCols: 'A',
        position: 'bottom',
        captionCol: [
          {
            col: 'sPolicy',
            val: '%s: %col',
            cumVal: '%s: %col',
            span: 3
          },
          {
            col: 'E',
            val: ' ',
            cumVal: ' ',
            span: 2
          }
        ],
      }
    ],
    excludeSubTotalRowCount:1
}
);
```

### Read More
- [removeSubTotal method](./remove-sub-total)
- [getSubTotalRows method](./get-sub-total-rows)
- [NoCalculate row](/docs/props/row/no-calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.7|`mode` property added|
|core|8.0.0.11|`usermerge` Feature added|
|core|8.0.0.11|`%capCol` reserved word added|
|core|8.0.0.18|Manual content modified: This function must be called after search data is created. Therefore, it must be called in the [onSearchFinish (event)](/docs/events/on-search-finish) event or after search through button click event, etc. => When using subtotals during search, [onDataLoad (event)](/docs/events/on-Data-Load) event can be used.|
|core|8.0.0.22|`hidden` property added|
|core|8.1.0.78|`excludeSubTotalRowCount` Feature added|
