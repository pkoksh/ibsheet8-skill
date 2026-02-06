---
KEY: spaVue
KIND: appendix
PATH: appx/spa-vue
ALIAS_EN: guide, explains, develop, ibsheet, vue, environment, developing, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/spa-vue
---
# Developing IBSheet in Vue Environment ***(appendix)***

> This guide explains how to develop IBSheet in a Vue environment.
>
> The development steps are as follows.
> 1. Import IBSheet js files using ibsheet-loader
> 2. Create IBSheet objects through the <IBSheetVue> component
> 3. Secure development convenience through interfaces when using typescript


## 1. Importing IBSheet js Files through ibsheet-loader

The ibsheet.js file has a structure that cannot be distributed through npmjs. Therefore, we provide a method to copy ibsheet.js and css files to the public folder and import objects through ibsheet-loader.

**If you directly include ibsheet.js or css files in the html file corresponding to the entry point, you do not need to use ibsheet-loader.**


### 1.1 Installing ibsheet-loader


#### using npm([Official](https://nodejs.org/))
```bash
$ npm i @ibsheet/loader
```



### 1.2 Importing ibsheet.js and Related Files Using loader
When using the loader, you do not need to import `ibsheet.js`, `plugin`, `locale`, or `css` files. (The loader imports them.)

```js
import loader from '@ibsheet/loader'

const loaderOption = {
    name: 'ibsheet',
    baseUrl: '/ibsheet', // ibsheet.js file location (in Vue environment, this means /public/ibsheet/ibsheet.js is located there)
    //theme: "mint",  // css file theme  (uses /css/default/main.css if not set, can be omitted)
    locales: ["en","ko"], // locale files (uses /locale/ko.js if not set, can be omitted)
    plugins: [  // plugin files
        "dialog",
        "common",
        "excel"
    ],
    // ibsheet license string
    license: "W2FtSztPKCJzazYxYjJxbn8QYkI6Rjd0ODh4bDBkLWMrKwQnTXcJYS4gXTwlZjF5AhpYJ3FCPxMjPWVgMWYydA=="
};
loader.load(loaderOption); // Actually import the ibsheet files
```
- Import through `loader.load()` only needs to be done **once** on the main page (entry point).
- ibsheet.js, css, locale, and plugins files must be present at the location specified by the `baseUrl<public/path>` property.



## 2. Creating ibsheet Objects Using IBSheetVue Component

### This component is <mark>supported in Vue 3 or higher compatible with Node.js v18 or higher</mark>.

### 2.1 Installing @ibsheet/vue Component

#### using npm([Official](https://nodejs.org/))
```bash
npm i @ibsheet/vue
```

### 2.2 Creating a Sheet Using IBSheetVue Component

Create a sheet using the IBSheetVue component and perform subsequent operations (add row function) using the created object.

[App.vue file]
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { shallowRef } from 'vue';

// Ref object to hold the sheet object
const mySheet = shallowRef(null);

const sheetOptions = {
  // Your IBSheet configuration options
  Cfg: {
    Style: 'mint',
  },
  Cols: [
    // Header title,   Column type,    Column name,    Column width ratio
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 30 },
    //                                                           Required input,  Max input characters
    {
      Header: 'Name',
      Type: 'Text',
      Name: 'name',
      RelWidth: 120,
      Required: 1,
      Size: 10,
    },
    { Header: 'Age', Type: 'Int', Name: 'age', RelWidth: 60 },
    { Header: 'Ymd', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, RelWidth: 110 },
  ],
  Events: {
    // Value change event
    onBeforeChange: (evt) => {
      console.log(`${evt.oldval} value has been changed to ${evt.val}.`);
    },
    // Sheet creation complete event
    onRenderFirstFinish: (evt) => {
      // Triggered only once when the sheet object is created.
      mySheet.value = evt.sheet; // Store the created sheet object in the ref object
    },
  },
};

// Search data
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
];

