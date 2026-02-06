---
KEY: accept
KIND: cell-property
PATH: props/cell/accept
ALIAS_EN: property, specifies, allowed, file, types, upload, type, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/accept
---
# Accept ***(cell)***

> A property that specifies the allowed file types for upload in [File Type](/docs/appx/file-type-upload) cells.

> It works the same as the accept attribute of `input type="file"`.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies the allowed file types for upload in [File Type](/docs/appx/file-type-upload) cells|


### Example
```javascript
// Set a File Type cell to only allow image file uploads
sheet.setAttribute(sheet.getRowById("AR99"), "FileUpload", "Accept", 'image/*');
```

### Read More
* [File Type Upload](/docs/appx/file-type-upload)
* [Accept Col](/docs/props/col/accept)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
