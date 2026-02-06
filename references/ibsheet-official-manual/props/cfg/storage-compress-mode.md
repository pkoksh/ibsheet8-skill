---
KEY: storageCompressMode
KIND: config-property
PATH: props/cfg/storage-compress-mode
ALIAS_EN: option, compression, method, values, stored, local, storage, session
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/storage-compress-mode
---
# StorageCompressMode ***(cfg)***

> Option for the compression method of values stored in local storage or session storage for the current sheet's information. 

> Does not operate if there is no [StorageSession](./storage-session) value.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|UTF16 compression, high compression ratio|
|`1`|Base64 compression, medium compression ratio (`default`)|
|`2`|Uint8Array compression, low compression ratio|


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // Set to allow saving and retrieving current sheet information in local storage
    StorageCompressMode: 0   // Save to local storage with UTF16 compression
};

sheet.saveCurrentInfo();      // Save current sheet information to local storage
```

### Read More
- [StorageSession cfg](./storage-session)
- [StorageKeyPrefix cfg](./storage-key-prefix)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
