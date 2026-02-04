# 트리 그리드

## 기본 설정

```javascript
Cfg: {
  TreeMode: true,
  TreeCol: "name",
  TreeIdCol: "id",
  TreeParentCol: "parentId"
}
```

## 데이터 형식

### 평면 구조 (parentId)

```javascript
const data = [
  { id: 1, parentId: null, name: "시스템관리" },
  { id: 2, parentId: 1, name: "사용자관리" },
  { id: 3, parentId: 1, name: "권한관리" }
];
```

### 계층 구조 (children)

```javascript
Cfg: { TreeMode: true, TreeChildCol: "children" }

const data = [
  {
    id: 1, name: "시스템관리",
    children: [
      { id: 2, name: "사용자관리" },
      { id: 3, name: "권한관리" }
    ]
  }
];
```

---

## 트리 API

### 펼침/접기

```javascript
sheet.expandAll();
sheet.collapseAll();
sheet.expand(row);
sheet.collapse(row);
sheet.toggle(row);
sheet.expandToLevel(2);
```

### 노드 추가

```javascript
sheet.addRow({ init: { name: "새 메뉴", parentId: null } });
sheet.addChildRow(parentRow, { init: { name: "하위 메뉴" } });
sheet.addSiblingRow(row, { init: { name: "형제 메뉴" } });
```

### 노드 이동

```javascript
sheet.moveNode(row, newParentRow);
sheet.moveNode(row, null);  // 루트로
sheet.moveUp(row);
sheet.moveDown(row);
```

### 노드 조회

```javascript
const parent = sheet.getParentRow(row);
const children = sheet.getChildRows(row);
const descendants = sheet.getDescendants(row);
const roots = sheet.getRootRows();
const level = sheet.getLevel(row);
const isLeaf = sheet.isLeaf(row);
```

---

## 동적 로딩 (Lazy Loading)

```javascript
Cfg: { TreeMode: true, TreeLazyLoad: true }

Events: {
  onBeforeExpand: function(evt) {
    if (this.getChildRows(evt.row).length > 0) return true;
    
    const parentId = this.getValue(evt.row, "id");
    fetch(`/api/tree/children?parentId=${parentId}`)
      .then(res => res.json())
      .then(children => {
        children.forEach(child => this.addChildRow(evt.row, { init: child }));
        this.expand(evt.row);
      });
    
    return false;
  }
}
```

---

## 드래그 앤 드롭

```javascript
Cfg: { TreeMode: true, CanDrag: true, CanDrop: true }

Events: {
  onBeforeDrop: function(evt) {
    if (this.getLevel(evt.targetRow) >= 2) {
      alert("3단계까지만 가능");
      return false;
    }
  }
}
```

---

## 트리 스타일링

```javascript
{
  Header: "메뉴명",
  Name: "name",
  OnCellStyle: function(row, col) {
    const level = this.getLevel(row);
    if (level === 0) return { FontWeight: "bold", Background: "#e3f2fd" };
    return null;
  }
}

Cfg: {
  TreeIcons: {
    expanded: "▼",
    collapsed: "▶",
    leaf: "•"
  }
}
```
