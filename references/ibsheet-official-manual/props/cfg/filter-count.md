---
KEY: filterCount
KIND: config-property
PATH: props/cfg/filter-count
ALIAS_EN: read, option, provided, filter, feature, returns, number, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/filter-count
---
# FilterCount ***(cfg)***

> A read-only option provided when using the filter feature. Returns the number of data rows visible on the screen after filtering in the sheet.

> This also applies when using the `Filter` option in the `Search` row.


### Type
`number`

### Example
```javascript
// When used in an alert statement
alert(sheet.FilterCount + " items available");

// When used in Search row configuration
options.Solid = [{
    Kind: "Search", // Kind: Specifies the Kind of the custom row. {Available row types: Header, Filter, Search, Group, Space, Data}
    Space: 1, // Space: Sets where the custom Row is positioned. {-1: Above the table, 0: Head area, 1: Between Body and Head, 2: Empty space between Body and Foot, 3: Just above Foot, 4: Below Foot at toolbar position, 5: Below the table}
    Cells: "Expression,Sep1,Counts,Filter,Select,Mark,FindPrev,Find,Clear,Sep2", // Creates Cells in the custom row and assigns IDs. Defs, Case, Type, Cols, List, Search, Actions, Expression, Filter, Select, Mark, Find, FindPrev, Clear, Help are built-in reserved keywords
    Expression: { // Expression settings for searching
      Action: "Last", // Setting for the action to take when the expression cell content changes. When set to Last, it executes the action the user performed most recently (if filter was used previously, it uses filter).
      NoColor: 0, // Whether the cell has CSS style colors (Color, Background)
      CanFocus: 1,
      Left: "5", // Creates empty space of the specified px on the left side of the cell
      MinWidth: "90", // Minimum width in px
      EmptyValue: "<s>Please enter a search term</s>"  // Same function as the input placeholder attribute; displays the specified value when Value is empty
    },
    Sep1: { Width: "10",Type: "Html" },
    Counts: { Width: "50", CanFocus:0,Type: "html", Formula: "(Sheet.SearchCount ? Sheet.SearchCount : (Sheet.FilterCount ? Sheet.FilterCount : count(7))) +' items'" }, // Counts the number of visible rows when filter, select, etc. buttons are clicked and uses it as the cell value.
    Filter: { ButtonText: "Filter" },
    Select: { ButtonText: "Select" },
    Mark: { ButtonText: "Mark" },
    FindPrev:{ ButtonText: "Find (Up)", Width: "70" },
    Find: { ButtonText: "Find (Down)", Width: "70" },
    Clear: { ButtonText: "Clear", Width: "50" },
    Sep2: { Width: "5", Type: "Html" }
}]
```

### Read More
- [SearchCount cfg](./search-count)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
