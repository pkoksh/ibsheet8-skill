---
KEY: rightWidth
KIND: config-property
PATH: props/cfg/right-width
ALIAS_EN: maximum, width, right, fixed, column, section, rightwidth, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/right-width
---
# RightWidth ***(cfg)***

> Sets the maximum width of the right fixed column section. 

> A scrollbar is created when the columns in the right column section exceed the set width.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Total width of the right section|


### Example
```javascript
options = {
    RightCols:[
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
      RightWidth:200,      // Set maximum width of the right column section
    }
};
```

### Read More
- [MidWidth cfg](./mid-width)
- [LeftWidth cfg](./left-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
