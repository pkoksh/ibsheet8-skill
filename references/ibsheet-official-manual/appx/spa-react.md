---
KEY: spaReact
KIND: appendix
PATH: appx/spa-react
ALIAS_EN: guide, explains, develop, ibsheet, react, environment, developing, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/spa-react
---
# Developing IBSheet in React Environment ***(appendix)***

> This guide explains how to develop IBSheet in a React environment.
>
> The development steps are as follows.
> 1. Import IBSheet js files using ibsheet-loader
> 2. Create IBSheet objects through the <IBSheetReact> component
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
    baseUrl: '/ibsheet', // ibsheet.js file location (in React environment, this means /public/ibsheet/ibsheet.js is located there)
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
loader.load(loaderOption); //Actually import the ibsheet files
```
- Import through `loader.load()` only needs to be done **once** on the main page (entry point).
- ibsheet.js, css, locale, and plugins files must be present at the location specified by the `baseUrl<public/path>` property.



## 2. Creating ibsheet Objects Using IBSheetReact Component

### This component is <mark>supported in React v18 or higher compatible with Node.js v18 or higher</mark>.

### 2.1 Installing @ibsheet/react Component

#### using npm([Official](https://nodejs.org/))
```bash
npm i @ibsheet/react
```

### 2.2 Creating a Sheet Using IBSheetReact Component

Create a sheet using the IBSheetReact component and perform subsequent operations (add row function) using the created object.


```js
import { IBSheetReact, IB_Preset } from '@ibsheet/react';
import { useRef } from 'react';
function App() {
  // Sheet ref object
  const mySheet = useRef(null);

  // Sheet initialization
  const options = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Ymd', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
    ],
    Events: {
      // Set events at sheet creation time
      onBeforeChange: function (evt) {
        console.log(`${evt.oldval} value has been changed to ${evt.val}.`);
      },
    },
  };
  const DATA = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' }
  ];
  // Determine sheet object size
  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc',
  };

  // Called when add row button is clicked
  const handleAddRow = () => {
    mySheet.current.addRow();
  };
  return (
    <>
      <div className="btn">
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
      </div>
      <IBSheetReact
        ref={mySheet} // Sheet ref object
        options={options} // Sheet initialization
        data={DATA} // Initial data (can be omitted)
        style={customStyle} // Sheet object size
      />
    </>
  );
}
export default App;
```
[React example](https://stackblitz.com/edit/vitejs-vite-ejncmlbw)

## 3. Using IBSheet Interface for React + TypeScript Development
You can use the typescript interface included in the @ibsheet/react component.

The process of loading ibsheet js files through ibsheet-loader in step 1 remains the same.

```js
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance, // Sheet object
  type IBSheetOptions,  // Sheet initialization option
  type IBSheetEvents    // Sheet event parameters
} from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  // Sheet object
  let mySheet = useRef<IBSheetInstance | null>(null);

  // onAfterChange event handler
  const handelAfterChange:IBSheetEvents["onAfterChange"] = (evt) => {
    alert(`The value in the '${evt.sheet.getString(evt.sheet.getRowById("Header"),evt.col)}' column has been changed to ${evt.val}.`);
  }

  // Sheet initialization
  const options: IBSheetOptions = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      { Header: 'No', Type: 'Text', Name: 'SEQ', Width: 60},
      { Header: 'Name', Type: 'Text', Name: 'name', Width: 120, RelWidth: 1 },
      { Header: 'Age', Type: 'Int', Name: 'age', Width: 80 },
      { Header: 'Hire Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
      { Header: '', Type: 'Button', Name: 'confirm', DefaultValue: "Confirm"}
    ],
    Events: {
      onAfterChange: handelAfterChange
    }
  };

  // Temporary initial data
  const data = [
    { id: '1', name: 'John Doe', age: 30, sDate_Ymd:'20250923' },
    { id: '2', name: 'Jane Smith', age: 25, sDate_Ymd:'20251002' },
  ];


  // Add Row button click handler
  const addRow = () => {
    if (mySheet.current) {
      mySheet.current.addRow();
    }
  };

  // Export xls button handler
  const exportXls = () => {
    if (mySheet.current) {
      mySheet.current.exportData({fileName:'ibsheet_react_typescript_example.xlsx'});
    }
  };

  // Sheet width, height
  const customStyle = {
    width: '800px',
    height: '600px',
    border: '1px solid #ccc',
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportXls}>Export xls</button>
      </div>

      <IBSheetReact
        ref={mySheet} // Sheet ref object
        options={options} //Sheet initialization syntax
        data={DATA} //Data (can be omitted)
        style={customStyle} // Sheet object size
      />
    </div>
  );
}
export default App;
```
[React+TypeScript example](https://stackblitz.com/edit/vitejs-vite-bsfserm2)


### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|Feature added|
