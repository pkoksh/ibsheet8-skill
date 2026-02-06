---
KEY: styleRowConfig
KIND: config-property
PATH: props/cfg/style-row-config
ALIAS_EN: you, sheet, style, separate, row, top, bottom, stylerowconfig
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/style-row-config
---
# StyleRowConfig ***(cfg)***
> You can set the sheet's style through a separate row at the top or bottom of the sheet.

> You can set the method for saving style information through `StorageType`.


### Type
`object`

### Options
|Value|Type|Description|
|----------|-----|---|
|Visible|`boolean`| Whether to display on screen
`true`: Display
`false`: Do not display |
|StorageType|`number`|Storage type for saving and using style information
`0`: Do not use save feature (`default`)
`1`: Local storage ([StorageSession](/docs/props/cfg/storage-session) must be set for it to work.) 
`2`: Send style information to the address specified in the `ServerUrl` parameter|
|ServerUrl|`string`|Address to communicate style information when `StorageType`: 2
When loading styles, it is sent via GET method, and when saving styles, it is sent via POST method.|
|AutoLoad|`boolean`|Whether to load saved styles when the sheet is created (`default`: true)|
|Themes|`object`|List of themes to display in the style row
Automatically included when the sheet's default theme CSS file is loaded.|
|Extend|`boolean`| Whether the 'Header Row' and 'Data Row' buttons are expanded on initial rendering (`default`: true)|
|Layout|`Array`|Sets the order and types of buttons in the style row.
default: `["Init", "Save", "Load", "ApplyAll"]`
`Init`: Initializes styles applied to the sheet and deletes style information for the sheet's id.
`Save`: Saves style information with the sheet's id.
`Load`: Loads style information corresponding to the sheet's id.
`ApplyAll`: Applies styles to sheets set with the same `StorageType` and saves information with the id "IB_Style".
`InitAll`: Initializes styles for sheets set with the same `StorageType` and deletes information corresponding to "IB_Style".|

![StyleRowConfig](/assets/imgs/styleRow.png "StyleRowConfig")
<!-- IMAGE: Screenshot/Example Image - StyleRowConfig -->

### Example
```javascript
options.Cfg = {
  StyleRowConfig: {
    Visible: true,
    StorageType: 2,
    ServerUrl: "./ibsheet/styleInfo.jsp",
    AutoLoad: true,
    Themes: {
      Mono: "./assets/ibsheet/css/mono/main.css", // Need to modify classes in the CSS file to match the key
      IBGY: "./assets/ibsheet/css/gray/main.css"
    }
  }
};
```
#### Server communication data structure example
> The style information exchanged with the server during save/load has the following JSON structure.
```js
{
  "AlternateColor": "#cfd3d1",        // Alternating background color for data rows
  "HeaderColor": "#b4e0e4",           // Header background color
  "HeaderTextColor": "#000000",       // Header text color
  "HeaderTextSize": "20",             // Header text size (px)
  "RowTextSize": "14",                // Data row text size (px)
  "Theme": "IBMT",                    // Applied theme name
  "id": "sheet2"                      // Sheet unique ID
}
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|Feature added|
|core|8.3.0.33|`Layout` option added|
