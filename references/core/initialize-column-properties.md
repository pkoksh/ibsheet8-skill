# Column Properties Reference

## Col Properties

- [All property information](../ibsheet8-official-manual/props/col/index.md)
- The SEQ column always exists (if not created, it is created as a hidden first column on the left)


### Cfg Property Usage Example

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Create ibsheet8
    IBSheet.create({
      id: "sheet",
      el: "sheetContainer",
      options: {
        Cfg: { ... },
        Cols: [
          {
            Header: "Employee Name",
            Type: "Text",
            Name: "EMPNAME",
            Align: "Center",
            Width: 120,
            RelWidth: 1
            ...
          },
          ...
        ]
        ...
      }
    });
  });
```
---

### Commonly Used Properties When Creating Columns:

| Property | Type | Default | Description |
|------|------|--------|------|
| Header | String or object or jsonArray | - | Header text |
| Name | String | - | Column identifier (required) |
| Type | String | "Text" | [Column type](./column-type-property.md) |
| Width | Number | Auto-width based on header cell text length | Column width (px) |
| MinWidth | Number | - | Minimum width |
| RelWidth | Number | - | Relative width (set as ratio) |
| Align | String | Varies by Type | Alignment (Left, Center, Right) |
| CanEdit | Boolean | true | Whether editing is enabled (0:non-editable, 1:editable)|
| Visible | Boolean | true | Show/hide (0:hidden, 1:visible) |
| Format | String or object | Varies by Type | [Column format](./column-format-property.md) |
| Formula | String or function | - | Set value by calculation (see ../features/formula.md)|
| Attribute-Formula | String or function | - | Set property value by calculation (see ../features/attribute-formula.md)|
| Required | Boolean | false | Whether input is required (error occurs if empty value is included when save function is called) |
| DefaultValue | Any | - | Default value when there is no value for the column during data load or for new rows |

---

## Header Property

1. Single header
```javascript
{
  Header: "Username",
  Name: "userName",
  Type: "Text",
  ...
}
```
2. Single header + property definition
```javascript
{
  Header: {Value:"Username", TextStyle: 1, TextColor: "#FF0000"}, // Properties from ../ibsheet8-official-manual/props/cell/index.md can be used
  Name: "userName",
  Type: "Text",
  ...
}
```

3. Multi-row header
```javascript
{
  Header: ["User Info", "Name"], // Two-line header
  Name: "userName",
  Type: "Text",
  ...
}
```

4. Multi-row header + property definition
```javascript
{
  Header: ["User Info", {Value: "Name", Color:"#222222", TextColor:"#FFFFFF"}], // Two-line header
  Name: "userName",
  Type: "Text",
  ...
}
```

----

## Name Property

- All column Names must be unique
- The following Names require caution when using

|Name|Reason|
|---|---|
|SEQ|Used for sequential increment column functionality [How to change](../ibsheet8-official-manual/props/cfg/row-index.md)|
|id|Cannot be used as it conflicts with each row's id|
|STATUS|Same name as status information automatically added during save [How to change](../ibsheet8-official-manual/props/cfg/req-status-name.md)|

---
## Width Property
- Specifies the column width when creating ibsheet8
- Can hide a column by setting to 0, but prefer using Visible:0 property instead
- To stretch or shrink column width to fit ibsheet8 size, it is recommended to use [MinWidth](../ibsheet8-official-manual/props/col/min-width.md) or [RelWidth](../ibsheet8-official-manual/props/col/rel-width.md) together

---
