---
KEY: onExCalendar
KIND: event
PATH: events/on-ex-calendar
ALIAS_EN: triggers, sheet, event, allows, control, external, calendar, onexcalendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/events/on-ex-calendar
---
# onExcalendar ***(event)***

> Triggers a sheet event that allows control of an external calendar.</br>
> This event fires at the firing point of the sheet's `onScroll`, `onKeyDown`, `onAfterFilter`, `onClick` events.</br>
> You can display an external calendar in the sheet cell area with the `onClickSide` event, and remove the external calendar in this event.

### Syntax

```plaintext
    onExcalendar: function (paramObject) {

    }
or
    sheet.bind("onExcalendar" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| sheet | `object` | Sheet object where the event occurred |
| params | `object` | The param argument of the delivered event (`onScroll`, `onKeyDown`, `onAfterFilter`, `onClick`) |
| evType | `string` | Name of the delivered event (`onScroll`, `onKeyDown`, `onAfterFilter`, `onClick`) |
| eventName | `string` | Name of this event (`onExcalendar`) |



### Return

**_boolean_**

### Example

```javascript
// Example of displaying an external calendar in the cell area in Cols options (dateRangePicker)
"Cols": [
  {
    "Header": "Date-daterangepicker","Type": "Date","Name": "DateData","Width": 200,"Align": "Center","CanEdit": 1,"Format": "yyyy-MM-dd","EmptyValue": "Please enter a date","DataFormat":"yyyyMMdd",
    "Button": "https://www.ibsheet.com/demo/js/lib/sheet/Main/calendar.png",
    OnClickSide: function (evtParam) {
      var eRow = evtParam.row;
      var eCol = evtParam.col;
      var DateCol = "DateData";
      var cellPos = evtParam.sheet.getCell(eRow, eCol).getBoundingClientRect();
      sheetPopCalendar(evtParam, cellPos, DateCol,true); //Single calendar
    }
  },
  {
    "Header": "Reservation Date(From~To)-daterangepicker","Type": "Date",
    "Name": "FromToData","Width": 250,"Align": "Center","CanEdit": 1,"Format": "yyyy-MM-dd","EmptyValue": "Please enter a date","DataFormat":"yyyyMMdd",
    "Button": "https://www.ibsheet.com/demo/js/lib/sheet/Main/calendar.png",
    "Range": 1, /*Enable selecting date range or multiple dates*/
    OnClickSide: function (evtParam) {
      var eRow = evtParam.row;
      var eCol = evtParam.col;
      var DateCol = "FromToData";
      var cellPos = evtParam.sheet.getCell(eRow, eCol).getBoundingClientRect();
      sheetPopCalendar(evtParam, cellPos, DateCol);
    }
  }
]

options.Events = {
  // Close external calendar events (onScroll, onKeyDown, onAfterFilter, onClick)
  onExcalendar : function (evtParam) {

    var isCal = false;
    var evtName = evtParam.evType;

    if (document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0] && document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0].style.display != 'none') isCal = true;

    switch (evtName) {
      case "onScroll":
        if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onAfterFilter":
        // When filter row is reset
        if (evtParam.sheet.FCol == "FromData" && evtParam.sheet.FRow[evtParam.sheet.FCol] == '') {
          evtParam.sheet.doFilter("ToData",'');
          if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        }
        break;
      case "onKeyDown": //When pressing the Esc key
        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onClick":
        console.log('onClick');
        break;
    }
  }
}

