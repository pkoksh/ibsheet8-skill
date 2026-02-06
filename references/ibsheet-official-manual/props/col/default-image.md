---
KEY: defaultImage
KIND: column-property
PATH: props/col/default-image
ALIAS_EN: fallback, image, display, exist, server, loading, images, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/default-image
---
# DefaultImage ***(col)***
> Sets a fallback image to display when the image does not exist on the server when loading images in a column with [Type](/docs/appx/type) `Img`.


> **<mark>Caution</mark> : DefaultImage is not applied when Left or Top is set in the Img data**


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|URL of the fallback image when image loading fails|

### Example
```javascript
options.Cols = [
    ...
    // Set the fallback image path
    {
       Header: "Image",
       Type: "Img",
       Name: "sImgData",
       Width: 120,
       DefaultImage: "./image/defaultImage.png",
       ...
    },
];
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.18|Feature added|
