---
KEY: sectionCanResize
KIND: config-property
PATH: props/cfg/section-can-resize
ALIAS_EN: whether, user, adjust, section, widths, dragging, sections, sectioncanresize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/section-can-resize
---
# SectionCanResize ***(cfg)***

> Sets whether the user can adjust section widths by dragging between sections. 

> When this option is set, a Splitter area is created between sections.

> The section width adjustment feature works when the left fixed column section (`LeftCols`) and right fixed column section (`RightCols`) are set, and horizontal scrolls appear in each section.

> When section width adjustment is enabled, the mouse pointer shape changes when hovering over the Splitter area, and [LeftWidth](./left-width), [MidWidth](./mid-width), and [RightWidth](./right-width) set in Cfg are automatically adjusted when width is changed. 


###
![Width Adjustment](/assets/imgs/section3.png)
<!-- IMAGE: Screenshot/Example Image - Width Adjustment -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Width cannot be adjusted (`default`)|
|`1`|Always adjustable when there is a scrollbar in the left, center, or right section|

### Example
```javascript
options = {

    Cfg :{
      SectionCanResize: 1      // Allow left, center, right section width adjustment
    },
    LeftCols:[
      {
        // Column header settings
        Header: {
          Value: "No" // Title value displayed in the cell corresponding to the SEQ column in the header row
        },
        Name: "SEQ", // Column showing row order, sequence numbers are automatically generated in the sheet
      }
    ],
     Cols:[
      {
        Header: {
          Value: "This Year Sales"
        },
        Name: "sYear",
        Type: "Int",
        Format: "#,##0"
      },
    ...
    ],
    RightCols:[
      {
        Header: {
          Value: "Company Name"
        },
        Name: "sCompany",
        Type: "Text",
      },
    ...
    ]
};
```

### Read More
- [LeftWidth cfg](./left-width)
- [MidWidth cfg](./mid-width)
- [RightWidth cfg](./right-width)
- [setFixedCols method](/docs/funcs/core/set-fixed-cols)
- [setFixedLeft method](/docs/funcs/core/set-fixed-left)
- [setFixedRight method](/docs/funcs/core/set-fixed-right)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
