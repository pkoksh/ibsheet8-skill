---
KEY: name
KIND: column-property
PATH: props/col/name
ALIAS_EN: assigns, name, column, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/col/name
---
# Name ***(col)***
> Assigns a name to a column.

> The assigned name is used to map with `json` data when retrieving data, or is sent to the server when saving.

> If `Name` is set to `"SEQ"`, the column automatically displays sequential numbers 1, 2, 3, 4... regardless of the data retrieved from the server (not editable).

> Columns created with `SEQ` always reset numbers starting from 1 even when row changes occur such as `Sort`, `Filter`, `hideRow`, `removeRow`, etc.


> **<mark>Note</mark> : Case-sensitive.

> Must be set as required, and duplicates are not allowed.

> Can only contain letters (a-z, A-Z), underscores '_', and numbers (0-9).

> However, names cannot start with a number or underscore.**


> The following names cannot be used:

> 1. Row attribute names: Def, Kind, Deleted, Attribute (TextColor, etc.)

> 2. Reserved words used by the sheet: SEQ, id, Status, Level, ColorPos, GroupPos, Hasch, LevelImg, OrgIndex, SUMType

> 3. Part of existing attribute names: Color, NoColor (e.g.: Using 'No' as a column name would conflict with 'NoColor' being saved)

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Unique name assigned to each column|


### Example
```javascript
// Declare unique names when creating columns
options.Cols = [
    {Type: "Int", Name: "SEQ", Width: 60 ...}, // Seq column
    {Type: "Text", Name: "empNm", Width: 120 ...},
    {Type: "Int", Name: "age", Width: 70 ...},
    ...
];
// Retrieved data
var DATA = [
    {"empNm": "Lee Mongryong", "age": 19, ...},
    {"empNm": "Seong Chunhyang", "age": 17, ...},
    ...
];
```

### Read More
- [RowIndex cfg](/docs/props/cfg/row-index)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
