---
KEY: searchProgress
KIND: config-property
PATH: props/cfg/search-progress
ALIAS_EN: data, search, dosearch, loadsearchdata, shows, internal, work, process
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-progress
---
# SearchProgress ***(cfg)***

> When using data search (`doSearch, loadSearchData`), shows the internal work process
(`"API call and response waiting", "Data parsing", "Rendering started", "Rendering completed"`) sequentially in a progress bar format. 

> Since the progress bar operates asynchronously, there may be a slight difference from the actual sheet loading speed. 

> When lowering `SuppressMessage` during search to use other search messages, conflicts with this progress bar may occur, so 
 using `SuppressMessage` as 3 or 4 is recommended.

> When an error occurs during search, you can check which process caused the error in the progress bar. 


### Progress Bar Structure

![Progress Bar](../../../assets/imgs/showProgress.png)
<!-- IMAGE: Screenshot/Example Image - Progress Bar -->

The text displayed in the progress bar corresponds to the `SearchProgressMessage` and `DataSearchingMessage` values in the message file (ko.js, etc.).



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Do not use progress bar during data search (`default`)|
|`1(true)`|Use progress bar during data search|


### Example
```javascript
options.Cfg = {
    SearchProgress: true
};
```

### Read More
- [SuppressMessage cfg](./suppress-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.14|Feature added|
