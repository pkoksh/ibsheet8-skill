---
KEY: linkBase
KIND: cell-property
PATH: props/cell/link-base
ALIAS_EN: cell, link, property, base, path, linkbase
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cell/link-base
---
# LinkBase ***(cell)***

> When the cell has a [Link](./link) property, sets the base path.

> Assuming the current page is **/abc/test.html**, the resulting URL based on the `LinkBase` setting is as follows:
> |Link|LinkBase|Actual URL|
> |---|---|---|
> |/xyz/test2.html||/xyz/test2.html|
> |./xyz/test2.html||/abc/xyz/test2.html|
> |/xyz/test2.html|/kor|/kor/xyz/test2.html|
> |./xyz/test2.html|/kor|/kor/xyz/test2.html|


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Base path for the URL set in `Link`|


### Example
```javascript
//1. Apply property to a specific cell via method (column name: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "LinkBase", "/koem");


//2. Apply property by directly accessing the object (column name: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSLinkBase"] = "/dps";
// Verify changes
sheet.refreshCell({row:ROW, col:"CLS"});


//3. Apply property within loaded data (column name: CLS)
{
    data:[
        {... , "CLSLinkBase":"/cust" , ...}
    ]
}
```

### Read More
- [Link cell](./link)
- [LinkTarget cell](./link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
