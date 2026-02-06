---
KEY: spaVueCaution
KIND: appendix
PATH: appx/spa-vue-caution
ALIAS_EN: cautions, developing, ibsheetvue, component, vue, environment, ibsheet, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/spa-vue-caution
---
# Cautions When Developing IBSheet in Vue Environment ***(appendix)***

> These are cautions when developing with the IBSheetVue component in a Vue environment.


## onMounted and IBSheet Object Creation

- Since the IBSheet object is created asynchronously, the sheet creation may not be completed at the **onMounted** point.
- The **onRenderFirstFinish** event is triggered after the IBSheet object creation is completed.
- To make the creation timing clear, it is recommended to add <mark>v-if</mark> to the IBSheetVue component so that it is created after onMounted.


[App.vue file]
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { ref, shallowRef, onMounted } from 'vue';
import { sheetData } from './data.js';

// Sheet creation timing
const createSheet = ref(false);

// Ref object to hold the sheet object
const mySheet = shallowRef(null);

// Sheet object width/height style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const sheetOptions = {
  LeftCols: [
    {
      Header: 'No',
      Type: 'Int',
      Width: 50,
      Align: 'Center',
      Name: 'SEQ',
      CanMove: 0,
      CanFocus: 0,
    },
  ],
  // Center (main) column settings
  Cols: [
    {
      Header: 'Select',
      Type: 'Bool',
      Name: 'CHK',
      Width: '50',
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: 'Loan Contract No.',
      Type: 'Text',
      Name: 'CONTRACTNO',
      Width: '120',
      Align: 'Center',
      CanEdit: 0,
    },
    {
      Header: 'Loan Branch',
      Type: 'Text',
      Name: 'DELIVERYDEPTNAME',
      Width: '120',
      Align: 'Center',
      CanEdit: 0,
      TextColor: 'BLUE',
    },
    {
      Header: 'Vehicle No.',
      Type: 'Text',
      Name: 'CARNO',
      Width: '120',
      Align: 'Center',
      CanEdit: 1,
      Tip: 1,
    },
    {
      Header: 'Car Name (Full Name)',
      Type: 'Text',
      Name: 'CARNAMEMSTNAME',
      Width: '200',
      Align: 'Left',
      CanEdit: 1,
    },
    {
      Header: '24-Hour Base Rate',
      Type: 'Float',
      Name: 'RENTFEE',
      Width: '120',
      Align: 'Right',
      CanEmpty: 1,
      Format: ',#.##',
    },
    {
      Header: 'Release Date',
      Type: 'Date',
      Name: 'RENTDATE',
      Width: '100',
      Align: 'Center',
      Format: 'yyyy/MM/dd',
      DataFormat: 'yyyyMMdd',
      CanEdit: 0,
    },
    {
      Header: 'Return Date',
      Type: 'Date',
      Name: 'RETURNDATE',
      Width: '100',
      Align: 'Center',
      Format: 'yyyy/MM/dd',
      DataFormat: 'yyyyMMdd',
      CanEdit: 0,
    },
    {
      Header: 'Loan Type',
      Type: 'Text',
      Name: 'PROMOCODE',
      Width: '100',
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: 'Order',
      Type: 'Text',
      Name: 'NO',
      Width: '50',
      Align: 'Center',
      DefaultValue: 'defaultValue',
    },
    {
      Header: 'Discount Rate',
      Type: 'Int',
      Name: 'DISCOUNTRATE',
      Width: '50',
      Align: 'Center',
      Format: '#,##0',
      CanEdit: 1,
    },
  ],
  Events: {
    // Sheet creation complete event
    onRenderFirstFinish: (evt) => {
      // Triggered only once when the sheet object is created.
      // Always created after onMounted through v-if.
      mySheet.value = evt.sheet; // Store the created sheet object in the ref object
      mySheet.value.loadSearchData(sheetData);
    },
  },
};

// Screen mount timing (before the IBSheet object is created)
onMounted(async () => {
  // Execute screen initialization logic
  // ....
  // Fetch server data (assuming there is a time-consuming task)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Create the sheet object at the end of the onMounted function through v-if
  createSheet.value = true;
});
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <IBSheetVue v-if="createSheet" :options="sheetOptions" :style="customStyle" />
</template>

```

[Example of sheet object creation through v-if](https://stackblitz.com/edit/vitejs-vite-qljaavkt?file=data.js)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
