---
KEY: noTreeLines
KIND: config-property
PATH: props/cfg/no-tree-lines
ALIAS_EN: whether, display, connection, lines, nodes, creating, sheet, uses
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/no-tree-lines
---
# NoTreeLines ***(cfg)***

> Sets whether to display connection lines between nodes when creating a sheet that uses a tree.

> When set to 1, tree nodes are displayed as simple collapse/expand button forms. 


###
![NoTreeLines](/assets/imgs/noTreeLines.png "Using NoTreeLines")
<!-- IMAGE: Screenshot/Example Image - NoTreeLines -->

[NoTreeLines: true]


![Normal Tree](/assets/imgs/tree.png "Normal Tree")
<!-- IMAGE: Screenshot/Example Image - Normal Tree -->

[Normal Tree]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Display node connection lines (`default`)|
|`1(true)`|Do not display node connection lines|


### Example
```javascript
options.Cfg = {
    NoTreeLines: true,        // Do not display node connection lines.
    ...
};
```

### Read More
- [MainCol cfg](./main-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|Feature added|
