# IBSheet8 초기화 Cfg 프로퍼티 
## 기본 정의
- Cfg 속성은 특정 열이나 행이 아닌 시트 전체에 영향을 미치는 속성으로 초기화 과정에서 설정함

### Cfg 속성 사용 예

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // 시트 생성
    IBSheet.create({
      id: "sheet",
      el: "sheetContainer",
      options: {
        Cfg: {
          SearchMode: 0, //FastLoad 사용
          DataMerge: 3, //열 우선 병합
          HeaderMerge: 0,// 헤더 영역 병합 안함
          CanEdit: 0 //전체 데이터 편집 불가
        }, 
        ...
      }
    });
  });
```
---

## 주요 Cfg 속성

- [모든 속성 정보](../ibsheet-official-manual/props/cfg/index.md)

### 개별 시트 설정 (각 화면별 시트에 주로 사용되는 속성)
|속성명|유형|설명|
|---|---|---|
|CanEdit|Boolean|시트 전체 영역 편집 여부 (0으로 설정시 행/열등에 설정한 CanEdit를 무시, default:1)|
|SearchMode|Number|렌더링방식 및 페이징 설정 (0:Fastload, 1:ClientPaging, 2:Lazyload(default), 3:ServerPaging)|
|DataMerge|Number|데이터 영역 자동 머지 설정 (0:머지안함(default), 1:열 머지, 2:행 머지, 3:열 우선 머지, 4: 행 우선 머지)|
|HeaderMerge |Number|헤더 영역 자동 머지 설정 (0:머지안함(default), 1:열 머지, 2:행 머지, 3:열 우선 머지, 4: 행 우선 머지)|
|MainCol|String|트리 시트 생성시 트리가 표시될 열 이름|
|NoVScroll|Boolean|시트에 세로 스크롤을 없애고 로드되는 데이터 수만큼 높이 증감 기능|
|MaxVScroll|Number|NoVScroll 사용시 최대 높이 (설정된 높이 이상의 데이터가 로드 되면 세로 스크롤 생성)|
|MultiRecord|Number|멀티레코드 기능 사용 여부(0:사용안함, 1:사용함, 2:사용함+헤더행 수와 데이터행 수 불일치 허용)
|ShowFilter|Boolean|필터행 생성 여부|
|ZIndex|Number|시트 div의 z-index 설정(설정한 값을 기준으로 시트 위에 생성되는 달력,다이얼로그 등의 z-index도 변경됨)|


### 시트 공통 설정 (주로 ibsheet-common.js 파일에 CommonOptions를 통해 프로젝트 전체 시트에 설정)
|속성명|유형|설명|
|---|---|---|
|Alternate|Number|홀수/짝수행의 배경색 설정 (0:사용안함, 1:모든행을 단일색상으로, 2: 홀/짝행 색상 다르게)|
|Export|Object|파일 import/export 함수 사용시 서버측 URL 설정 (Url: jsp파일들에 대한 서버 url, Down2ExcelUrl: down2Excel함수 호출시 url, ...)|
|DataAutoTrim|Boolean|데이터 좌우 공백 제거 여부|
|EnterMode|Number|시트에서 편집 중 Enter키 입력시 포커스 이동 위치 (0:포커스 이동 안함,1:아래로 이동,3: 오른쪽으로 이동)|
|FitWidth|Boolean| 시트 너비에 비해 열이 적을때 오른쪽 끝에 빈 열을 추가 여부|
|Hover|Number|마우스 커서 호버시 셀또는 행에 하이라이트 기능 (0:Hover사용안함, 1:셀단위, 2:행단위 , 3:행열 하이라이트 ) |
|IgnoreFocused|Boolean|조회 후 포커스 여부 (default:0 조회 후 포커스 갖음)|
|InEditMode|Number|편집모드로 진입하는 시점 결정 (1: 클릭즉시 편집모드,2: 더블클릭이나 포커스된 셀을 다시 클릭시 편집모드(default))|
|MaxSort|Number|소팅 가능한 최대 열 수 (default:3)|
|NoDataMessage|Number|조회 데이터가 없을때([]빈 배열) 메세지 표시 여부(0:메세지표시 안함, 1:시트생성시 메세지표시, 2:조회시 메세지표시, 3:시트생성,조회시 메세지표시)|
|Undo|Boolean|Undo/Redo기능 사용 여부|

---