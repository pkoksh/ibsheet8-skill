---
KEY: suppressExportMessage
KIND: config-property
PATH: props/cfg/suppress-export-message
ALIAS_EN: determines, whether, show, waiting, message, downloading, uploading, files
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/suppress-export-message
---
# SuppressExportMessage ***(cfg)***

> Determines whether to show a waiting message when downloading or uploading files using server modules or client modules.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|Show waiting image during file download and upload (`default`)|
|`1`|Do not show waiting image during file download and upload|

### Example
```javascript
options.Cfg = {
    SuppressExportMessage : 1 // Set to not show waiting image during server module and client module file download and upload
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.95|Feature added|
|excel|1.1.4|Feature added|
