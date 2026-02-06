---
KEY: format
KIND: appendix
PATH: appx/format
ALIAS_EN: defines, format, data, displayed, screen, appendix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/format
---
# Format ***(appendix)***
> Defines the format in which data is displayed on screen.

> For example, if the Type is "Int" and the Format is "#,###won", when the actual value is 15000, the sheet displays **15,000won**.

> ***The syntax differs depending on the [type](./type)***, and the actual cell value does not change. (When transmitting to the server through save operations, the actual value (without format applied) is sent.) 

>`When using special characters like ':' in Format such as "Result: #,###won", you must add '\\' before the special character.`
---

## 1. When Type is Text or Lines

### You can set characters to prepend or append to the actual value, or replace some characters in the original string with other characters, using a delimiter-separated string format. When using the Object format, you can set it as Key:Value pairs with the actual value and the display value.

**1) Delimiter-based method**
  * The first character is used as a delimiter, and the settings are listed separated by this delimiter.

  * The character used as the delimiter must not be included in the setting contents.

### Syntax
```javascript
// Delimiter-based method, '|' is the delimiter
Format: "|LetterType|Prefix|Postfix|Search|Flags|Replace"
```

|Value|Description|
|---|---|
|LetterType|Whether to distinguish case and other settings
0 : No case distinction
1 : Display English in lowercase
2 : Display English in uppercase
3 : Use lowercase of each locale's characters
4 : Use uppercase of each locale's characters|
|Prefix|String to prepend to the cell value|
|Postfix|String to append to the cell value|
|Search|String to find using regular expression, which will be replaced by the value in the Replace clause|
|Flags|JavaScript regex flags (i, g, m available)
*i : case insensitive, g : replace all from start to end, m : search including line breaks*|
|Replace|String to replace the string found by the Search clause|

### Example
*Column configuration*
```javascript
options.Cols = [
    {
        Name:"sTitle",
        Type:"Text",
        //Display all cell values in uppercase. Also prepend '<<<', append '>>>', and replace "=" characters in the cell value with ":::".
        Format:"|2|<<<|>>>|=|ig|:::"
    },
    ...
]
```
*Loaded data*
```json
{"Data":[
    {... "sTitle":"Red Devils=Red Devils", ...}
]}
```
*Data displayed in the sheet*

![Displayed data](/assets/imgs/textFormat2.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->





**2) Object method**
  * In JSON format (strings are also possible), composed of pairs of actual values and display strings.
  * When using English characters, case **must** be distinguished, and HTML code can be used in the display value.

### Syntax
```javascript
// Object method
Format: "{'Key1':'Value1', 'Key2':'Value2', 'key3':'Value3' ... }"
```

**[Delimiter-based method]**

|Value|Description|
|---|---|
|Key|Actual cell value (loaded from or sent to the server)|
|Value|String to replace the value set in Data (displayed on screen)|

### Example
*Column configuration*
```javascript
options.Cols = [
    {
        Name:"sCountry",
        Type:"Text",
        // When the cell value is A, it displays as Korea; B as Japan; C as China on screen.
        Format:"{'A':'<b>Korea</b>','B':'Japan','C':'China'}"
    }
    ...
]
```
*Loaded data*
```json
{"Data":[
    {... "sCountry":"A", ...}
]}
```
*Actual displayed data*

