---
KEY: useExtraObjectData
KIND: config-property
PATH: props/cfg/use-extra-object-data
ALIAS_EN: retrieved, data, contains, additional, object, type, information, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/use-extra-object-data
---
# UseExtraObjectData ***(cfg)***

> When retrieved data contains additional `object`-type information that is not a column configured in the sheet, stores it in the row object as-is in `object` form. 

> **This does not apply when the object's `key` is the same as the [Name](../col/name) of a configured column in the sheet.** 

> **Therefore, this does not apply to data intended to be displayed in the sheet.** 

<!-- **Cannot be used simultaneously with [JsonDataSep](./json-data-sep). (`UseExtraObjectData` is applied first.)** -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`object`-type data is stored in the row object in the format of columnName+propertyName. (`default`)|
|`1(true)`|`object`-type data is stored in the row object while maintaining its form.|

### Example
```javascript
options = {
    Cfg: {
        UseExtraObjectData: true,
        // ...
    },
    Cols: [
        {
            Header: 'Text',
            Type: 'Text',
            Name: 'TextData',
            Width: 100,
            Align: 'Center',
            CanEdit: 1
        },
        {
            Header: 'Lines',
            Type: 'Lines',
            Name: 'LinesData',
            MinWidth: 250,
            Align: 'Center',
            CanEdit: 1,
            RelWidth: 1
        }
    ]
}

// Search data
var data = [{
  TextData: 'John Doe',
  LinesData: 'The weather across the country is mostly cloudy with some regions experiencing afternoon showers due to atmospheric instability.',
  ExtraInfo: { // Additional data not configured as a column in the sheet
    AddedDate: '2022-01-24',
    ChagedDate: '2024-06-17'
  }
}];

var row = sheet.getFirstRow();
var info = sheet.getRowValue({row: row, saveExtraAttr: 1}).ExtraInfo;
// {AddedDate: '2022-01-24', ChagedDate: '2024-06-17'}

var newInfo = {
  DeletedDate: '2024-09-13'
};
sheet.setValue(row, 'ExtraInfo', newInfo);

sheet.getValue(row, 'ExtraInfo');
// {DeletedDate: '2024-09-13'}
```

### Read More

- [getRowValue method](/docs/funcs/core/get-row-value)
- [getValue method](/docs/funcs/core/get-value)
- [setValue method](/docs/funcs/core/set-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.0|Feature added|
