---
KEY: kind
KIND: appendix
PATH: appx/kind
ALIAS_EN: row, sheet, own, role, function, common, roles, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/kind
---
# Kind  ***(appendix)***
> Every row in the sheet has its own role (function).
The most common roles are header and data rows, but there are also various other features such as filters attached below the header, groups, etc.
### Types of Kind
|Kind|Description|
|---|---|
|*Group*|Located above the header, it performs grouping functionality for specified columns.
![Group](/assets/imgs/groupRow.png "Group Row")
<!-- IMAGE: Screenshot/Example Image - Group -->|
|*Header*|A row always visible above the data area, with basic features such as column repositioning, sorting, etc.
![Header](/assets/imgs/header.png "Header Row")
<!-- IMAGE: Screenshot/Example Image - Header -->|
|*Filter*|Located between the header and data area, when values are entered in each cell, it hides all rows except those containing the entered value in the respective column.
![Filter](/assets/imgs/filter.png "Filter Row")
<!-- IMAGE: Screenshot/Example Image - Filter -->|
|*Search*|Located between the filter and data rows, it hides all rows except those containing the entered value.
![Search](/assets/imgs/searchRow.png "Search Row")
<!-- IMAGE: Screenshot/Example Image - Search -->|
|*Data*|Regular data rows.
![Data](/assets/imgs/dataRow.png "Data Row")
<!-- IMAGE: Screenshot/Example Image - Data -->|
|*Head*|Refers to fixed rows below the header row.
![Head](/assets/imgs/kindHead.png "Head")
<!-- IMAGE: Screenshot/Example Image - Head -->|
|*Foot*|Refers to summary rows or fixed rows below the data rows.
![Head](/assets/imgs/kindFoot.png "Head")
<!-- IMAGE: Screenshot/Example Image - Head -->|
|*Space*|Empty space rows that are not affected by column widths in the sheet, allowing various cell objects to be placed.
The row position can also be placed in various locations such as above the header, above or below the footer, etc.
![Space](/assets/imgs/spaceRow.png "Space Row")
<!-- IMAGE: Screenshot/Example Image - Space -->|

### Read More
- [Kind row](/docs/props/row/kind)
- [getRowKind method](/docs/funcs/core/get-row-kind)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
