---
KEY: importExport
KIND: appendix
PATH: appx/import-export
ALIAS_EN: learn, download, sheet, content, excel, text, files, upload
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/import-export
---
# Excel File Upload/Download  ***(appendix)***
> Learn how to download sheet content as Excel or text files, or upload file content to the sheet.

> **This content explains server-based file download/upload methods.**

> **For client-based download/upload, please refer to the [exportData](/docs/funcs/export-data)/[importData](/docs/funcs/import-data) functions.**

## Required File Components
The following files are required for upload/download operations.
1. Server module (Excel module)
<!--!- Required files when using poi 3.13 (JAVA)

|File Name|Purpose|
|---|---|
|ibsheet8-1.0.x.jar|Excel server core module|
|ibsheet8-hwpx-1.0.x.jar|`down2Hwpx` server core module|
|poi-3.13, poi-ooxml-3.13, poi-ooxml-schemas-3.13 jar |Excel file creation/parsing module|
|commons-codec-1.6.jar|Encoding module for Excel upload, required for `down2Hwpx`|
|commons-logging-1.1.3.jar|Log module|
|ib-itext.jar|PDF download module|
|batik-all-xml.jar|Image processing module, required for `down2Hwpx`|

- Required files when using poi 4.1.2 (JAVA)
!-->
|File Name|Purpose|
|---|---|
|ibsheet8-1.x.x.jar|Excel server core module|
|ibsheet8-hwpx-1.0.x.jar|`down2Hwpx` server core module|
|poi-4.1.2, poi-ooxml-4.1.2, poi-ooxml-schemas-4.1.2|Excel file creation/parsing module|
|commons-collections4-4.4.jar, commons-compress-1.19.jar
commons-math3-3.6.1.jar, curvesapi-1.06.jar, servlet-api.jar
SparseBitSet-1.2.jar, xmlbeans-3.1.0.jar |Required files when using poi|
|commons-codec-1.13.jar|Encoding module for Excel upload, required for `down2Hwpx`|
|commons-logging-1.1.3.jar|Log module|
|ib-itext.jar|PDF download module|
|batik-all-1.17.jar, commons-io-2.11.0.jar
xml-apis-ext-1.3.04.jar, xmlgraphics-commons-2.9.jar
|Image processing module, required for `down2Hwpx`|

- Required files when using dotnet 4.0

|File Name|Purpose|
|---|---|
|IBSheet8-4.0.dll|Excel server core module|
|IBSheet8-4.0.resources.dll|Excel server core sub-module|
|Syncfusion.Compression.Base.dll, Syncfusion.Core.dll,
Syncfusion.XlsIO.Base.dll|Excel creation/parsing module|
|wkhtmltopdf.exe|PDF creation module|


### How to Verify Server Module (Excel Module)

You can check if the jar files are properly loaded on the server through the following statement.

```jsp
<%
System.out.println(com.ibleaders.ibsheet.util.Version.getVersion());
%>
```
When entered in a jsp file as above, if the following message appears in the server console, it is working correctly.

(Please check the version information of each jar file.)
```console
********************************************************************************
# ibsheet8-1.1.X
# IBSheet(H) 8.0.0.0~
# IBChart(H) 7.3.0.1~
********************************************************************************
Class Info  : org.apache.poi.ss.usermodel.Workbook
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.apache.poi.ooxml.POIXMLDocument
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbookPr
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbook
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.apache.xmlbeans.XmlBeans
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/xmlbeans-3.1.0.jar
jar Version :
Required Version : XMLBeans 2.3.0 or later
********************************************************************************
POI Core Library file:/D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-4.1.2.jar
POI OOXML Library file:/D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-4.1.2.jar
```

3. jsp, aspx files

|File Name|Purpose|
|---|---|
|DirectDown2Excel.jsp(aspx)|Excel file download|
|DirectLoadExcel.jsp(aspx)|Excel file upload|
|Down2Excel.jsp(aspx)|Excel file download|
|Down2Hwpx.jsp|Hangul (Hwpx) file download, not supported for dotnet|
|Down2Text.jsp(aspx)|Text file download|
|Down2Pdf.jsp(aspx)|PDF file download|
|LoadExcel.jsp(aspx)|Excel file upload|
|LoadText.jsp(aspx)|Text file upload|


4. Plugin file include file

All pages that will perform download/upload operations using the sheet must include the `/plugins/ibsheet-excel.js` file.

## Preparation

### Setting JSP File Path
When creating the sheet, you must set the path where the jsp files are located through the `Export.Url` property in the Cfg property.

```json
options.Cfg = {
    "Export":{
        "Url":"/assets/ibsheet/jsp"
    }
}
```

## Feature Implementation
You can download/upload sheet content through functions such as [down2Excel](/docs/funcs/excel/down-to-excel) or [loadText](/docs/funcs/excel/load-text).


```javascript
sheet.down2Excel({"fileName":"boardList.xlsx","sheetDesign":1,"merge":1});
```
![down2Excel](/assets/imgs/down2Excel.png)
<!-- IMAGE: Screenshot/Example Image - down2Excel -->


For detailed features of upload/download functions, please refer to the manual section for each function.

### Read More
- [Export cfg](/docs/props/cfg/export)
- [DirectDown2Excel method](/docs/funcs/excel/direct-down-to-excel)
- [DirectLoadExcel method](/docs/funcs/excel/direct-load-excel)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [Down2Hwpx method](/docs/funcs/excel/down-to-hwpx)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [loadText method](/docs/funcs/excel/load-text)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
|core|8.1.0.85|Down2Hwpx feature added|
|excel|1.1.2|Down2Hwpx feature added|
|jar|1.0.0|Down2Hwpx feature added|
