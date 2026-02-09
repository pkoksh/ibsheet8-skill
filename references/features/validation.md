# Validation

IBSheet8 supports validation across three stages: during editing, on edit completion, and on save.

---

## 1. Validation During Editing - EditMask

Restricts characters that can be entered during cell editing using JavaScript regular expressions. Characters that do not match the regular expression cannot be entered at all.

Internally, the check `"inputValue".search(EditMask) >= 0` is used; if `true`, input is allowed; if `false`, input is restricted.

### Column Level Settings

```javascript
options.Cols = [
  // Only numbers can be entered
  { Type: "Text", Name: "code", EditMask: "^\\d*$", Width: 100 },
  // Only alphabetic characters can be entered
  { Type: "Text", Name: "engName", EditMask: "^\\w*$", Width: 120 },
  // All characters except spaces can be entered
  { Type: "Text", Name: "noSpace", EditMask: "^\\S*$", Width: 120 },
  // Only up to 10 digit numbers allowed
  { Type: "Text", Name: "shortNum", EditMask: "^\\d{0,10}$", Width: 100 }
];
```

### Cell Level Settings

You can apply EditMask to specific cells only, or specify it differently for each cell in retrieved data.

```javascript
// 1. Apply to a specific cell using setAttribute
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EditMask", "^\\S*$");

// 2. Set directly on the data row object
var row = sheet.getRowById("AR10");
row["CLSEditMask"] = "^\\w*$";
sheet.refreshCell({ row: row, col: "CLS" });

// 3. Specify per cell in retrieved data
{
  data: [
    { "CLSEditMask": "^\\d{0,10}$" }
  ]
}
```

---

## 2. Validation on Edit Completion - ResultMask

Validates the entire entered value with a regular expression when cell editing ends. Unlike EditMask which restricts at the character input level, ResultMask validates the final value at the point of edit completion.

### Basic Usage

```javascript
options.Cols = [
  // Email validation - display alert message
  {
    Type: "Text",
    Name: "email",
    ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
    ResultText: "Please check the email address.",
    Width: 200
  },
  // Email validation - display DIV layer popup message
  {
    Type: "Text",
    Name: "email2",
    ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
    ResultMessage: "Please check the email address.",
    ResultMessageTime: 800,
    Width: 200
  },
  // ID validation - 6 to 10 alphabetic characters
  {
    Type: "Text",
    Name: "userId",
    ResultMask: "^(([A-Z]|[a-z]){6,10})$",
    ResultText: "ID must be 6 to 10 alphabetic characters.",
    Width: 150
  }
];
```

### Validation Failure Message Options

| Property | Display Method | Description |
|----------|---------------|-------------|
| `ResultText` | `alert()` dialog | Displays a browser alert message on validation failure |
| `ResultMessage` | DIV layer popup | Displays a popup message inside the ibsheet8 on validation failure |
| `ResultMessageTime` | - | Sets the display duration (ms) for the ResultMessage popup |

### onResultMask Event

An event that fires on ResultMask validation failure. The subsequent behavior is controlled by the return value.

| Return Value | Behavior |
|-------------|----------|
| `0` (default) | Display the ResultText alert message and continue editing |
| `1` | Continue editing without a warning message |
| `2` | End editing without saving the value |
| `3` | Save the value to the cell and end editing |
| `4` | Save the value to the cell, end editing, and change the background color to red |

```javascript
options.Events = {
  onResultMask: function(evtParam) {
    if (evtParam.col === "userId") {
      // ID column: continue editing without alert
      return 1;
    }
    if (evtParam.col === "email") {
      // Email column: save the invalid value but mark with red background
      return 4;
    }
  }
};
```

### Checking Validation Results with the Error Cell Attribute

When ResultMask validation fails, the `Error` attribute of the corresponding cell is set to `1(true)`.

```javascript
var error = sheet.getAttribute(row, "email", "Error");
if (error) {
  // The email cell contains an invalid value
}
```

---

## 3. Required Input Check - Required

Setting `Required: 1` on a column displays a warning message for empty cells in that column when the save function is called, prompting the user to fill them in.

```javascript
options.Cols = [
  { Type: "Text", Name: "name", Header: "Name", Required: 1 },
  { Type: "Int", Name: "salary", Header: "Salary", Width: 70 }
];
```