// Sheet object width/height style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = (evt) => {
  // Add row
  mySheet.value.addRow();
};
const handleLoadData = (evt) => {
  // Load data
  mySheet.value.loadSearchData(sheetData);
};
const handleGetData = (evt) => {
  //               Extract modified data
  const saveData = mySheet.value.getSaveJson();
  // Normal processing
  if (saveData.data.length) {
    alert('Modified row data \n\n\n' + JSON.stringify(saveData));
  } else {
    // Error occurred
    if (saveData.Code == 'IBS000') {
      alert('No modified data exists.');
    } else if (saveData.Code == 'IBS010') {
      alert(
        `The ${
          saveData.col
        } column in row ${mySheet.value.getRowIndex(saveData.row)} is a required field.`
      );
    }
  }
};
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <div class="btn">
    <button @click="handleAddRow">Add Row</button>
    <button @click="handleGetData">Check Modified Data</button>
    <button @click="handleLoadData">Load Data</button>
  </div>
  <IBSheetVue :options="sheetOptions" :style="customStyle" />
</template>
```
[Vue example](https://stackblitz.com/edit/vitejs-vite-brpanol5)

<mark>[Cautions regarding IBSheet object creation timing](./spa-vue-caution)</mark>


## 3. Using IBSheet Interface for Vue + TypeScript Development
You can use the typescript interface included in the @ibsheet/vue component.

The process of loading ibsheet js files through ibsheet-loader in step 1 remains the same.

```html
<script setup lang="ts">
import {
  IBSheetVue,
  IB_Preset,
  type IBSheetInstance,
  type IBSheetOptions,
  type IBSheetEvents,
} from '@ibsheet/vue';
import { shallowRef } from 'vue';

// Ref object to hold the sheet object
const mySheet = shallowRef<IBSheetInstance>(null);

// Sheet click event
const handleAfterClick: IBSheetEvents['onAfterClick'] = (evt) => {
  console.log(
    `Row ${evt.sheet.getRowIndex(evt.row)}, column ${evt.sheet.getString(
      evt.sheet.getRowById('Header'),
      evt.col
    )} has been clicked.`
  );
};
// Sheet object creation event (triggered once when the object is created)
const handleRenderFinish: IBSheetEvents['onRenderFirstFinish'] = (evt) => {
  // Store the created sheet object in the ref object
  mySheet.value = evt.sheet;
};

// Sheet initialization syntax
const sheetOptions: IBSheetOptions = {
  // Your IBSheet configuration options
  Cfg: {
    SearchMode: 0,
  },
  Def: {
    Col: { RelWidth: 1 },
  },
  Cols: [
    // Header title,  Column type (required), Column name (required), Column width ratio
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 50 },
    {
      Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center' },
      Type: 'Bool',
      Name: 'CHK',
      CanSort: 0,
      RelWidth: 50,
    },
    { Header: 'Name', Type: 'Text', Name: 'name', RelWidth: 200 },
    { Header: 'Age', Type: 'Int', Name: 'age', RelWidth: 100 },
    {
      Header: 'Hire Date',
      Name: 'sDate_Ymd',
      Extend: IB_Preset.YMD,
      RelWidth: 120,
    },
  ],
  Events: {
    onAfterClick: handleAfterClick,
    onRenderFirstFinish: handleRenderFinish,
  },
};
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
];

// Sheet object width, height
const customStyle = {
  width: '500px',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = () => {
  // Add new row
  mySheet.value.addRow();
};
const handleExportXls = () => {
  // Excel download (using client module)
  mySheet.value.exportData({ fileName: 'ibsheet_vue_typescript_example.xlsx' });
};
const handleLoadData = () => {
  // Load data
  mySheet.value.loadSearchData(sheetData);
};
</script>

<template>
  <div class="btn">
    <button @click="handleAddRow">Add Row</button>
    <button @click="handleLoadData">Load Data</button>
    <button @click="handleExportXls">Export Xls</button>
  </div>
  <IBSheetVue :options="sheetOptions" :style="customStyle" />
</template>

```
[Vue+TypeScript example](https://stackblitz.com/edit/vitejs-vite-fx91nwtn)
### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
