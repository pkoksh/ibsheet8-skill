---
KEY: type
KIND: appendix
PATH: appx/type
ALIAS_EN: defines, type, column, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/type
---
# Type  ***(appendix)***
> Defines the type of each column.

### Column Type Features
|Type|Preview|Description|
|---|---|---|
|*Text*|![Text](/assets/imgs/typeText.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|The most general type that can be used with both numbers and characters. Even if line break characters are used in the data, it is displayed as a single row.|
|*Lines*|![Text](/assets/imgs/typeLines.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|Like the Text type, it can be used with both numbers and characters. When the data contains line break characters (`\n` or `\r\n`), the row height is increased to display them.|
|*Int*|![Text](/assets/imgs/typeInt.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|An integer type that only allows numbers and the "-" sign.
The default value is 0. To set ""(empty) as the default value, you must set CanEmpty:1 in the Cols configuration.
 The displayed value may differ from the actual value depending on the format.
<mark>Default Format:"#,##0"</mark>|
|*Float*|![Text](/assets/imgs/typeFloat.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|A decimal type that only allows numbers, "-" and "." signs. ("," input is treated as a decimal separator)
The default value is 0. To set ""(empty) as the default value, you must set CanEmpty:1 in the Cols configuration.
The displayed value may differ from the actual value depending on the format.
For example, if a column has an actual value of 5432.629 and the format is set to [Format](./format):"#,##0.00", the sheet will display 5,432.63.
<mark>Default Format:"#,##0.######"</mark>|
|*Date*|![Text](/assets/imgs/typeDate.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|A date type where dates can be modified through a calendar popup or direct input.
Internally, the product manages values as timestamp numbers in new Date().getTime() format.
Because of this, if ([DataFormat](/docs/props/col/data-format)) is not set, a timestamp number like 1563980400000 will be extracted instead of a date string like 2019-07-25.
When "Type":"Date", you must set `DataFormat`.

You can specify the format for data loading, editing, and display through [EditFormat](/docs/props/col/edit-format) and [Format](/docs/props/col/format).|
|*Button*|![Text](/assets/imgs/typeButton.png)
<!-- IMAGE: Button Image - Text -->|Displays a button and allows you to define functionality through the onClick event when clicked.
Without special settings, the button is created using the \<u\> tag.
You can set up buttons using the actual \<button\> tag or HTML-formatted buttons through the [Button](/docs/props/col/button) property.
To prevent the click action of a `Button` type, you can control it through the [Disabled](/docs/props/col/disabled) property.

[Detailed description and examples](https://portal.ibsheet.com/support/solutions/articles/72000529987-%EB%B2%84%ED%8A%BC-button-%EC%97%B4-column-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95)|
|*Link*|![Text](/assets/imgs/typeLink.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|You can set the URL to link to when clicking the text displayed in the cell, along with the target.
Text style can be changed using [TextStyle](/docs/props/col/text-style) and [TextColor](/docs/props/col/text-color).
Data must be entered or loaded as a delimiter-separated string in the following order:
**\|URL\|Text\|Target**
Here, Target is the target for navigation when the Link is clicked (_blank, _parent, _self, _top, specific window name).
ex) "\|./pos/acceptCos.do\|Check Conditions\|_self "

 **The very first character of the string from the data is used as the delimiter.**  |
|*Html*|![Text](/assets/imgs/typeHtml.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|Displays HTML tags entered as values in the column without any conversion.
Editing is not possible by default, and caution is needed as tags will be exposed as-is in the Excel file when downloading to Excel.|
|*Img*||Displays images in the column and allows setting a URL link when clicked.
Data must be entered or loaded as a delimiter-separated string in the following order:
**\|URL\|Width\|Height\|Left\|Top\|LinkUrl\|Target\|Background-size**
Above, LinkUrl is the URL path to navigate to when the user clicks the image, and Target has the same meaning as the target of an anchor tag, just like in the Link type.
Width, Height, Left, Top represent the image width, height, horizontal offset from original position, and vertical offset from original position respectively (css sprites).
 Background-size refers to the background image size. By default, the `background-size:100% 100%` property is applied, and you can use the same properties as in CSS.
**The very first character of the string from the data is used as the delimiter.** |
|*Enum*|![Text](/assets/imgs/typeEnum.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|Similar to the HTML select tag, this type displays multiple items in a list format within a single cell.
 You can set the display text and values of items through the [Enum](/docs/props/col/enum) and [EnumKeys](/docs/props/col/enum-keys) properties.
Data should be entered or loaded as one of the values defined in EnumKeys.|
|*Radio*|![Text](/assets/imgs/typeRadio.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|Similar to HTML Radio, this type displays multiple items in radio format within a single cell.
 You can set the display text and corresponding values through the [Enum](/docs/props/col/enum) and [EnumKeys](/docs/props/col/enum-keys) properties.
Data should be entered or loaded as one of the values defined in EnumKeys.|
|*Bool*|![Text](/assets/imgs/typeBool.png)
<!-- IMAGE: Screenshot/Example Image - Text -->![Text](/assets/imgs/typeBool2.png)
<!-- IMAGE: Screenshot/Example Image - Text -->|Like a checkbox, this type only has two values internally: 0/1 or false/true.|
|*Pass*||A password format type that hides the entered value and displays *** regardless of the number of characters.|
|*File*||Provides functionality to select, upload, and download files.
Not available in IE 9 or below.
To hide the left and right buttons of the `File` type, you can control it through the [Disabled](/docs/props/col/disabled) property.

Data specification: [File Type data specification](/docs/dataStructure/filte-type-structure)|
|*Drag*||A column for dragging rows. When dragged, the row is dragged.|
d
### Read More
- [Button col](/docs/props/col/button)
- [EditFormat col](/docs/props/col/edit-format)
- [DataFormat col](/docs/props/col/data-format)
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Type col](/docs/props/col/type)
- [Type cell](/docs/props/cell/type)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.5|Feature added|
|core|8.1.0.88|Drag type column added|
