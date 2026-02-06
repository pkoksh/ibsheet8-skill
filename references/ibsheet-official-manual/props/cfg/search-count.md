---
KEY: searchCount
KIND: config-property
PATH: props/cfg/search-count
ALIAS_EN: read, option, provided, search, row, returns, number, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-count
---
# SearchCount ***(cfg)***

> A read-only option provided when using the `Search` row, which returns the number of rows displayed by `Select (selection) and Mark (marking)` actions. 

> When executing `Filter/Find/FindPrev` actions in the `Search` row, the `SearchCount` option is changed to an empty value.

### Type
`number`

### Example
```javascript
// When used in Search row configuration
options.Solid = [{
    Kind: "Search", // Kind: Specifies the Kind of custom row. {Possible row types: Header, Filter, Search, Group, Space, Data}
    Space: 1, // Space: Sets where the custom row will be positioned {-1: Top of table area, 0: Head area, 1: Between Body and Head, 2: Empty space between Body and Foot, 3: Right above Foot, 4: Toolbar position below Foot, 5: Outside bottom table}
    Cells: "Expression,Sep1,Counts,Filter,Select,Mark,FindPrev,Find,Clear,Sep2", // Creates cells in the custom row and assigns IDs. Defs, Case, Type, Cols, List, Search, Actions, Expression, Filter, Select, Mark, Find, FindPrev, Clear, Help are built-in reserved words
    Expression: { // Expression settings for searching
      Action: "Last", // Setting for the action to take when expression cell content changes. When set to Last, executes the user's most recent action (uses filter if filter was used previously).
      NoColor: 0, // Whether the cell has CSS style colors (Color, Background)
      CanFocus: 1,
      Left: "5", // Creates empty space of specified px on the left side of the cell
      MinWidth: "90", // Minimum width in px
      EmptyValue: "<s>Please enter search terms</s>"  // Same function as input's placeholder attribute, displays the specified value when Value is empty
    },
    Sep1: { Width: "10", Type: "Html" },
    Counts: { Width: "50", CanFocus:0, Type: "html", Formula: "(Sheet.SearchCount ? Sheet.SearchCount : (Sheet.FilterCount ? Sheet.FilterCount : count(7))) +'items'" }, // Counts the number of visible rows when buttons like filter, select are clicked, and uses it as cell value.
    Filter: { ButtonText: "Filter" },
    Select: { ButtonText: "Select" },
    Mark: { ButtonText: "Mark" },
    FindPrev:{ ButtonText: "Find(Up)", Width: "70" },
    Find: { ButtonText: "Find(Down)", Width: "70" },
    Clear: { ButtonText: "Clear", Width: "50" },
    Sep2: { Width: "5", Type: "Html" }
}]
```

### Read More
- [FilterCount cfg](./filter-count)
- [SearchCaseSensitive cfg](./search-case-sensitive)
- [SearchExpression cfg](./search-expression)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
