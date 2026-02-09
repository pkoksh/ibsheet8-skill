# Column Type Reference

## Basic Information

### Type List (in order of frequency of use)
Text, Int, Float, Date, Enum, Bool, Lines, Button, Html, Link, Img, File, Radio, Pass, Drag
### Notes
1. Column Align defaults vary depending on the Type

|Type|Alignment|
|---|---|
|Text,Lines,Enum,Img,Link,Pass,File|Left|
|Button,Date,Bool,Radio|Center|
|Int,Float|Right|
|Html,Drag|Alignment not applicable|

2. The Type property is not required when creating a column, but it is recommended to set it whenever possible
3. [Data format reference by type](../ibsheet8-official-manual/appx/type.md)
---

## Text

```javascript
{
  Header: "Name",
  Name: "username",
  Type: "Text",
  Align: "Center",
  EditMask: "^\\w*$", // Allowed input characters (JavaScript regex)
  Width: 150,
  Size: 50, // maxlength
  EmptyValue: "Enter name" // placeholder
}
```

---

## Int (Integer)

```javascript
{
  Header: "Quantity",
  Name: "quantity",
  Type: "Int",
  Width: 100,
  Format: "#,##0"
}
```


---

## Float (Decimal)

```javascript
{
  Header: "Unit Price",
  Name: "price",
  Type: "Float",
  Format: "#,##0.00", // Value rounded at the third decimal place is displayed
}
```

---

## Int, Float Notes
- By default, numeric types retain 0 even when the user clears the value. Set (Col)EmptyValue:1 to allow the actual value to be '' (empty).
- Int type default format: "#,##0"
- Float type default format: "#,##0.######"

### Numeric Format Patterns

[Int / Float Type Format](./column-format-property.md#3-int--float-type-format)
---
## Date

```javascript
{
  Header: "Registration Date",
  Name: "regDate",
  Type: "Date",
  Format: "yyyy-MM-dd", // Display format in ibsheet8
  EditFormat: "yyyyMMdd", // Display format when editing
  DataFormat: "yyyyMMdd", // Format for sending/receiving data to/from server
}
```

### Date Format Patterns

[Date Type Format](./column-format-property.md#2-date-type-format)

---

## Enum (Dropdown)

```javascript
{
  Header: "Status",
  Name: "pstatus",
  Type: "Enum",
  EnumKeys: "|A|B|C", // select value (first character is the delimiter)
  Enum: "|Pending|In Progress|Completed", // select text (first character is the delimiter)
}
```
### Enum Type Notes
- If data not in Enum or EnumKeys is loaded, the value is ignored (discarded)
- To allow values not in Enum or EnumKeys, set (Col)EnumStrictMode: 1
- If only Enum is set without EnumKeys, EnumKeys is treated the same as Enum
- When Enum has many items, setting (Col)EnumFilter:1 displays a filter at the top of the dropdown list

### Dynamic Enum Data Change

```javascript
$.ajax({
  url:'/data/getEnum',
  data: '...',
  success: function(data, ...) {
    sheet.setAttribute( null, "colName", "Enum", data.ComboText, 0 );
    sheet.setAttribute( null, "colName", "EnumKeys", data.ComboCode, 0 );
    sheet.renderBody(); // Display applied content on screen
  }
});
```

---

## Bool (Checkbox)

```javascript
{
  Header: "Active",
  Name: "useYn",
  Type: "Bool",
  TrueValue: "Y", // default : 1
  FalseValue: "N", // default : 0
}
```
---

## Lines (Textarea)

```javascript
{
  Header: "Remarks",
  Name: "desc",
  Type: "Lines",
  Width: 250,
  Wrap: 1,  // Lines type default is 1
  RelWidth: 1
}
```

---

## Button

```javascript
{
  Header: "Detail",
  Name: "btnDetail",
  Type: "Button",
  DefaultValue: "View", // Displayed when there is no loaded value
  // ButtonText: "View", // Displayed regardless of loaded value
}
```
### Button Type Notes
- User click implementation is done through the Events.onClick event
- To disable a button, set Disabled:1


---

## Link (Hyperlink)

```javascript
{
  Header: "URL",
  Name: "url",
  Type: "Link",
  LinkTarget: "_blank",
}
```

### Link Type Data Structure
```javascript
sheet.setValue(row, "colName", "|./pos/acceptCos.do|View Details|_self" );  // |URL|Text|Target (first character is used as delimiter)
```

---

## Img (Image)

```javascript
{
  Header: "Photo",
  Name: "photo",
  Type: "Img", // Note: "Img" not "Image"
  DefaultImage: "./img/noimage.png" // Image displayed when there is no data
}
```

### Img Type Data Structure
```javascript
// |URL|Width|Height|Left|Top|LinkUrl|Target|Background-size (first character is used as delimiter)
// Everything except URL is optional, but the first character must be a delimiter.
sheet.setValue(row, "colName", "|./img/s0151500.png|300|200" );
```

---


## File (Binary File Upload/Download)
```javascript
{
  Header: "Attached Image",
  Name: "attachImage",
  Type: "File",
  Accept: 'image/*',
  Width: 150
}
```
### File Type Notes
- When using the File type, the return value of getSaveJson and getSaveString functions is extracted in FormData format
- File data requires attention to data specifications during retrieval/saving [File data specification reference](../ibsheet8-official-manual/dataStructure/filte-type-structure.md)
