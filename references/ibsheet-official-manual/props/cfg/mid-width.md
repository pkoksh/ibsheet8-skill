---
KEY: midWidth
KIND: config-property
PATH: props/cfg/mid-width
ALIAS_EN: maximum, width, center, column, section, midwidth, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/mid-width
---
# MidWidth ***(cfg)***

> Sets the maximum width of the center column section. 

> A scrollbar is created when the columns in the column section exceed the set width.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|Total width of the center section|


### Example
```javascript
options = {
    Cols:[
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
      },
      ...
    ],
    Cfg :{
      MidWidth: 500,      // Set maximum width of the center column section
    }
};
```

### Read More
- [LeftWidth cfg](./left-width)
- [RightWidth cfg](./right-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
