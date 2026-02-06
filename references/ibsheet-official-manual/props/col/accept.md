---
KEY: accept
KIND: column-property
PATH: props/col/accept
ALIAS_EN: property, specifies, file, types, allowed, upload, type, docs
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/accept
---
# Accept ***(col)***

> A property that specifies the file types allowed for upload in a [File Type](/docs/appx/file-type-upload) column.

> It works the same as the accept attribute of `input type="file"`.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Specifies the file types allowed for upload in a [File Type](/docs/appx/file-type-upload) column|


### Example
```javascript
// Set to allow only image file uploads in a Type: File column
options.Cols = [
    ...
    {Type: "File", Name: "CarName", Width: 120, Accept: 'image/*' ...},
    ...
];
```

### Read More
* [File Type Upload](/docs/appx/file-type-upload)
* [Accept Cell](/docs/props/cell/accept)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
