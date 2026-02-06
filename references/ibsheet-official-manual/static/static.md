---
KEY: static
KIND: static-member
PATH: static/static
ALIAS_EN: ibsheet, file, added, page, object, created, global, variable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/static/static
---
# What is the static object

> When the `ibsheet.js` file is added to the page, the `IBSheet` object is created as a global variable. 

> Through this object, you can use the calendar provided by the sheet, or use context menus and other features outside the sheet area.

> Additionally, each time a sheet is created, it is stored in this object in an array format.

> Therefore, the number of sheets existing on the current page can be checked through `IBSheet.length`.

> **However, if a sheet with the same `id` is recreated or an instance object is disposed with `sheet.dispose()`, it occupies space in the array with a `null` value.**

>
> The functions and properties that the `IBSheet` object has are as follows.

## Internal Functions/Events/Properties

|Name|Type|Description|
|---|---|---|
|[create](./create)|`function`|Creates a `sheet object`|
|[disposeAll](./dispose-all)|`function`|Removes all sheet objects from the page|
|[showMenu](./show-menu)|`function`|Creates and displays a context menu at a desired position outside the sheet|
|[showCalendar](./show-calendar)|`function`|Creates and displays the sheet's calendar control at a desired position outside the sheet|
|[showDialog](./show-dialog)|`function`|Creates and displays a custom dialog at the specified position|
|[numberToString](./number-to-string)|`function`|Converts a number to a masked string according to the given format and returns it|
|[dateToString](./date-to-string)|`function`|Returns a javascript `Date object` or other date format value as a string in the specified format|
|[stringToDate](./string-to-date)|`function`|Converts a masked date format string to a javascript `Date object` and returns it|
|[version](./version)|`function`|Returns the version of the product loaded on the page|
|[onBeforeCreate](./on-before-create)|`event`|An initialization common settings event that fires when any sheet is being created.|
|[onRenderFirstFinishAll](./on-render-first-finish-all)|`event`|Fires only once when all sheets have been created, when one or more sheets exist on the current page.|
|[CommonOptions](./common-options)|`property`|Sets property values to be commonly applied to all sheets.|
|Active|`property`|Returns the sheet object that the mouse cursor is currently over (returns `null` if the cursor is not over a sheet)|
|Focused|`property`|Returns the sheet object that currently has focus (returns `null` if no sheet has focus)|

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
