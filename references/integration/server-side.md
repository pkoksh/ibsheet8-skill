# 서버 통신 패턴

## 기본 CRUD 패턴

### 조회 (Read)

```javascript
// GET 방식
sheet.loadSearchData({
  url: "/api/items",
  method: "GET",
  param: { keyword: "검색어", page: 1 }
});

// POST 방식
sheet.loadSearchData({
  url: "/api/items/search",
  method: "POST",
  param: { keyword: "검색어", status: "A" },
  callback: function(result) {
    console.log(`${result.length}건 로드`);
  },
  errorCallback: function(error) {
    alert("조회 실패: " + error.message);
  }
});
```

### 저장 (Create/Update/Delete)

```javascript
function saveData() {
  const saveData = sheet.getSaveJson({ check: 1 });
  
  if (saveData.data.length === 0) {
    alert("변경된 데이터가 없습니다.");
    return;
  }
  
  fetch("/api/items/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(saveData.data)
  })
  .then(res => res.json())
  .then(result => {
    if (result.success) {
      sheet.acceptChanges();
      alert("저장 완료");
    } else {
      alert("저장 실패: " + result.message);
    }
  })
  .catch(error => {
    alert("서버 오류");
  });
}
```

---

## 상태별 분리 저장

```javascript
function saveData() {
  const added = sheet.getSaveJson({ check: 1, status: "I" }).data;
  const updated = sheet.getSaveJson({ check: 1, status: "U" }).data;
  const deleted = sheet.getSaveJson({ check: 1, status: "D" }).data;
  
  const promises = [];
  
  if (added.length > 0) {
    promises.push(fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(added)
    }));
  }
  
  if (updated.length > 0) {
    promises.push(fetch("/api/items", {
      method: "PUT",
      body: JSON.stringify(updated)
    }));
  }
  
  if (deleted.length > 0) {
    const ids = deleted.map(d => d.id);
    promises.push(fetch("/api/items", {
      method: "DELETE",
      body: JSON.stringify({ ids })
    }));
  }
  
  Promise.all(promises)
    .then(() => {
      sheet.acceptChanges();
      alert("저장 완료");
    })
    .catch(() => alert("저장 실패"));
}
```

---

## 페이징

### 서버 페이징

```javascript
let currentPage = 1;
const pageSize = 50;

function loadPage(page) {
  currentPage = page;
  
  sheet.loadSearchData({
    url: "/api/items",
    param: { page: currentPage, pageSize: pageSize },
    callback: function(result, response) {
      updatePagination(response.totalCount, response.totalPages);
    }
  });
}

function updatePagination(totalCount, totalPages) {
  document.getElementById("pageInfo").textContent = 
    `${currentPage} / ${totalPages} (총 ${totalCount}건)`;
}
```

### 무한 스크롤

```javascript
Events: {
  onScroll: function(evt) {
    if (evt.scrollTop + evt.clientHeight >= evt.scrollHeight - 50) {
      loadNextPage();
    }
  }
}

let loading = false;
let hasMore = true;

function loadNextPage() {
  if (loading || !hasMore) return;
  
  loading = true;
  currentPage++;
  
  sheet.loadSearchData({
    url: "/api/items",
    param: { page: currentPage, pageSize: 50 },
    append: true,
    callback: function(result) {
      loading = false;
      if (result.length < 50) hasMore = false;
    }
  });
}
```

---

## 에러 처리

```javascript
Events: {
  onDataError: function(evt) {
    hideLoading();
    
    switch (evt.status) {
      case 401:
        alert("세션 만료");
        location.href = "/login";
        break;
      case 403:
        alert("권한 없음");
        break;
      case 500:
        alert("서버 오류");
        break;
      default:
        alert("통신 오류");
    }
  }
}
```

---

## 로딩 표시

```javascript
Events: {
  onBeforeDataLoad: function(evt) {
    showLoading();
  },
  onDataLoad: function(evt) {
    hideLoading();
  },
  onDataError: function(evt) {
    hideLoading();
  }
}

function showLoading() {
  document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}
```

---

## 토큰 인증

```javascript
sheet.loadSearchData({
  url: "/api/items",
  headers: {
    "Authorization": "Bearer " + getAccessToken()
  }
});

// 전역 설정
IBSheet.setDefaultHeaders({
  "Authorization": () => "Bearer " + getAccessToken()
});
```
