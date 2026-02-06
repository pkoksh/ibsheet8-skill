---
KEY: spanned
KIND: row-property
PATH: props/row/spanned
ALIAS_EN: whether, allow, horizontal, merging, columns, within, row, merge
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/row/spanned
---
# Spanned ***(row)***

> Sets whether to allow horizontal merging between columns within a row (merge left and right).

> When set in `Def.Row` or `Def.Header`, you can merge left and right cells through the Span property in the header area or data area. 

> When using cell merge, it operates separately from the auto-merge feature, so the auto-merge feature should be turned off. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Span (horizontal merge) not allowed (`default`)|
|`1(true)`|Span (horizontal merge) allowed|


### Example
![Spanned](/assets/imgs/headerMerge.png "Spanned")
<!-- IMAGE: Screenshot/Example Image - Spanned -->
```javascript
//Merge header rows horizontally.
options.Def.Header = {Spanned:true};
opiotns.Cfg = {
    HeaderMerge: 0 // Turn off auto-merge
};
options.Cols = [
    {Header:[{Value:"(Event) Sales Performance",Span:4,Align:"Center"},{Value:"January"}],Name:"Col1"},
    {Header:[{},{Value:"February"}],Name:"Col2"},
    {Header:[{},{Value:"March"}],Name:"Col3"},
    {Header:[{},{Value:"April"}],Name:"Col4"},
];
```

### Read More
- [Spanned col](/docs/props/col/spanned)
- [Span cell](/docs/props/cell/span)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
