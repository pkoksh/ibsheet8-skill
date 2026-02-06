---
KEY: leftWidth
KIND: config-property
PATH: props/cfg/left-width
ALIAS_EN: maximum, width, left, fixed, column, section, leftwidth, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/left-width
---
# LeftWidth ***(cfg)***

> Sets the maximum width of the left fixed column section. 

> A scrollbar is created when the columns in the left fixed column section exceed the set width.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Total width of the left section|


### Example
```javascript
options = {
  LeftCols:[
    {
      // Column header settings
      Header: {
        Value: "No" // Title value displayed in the cell corresponding to the SEQ column in the header row
      },
      Name: "SEQ", // Column showing row order, sequence numbers are automatically generated in the sheet
    },
    { // Column header settings
      Header: {
        Value: "Company Name 3" // Title value displayed in the cell corresponding to the sCorp column in the header row
      },
      Name: "sCorp",    // Set column name (matches with Data)
      Type: "Text"      // Column type
    }
  ],
  Cfg :{
    LeftWidth:150      // Set maximum width of the left fixed column section
  }
};
```

### Read More
- [LeftWidth cfg](./left-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