// Function to display external calendar from onClickSide event
function sheetPopCalendar (par, pos, DateCol, singleDatePicker, calHeight) {

  if (!par || !pos) return;

  // Sheet object where the calendar will be displayed
  const sheet = par.sheet;

  //Insert an input element to display the calendar
  if( $("#CalendarInput").length == 0 ) {

    // Property settings
    const inputElement = document.createElement("input");

    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", "CalendarInput");
    inputElement.setAttribute("tabindex", "-1"); //Prevent focus from moving to the hidden calendar input when pressing the tab key
    inputElement.setAttribute("style", "opacity: 0; position: absolute;");
    //inputElement.setAttribute("readonly", "true");

    //Add input for calendar display to body
	  document.body.appendChild(inputElement);
  }

  const datepicker = $('#CalendarInput');

  const sheetDate = sheet.getValue(par.row, DateCol); //Date value displayed in the sheet cell

  //Set the sheet cell data to the calendar input
  datepicker.val(sheetDate);

  //Calculate DOM height and space, then determine calendar position
  const datepickerHeight = calHeight || 290;
  const datepickersingleDate = singleDatePicker || false;  // Calendar height (size)
  const windowHeight = $(document).height();  // document height
  const spaceBelow = windowHeight - pos.bottom;

  const dropDirection = (spaceBelow > datepickerHeight) ? 'down' : 'up'; // Calculate whether the calendar expands upward or downward

  datepicker.daterangepicker({
    locale: {
      format: 'YYYY-MM-DD', // Date format
      separator: '~',      // Set separator to '~' (between From - To)
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      fromLabel: 'Start Date',
      toLabel: 'End Date',
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    drops: dropDirection,
    singleDatePicker: datepickersingleDate, // Range selection calendar, single calendar
    showDropdowns: true,     // Enable dropdown selection
    autoUpdateInput: false,  // Prevent auto update (only display user-selected date)

  });

  //Move the input position to the sheet's row, col and give focus to the input to open the calendar
  let leftX = pos.x;
  if (par.row.Kind == "Filter"){ //If it's a filter row, move the input position to the left for filter operator selection (equals, not equals, etc.)
    leftX += 30;
  }

  datepicker.css({
    position: 'absolute',
    top: `${pos.y+window.scrollY}px`,
    left: `${leftX}px`,
	  height:`${par.event.Height}px`,
	  borderTopStyle : "none",
	  borderBottomStyle : "none",
    width: '30px' 		// Set appropriate width
  }).show().focus();

  // Callback called after date range selection and apply
  datepicker.on('apply.daterangepicker', function(ev, picker) {
    //Remove format separator when putting values into the sheet
    const startDate = picker.startDate.format('YYYYMMDD');
    const endDate = picker.endDate.format('YYYYMMDD');
    const dateRangeText = `${startDate} ~ ${endDate}`;
    const displayValue = picker.singleDatePicker ? startDate : dateRangeText

    // Display date in input box
    $(this).val(displayValue);

    // If it's a filter row, perform filter processing
    if (par.row.Kind === "Filter") {
      function filterOptions(data, excludeKey) {
        if (!Array.isArray(data) || data.length === 0) {
          return ["", "", ""];
        }

        const filtered = data.filter(item => item[0] !== excludeKey);
        const colNames = filtered.map(item => item[0]).join('|');
        const colValues = filtered.map(item => item[1]).join('|');
        const colTypes = filtered.map(item => item[2]).join('|');

        return [`|${colNames}|`, `|${colValues}|`, `|${colTypes}|`];

      }

      //If other filters besides the date column have been applied, the filter should be applied consecutively
      const [cols, values, operators]  = filterOptions(sheet.getFilter(0),DateCol);

      sheet.doFilter(
        `|${DateCol}${cols}`,
        `|${displayValue}${values}`,
        `|1${operators}`
      );
    }else{
      sheet.setValue(par.row, DateCol, displayValue);
    }
  });

  //Events needed to close the external calendar (onScroll, onKeyDown, onAfterFilter, onClick)
  sheet.bind("onExcalendar" , function(evtParam) {
    let isCal = false;
    const evtName = evtParam.evType;
    const picker = $('#CalendarInput').data('daterangepicker');

    if (picker && picker.isShowing) { //Check if the calendar is displayed
      isCal = true;
    }

    switch (evtName) {
      case "onScroll": //Close the calendar when scrolling in the sheet
        if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onKeyDown": //Close the calendar when pressing the Esc key
        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onClick":
        // Add logic here if you want to close the calendar when clicking on a specific area of the sheet
        break;
    }
  });
}
```

### Read More


### Since

| product | version | desc |
|---------|---------|------|
| core | 8.3.0.5 | Feature added |

