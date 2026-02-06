---
KEY: doPrint
KIND: method
PATH: funcs/core/do-print
ALIAS: sheet.doPrint, doPrint()
ALIAS_EN: prints, sheet, content, desired, format, doprint, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/do-print
---
# doPrint ***(method)***

> Prints the sheet content in the desired format.

> The paper size and orientation must be set the same as the browser print settings.


> **<mark>Note</mark> : print results may differ depending on the browser.** 

> **<mark>Note</mark> : `zoomFit` attribute is `0`when the value is `fitPage` attribute does not work** 

> **<mark>Note</mark> : MultiRecord([MultiRecord](/docs/props/cfg/multi-record)) is limited in sheets using this feature**

### Syntax
```js
void doPrint( prefix, postfix, pagePrefix, pagePostfix, fitPage, zoomFit, menu, pageOrient, firstPrintHead );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|prefix|`string`|Optional|top of the first page to be displayed Stringcolumn (HTML format possible)|
|postfix|`string`|Optional|bottom of the last page to be displayed Stringcolumn (HTML format possible)|
|pagePrefix|`string`|Optional|top of each page (header) to be displayed Stringcolumn (HTML format possible)|
|pagePostfix|`string`|Optional|bottom of each page (footer) to be displayed Stringcolumn (HTML  format possible)|
|fitPage|`number`|Optional|Fit-to-page option when the sheet size is larger than the page
`0`:None
`1`:Fit to width <i>(`default`)</i>
`2`:Fit to height
`3`:Fit to one page|
|zoomFit|`number`|Optional|Fit-to-page option when the sheet size is smaller than the page
`0`:None
`1`:Fit to one page <i>(`default`)</i>|
|menu|`number`|Optional|whether use print dialog
`0`:Not used <i>(`default`)</i>
`1`:View row/column selection options only
`2`:View all options|
|pageOrient|`number`|Optional|Print paper orientation setting
`0`:Portrait <i>(`default`)</i>
`1`:Landscape

**<mark>Note</mark> : This property only works in Chrome browser**|
|firstPrintHead|`boolean`|Optional|Print the sheet header only on the first page when printing
`0(false)`:all pagein sheet's header display <i>(`default`)</i>
`1(true)`:Display sheet header on first page only
|

#### `pagePrefix`, `pagePostfix`'s reserved word usage

* `%1`: Horizontal page index
* `%2`: Vertical page index
* `%3`: Page index
* `%4`: Horizontal page count
* `%5`: Vertical page count
* `%6`: Page count

### Return Value
***none***

### Browser Constraint

|Browser|Constraint|
|-------|----------|
|Chrome|No constraints|
|Edge(Chrominu)|No constraints|
|Firefox|Sheet style, HTML style not applied
`pageOrient` Not available|
|Opera|`pageOrient` Not available|
|IE11|Sheet style, HTML style not applied
`pageOrient` Not available|

### Examples

#### When using only the options object

```js
var options = {
  prefix: "<div style='background-color:#EDEDED;padding:10px'>User: John Doe</div>",
  pagePostfix: "<div style='text-align:center;font-size:20px'>[%2 / %5]</div>",
  fitPage: 1
};

sheet.doPrint(options);
```

#### CSSWhen using with

`prefix`, `pagePrefix`, `pagePostfix`, `postfix` class names are unique and cannot be changed. If size-related properties are defined with other class names, they will not be reflected in the print page layout.

##### HTML

```html
<!-- ... -->
<head>
  <!-- ... -->
  <link href="ibsheet-print.css" rel="stylesheet" type="text/css" />
  <!-- ... -->
</head>
```

##### SCSS (ibsheet-print.scss)

```scss
BODY[class*=BodyPrint] > DIV[class*=PrintPage] DIV[class*=PaddingWrapper] {
  > .prefix {
    font-size: 2rem;
    font-weight: bold;
    padding: 1.5rem 0 1rem;
    text-align: center;
  }
  > .pagePrefix {
    text-align: right;
    padding: 1rem 0;
  }
  > .pagePostfix {
    font-size: .5rem;
    text-align: center;
  }
  > .postfix {
    font-size: .8rem;
    text-align: center;
  }
}
```

##### CSS (ibsheet-print.css)

```css
BODY[class*=BodyPrint] > DIV[class*=PrintPage] DIV[class*=PaddingWrapper] > .prefix {
  font-size: 2rem;
  font-weight: bold;
  padding: 1.5rem 0 1rem;
  text-align: center;
}
BODY[class*=BodyPrint] > DIV[class*=PrintPage] DIV[class*=PaddingWrapper] > .pagePrefix {
  text-align: right;
  padding: 1rem 0;
}
BODY[class*=BodyPrint] > DIV[class*=PrintPage] DIV[class*=PaddingWrapper] > .pagePostfix {
  font-size: .5rem;
  text-align: center;
}
BODY[class*=BodyPrint] > DIV[class*=PrintPage] DIV[class*=PaddingWrapper] > .postfix {
  font-size: .8rem;
  text-align: center;
}
```

##### JavaScript

`prefix`, `pagePrefix`, `pagePostfix`, `postfix` If the value format is not HTML, the class name of the corresponding attribute is automatically added to the DIV element.

```js
var options = {
  prefix: 'Document Title',
  pagePrefix: 'IB Leaders',
  pagePostfix: '[ %3 / %6 ]',
  postfix: 'Powered by IBSheet8'
};

sheet.doPrint(options);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.0.0.17|`pageOrient` Feature added|
|core|8.1.0.51|`firstPrintHead` Feature added|