![Displayed data](/assets/imgs/textFormat4.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->


***For applying formats like resident registration numbers or card numbers with digits connected by delimiters in Text type, please use the [CustomFormat](/docs/props/col/custom-format) property.***









---
## 2. When Type is Date
* Combination of reserved words
  * Can be used by combining reserved words such as y(year), M(month), d(day), H(hour), m(minute), s(second) with non-reserved characters.
  * When the format is empty, the yyyy/MM/dd format is used as default.
  * For year, yyyy (4-digit display), yy (last 2-digit display: 2018 shows as 18, 2008 shows as 08), y (1-2 digit display: 2018 shows as 18, 2008 shows as 8) are available.
  * Other reserved words can use 2-digit display and 1-2 digit display. For example, for month, MM (2-digit display: 12 shows as 12, 08 shows as 08) and M (1-2 digit display: 12 shows as 12, 08 shows as 8) are available.

<!--!
  * `[Private description]` H means 24-hour format, h means 12-hour format.
!-->
<!--!
* Automatic format setting based on message file
  * You can use single-character reserved words like d, h to automatically set column format based on the message file. 


|Value|Description|
|---|---|
|m|Format including month and day data ("M/d")|
|d|Format including year, month, and day data ("M/d/yyyy")|
|h|Format including year, month, day, hour, and minute data ("M/d/yyyy H:mm")|
|t|Format including hour and minute data ("H:mm")|
|T|Format including hour, minute, and second data ("H:mm:ss")|
|Y|Format including year and month data with text ("April 2013")|
|D|Format including year, month, and day data with text ("23 April 2013")|
|l|Format including year, month, and day data with text, plus hour and minute data ("23 April 2013 9:10")|
|L|Format including year, month, and day data with text, plus hour, minute, and second data ("23 April 2013 9:10:20")|
!-->
### Syntax
```javascript
    // Combination of reserved words
    Format: "yyyy.MM.dd"
```

### Example
*Column configuration*
```javascript
    options.Cols = [
        {
            "Name" : "startDate",
            "Type" : "Date",
            "Format" : "yyyy.MM.dd",    //Format of data displayed on screen
            "EditFormat" : "dd-MM-yyyy",//Data format shown to user during editing
            "DataFormat" : "yyyyMMdd"   //Data format when receiving or sending data to the server
        }
        ...
    ]
```
*Loaded data*
```json
{"Data":[
    {... "startDate":"20190725", ...} //July 25, 2019
]}
```
*Actual displayed data*

![Displayed data](/assets/imgs/dateFormat1.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->

*Data displayed during editing*

![Data displayed during editing](/assets/imgs/dateFormat2.png "Data displayed during editing")
<!-- IMAGE: Screenshot/Example Image - Data displayed during editing -->


***In Date type, you can also set the data format received from the server or the format shown to users during editing through [DataFormat](/docs/props/col/data-format) and [EditFormat](/docs/props/col/edit-format) properties.***


***Date type and its related formats (Format, EditFormat, DateFormat) can be defined all at once through the [Extend](/docs/props/col/extend) property.***
*Extend:IB_Preset usage configuration*
```javascript
    options.Cols = [
        {
            "Name" : "startDate",
            "Extend" : IB_Preset.YMD // Uses a variable with pre-defined Type, Format, EditFormat, etc.
        }
        ...
    ]
```








---
## 3. When Type is Int or Float
* Combination of reserved words
  * "0" : Fills with 0 as default when there is no value.
  * "#" : Only displayed when there is a value.
  * "%" : Displays the value multiplied by 100.

  % must be used with # or 0. ex: "#,##0.##%"

  When you want to just add the "%" symbol after the original value without multiplying by 100, set it as `"#,###\\%"`.

  The above reserved words can be combined with non-reserved characters. ex:"$ #,##0.00"

  By separating with `;(semicolon)`, you can set different display formats for positive, negative, and 0 values.

<b>For characters '_', 'e', '8', '?', '*' '@', you must prefix them with `"\\"`. </b> 


  <mark>Columns with Type "Int" have "#,##0" as the default format, and "Float" columns have "#,##0.######" as the default format.</mark>

### Syntax
```javascript
    //Set different formats for positive, negative, and 0 using ;
    Format: "#,###won;credit #,###won;-"
```

### Example
*Column configuration*
```javascript
    options.Cols = [
        {
            Name:"sNum",
            Type:"Int",
            Format:"#,###won"
            // Format:"Plus #,###;Minus #,###;None" // 100 displays as Plus100, -100 as Minus100, 0 as None
        }
        ...
    ]
```
*Loaded data*
```json
{"Data":[
    {... "sNum":56200, ...}
]}
```
*Actual displayed data*

![Displayed data](/assets/imgs/intFormat.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->








---
## 4. When Type is Html
* In JSON format (strings are also possible), composed of pairs of actual values and display values. (Same as the object method for the Text type above)

### Syntax

```javascript
    // Object method
    Format: "{'Key1':'Value1', 'Key2':'Value2', 'key3':'Value3' ... }"
```

|Value|Description|
|---|---|
|Key|Actual cell value (loaded from or sent to the server)|
|Value|String to replace the value set in Data (HTML tag)|

### Example
```html
<style>
    .alertCircle{
        position:relative;left:30%;width:30px;height:25px;border-radius:50px;color:#FFFFFF;line-height:25px;font-size:12px
    }
</style>
<script>
options.Cols = [
    {

        Name:"ALERT",
        Type:"Html",
        Width:80,
        Format:{
                "0":"<div class='alertCircle' style='background-color:#009688;'>Safe</div>"
                ,"1":"<div class='alertCircle' style='background-color:#ff9800;'>Caution</div>"
                ,"2":"<div class='alertCircle' style='background-color:#db4437;'>Danger</div>"
            },
    }
    ...
]
</script>
```
|Loaded data|Actual displayed data|
|---|---|
|![Loaded data](/assets/imgs/htmlFormat1.png "Loaded data")
<!-- IMAGE: Screenshot/Example Image - Loaded data -->|![Displayed data](/assets/imgs/htmlFormat2.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->







---

## 5. When Type is Link

**1) Delimiter-based method**
  * The first character is used as a delimiter, and the settings are listed separated by this delimiter.

  * The character used as the delimiter must not be included in the setting contents.

### Syntax
```javascript
    // Delimiter-based method, '|' is the delimiter
    Format: "|UrlPrefix|UrlPostfix|HtmlPrefix|HtmlPostfix"
```

|Value|Description|
|---|---|
|UrlPrefix|String to be added before the actual link URL|
|UrlPostfix|String to be added after the actual link URL|
|HtmlPrefix|HTML code to be added before the link text displayed on screen|
|HtmlPostfix|HTML code to be added after the link text displayed on screen|

### Example
```javascript
    options.Cols = [
        {
            Name:"sLink",
            Type:"Link",
            //1. URL before the anchor tag
            //2. URL after the anchor tag
            //3. Text or HTML to prepend to the anchor tag
            //4. Text or HTML to append to the anchor tag
            Format:"|/EMS/gm1/board.do?contents=|&group=USER4"
            +"|<img src='./assets/imgs/hot.svg' style='width:20px;height:20px;'>"
            +"|<img src='./assets/imgs/new.jpg' style='width:20px;height:20px;'>"
        }
        ...
    ]
```
Loaded data ([Refer to Link type data structure](./type))
```json
{"Data":[
    {... "LinkData":"|487141|Best way to save and edit text data without a database|_self " ...}
]}
```
|Actual displayed data|Linked content|
|---|---|
|![Displayed data](/assets/imgs/linkFormat1.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->|![Displayed data](/assets/imgs/linkFormat2.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->|






**2) Object method**
 * In JSON format (strings are also possible), composed of option and string pairs.

### Syntax

```javascript
    // Object method
    Format: "{'UrlPrefix':'Value1', 'UrlPostfix':'Value2', 'HtmlPrefix':'Value3', 'HtmlPostfix':'Value4'}"
```

|Value|Description|
|---|---|
|UrlPrefix|String to be added before the actual link URL|
|UrlPostfix|String to be added after the actual link URL|
|HtmlPrefix|HTML code to be added before the link text displayed on screen|
|HtmlPostfix|HTML code to be added after the link text displayed on screen|

### Example
```javascript
    options.Cols = [
       {
           Name: "sLink",
           Type: "Link",
           Format: {
                    UrlPrefix:"/EMS/gm1/board.do?contents=",
                    UrlPostfix:"&group=USER4",
                    HtmlPrefix:"<img src='./assets/imgs/hot.svg' style='width:20px;height:20px;'>",
                    HtmlPostfix:"<img src='./assets/imgs/new.jpg' style='width:20px;height:20px;'>"
                },
        }
        ...
    ]
```
Loaded data ([Refer to Link type data structure](./type))
```json
{"Data":[
    {... "LinkData":"|487141|Best way to save and edit text data without a database|_self " ...}
]}
```
|Actual displayed data|Linked content|
|---|---|
|![Displayed data](/assets/imgs/linkFormat1.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->|![Displayed data](/assets/imgs/linkFormat2.png "Displayed data")
<!-- IMAGE: Screenshot/Example Image - Displayed data -->|








---

## 6. When Type is Img
**1) Delimiter-based method**
  * The first character is used as a delimiter, and the settings are listed separated by this delimiter.

  * The character used as the delimiter must not be included in the setting contents.


### Syntax
```javascript
    // Delimiter-based method, '|' is the delimiter
    Format: "|UrlPrefix|UrlPostfix|HtmlPrefix|HtmlPostfix|LinkPrefix|LinkPostfix"
```

|Value|Description|
|---|---|
|UrlPrefix|String to be added before the image src attribute|
|UrlPostfix|String to be added after the image src attribute|
|HtmlPrefix|HTML code to be added before the image tag|
|HtmlPostfix|HTML code to be added after the image tag|
|LinkPrefix|URL path to be added before the link navigated to when clicking the image|
|LinkPostfix|URL path to be added after the link navigated to when clicking the image|

### Example
```javascript
    options.Cols = [
        {
            Name: "sImg",
            Type: "Img",
            //1. Path to be added before the img tag's src value
            //2. Path to be added after the img tag's src value
            //3. Text or HTML to insert before the img tag
            //4. Text or HTML to insert after the img tag
            //5. Path to be added before the URL linked when clicking the image
            //6. Path to be added after the URL linked when clicking the image
            Format: "|http://ibsheet.com/demo/images/icons/|.jpg|<button cls='imgMBtn'>|</button>|/EMS/gm1/board.do?contents=|&group=USER4"
        }
        ...
    ]
```
([Refer to Image type data structure](./type))





**2) Object method**
 * In JSON format (strings are also possible), composed of option and string pairs.

### Syntax

```javascript
    // Object method
    Format: "{'UrlPrefix':'Value1', 'UrlPostfix':'Value2', 'HtmlPrefix':'Value3', 'HtmlPostfix':'Value4', 'LinkPrefix':'Value5', 'LinkPostfix':'Value6'}"
```

|Value|Description|
|---|---|
|UrlPrefix|String to be added before the image src attribute|
|UrlPostfix|String to be added after the image src attribute|
|HtmlPrefix|HTML code to be added before the image tag|
|HtmlPostfix|HTML code to be added after the image tag|
|LinkPrefix|URL path to be added before the link navigated to when clicking the image|
|LinkPostfix|URL path to be added after the link navigated to when clicking the image|

### Example
```javascript
    options.Cols = [
       {
           Name: "sImg",
           Type: "Img",
           Format: {
                    UrlPrefix: "http://ibsheet.com/demo/images/icons/",
                    UrlPostfix: ".jpg",
                    HtmlPrefix: "<button cls='imgMBtn'>",
                    HtmlPostfix: "</button>",
                    LinkPrefix: "/EMS/gm1/board.do?contents=",
                    LinkPostfix: "&group=USER4"
           }
        }
        ...
    ]
```


### Read More
- [Type appendix](./type)
- [CustomFormat col](/docs/props/col/custom-format)
- [DataFormat col](/docs/props/col/data-format)
- [EditFormat col](/docs/props/col/edit-format)
- [Format col](/docs/props/col/format)
- [CustomFormat cell](/docs/props/cell/custom-format)
- [DataFormat cell](/docs/props/cell/data-format)
- [EditFormat cell](/docs/props/cell/edit-format)
- [Format cell](/docs/props/cell/format)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
