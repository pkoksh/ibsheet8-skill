---
KEY: feature
KIND: guide
PATH: intro/feature
ALIAS_EN: product, features
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/intro/feature
---
# Product Features

`IBSheet 8` is a **data grid control component** based on pure JavaScript that provides various data grid features found in Windows applications using only `HTML, JavaScript, CSS` without any installation on the user's PC.

## Key Product Features

### Data Search Feature
Parses JSON data retrieved from the server through Ajax communication and loads it onto the client screen.

Provides various data rendering features such as `lazyload, fastload`, etc., depending on the data loading method.

### *Sorting Feature*
You can sort not only a single column but multiple columns simultaneously by clicking a header cell or through provided APIs.

You can also set numeric sorting, text sorting, and sorting exclusion depending on the column or cell data.

![Multi-column Sort](/assets/imgs/sort.png "Sorting on multiple columns")
<!-- IMAGE: Screenshot/Example Image - Multi-column Sort -->

[**Example of sorting on multiple columns**]


### *Column/Row Freezing Feature*
Provides a feature to freeze a desired number of columns on the left/right sides of the grid.

You can also freeze some rows at the top or bottom of the data and set desired data for use.

![Column Freezing](/assets/imgs/section.png "Left/right column freezing")
<!-- IMAGE: Screenshot/Example Image - Column Freezing -->

[**Example of left/right column freezing**]

### *Filtering Feature*
Provides a feature for users to filter and view desired content from the loaded data through a filter row below the header.

You can filter using AND or OR conditions within a single cell, or filter across multiple columns using AND or OR conditions.

![Filter Feature](/assets/imgs/filter.png "Filtering through filter row")
<!-- IMAGE: Screenshot/Example Image - Filter Feature -->

[**Example of filtering through filter row**]

### *Various Data Types and Validation Feature*
Various data input and validation checks are possible through date columns, numeric input columns, masking features, etc. within the grid.

You can also express desired `HTML` syntax within a cell through HTML format cells.

### *Status Management and Save Feature*
Manages information about rows or cells modified by the user within the loaded data, and provides a feature to send only modified data to the server during the final save.
 Newly added, modified, and deleted data rows are displayed with different background colors to enhance user visibility.


### *Total and Formula Feature*
You can display the total of all column data in a total row, or set various calculated values and features within columns by configuring calculation logic between columns.


### *Various Import/Export Features*
Provides features to download data in file formats such as `Excel, text, PDF`, or to upload `Excel, CSV, text` files.


### *Grouping Feature*
Users can group loaded data through dragging, and view calculation results such as subtotals within the grouped data.

![Group Feature](/assets/imgs/groupRow.png "Grouping feature")
<!-- IMAGE: Screenshot/Example Image - Group Feature -->

[**Example of grouping by a specific column**]

### *Tree Feature*
By designating a specific column as a tree within the grid, you can express parent-child relationships between data.

Data structured as a tree can utilize various APIs for parent/child relationships.

![Tree Usage](/assets/imgs/tree.png "Tree usage")
<!-- IMAGE: Screenshot/Example Image - Tree Usage -->

[**Tree usage example**]

### *Pivot Feature*
Users can configure data for pivoting through a pivot dialog and view calculation results.


### *Auto Merge Feature*
Provides a feature to automatically merge adjacent cells with the same values within the header area or data area.
It is also possible to merge and display specific areas regardless of cell content.

![Merge Feature](/assets/imgs/dataMerge3.png "Merge feature")
<!-- IMAGE: Screenshot/Example Image - Merge Feature -->

[**Auto cell merge based on entered text**]

### *Column Width and Position Change Feature*
Users can change column width or modify column position through Drag & Drop on header cells.
The sheet information changed in this way (column position, width, visibility) is saved in the user's browser and can be displayed as previously configured when accessing the same screen later.

![Column Move](/assets/imgs/colDragMove.png "Column move")
<!-- IMAGE: Screenshot/Example Image - Column Move -->

[**Column position move through dragging**]

### *Paging Search Feature*
Provides a feature to display data split into pages when a large amount of data is loaded.
When using the paging search feature, you can navigate to a desired page using pagination at the bottom of the sheet.


### *Copy & Paste Feature for Selected Areas*
You can select a desired area by dragging within the grid, copy it to the clipboard with `Ctrl+C`, or paste clipboard content into the grid with `Ctrl+V`.


### *Printing Feature*
Provides a feature to print grid content along with titles, search conditions, and other content.

When printing, features such as repeatedly displaying grid titles (grid top title (page title configurable) and header titles) on each page are provided.


### *Auto-complete Feature*
Provides a feature where a set of possible data is configured for a specific column, and matching strings are displayed as the user types. 

![Auto-complete Feature](/assets/imgs/suggest.gif "Auto-complete feature")
<!-- IMAGE: Screenshot/Example Image - Auto-complete Feature -->

[**Auto-complete feature example**]

### *Drag & Drop Feature*
You can drag rows or cells to copy or move them to another sheet.

![Drag and Drop](/assets/imgs/drag1.png "Drag and drop")
<!-- IMAGE: Screenshot/Example Image - Drag and Drop -->

[**Row move between sheets**]

### *Hint and Tooltip Feature*
When the column width is insufficient to display all cell content, provides a feature to display a tooltip or temporarily expand the cell size when the mouse cursor hovers over a cell.

![Hint Feature](/assets/imgs/hint1.png "Hint feature")
<!-- IMAGE: Screenshot/Example Image - Hint Feature -->

[**Hint feature example**]

### *Context Menu Feature*
You can configure and use context menus with various features when right-clicking within the sheet.

![Context Menu Feature](/assets/imgs/menuIcon.png "Context menu feature")
<!-- IMAGE: Icon Image - Context Menu Feature -->

[**Context menu feature example**]
