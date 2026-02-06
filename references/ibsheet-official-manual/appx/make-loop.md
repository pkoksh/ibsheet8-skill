---
KEY: makeLoop
KIND: appendix
PATH: appx/make-loop
ALIAS_EN: rather, performing, loop, entire, loaded, data, better, terms
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/appx/make-loop
---
# Creating Loop Statements ***(appendix)***
> Rather than performing a for loop on the entire loaded data, it is better in terms of performance to construct logic using formula whenever possible.

> However, if it is difficult to accomplish through formula, there may be cases where you must create a loop statement that iterates through all rows or columns from beginning to end. 



## 1. Creating Row-Level Loop Statements
When constructing a loop at the row level, you can use the [getDataRows()](/docs/funcs/core/get-data-rows) function to receive all data rows as an array, then construct logic by accessing each row object in the array.

### Example
```javascript
  //This is a reference logic that performs a loop from the first data row to the last and returns an array of row objects where a specific column (column name: CHK) is checked.
  //In practice, you can use the getRowsByChecked() function to perform such operations.

  //Get all data rows as an array.
  var rows = sheet.getDataRows();
  var checkRowArr = [];
  for (var i = 0; i < rows.length; i++) {
    //If the CHK column is checked
    if (rows[i]["CHK"] == 1) {
      //Add to the array.
      checkRowArr.push(row);
    }
  }
  //Output the total number of checked rows to the console
  console.log(checkRowArr.length);
```

## 2. Creating Column-Level Loop Statements
When constructing a loop at the column level, you can use the [getCols()](/docs/funcs/core/get-cols) function to receive all columns, visible columns, or editable columns as an array, then construct logic by accessing each column name in the array.


### Example
```javascript
  //This is a reference logic that performs a loop based on the first data row and returns an array of column names where the Type is Text.

  //Extract only visible columns (excluding hidden columns)
  var colsArr = sheet.getCols("Visible");
  var textColArr = [];
  var fRow = sheet.getFirstRow(); //First row
  for (var i = 0; i < colsArr.length; i++) {
    //Compare the type of all columns in the first row
    if (sheet.getType(fRow,colsArr[i]) === "Text") {
        //Add to the array.
        textColArr.push(colsArr[i]);
    }
  }
  //Output columns with Type Text to the console
  console.log(textColArr);
```

### Read More
- [getDataRows method](/docs/funcs/core/get-data-rows)
- [getCols method](/docs/funcs/core/get-cols)
- [getFirstRow method](/docs/funcs/core/get-first-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
