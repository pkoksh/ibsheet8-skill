---
KEY: header
KIND: appendix
PATH: appx/header
ALIAS_EN: learn, multi, line, headers, modify, header, content, insert
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/header
---
# Header  ***(appendix)***
> Learn how to set up multi-line headers, modify header content, or insert checkboxes in the header.

## 1. Single Header Row
The simplest way is to set the header title through the Header property when configuring Cols values.
```javascript
init.Cols = [
    {Header:"First Column Title", Type:"Int", Name:"sActSum", Width:100},
    {Header:"Second Column Title", Type:"Date", Name:"sDate", Width:120},
    ...
]
```
[Single header row]

![Single header row](/assets/imgs/onelineHeader.png "Single header row")
<!-- IMAGE: Screenshot/Example Image - Single header row -->

## 2. Multi-line Header Rows
By setting the Header property value in array format, you can configure two or more header rows.
```javascript
init.Cols = [
    {Header:["Economically Active Population","Employed","Subtotal"], Type:"Int", Name:"sEmplySum"},
    {Header:["Economically Active Population","Employed","Male"], Type:"Int", Name:"sEmplyM"},
    {Header:["Economically Active Population","Employed","Female"], Type:"Int", Name:"sEmplyW"},
    ...
];
```
[Multi-line header rows]

![Multi-line header rows](/assets/imgs/multilineHeader.png "Multi-line header rows")
<!-- IMAGE: Screenshot/Example Image - Multi-line header rows -->



## 3. Modifying Header Row Content
Just like data rows, you can get or modify row values through header row objects. The ID of header rows is automatically assigned in the following format.

1) When there is a single header row, the header row ID is `Header`.
2) When there are two or more header rows, the first header row ID is `Header` and subsequent ones are assigned as `HR1`, `HR2`..
```javascript
//Get the sPosition column content of the first header row
var hdStr = sheet.getValue( sheet.getRowById("Header"), "sPosition" );

//Modify the sPosition column content of the third header row
sheet.setValue( sheet.getRowById("HR2"), "sPosition" , "Position" )
```

## 4. Changing Header Text Color, Background Color, and Adding Images
When configuring columns, by using object format instead of a string for the Header property value, you can set various features such as background color and text color for header cells.

Check the Color, TextColor, Type, etc. within the Header property in the example below.
```javascript
init.Cols = [
    //Set header cell background color to "#FF0000"
    {Header:{Value:"Header Title 1", Color:"#FF0000"}, Type:"Text", Width:150, Name:"Col1"},
    //Set header cell text color to "#FFFF00"
    {Header:{Value:"Header Title 2", TextColor:"#FFFF00"}, Type:"Text", Width:120, Name:"Col2"},
    //Set an object in the header cell
    {Header:{Value:"|./assets/imgs/am.jpg|||||",Type:"Img"}, Type:"Text", Width:120, Name:"Col3"},
    ...
];
```
[Header color, type change]

![Header color, type change](/assets/imgs/multiFuncHeader.png "Header color, type change")
<!-- IMAGE: Screenshot/Example Image - Header color, type change -->


## 5. Header Checkbox
For columns with Type Bool, you can set a checkbox in the header cell through the `HeaderCheck` property.
```javascript
init.Cols = [
    {Header:"No", Name:"SEQ", Width:"90"},
    {Header:{Value:"Confirm",HeaderCheck:1}, Type:"Bool", Name:"sCheck", Width:"60"},
    {Header:"Company", Type:"Text", Name:"sCompany", Width:"150"},
    ...
]
```
[Header cell checkbox]

![Header cell checkbox](/assets/imgs/headerCheck.png "Header cell checkbox")
<!-- IMAGE: Screenshot/Example Image - Header cell checkbox -->

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [Header col](/docs/props/col/header)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
