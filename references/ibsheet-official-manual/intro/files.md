---
KEY: files
KIND: guide
PATH: intro/files
ALIAS_EN: file, structure
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/intro/files
---
# File Structure

## The IBSheet8 product consists of the following files and folders.


```
ibsheet root folder
├─ ibsheet.js      // ibsheet core file (required)
├─ ibleaders.js    // License file    (required)
│
├─ css             // CSS folder
│   ├─ default/main.css    // Default theme CSS file   (required)
│   ├─ meterial/main.css   // Material theme CSS file
│   ├─ simple/main.css     // Simple theme CSS file
│   ├─ mint/main.css       // Mint theme CSS file
│   └─ grace/main.css      // Grace theme CSS file
│
├─ loacle             // Multilingual message folder
│   ├─ ko.js    // Korean message file  (required)
│   └─ en.js    // English message file
│
├─ fonts         // Folder containing fonts (.ttf, .otf) used by ibsheet
│
└─ plugins       // Additional feature folder
  ├─ ibsheet-common.js    // File defining constants and functions for common feature settings
  ├─ ibsheet-dialog.js    // File defining various dialog features such as search, download, edit
  └─ ibsheet-excel.js     // File defining functions related to file import/export features
```

## The features of each file are as follows.

### *ibleaders.js*
A file containing the `product license` with the following content.
```javascript
var ibleaders = ibleaders || {};
ibleaders.license = "W2FtSztPKCBzbD8emM5ZzV7fAQnTXcJYS4gLHA0bXp0PTx1EGsBbEA6NicldTx+aXx0MG0IbRZ8HD1uL3srbz=";
```

### *ibsheet.js*
The core file of the product. The contents inside **`must never be modified`**.

Product version information is at the top of the file.

### *css(folder)*
The CSS file used by the sheet (`/css/default/main.css`) is located in this folder.

**`The CSS folder structure must not be changed`**.

 The css folder must exist in the same path as ibsheet.js.


<!--
### *css/compatible(folder)* - CSS for IE9 and below browsers
Icons displayed in the sheet (calendars, checkboxes, etc.) use base64 images (string-encoded SVG image strings) by default, but when using `gif` files, image icons and CSS file (`/css/compatible/light/main.css`) are located in this folder.
-->
### *locale(folder)*
Various constants used internally by the sheet and messages displayed to users are defined here.
* Korean: `/locale/ko.js`
* English: `/locale/en.js`

### *fonts(folder)*
Contains font files (`.ttf, .otf`) used by the sheet.

---

### *plugins(folder)*
Contains JS files that allow selective addition of necessary features.

|File Name|Description|
|-----|-----|
|`ibsheet-common.js`|Contains Preset variables with pre-defined settings for features to be commonly applied to all screen sheets or column features. 
Users can modify these as needed.|
|`ibsheet-excel.js`|A JavaScript file containing features related to Excel download/upload and text download/upload.
To use `down2Excel()` and `loadExcel()` functions, this file must always be included after the `ibsheet.js` file.

Required when calling documentation `Method` >> `Excel Plugin` functions.
![ibsheet-excel](/assets/imgs/ibsheet-excel.png "ibsheet-excel")
<!-- IMAGE: Sheet/Table View - ibsheet-excel -->|
|`ibsheet-dialog.js`|Contains plugins for various dialogs available in the sheet, such as search dialog (Ctrl+F), detail view dialog, and pivot dialog.
 Users can modify these as needed.

Required when calling documentation `Method` >> `Dialog Plugin` functions.
![ibsheet-dialog](/assets/imgs/ibsheet-dialog.png "ibsheet-dialog")
<!-- IMAGE: Sheet/Table View - ibsheet-dialog -->|

