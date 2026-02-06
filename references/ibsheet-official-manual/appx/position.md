---
KEY: position
KIND: appendix
PATH: appx/position
ALIAS_EN: creation, position, independently, openable, objects, calendar, docs, static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/position
---
# Position  ***(appendix)***
> Sets the creation position for independently openable objects such as [calendar](/docs/static/show-calendar), [context menu](/docs/static/show-menu), and [dialog](/docs/static/show-dialog).

### Parameters
|Name|Type|Description|
|---|---|---|
|X|`number`|Horizontal position in pixels from the leftmost edge of the screen (similar to CSS left)|
|Y|`number`|Vertical position in pixels from the top of the screen (similar to CSS top)|
|Mouse|`boolean`|Whether to create based on the mouse cursor position.
When using this property, X and Y are calculated relative to the mouse cursor position.|
|Tag|`string`|Set the id of the HTML element where you want to position the calendar or dialog
ex : \<div id='calDiv'>\</div>
var pos = {Tag:"calDiv"};|
|Width|`number`|Width of the area where the dialog can be displayed (to the right from X)|
|Height|`number`|Height of the area where the dialog can be displayed (downward from Y)|
|Align|`string`|Horizontal and vertical alignment based on the area defined by Width and Height properties (set as a string in the format: horizontal alignment value, vertical alignment value)
**Horizontal Alignment Values**<ul><li>*prev* : Outside of left. If the dialog goes off-screen, it automatically changes to next.</li><li>*next* : Outside of right. If the dialog goes off-screen, it automatically changes to prev.</li><li>*left* : Align to the left within the area. If the dialog goes off-screen, it automatically changes to right.</li><li>*right* : Align to the right within the area. If the dialog goes off-screen, it automatically changes to left.</li><li>*center* : Align to center within the area. If the dialog goes off-screen, it automatically moves horizontally.</li></ul>
**Vertical Alignment Values**<ul><li>*above* : Outside of top. If the dialog goes off-screen, it automatically changes to below.</li><li>*below* : Outside of bottom. If the dialog goes off-screen, it automatically changes to top.</li><li>*top* : Align to top within the area. If the dialog goes off-screen, it automatically changes to bottom.</li><li>*bottom* : Align to bottom within the area. If the dialog goes off-screen, it automatically changes to top.</li><li>*middle* : Align to middle within the area. If the dialog goes off-screen, it automatically moves vertically.</li></ul>
default : "right,below" |
|Move|`boolean`|Whether to automatically move the calendar or dialog to a relative position when the window size changes|
|Resize|`boolean`|Whether to automatically resize the dialog when the window size changes|
|Realign|`boolean`|Whether to automatically adjust the Align position when the window size changes|


### Example
```javascript
//Create at a position 100px to the right and 200px down from the top-left corner of the screen
var pos = {X:100 , Y:200};

//Create at the mouse cursor position
var pos = {Mouse: true};

//Create below a specific HTML element
var pos = {Tag:"opCalBtn"};
```

### Read More
- [showCalendar static](/docs/static/show-calendar)
- [showMenu static](/docs/static/show-menu)
- [showDialog static](/docs/static/show-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
