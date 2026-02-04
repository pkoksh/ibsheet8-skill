# IBSheet8 기술지원 FAQ

> IBSheet8 제품의 고객 문의 및 지원팀 답변을 정리한 문서입니다.
> RAG(Retrieval Augmented Generation) 시스템 활용을 위해 중복 제거 및 핵심 내용만 추출하였습니다.

## 목차

- [기타](#기타)
- [데이터_처리](#데이터-처리)
- [마이그레이션(Sheet7→8)](#마이그레이션Sheet78)
- [서버_통신](#서버-통신)
- [성능_최적화](#성능-최적화)
- [스타일_UI](#스타일-UI)
- [엑셀_다운로드_업로드](#엑셀-다운로드-업로드)
- [오류_해결](#오류-해결)
- [이벤트](#이벤트)
- [컬럼_설정](#컬럼-설정)
- [함수_메소드](#함수-메소드)

---

## 기타

### 1. display:none 인 div에 시트를 생성하고 보이게 했더니 시트가 안보인다.

**질문:** display:none 인 div에 시트를 생성하고 보이게 했더니 시트가 안보인다.

**답변:** display:none 이면 시트 생성 시 높이, 너비값을 계산할 수가 없어서 제대로 안그려진다. 시트 생성이 끝난 후 onRenderFirstFinish 등에서 숨기거나, none 처리하지 말고 시트를 맨 아래쪽에 깔아서 존재는 하지만 눈에 안보이도록만 처리하면 된다.

---

### 2. license has expired가 뜬다.

**질문:** license has expired가 뜬다.

**답변:** 원격 연격해서 보니 운영이라고 하는데, 개발 라이선스를 신청한 url임 개발 라이선스 만료되었다고 안내해주고, 기존 운영으로 발급된 url 안내함. 추가 필요한 경우 재발행 신청하면 영업팀 확인 후 발급할테니 메일로 신청하라고 안내

---

### 3. Enum 타입 데이터가 많을 때 목록이 화면 밖으로 계속 펼쳐진다

**질문:** IBSheet에서 Type:Enum 사용 시 데이터가 많으면 Enum 목록이 화면 하단까지 계속 펼쳐지는데, 높이를 제한하고 스크롤로 표시할 수 있는지

**답변:** LWC와 같은 Shadow DOM 환경에서는 시트가 위치한 뷰포트 높이를 정확히 계산하기 어려워 Enum 메뉴의 자동 높이 계산이 동작하지 않는다. 이로 인해 Enum 목록이 모두 펼쳐지도록 동작한다. 해당 환경에서는 MenuMaxHeight 속성을 사용해 Enum 메뉴의 최대 높이를 직접 지정해야 한다.

---

### 4. 페이지 전환 시 간헐적으로 Duplicate sheet_id 오류가 발생하며 시트가 생성되지 않는다

**질문:** 페이지 전환 시 간헐적으로 [IBSheet.create({id:'undefined'})]} Can't creation : Duplicate sheet_id already exists. "undefined" 오류가 발생한다. IBSheet가 생성되지 않는 이유가 무엇인지?

**답변:** 해당 오류는 IBSheet.create() 호출 시 동일한 id를 가진 시트가 이미 존재할 때 발생한다. 오류 메시지상 생성 시도한 id가 "undefined"로 확인되며, 이는 시트 생성에 사용하는 변수가 초기화되기 전에 create가 호출되는 경우로 보인다. 또한 페이지 전환 과정에서 기존 시트가 완전히 제거되기 전에 다시 생성되는 경우에도 발생할 수 있다. 이를 방지하려면 create 전에 기존 시트를 제거하는 처리가 필요하다. 해당 현상 방지를 위해 아래와 같은 코드를 create 전에 호출하시기 바랍니다.

```javascript
if(IBSheet.hasSheet("create 시 넣을 id명")){
     create 시 넣을 id명.dispose();
}

IBSheet.create(~);
```

---

### 5. 필터행에서 소수점 범위 입력 시 뒤 소수점이 입력되지 않는다

**질문:** 필터행에 1.6~3.4로 입력하려고 시도하면 뒤에 소수점이 입력되지 않는다.

**답변:** Type:Float 컬럼에서 1.2~1.6과 같이 소수점이 포함된 범위 필터를 입력할 경우, 두 번째 소수점이 입력되지 않는 이슈가 있었음 → ibsheet.js 8.3.0.43 패치되어 배포함

---

### 6. [URL] SearchMode:5에서 하단 커스텀 페이지 네비게이션 구성 방법

**질문:** [URL] SearchMode:5 사용 시 시트 하단에 << < 1 2 3 … > >> / 페이지당 건수 / 총 페이지 수 형태의 페이지 네비게이션을 표시하고, 실시간 데이터 변경 시 전체 페이지 수가 자동 갱신되며, InfoRow 좌측에는 총 건수, 우측에는 클릭 가능한 이미지 버튼 2개를 표시할 수 있는지

**답변:**SearchMode:5에서는 InfoRow를 1개만 사용할 수 있으므로, 상단 InfoRow에는 총 건수와 버튼(이미지)을 배치하고 하단 페이지 네비게이션은 CustomPaging 기능으로 별도 생성해야 한다. SearchMode:5와 CustomPaging:1을 설정하면 공통 페이징 UI를 사용할 수 있으며, 전체 데이터 건수는 조회 시 서버 응답 기준으로 자동 갱신되어 페이지 수도 자동 재계산된다. InfoRow 우측 버튼은 InfoRowConfig.Layout에 HTML로 직접 구성한다.

```javascript
"Cfg": {
  "SearchMode": 5,
  "CustomPaging": 1,
  "PageLength": 50,
  "MaxPages": 9,
  "InfoRowConfig": {
    "Visible": true,
    "Layout": ["Count", getInfoRowBtns()],
    "Format": "<b>총 TOTALROWS건</b>"
  }
}

function getInfoRowBtns() {
  return `
    <img src="/img/btn1.png" onclick="fn1()" />
    <img src="/img/btn2.png" onclick="fn2()" />
  `;
}

```

---

### 7. Base64로 인코딩된 이미지 데이터를 그리드에 표시할 수 있는지

**질문:** DB에 Base64로 인코딩된 문자열(사인 이미지)이 있는데 이를 IBSheet 그리드에 표현할 수 있는지

**답변:** 데이터 조회 시 이미지 URL 대신 Base64 형식의 데이터를 그대로 내려주면 그리드에서 이미지로 표현할 수 있다. 별도의 변환 과정은 필요하지 않다.

```javascript
    Cols: [
      {
        Header: "사인 이미지",
        Type: "Img",
        Name: "ImageData",
        Width: 80,
        Align: "Center"
      }
    ]
  
  data: [
    {
      ImageData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
    }
  ]
```

---

### 8. IBSheet 및 IB 제품군 최신 버전 파일 요청

**질문:** IBSheet, IBChart, IBMap, IBTab, IBCalendar 제품을 사용하기 위해 최신 버전 파일을 받을 수 있는지

**답변:** support@ibleaders.co.kr로 최신버전 요청 바랍니다. 요청 시 [고객사명] / [프로젝트명] 정보를 함께 보내주시기 바랍니다.

---

### 9. setAllCheck 호출 시 값은 변경되나 체크 상태가 반영되지 않는다. rerender를 해야 반영된다.

**질문:** setAllCheck 시 값은 변하는데 체크가 되지 않는다. rerender를 해야 반영된다.

**답변:** 해당 이슈는 특정 버전(3.0.34부터)에서 setAllCheck 호출 시 체크 상태가 정상 반영되지 않는 문제가 있어 수정 및 패치되었다. 패치된 버전은 8.3.0.39-20251107-14 이다.

---

### 10. 숫자 범위 초과 입력 후 스크롤 이동 시 클릭 오류 발생

**질문:** 그리드 내 숫자 범위를 벗어나도록 입력 후 스크롤로 상단 이동 후 클릭 시 비정상 동작이 발생합니다. 관련하여 har 파일을 첨부드리니 확인 부탁드립니다.

**답변:** 팝업 화면 크기가 작아 스크롤이 생성된 상태에서 그리드 중앙에 alert가 노출되며 포커스 이동으로 발생한 현상입니다. 다만, 해당 메시지가 고객들에게 노출될만한 alert가 아니기 때문에 다른 방식으로 처리하였습니다. EditMask(정규식 입력 제한)와 Size(입력 글자수 제한) 설정으로 해당 메시지가 발생하지 않도록 수정할 수 있습니다.

---

### 11. 한 화면에서 시트 2개 사용 가능 여부

**질문:** 한 화면 안에 시트를 2개 생성하여 사용할 수 있는지 문의드립니다.

**답변:** 가능합니다. 시트가 들어갈 div를 2개 생성한 뒤 IBSheet.create 호출 시 id를 중복되지 않게 설정하고, 각각 다른 el을 지정하면 됩니다.

```html
<div style="height:calc(100% - 128px)">
  <div style="height:100%">
    <div id="LeftSheetDiv" style="float:left;width:29%;height:100%"></div>
    <div style="float:left;width:2%;height:100%"></div>
    <div id="RightSheetDiv" style="float:left;width:69%;height:100%"></div>
  </div>
</div>
```

```javascript
// 시트 객체 생성
'create': function () {
    var options1 = this.init.LeftSheetInit;
    options1.Events = this.event;

    IBSheet.create({
        id: 'LeftSheet',          // 좌측 시트 id
        el: 'LeftSheetDiv',       // 좌측 시트 div
        options: options1
    });

    var options2 = this.init.RightSheetInit;
    options2.Events = this.event;

    IBSheet.create({
        id: 'RightSheet',         // 우측 시트 id
        el: 'RightSheetDiv',      // 우측 시트 div
        options: options2
    });
}

```

---

### 12. 최신 라이선스 적용 후에도 Sheet8 로고 노출

질문: 최신 라이선스를 적용했는데도 sheet8 로고가 시트 내에 노출됩니다.

답변: Sheet, Chart는 최신 운영 라이선스가 적용되어 있으나, IBMultiCombo 라이선스 키가 구버전이라 마지막에 호출되며 전체 라이선스가 덮어써지는 현상입니다. 원격으로 IBMultiCombo 라이선스 교체 가이드 후 해결되었습니다.

---

### 13. 페이징 방식 사용 시 주의사항

질문: 페이징 방식을 사용할 때 주의해야 할 점에 대한 전체적인 설명을 요청드립니다.

답변: SearchMode:3,4,5 사용 시 반드시 doSearchPaging으로 조회해야 하며, Total에는 DB 전체 데이터 건수를 설정해야 IBSheet에서 페이지 수 계산이 가능합니다. 실제 Data에는 Cfg.PageLength 만큼만 내려와야 합니다.

---

### 14. 전체 데이터 건수를 외부 Element에 표시하고 싶음

질문: 시트 우측 상단에 표시되는 전체 데이터 건수를 외부 Element에 표시하고 싶습니다.

답변: InfoRow 우측 영역인지, 외부영역에 표사하냐에 따라 방법이 다릅니다. InfoRow 영역에 표시하려면 InfoRowConfig에서 Layout, Space 설정으로 위치를 제어하면 되고, 시트 외부 Element에 표시하려면 setCountInfoElement를 사용하면 됩니다.

```javascript
// infoRow에 위치
options.Cfg = {
    InfoRowConfig: {
        "Visible": true,
        "Layout": [
            "Paging", // 페이지네이션
            "Count" // 전체 건수
        ],
        "Space": "Top" // InfoRow 위치 (Top / Bottom)
    }
};


// 외부 Element에 전체 데이터 건수 표시
sheet.setCountInfoElement('countElem');
sheet.setCountInfoElement(document.getElementById('countElem'));

```

---

### 15. 브라우저 크기에 따라 시트 크기 자동 조절

질문: 브라우저 크기에 맞게 시트 크기를 변경하고 싶습니다.

답변: 시트 생성 시 width, height를 100%로 설정하면 상위 div 크기를 따라 자동 조절됩니다. 이 경우 레이아웃 깨짐 방지를 위해 MinWidth 설정이 필요합니다.

---

### 16. Vue 컴포넌트로 생성한 IBSheet 삭제 방법

질문: loader가 아닌 Vue 컴포넌트 방식으로 시트를 생성하고 있습니다. 기존에는 loader.removeSheet로 시트를 제거했는데, 현재 테스트해보니 동작하지 않습니다. 어떻게 처리해야 하나요?

답변: Vue 컴포넌트 방식으로 IBSheet를 생성한 경우, loader.removeSheet는 사용하지 않습니다. Vue3의 v-if 조건으로 IBSheet 컴포넌트를 제어하여 컴포넌트 자체를 제거하는 방식으로 처리해야 합니다. 원격으로 Vue3 v-if 기반 생성/제거 샘플을 가이드하였습니다.

참고 샘플: https://stackblitz.com/edit/vitejs-vite-mxtzf2pd?file=src%2FApp.vue,src%2Fmain.js

---

### 17. Enum 타입 Filter Defaults 아이콘 위치 변경

질문:Enum 타입을 Filter의 Defaults로 설정하면 아이콘이 우측 정렬됩니다. 아이콘을 좌측으로 변경하고 싶습니다.

답변: Enum 타입의 Defaults 아이콘은 일반 Filter와 별도로 처리됩니다. FilterEnumIconLeft, FilterDefaultsIconLeft을 통해 Enum 아이콘 위치와 Defaults로 펼쳐지는 체크박스 위치를 각각 제어할 수 있습니다.

---

### 18. IBSheet 라이선스 만료 사전 알림 기능 문의

질문: IBSheet 패키지 내에서 라이선스 만료일 이전에 알림을 받을 수 있는 기능이 있는지 문의드립니다. 없다면 별도 구현 예정입니다.

답변: IBSheet 내부에는 라이선스 유효 여부를 판단하여 경고 메시지를 표시할지 결정하는 기능만 존재합니다. 만료일 기준 사전 알림(예: N일 전 알림) 기능은 제공하지 않으므로, 라이선스 발급 시 만료일 정보를 기준으로 별도 로직을 구현하셔야 합니다.

---

### 19. fg.DragObject:2 설정 시 드래그 메시지 div 증가 이슈

질문: Cfg.DragObject: 2 설정 후 행 드래그 시 마우스를 움직일 때마다 메시지 div가 계속 늘어납니다.

답변: 해당 이슈는 IBSheet 버그로 확인되었으며 ibsheet.js 8.3.0.34-20251016-16 버전에서 패치 완료되었습니다. 해당 버전 이상으로 업데이트를 권장드립니다.

---

### 20. ibsheet.com 예제 생성 방식 수정

질문: ibsheet.com 예제 코드에서 create 및 데이터 조회 구간이 수정되었음을 알려드립니다.

답변: 기존 예제에서 사용하던 var ib = ib || {}; 형식은 모두 제거되고, var samplePageObj = samplePageObj || {}; 형태로 수정되었습니다.
데이터는 create 시점이 아닌 onRenderFirstFinish 이벤트에서 조회하도록 구조가 변경되었습니다.

---

### 21. 카드 컨텐츠 영역 iframe 내 캘린더 스크롤 발생 이슈

질문: 내부적으로 포탈을 구현하면서 대시보드 형태에 적용되는 각 카드 컨텐츠 영역을 iframe으로 구성하고 있습니다. 카드 컨텐츠에 캘린더를 구성하면서 오른쪽 카드 형태(캘린더 높이 고정)에서 왼쪽 카드 형태(캘린더 높이 유동)로 변경하였는데, 높이를 유동으로 변경하니 기존에는 없던 캘린더 내부 스크롤이 발생합니다. 오른쪽 카드에서도 캘린더 내부 스크롤이 발생하지 않게 할 수 있을지 문의드립니다.

답변: 캘린더는 달력 형태에서 4주 또는 5주 구성을 위해 최소 높이가 필요합니다. calc 함수로 높이를 설정하는 경우 min-height:600px 를 함께 설정해야 하며, 시트 생성 시 height:100%가 아닌 auto로 변경해야 합니다.

---

### 22. 이미지 경로 설정했으나 이미지가 노출되지 않음

질문: 이미지 경로를 /, public/ 등 여러 경로를 지정해보아도 이미지가 노출되지 않아 문의드립니다. 해당 방식으로 사용하는 것이 맞을까요?

답변: DefaultImage로 사용중이셨는데 DefaultValue를 사용해야 하며 DefaultValue:"|/이미지경로|||||" 형태로 설정해야 합니다.

---

### 23. 하나의 데이터로 여러 Row를 표현하는 방법 문의

질문: ibsheet에서 하나의 데이터 개체당 여러 row를 사용해야 할 경우 어떤 방식으로 구성해야 하는지 문의드립니다.

답변: 하나의 데이터를 여러 줄로 표시하는 멀티레코드 기능에 대한 문의입니다.  멀티레코드는 Cfg에 MultiRecord:true 설정 후 단위 데이터 행을 배열 구조로 구성해야 하며, 조회 전용 기능으로 제약사항이 존재합니다. 멀티레코드 전용 머지 속성을 활용하여 원하는 모양으로 구성할 수 있습니다.
(RecordRowSpan, RecordColSpan, RecordHColSpan, RecordHColTitle 기능 참고)

---

### 24. IB Chart React 샘플 문의

질문: 추가적으로 문의드립니다. 혹시 IB Chart React 샘플이 있는지 확인 부탁드립니다.

답변: React 환경에서 IBChart 사용 시 ibchartinfo.js의 createIBChart 함수 일부 수정이 필요합니다. IBChart 객체를 생성 후 반환하도록 수정한 뒤 제공한 샘플 링크를 참고하여 차트를 생성하면 됩니다.

```javascript
// ibchartinfo.js
function createIBChart(cont, id, opt) {
    var obj = {};

    if(typeof opt !== "undefined" && typeof opt === "object") {
        obj = opt;
    }

    obj["cont"] = cont;
    obj["id"] = id;

//    window[obj["id"]] = IBChart(obj);
    let tchart = IBChart(obj);

    //생성한 차트객체를 리턴
    return tchart;
}
```

참고 샘플: https://stackblitz.com/edit/vitejs-vite-623bhk9w?file=index.html

---

### 25. 조회중 이미지 표시 관련 문의

**질문:** 조회중일 때 조회중임을 표시하는 메시지를 띄우고 싶다.

**답변:** 각 화면의 onSearchStart/onSearchFinish 이벤트에서 showMessage/hideMessage를 사용해 로딩 메시지를 표시할 수 있습니다. 또한 개별 화면이 아닌 공통 적용이 필요하다면 ibsheet-common.js에 동일 로직을 추가하여 전체 화면에 적용할 수 있습니다.

---

### 28. 체크박스가 있는 행을 병합하여 선택할 수 있는지 문의

질문: 체크박스를 병합하여 선택할 수 있는지 문의드립니다. 행 병합은 되지만 체크박스를 선택하면 병합이 풀리고 1행만 선택됩니다.

답변: 병합된 셀을 편집할 경우 기본적으로 병합된 영역의 첫 번째 셀에만 값이 적용됩니다. Cfg의 MergeCellsMatch 값을 1로 설정하면 병합된 영역 전체에 값이 반영되어 체크박스 선택 시에도 동일하게 적용됩니다.

---

### 31. IBSheet.showDialog로 연 다이얼로그를 닫는 방법

질문: IBSheet.showDialog로 연 다이얼로그를 닫는 함수가 있는지 문의드립니다.
답변: showDialog로 열린 다이얼로그는 시트의 Dialog 객체를 통해 Close 호출로 닫을 수 있습니다.

```js
var dialogObj = sheetId.Dialog;
dialogObj.Close();
```

---

### 33. row 높이를 큰 값에서 작은 값으로 변경되지 않는 문제

질문: setSize와 row 높이를 동적으로 변경했는데 작은 값에서 큰 값은 되지만 큰 값에서 작은 값으로는 변경되지 않습니다.

답변: row 높이를 Def.Height가 아닌 Def.Row.Height로 설정해야 합니다. Def.Height는 올바른 설정 위치가 아닙니다.

---

### 34. 토글 영역 내부에 그리드 생성 가능 여부

질문: 토글 영역 내부에 그리드를 생성하는 것이 기능적으로 가능한지와 사용 방법을 문의드립니다.

답변: 그리드 내부에 그리드를 표시하는 subGrid 기능은 현재 제공되지 않습니다. support@ibleaders.co.kr로 문의 바랍니다.

---

### 36. 브라우저 배율 축소 시 IBSheet가 그려지지 않는 현상

**질문:** 시트와 부모 엘리먼트의 height가 모두 100%로 설정된 상태에서, 브라우저 배율을 33% 이하(특히 25%)로 축소할 경우 IBSheet가 정상적으로 그려지지 않거나, 조회(loadSearchData) 시 시트 영역이 사라지는 현상이 있습니다.

**답변:** 8.3.0.18 (20250703-13)버전에서 패치되었습니다.해당 패치 적용 후, 극단적인 브라우저 배율(25% 등) 환경에서도 시트가 정상적으로 렌더링되는 것을 확인했습니다.

---

### 38. 필터 다이얼로그가 화면 하단에서 잘려 전체가 표시되지 않습니다.

**질문:** 필터 다이얼로그가 전부 표시되지 않는 지점까지 스크롤을 내린 상태에서 필터 다이얼로그를 띄우면, 다이얼로그의 OverFlow 영역이 보이지 않습니다. 브라우저 크기뿐 아니라 다른 태그(z-index, overflow 등)에 의해 가려지는 경우에도 필터 다이얼로그 내용을 온전히 보고 싶습니다.

**답변:** 8.3.0.24-20250814-14 버전에서 필터 다이얼로그를 띄우는 위치의 하단 공간이 부족할 경우 자동으로 위쪽에 표시되도록 개선되었습니다. 이를 통해 스크롤 위치, 브라우저 크기, 주변 태그 영향과 관계없이 필터 다이얼로그 내용이 전체 노출됩니다.

---

### 40. SAST 검사에서 ibsheet.js의 eval 사용이 보안 취약점으로 탐지됩니다.

질문: SAST 검사 중 아래와 같은 조치 사항이 발생했습니다. eval, Function(), setTimeout(), setInterval() 사용으로 인해 Eval Injection (동적 코드 실행 취약점) 이 탐지되었습니다.

**답변:** ibsheet.js는 IBSheet의 핵심 그리드 코어 파일로, 소스 보호를 위해 전체 코드가 난독화된 상태로 제공됩니다. 이 구조에서는 실행 로직이 문자열 형태로 구성되며, 런타임 시 이를 복원해 실행하기 위해 eval 사용이 불가피합니다. 이는 동적 코드 실행을 위한 구현이 아니라, 제품 설계상 필요한 처리 방식입니다.

eval로 실행되는 코드는 IBSheet 내부에서 사전에 정의된 규칙에 따라 생성된 코드로 한정되며, 사용자 입력이나 외부 데이터가 직접 전달되는 구조가 아닙니다. 따라서 외부 스크립트 주입이나 실행 흐름 변경은 발생할 수 없습니다. 이로 인해 SAST 도구에서 탐지하는 일반적인 Eval Injection 취약점과는 성격이 다릅니다.

또한 내부 함수와 변수는 모두 난독화되어 있어 코드 분석이나 변조가 어렵고, 실행 권한 역시 제한된 범위 내에서만 동작하도록 설계되어 있습니다. 이러한 구조적 특성상 ibsheet.js의 eval 사용은 보안상 문제가 되지 않으며, 일반 JavaScript 파일과 동일한 기준으로 취약점 점검을 적용하기보다는 검사 대상에서 제외하는 것이 적절합니다.

---


## 데이터_처리

### 1. addRow해도 getTotalRowCount 리턴값이 안늘어난다. addRow 시 속성도 함께 넣고 싶다.

질문: addRow를 호출해도 getTotalRowCount 값이 증가하지 않고, addRow 시 행 속성을 함께 설정하고 싶다.

답변: getTotalRowCount는 SearchMode 설정에 따라 동작이 달라지며,조회모드에 따라 조회된 전체 데이터 건수 또는 DB 에서 가져올 전체 데이터 행수를 리턴합니다. SearchMode 가 0, 1, 2 로 설정된 경우 조회된 전체 데이터 행수를 리턴합니다. SearchMode 가 3, 4, 5 인 경우 조회 데이터의 Total 에 설정된 값을 리턴합니다. 이 때 Total 값은 조회조건에 따라 가져올 DB 의 전체 건수가 설정되어야 합니다. addRow 시에는 두 번째 인자로 {"CodeNoCanEdit":1} 과 같이 초기 속성을 함께 전달할 수 있습니다.

---

### 2. append 조회 후 getTotalRowCount가 기존 데이터 포함 값을 반환하지 않는다.

질문: append:true로 조회하면 화면에는 기존 데이터가 유지되는데, getTotalRowCount는 새로 조회된 데이터 수만 반환한다.

답변: SearchMode 3, 4, 5 에서는 서버 응답에 포함된 Total 값을 기준으로 getTotalRowCount가 동작합니다. 이 경우 append 여부와 무관하게 Total 값이 우선됩니다. 전체 행 수가 필요하다면 getDataRows().length를 사용하는 것이 가장 확실한 방법입니다.

---

### 3. getPrevRow 사용 시 소계(SubSum) 행이 포함된다.

질문: getDataRows(1)로 소계를 제외한 뒤 데이터 행을 뽑고, getPrevRow로 이전 행을 추출했는데 소계행이 다시 반환된다.

답변: getPrevRow() 자체에는 소계 제외 옵션이 없습니다. 소계 행을 건너뛰려면 반환된 행의 Name이 "SubSum"인지 확인해 skip 처리해야 합니다. 또는 getPrevRow를 사용하지 않고 getDataRows(1)로 가져온 데이터 배열을 순회하며 이전 인덱스를 참조하는 방식이 더 안전합니다.

---

### 4. getRowByIndex로 데이터를 가져오면 소계가 포함된다.

질문: getRowByIndex로 전체 행을 조회하면 소계 행이 함께 포함된다.

답변: getRowByIndex는 화면에 존재하는 모든 행을 반환하므로 소계가 포함됩니다. 소계와 누계를 제외한 데이터만 필요하다면 sheet.getDataRows(1)을 사용하거나, getRowByIndex 사용 시 반환된 행의 Name이 "SubSum"인지 확인해 skip 처리해야 합니다.

---

### 5. 체크박스 체크 여부 확인 방법

질문: IBSheet 체크박스를 체크한 상태에서 getDataRows()를 사용해 체크 여부를 확인할 수 있는지 문의드립니다.

답변: firstSheet.getDataRows()로 전체 행을 가져온 뒤 각 행의 체크박스 컬럼 값을 확인하면 체크 여부를 판단할 수 있습니다. 체크된 경우 1, 체크 해제된 경우 0이 반환됩니다. 단순히 체크된 행만 필요하다면 getRowsByChecked('체크박스 컬럼명')를 사용해 체크된 행 목록만 추출하는 것이 효율적입니다. 또한 체크된 행을 삭제하려는 경우에는 IB_Preset.DelCheck를 확장하여 신규 행은 removeRow, 기존 행은 deleteRow로 처리하는 방식이 권장됩니다.

---

### 6. Added 속성이 신규 행인데 1로 나오지 않는다.

질문: getDataRows()[i].Added 값을 확인했는데 신규 행임에도 1이 아니다.

답변: 확인 결과 해당 행은 addRow로 추가된 행이 아니라 조회된 행이었습니다. 조회 데이터는 Added 값이 설정되지 않습니다. 신규 추가 행만 판별하려면 전체 행을 순회하지 말고 getRowsByChecked 등으로 대상 행을 먼저 좁힌 뒤 Added 값이 undefined인지 여부로 판단하는 것이 적절합니다.

---

### 7. B 시트의 값을 A 시트의 포커스 행에 반영하고 싶다.

질문: 두 개의 시트가 있을 때, B 시트에 입력한 값을 A 시트의 현재 포커스된 행에 적용하고 싶다.

답변: B 시트에서 getFocusedRow로 현재 행을 가져온 뒤, getRowValue(포커스행)으로 해당 행의 json 데이터를 추출하여 A 시트의 포커스 행에 setRowValue로 값을 set하면 됩니다. Enum 컬럼의 경우 Enum, EnumKeys 속성을 setAttribute로 함께 전달해야 정상 반영됩니다.

---

### 8. FormulaRow에 계산값을 직접 넣고 싶다.

질문: FormulaRow에 특정 계산 결과를 직접 설정하는 방법 문의

답변: sheet.FormulaRow로 합계 행에 접근하여 setValue로 값을 직접 설정할 수 있으며, FormulaRow를 함수 형태로 정의해 계산 로직을 커스터마이징하는 방식도 가능합니다.

---

### 9. 소계 행을 스크롤과 무관하게 하단에 고정하고 싶다

질문: makeSubTotal로 소계를 데이터 마지막에 표시했으나, 스크롤 이동 시 함께 사라집니다. 스크롤과 관계없이 항상 하단에 고정된 형태로 표시할 수 있는 방법이 있는지 궁금합니다.

답변: 하단 고정 행은 setFixedBottom 또는 Foot 영역을 활용해 구현할 수 있습니다. Foot 배열을 여러 Object로 구성하면 여러 줄의 하단 고정 영역을 만들 수 있으며, FormulaRow를 사용하는 경우 합계행 아래에 커스텀 고정 행을 함께 표시할 수 있습니다. 고정행 예제는 ibsheet.com 예제 중 행고정 예제를 참고하시기 바랍니다.
소계는 makeSubTotal로 생성한 뒤, 생성된 소계 행 개수를 기준으로 setFixedBottom을 적용하는 방식이 가장 적절합니다.

---

### 10. hh:mm 포맷에서 09:00 입력 시 값이 0으로 나오는 이유

질문: type: Data, format: "hh:mm"로 설정한 상태에서 0900을 입력하면 값이 0으로 반환됩니다. 반면 0930은 정상적으로 값이 내려옵니다. 왜 이런 현상이 발생하나요?

답변:  IBSheet의 시간 값은 내부적으로 GMT+9 기준의 밀리초(ms) 값으로 계산됩니다. 이 때문에 09:00은 기준 시각으로 처리되어 내부 값이 0이 되며, 09:30은 기준 시각 이후 시간이므로 1,800,000(ms) 값으로 계산됩니다. (1분 = 60,000ms)
화면에 입력한 값 그대로 사용하려면, 내부 계산값이 아닌 포맷이 적용된 값을 getValue() 함수를 통해 추출하여 사용하시기 바랍니다.

---

### 11. 시트를 검색 직후 상태로 되돌리고 싶다

질문: 행을 추가·삭제한 뒤, 시트를 데이터 검색 직후의 초기 상태로 되돌리고 싶다.

답변: reloadData()를 사용하면 create() 직후 상태로 시트를 초기화할 수 있습니다. 단, create() 시 data를 지정하지 않았다면 빈 시트로 초기화되므로 이후 다시 데이터를 로드해야 합니다. 추가한 행만 삭제하려는 경우에는 removeRow()를 사용하는 것이 적절합니다.

---

### 12. 버튼으로 시트 간 행 이동을 구현하고 싶다

질문: 버튼 클릭으로 한 시트의 행을 다른 시트로 이동시키는 예제가 필요하다.

답변: addRow()로 대상 시트에 행을 추가한 뒤, 기존 시트에서 removeRow()로 삭제하는 방식으로 구현할 수 있습니다.

```js
var rowValue = LeftSheet.getRowValue(LeftSheet.getFocusedRow());
// 현재 포커스가 위치한 행의 아래에 신규 행을 생성합니다.(focus 이동)
RightSheet.addRow( {"next":RightSheet.getNextRow(RightSheet.getFocusedRow()),"init":rowValue});
//이동시킨 행에 대해 상태를 삭제로 변경하고 보이지 않게 한다.
LeftSheet.deleteRow({row:LeftSheet.getFocusedRow(), del:1, visible:0});
```

---

### 13. 행 추가/삭제 시 스크롤 위치가 무한 반복된다

질문: 행을 추가·삭제하는 과정에서 시트 스크롤과 포커스가 반복적으로 이동한다.

답변: addRow / removeRow 수행 전 blur(0)을 호출하고, 각 API 호출 시 render:0 옵션을 사용한 뒤 rerender()로 한 번에 반영해야 합니다.

---

### 14. 행 추가·삭제 후 스크롤이 튀고 포커스가 반복 이동된다

질문: 다량 데이터에서 행 삭제 후 재추가 시 스크롤이 상단으로 이동했다가 다시 내려오며 포커스가 반복 이동된다.

답변
행 추가·삭제는 전체 스크롤 높이를 재계산하므로 스크롤이 있는 상태에서 이런 현상이 발생할 수 있습니다.
사용 중인 버전이 매우 낮아 관련 패치가 반영되지 않았으며, render:0 옵션과 rerender() 사용 또는 제품 업그레이드가 필요합니다.

---

### 15. Search Solid 행에서 기능 제어 및 동작 방식 설정

질문: Search Solid 행을 사용할 때 다음 사항을 제어할 수 있는지 궁금합니다. 1. 기본 생성 시 필터, 선택, 마킹, 찾기 버튼이 모두 표시되는데 필요한 기능만 선택적으로 표시할 수 있는지 2. 스크립트로 Expression 값을 설정하면 자동으로 필터링이 실행되는데, 이 동작을 변경하거나 비활성화할 수 있는지 3. Expression에 a|b|c 형태로 입력해 여러 값을 동시에 마킹하는 기능이 가능한지

답변: 1. options.Solid 설정에서 Cells 속성을 사용하면 필요한 기능만 지정할 수 있습니다. Expression, Filter, Select, Mark, Find, FindPrev, Clear 는 예약어이므로 별도 선언 없이 선택적으로 사용 가능합니다. 2. Expression 셀에는 Action 속성이 있으며, 값 변경 시 자동으로 수행될 동작을 지정합니다. Action을 빈 문자열로 설정하면 자동 실행을 막을 수 있고, Filter, Select, Mark, Find, FindPrev, Last 중 원하는 동작만 지정할 수 있습니다. 3. Expression에 단어1 OR 단어2 형식으로 입력하면 다중 검색 및 마킹이 가능합니다. 이를 통해 여러 값을 한 번에 찾아 마킹할 수 있습니다. Search Expression 관련 상세 내용은 공식 메뉴얼을 참고하여 구현할 수 있습니다

---

### 16. html 타입으로 간트 차트 구현이 잘 되지 않는다

질문: html 타입 컬럼으로 간트 형태 차트를 만들었지만 정상적으로 표시되지 않는다.

답변: 상위 div에 width:100%가 지정되어야 하며, HTML 생성은 setValue가 아닌 onDataLoad 시점에서 데이터에 직접 주입해야 합니다.

---

### 17. 페이징 사용 시 전체 선택 및 데이터 처리 범위 제어

**질문:** 페이징(searchmode:4) 사용 중인데, 전체 선택을 하면 현재 페이지가 아니라 다른 페이지 데이터까지 함께 선택됩니다. 페이지 단위로만 조회·선택·처리되도록 구성할 수 있는 방법이 있을까요?

**답변:** SearchMode:5(ServerPaging2) 사용으로 해결할 수 있습니다. SearchMode:5는 페이지 이동 시마다 항상 서버를 호출하여 해당 페이지 데이터만 조회하는 방식입니다.

---

### 18. row 객체에서 SEQ나 ID 확인

**질문:** getDataRows 함수로 추출된 row 객체에서 SEQ나 ID를 뽑고 싶다.

**답변:** row.SEQ, row.id로 직접 접근하거나 getAttribute(row,"SEQ"), getValue(row,"id")로 정보를 확인할 수 있습니다.

---

### 19. 행 추가 시에만 입력힌트(Placeholder) 를 띄우고 싶다

**질문:** Date 컬럼에서 조회 시에는 입력힌트(Placeholder) 메시지를 숨기고, 행 추가 시에만 입력힌트(Placeholder)를 적용하고 싶다.

**답변:** addRow()의 init 옵션에서 셀 단위로 EmptyValue를 지정하면 신규 행에만 메시지를 적용할 수 있습니다. EmptyValue는 input의 placeholder 속성과 동일한 기능으로 Value가 없을 경우 지정된 값을 노출합니다.

---

### 20. deleteRow 후 InfoRowConfig Count가 줄지 않는다.

**질문:** InfoRowConfig 에 Count를 설정 했다. 여러개 행을 추가 하고 행을삭제 했다.(deleteRow ) 그런데 InfoRowConfig 에는 행삭제를 했는데도 그 건수가 보인다.

**답변:** deleteRow()는 행을 제거하지 않고 Deleted=1 상태로만 변경합니다. 보이는 행만 계산하려면 InfoRowConfig 의 Format를 보이는 행만 계산하도록 VISIBLECOUNT로 설정해야 합니다.

---

### 21. getValue로 enum의 표출 값 추출 가능 여부

질문: getValue를 통한 변수값 추출은 되나, enum 컬럼에서 화면에 표출되는 값을 추출할 수 있는 방법이 있는지 문의드립니다.

답변: 날짜, 숫자 데이터에서 날짜 구분자나 천 단위 구분자가 적용된 문자열 값을 추출할 때와 같이 getString() 함수를 사용하시면 됩니다. enum 컬럼의 화면 표시 값 역시 getString을 통해 추출 가능합니다.

---

### 23. enum 컬럼 툴팁에 코드값 표시 가능 여부

질문: enum 컬럼에서 Grid에는 한글 값이 보이되, 툴팁에는 코드값(예: 01, 02, 03)을 표시할 수 있는 방법이 있을까요?

답변: Enum 속성 대신 showTip를 사용하여 현재 셀의 값을 직접 툴팁에 출력하시는 방식으로 구현하실 수 있습니다.
마우스가 위치한 셀의 코드값은 getValue()로, 화면에 보이는 enum 문자열은 getString()으로 추출 가능합니다.

---

### 24. for문 내 addRow 후 setValue 미동작 이슈

**질문:** for문 안에서 addRow를 여러 번 호출한 후 해당 행에 데이터를 넣기 위해 setValue를 했으나 정상 동작하지 않습니다.

**답변:** 일단 addRow가 비동기이기 때문에 여러 행을 추가하는 경우 reder인자를 0으로 둔 뒤 한번에 rerender로 랜더링을 반영해야 합니다. 또는 addRows로 여러개의 행을 추가할수 있습니다. 또한 addRow에는 초기값을 설정하는 init 인자가 있으니 행추가 후 setValue 하지 않아도 초기값을 세팅할 수 있습니다.

---

### 26. makeSubTotal로 생성된 소계행 커스터마이징 가능 여부

**질문:** makeSubTotal로 생성된 소계행을 커스터마이징하거나 소계 + 소계 합계 행을 추가할 수 있는지 문의드립니다.

**답변:** 요구하신 기능은 makeSubTotal만으로는 구현이 어렵습니다. 단일 시트 내에서 커스텀 합계 행이 필요하다면 addRow()로 직접 행을 추가한 후 계산된 값을 setValue()로 넣고, 배경색 등을 통해 합계 행처럼 표현하는 방식을 권장드립니다.

---

### 27. 트리시트에서 부모 삭제 후 자식 삭제 불가 현상

**질문:** 트리시트에서 부모를 삭제 상태로 만든 후 자식 행을 삭제하려고 하면 반응이 없습니다.

**답변:** 부모 행을 삭제 처리하면 하위 자식 행들도 자동으로 삭제 상태로 변경됩니다.(deleteRow)

---

### 28. A 시트 합계행 데이터를 B 시트에 추가하고 싶을 때

**질문:** A시트의 합계행 데이터를 뽑아서 B 시트에 행추가를 하고 싶다.

**답변:** A 시트의 합계행을 getRowValue()로 추출한 후 B 시트에서 addRow()의 init 값으로 전달하시면 됩니다.

---

### 29. getChildRows 결과를 JSON 형태로 사용 가능 여부

**질문:** getChildRows로 데이터를 뽑는데 object 형태로 뽑힌다. JSON 형태로 뽑을 수는 없는지? sheet.getChildRows로 뽑은 자식 행들의 특정 값을 일괄적으로 setValue 해주려고 한다.

**답변:** getChildRows는 Row 객체 배열을 반환합니다. 자식 행의 ID를 기준으로 for문을 돌며 setValue()를 사용하여 값을 넣어주면 됩니다.

---

### 30. 소계·누계·합계 행 구분 방법

**질문:** 시트 데이터 기준으로 소계, 누계, 합계 행을 구분할 수 있는 방법이 있는지 문의드립니다.

**답변:** 소계 및 누계 행은 getSubTotalRows()를 통해 구분할 수 있습니다. 소계 행은 subTotal, 누계 행은 Total 키를 기준으로 반환되며 해당 row 객체가 getDataRows()에서 가져온 row와 동일한지 비교하여 구분하시면 됩니다. 합계 행의 경우, row.Kind === 'Foot' 조건으로 구분할 수 있습니다. 자세한 내용은 getSubTotalRows, Kind 관련 메뉴얼을 참고해 주시기 바랍니다.

---

### 31. 시트 ID 변경 시 객체를 찾지 못하는 문제

질문: IBSheet.create 시 id 값을 변경해서 사용하려고 하는데, 이후 스크립트에서 시트 객체를 찾지 못한다. create 시 id에 사용할 수 있는 문자열 제한이 있는지?

답변: //시트객체 생성 IBSheet.create({ id: "sheet", // 생성할 시트의 id el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id options: opt, // 생성될 시트의 속성 data: dataArr // 생성될 시트의 정적데이터 });
create 시 설정한 id 값이 곧 시트 객체명이 된다. id를 변경한 경우 이후 메소드 호출 시에도 동일한 id를 사용해야 한다. 예를 들어 id를 sheet2로 생성했다면 sheet2.getDataRows()처럼 접근해야 한다. 문자열 자체에 대한 제한 문제는 아니다.

---

### 32. Footer 행을 여러 개 생성하고 외부 함수 계산을 적용하고 싶다

질문: Footer 행을 여러 줄로 만들고 각 행에 서로 다른 계산식을 적용하고 싶다. Formula에서 외부 함수를 사용할 수 있는지 문의한다.

답변: Footer에서 외부 함수를 직접 Formula로 사용하는 것은 적합하지 않다. 필요한 데이터를 추출해 외부 함수로 계산한 뒤, Footer 행에 접근하여 각 셀에 setValue로 결과를 넣는 방식이 적절하다.

---

### 33. DeleteRow와 RemoveRow 차이점

**질문:** DeleteRow와 RemoveRow 차이점이 뭔지? 여러 행을 한 번에 화면에서 제거하고 싶다.

**답변:** DeleteRow는 해당 행의 상태값에 Deleted:1을 넣어 삭제 상태로 만드는 것이고, RemoveRow는 행을 즉시 삭제하는 것이다. 원하는 기능은 RemoveRow와 유사해보이고, 두 메소드 다 Rows로 끝나는 다중행 삭제 메소드가 있다.

---

### 34. 필터링된 행만 체크하거나 구분하고 싶다

질문: 시트 전체 데이터 중 필터링된 행만 구분하거나 체크하고 싶다.

답변: IBSheet8에는 필터된 행을 직접 반환하는 API는 없지만, 각 행 객체의 Filtered 속성으로 구분할 수 있다.sheet.getDataRows().filter( function(row){return row.Filtered;} );  또는 getShownRows(0)을 사용하면 전체 데이터 기준으로 필터링 후 화면에 보이는 행만 추출할 수 있다.

---

### 35. InfoRow 높이 조절 및 FormulaRow 숨김 처리

**질문:** 1. infoRowConfig의 div의 사이즈를 조절할 수 있는 방법 2. formulaRow를 숨기고, formulaRow의 일부값을 추출하여 사용하고 싶다

**답변:** 1. InfoRow 높이는 Def.InfoRow.Height 설정으로 조절할 수 있다. 2. FormulaRow는 hideRow()로 숨긴 뒤 getValue()를 통해 필요한 셀 값을 추출해 사용하면 된다.

---

### 36. 검색을 반복하면 이전 데이터가 아래에 붙는 현상

질문: 검색 버튼을 여러 번 누르면 이전 조회 데이터 아래에 새 데이터가 이어서 표시된다.

답변: onSearchFinish에서 setValue, setAttribute 호출 후 rerender를 다시 실행하고 있어 문제가 발생했다. setValue와 setAttribute는 이미 렌더링을 유발하므로 rerender 호출을 제거하면 정상 동작한다.

---

### 37. 첫 행 deleteRow 시 이후 행까지 삭제 처리됨

**질문:** 행추가를 여러줄 한 후 제일 처음 추가된 행에서 deleteRow했다 그런데 아래 행들까지 모두 삭제 처리 된다.

**답변:** 행추가 시에 트리시트가 아닌데 parent를 넣어서 그렇다. sheet.addRow({ "parent" : sheet.getLastRow()}); 이런식으로 설정했는데 parent 옵션을 제거해야 하며, 해당 동작은 트리 구조로 인식된 결과이다.

---

### 38. setFormulaRow 호출 시 기존 합계 정보가 사라짐

질문: setFormulaRow를 호출해 합계를 다시 계산했더니 기존 FormulaRow 정보가 모두 사라진다.

답변: setFormulaRow는 기존 FormulaRow를 초기화하고 다시 생성한다. 기존 값을 유지하려면 object 형태로 설정하거나, setValue로 합계명을 다시 넣거나, FormulaRow 객체에 직접 값을 설정하고 Visible 속성을 함께 제어해야 한다.

---

### 40. 시트 초기화 시 빈 행을 여러 줄 생성하고 싶다

질문: 시트를 초기화하면서 빈 행을 약 10줄 정도 미리 생성할 수 있는지?

답변: IBSheet.create 시 data 옵션에 빈 행 데이터를 전달하거나, 초기 렌더링 이후 onRenderFirstFinish에서 addRows를 호출하는 방식으로 구현할 수 있다.

---

## 마이그레이션(Sheet7→8)

### 1. Sheet7의 selectCell 대응 API 및 row index 사용 방법

질문: 1. Sheet7의 selectCell이 Sheet8에 대응되는 함수나 속성이 있는지 2. Sheet7에서 사용하던 row index를 Sheet8에서 사용하는 방법은 무엇인지

답변: Sheet8에서는 focus(row, col)을 사용합니다. Sheet8은 row index가 아닌 행 객체를 기준으로 동작하므로, index를 그대로 사용하려면 getRowByIndex(index)로 행 객체를 먼저 구한 뒤 사용해야 합니다.

---

### 2. Sheet7 주요 함수/속성의 Sheet8 대응 여부

질문: Sheet7의 SetDataRowMerge, SetClipPasteMode, SetFocusEditMode, SetCountPosition, FitColWidth와 대응되는 sheet8 함수가 있는지?

답변: SSheet7에서 사용하던 주요 함수와 속성들은 Sheet8에서도 대부분 대응 기능이 제공되지만, 설정 방식과 개념이 더 세분화되었습니다. 먼저 SetDataRowMerge의 경우, Sheet7에서는 데이터 행의 가로 머지를 허용할지 말지 단순 선택만 가능했다면, Sheet8에서는 Cfg.DataMerge 또는 setAutoMerge()를 통해 병합 기준을 보다 정밀하게 제어할 수 있습니다. 기존에 SetDataRowMerge = 1로 가로 머지를 허용하셨다면, Sheet8에서는 Cfg.DataMerge 값을 2, 4, 6 중 하나로 지정하거나 sheet.setAutoMerge({ dataMerge: 2/4/6 }) 형태로 설정해야 합니다. 이때 병합은 행 기준, 행 우선, 행 우선 사방 병합 등 다양한 방식 중에서 선택할 수 있습니다.

SetClipPasteMode는 Sheet8에서 Cfg.PasteFocused로 대응됩니다. Sheet8은 붙여넣기 동작을 내부적으로 분기 처리하기 때문에 기본 동작만 사용한다면 별도 설정 없이도 동작합니다. 영역을 선택한 상태에서 붙여넣기 할 경우에는 기존 SetClipPasteMode(0)과 동일하게 동작하고, 포커스만 둔 상태에서 붙여넣기 할 경우에는 SetClipPasteMode(1) 동작이 자동 적용됩니다. 따라서 특수한 붙여넣기 동작이 필요한 경우에만 PasteFocused 값을 명시적으로 지정하시면 됩니다.

포커스 편집과 관련된 SetFocusEditMode는 Sheet8의 Cfg.InEditMode로 변경되었습니다. 기존에 SetFocusEditMode(0)을 사용하셨다면 Sheet8의 기본값인 InEditMode: 2와 동일하며, SetFocusEditMode(1)을 사용 중이었다면 Cfg.InEditMode를 1로 설정하셔야 동일한 동작을 유지할 수 있습니다.

건수 표시 위치를 제어하던 SetCountPosition은 Sheet8에서 InfoRow 개념으로 변경되었습니다. 건수 정보 표시 여부와 위치는 Cfg.InfoRowConfig 또는 setInfoRow()를 통해 설정하며, 상단·하단 위치는 Space 속성으로, 좌측 표시 여부는 Layout: ["Count",""] 설정으로 제어합니다. 별도의 설정이 없는 경우 Sheet8에서는 우측 상단이 기본값으로 적용됩니다.

마지막으로 FitColWidth는 Sheet8에서도 동일한 함수가 제공되지만, 컬럼에 RelWidth와 같은 동적 너비 설정이 포함되어 있는 경우에는 사용할 수 없습니다. 각 설정의 세부 동작과 예제 코드는 IBSheet8 매뉴얼을 참고하시면 되고, 기존 Sheet7 동작과의 정확한 비교가 필요하다면 IBSheet7 매뉴얼을 함께 확인하시는 것이 가장 확실합니다.

---

### 3. 조회 시 스크롤이 중간부터 시작되는 현상

질문: 데이터 조회 시 우측 스크롤이 항상 중간부터 시작되며, 팝업에서도 동일한 현상이 발생한다.

답변: 확인 결과 사용자 CSS에서 th, td에 vertical-align: center !important가 적용되어 있었다. 해당 CSS 영향으로 스크롤 위치가 비정상 동작하므로, IBSheet 영역에는 해당 스타일이 적용되지 않도록 수정해야 한다.

---

### 4. Sheet7 InitCellProperty 대응 메소드

질문: Sheet7의 InitCellProperty에 대응되는 Sheet8 메소드가 있는지

답변: Sheet8에서는 setAttribute를 사용한다. 다만 InitCellProperty처럼 배열로 일괄 변경은 불가능하며, render:0 상태에서 여러 속성을 변경한 뒤 rerender()로 적용해야 한다.

---

### 5. 조회 데이터의 id 컬럼 사용 문제

질문: 서버에서 내려오는 JSON에 id 컬럼이 포함되어 있는데, Sheet8에서 내부 row id와 충돌하는 것 같다. 컬럼으로 사용 가능한지

답변: id는 IBSheet 내부에서 사용하는 키 값이므로 컬럼 Name으로 사용할 수 없다. 조회 데이터에 id가 포함되면 내부적으로 ___id로 치환된다. 저장 시 컬럼에 선언되지 않은 데이터까지 포함하려면 doSave 함수의 saveAttr 옵션을 사용해야 한다.

---

### 7. Sheet7 CellComboItem 대응 기능

질문: Sheet7의 CellComboItem에 대응되는 Sheet8 API가 무엇인지

답변: Sheet8에서는 setAttribute를 사용해 특정 셀에 Enum, EnumKeys를 동적으로 설정할 수 있다. 특정 셀만 Enum을 적용하려면 해당 컬럼에 EnumStrictMode:1을 설정해야 빈값 처리 문제를 방지할 수 있다.

---

### 10. Sheet7 SetEditEnterBehavior 마이그레이션

질문: Sheet7의 SetEditEnterBehavior를 Sheet8에서 어떻게 대체해야 하는지

답변:  Sheet8에는 해당 메소드가 없으며, 아래 속성 조합으로 동작을 제어한다.

EnterMode: Enter 키 동작 방식 설정
AcceptEnters: 편집 중 Enter 입력 동작 설정
ForceEnterEdit: 포커스 상태에서 편집 진입 여부 설정

이 조합으로 Sheet7과 유사한 Enter 키 동작을 구현할 수 있다.

---

### 11. Required:1 설정한 행을 비워서 getSaveJson 시 빈 배열이 리턴되는 이슈

**질문:** Required:1 설정한 행을 비워서 getSaveJson 시 data 에 빈 배열이 리턴된다.

**답변:** getSaveJson은 저장을 위한 JSON 데이터를 생성하는 API이며, 저장 대상 데이터에 문제가 있을 경우 오류 코드와 메시지를 함께 반환하면서 data를 빈 배열로 리턴합니다.
이는 정상 동작이며, sheet7과 sheet8 모두 동일한 개념을 가지고 있으나 동작 방식과 오류 처리 구조에는 차이가 있습니다.

[sheet7 동작 방식 (KeyField 기준)]
sheet7에서는 필수값을 KeyField:1 로 지정합니다. 필수값이 비어 있는 상태에서 getSaveJson을 호출하면 아래와 같이 리턴됩니다.

```js
{
  "data": [],
  "Message": "KeyFieldError",
  "Code": "IBS010",
  "Row": "1",
  "Col": "C5",
  "ColSaveName": "sTitle"
}
```

이 경우 기본 동작으로 alert가 자동 발생하며, [n번째 행의 colName은 필수 입력 항목입니다] 와 같은 메시지가 표시됩니다.
[sheet8 동작 방식 (Required 기준)]
sheet8에서는 필수값을 Required:1 로 지정합니다. 필수값이 비어 있을 경우 getSaveJson의 리턴 형태는 다음과 같습니다.

```js
// validRequired 오류 시
{
  "Message": "RequiredError",
  "Code": "IBS010",
  "row": 오류 발생 행 객체,
  "col": 오류 발생 열 Name,
  "data": []
}
```

sheet8의 중요한 차이점은 기본적으로 alert를 띄우지 않는다는 점입니다. 오류 코드는 리턴되지만 화면에 alert는 자동으로 출력되지 않습니다.
만약 alert를 띄우고 싶다면 showAlert 옵션을 설정해야 합니다. ex)sheet.getSaveJson({ showAlert: 1 });

필수값 이외에 다양한 오류코드는 메뉴얼에서 확인 가능합니다.

---

### 13. Suggest / Enum 기반 comboEdit 구현 시 엑셀 다운로드 포맷 제어

**질문:** Suggest와 Defaults를 이용하여 편집가능한 콤보를 만들었습니다. 엑셀 다운로드 시 Text값으로 내려받고 싶습니다. ibsheet7에서는 Text값으로 다운로드 가능했는데 ibsheet8에서는 어떻게 해야하나요?

**답변:** Suggest, Default를 통해 편집가능한 Enum 의 다운로드 시 다운 받을 format을 지정할 수 있는 downTextFormat 속성이 ibsheet-excel.js 1.1.21-20250619-15, servermodule 버전 1.1.41 에서 추가되었습니다.
만일 현재 사용하시는 ibsheet-excel과 ibsheet8-x.x.jar 버전이 해당 버전 이상이시라면 아래 내용을 이용하여 설정하실 수 있습니다.
downTextFormat은 "VAL"과 "KEY" 를 설정하실 수 있고, default 동작은 "VAL"입니다.

ex)
// VAL로 설정시 value로 내려받고, KEY로 설정시 key로 내려받음
sheet.directDown2Excel({ url: "./getDirectDownData.jsp", downTextFormat: "KEY"});

해당 옵션은 컬럼의 타입이 Text이며, Format이 JSON으로 설정된 경우만 동작하며(편집가능한 Enum 만들 때 사용되는 조건들), down2Excel, directDown2Excel 양쪽 모두 인자로 추가되었습니다.

---

### 14. Sheet7 → Sheet8 변환 시 정렬 옵션(ReverseSortOrder) 관련

**질문:** Sheet7에서 사용하던 ReverseSortOrder 속성이 Sheet8에서는 제거된 것으로 확인되었습니다. 현재 HeaderSortMode: 1을 사용 중인데, 헤더 클릭 시 정렬 기준이 반대 순서로 적용됩니다. 클릭한 순서대로 정방향(대 → 중 → 소) 정렬을 원하며, MaxSort 초과 후 새 컬럼 클릭 시 해당 컬럼이 소 분류로 추가되길 원합니다.

**답변:** Release: 8.3.0.43-20251127-14부터 HeaderSortMode: 4 추가됨. 클릭한 순서대로 대분류/중분류/소분류가 되며 (Cfg) Maxsort 초과시 처음 클릭한 컬럼이 취소되며 나머지 컬럼의 클릭한 순서대로 대분류/중분류/소분류 재구성

---

### 15. NoColor:2 설정 시 드래그 선택 색상 미표시 현상

**질문:** Def > Row에 NoColor:2를 설정하여 상태 변경 색상을 숨겼으나, 셀 Selection을 위해 드래그 시 선택 영역 색상이 보이지 않습니다.

**답변:** NoColor:2 설정 시 선택 색상 또한 적용되지 않는 것이 정상 동작입니다. 해당 동작은 Sheet7과 동일합니다.NoColor:는 상태 및 선택 색상 모두 무시됩니다.

---

### 16. Enum 기반 Suggest(검색형 입력) 기능 구현 문의

**질문:** 검색창처럼 검색하는 suggest 기능을 사용하고 싶다. 데이터는 Enum 타입처럼 들어와야한다. Code값으로 조회 시 보여지는 데이터는 Text 값으로 나오고, suggest를 이용해서 검색 후에 값을 선택하면 Text값으로 보여지지만 내부적으로 Code값도 수정되어야 한다.

**답변:** Enum 타입 셀의 편집 메뉴에 메뉴의 항목들을 필터링 및 검색 할 수 있는 (Col) EnumFilter 옵션이 추가되었습니다.(Ver 8.3.0.48-20251224-16) Type:Enum 컬럼에 Enum값이 많은 경우, 사용자가 검색을 할 수 있도록 keyword 영역이 만들어지는 EnumFilter 옵션이 추가되었습니다. Enum에서 사용하는 suggest 기능으로 이해하시면 됩니다.

---

### 17. 입력 오류 시 편집 내용 롤백 및 검색 UI 구현 문의

**질문:** 1. 데이터 입력 시 뭐가 틀리면 해당 그리드의 편집내용을 다 롤백하고 싶다. 2. AS-IS 화면처럼, 그리드 하단 form에서 검색하면 입력값을 포함한 데이터만 필터링되는 기능을 Sheet8에서도 구현하고 싶습니다.

**답변:** 1. IBSheet에는 revert 기능이 제공됩니다. revertData : 전체 데이터 롤백, revertRow : 행 단위 롤백, revertCell : 셀 단위 롤백 조회 시점 기준으로 되돌리는 기능이므로, 요구사항에 맞게 범위를 선택해 사용하시면 됩니다. 2. AS-IS 화면에서 사용 중인 MultiCombo 제품은 과거 판매 제품으로, 현재는 코드 클로징되어 더 이상 배포되지 않습니다. 따라서 동일한 방식의 구현은 불가하며, Sheet8에서는 다른 방식의 UI/로직으로 재구현이 필요합니다.

---

### 18. 행 머지 + 숨김 열 상태에서 Excel 다운로드 시 머지 오류

**질문:** 행 머지가 적용된 상태에서 숨김 열이 있을 경우 down2Excel({ downCols: 'Visible', merge: 1 }) 사용 시 헤더 머지가 비정상적으로 동작합니다.

**답변:** SearchMode:2번에서 down2Excel({downCols:'Visible',merge:1}) 시 헤더가 병합되는 현상은 8.3.0.40-20251113-17 버전에서 패치되었습니다.

---

### 19. 숫자 컬럼에서 문자 입력 시 기존 값 삭제 현상 (Windows)

**질문:** EditMask를 설정하여 숫자만 입력할 수 있도록 설정했습니다. 숫자 컬럼에 숫자를 입력한 후, 영문(알파벳)을 입력하면 입력이 막히는 것은 정상이나 기존 숫자가 하나씩 삭제되는 현상이 발생합니다. Windows 환경에서만 발생하며 Mac에서는 발생하지 않습니다

**답변:** 해당 현상은 Windows 11 IME 동작 방식에 따른 문제로 확인되었습니다. IME 설정에 따라 동작이 달라집니다.확인 방법(window 기준) :설정 > 시간 및 언어 > 언어 및 지역 > 한국어 - 점3개 클릭(언어옵션) > Microsoft 입력기 - 점3개 클릭(키보드옵션) > 호환성 에서 이전버전의 Microsort IME 확인 이전버전의 Microsort IME 켜져있으면 발생하지 않습니다. 숫자 안사라짐. 이전버전의 Microsort IME 꺼져있으면 한글 키 눌렀을 때 숫자가 한개씩 사라짐

---

### 20. IBSheet8 업그레이드 시 디자인 변경 가이드

**질문:** ibsheet8로 업그레이드 시에 그리드 디자인을 바꾸려고 한다. 참고해야하는 사항이 있는지?

**답변:** IBSheet8은 테마별 main.css 파일을 통해 디자인 커스터마이징이 가능합니다. 해당 파일을 수정하여 전반적인 스타일 변경이 가능합니다.ibsheet.com의 Styler 도구 활용을 권장합니다. 단, 행 높이(row > height) 는 스크롤 계산 및 렌더링과 직접적으로 연관되어 있어 CSS로 강제 변경하는 것은 권장되지 않습니다. 메뉴얼에 height 속성을 검색하여 수정바랍니다.

---

### 21. Excel 다운로드 시 XML 오류 발생 (특정 날짜 데이터)

**질문:** IBSheet에서 날짜 기준으로 데이터를 조회 후 Excel로 추출할 때, 특정 날짜의 데이터에서 아래 오류 메시지가 발생하며 Excel 파일이 정상적으로 열리지 않습니다.파일 수준 유효성 검사 및 복구가 완료되었습니다. 제거된 요소: /xl/sharedStrings.xml (문자열) 잘못된 XML 문자입니다. (1행, 84997열) 해당 오류가 발생하는 조건에 대해 문의드립니다.

**답변:** ATTENDER_30 컬럼에 들어오는 특정 데이터에 특정 16진수 유니코드가 들어있어 발생한 문제입니다.  유니코드의 경우 엑셀 파일을 만들 때 영향을 주기 때문에 문의하신 내용처럼 엑셀 파일 구조가 이상해지는 경우가 있습니다.다만, 유니코드는 워낙 그 수가 많아 문의가 들어온 유니코드에만 패치가 이루어집니다. 만일 의도하지 않은 유니코드라면 데이터를 받아오는 서버 쪽 로직을 확인해 보시기 바랍니다.

---

### 22. InitComboNoMatchText → EnumNoMatchText 공통 적용 문의

**질문:** Sheet7의 InitComboNoMatchText 속성을 Sheet8에서는 EnumNoMatchText로 사용하는 것 같습니다. Sheet7에서는 함수 기반으로 처리되었는데, Sheet8에서는 컬럼 속성값으로 들어가서 컬럼별 설정이 번거롭습니다. Def.Col에 설정하여 공통으로 사용할 수 있을까요?

**답변:** 개념적으로 Def.Col에 설정하면 모든 컬럼에 적용되기는 합니다. 다만, Enum이 아닌 컬럼에도 불필요한 속성이 추가되기 때문에 권장되지 않습니다. Enum 컬럼이 아닌 경우 동작 여부도 불확실하며, 설정 범위가 과도하게 확장되어 관리 측면에서 비효율적이기 때문입니다. 따라서
Enum 컬럼에만 EnumStrictMode, EnumNoMatchText를 명시적으로 설정하고 Enum 컬럼만 선별하여 적용하는 방식이 가장 안정적입니다.

---

### 23. 행 복사 후 상태값을 입력(I)으로 변경하는 방법 문의

**질문:** 조회된 sheet의 데이터를 복사하여 저장하려고 할 때 row의 status 값을 입력으로 변경하는 기능이 필요합니다. 즉, 수정된 데이터를 입력상태로 변경하여 저장하고 싶습니다.

**답변:**  IBSheet에서는 행 상태를 확인하거나 변경할 수 있는 다양한 메소드를 제공합니다. getRowByStatus는 특정 상태를 가진 행들을 배열 형태로 반환합니다. getRowStatus 는 특정 행의 상태값을 반환합니다.(단 ibsheet-common.js 버전 1.0.27 이상에서 지원) IB_Preset.STATUS는 Sheet7의 상태 체계를 Sheet8에서도 사용할 수 있도록 제공되는 preset 기능입니다. IBSheet8에서는 상태 컬럼의 표시값(I, U, D) 자체가 상태를 결정하는 것이 아니라, 행 내부의 속성값으로 판단합니다. 각 행이 가지고 있는 Added / Changed / Deleted 속성값이 1로 설정되어 있을 경우,
해당 상태로 인식하게 됩니다. 따라서 row 상태값은 현재 사용하시는 방식과 같이 setValue 메소드를 통해 상태컬럼의 값을 변경하시거나, 각각의 속성을 추가하는 방식으로 수정하시기 바랍니다.

---

### 25. Paging2 사용 시 Hint 미동작 현상

**질문:** InfoRowConfig 에서 Layout :'Paging2' 설정 시 그리드에서 Hover가 동작하지 않는 현상이 발생합니다.

**답변:** Paging2 사용 시 Hint 가 출력되지 않는 현상은 8.3.0.36에서 패치되었습니다.

---

### 26. Header를 공백으로 설정했을 때 SaveName 노출 문제

**질문:** Header를 공백으로 했을 때 SaveName이 보이지 않고 공백으로 표시되게 하는 방법이 있을까요? Sheet7에선 비워놓으면 공백으로 표시됩니다.

**답변:** sheet8에서도 공백으로 설정하면 빈 칸으로 보여집니다. Header: " " (공백)이 아니라 "" 로 설정한 게 아니신가 의심됩니다. ""의 경우 값을 null 로 판단하여 컬럼의 Name 값을 보여지게 됩니다. 공백 헤더를 원하실 경우 " " 로 설정하시기 바랍니다.

---

### 27. Added 행에 deleteRow 적용 시 서버 처리 방법

**질문:** 데이타 삭제를 하려고 deleteRow 를 했는데, 추가된 행에 대해서 deleteRow 를 하면 getSaveJson으로 데이터 추출 시 Added:1 도 있고 STATUS:D 도 있다. getSaveJson으로 데이터 추출 시 추가된 행을 삭제한 경우 추출이 안되게 하고 싶다.

**답변:** 8.3.0.38 버전부터 기능이 추가되었습니다. (Cfg)ExcludeAddDelStatus은 행 추출 함수 사용시 상태가 Added 이면서 Deleted 인 행의 추출 제외 여부를 설정합니다. 기본동작은 0(사용 안함, 추출됨) 이고 1(사용, 추출 제외) 로 설정시 해당 상태인 행이 추출되지 않습니다. 저장 관련 데이터 추출 함수 (getSaveJson, getSaveString, doSave) 호출에 적용 됩니다.

---

### 28. JEUS에서 “파라미터 위변조 의심” 오류가 발생

**질문:** JEUS에서 파라미터 위변조 의심 오류가 발생합니다. 똑같은 소스인데 시트7에선 제우스 옵션은 모두 무제한이었고 웹투비엔 따로 옵션을 주지 않아도 정상 작동했었는데 시트8은 시트7과 차이가 있나요?

**답변:** Sheet7 과 Sheet8 의 저장 함수나 저장함수로 구성되는 데이타 구조는 거의 동일합니다. 제품의 변경으로 해당 현상이 나타난다기 보다, 현재 jeus 관련 설정의 차이이지 않을까 싶습니다. jeus 버전에 따른 차이나 Filter 관련 설정이 추가된 것은 아닌지 확인이 필요합니다. '파라미터 위변조가 의심됩니다' 라는 로그는 JEUS에 내장된 보안 필터가 비정상적인 파라미터 요청을 감지했을 때 발생하는 것으로, 좀 더 상세한 규칙 위반 내용을 확인하려면 JEUS WebAdmin 또는 설정 파일에서 INFO나 DEBUG 수준으로 로그 레벨을 높여 더 상세한 정보를 얻을 수 있다고 합니다.

---

### 29. 고정 컬럼 사용 시 스크롤에 따른 행 틀어짐 현상

**질문:** IBSheet의 왼쪽 고정 틀과 오른쪽 영역이 분리되어 고정 컬럼 사용하는 화면에서 스크롤을 반복할수록 왼쪽 고정 영역과 오른쪽 데이터 영역의 행이 점점 어긋납니다. 어긋난 상태에서 스크롤을 다시 위로 올리면 일시적으로 맞춰지지만, 스크롤을 반복할수록 렌더링 불일치가 누적되어 시각적 오차가 커집니다. 원인 및 조치 방안에 대한 가이드를 요청드립니다.

**답변:** CSS에서 행 높이(row height), 폰트 크기, 이미지 크기 등을 임의로 변경한 경우,체크박스/이미지 컬럼의 실제 렌더링 높이가 다른 경우 높이값에 영향을 미쳐 발생한 것으로 보입니다.

---

### 32. 커스텀 CSS 적용 시 Excel 다운로드 스타일 미반영 문제

**질문:** CellHeader 클래스를 통해 배경색 적용은 되는데, HeaderText 클래스에 적용한 글자 설정이 정상적으로 적용되지 않은 채로 다운로드가 됩니다.

**답변:** IBCEHeaderText에 설정한 설정값 중 color 값은 정상적으로 적용되나,  font-weight는 적용되지 않아 문의하시는 것으로 보입니다. 서버모듈을 이용한 엑셀 다운로드 시 fontSize는 반영되지 않습니다. 서버모듈은 다운로드 하기 위한 시트의 정보를 전문으로 추출하여 down2Excel.jsp를 통해 서버에서 엑셀로 내리는 방식입니다. 서버로 전달하는 전문의 길이가 한정적이기 때문에 fontSize는 전문에 포함되어있지 않아 반영되지 않습니다. 하지만 또다른 엑셀 다운로드 방식인 클라이언트방식(exportData) 는 브라우저에서 바로 엑셀을 내려받기 때문에 fontWeight를 반영할 수 있습니다. 만약 데이터가 적으시다면 exportData로 내려받으시기 바랍니다.

---

### 34. 대량 이벤트 발생 시 렌더링 성능 저하 대응 방법

**질문:** 각 필드에 값이 변경 될 경우 변경된 값에 따라 DB데이터 조회 후 결과를 체크하거나 다른 필드에 설정하고, 거기에 다시 값이 설정되면 필요 시 다시 이벤트가 발생하면서 데이터가 셋팅되는 구조입니다. DB 조회도 빈번히 발생하기도 하는데 그에 따라 컬럼 배경색이 변경되기도 하는데, 이 과정에서 그리드 랜더링에 시간이 걸리는게 아닌가 싶습니다. 엑셀처럼 대량 복사/붙여넣기 시 그리드 렌더링 성능 저하가 발생합니다. Sheet7의 RenderSheet와 같은 기능이 Sheet8에도 있는지 문의드립니다.

**답변:** IBSheet8 에는 Sheet7 의 RenderSheet 함수와 같이 사용자 호출 시점에 한번에 랜더링을 끄고/키는 동작 함수는 없습니다. 단, IBSheet 8 에서는 개별 함수 호출 시점에 render 인자를 넣어서 함수 호출과 같이 랜더링 여부를 설정할 수 있습니다. 모든 함수에 있는 것은 아니지만, 색상을 변경하거나 값을 변경하는 함수(setAttribute / setValue ) 등에는 render 인자가 포함되어서 호출시점에 랜더링을 멈췄다가, 로직의 마지막에 rerender() 또는 renderBody() 를 통해 랜더링을 한번에 반영시킬 수 있습니다.

---

### 35. Sheet7 헤더 배경색 로직을 Sheet8에서 구현하는 방법

**질문:** Sheet7에서 헤더 셀에 직접 배경색을 지정하던 로직을 Sheet8에서는 어떻게 구현해야 하나요? mySheet.SetCellBackColor(0,23,'#F7D358');

**답변:** 기존은 특정 컬럼의 Header 색상을 변경하시는 것으로 보입니다. 동적으로 변경하시는 것을 유지하시려면 onRenderFirstFinish 와 같은 시트 렌더링이 끝난 시점에 setAttribute(row객체, 컬럼명, "Color", "변경색", 0); 으로 렌더링을 끈 상태로 색상을 모두 변경하신 후 (5번째 인자가 render 여부) 및 sheetID.refreshRow(변경한 row객체); 를 호출하시면 됩니다. 참고로 헤더 행은 헤더가 한줄 일 때는 Header 라는 이름을 갖고 2번째 헤더행부터는 HR1,HR2... 식으로 ID를 갖습니다. 이를 getRowById 를 통해 가져오시면 편하게 Header의 row객체를 가져올 수 있습니다. var headerRow = sheet.getRowById("Header"); sheet.setAttribute(headerRow, "컬럼명", "Color", "#F7D358", 0); sheet.refreshRow(headerRow);

---

### 36. Sheet7 → Sheet8 전환 시 Tree 구조 렌더링 문제 (Vue)

**질문:** Sheet7 화면을 Sheet8로 변환 중이며, Vue 환경에서 Tree를 구성했으나 접힘/펼침이 제대로 동작하지 않습니다.

**답변:** tree 데이터가 sheet7 하고는 좀 달라서 convertTreeData 로 sheet7 구조의 level 을 가져와서 넣어줘야 하고, 레벨별로 접고 펼치는 것은 showTreeLevel 로 해야 한다. 다만, 생성/조회가 다 비동기 이기 때문에, 시트 생성하고 바로 조회 하고 바로 showTreeLevel 하면 안되고, 시트의 onRenderFirstFinish 에서 convertData 를 loadSearchData 하고, onSearchFinish 에서 showTreeLvel 을 해야 한다.

---

### 40. 복사/붙여넣기 시 행 자동 추가 기능 (Sheet7 → Sheet8)

**질문:** Sheet7에서는 복사/붙여넣기 시 클립보드 데이터가 여러 줄이면 자동으로 행이 추가되었는데, Sheet8에서는 동일 기능이 동작하지 않습니다.

**답변:** Sheet8 에서는 Cfg.PasteFocused 라는 속성이 있으며, 해당 속성값을 9 로 추가하셔야 합니다. options = { Cfg :{ PasteFocused: 9, // ctrl+v 시 신규행을 추가 } }; Sheet7 에서 붙여넣기시 기본은 해당 셀에 붙여넣기가 되는 것이고, 행을 추가하면서 붙여넣기 하려면 mySheet.SetClipPasteMode(3); 이 설정되어 동작된 것입니다. Sheet8에서는 Cfg.PasteFocused = 9 설정으로 동일 기능 구현이 가능합니다.

---


## 서버_통신

### 1. 데이터를 저장하려 했으나 객체라 서버로 전달 불가

**질문:** 데이터를 저장하려고 row 객체를 보냈는데 객체라서 제대로 뒷단으로 보낼 수 없다.

**답변:** 저장 대상 데이터는 getSaveJson()을 사용해 JSON 형태로 추출해야 합니다. sheet.getSaveJson({saveMode:2}); 와 같이 사용 시 saveMode에 따라 데이터를 json으로 추출 가능합니다. saveMode : 상태별 데이터 추출 여부 0:전체데이터 1:전체데이터 중 Deleted 만 제외 2:수정된 데이터(Added,Changed,Deleted) (default) 3:수정된 데이터(Added,Changed,Deleted)+이동한 데이터(Moved)

---

### 2. Bool 타입 값이 API별로 다르게 추출됨

**질문:** Bool 타입 데이터를 추출하는데 getValue 하니까 0,1로 뽑히는데 getSaveJson으로 뽑으니 Y/N이 뽑힌다.

**답변:** 공통 설정에 TrueValue / FalseValue가 정의된 것으로 보입니다. 해당 속성을 설정하면 0과 1의 값이 설정값으로 변경되어 추출됩니다. 설정된 값은 데이터를 조회(doSearch,loadSearchData등)하거나 저장(doSave,getSaveJson등)할 때 설정한 값이 추출되며, 이 속성 값은 단지 서버와 데이터를 주고 받을때만 사용될 뿐, 해당 셀의 값을 getValue()를 통해 확인시에는 1(true)/0(false)로 리턴된다.

---

### 3. 일부 행만 저장 후, 나머지는 수정 상태 유지 여부

**질문:** 저장을 getSaveJson() 으로 데이터를 보내서 저장을 하는데, 일부 데이터만 저장한다. 저장 이후에 저장되지 않는 행들은 아직 수정 상태로 두고 싶은데 어떻게 해야하는지?

**답변:** getSaveJson()은 추출만 수행합니다. 저장 이후 상태 초기화는 acceptChangedData() 호출 여부에 따라 결정됩니다. 상태는 Added, Changed, Deleted 속성이 있는걸로 판단하기 때문에 acceptChangedData() 이후에 원하는 데이터의 상태값을 다시 넣어주는 식으로 해줄 수 있다. 일부만 반영, 이런 기능은 없다.

---

### 4. 복수 행을 한 번에 교체하는 API 존재 여부

**질문:** setRowValue, setValue 를 통해 행 단위로 데이터를 교체할 수 있는 메소드가 제공되는 걸로 알고있는데, 복수의 행을 교체할 수 있는 메소드가 있는지 궁금합니다. 대략 2~3만 행을 가지는 시트에서 루프를 통해 복수 행을 순차적으로 업데이트하고자 합니다.

**답변:** 복수 행을 일괄 교체하는 전용 API는 제공되지 않습니다.  대량 변경 시 setValue / setRowValue 반복보다는 기존 데이터 제거 후 loadSearchData()로 재조회 방식이 성능상 유리할 수 있습니다.

---

### 6. doSave confirm 메시지 동적 변경

**질문:** doSave 저장 시 뜨는 confirm 메시지의 내용을 데이터에 따라 동적으로 변경하고 싶다. "저장하시겠습니까?" 라는 Text만 변경하기를 원함.

**답변:** 기본 confirm 비활성화 후 커스텀 처리할 수 있습니다.doSave({ quest: false }); 이 후 onShowMessage, onShowMessageTime 이벤트에서  외부 메시지 라이브러리를 연동하여 메시지를 띄울 수 있습니다. 또는 IBSheet 메시지 파일인 ko.js 내 ConfirmSaveDataRows 메시지를 수정할 수 있습니다.

---

### 7. addRows 후 setValue 값이 보이지 않음

**질문:**  addRows() 이후 setValue()로 값 설정 시 화면에 반영되지 않는다.

**답변:** 반복문으로 값을 넣을 예정이라면, addRow 시점에 init 옵션으로 값을 설정하는 것이 안정적입니다. sheet.addRow({ init: rowData });

---

### 8. deleteRows 이후 저장 데이터에 포함되지 않음

**질문:** deleteRows 후 getSaveJson() 결과에서 Status가 비어 있고 저장되지 않는다.

**답변:** 삭제 시 행에는 Deleted:1 속성이 자동 설정됩니다. getSaveJson() 기본값(saveMode:2)에서는 삭제 행도 포함됩니다. saveAttr 을 설정하여 Deleted 행이 필터링 된 것으로 보입니다.

---

### 11. saveCurrentInfo 저장값을 다시 조회하는 기능 요청

**질문:** saveCurrentInfo로 저장한 값을 getCurrentInfo가 아닌, 이전에 저장한 값 기준으로 다시 불러오고 싶다.

**답변:** getSavedCurrentInfo() API가 추가되었습니다. saveCurrentInfo()로 저장한 시점의 정보를 다시 조회 가능(v3.0.28에서 추가) 현재 로컬 스토리지 혹은 세션 스토리지에 저장되어 있는 시트의 컬럼 정보를 문자열로 가져옵니다.

---

### 12. 조회·저장 시 화면 전체 block 처리

**질문:** 조회 저장시 화면 전체를 block 하고 싶다. 현재는 IBSheet에서 조회, 저장시 아무 반응이 없다.

**답변:** IBSheet에서 기본적으로 조회 저장시 액션에 대한 내용을 화면에 표시하지 않는다. (Cfg) SuppressMessage 를 2로 설정하거나 화면 전체에 block 처리를 하고자 할경우에는 다른 라이브러리를 써서 처리해야 한다.

---

### 17. SearchMode:3 환경에서 삭제 시 2페이지 자동 조회 문제

**질문:** SearchMode:3, PageLength:100 환경에서 행 삭제 또는 Visible 변경 시 자동으로 2페이지 조회가 발생한다.

**답변:** SearchMode:3에서 스크롤이 없는 상태로, 삭제로 인해 보이는 row 수가 줄어들면 스크롤 끝에 도달했다고 판단하여 서버 재조회 발생하여 발생한 문제입니다. 8.3.0.20에서 패치되었습니다.

---

### 18. 다국어 관련 오류 메시지 발생

**질문:** 특정 사용자에게 첨부 파일과 같이 메세지가 뜬다는 문의를 접수 받았습니다. please import locale file. the browser(or ibsheet)default language code is "En". Try loading IBSheet default locale.

**답변:** IBSheet 에서 별도의 언어를 설정하지 않은 경우 브라우저의 Locale에 해당하는 메세지를 사용하려고 시도합니다. 시트에서 띄워주는 메세지를 브라우저 언어에 맞게 띄워주기 위함입니다. 이를 정적으로 특정 언어로 메세지를 표시하려면 (Cfg)MsgLocale 속성을 설정해 주시고, 해당하는 msg 파일을 호출해야 합니다. MsgLocale : "Ko"와 같이 추가하고 그에 맞는 msg 파일을 호출 해야 합니다. (ex : MsgLocale : "Ko" 이면  ko.js 파일이 링크가 걸려 있어야 함)

---

### 20. showProgress cnt 값이 동적으로 변경되지 않음

**질문:** ajax 통신 중 showProgress의 cnt 값을 변경해도 처음 값만 표시된다.

**답변:** showProgress는 ajax 통신 진행률용이 아닙니다. 시트 렌더링 진행 상태를 표현하는 용도로, ajax 지연 시간에 맞춰 1% 진행도만큼 프로그래스바가 표시되는 동작은 불가합니다.

---

### 21. 외부 데이터와 시트 데이터를 비교 후 값 교체

**질문:** 버튼 클릭 후 {id:"A", value:"가나다"} 데이터를 가져와 시트 데이터 중 id가 같은 행의 값을 교체하고 싶다.

**답변:** 버튼 클릭 시 ajax 호출한 뒤 sheet.getDataRows()로 시트 데이터 추출하고 id 값 비교해서 일치하는 row에 setValue()로 값 변경하면 됩니다. IBSheet 전용 기능이 아닌 일반 데이터 매핑 로직으로 처리하면 됩니다.

---

### 23. 저장 시 SearchProgress 와 같은 프로그레스바 사용 가능 여부

**질문:** SearchProgress 기능과 같은 저장프로그레스바 사용이 가능할까요?

**답변:** 저장 프로그레스바의 경우 저장 시에 progress 를 통한 대기 메세지는 정확한 정보를 표시하지 못합니다. 서버 상 처리 시간을 받아가면서 update 해야 하는데, 저장은 동기처리되므로 실제 저장완료에 대한 데이터가 와서 시트에 반영하는 시간에만 살짝 띄워보일 수 있습니다. 저장 전에 progress 를 띄우더라도 단계별 메세지를 비동기 형태로 받지 못하기 때문에 SaveProgress 와 같은 기능은 사용이 불가능합니다. save 시에 메세지창을 띄우길 원하신다면 SuppressMessage :2 에서 저장과 관련된 메세지를 제공합니다. 만일 해당 속성 2 이하를 사용하기 원하신다면 save 직후 이미지나 메세지를 따로 띄웠다가, 데이터가 오면 결과값을 받는 시점에 띄운 메세지를 닫는 방법 밖에 없습니다.

---

### 25. phoneNo 설정 및 가변 길이 데이터 처리

**질문:** format 에 phoneNo 로 설정했을때, 8자리 등 예외 케이스 처리 가능한가요? customFormat 에다도 정규식으로 넣을 수 있는지 문의함. 궁극적으로는 가변적인 길이의 데이타를 전화번호로 표시하려고 합니다.

**답변:** 현재 정규식 형태로 지원 가능한 속성은 EditMask 와 ResultMask 만 됩니다. 문의하신 조회 데이타에 format 을 자릿수에 따라 지정해야 한다면 customFormat 을 사용하셔야 하는데, PhoneNo 로 정의되지 않은 길이수를 표시해야 한다면 customFormat을 function 으로 지정하여 자릿수에 따라 별도 포맷으로 보여지도록 처리하실 수 있습니다.

---

### 26. 필터 후 합계행에 필터링된 데이터만 반영

**질문:** 필터 적용 후 합계행(Sum)에 필터링된 결과만 반영하고 싶다.

**답변:** (Cfg) FormulaRowNoFiltered: true를 설정하면 된다.

---

### 31. Salesforce 환경에서 Pivot 생성 시점 이슈

**질문:** 페이지 렌더링 시 Pivot 시트 생성 및 Dialog 크기 문제 발생

**답변:** 보내주신 코드 상에는 페이지 렌더링시 저장된 피봇 테이블 정보가 있으면, 해당 정보로 피봇 시트를 생성하고, 이후 피봇다이알로그를 호출하고 있는데, 피봇시트는 원본시트가 생성된 이후에 생성이 가능합니다. 코드상에는 원본 시트를 생성하는 구간이나, 원본시트의 생성이 다 완료되었는지 여부를 판단하는 구간이 없어 보입니다. 최초 문의가 피봇 다이알로그 크기가 작게 표시된다고 하셨는데, 피봇 다이알로그 호출하는 구간을 주석처리하시고 피봇 시트가 먼저 잘 그려지는 확인해 보시기 바랍니다. 만약 페이지가 열리면서 피봇팅 된 시트가 생성되도록 구현하시는 거라면, 페이지 생성시 원본 시트를 생성하고 원본시트의 OnRenderFirstFinish() 시점에 makePivotTable 를 호출하시기 바랍니다.

---

### 32. SearchMode:5 에서 getTotalRowCount 가 0 반환

**질문:** SearchMode:5를 썼다. DoSearchPaging로 조회를 했다. 페이징처리를 안했다. getTotalRowCount 로 전체 데이터 갯수 뽑으면 0으로 나온다.

**답변:** 일단 페이징 처리를 안했는데 SearchMode:5를 사용하는것은 적절하지 않아보입니다. SearchMode:4 일 때 Total이 없으면 시트가 가진 값이 리턴 됨(누적) SearchMode:5 일 때 Total이 없으면 그냥 0이 리턴 됨

---

### 34. HHmm 포맷 데이터가 타임스탬프로 나오는 문제

**질문:** HHmm 포맷의 데이터를 뽑아서 저장하려는데 타임스탬프로 나온다. 타임스탬프를 HHmm 포맷으로 변경해서 사용하고 싶다.

**답변:** DataFormat:"HHmm" 으로 잘 설정했는데 값을 뽑을 때 getRowsByStatus로 값을 뽑은 뒤 그 row 객체 그대로 접근해서 값을 뽑으니 타임스탬프로 들어있다. getValue나 getSaveJson으로 뽑아서 사용하면 원하는 "HHmm" 형식으로 나온다. 만약 위의 getRowByStatus로 추출한 행만 json 형식으로 뽑으려고 한다면 sheet.getSaveJson({rows:sheet.getRowsByStatus("Changed")}) 와 같이 사용하면 된다.

---

### 36. SuppressMessage:0 설정 시 필터에서 브라우저 멈춤

**질문:** SuppressMessage :0 으로 설정하고 필터 시 브라우저가 멈추는 증상이 발함 SuppressMessage :0를 0으로 설정한 이유가 조회, 저장시 대기이미지가 뜨지 않아서 그렇게 설정 했는데, 조회 저장시 Message 가 떴으면 좋겠다고 함

**답변:** SuppressMessage :0은 시트 내에서 발생하는 모든 메세지 표시한다. 권장 설정은 SuppressMessage:2이다.

---

### 39. Date Type + Range 사용 시 yyyy/MM/dd 형식 인식 불가

**질문:** Date Type에서 Range 속성을 사용했는데 yyyy/MM/dd 형식의 데이터가 인식되지 않는다.

**답변:** 8.2.0.14 에서 패치 완료되었습니다.

---

## 성능_최적화

### 1. 데모버전 사용 중 eval 오류 지속 발생

**질문:** 현재 데모버전을 서버에 올려 테스트 진행 중입니다. 진행 중 eval 오류가 지속적으로 발생하고 있어 원인 분석차 문의드립니다. 첨부파일은 오류 캡처본과 소스를 전달드립니다.

**답변:** 현재 IBSheet8은 CSP 적용시 unsafe-eval과 unsafe-inline에 대한 이슈가 있습니다. 여기서 unsafe-inline은 최근 패치를 통해 수정되었으나, 아직 eval(또는 new Function) 부분은 제품 내부에 여러 부분에서 사용되고 있어서 조금 더 작업을 해야 할 것으로 판단 됩니다. (이 부분은 빠르면 2025년 12월 중, 늦어도 2026년 1~2월 중에는 해결될 것으로 판단됩니다.) 그리고 이와 별개로 CSP와 SA(웹접근성)에 최적화 된 제품을 내년 중순에 릴리즈하는 목표로 준비 중에 있습니다. 이런 점 참고 부탁 드립니다.

---

### 3. IBSheet.create 시 el 관련 alert 발생

**질문:** 탭 전환이 빠를 경우 시트 생성 중 div가 사라져 alert가 발생한다. [IBSheet.create({id:'sheet'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id.

**답변:** 시트 생성 자체가 실패한거라 해당 alert를 막는것은 불가하다.

---

### 5. DataMerge + 삭제 시 성능 저하

**질문:** DataMerge 사용 시 체크 행 삭제가 매우 느리다.

**답변:** deleteRow 의 visible:0 으로 설정한 경우 매번 deleteRow 가 호출될 때마다 머지 재계산이 이루어집니다. 매번 rendering을 하기 때문에 속도가 느려질 수 있습니다. (deleteRows 도 동일한 동작 방식을 가지고 있습니다.) 해결방법은 아래와 같습니다. sheet.deleteRow({ row, visible: 1 }); sheet.hideRow(row, 0, 1, 1); 반복 종료 후 renderBody() 1회 호출

---

### 9. Row 객체 직접 CanEdit 변경 시 즉시 반영 안 됨

**질문:** Row에 직접 접근해서 CanEdit:0으로 바꿨는데 클릭 이후 반영이 된다.

**답변:** 행객체에 직접 접근해서 변경하면 내부에서는 반영이 되지만 랜더링하지 않으면 반영이 안된다. setAttribute로 변경해서 사용하거나 변경 후 마지막에 rerender()를 쓰면 된다.

---

### 12. loadSearchData로 특정 위치 행 추가 시 느림

**질문:** loadsearchdata 함수를 사용해서 빈행을 추가하려고 하는데, 포커스된 행 바로 아래쪽에 행을 추가하려고 하니, 속도가 너무 느리다. append: true, next: sheet.getNextSiblingRow() 로 붙이면 속도가 너무 느린다. next 를 안넣으면 빠른데, 사용자가 선택한 행 아래로 행을 붙여야 해서, 이렇게 써야 한다.

**답변:** 행 추가 함수가 있기 때문에 아래 소스를 사용하길 권장드립니다.sheet.addRow({ render:0 }); 마지막에 sheet.rerender();

---

### 15. setAllCheck 성능 이슈

**질문:** setAllCheck가 데이터 증가 시 느려진다.

**답변:** setAllCheck() 함수의 경우, 내부적으로 setValue() -> refreshRow() 가 행마다 발생하다 보니, 데이타가 많아질수록 랜더링 횟수가 많아져서 느려지게 됩니다. ​현재로서는, 전체행에 대해서 체크를 하는 형태라면 getDataRow() 만큼 for loop 로 setValue() 를 하면서 인자로 render:0 으로 호출하고, 마지막에 rednerBody() 또는 rerender() 한번에 체크값이 반영될 수 있도록 구현하는 것이 속도가 더 빠르게 됩니다.

---

### 16. FormulaRow에 숫자 직접 입력 시 에러

**질문:** FormulaRow에 특정값이 입력될 경우 오류가 발생합니다. FormulaRow 에 115838. 입력 -> grid 정상출력됨. FormulaRow 에 115838.495 입력 -> grid 출력안됨

**답변:** 합계행을 설정하거나 표시할 수 있는 FormulaRow 기능은 지정된 함수 또는 사용자 정의 함수만 사용 가능합니다. 문의하신 것처럼 정해진 숫자 값을 표시하고자 하는 경우, 사용자 정의 함수에 원하는 값이 return 되도록 설정해 주셔야 합니다. 기존 : FormulaRow : '11538.12' => 변경 : FormulaRow : function(){ return 11538.12 };

---

### 20. 특정 PC 크롬에서만 시트 미표시

**질문:**  제 PC의 크롬에서 GRID가 조회되지 않는 현상이 있습니다. (크롬 최신 버전 104.0.5112.102(공식 빌드) (64비트) ) 이상하게도 제 PC의 엣지에서는 정상 처리되고, 다른 사람 PC의 크롬에서는 또 정상적으로 작동도 되고 잘 보여집니다. (Microsoft Edge 버전 104.0.1293.70 (64비트))

**답변:** 특정 pc 의 크롬에서만 발생하는 현상인 경우, 해당 pc 의 성능이 원인일 수 있습니다. main.css 를 ibsheets.js 이전에 로드해보시기 바랍니다.

---

### 21. IBSheet에서 성능 기준 권장 SearchMode 문의

**질문:** 1. 성능 관점에서 IBSheet가 권장하는 SearchMode는 뭔지? 2. SearchMode:4 서버페이징에서 pageLength를 동적으로 변경하면 네비게이션이 깨진다. 어떻게 처리해야 하나?

**답변:** ibsheet8 의 특징중에 하나가 대용량 조회모드 (fastLoad) 방식을 제공한다는 것입니다. 대용량 처리 모드(0) 의 경우 전체데이타를 한번에 가져와서 사용자가 스크롤링을 통해 전체 데이타를 확인하실 수 있습니다. 추가로, seachMode:4 의 경우 서버페이징 방식으로, 일반적인 게시판 형태처럼 사용자가 선택한 페이지 번호를 서버로 보내 해당 페이지의 데이타를 가져오는 형식입니다.  CRUD + Merge + 대량 Row 조작이 있으면 무조건 0번, 단순 조회·게시판은 4번을 추천드립니다.

---

### 23. 대량 행 삭제 시 브라우저 멈춤

**질문:** 70건 삭제만 해도 브라우저가 멈춘다.

**답변:**  화면 랜더링에 영향을 주는 함수들이 반복적으로 호출되면서, 말씀하신 현상이 일어나는 것으로 보입니다. 아래와 같이 코드를 변경해 보시기 바랍니다.sheet.hideRow({ row, norender: 1 });sheet.renderBody();

---

### 26. SearchMode:2 느림 vs SearchMode:0 잘림

**질문:** SearchMode:2번에서 데이터가 많은 경우 행추가 속도가 너무 느리다. 따라서 SearchMode:0번으로 변경하여 사용하는데, 속도는 개선되었지만 데이터가 적은 화면에서 하단이 반쯤 잘라보인다.

**답변:** 덤프떠옴 → 2. SearchMode: 0 일때 마지막 행이 잘리는 문제는 Row Height를 Css에서 강제로 수정하여 IBSheet 로직에서 계산한 높이와 맞지 않아 일어난 현상입니다. Heigh를 24px로 사용하고 있는데 이를 위해서 Sheet options에 Cfg.Size: "Small", Def.Row.Height: 24로 추가로 설정하고, base.css에서 .IBSPMain .addIcon u.IBSPSheetButton 내용 중 height: 20px; padding-top:4px; 부분을 삭제 .IBSPMain .addIcon u.IBSPSheetButton i 내용 중 font-size:14px에서 8px로 변경하면 높이에 맞게 변경됩니다.

---

### 28. 좌측 시트 → 우측 시트 행 이동 최적화

**질문:** 좌측에 있는 시트에 행을 복사해서 우측 시트로 이동시키고 싶습니다.

**답변:** 행의 이동은 복사 > 원본삭제 형태로 진행 가능합니다. var chkRows = pageInfo.leftSheet.getRowsByChecked("CHK"); //오른쪽 시트로 복사 pageInfo.rightSheet.copyRows( chkRows ); //왼쪽 시트에 행들을 삭제 pageInfo.leftSheet.removeRows(chkRows);

---

### 31. SearchMode:2 + DataMerge 끊김

**질문:** SearchMode:2 사용 시 특정 데이터의 Merge가 끊겨보입니다.

**답변:** SearchMode:2 를 사용하는 경우 시트내부에 데이터 구조는 DIV 단위로 분리되어있습니다. 따라서 중간에 같은 값을 갖고 있다고 하더라도 20개 행 단위로 DIV가 나누어 지면서 머지가 끊어지게 됩니다. 머지 필요 시 SearchMode:0을 사용하시거나, PrevColumnMergeMode: 1 설정 바랍니다. 페이지 단위로 나누어 셀을 머지합니다.

---

### 33. 300건 이상 행 추가/삭제 시 멈춤

**질문:** 다음 화면에서 행 추가나 삭제시 액박이 뜨는 현상이 발생합니다. < 현상 > 매입전표 등록에서 300건 이상 입력할 경우 가끔씩 화면 멈춤 및 스크롤이 움직이지 않는 현상이 발생 하고 있습니다.

**답변:** addRow를 반복해서 사용할 경우 추가된 DataRow객체만큼 Tr태그를 들고있게 되면서 브라우저에 부담을 주게 되며 발생합니다. SearchMode를 0으로 설정하게 되면 성능적인 부분은 해소될 것으로 보여집니다.

---

## 스타일_UI

### 1. IBSheet에서 사용하는 font 파일이 너무 무겁다

**질문:** IBSheet에서 사용하는 font 파일 용량이 너무 크다.

**답변:** 기존 IBSheet에서 사용 중이던 OTF 폰트 파일 용량이 커 성능 이슈가 발생할 수 있어, 경량화된 압축 폰트(woff2)로 변경되었습니다. 1. ibsheet.js와 동일 경로에 있는 fonts 폴더에 참부된 font를 복사하여 적용한다. 2. main.css 파일에서 기존 폰트 호출 부분을 아래와 같이 수정합니다.(첨부 참고) @font-face{font-family:'Noto Sans KR';src:url('./../../fonts/NotoSansKR-Regular.woff2') format('woff2')} @font-face{font-family:'Noto Sans KR Bold';src:url('./../../fonts/NotoSansKR-Bold.woff2') format('woff2')} 이상입니다.

---

### 3. IBSheet 객체 중복 생성 경고 메시지 발생

**질문:** IBSheet.create({id:'accountMngSheet'}) 호출 시 Duplicate sheet_id already exists 경고 메시지가 간헐적으로 발생한다.

**답변:** IBSheet에서 제공하는 hasSheet 메서드를 사용하는 것이 적절하다.IBSheet.hasSheet("Sheetid"); 기존 소스에서 dispose() 호출 전 시트 존재 여부를 hasSheet로 판단하도록 수정하면 된다.

---

### 4. Wrap 설정 시 줄바꿈 및 행 잘림 현상

**질문:** Type:"Lines"가 아닌 Def.Row.Wrap:1 설정 시 공백 없는 영문/숫자 문자열이 줄바꿈되지 않으며, 한글 포함 시에는 줄바꿈은 되지만 행이 잘린다.

**답변:** CSS에서 줄바꿈 처리가 불완전한 것이 원인이다. .IBWrap1 클래스에 word-wrap: break-word;를 추가하면 해결된다. .IBWrap1 { white-space: normal } 기존 위와 같던 css에 word-wrap:break-word; 를 추가하면 해결된다.

---

### 5. 빈 행(space) 추가 및 하단 행 잘림 현상

**질문:** 아무 기능 없는 빈 공간(행)을 추가하고 싶으며, 하단 행이 잘린다.

**답변:** 하단 행 잘림은 브라우저 배율 문제로 판단된다. 기존 main.css에서 주석 처리된 border 스타일로 인해 시각적 어긋남이 발생한 것으로 보인다.

---

### 6. 선택한 Row에 Bold 적용 시 클릭해야 반영되는 문제

**질문:** 선택된 Row에 Bold를 적용했으나, 마우스 클릭 후에야 스타일이 반영된다.

**답변:** Row 객체가 아닌 속성 값에 직접 할당하면서 정상 갱신이 되지 않은 문제이다. var row = evtParam.sheet.getRowById(dataRows[d].id); row["TextStyle"] = 1; evtParam.sheet.refreshRow(row); Row 객체를 직접 수정 후 refreshRow 호출해야 즉시 반영된다.

---

### 10. IBSheet 클릭 시 브라우저 스크롤이 상단으로 튄다

**질문:** 페이지에 스크롤이 있는 상태에서 상단의 IBSheet 클릭 시 브라우저 스크롤이 위로 이동한다.

**답변:** Row 높이를 CSS에서 강제로 지정하여 IBSheet 내부 높이 계산이 어긋난 것이 원인이다. Row 높이를 강제로 지정하지 않아야합니다.

---

### 22. sheet 높이를 브라우저에 꽉차게 하는 방법을 알려주세요. ...

**질문:** sheet 기본 높이가 800인거 같은데요. 모니터 마다 그 화면에 크기가 달라지기 때문에 높이를 꽉차게 해주고 싶은데요. sheet 높이를 브라우저에 꽉차게 하는 방법을 알려주세요.

**답변:** 시트 자체의 높이를 조절하지 마시고, 시트가 들어가는 상위 div의 높이를 "height:calc(100vh - 150px)" 와 같이 vh 를 사용해 보이는 height 값으로 화면마다 그에 맞게 높이가 지정될 수 있도록 설정해보시기 바랍니다. *주의: height에 단순 100% 와 같이 %로 높이 설정 시 높이 계산이 정확히 이루어지지 않습니다. calc 를 이용하시어 정확한 높이를 계산할 수 있게 하시거나, vh 를 이용하시기 바랍니다.

---

### 23. (Cfg) CanDrag:1 설정하고 드래그 &드랍시 화살표 이미지가 나타나는데 이걸 표시하고 싶지 않다고 함 이동할 행 정보는 표시 해야 한다.

**질문:** (Cfg) CanDrag:1 설정하고 드래그 &드랍시 화살표 이미지가 나타나는데 이걸 표시하고 싶지 않다고 함 이동할 행 정보는 표시 해야 한다.

**답변:** (Cfg) CanDrag:1 설정후 행 이동시 화살표 표시 유무는 기능으로 제공하지는 않고 css를 수정하여 표시하지 않으면 될듯합니다. IBDragRowLeft와 IBDragRowRight 클래스를 수정하여 이미지를 표시하지 않으면 됩니다. .IBDragRowLeft{background-image:none!important} : 왼쪽 화살표 .IBDragRowRight{background-image:none!important} : 오른쪽 화살표 이상입니다.

---

### 24. 행 높이 20 px 조정했는데, 스크립트에서 인라인으로 Row.height 가 22px 로 잡히는거 같다. css 를 다 수정했는데도 동일하다...

**질문:** 행 높이 20 px 조정했는데, 스크립트에서 인라인으로 Row.height 가 22px 로 잡히는거 같다. css 를 다 수정했는데도 동일하다고 함.

**답변:** cfg.Size 에 따라 최소 행 높이와 아이콘을 설정할 수 있는데, Size:"Low" 로 지정하고 Def.Row.Height: 20 px 를 설정한 것임. Row.Height를 Size의 최소 행 높이 이상으로 설정하는 것은 가능하나, Size 에서 제한하는 높이 이하로 Row.Height 를 설정하는 것은 안된다. cfg.Size 조정이 필요함.

---

### 25. 1. 그리드 툴 우측상단에 [0/0] 이런식으로 InfoRow 표시되는 부분을 지우고싶습니다. 2. 테마가 적용되지 않는다.

**질문:** 1. 그리드 툴 우측상단에 [0/0] 이런식으로 InfoRow 표시되는 부분을 지우고싶습니다.? 2. 테마가 적용이 안되는데, 혹시 방법이 따로 있을까요 ?

**답변:** 1. InfoRowConfig: { Visible: false }를 설정하면 된다. ibsheet-common.js에 InfoRowConfig가 정의되어 있어 모든 시트에 공통으로 동작한다. 공통으로 안보이게 하고자 한다면 ibsheet-common.js 파일의 _IBSheet.CommonOptions 안에서 InfoRowConfig: { Visible: false }를 설정해야한다. 2. loader.config에서 theme: "mint" 와 같이 정의 했다고 하여 테마가 자동으로 정의되는 것은 아니다. 해당 loder.config에 정의한 내용은 단순히 css/mint/main.css 파일을 호출하여 주는 역할만 한다. 테마 사용을 위해서는 (Cfg) Style:"IBMT"를 적용해야 한다. Style에 설정할 수 있는 문자열은 각 테마 클래스 접두어이다. main.css 를 열어보면 확인이 가능하다. (default테마 : IB, mint테마 : IBMT 등)

---

### 27. 데이타 영역의 border 값을 모두 빼고 싶다. 1. 셀 영역 , 2 외곽 테이블 의 1px 의 상단/하단 빼고 싶음.

**질문:** 데이타 영역의 border 값을 모두 빼고 싶다. 1. 셀 영역 , 2 외곽 테이블 의 1px 의 상단/하단 빼고 싶음.

**답변:** 테마별로 지정가능하며, 기본 테마를 쓴다고 하면 default/main.css 에서 수정해야 한다. 1. IBBaseCell 의 border 관련 속성을 제외하면 됨. 2. IBMainTable 의 border 관련 속성을 제외해야 하는데, 다른 class 들과 같이 정의된 것도 있으니, IBMainTable 만 따로 빼라고 안내함. 만약, 특정 시트만 그렇게 만들려면 그 시트의 style 을 별도 지정해서 쓰라고 안내함.

---

### 29. 현재 보여지고 있는 시트가 일반시트인지, 피봇시트인지 구분할 수 있는 방법?

**질문:** 현재 보여지고 있는 시트가 일반시트인지, 피봇시트인지 구분할 수 있는 방법? 현재 pivotSheet_sheet.switchPivotSheet 를 사용하여 그려진 그리드와 피봇 테이블을 스왑하여 볼 수 있도록 제작을 하려고 하고 있습니다. 이때 한가지 문제점이 발상해게 되는데 현재 그려진 테이블의 값을 가져올 수 없었습니다. (해당 함수가 IBSheet Document에서 보이지 않았습니다.) 현재 페이지를 가져올 수 있다면 pivotSheet_Table을 가져와 변환을 하는 것 까지는 해보았습니다. image.png 현재 그려진 그리드가 피봇테이블인지 IBSheet그리드 인지 구분할 수 있는 방법이 있는지 알고싶습니다.

**답변:** 현재 화면에 보여지는 sheet가 피벗시트인지 아닌지 구분하는 함수는 따로 없습니다. 다만, display 정보로 피벗인지 아닌지 판단 할 수 있을 듯합니다. sheet.PivotSheet.MainTag.style.display 내부적으로 시트와 피벗시트의 스위칭을 위 속성에서 핸들링합니다. 콘솔에서도 테스트 가능합니다. sheet.PivotSheet.MainTag.style.display ==='' 이면, 피벗시트가 보여집니다. sheet.PivotSheet.MainTag.style.display === 'none' 이면, 원본시트가 보여집니다. 이를 이용하여 sheet.PivotSheet.MainTag.style.display가 빈 값인 경우 원본시트, 'none'인 경우 피벗시트로 조건문을 세우시면 됩니다.

---

### 31. react 에서 loader를 써서 하는데 아래같은 오류가 남  VM884:1 Uncaught TypeError: Cannot set properties of undefined (setting '2') ...

**질문:** react 에서 loader를 써서 하는데 아래같은 오류가 남 VM884:1 Uncaught TypeError: Cannot set properties of undefined (setting '2') at _7A.hJ (eval at <anonymous> (ibsheet.js:8:593506), <anonymous>:1:533972) at _7A.qIB (eval at <anonymous> (ibsheet.js:8:593506), <anonymous>:1:1987840) at G (eval at <anonymous> (ibsheet.js:8:593506), <anonymous>:1:1874000) _7A.hJ @ VM884:1 _7A.qIB @ VM884:1 G @ VM884:1 setTimeout _7A.jJE @ VM884:1 d @ VM884:1 _7A.uAD @ VM884:1 d @ VM884:1 _7A.uAD @ VM884:1 d @ VM884:1 d @ VM884:1 _7... 시트 객체는 생성되어 있는데 시트가 그려지지 않음(안보임)

**답변:** loader.config 선언부에 baseUrl, theme, locale 정의가 없어서 그렇다. css 파일이 import되지 않아 생긴 문제임. loader.config 에서 baseUrl 을 ibsheet.js 가 있는 위치로 지정하고 theme,locale 을 정의해야한다. loader.config({    registry: [        {            name: 'ibsheet',            baseUrl: '/ibsheet', // ibsheet.js 파일 위치            theme: "mint",  // css 파일 테마  (설정이 없으면 /css/default/main.css 사용)            locales: ["en","ko"], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용)        }    ]});

---

### 32. Drag n Drop 기능을 사용할 경우, Drag한 Object의 Opaciy를 1로 설정하여 사용할 수 있는지 문의

**질문:** Drag n Drop 기능을 사용할 경우, Drag한 Object의 Opaciy를 1로 설정하여 사용할 수 있는지 문의

**답변:** sheet에서 api로 제어할 수 없고, 시트에 적용된 스타일 정보가 담긴 main.css에서 .IBMouseObject{opacity:0.5;z-index:300;overflow:hidden}의 opatity 값을 수정하여 원하시는 선명도로 조절하실 수 있습니다.

---

### 34. 드래그할 때 마우스 커서에 딸려오는 시트 행 모양을 변경할 수 있는지? 행 전체 데이터가 다 옮겨지는데 이중에 몇개만 보여지게 하고 싶다.

**질문:** 드래그할 때 마우스 커서에 딸려오는 시트 행 모양을 변경할 수 있는지? 행 전체 데이터가 다 옮겨지는데 이중에 몇개만 보여지게 하고 싶다.

**답변:** onStartDrag 또는 onStartDragCell 메뉴얼에 보면 string을 리턴하는 경우 드래그로 보여지는 html 값이 리턴값으로 보여진다. 만약 onStartDrag에  return "<img src='https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/ru.jpg' style='height:50px;width:100px'>"; 같이 이미지를 설정하면 데이터가 아닌 특정 이미지가 행을 옮길 때 보여진다. 추가로, 특정 이미지나 특정 모양을 정의해서 이동시키는 것은 가능하다. 하지만 행 모양 중에 몇개만 데이터를 감춘다던지의 형태는 직접 모양을 만들어서 return 해줘야 한다.

---

### 35. (Cfg) Group 사용 시, 열이름 사이에 " "가 있을 경우 열이름을 제대로 못 가져온다.

**질문:** (Cfg) Group 사용 시, 열이름 사이에 " "가 있을 경우 열이름을 제대로 못 가져온다.

**답변:** 공백에 대한 처리는 CalcOrder와 마찬가지로, 공백없이 모두 붙여써야한다.

---

### 36. gray 테마에서 시트가 안그려진다

**질문:** gray 테마에서 시트가 안그려진다

**답변:** gray 테마 css를 가져오긴 하는데, Cfg.Style 을 선언 안해줘서 css 매치가 안되고 있음. default 테마(기본테마) 이외의 테마 사용 시에는 반드시 Cfg.Style: "사용할css파일의Prefix" 를 설정해주셔야 합니다. gray 테마의 경우 css prefix는 IBGY 입니다. 해당 화면만 gray 테마를 사용하실 경우 해당 화면 Cfg 선언에 Style:"IBGY" 을 선언하시면 됩니다. 공통으로 해당 프로젝트에서 모두 gray 테마를 사용하실 경우 ibsheet-common.js 파일 내부에 아래처럼 Style 을 추가하시면 공통으로 적용됩니다. _IBSheet.CommonOptions = { Cfg: { Style: "IBGY", }}....

---

### 38. IBSheet의 내장 기능 중 IBSheet 검색/바꾸기 Dialog 항목이 어떤 역할인지 궁금하다...

**질문:** IBSheet의 내장 기능 중 IBSheet 검색/바꾸기 Dialog 사용법에 대해 문의드리고자 메일 드립니다. 아래 이미지는 IBSheet에서 Control+F를 눌렀을 때 동작하는 다이어로그입니다. 이때 강조/선택/해제 버튼이 어떤 기능을 가지고 있는지 문의드리고 싶습니다. 이 Dialog에 대해 보다 디테일한 내용을 확인할 수 있는 메뉴얼이 있다면 함께 알려주시면 감사드리겠습니다.

**답변:** 각 버튼의 기능은 아래와 같습니다. 강조(mark) - 검색 문자열이 포함된 셀의 색상을 변경함 선택(select) - 검색 문자열이 포함된 행을 선택 상태로 변경 해제(clear) - 강조/선택이 된 상태를 원 상태(색상 원상복구, 선택 해제)으로 되돌림

---

### 39. 특정 PC의 높이가 조절이 안된다. 작게 주더라도 높이가 800으로 설정된다....

**질문:** 특정 PC의 높이가 조절이 안된다. 작게 주더라도 자기가 800으로 설정된다. 개발자도구 Elements 에서 직접 높이값을 300으로 변경해도 동작하지 않는다.

**답변:** 처음에 화면 로딩할 때 <div id="sheetDiv" style="height:<common:customHeight />"></div> 와 같이 jspl 문법으로 height값을 화면 랜더링 시 동적으로 높이값을 넣어주는 함수를 먼저 실행하는데 화면 로딩 시 높이값에 따라 시트 div의 style의 값을 변경해준다. 문제는 create가 비동기라서 시트 영역 높이값이 제대로 설정되지 않은 상태에서 만들어지는 것으로 보임. 동적으로 높이값을 설정한다면 create 이전에 완료가 되어야하며, 이렇게 동적으로 설정할게 아니라 sheet 가 들어가는 div는 100%로 높이값을 두고 상위 div 높이를 수정해야한다.

---

### 40. 검색 후 페이지를 줄이면 가로 스크롤이 노출 되지 않습니다.

**질문:** 검색 후 페이지를 줄이면 가로 스크롤이 노출 되지 않습니다.

**답변:** Height가 기본적으로 없는 css에 height를 주어서 배율 조정 시 시트에서 인식하는 height와 실제 css가 적용된 height가 달라져서 스크롤 계산이 틀어짐. (.IBMTHScrollLeft,.IBMTHScrollMid,.IBMTHScrollRight) css에서 높이값을 임의로 주면 안된다.

---


## 엑셀_다운로드_업로드

### 1. 간트차트 만든 화면이 있는데 엑셀다운로드를 하니 정상적으로 다운로드가 안된다.

**질문:** 간트차트 만든 화면이 있는데 엑셀다운로드를 하니 정상적으로 다운로드가 안된다.

**답변:** ibsheet.com에 있는 간트차트는 html 타입으로 만든 '조회성' 화면으로 활용도에 대한 예시일 뿐 동적으로 데이터를 변경하거나 엑셀다운로드는 어렵다. html 타입은 엑셀 다운로드 시 태그로 내려받아지기 때문에 정상적으로 엑셀 다운로드는 어렵다.

---

### 2. 엑셀 다운 시 헤더 머지가 깨진다.

**질문:** 엑셀 다운 시 헤더 머지가 깨진다.

**답변:** 머지 중간에 숨긴컬럼이 있고, DownCols:"Visible" 로 다운로드해서 생긴 문제임. sheet는 머지된 첫번째 셀에 머지 정보를 가지고 있는데, 이때 머지 중간에 다운로드가 안되는 컬럼이 있다면 첫번째 셀이 가진 머지정보와 실제 머지되어야 할 행이 달라져서 머지가 깨지게 된다. 숨긴 컬럼을 다운 안받을거면 머지 중간에 두지말고 앞이나 뒤로 옮긴다음 헤더명을 다르게 해서 머지가 되지 않게 처리하라고 안내함

---

### 3. 조회 시와 엑셀 다운로드 시 400에러가 난다....

**질문:** 조회 시 400에러가 난다. 그리드 데이터가 10개일 경우는 문제없으나, 문제가 생긴 케이스는 90개 정도입니다. 2. 조회된 그리드內 선택된 값을 컬럼을 키로 하여 엑셀다운로드를 진행합니다. 해당건의 경우도 400 에러가 발생됩니다.

**답변:** 1. 현재 해당 페이지에 doSearch를 GET 방식으로 하시는데, 요청 url의 길이가 약 22000자 정도로 매우 깁니다.(doSearch 기본 동작이 GET방식 조회) 브라우저 / WAS / 프록시 별로 다르지만 보통 요청 url은 2,048 ~ 8,192자 정도의 제한이 있습니다. 이 제한을 넘어서는 요청을 보내 서버에서 400 bad request를 반환합니다. ​또한 보내는 데이터를 보니, 파일 경로와 같은 민감한 정보들도 보내시는 듯 합니다. 따라서 GET방식으로 조회하는 게 맞지 않는 화면입니다. request가 길어질 화면은 모두 POST 형식으로 조회 하시기 바랍니다. doSearch 호출 시에 인자로 method:"POST" 를 넣어주시면 됩니다. 2. 1번 내용과 동일하게 그리드 내에 선택된 값을 모두 GET 방식으로 서버로 보내 다운로드를 시도하고 있습니다. down2Excel 호출 시 extentParamMethod:"POST" 를 넣어서 POST 방식으로 파라미터를 보내시기 바랍니다.

---

### 6. 감춰진 헤더행의 데이타를 한줄 헤더로 옮기고싶어서 setValue() 로 처리 했는데, 헤더행에 바뀐값도 표시 안되고, 엑셀 내려받기에도 안나온다...

**질문:** 헤더가 2줄 이상일때, 한줄로만 내려받기를 하고 싶어서 가이드 받은 내용이 exportData 전에 첫번째 헤더줄을 감추고 내려받기 한 후에 감춘 행을 표시하라고 가이드 받았다. 감춰진 헤더행의 데이타를 한줄 헤더로 옮기고싶어서 setValue() 로 처리 했는데, 헤더행에 바뀐값도 표시 안되고, 엑셀 내려받기에도 안나온다. getRowById("Header") 로 값을 찾아서 넣어주는걸 했는데, setUserOptions 에 cols 에 바뀐 데이타가 분명 들어 있는데, 화면에 랜더링은 안된다. refreshRow 를 했는데도 안된다.

**답변:** 확인해보니, 첫번째 헤더행의 헤더텍스트를 두번째 헤더행과 비교해서 다른경우에 첫번째 헤더행 텍스트를 두번째 헤더텍스트에 붙이는 작업을 하는데, 붙여야 하는 헤더행의 RowByID 를 "Header" 로 가져와서 문제가 되는 것임. 시트는 헤더행이 여러줄일때 첫번째 헤더행은 Header 이지만 이후 헤더행은 HR1, HR2 이런식으로 RowID 가 붙는다. 

---

### 7. PDF 다운로드(down2Pdf) 시 글자가 안나온다.

**질문:** PDF 다운로드(down2Pdf) 시 글자가 안나온다.

**답변:** 글자 안나오는 현상은 폰트가 적용이 안되어서 생기는 현상이다. 폰트는 down2Pdf.jsp 파일에서 ibPdf.setFontFolder("폰트파일경로") 로 지정할 수 있다. 해당 파일 경로에 폰트 파일이 있는지 확인하라.

---

### 9. directDown2Excel 메뉴얼에 기재되어 있는 샘플 소스가 어떤 역할 인지 모르겠다...

**질문:** directDown2Excel 메뉴얼에 아래 소스가 어떤건지 모르겠다 //directDown2Excel 자바 서버모듈 예시 String[] sido = { "서울특별시", "수원시", "성남시" }; String[] sigungu = { "관악구", "팔달구", "분당구" }; List<Map<String, Object>> data = new ArrayList<>(); for (int i = 0; i < sido.length(); i++) { Map<String, Object> row = new HashMap<>(); row.put("sSido", sido[i]); row.put("sSiGunGu", sigungu[i]); data.add(row); } request.setAttribute("SHEETDATA", data); String forwardPath = "./DirectDown2Excel.jsp"; if (!"".equals(forwardPath)) { RequestDisp...

**답변:** 메뉴얼에 기재된 내용은 DB에서 데이터를 받아오는 내용을 보여주지 못하기 때문에 요구하는 data를 만드는 과정이다. 봐야할 건 request.setAttribute("SHEETDATA", data); 이거고, 여기서 서버에서 조회한 data를 넘기면 된다. SHEETDATA는 모두 대문자여야 한다. 넘겨야하는 데이터의 형태는 List<Map<String, Object>>기 때문에 주의해야함

---

### 10. down2Excel 시 폰트 사이즈를 지정하고싶다.

**질문:** down2Excel 시 폰트 사이즈를 지정하고싶다.

**답변:** down2Excel 인자로 excelFontSize 가 있다. 이걸로 지정하면 된다. 다만 excelFontSize 설정 시에도 폰트 크기에 변화가 없는 경우 Down2Excel.jsp 내부에 down.setFontSize(); 가 설정된 경우일 수 있으니 해당 부분도 확인해보라고 안내함

---

### 11. 한셀로 만든 xlsx 파일에서 비밀번호가 걸린 파일을 loadExcel 시 { result: -500 data:null } 으로 받고 있습니다. -500 에러가 아니라 다른 에러로 반환받고싶다.

**질문:** 한셀로 만든 xlsx 파일에서 비밀번호가 걸린 파일을 loadExcel 시 { result: -500 data:null } 으로 받고 있습니다. -500 에러가 아니라 다른 에러로 반환받고싶다.

**답변:** 엑셀 파일의 비밀번호를 푸는 기능은 POI라이브러리를 통해 이뤄진다. 다만, 한셀로 만든 파일의 경우 POI 라이브러리를 사용하지 않고 다른 라이브러리를 통해 업로드가 이루어 지는데, 해당 라이브러리에서는 비밀번호를 풀 수 없다. 따라서 한셀로 만든 엑셀 파일 중 비밀번호가 걸린 파일은 업로드가 불가능하다. 해당 내용을 기존처럼 오류 코드 -500으로 보내면 따로 사용자에게 알릴 방법이 없어서 오류 코드가 -500에서 -19 코드를 반환하도록 서버모듈 2.0.13에서 패치되었다.

---

### 13. 일부화면에서 Zoom-In/Out 시 두번째 grid 의 데이터가 4건에서 2건만 보이는 문제가 발생 ...

**질문:** 일부화면에서 Zoom-In/Out 시 두번째 grid 의 데이터가 4건에서 2건만 보이는 문제가 있어 문의 드립니다.

**답변:** SearchMode:0 인데, AutoRowHeight:true 설정이 빠져있어서 생긴 현상. 해당 설정을 넣어주면 된다.

---

### 14. SVG 형태의 이미지 컬럼 데이타를 이미지로 엑셀 다운로드 하니까 에러가 난다....

**질문:** SVG 형태의 이미지 컬럼 데이타를 이미지로 엑셀 다운로드 하니까 에러가 나서요. 이미지를 빼고 엑셀 다운로드 하면 잘됩니다. 

**답변:** SVG 형태의 이미지 컬럼 데이타를 이미지로 내리는 기능은 exportData 로는 지원되며, down2Excel 의 서버모듈의 경우 1.1.28.jar 이상에서 동작합니다. 현재 사용하는 서버 모듈 버전을 확인이 필요합니다.

---

### 15. exportData 호출 시 다운로드 받은 엑셀 파일 내 날짜 포맷이 깨진다....

**질문:** exportData 호출 시 다운로드 받은 엑셀 파일 내 날짜 포맷이 깨진다.

**답변:**  날짜 서식중 시분 포맷의 엑셀이 깨지는 현상은 exportData  호출시 인자로 추가된 allTypeToText: 1 속성때문에 발생한 현상임. 해당 속성은 엑셀 서식을 Text 서식으로 변경하여 내리는 방식인데, 일부 포맷 에서 해당 속성이 설정되어 내려올때 엑셀 데이타가 깨지는 것으로 확인되었으며, 해당내용은 ibsheet.js 8.3.0.43-20251127-14 에서 패치가 이루어짐.

---

### 18. 체크박스에 체크된 값을 FormulaRow에 체크된개수+건 이라고 나오게 하고싶습니다. ...

**질문:** 체크박스에 체크된 값을 FormulaRow에 체크된개수+건 이라고 나오게 하고싶습니다. 

**답변:** "FormulaRow": {"Value": "{Count} 건"}} 이렇게 쓰면 됨. 근데 해당 내용은 core 8.2.0.3에서 {Sum, Avg, Max, Min, Count} 추가된 기능으로, 버전이 8.2.0.3 이상되어야 쓸 수 있음

---

### 22. 컬럼고정하면 하얗게 영역이 생긴다. 콘솔 오류가 발생한다. "오류  :  'setFixedLeft' 함수에서 오류가 발생하였습니다.   Uncaught TypeError: Cannot read properties of undefined (reading 'colSpan')"...

**질문:** setFixedLeft()로 컬럼고정하면 하얗게 영역이 생기고, 콘솔에 오류가 발생한다. "오류  :  'setFixedLeft' 함수에서 오류가 발생하였습니다.   Uncaught TypeError: Cannot read properties of undefined (reading 'colSpan')"

**답변:**  InfoRowConfig의 Paging2를 SearchMode:1과 함께 사용하면 setFixedLeft 시 오류가 발생하는 현상임. 해당 내용은 ibsheet.js 8.3.0.42-20251120-16 에서 패치됨

---

### 23. 다운로드한 엑셀 실행시 아래와 같이 복구 얼럿이 나오는 문제가 있어 검토 요청드립니다. '생산실적2025-11'의 내용에 문제가...

**질문:** 다운로드한 엑셀 실행시 아래와 같이 복구 얼럿이 나오는 문제가 있어 검토 요청드립니다. '생산실적2025-11'의 내용에 문제가 있습니다. 이 통합 문서의 내용을 최대한 복구하시겠습니다? 와 같은 메세지가 뜬다.

**답변:** 원인은 로직중 워크시트명(sheetName)에 설정하지 말아야할 특수문자(:)로 인한 현상입니다. down2Excel의 인자 sheetName 에서 : 특수문자를 제거하시기 바랍니다.

---

### 25. 데이터 1만건을 엑셀 다운로드하고자 한다...

**질문:** 화면에 보이는 그리드가 있고, 안보이는 그리드를 따로 둬서 안보이는 그리드를 다운로드 하려고 한다. 그런데 보이는 시트는 데이터가 5천건 정도 이고, 엑셀 다운로드 용 그리드는 데이터가 1만건 정도 되는데, 다른 방법은 없는지 문의함.

**답변:** 다운로드 할 데이타가 많은 경우, Down2Excel 보다는 DirectDown2Excel 방식을 사용하시기 바랍니다. 화면 DOM 에 담을 데이타가 많을때 이걸 전문으로 추출하는 것도 문제가 되기 때문에, 헤더 정보만 서버로 보내고, 서버단에서 쿼리로 데이타를 조회해서 붙이는 방식인 DirectDown2Excel 로 변경하시기 바랍니다.

---

### 26. down2Excel 호출 시 setData에서 nullpointexception가 난다.

**질문:** down2Excel 호출 시 setData에서 nullpointexception가 난다. java.lang.NullPointerException Debug: [2025.11.03 16:15:13] Max:7,559,184,384, Total:3,838,836,736, Free:465,235,304, Used:3,373,601,432 at com.ibleaders.ibsheet.IBSheetDown.setData(IBSheetDown.java:232) ...

**답변:** 문제의 원인은 down2Excel 호출 시 FileName으로 들어가는 "3. Component 별 Inspection Plan_20251104102758" 가 원인입니다. 파일명에 확장자를 붙여서 보내지 않으면 엑셀 모듈에서 .이 있는지 여부를 판단하여 확장자를 추가로 붙여주게 됩니다. 다만, 현재는 확장자가 없으면서 파일명 자체에 .이 붙어있는 경우라 서버모듈에서 확장자가 있다고 판단하고 오류가 발생하게 됩니다. ​번거로우시겠지만 파일명에 .이 붙어서 엑셀 다운을 시도하는 경우 3. Component 별 Inspection Plan_20251104102758.xlsx 와 같이 down2Excel 인자인 fileName을 보내시기 바랍니다.

---

### 29.  firefox 에서 시트는 그려지는데, loadSearchData 를 하면 데이타 영역이 하얗게 나오고, 콘솔에 에러가 출력된다. "오류 : 'loadSearchData' 함수에서 오류가 발생하였습니다.", "오류 : 'renderBody' 함수에서 오류가 발생하였습니다." "Uncaught TypeError : can't access property "firstChild", y[("r" + A)].firstChild.firstChild is null"...

**질문:** chrome 에서는 loadSearchData 로 조회된 데이타가 잘 보이는데, firefox 에서 시트는 그려지는데, loadSearchData 를 하면 데이타 영역이 하얗게 나오고, 콘솔에 에러가 출력된다. "오류 : 'loadSearchData' 함수에서 오류가 발생하였습니다.", "오류 : 'renderBody' 함수에서 오류가 발생하였습니다." "Uncaught TypeError : can't access property "firstChild", y[("r" + A)].firstChild.firstChild is null"

**답변:** firefox에서 멀티레코드 시트 사용 시 생기는 현상. ibsheet.js 8.3.0.38-20251106-15 에서 패치됨

---

### 34. 특정 화면에서 데이터 조회 시 백화현상이 발생한다....

**질문:** 특정 화면에서 데이터 조회 시 백화현상이 발생한다. SearchMode:0이고 그냥 데이터가 천천히 뜨면 모르곘는데, 행이 쫙 생긴 상태에서 빈값처럼 5초정도 보이다가 데이터가 들어간다. 이 백화현상을 해결할 방법이 있는지?

**답변:** Noto Sans 폰트 .woff 사용 시 발생. font 사이즈가 크면 데이터는 다 불러왔는데, 정작 폰트를 못불러와서 row 다 그려지고 조회되는데 글씨만 안그려지는 현상임. ibsheet 최신 버전에서는 용량이 작고 브라우저 호환성이 높은 woff2 파일을 제공하니, ibsheet 기술지원팀에 문의바람.

---

## 오류_해결

### 1. [IBSheet.create({id:'시트명'})] Can't creation : Duplicate sheet_id [IBSheet.create({id:'시트명'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id . alert 발생 ...

**질문:** [IBSheet.create({id:'시트명'})] Can't creation : Duplicate sheet_id [IBSheet.create({id:'시트명'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id . 라는 alert 메시지가 발생을 합니다.

**답변:** [IBSheet.create({id:'mySheet'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id . ​ 오류메시지는 시트가 그릴 DIV가 없을 때 발생하는 메시지입니다. IBSheet.create() 호출 시점에 시트가 그려질 DIV(el)가 아직 DOM 상에 완전히 생성되지 않은 경우 발생하며 Create 호출 시점 문제로 판단됩니다. IBSheet.create() 호출 시점을 DOM 로딩 이후로 이동하여 페이지 랜더링 완료 이벤트 이후로 create 시점을 늦추는 방식으로 개선이 필요합니다.

---

### 5. license is not valid(8) 이 나온다.

**질문:** license is not valid(8) 이 나온다.

**답변:** 허용된 url 이외 다른 url에서 접속해서 생긴 문제이다. 라이선스 신청 시 기재한 url과 현재 접속한 url 비교가 필요하다. 포트번호가 붙은 경우 포트번호가 붙은 url도 신청이 필요하기 때문에 그런 경우 support@ibleaders.co.kr 로 라이선스 재발급 신청이 필요하다. 

---

### 6. 운영 라이선스와 개발 라이선스를 하나의 ibleaders.js 파일로 관리하고싶다.

**질문:** 운영 라이선스와 개발 라이선스를 하나의 ibleaders.js 파일로 관리하고싶다.

**답변:** 운영이랑 개발 동일한 ibleaders.js 파일을 사용하려면 window.location.href.include("개발url") 이런식으로 조건문을 걸어 ibleaders.license 가 다르게 읽히면 된다

---

### 8. AND 조건과 OR 조건 키워드를 변경할 수 있는지?

**질문:** 시트 필터의 AND와 OR 조건 관련하여 추가 문의드립니다. AND 조건과 OR 조건 키워드를 변경할 수 있는지?

**답변:** 구분자는 메세지 파일에서 변경 가능하다. "ValueSeparator": ";" //or 구분자 "ValueSeparatorHtml": ";" //or 구분자 "ValueAndSeparator": "," //and 구분자 "RangeSeparator": "~" //범위 연산자 "RangeSeparatorHtml": "~" //범위 연산자

---

### 10. suggest인 컬럼에 글자를 입력하면 입력한 글자가 들어간 데이터가 모두 표시가 되어야 하는데 안된다.

**질문:** suggest인 컬럼에 글자를 입력하면 입력한 글자가 들어간 데이터가 모두 표시가 되어야 하는데 안된다.

**답변:** "SuggestType": "Search" 설정을 해줘야한다.

---

### 16. a시트 일부 데이터행을 b시트에 붙여 넣고 싶다.

**질문:** a시트 일부 데이터행을 b시트에 붙여 넣고 싶다.

**답변:** copyRows 를 통해 a시트의 특정 행만 b시트에 넣는 방법 b시트를 대상으로 copyRows를 호출하고, 인자인 rows 배열 내부에 a시트의 데이터 row 객체를 넣어주시면 복사가 가능합니다. ex) b시트ID.copyRows({rows:[a시트ID.getRowById("AR5"),a시트ID.getRowById("AR6"),a시트ID.getRowById("AR7")]}); 다만, 해당 방식은 시트에서 row를 추가한 후 데이터를 붙여넣는 작업이기 때문에 추가 상태가 됩니다. 이때 copyRows 이후 b시트ID.acceptChangedData(); 를 호출하시면 추가 상태값이 없어집니다.

--- 

### 19. dragObject 값을 똑같이 주었는데 다르게 작동하는 부분 문의드립니다. 특정 시트에서 dragObject 가 출력되지 않는다...

**질문:** dragObject 값을 똑같이 주었는데 다르게 작동하는 부분 문의드립니다. 잘되는 시트는 CanDrag: true, DragObject :2 를 주었습니다. : " 행의 개수를 담고 있는 메시지" 가 제대로 뜹니다. 안뜨는 시트는 똑같이 CanDrag: true, DragObject :2 를 주었습니다. : 드래그 할 때 몇 번 행인지 정보가 뜨지 않습니다. 테두리만 연하게 생깁니다.

**답변:** dragObject가 뜨지 않는 시트가 모달 위에 표시되는 시트로 추측됩니다. 추측 상 DragObject:2가 표시되는 중인데, 모달의 z-index보다 시트 관련 z-index가 낮아 생긴 문제로 보입니다. 모달같이 z-index가 위에 있는 곳에 시트를 표시하려면 Cfg.ZIndex를 설정해주셔야 합니다. 설정하지 않으셔도 시트 자체의 z-index는 부모를 상속받지만, 다이얼로그, 메세지 등은 body의 바로 하단에 생기는 구조라 ZIndex를 지정하지 않으면 부모의 z-index가 높다면 해당 요소들은 아래쪽에 표시됩니다. 따라서 Cfg.ZIndex를 넉넉히 주신 후 테스트 해보시기 바랍니다.

---

### 20. 버전업 이후 기존에 Solid 행으로 찾기 (Find)버튼을 누르면 필터링이 됐는데, 이제 해당 셀로 이동한다. ...

**질문:** 8.1.0.8 -> v8.3.0.27 (20250904-15) 버전업을 했다. 그런데 기존에 Solid 행으로 찾기 (Find)버튼을 누르면 필터링이 됐는데, 이제 해당 셀을 찾아간다.

**답변:** 검색어 변경 시 필터링은 "Expression": { "Action": "Filter" } 설정 필요. 조회 후 Expression이 무조건 Filter로 동작하는 문제가 있어서 1.0.78 에서 패치가 되었다. 이거를 오류인지 모르고 계속 사용했던 걸로 파악된다. 위에 기재한대로 Action을 Filter로 변경하면 이전 동작과 동일해진다.

---

### 21. 트리 시트가 안된다. 설정하면 +- 가 아니라 이상한 아이콘이 보인다고 함

**질문:** 트리 시트가 안된다. 설정하면 +- 가 아니라 이상한 아이콘이 보인다고 함

**답변:** 보니까 데이터에 level 을 가져온 뒤에 그냥 그 값을 넣고있음 기본적으로 트리구조에서 데이터가 각 Depth를 Items 로 표현하는 방식이 되어야 한다. 저렇게 조회하기가 힘드니까 ibsheet-common.js 에서 IBSheet.v7.convertTreeData 를 제공한다. 다만 가져오는 Level이 꼭 L이 대문자여야 한다. 지금은 level값을 들고오긴 하는데 전체 소문자라서 convert가 제대로 안됨 뒷단에서부터 그렇게 들고오니 뒷단에서 Level 로 변경해주고, 해당 트리 시트 onReceiveData 에서 evtParam.data = IBSheet.v7.convertTreeData(evtParam.data) 이런식으로 넣고 리턴해주면 된다.

---

### 25. 팝업으로 그리드 페이지를 띄워 데이터를 조회하는데 간헐적으로 그리드에 데이터 row가 로드되지 않는 현상이 있어 문의드립니다....

**질문:** 팝업으로 그리드 페이지를 띄워 데이터를 조회하는데 간헐적으로 그리드에 데이터 row가 로드되지 않는 현상이 있어 문의드립니다.(데이터는 있습니다.) 그리드에 데이터가 로드되지 않았을 때 하단의 추가 버튼과 새로고침 버튼도 작동을 안 하는 현상이 발생합니다.

**답변:** 간헐적으로 발생하는 동작은 거의 시점문제다. create 직후 시트 객체를 찾고 setTheme 등을 처리하는 소스와 조회를 하시는 것을 확인했습니다. create는 기본이 비동기로 동작하여, 시트가 정상적으로 다 그려지기 전에 다른 작업을 시도해서 발생한 문제로 추측됩니다. IBSheet.create 에 인자로 sync:1 을 선언하시어 동기로 create 가 동기로 동작하도록 변경하거나, 해당 작업을 시트가 모두 렌더링 된 이후(onRenderFirstFinish 이벤트)로 이동해야한다.

---

### 26. IBSheet 필터 기능 중에 값있음, 값없음으로 지정한 이후에도 해당 셀에 값이 입력된다.

**질문:** IBSheet 필터 기능 중에 값있음, 값없음으로 지정한 이후에도 해당 셀에 값이 입력된다.

**답변:** ibsheet.js 버전 3.0.32 에서 "값있음, 값없음" 으로 필터 조건을 지정하면 해당 필터 셀은 입력 불가하도록 패치가 되었다.

---

### 29. 줄바꿈 시 시트 하단이 잘린다.

**질문:** 줄바꿈 시 시트 하단이 잘린다.

**답변:** Cfg.SearchMode:0 사용 시에는 행 높이가 변경될 때 자동 계산이 되지 않는다. 따라서 이를 방지하기 위해 Cfg.AutoRowHeight:true 를 설정해야한다.

---

### 32. sheet.removeRows(sheet.getSaveJson(0).data) 이렇게 했는데, 콘솔에 "오류 : 'removeRows' 함수에서 오류가 발생하였습니다." 라고 오류가 나고 있습니다. 발생함....

**질문:** sheet.removeRows(sheet.getSaveJson(0).data) 이렇게 해서 시트에 모든 데이터를 지우려고 하는데, 콘솔에 "오류 : 'removeRows' 함수에서 오류가 발생하였습니다." 라고 오류가 나고 있습니다. 메뉴얼에 removeRows에 들어가는 데이터의 포맷이 array[Object]로 나와 있어서 getSaveJson를 사용 했는데, getSaveJson를 사용하면 안되는 건지 문의 드립니다.

**답변:** 파라미터의 row는 데이터 row의 행 객체를 넣어주셔야 합니다. getSaveJson은 행의 데이터만 추출한 것으로 사용방법이 맞지 않습니다. 아래와 같은 방식으로 사용해주셔야 합니다. ex) sheet.removeRow({row:sheet.getRowById("AR5")}); ex) // 체크된 행들을 제거 합니다. var rows = sheet.getRowsByChecked("chk"); for (var i = 0; i < rows.length; i++) { sheet.removeRow(rows[i], null, 1); } sheet.renderBody(); 테스트 해보시기 바랍니다. 행 전체를 삭제하시려면 removeAll() 을 사용하셔야 합니다.

---

### 36. 아이비시트로 리스트를 출력했는데, 조회된 내용이 없습니다. 라고 떠야 하는데, 콘솔에 VM26:1 Uncaught TypeError: Cannot set properties of null (setting 'IO') at _7A.rYC (eval at <anonymous> ([URL] <anonymous>:1:2352656) at eval (eval at <anonymous> ([URL] <anonymous>:1:2343301) 에러가 뜬다...

**질문:** 아이비시트로 리스트를 출력했는데, 조회된 내용이 없습니다. 라고 떠야 하는데, VM26:1 Uncaught TypeError: Cannot set properties of null (setting 'IO') at _7A.rYC (eval at <anonymous> ([URL] <anonymous>:1:2352656) at eval (eval at <anonymous> ([URL] <anonymous>:1:2343301) 에러가 뜬다.

**답변:** 조회를 했을때 response 가 200 으로 떨어지고, 응답 본문에 빈 데이타로 데이타가 들어있는데, 이때 Data value값이 배열이 아니라 문자열로 인식되면서 오류가 남. {"Total":0,"Data":"[]"}. Data의 value 값은 배열 객체로 가져와야 한다.

---

### 37. 컨텍스트 메뉴 > 필터행 생성을 누르면 어떤 특정 화면에서 시트가 멈추거나, 반응이 없다.

**질문:** 컨텍스트 메뉴 > 필터행 생성을 누르면 어떤 특정 화면에서 시트가 멈추거나, 반응이 없다.

**답변:** Vue 프레임웍 사용 중이라면 observer 기능을 설정해서 사용중이신지 확인해주시기 바랍니다. 해당 기능을 프레임웍에서 공통으로 설정한 경우, 시트에 데이터 변경시에도 동작하면서 callstack 오류가 발생할 수 있습니다. 시트에서는 해당 observing 이 동작하지 않도록 예외처리하셔야 합니다.

---

### 39. 프로젝트 특성 상 let, const 등의 변수 타입은 사용할 수 없습니다. 해당 변수타입들 var 로 변경해서 사용해도 되는지?

**질문:** 프로젝트 특성 상 let, const 등의 변수 타입은 사용할 수 없습니다. 해당 변수타입들 var 로 변경해서 사용해도 되는지?

**답변:** ibsheet-common.js 나 ibsheet-dialog.js 의 변수를 var 로 변경하셔도 문제 없기 때문에 변경하시어 사용하시기 바랍니다.

---

## 이벤트

### 2. 컬럼의 값이 Y / N에 따라 옆에 있는 컬럼의 편집 유무를 설정하고 싶다. CanEdit 를 특정 컬럼 값에 따라 변경하고 싶다.

**질문:** 컬럼의 값이 Y / N에 따라 옆에 있는 컬럼의 편집 유무를 설정하고 싶다. CanEdit 를 특정 컬럼 값에 따라 변경하고 싶다.

**답변:**  CanEditFormula 를 사용하시면 됩니다. ex) "Def": { "Row": {CanFormula: true, CalcOrder:"TextDataCanEdit" } }, ...  {"Header": "문자열(Text)","Type": "Text","Name": "TextData", CanEditFormula:function(fr){ if(fr.Row["ComboData"]=="Y"){ return 0; }else{ return 1; } } } 위와 같이 설정하면 ComboData 컬럼의 데이터가 "Y" 경우 편집불가 상태가 됩니다.

---

### 5. +,- 클릭시엔 onAfterClick이 먹지 않도록 하는 방법이 있을까요?

**질문:** 아이비시트8에서는 트리아이콘 +,- 에서도 같이 온클릭이 동작하여 우측에 입력한 내용들이 refresh 되는 불편함이 있습니다. +,- 클릭시엔 onAfterClick이 먹지 않도록 하는 방법이 있을까요?

**답변:** onAfterClick는 시트 전체에서 발생하는 afterClick 이벤트를 뜻합니다. 따라서 시트 어디를 클릭하든, 기본적으로 발생합니다. onAfterClick으로 들어오는 eventParam 에 partType 값이 "Expand" 일 때가 해당 트리의 +- 버튼을 눌렀을 때입니다. ​해당 조건을 걸어주시기 바랍니다. ex) onAfterClick:function(evt){ if(evt.partType!="Expand"){ 기존 로직 } }

---

### 6. onKeyDown 이벤트에서 현재 포커스 되어있는 행의 정보와 컬럼의 정보를 알 수 있는지?

**질문:** onKeyDown 이벤트에서 현재 포커스 되어있는 행의 정보와 컬럼의 정보를 알 수 있는지?

**답변:** 시트 객체가 파라미터로 있으니 evtParam.sheet.getFocusedRow(), evtParam.sheet.getFocusedCol()로 뽑으면 된다. 자바스크립트 키보드 이벤트를 사용한 것이기 때문에 포커싱 되어있는 시트 객체에서 직접적으로 뽑는게 정확하다.

---

### 8. 셀렉트 박스에서 상단에 입력하여 옵션 값을 찾을 수 있는 기능이 있나요? 셀렉트 박스 옵션이 너무 많아 스크롤이 길어져서요

**질문:** 셀렉트 박스에서 상단에 입력하여 옵션 값을 찾을 수 있는 기능이 있나요? 셀렉트 박스 옵션이 너무 많아 스크롤이 길어져서요

**답변:** ibsheet.js 8.3.0.48 에서 EnumFilter 속성이 추가되었습니다. 해당 속성을 컬럼에 설정할 때 드롭다운 리스트에 필터영역이 생겨 Enum 항목 검색이 가능합니다.

---

### 11. loadSearchData 하면 간헐적으로 조회가 안되면서 시트 div가 늘어난다.

**질문:** loadSearchData 하면 간헐적으로 조회가 안되면서 시트 div가 늘어난다.

**답변:** create 직후에 loadSearchData를 호출했다고 함 create는 비동기이다. 아래 2가지 방법 설명하면서 onRenderFirstFinish 를 추천한다고 함 1.create 를 동기로 하는 법 IBSheet.create({ id: "sheet", .. 생략 sync: 1 // 동기로 시트 생성( 비동기로 시트 생성) }); 2. create 완료 시점에 호출되는 onRenderFirstFinish 이벤트에서 조회 options.Events = { onRenderFirstFinish: function(evtParam){ evtParam.sheet.loadSearchData(data); } }

---

### 12. "SearchMode":0에서 클릭을 해서 보기 전까지는 한 줄, 클릭 시에는 여러줄로 표현되게 할 수는 없나요?...

**질문:** "SearchMode":0, "AutoRowHeight": true 일때 여러 줄을 넣을 경우, 해당 줄의 갯수만큼 행의 높이가 늘어나서 시트8에 표현이 되고 있는데요 클릭을 해서 보기 전까지는 한 줄로 표현되게 할 수는 없나요? Wrap:0과 같이 Cols에 삽입했을 때 동작하지 않아서 문의 드립니다.

**답변:** 문의하신 것처럼 클릭 시에만 행이 늘어나 Lines 처럼 보이고, 다른 셀 클릭 시에는 Lines 처럼 보이던 셀을 한줄로 만들고 클릭한 셀을 Lines 처럼 표시하는 동작은 단순 속성으로는 구현이 불가능하고, 해당 컬럼 설정에서 Type:"Lines", Wrap:0 으로 설정하신 뒤 onBeforeFocus 이벤트에서 구현하셔야 합니다. ex) onBeforeFocus: function (evtParam) { // focus를 준 셀의 Wrap:1로 변경 sheet.setAttribute(evtParam.row,evtParam.col,"Wrap",1,0); // focus가 있던 셀의 Wrap:0로 변경 sheet.setAttribute(evtParam.orow,evtParam.ocol,"Wrap",0,0); // 렌더링 (onBeforeFocus 이벤트 내부에서는 rerender 불가) sheet.refreshRow(evtParam.row); // 렌더링 (onBeforeFocus 이벤트 내부에서는 rerender 불가) sheet.refreshRow(evtParam.orow); }. 다만 데이터에 \n이 있는 경우 Type:Lines 에서는 자동으로 줄바꿈이 되기 때문에, Wrap 속성이 아니라 setAttribute에서 Type 속성을 "Text", "Lines" 로 변경하는 코드가 필요합니다.

---

### 14. 1. Type:Text인 컬럼에 20251202 이런식으로 데이터가 온다. Format을 yyyy-MM-dd 로 설정하면 안먹는다. 2. 이벤트에서 evtParam.row를 뽑았더니 이상한 값이 리턴되는데 이게 정상동작인가?

**질문:** 1. Type:Text인 컬럼에 20251202 이런식으로 데이터가 온다. Format을 yyyy-MM-dd 로 설정하면 안먹는데, 어떻게 해야하나? 2. 이벤트에서 evtParam.row를 뽑았더니 이상한 값이 리턴되는데 이게 정상동작인가?

**답변:** 1. y M d 예약어는 Type:Date에서만 쓸 수 있다. Type:Date로 두고 Button:"" 으로 하는 게 맞다. CustomFormat으로 사용하는 경우 엑셀 다운, 로드할 때 문제가 생김 입력이 들어오는 경우에도 입력 문자열 체크하기가 힘들다. 2. sheet8에서는 row를 요구하는 API는 모두 행 객체를 넣어야한다. 정상 동작이기 때문에 신경안써도 된다. evtParam.row 말고 sheet.getRowByIndex(2); 이런식으로 특정 row를 뽑는 API도 행 객체가 리턴된다.

---

### 15. onAfterChange 이벤트 선언시, 필터행에도 이벤트가 적용되어 필터행 이벤트제외를 공통하는 하는 방법에 관련하여 문의드립니다....

**질문:** onAfterChange 이벤트 선언시, 필터행에도 이벤트가 적용되어 필터행 이벤트제외 속성값 여부에 대해 문의드립니다. ( ibsheet_common.js 공통 소스에서 처리하기 위함 ) onAfterChange 이벤트에서 if(param.row.id == "Filter") return; 과 같이 적용하면 되긴하지만, 기본적으로는 미수행되게 처리되고 싶습니다.

**답변:** onAfterChange 이벤트에서 공통으로 필터행을 제외하려면 IBSheet.onBeforeCreate 함수를 이용해야 합니다. ex) IBSheet.onBeforeCreate = function(obj){ //Events 설정이 없는 경우 Events 객체 생성 if( !obj.options["Events"] ){ obj.options["Events"] = {};} obj.options.PageEvent = {};  //각 페이지(화면)에서 정의한 이벤트를 따로 options.PageEvent라는 속성에 넣어 둔다. if( obj.options["Events"]["onAfterChange"] ){ obj.options.PageEvent["onAfterChange"] = obj.options["Events"]["onAfterChange"]; } //onAfterChange 이벤트에 대한 처리  obj.options["Events"]["onAfterChange"] = function(evtParam){ //공통로직 처리!!!!! if(param.row.id == "Filter") return; //개별 화면 이벤트에 대한 처리(위에 PageEvent에 담아둔 함수를 호출한다) if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onAfterChange"] ){ return evtParam.sheet.options.PageEvent["onAfterChange"](evtParam); } } return obj; //반드시 리턴해 줘야 함. }

---

### 16. 3단 헤더인 구조에서 3번째 헤더행만 머지하는 방법에 대해 문의 드립니다.

**질문:** 3단 헤더인 구조에서 3번째 헤더행만 머지하는 방법에 대해 문의 드립니다.

**답변:** ​Cfg.HeaderMerge:2 등으로 행 병합이 가능하게 설정하신 후, onRenderFirstFinish 와 같은 이벤트에서 아래처럼 머지하고자 하지 않는 행에 RowMerge:0 속성을 넣고 ​setAutoMerge 를 호출하여 다시 머지가 재계산되도록 설정하시면 됩니다. ex) onRenderFirstFinish:function(evt){ var header = evt.sheet.getHeaderRows()[0]; header["RowMerge"] = false; header = evt.sheet.getHeaderRows()[1]; header["RowMerge"] = false; // 기존과 동일한 속성으로 다시 머지 재계산 sheet.setAutoMerge( {dataMerge:evt.sheet.DataMerge, headerMerge:evt.sheet.HeaderMerge, prevColumnMerge:evt.sheet.PrevColumnMerge} ); }

---

### 18. 셀 하나 선택해서 Ctrl + C 하고 Ctrl + V 해서 복사붙여넣기 하면 셀 데이터 끝에 줄바꿈 문자열이 들어간다. 줄바꿈 문자열을 제거하는 방법?

**질문:** 셀 하나 선택해서 Ctrl + C 하고 Ctrl + V 해서 복사붙여넣기 하면 셀 데이터 끝에 줄바꿈 문자열이 들어간다. 줄바꿈 문자열을 제거하는 방법?

**답변:** 엑셀 동작과 동일하게 복사 붙여넣기 되는게 기본 동작이다. 복사 붙여넣기는 window에서 제공하는 클립보드 기능을 사용하는 것인데, 엑셀도 마찬가지로 복사 시 클립보드에 줄바꿈 문자열이 끝에 달려 들어간다. beforePaste 이벤트에서 클립보드에 들어간 데이터를 확인하고 핸들링할 수 있으니 확인해보시기 바랍니다.

---

### 24. Spinner, 트리 연결선 관련 문의 ...

**질문:** 1. Spinner 속성 관련 현재 getDataRows() 함수를 사용하여 시트 내 전체 데이터 행을 가져온 뒤, 반복문을 통해 각 행마다 setAttribute() 함수를 사용하여 SpinnerStep 속성을 minQty 값에 맞게 개별적으로 적용하려고 하고 있습니다. 그러나 시도한 방법으로는 SpinnerStep 값이 각 행에 적용되지 않고 있어, 이와 관련하여 정확한 적용 방법이나 제약 사항이 있는지 확인하고 싶습니다. 2. 트리 연결선 표시 관련 현재 특정 품목이 상위 항목(부모 항목)으로, 그 하위에 관련된 세부 항목(자식 항목)이 트리 형태로 표시되도록 구현하였습니다. 이때 트리의 연결선을 조건부로 표시하고자 합니다. 즉, 상·하위 관계가 없는 일반(독립) 품목 간에는 연결선을 표시하지 않고, 실제로 부모-자식 관계가 존재하는 항목 간에만 연결선을 표시하는 것이 가능한지 문의드립니다.

**답변:** 1. Spinner 속성 - 행마다 임의의 SpinnerStep 속성을 부여하여 minQty 컬럼의 값에 따라 SpinnerStep 값을 부여하려고 하는듯합니다. 조회 시 자동으로 부여하기를 원한다면 onBeforeDataLoad 에서 속성을 부여하는게 가장 좋습니다. options.Events = { onBeforeDataLoad:function(evtParam){ var DATA = evtParam.data; for(var i = 0; i < DATA.length; i++){ var row = DATA[i]; row["SpinnerStep"] = row["minQty"]; //행에 SpinnerStep속성 부여 } } } 만약 값이 변경될 때마다 해당 속성의 값을 토글링하고 싶다면, 값이 변경되고 난 뒤인 onAfterChange 이벤트에서 핸들링할 수 있습니다. onAfterChange:function(evtParam){ // 값 수정 후 이벤트 로직.  if(evtParam.col == "minQty"){  if(evtParam.val == 0){ // 예시  evtParam.row['SpinnerStep'] = 1;  }else{  evtParam.row['SpinnerStep'] = evtParam.val;} } } 2. 트리 연결선은 ibsheet 에서 제공하는 main.css 에 아래처럼 svg가 선언되어 있습니다. 가로연결선 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxMjggMSI+DQo8bGluZSB4MT0iMCIgeTE9IjAuNSIgeDI9IjEyOCIgeTI9IjAuNSIgc3Ryb2tlPSIjQ0REOEU0Ii8+DQo8L3N2Zz4NCg== 세로연결선 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAyIDEyOCI+DQo8bGluZSB4MT0iMC41IiB5MT0iMCIgeDI9IjAuNSIgeTI9IjEyOCIgc3Ryb2tlPSIjQ0REOEU0Ii8+DQo8L3N2Zz4NCg== 트리 디자인을 변경하기 위해 svg를 수정하는 것은 가능하나, 조건에 따라 트리 형태를 변경하는 것은 불가합니다.

---

### 29. sheetObj.setFixedBottom is not a function 오류 발생 ...

**질문:** 그리드에 가장 마지막 두 데이터(합계 행)를 하단에 고정하고 싶어서 조회 후 콜백 함수로 setFixedBottom 메소드를 호출하게끔 했는데 콘솔에 sheetObj.setFixedBottom is not a function 오류가 떠 문의드립니다.

**답변:** loadSearchData는 비동기로 동작하기 때문에 행을 고정하고자 할 때 데이터는 불러왔으나 시트의 화면에 반영되기 전에 고정을 하게 되면 반영이 안될 수 있습니다. 그리드의 데이터 조회는 - onDataLoad -  loadSearchData callback - onSearchFinish (조회가 완료된 시점) 순서로 발생하는데, 데이터가 화면에 반영된 시점은 onSearchFinish 입니다. setFixedBottom 로직을  loadSearchData callback이 아닌 onSearchFinish로 옮겨서 테스트 해보시기 바랍니다.

---

### 33. directDown2Excel 메소드 다운로드에 시간이 걸려서 로딩 팝업을 띄우고 싶다....

**질문:** directDown2Excel 다운 시 대용량의 경우 다운로드에 시간이 걸려서 로딩 팝업을 띄우고 싶다. start 지점과 callback 지점이 있으면 거기다가 표시하려고 한다.

**답변:** directDown2Excel 방식에서도 OnExportFinish 이벤트가 발생하므로, 다운로드 버튼 클릭 시 directDown2Excel 호출 시점부터 OnExportFinish 이벤트가 호출되는 시점까지 로딩 팝업을 표시하도록 구현하시면 됩니다. 다만, 크로스 도메인 환경에서는 다운로드 완료 쿠키를 받지 못하기 때문에 다운로드 인자 useXhr:1 을 사용하셔서 XHR 기반 다운로드로 변경하여 처리해야 정상 사용이 가능합니다.

---

### 34. 1. IBSheet에서 뜨는 메세지를 영문으로 띄우고 싶다.

**질문:** 1. IBSheet에서 뜨는 메세지를 영문으로 띄우고 싶다.

**답변:** 1. (Cfg)의 MsgLocale 이나 setLocale 함수를 호출하여 locale 정보를 바꿔줘야 한다.(영문으로)

---

### 38. 연속으로 2번 down2Excel 호출하는 법...

**질문:** 엑셀 다운로드시 mySheet.down2Excel({fileName:"test1.xlsx"}) mySheet.down2Excel({fileName:"test2.xlsx"}) 또는 mySheet.exportData({fileName:"test1.xlsx"}) mySheet.exportData({fileName:"test2.xlsx"}) 이런식으로 호출 했을때 2개의 엑셀 파일이 떨어졌으면 좋겠는데 그렇게 안떨어진다.

**답변:** IBSheet은 아래와 같이 동시에 두 개 이상의 파일을 생성하여 다운로드하는 형식을 지원하지 않습니다. mySheet1.exportData({ fileName: "test.xlsx" }); mySheet1.exportData({ fileName: "가나다.xlsx" }); 따라서, 두 번째 파일(예: “가나다.xlsx”)을 다운로드하려면 onExportFinish 이벤트를 활용해야 합니다. 첫 번째 파일 다운로드 완료 후, onExportFinish 이벤트가 발생하므로 이 이벤트 내에서 두 번째 파일 다운로드를 호출하는 식으로 구현하셔야 합니다.

---

## 컬럼_설정

### 1. showFilterRow를 특정 열을 제외하는 방법

**질문:** showFilterRow를 특정 열을 제외하는 방법

**답변:** (Col)CanFilter:0 으로 설정하면 된다.

---

### 3. 멀티컬럼 화면을 구성할때 header는 1줄로 나오고 데이터는 3단으로 자료가 나오게 하고싶다...

**질문:** 안녕하십니까. 멀티컬럼 그리드에 대해서 문의사항이 있습니다. 멀티컬럼 화면을 구성할때 header는 1줄로 나오고 데이터는 3단으로 자료가 나오게 할려고 합니다. 멀티컬럼 설정을 하고 컬럼설정을 하였습니다. 그런데 header는 1줄로 나오게 하고 싶은데 데이터 3단처럼 header도 3단으로 구성됩니다. 어떻게 해야하나요?

**답변:** 멀티레코드 기능은 한 줄의 데이터를 여러 줄로 표현하기 위한 구조이기 때문에, 구조상 제약사항이 많습니다. 기본적으로 헤더가 1줄이면 데이터도 1줄, 헤더가 3줄이면 데이터도 3줄로 매칭되어야 합니다. 말씀 주신 것처럼 헤더 개수와 데이터 개수를 서로 다르게 구성하는 방식은 멀티레코드 구조상 지원이 어렵습니다.

---

### 5. 조회 후 onSearchFinish 에서 특정 행에 Focus를 주려고 하는데 잘 안된다...

**질문:** 조회 후 onSearchFinish 에서 특정 행에 Focus를 주려고 데이터를 뽑아서 루프를 돌리려고 한다. 뽑은 뒤 특정 행에 sheet.focus(evtParam.row) 로 포커스가 가게 했는데 포커스 이동을 안한다.

**답변:** onSearchFinish 의 evtParam에는 row, col 가 없다. getDataRows로 row들을 가져온 다음 특정 행에 focus를 주는 작업이 필요하다. onSearchFinish : function(evtParam) { var sheet = evtParam.sheet; sheet.SearchExpression = '가나다'; sheet.findRows('Find',1); /*또는 loop를 돌면서 직접 데이터를 찾음 var rows = sheet.getDataRows(); // 데이터가 있는 모든 Row var cols = sheet.getCols(); // 전체 컬럼 정보 가져오기 var target = "가나다"; // 찾을데이터 for (var r = 0; r < rows.length; r++) { var row = rows[r]; //row 객체 for (var c in cols) { var colName = cols[c]; var value = sheet.getValue(row, colName); if (value === target) { console.log("찾음!", "Row:", row, "col:", colName); sheet.focus(row,colName); } }); }

---

### 7. locale 파일 내부 Password가 보안점검에 걸렸다.

**질문:** 보안점검을 했는데 locale 파일 내부 Password가 보안점검에 걸렸다.

**답변:** 당사 제품인 IBSheet 에는 컬럼 타입중 Password 라는 타입이 있습니다. 해당 타입으로 컬럼 종류를 설정하면, 조회된 데이타중 해당 컬럼 데이타는 메세지 파일에 설정된 값으로 매핑되어 표시되는 기능입니다. 현재 지적된 내용은 메세지 파일에 Password 타입에 대해 어떤 문자열로 치환하여 화면에 보여줄지를 설정한 구간이 수정권고된 사항이라면, 문제된 파일에서 해당 내용으로 삭제하는 방법밖에 없습니다. 단, 이경우 시트의 Password 타입을 사용하더라도 조회된 데이타가 그대로 노출되게 됩니다. 해당 시스템에서 Password 타입을 사용하지 않으신다면 ko.js 와 en.js 내에 해당 라인을 삭제하시기 바랍니다.

---

### 8. 트리구조로 데이터를 보냈는데, 트리 시트가 안된다....

**질문:** 트리구조로 데이터를 보냈는데, 트리 시트가 안된다.

**답변:** 트리형태로 시트를 구성하려면, 트리 구조 데이터에 더하여 트리 노드가 표시될 컬럼이 지정되어야 합니다. Cfg.MainCol:"트리노드가표시될컬럼명" 지정이 필요합니다.

---

### 10. 소계행를 내면 소계 : 기준컬럼의 값 이렇게 표시되는데 이걸 총계 기준컬럼의 값으로 표시하고 싶다.

**질문:** 소계행를 내면 소계 : 기준컬럼의 값 이렇게 표시되는데 이걸 총계 기준컬럼의 값으로 표시하고 싶다.

**답변:** 소계함수 호출할때 아래와 같이 captionCol을 설정하면 된다. captionCol: [ { col: 'sUnit', val: '총계 %col' }

---

### 12. 헤더가 있는데 이 헤더가 2줄짜리다. 생성 후에 헤더 한줄을 삭제하고싶다....

**질문:** 헤더가 있는데 이 헤더가 2줄짜리다. 생성 후에 헤더 한줄을 삭제하고싶다. +삭제하고 삭제한 header명을 삭제하지않은 헤더 옆에 넣고싶다 ex) 색상 과일 -> "과일" 헤더 삭제후에 표시가 색상(과일) 이런식으로

**답변:** 헤더 삭제는 removeRow 로 가능하다. 삭제하지 않은 헤더 옆에 넣는건 setValue 로 값을 넣어줄수있다. 삭제가 아니라 숨김을 원한다면 hideRow를 사용하면 된다.

---

### 13. CanEmpty를 Formula로 설정해서 특정 값에 따라 변경하게 했다. 0으로 되어있던 값이 빈값으로 변경되게 하고싶다.

**질문:** CanEmpty를 Formula로 설정해서 특정 값에 따라 변경하게 했다. 0으로 되어있던 값이 빈값으로 변경되게 하고싶다.

**답변:** CanEmptyFormula:function(fr){ if(fr.Row["ComboData"] == "02"){ //진행중 return 1; }else{ return 0; } } 이런식으로 CanEmpty만 변경해줘서는 0값을 자동으로 null로 변경해주지 않는다. if(fr.Value == 0) sheet.setValue(fr.Row, fr.Col, "") 처럼 빈값을 넣는 로직을 추가해줘야 한다.

---

### 16. 헤더에 체크 박스를 가운데로 정렬을 하려고 해도 잘 안 돼서요. chk라는 글자 없애고 가운데 정렬할 수 있는 방법이 있을까요?

**질문:** 헤더에 체크 박스를 가운데로 정렬을 하려고 해도 잘 안 돼서요. chk라는 글자 없애고 가운데 정렬할 수 있는 방법이 있을까요?

**답변:** 해당 컬럼 설정부에서 Header의 Value를 빈 값으로 처리하신 후 IconAlign:"Center" 를 헤더 셀에 설정하시면 헤더에 체크박스만 가운데 정렬하여 표시하실 수 있습니다. ex) {"Header": {"Value": "","HeaderCheck": 1,IconAlign:"Center"} ..

---

### 17. Enum 사용 할때 EnumMenu를 사용하는데, 선택된 값이 액티브 표시가 되지 않는다....

**질문:** Enum 사용 할때 EnumMenu를 사용하고 있는데 (Col 에서) EnumMenu 에서는 해당값과 일치하는 경우 액티브 표시가 되지 않나요? Enum만 사용한 경우 아래와 같이 Name 값과 일치하면 액티브 표시가 되어 있는데 EnumMenu를 사용하면 아래와 같이 Name 값과 일치해도 액티브 표시가 되지 않네요

**답변:** ibsheet.js 8.3.0.47-20251218-15 버전에서 EnumMenu 가 표시될 때 현재 선택된 값에 해당하는 메뉴나 상위 메뉴에 포커스가 가도록 수정되었습니다.

---

### 19. sort 관련 문의...

**질문:** 1. 헤더를 눌러서 Sort시 이미지와 Sort 결과가 반대로 동작한다. 2. 헤더를 눌러서 Sort시 1회 클릭 --> 오름차순 2회 클릭 --> 내림차순 3회 클릭 --> sort 취소로 동작하는데 무조건 오름차순, 내림차순으로 돌게 하고 싶다.

**답변:** 1. 헤더 Sort 방향 반대로 동작하는 증상 main.css에 Sort 관련 Class 설정이 반대로 되어 있는 것으로 확인되었습니다. 아래 Class 속성을 교체하여 적용해주시기 바랍니다. 오름차순 Class .IBSort1Left, .IBSort1Right .IBSort2Left, .IBSort2Right .IBSort3Left, .IBSort3Righ 내림차순 Class .IBSort4Left, .IBSort4Right .IBSort5Left, .IBSort5Right .IBSort6Left, .IBSort6Right 2. Sort 시 오름차순/내림차순 동작 방식 설정 (Cfg) UseHeaderSortCancel 설정에 의해 오름차순-->내림차순--> 정렬취소 순서로 동작하고 있습니다. 정렬취소 단계를 제거하시려면 해당 설정값을 제거하거나 0으로 설정하시면 오름차순--> 내림차순만 반복하여 동작합니다.

---

### 20. onDblClick에서 row 객체에 접근해서 col 값을 뽑을 때 Date Type에 값이 이상하다

**질문:** onDblClick에서 row 객체에 접근해서 col 값을 뽑을 때 Date Type에 값이 이상하다

**답변:** row 객체에 들어간 건 시트 내부적으로 관리하는 값이라 Date는 타임스탬프 형식으로 관리된다. 멀쩡한 값으로 리턴받고자 하는 경우 getValue(evt.row, evt.col) 이런식으로 뽑아야한다.

---

### 21. 어떤 컬럼만 지정한 CustomFormat으로 복사되어야하고, 다른 컬럼은 그냥 데이터만 복사되어야함 방법이 없을지?

**질문:** 어떤 컬럼만 지정한 CustomFormat으로 복사되어야하고, 다른 컬럼은 그냥 데이터만 복사되어야함 방법이 없을지?

**답변:** 특정 컬럼만 CustomFormat으로 복사되도록 처리하는 것과 관련하여 소스 코드 전달 드립니다. CopyValue 를 사용하시면 특정 셀에서 클립보드로 복사될 값을 따로 지정해줄 수 있는데, 이를 이용하여 CopyValueFormula 를 설정하시면 됩니다. 이 Formula 에서 return 값을 getString을 이용하여 반환받은 CustomFormat 적용 값으로 설정하시면 됩니다. ex) {"Header": 주민번호","Type": "Text","Name": "PerId", CustomFormat: function(v, sheet, col){ return v.substr(0,6) + "-" + v.substr(6); }, CopyValueFormula:function(evt){  return evt.Sheet.getString(evt.Row,evt.Col); } } 주의하실 점은, 속성 Formula 이기 때문에 Def.Row.CanFormula:true 설정과 Def.Row.CalcOrder:"컬럼명CopyValue" 설정이 반드시 있어야 합니다. (CalcOrder가 기존에 있는 경우 뒤에 덧붙여서 작성)

---

### 22. 헤더 클릭 시 sort 아이콘만 보이고 실제로 sort 되지 않게하는 방법.

**질문:** 헤더 클릭이 되고 Sort 아이콘은 보이나, 실제 Sort 는 이뤄지지 않아야함. 이뤄지지 않은 Sort 아이콘의 정보를 뽑아서, 해당 정보에 맞게 데이터를 가져오고 그걸 뿌리고싶다.

**답변:** HeaderSortMode: 3 설정하면 아이콘만 변경되고 실제로 소팅되지 않는다. 또한 sheet.Sort 하면 문자열로 오름차순/내림차순까지 순서대로 Sort 정보가 추출됨. 이 상태로 데이터를 가져와서 loadSearchData로 뿌리면 소트 아이콘은 유지가 된 채로 데이터가 뿌려진다.

---

### 23. 1. setAllFitSize() 를 통해서 긴 글자에 맞춰서 컬럼 너비를 조정하는 건 확인했는데, 특정키를 누르면 이 동작을 취소하고 설정했던 width 로 돌아가고싶다....

**질문:** 1. setAllFitSize() 를 통해서 긴 글자에 맞춰서 컬럼 너비를 조정하는 건 확인했는데, 특정키를 누르면 이 동작을 취소하고 설정했던 width 로 돌아가고싶다.

**답변:** 1. getUserOptions(0) 으로 생성 시 설정한 컬럼들의 Width 값을 가져와서 sheet객체.Cols 에 Width 값을 변경해주시면 됩니다. 참고하실 점은, 컬럼 생성 시 Width 를 넣지 않은 경우 MinWidth 를 기준으로 뽑아 width를 설정하고, 그마저도 없는 경우 단순 100으로 너비가 설정되게 설정했습니다. ex) function applyUserOptionWidths(sheetObj) { const userCols = sheetObj.getUserOptions(0)?.Cols; userCols.forEach(colOpt => { const name = colOpt.Name; const width = colOpt.Width?Number(colOpt.Width):(colOpt.MinWidth?Number(colOpt.MinWidth):100);sheetObj.Cols[name].Width = width; }); sheetObj.rerender();}

---

### 25. Type:"Button" 인데 들어오는 데이터에 따라 버튼이 보이고 안보이고 했으면 좋겠다.

**질문:** Type:"Button" 인데 들어오는 데이터에 따라 버튼이 보이고 안보이고 했으면 좋겠다.

**답변:** 버튼을 안보이게 하는 방법은 없고 TypeFormula를 사용하여 데이터에 따라 Type을 Text로 바꿔서 버튼을 없애면 된다. ex){"Header": "버튼(Button)","Type": "Button","Name": "ISO","Width": 180,"Align": "Left","CanEdit": 0,"Button": "Button",TypeFormula:function(fr){ if(fr.Row["ISO"] == "BHD"){ //ISO 셀의 값이 BHD이면 값을 빈값으로 교체하고 Type를 Text로 교체 fr.Row[fr.Col] =""; return "Text"; } }} 

---

### 26. showCol, hideCol 후 fitColWidth 호출 시 컬럼이 없어지는 현상...

**질문:** sheet1.showCol() 또는 sheet1.hideCol() 함수 실행 sheet1.fitColWidth() 함수 실행 No 컬럼을 제외하고 컬럼들이 사라짐. 추측하기로는 fitColWidth 함수에서 오류가 발생하는것 같은데, 개발자 콘솔이나 다른쪽에 오류 로그는 찍히지 않습니다.

**답변:** fitColWidth() 호출한 시트에 숨겨진 컬럼 showCol 후 다시 fitColWidth 호출 시 컬럼 전체가 안보이는 현상임. ibsheet.js 8.3.0.45 에서 패치된 내용

---

### 29. 페이징 방식에서 전체 sort 시키는 방법...

**질문:** 페이징 방식으로 데이터를 뿌린다. 그러다보니 사용자는 컬럼에 대한 sort 를 페이지에서만 하는데, 전체 정렬 시키는 방법은 없는지?

**답변:** SearchMode:4 ,5 사용 시에는 Cfg.SortCurrentPage :0 으로 설정하면 전체 페이지에서 sort 할 수 있다. 만일 SearchMode가 3인 경우 Cfg.ScrollPagingServerSort : 1 을 설정하면 서버에 소팅 시 정보를  iborderby 파라미터로 담아서 서버로 보내 그 결과를 조회하게 된다.

---

### 31. Sort를 취소하는 기능이 있나요?

**질문:** Sort를 취소하는 기능이 있나요?

**답변:** 헤더행에서 Sort 취소하는 기능 가이드합니다. shift+헤더행클릭으로 Sort 취소 가능하며 sheet.clearSort() 함수로 취소 가능합니다.

---

### 35. 사용자가 그리드 화면의 fontSize 를 줄여달라고 해서 Def.Row 에 FontSize 를 넣었더니, 데이타행은 바뀌었는데, 헤더행은 안된다...

**질문:** 사용자가 그리드 화면의 fontSize 를 줄여달라고 해서 Def.Row 에 FontSize 를 넣었더니, 데이타행은 바뀌었는데, 헤더행은 안된다고 함.

**답변:** Def.Row 는 데이타 행만 적용되니 Def.Header 에도 FontSize 넣어주면 된다.

---

### 37. request Header가 Too Large 하다고 오류가 뜬다.

**질문:** request Header가 Too Large 하다고 오류가 뜬다.

**답변:** DoSearch 사용하는데 데이터를 GET으로 던지는 듯 하다. 데이터가 많은데 GET 방식으로 보내면 URL 길이 제한 때문에 Request Header Too Large가 발생함. 대량 데이터 전송 시 무조건 POST가 맞습니다. 인자로 Method:"POST"를 추가하시기 바랍니다. 또한 대량 배열이나 중첩 객체라면 문자열화해서 보내는 게 더 안정적입니다.(JSON.stringify 등)

---

### 38. 포커스 시 Enum 리스트를 바로 열지 않는 방법...

**질문:** 혹시나 지금은 마우스 클릭하는 순간에 바로 콤보가 열리는데, 마우스 클릭하면 focus만 가고, 그 다음에 클릭을 하면 콤보가 열리도록 하는 옵션이 있나요? 사용자들이 콤보가 있는 부분에 먼저 마우스 클릭해서 focus를 준 다음에 붙여넣기를 하려고 하는데, 먼저 콤보가 열리기 때문에 다시 콤보를 닫고 붙여 넣기 해야하는 불편함이 있는듯 합니다.

**답변:** Enum 타입 컬럼에서 첫번째 클릭 시에는 포커스만 이동하고, 두번째 클릭시에 드롭다운이 열리는 기능은 (Cfg) EnumOpenMode 속성을 통해 동작 구현이 가능합니다. ex) options.Cfg = { EnumOpenMode: false // 포커스 시 Enum 리스트 목록을 표시하지 않음 }; EnumOpenMode는 8.3.0.11 버전에 신규속성으로 추가되었습니다. 따라서 사용하시는 ibsheet.js 버전이 8.3.0.11 이상이어야 사용 가능합니다.

---

## 함수_메소드

### 1. 시트에서 콤보 값에 따른 텍스트만을 추출해서 가져오려고 하는데 사용할 수 있는 메소드 또는 방법이 있을까요 ?

**질문:** 시트에서 콤보 값에 따른 텍스트만을 추출해서 가져오려고 하는데 사용할 수 있는 메소드 또는 방법이 있을까요 ?

**답변:** 특정 셀의 Enum 텍스트값을 가져오고 싶은 것으로 이해됩니다. getString 을 사용하시면 Code값이 아닌 보이는 텍스트 값이 추출됩니다. ex) sheet.getString(sheet.getFocusedRow(), "EnumData");

---

### 3. 그리드가 위아래로 있는데 상단에 그리드를 선택하면 하위 그리드가 조회된다. 하위 그리드가 조회될 때 스크롤이 아래로 튄다

**질문:** 그리드가 위아래로 있는데 상단에 그리드를 선택하면 하위 그리드가 조회된다. 하위 그리드가 조회될 때 스크롤이 아래로 튄다

**답변:** 최초 조회 시에 포커스가 최상단 좌측에 있는 첫번째 셀에 포커스가 가게되면서 스크롤이 내려오는 현상이다. Cfg.IgnoreFocused: true 설정하면 최초에 포커스가 가지 않는다.

---

### 4. 붙여넣기 할 때 범위가 오버되면 행이 추가되서 데이터를 넣고싶다.

**질문:** 붙여넣기 할 때 범위가 오버되면 행이 추가되서 데이터를 넣고싶다.

**답변:** Cfg.PasteFocused를 6 또는 9를 사용하면 된다.

---

### 5. 트리 구조로 구현된 그리드에서 버튼 클릭해서 행 위아래로 이동할 수 있는 기능 관련 문의...

**질문:** 트리 구조로 구현된 그리드에서 버튼 클릭해서 행 위아래로 이동할 수 있는 형태를 구현 중이다. 1. 위로 이동, 아래로 이동 할 때 이 행이 첫번째 행인지, 마지막 행인지 여부를 아는 방법 2. 트리 구조에서 depth 가 다른 경우 이동 불가능으로 만들고싶다.

**답변:** 우선 이동 예정인 행이 첫 행, 마지막 행인지 여부는 getPrevSiblingRow 와 getNextSiblingRow 를 통해 구할 수 있습니다. 각각 동일 부모 내부에서 인자로 넣은 row 객체의 바로 위, 아래 행을 확인할 수 있는 함수로, null이 return 되는 경우 인자로 넣은 row 가 제일 첫 행이나 마지막 행이라는 것을 확인할 수 있습니다. 또한 동일 부모 상에서만 이동이 되게 moveRow 예정이시라면, parent 인자로 해당 row의 부모행을 넣어 주시면 됩니다. ex) function move(where){  if(where == "up"){    var target = sheet.getFocusedRow(); // 포커스된 행(이동할 행)    var parent = sheet.getParentRows(target)[0]; // 부모,조상 행 배열에서 첫번째 행을 구함(부모행)    var prevRow = sheet.getPrevSiblingRow(target); // 동일 레벨에서 포커스된 행 바로 위의 행    if(prevRow==null){alert("이미 해당 행은 첫행입니다. 동일 부모, 동일 레벨에서만 이동이 가능합니다.")}    else{      sheet.moveRow({row:target, next:prevRow, parent:parent});    }  } else if(where == "down"){    var target = sheet.getFocusedRow(); // 포커스된 행(이동할 행)    var parent = sheet.getParentRows(target)[0]; // 부모 행 배열    var nextRow =sheet.getNextSiblingRow(target); // 동일 레벨에서 포커스된 행 바로 아래의 행    if(nextRow==null){alert("이미 해당 행은 마지막 행입니다. 동일 부모, 동일 레벨에서만 이동이 가능합니다.")}    else{      var nextDbRow =sheet.getNextSiblingRow(nextRow); // 동일 레벨에서 포커스된 행 바로 2번째 아래의 행. 아래쪽 이동을 위해서 필요      if(nextDbRow==null){        sheet.moveRow({row:target, parent:parent});      }else{        sheet.moveRow({row:target, next:nextDbRow, parent:parent});      }    }  }}

---

### 6. 자식 노드를 클릭했을 때 부모 행을 가져오는 방법...

**질문:** 트리관련해서 여쭤보고싶은것이있어 연락드립니다. 트리레벨2 ㄴ트리레벨3-1 ㄴ트리레벨3-2 이렇게 시트가 있다고 가정할때 트리레벨3-1을 클릭했을때 상위트리인 트리레벨2를 가져오는 함수가 있을까요??

**답변:** 클릭 시 클릭한 행 객체에서 parentNode 를 통해 부모 행 객체를 확인하실 수 있습니다. ex).sheet.getFocusedRow().parentNode; 다른 방법으로는 sheet.getParentRows(클릭한행객체); 를 호출하시면 모든 부모 행 객체를 배열로 return 받게 되는데, 이때 마지막 행 객체가 해당 row의 상위 레벨 부모입니다.

---

### 8. 모바일(태블릿)에서 스크롤 크기 조정 ...

**질문:** 태블릿에 IBSheet 조회시 아래의 이미지와 같이 스크롤 부분이 깨져보이는 현상이 있습니다. 태블릿에서는 스크롤의 사이즈를 작게 표현하지 못하는것 인지요?

**답변:** 태블릿이나 모바일 기기에서 스크롤 바의 모양을 변경하기 위해서는 Cfg.TouchScroll 설정이 필요합니다. 모바일 환경에서 스크롤을 작게 설정하고자 하시는 경우 TouchScroll : 3 을 사용하여 확인해 보시기 바랍니다.

---

### 9. footer 를 여러개 만드는 방법...

**질문:** footer에 행을 여러개 만들수 있을까요?

**답변:** Foot 행은 배열로 선언이 가능합니다. 2개 행을 사용하고자 하신다면 Foot: [{첫번째 Foot 행 정보}, {두번째 Foot 행 정보}] 와 같이 사용하실 수 있습니다. ex) "Foot": [ { "id": "myFootRow1", "Def": "MyFoot", "Kind": "Foot", "chk": { "RowSpan": 2, "Type": "Text", "Value": "", "CanEdit": 0, "CanFocus": 0, },... },{ "id": "myFootRow2", "Def": "MyFoot", "Kind": "Foot", "chk": { "Type": "Text", "Value": "", "CanEdit": 0, "CanFocus": 0 }, ... } ]

---

### 11. 시트로 만든 게시판같은 화면이 있는데 행을 눌러서 상세 게시글로 이동할 때 현재 페이지 번호를 가져오고 싶다.

**질문:** 시트로 만든 게시판같은 화면이 있는데 행을 눌러서 상세 게시글로 이동할 때 현재 페이지 번호를 가져오고 싶다.

**답변:** 포커스를 주고 클릭하여 가는 동작이기 때문에 sheet.getPageIndex(sheet.getFocusedPage()); 이렇게 하면 포커스된 페이지 index번호를 가져올 수 있다. 다시 되돌아올 때는 goToPageByIndex(페이지인덱스번호) 로 해당 페이지로 이동시킬수있다.

---

### 13. 시트 외부에 Focus를 준 채로 브라우저 배율 조정을 연속으로 하면 시트의 Scale이 조정된다.

**질문:** 시트 외부에 Focus를 준 채로 브라우저 배율 조정을 연속으로 하면 시트의 Scale이 조정된다.

**답변:** 시트 외부에 Focus를 준 채로 브라우저 배율 조정을 연속으로 하면 시트의 Scale이 조정되는 현상은 ibsheet.js 8.3.0.15-20250619-15 에서 패치되었다.

---

### 14. getSelectedRows 의 type:1 인자가 뭔지 설명해달라

**질문:** getSelectedRows 의 type:1 인자가 뭔지 설명해달라

**답변:** Selected:1 이 행에도 가능하고 셀에도 가능한데, 두 가지 경우가 한 시트에 있을 경우 type 인자를 1로 주면 행이 선택된(행 Selected:1) row객체만 리턴한다.

---

### 16. 클릭을 했을 때에 클릭한 행을 선택해서 sheet.getSelectedRows(1) 를 했을 때 뽑혀야 한다.

**질문:** 클릭을 했을 때에 클릭한 행을 선택해서 sheet.getSelectedRows(1) 를 했을 때 뽑혀야 한다.

**답변:** focus와 select와 click의 개념은 아예 다르다. 보여지는 focus는 말 그래로 현재 어디에 위치해있는지에 대한 표시이고, select의 경우 드래그 또는 Ctrl키/Shift 키를 눌러 선택한 영역에 대한 것이다. selectingCells:0으로 행단위 선택이 되면 마우스로 셀을 드래그한 경우 행단위로 선택이 되는거지, 단순히 클릭을 한다고 해서 select가 되는 것은 아니다. 만약 클릭만으로 해당 셀을 select하고 싶다면, selectingCells가 아니라 selectRow 메소드를 Click 시점에 사용하는것이 맞다.

---

### 17. SelectingCells :0 인데 클릭했을 때 행 선택이 안된다.

**질문:** SelectingCells :0 인데 클릭했을 때 행 선택이 안된다.

**답변:** SelectingCells 는 선택 관련 옵션이고 포커스를 행단위로 하려면 FocusWholeRow :1 로 설정해야한다. 선택과 포커스를 착각한 건 아닌지 확인 필요.

---

### 19. Type:"Button"을 특정 외부 버튼을 눌렀을 때 비활성화 시키려고 한다. CanEdit:0으로는 안된다.

**질문:** Type:"Button"을 특정 외부 버튼을 눌렀을 때 비활성화 시키려고 한다. CanEdit:0으로는 안된다.

**답변:** //특정 셀의 버튼을 사용불가로 설정 sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Disabled", 1); Disabled 를 1로 설정해야한다.

---

### 20. moveRow 에서 위로 행 이동은 되는데 아래로 행 이동이 안된다.

**질문:** moveRow 에서 위로 행 이동은 되는데 아래로 행 이동이 안된다.

**답변:** moveRow 메소드의 next 인자는 선언된 행 바로 위로 row를 옮기는 인자입니다. 따라서 next 를 넣으셨을 때 바로 다음행 객체를 넣어주면 현재 위치와 동일한 곳으로 이동됩니다. 간단하게 해결하기 위해서는 nextRow 인자를 넣을 때 현재 next 인자로 넣어주는 row를 getNextRow로 감싸 2번째 다음 행을 구하신 후 moveRow 의 next 인자에 선언해주시면 됩니다.

---

### 23. 체크된 행의 편집을 전체 막고싶다.

**질문:** 체크된 행의 편집을 전체 막고싶다.

**답변:** 체크된 행의 편집을 막는 기능은 CanEditFormula를 사용하시면 간단하게 사용 가능합니다. ex) {"Header": "문자열(Text)","Type": "Text","Name": "TextData","Width": 100,"Align": "Center","CanEdit": 1, CanEditFormula: function (param) { //체크된 행에 대해서는 편집 불가 if (param.Row["CheckData"] == 1) { return 0; } }}

---

### 24. 4개 시트가 보여지는 화면이 있다. 생성 시 맨 마지막 4번 시트로 포커스가 간다.

**질문:** 4개 시트가 보여지는 화면이 있다. 생성 시 맨 마지막 4번 시트로 포커스가 간다.

**답변:** 마지막 조회된 시트로 포커스가 가는게 맞다. 포커스를 주지 않을거면 (cfg)IgnoreFocused:1 을 설정하면 된다.

---

### 25. Type:"Int"의 ForumlaRow 행에 Text 값을 표시하고 싶다.

**질문:** Type:"Int"의 ForumlaRow 행에 Text 값을 표시하고 싶다.

**답변:** FormulaRow행의 Format를 원하는 모양으로 변경하면 됨 ex) Format:"합계 : #,##0" -> 보이는 값 : "합계 : 122,100,877"

---

### 26. 현재 트리 그리드에서 조회 후 임의 row에 focus를 주고 해당 row를 화면 최상단으로 스크롤 이동하는 방법...

**질문:** 현재 트리 그리드에서 조회 후에 임의 row 한 개를 선택해 focus 하고 있습니다. 포커스는 정상적으로 되고 setExpandRow 메소드도 정상적으로 사용되는데 선택한 row가 현재 보여지는 영역의 최상단으로 오게 하고 싶은데 포커스만 가고 최하단에 보여지게 스크롤이 이동하거나 조회 이후에 스크롤을 이동 후 focus를 호출해도 해당 row가 포커스는 된 채로 스크롤은 이동하지 않는 상황입니다. focus 시에 스크롤도 선택한 row를 최상단으로 옮겨주는 방법이나 패치가 가능할까요?

**답변:** 포커스가 된 행을 최상단에 위치시키고자 하신다면 setScrollTop 메소드와 getRowTop 메소드를 사용하시면 해당 동작을 구현하실 수 있습니다. focus를 이동시키는 로직 다음에 sheet.setScrollTop(sheet.getRowTop(sheet.getFocusedRow())); 위 코드를 선언하시면 현재 포커스된 행의 y좌표값을 구해서 setScrollTop 메소드로 해당 y 좌표값으로 스크롤을 이동시키시면 됩니다. 주의하실 점은, 트리시트에서 setExpandRow 메소드를 사용하시는 경우 setExpandRow 을 한 뒤에 스크롤을 움직이셔야 합니다. 

---

### 27. 편집 중 키보드 좌/우 방향키 제어 방법...

**질문:** Text type cell 편집시 왼쪽방향키, 오른쪽 방향키 제어를 하려고 합니다. (왼쪽, 커서가 맨 앞인경우 왼쪽 cell 로 이동, 아니면 text 내 이동) (오른쪽, 커서가 맨 뒤일경우 오른쪽 cell 로 이동, 아니면 text 내 이동) 어떻게 구현해야하나요?

**답변:** ibsheet.js 1.0.97 에서 Cfg.EditArrowBehavior 가 추가되었다. EditArrowBehavior:1, 2로 설정한 경우 편집 중인 텍스트의 좌/우 끝에 도달한 경우 좌/우 셀로 이동한다.

---

### 32. 복사/붙여넣기를 막고싶다

**질문:** 복사/붙여넣기를 막고싶다

**답변:** Cfg.CanCopyPaste:0 을 설정하면 된다.

---

### 36. AutoSelectYm:1를 ShowCalender로 호출한 달력에서 쓸 수는 없는지?

**질문:** AutoSelectYm:1를 ShowCalender로 호출한 달력에서 쓸 수는 없는지?

**답변:** 시트 외부에서 showCalendar를 사용할 때 캘린더 옵션값을 설정하기 위해  calOption를 설정한다. 여기서 버튼의 종류를 위해 Buttons 또는 Buttons2를 설정하는데 이 속성을 아예 빼버리면 확인버튼이 사라진다. ex) var calOption = {  //  Buttons: 1,    OnCanEditDate: function (date) {        //일자가 2019.01.20일 보다 작으면 선택 못하게 막음        var sdate = new Date(2019, 0, 20, 0, 0, 0);        if (date < sdate) {            return false;        } else {            return true;        }    }}IBSheet.showCalendar(calOptions, {    Mouse: 1});

---

### 37. doPrint 시 합계행이 2페이지로 넘어가서 나온다.

**질문:** doPrint 시 합계행이 2페이지로 넘어가서 나온다.

**답변:** doPrint 호출 시 인자로 fitPage 를 설정해주셔야 합니다.(fitPage : 3 설정시 FormulaRow가 첫페이지에 붙어서 출력됨)

---

### 38. Select된 행들을 삭제하는 기능을 만들었다. 단일행은 삭제가 안된다.

**질문:** Select된 행들을 삭제하는 기능을 만들었다. 단일행은 삭제가 안된다.

**답변:** 여러 행을 select하면 select 상태지만, 단일행 선택은 그냥 Focus 상태이다. Select한 행이 여러개면 다중삭제, 없으면 포커스행 삭제로 로직 구성이 필요하다.

---

### 39. 1. 셀별로가 아니라 행별로 선택하고 싶다. 2. 선택한 행들의 정보를 추출하고 싶다.

**질문:** 1. 셀별로가 아니라 행별로 선택하고 싶다. 2. 선택한 행들의 정보를 추출하고 싶다.

**답변:** 1. cfg.SelectingCells에서 0으로 설정하면 행별로 선택 가능하다. 2. getSelectedRows 메소드를 사용하면 Select=1 값을 가지고 있는 Row 추출이 가능하다.

---
