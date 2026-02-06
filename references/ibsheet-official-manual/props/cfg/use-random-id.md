---
KEY: useRandomId
KIND: config-property
PATH: props/cfg/use-random-id
ALIAS_EN: creates, sheet, random, creation, create, global, object, userandomid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-random-id
---
# UseRandomId ***(cfg)***

> Creates the sheet with a random id during creation, and does not create a global object.

> When creating through IBSheet.create(), the id is generated with a random value regardless of whether an id was provided. 

> The id of the created sheet can be checked by receiving the object returned after calling the create() function.

### Type
`boolean` or `string`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Use the id value defined in IBSheet.create() (`default`)|
|`1(true)`|Generated in "sheet" + 6-digit number format (ex: sheet847314)|
|`string`|Generated in "inputValue" + 6-digit number format (ex: grid125263 (when value is set to "grid"))|


### Example
```javascript
options = {
    Cfg:{
      UseRandomId: "myGrid"
    },
    Cols: [...]
 };

grid = IBSheet.create({
   // Do not include id when creating the sheet
  "el": "grid_DIV",
  "options": options
 });

console.log(grid.id);  // Id is generated in format like myGrid123456.

// When accessing functions
grid.getValue(grid.getFocusedRow(),grid.getFocusedCol());

```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.47|Feature added|
