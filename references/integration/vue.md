# Vue Integration

This guide explains how to develop with IBSheet in a Vue environment.

## Development Steps

1. Import IBSheet JS files using ibsheet-loader
2. Create IBSheet object via the `<IBSheetVue>` component
3. Leverage TypeScript interfaces for development convenience

---

## 1. IBSheet JS File Import via ibsheet-loader

The ibsheet.js file is structured in a way that cannot be distributed through npmjs. Therefore, you need to copy the ibsheet.js and css files to the public folder and import the object through ibsheet-loader.

> If you directly include ibsheet.js or css files in the entry point HTML file, there is no need to use ibsheet-loader.

### 1.1 ibsheet-loader Installation

```bash
npm i @ibsheet/loader
```

### 1.2 Import ibsheet.js and Related Files Using the Loader

When using the loader, you do not need to directly import `ibsheet.js`, `plugin`, `locale`, or `css` files. (The loader handles the import.)

```js
import loader from '@ibsheet/loader'

const loaderOption = {
    name: 'ibsheet',
    baseUrl: '/ibsheet', // ibsheet.js file location (in Vue environment: /public/ibsheet/ibsheet.js file location)
    //theme: "mint",     // css file theme (uses /css/default/main.css if not set, optional)
    locales: ["en","ko"], // locale files (uses /locale/ko.js if not set, optional)
    plugins: [           // plugin files
        "dialog",
        "common",
        "excel"
    ],
    // ibsheet license string
    license: "YOUR_LICENSE_KEY"
};
loader.load(loaderOption); // Actually import the ibsheet files
```

**Notes:**
- The import via `loader.load()` should be performed **only once** on the main page (entry point).
- The ibsheet.js, css, locale, and plugin files must exist at the location specified by the `baseUrl` property.

---

## 2. ibsheet8 Object Creation Using IBSheetVue Component

### Supported Environment
- Node.js v18 or higher
- Vue 3 or higher

### 2.1 @ibsheet/vue Component Installation

```bash
npm i @ibsheet/vue
```

### 2.2 ibsheet8 Creation Using IBSheetVue Component

Create an ibsheet8 using the IBSheetVue component, and perform subsequent operations using the created object.

**[App.vue file]**
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { shallowRef } from 'vue';

// ref object to hold ibsheet8 object
const mySheet = shallowRef(null);

const sheetOptions = {
  Cfg: {
    Style: 'mint',
  },
  Cols: [
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 30 },
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
      console.log(`Value ${evt.oldval} has been changed to ${evt.val}.`);
    },
    // ibsheet8 creation complete event
    onRenderFirstFinish: (evt) => {
      // Fires only once when the ibsheet8 object is created.
      mySheet.value = evt.sheet; // Store created ibsheet8 object in ref
    },
  },
};

// Search data
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
];

// ibsheet8 object width/height style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = () => {
  mySheet.value.addRow();
};
const handleLoadData = () => {
  mySheet.value.loadSearchData(sheetData);
};
const handleGetData = () => {
  const saveData = mySheet.value.getSaveJson();
  if (saveData.data.length) {
    alert('Modified row data \n\n\n' + JSON.stringify(saveData));
  } else {
    if (saveData.Code == 'IBS000') {
      alert('No modified data.');
    } else if (saveData.Code == 'IBS010') {
      alert(
        `${saveData.col} column of row ${mySheet.value.getRowIndex(saveData.row)} is a required field.`
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

---

## 3. Vue + TypeScript Usage

You can use the TypeScript interfaces included in the @ibsheet/vue component.

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

// ref object to hold ibsheet8 object
const mySheet = shallowRef<IBSheetInstance>(null);

// ibsheet8 click event
const handleAfterClick: IBSheetEvents['onAfterClick'] = (evt) => {
  console.log(
    `Row ${evt.sheet.getRowIndex(evt.row)}, column ${evt.sheet.getString(
      evt.sheet.getRowById('Header'),
      evt.col
    )} was clicked.`
  );
};

// ibsheet8 object creation event (fires once when object is created)
const handleRenderFinish: IBSheetEvents['onRenderFirstFinish'] = (evt) => {
  mySheet.value = evt.sheet;
};

// ibsheet8 initialization statement
const sheetOptions: IBSheetOptions = {
  Cfg: {
    SearchMode: 0,
  },
  Def: {
    Col: { RelWidth: 1 },
  },
  Cols: [
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

const customStyle = {
  width: '500px',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = () => {
  mySheet.value.addRow();
};
const handleExportXls = () => {
  mySheet.value.exportData({ fileName: 'ibsheet_vue_typescript_example.xlsx' });
};
const handleLoadData = () => {
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

---

## 4. Note: onMounted and IBSheet Object Creation Timing

Since IBSheet objects are created asynchronously, the ibsheet8 creation may not be complete at the **onMounted** timing.

- The **onRenderFirstFinish** event fires after the IBSheet object creation is complete.
- To make the creation timing explicit, it is recommended to add **v-if** to the IBSheetVue component so that it is created after onMounted.

### Controlling ibsheet8 Creation Timing Using v-if

```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { ref, shallowRef, onMounted } from 'vue';

// ibsheet8 creation timing control
const createSheet = ref(false);

// ref object to hold ibsheet8 object
const mySheet = shallowRef(null);

const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const sheetOptions = {
  Cols: [
    { Header: 'No', Type: 'Int', Width: 50, Name: 'SEQ' },
    { Header: 'Name', Type: 'Text', Name: 'name', Width: 200 },
    { Header: 'Age', Type: 'Int', Name: 'age', Width: 100 },
  ],
  Events: {
    onRenderFirstFinish: (evt) => {
      // Always created after onMounted via v-if.
      mySheet.value = evt.sheet;
      mySheet.value.loadSearchData(sheetData);
    },
  },
};

const sheetData = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
];

// Screen mount timing (IBSheet object has not been created yet)
onMounted(async () => {
  // Perform screen initialization logic
  // Time-consuming tasks like fetching server data
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Create ibsheet8 object at the end of onMounted function via v-if
  createSheet.value = true;
});
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <IBSheetVue v-if="createSheet" :options="sheetOptions" :style="customStyle" />
</template>
```

---

## Reference

- Supported from IBSheet 8.3.0.0 version