The `RequiredPosition` option allows you to adjust the position of the required input mark displayed in the header.

---

## 4. Validation on Save

### ValidCheck (Cfg)

Performs validation when save functions (`doSave`, `getSaveJson`, `getSaveString`) are called, and marks cells that failed validation. Focus moves to the first cell that failed validation.

Check items: `EditMask`, `ResultMask`, `Required`, `Size`

```javascript
// Basic usage - move Focus to failed cell + enter edit mode
options.Cfg = {
  ValidCheck: true
};

// Detailed settings - move Focus only, do not enter edit mode
options.Cfg = {
  ValidCheck: {
    Focus: 1,
    Edit: 0
  }
};

// Customize the message displayed on validation failure
options.Cfg = {
  ValidCheck: true,
  ValidateMessage: "Please check the input values again."
};
```

> **Note**: When `ValidCheck` is `false` (default), only `Required` validation is performed when the save function is called. It must be set to `true` or an `object` to also perform `EditMask`, `ResultMask`, and `Size` checks.

### onValidation Event

An event that fires per cell during save function calls, handling custom validation based on business logic. Returning `true` stops the save.

```javascript
options.Events = {
  onValidation: function(evtParam) {
    // Check only a specific column
    if (evtParam.col !== "TextData") return;

    var prevCol = evtParam.sheet.getPrevCol(evtParam.col);

    // Stop save if the previous column value is 100 or more
    if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {
      var index = evtParam.sheet.getRowIndex(evtParam.row);

      evtParam.sheet.showMessageTime({
        message: "The Integer(Int) column cell value in row " + index + " is greater than 100.",
        time: 10000,
        buttons: ["OK", "Cancel"]
      });

      return true; // Stop save
    }
  }
};
```

---

## Comprehensive Example

An example that applies EditMask, ResultMask, Required, ValidCheck, and onValidation together.

```javascript
var options = {
  Cfg: {
    ValidCheck: true,
    ValidateMessage: "Please check the input values."
  },
  Cols: [
    {
      Header: "Name", Name: "name", Type: "Text",
      Required: 1,
      Width: 100
    },
    {
      Header: "Code", Name: "code", Type: "Text",
      EditMask: "^[A-Za-z0-9]*$",       // During editing: only alphanumeric characters allowed
      ResultMask: "^[A-Z]{2}\\d{4}$",   // On edit completion: validate "AB1234" format
      ResultText: "Code must be in the format of 2 uppercase letters + 4 digits.",
      Width: 120
    },
    {
      Header: "Email", Name: "email", Type: "Text",
      ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
      ResultMessage: "Please enter a valid email address.",
      ResultMessageTime: 1000,
      Width: 200
    },
    {
      Header: "Quantity", Name: "quantity", Type: "Int",
      Required: 1,
      Width: 80
    }
  ],
  Events: {
    onResultMask: function(evtParam) {
      if (evtParam.col === "email") {
        // Email: save the invalid value but display with red background
        return 4;
      }
      // Others: default behavior (display alert then continue editing)
    },
    onValidation: function(evtParam) {
      // Stop save if quantity is 0 or less
      if (evtParam.col === "quantity") {
        var val = evtParam.sheet.getValue(evtParam.row, evtParam.col);
        if (val <= 0) {
          evtParam.sheet.showMessageTime({
            message: "Quantity must be 1 or greater.",
            time: 5000
          });
          return true;
        }
      }
    }
  }
};
```

---

## Validation Flow Summary

| Stage | Timing | Property/Event | Behavior |
|-------|--------|----------------|----------|
| During editing | On character input | `EditMask` (col/cell) | Block characters that do not match the regular expression |
| Edit completion | On cell edit end | `ResultMask` + `ResultText`/`ResultMessage` | Validate final value with regular expression, display message on failure |
| Edit completion | On ResultMask failure | `onResultMask` event | Control subsequent behavior via return value (0~4) |
| Save | On save function call | `Required` | Check for empty values |
| Save | On save function call | `ValidCheck` (cfg) | Comprehensive check of EditMask/ResultMask/Required/Size |
| Save | On save function call | `onValidation` event | Custom business logic validation, stop save on true return |
