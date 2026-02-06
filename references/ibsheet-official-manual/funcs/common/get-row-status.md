---
KEY: getRowStatus
KIND: method
PATH: funcs/common/get-row-status
ALIAS: sheet.getRowStatus, getRowStatus()
ALIAS_EN: returns, status, value, specific, row, getrowstatus, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/common/get-row-status
---
# getRowStatus ***(method)***

> Returns the status value of a specific row. 

> The priority for returning status values is as follows: 

> 

> 1. If the row status includes Added, it unconditionally returns Added first. 

> 2. If the row status includes Deleted, it unconditionally returns Deleted next. 

> 3. In all other cases, it returns Changed. 

> 4. If there is no status, it returns "". 


### Syntax
```javascript
void getRowStatus();
```

### Return Value
***string*** Row status

### Example
```javascript
sheet.getRowStatus( row ); // Returns the status value of the row specified as a parameter.
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|common|1.0.27|Feature added|
