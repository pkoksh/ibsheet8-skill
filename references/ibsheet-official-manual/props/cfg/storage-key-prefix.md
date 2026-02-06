---
KEY: storageKeyPrefix
KIND: config-property
PATH: props/cfg/storage-key-prefix
ALIAS_EN: option, prefix, key, value, saving, current, sheet, information
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/storage-key-prefix
---
# StorageKeyPrefix ***(cfg)***

> Option to set the `prefix` of the Key value used when saving current sheet information to local storage or session storage.
> 
 By default, the Key value is set as `StorageKeyPrefix+"^sheetId"`, and when the `StorageKeyPrefix` option has no value, the current page path is set as the default value for `StorageKeyPrefix`.
> 
 Does not operate if there is no [StorageSession](./storage-session) value.


### Type
`string`


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // Set to allow saving and retrieving current sheet information in local storage
    StorageKeyPrefix: "IBSheet/product/intro"       // Set the prefix of the Key value for content stored in storage, resulting in IBSheet/product/intro^sheet
};

sheet.saveCurrentInfo();      // Save current sheet information to local storage
sheet.clearCurrentInfo();     // Remove current sheet information from local storage
```

### Read More
- [StorageSession cfg](./storage-session)
- [StorageCompressMode cfg](./storage-compress-mode)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
