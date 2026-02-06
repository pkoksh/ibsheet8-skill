---
KEY: menu
KIND: config-property
PATH: props/cfg/menu
ALIAS_EN: context, menu, displayed, right, clicking, mouse, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/menu
---
# Menu ***(Cfg)***
> Sets the context menu displayed when right-clicking the mouse.

> Displayed on all rows of the sheet except `InfoRow`.

### Type
`mixed`( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies a context menu string with the first character as a delimiter (ex: @Save@Temp Save@Cancel or *Submit*Cancel) |
|`object`|[Refer to Menu Object configuration link](/docs/appx/menu)

### Example
```javascript
// When setting as a string
options.Cfg = {
  Menu: "|Add Row|Hide Row|Delete Row"
};

// When setting as an object
options.Cfg = {
  Menu: {
    Items: [
      { Name: "Excel", Value: "xls" },
      { Name: "text", Value: "txt" },
      { Name: "pdf", Value: "pdf" },
    ],
    OnSave: function (item, data) {
      switch(item.Value){
        case 'xls':
          try{
            this.Sheet.down2Excel({FileName:"test.xlsx",SheetDesign:1});
          }catch(e){
            if(e.message.indexOf("down2Excel is not a function")>-1){
                console.log("%c Warning","color:#FF0000"," : ibsheet-excel.js file is required.");
            }
          }
          break;
        case 'txt':
          try{
            this.Sheet.down2Text();
          }catch(e){
            if(e.message.indexOf("down2Text is not a function")>-1){
              console.log("%c Warning","color:#FF0000"," : ibsheet-excel.js file is required.");
            }
          }
          break;
        case 'pdf':
          try{
            this.Sheet.down2Pdf();
          }catch(e){
            if(e.message.indexOf("down2Pdf is not a function")>-1){
              console.log("%c Warning","color:#FF0000"," : ibsheet-excel.js file is required.");
            }
          }
          break;
      }
    };
  }
};
```

### Read More
- [Menu appendix](/docs/appx/menu)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
