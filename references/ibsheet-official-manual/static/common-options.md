---
KEY: commonOptions
KIND: static-member
PATH: static/common-options
ALIAS_EN: initial, property, values, commonly, applied, sheets, commonoptions, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/common-options
---
# CommonOptions ***(static)***

> Sets initial property values to be commonly applied to all sheets.

> The values set here are merged with the sheet initial values set on each screen to create the sheet.

> If the values set in `CommonOptions` differ from the sheet initial values defined on each screen, the sheet initial values set on the screen will be applied as the final values.


### Type
`object`

### Options
`Cfg, Def, Event` setting values that you want to apply uniformly to all sheets

(Typically this property is set in the `/plugins/ibsheet-common.js` file)


### Example
```javascript
// Must be set after the ibsheet.js file is loaded.
IBSheet.CommonOptions = {
  Cfg:{
    Export: {Url: "./jsp/Down2Excel.jsp"}, // Excel download URL
    Alternate: 2,   // Background color setting for odd/even rows
    InfoRowConfig: {Visible: 1, Layout: ["Count"], Space: "Top"} // Row count information display
  },
  Def:{
    Row:{ // Common row settings
      Menu:{
        "Items": [
          {"Name": "Excel Download", "Value": "xls"},
          {"Name": "Text Download", "Value": "txt"},
          {"Name": "PDF Download", "Value": "pdf"},
        ],
        "OnSave":function (item,data) {
          switch (item.Value) {
            case 'xls':
                this.Sheet.down2Excel();
              break;
            case 'txt':
                this.Sheet.down2Text();
              break;
            case 'pdf':
                this.Sheet.down2Pdf();
              break;
          }
        }
      }//end Menu
    }//end Row
  }//end Def
};

```
### Read More
 - [IBSheet.create static](./create)
 - [IBSheet.onBeforeCreate static](./on-before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
