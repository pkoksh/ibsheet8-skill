# IBSheet8 특정 기능 사용법 문서 입니다.


## 조회와 관련된 기능을 확인합니다.
(Merge, 필터, 랜더링방식, infoRow, 고정, Formula 등)

### 데이터 조회하기

시트의 조회 관련 함수는 아래와 같습니다.기본적으로 비동기로 동작하므로, 데이터 로드 이후 구현해야 하는 로직이 있다면 반드시 이벤트(onReceiveData, onBeforeDataLoad, onDataLoad, onSearchFinish)를 이용하거나 sync 속성값을 동기로 설정하면 됩니다.성능은 비동기 처리 방식이 더 좋습니다.유형함수명기능설명기본 조회doSearchajax 통신 모듈이 포함되어 있으며, response로 받은 데이터를 자동으로 시트에 로딩 합니다.
cfg:{SearchMode : 0 or 1 or 2} 설정시 이 함수를 이용합니다.페이징 조회doSearchPagingajax 통신 모듈이 포함되어 있으며, response로 받은 데이터를 자동으로 시트에 로딩 합니다. 
cfg:{SearchMode : 3 or 4 or 5} 설정시 이 함수를 이용합니다.데이터 로드loadSearchDataajax 통신은 다른 모듈(Axios, jquery 등)에서 처리 하며, response로 받은 데이터를(string 혹은 object) 시트에 로딩 합니다.
cfg:{SearchMode : 0 or 1 or 2} 설정시 이 함수를 이용합니다.1. doSearch 로 조회하기response로 받은 데이터를 자동으로 시트가 바인딩 합니다.
```javascript
// GET 방식으로 데이터 조회
sheet.doSearch("./insaAppMain.do", "dept_cd=031&position_cd=A0", "GET");

// POST 방식으로 데이터 조회
var opt = {
  url: "./insaAppMain.do",
  param: {"dept_cd": 031, "position_cd": "A0"},
  method: "POST",
  reqHeader: {"Content-Type":"application/json"}
};
sheet.doSearch(opt);
```
2. doSearchPaging 로 조회하기페이징 조회(cfg:{SearchMode:3 or 4}) 시 반드시 doSearchPaging을 사용해야 합니다.
최초 조회데이터 JSON에 Total 속성을 통해 전체 데이터 건수를 갖고 오면, 한 페이지에 표시될 데이터 갯수인 PageLength 만큼 페이지를 나누어 조회 됩니다.

```javascript
//SearchMode가 3이거나 4인 경우 조회 함수
var opt = {
  "url":"/cust/getCustInfo.do",
  "param":"custId=92123&empId=24342",
  "method":"POST",
  "callback":function (rtn) {
    var rtnData = JSON.parse(rtn.data);
    alert("전체 데이터 건수 :" + rtnData["Total"]);
  }
};
sheet.doSearchPaging(opt);

//조회 데이터 예시
{
  "Total":254141    //전체 데이터 건수
  "Data":[
    {},...,{}   //PageLength에서 설정한 건수만큼 조회
  ]
}
```

페이지 네비게이션의 페이지 번호가 변경되거나 스크롤 위치가 이동하여 페이지 번호가 변경되는 경우, ibpage의 파라미터는 자동으로 페이지 번호를 붙여 호출됩니다.

 3. loadSearchData 로 조회하기ajax 통신을 통해 받아온 json형식의 데이터를 시트에 로드합니다. 
```javascript
//jquery를 이용한 ajax 통신
$.ajax({
    url: "./data.jsp",
    param: "edate=19950101&position=C1",
    success: function (rtnData) {
        //서버에서 가져온 json데이터를 로딩
        sheet.loadSearchData(rtnData);
    }
});
```







### 조회 데이터 규격

조회 작업을 위해 서버 호출 시 서버에서 리턴되어야 할 "응답 데이터"의 형식을 정의합니다.시트 생성 시 데이터 형식IBSheet.create()에 data 속성을 통해 생성 시 데이터 구조
```javascript
IBSheet.create({
    id:"sheet", // 생성할 시트의 id

    el:"sheetDiv", // 시트를 생성할 Dom 객체 및 id

    options: options, // 생성될 시트의 속성

    // 생성될 시트의 정적데이터
    data: [
            {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
            {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
        ]
});
```

doSearch나 loadSearchData 메소드를 통한 데이터 로드Data 속성 안에 배열형태로 데이터 구성
```javascript
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ]
}
```

doSearchPaging 메소드를 통한 데이터 로드Data 속성 안에 (cfg)PageLength 에서 설정한 개수만큼 배열 형태로 데이터 구성

```javascript
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ],
 "Total":25410      //<-- DB상의 전체건수 전체 건수
}
```


조회 후 서버 응답 데이터 규격Data 속성 안에 배열 형태로 데이터 구성

```javascript
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ],
  "IO": {"Result": 0, Message: "조회 성공"}
}
```


조회 데이터 내에 Row property,Cell property 적용(중요)  - 조회 데이터 안에 Row property에 해당하는 내용을 데이터와 함께 적용

```javascript
{"Data":
    [
        //                                       행의 색상을 붉은색으로 표시
        {"sa_name":"홍길동","sa_no":"940154",...      , Color:"#FF8888"},
        //                                             행 편집 불가
        {"sa_name":"김지수","sa_no":"950757",...      , CanEdit:0}
    ]
}
```


 - 조회 데이터 안에 "컬럼명+Cell Property" 형식으로 설정시 Cell 기능 부여

```javascript
{"Data":
    [
        //                                     sn_id cell 글자색 설정
        {"sn_id":"209321","lot":"k0923123",  sn_idTextColor:"#FF0000"},
        //                                     lot cell 편집 불가
        {"sn_id":"209327","lot":"r2019283",   lotCanEdit:0},
        //  pos 컬럼(Enum타입)에 item을 해당 셀만 다르게 설정
        {"pos":"A02", posEnum: "|성남시|부천시|광명시|화성시", posEnumKeys: "|A00|A01|A02|A03"}
    ]
}
```

조회 데이터 내에 JSON Event 적용

```javascript
// 조회 데이터에 JSON 이벤트를 포함할수 있습니다.
{"Data":
    [
        //           sa_name컬럼의 값 수정시 sawonPop() 함수 호출
        {"sa_name":"홍길동",sa_nameOnChange:"sawonPop"},
    ],
}
```

조회 작업 시 서버에서 리턴 된 데이터는 onReceiveData, onDataLoad 이벤트를 통해 확인하실 수 있습니다.Tree 데이터 로드1) 일반적인 Tree 데이터 형태


```javascript
// Items 속성안에 자식 행을 추가하는 형태로 구성
{"Data":
    [
        //1 Depth
        {sProduct:"내부 시스템 개발 사업",sCustomer:"B사",sDate:"20180116", sCustomerRowSpan:2,
            //2 Depth
            Items:[
                {sProduct:"글로벌 통합 인사시스템",sKind:"프로젝트", sCount:"1",sPrice:"192"},
                {sProduct:"LEGACY SW 공급",sKind:"소프트웨어", sCount:"1",sPrice:"420"}
            ]
        },
        //1 Depth
        {sProduct:"복무급여고도화시스템",sCustomer:"D사",sDate:"20171031",
            //2 Depth
            Items:[
                {sProduct:"병원 전자구매 및 조달시스템",sKind:"납품",sCount:"1",sPrice:"303",sDiscount:"10" }
            ]
        },
        //1 Depth
        {sProduct:"2017~2018 솔루션 납품 및 판매",sCustomer:"E사",sDate:"20170520",
            //2 Depth
            Items:[
                {sProduct:"병원 개발/CDP 구축",sKind:"프로젝트",sCount:"1",sPrice:"29"},
                {sProduct:"성능개량 군수지원교보재",sKind:"프로젝트",sCount:"1",sPrice:"15.5",sDiscount:"5"},
                {sProduct:"SHE시스템 구축",sKind:"프로젝트",sCount:"1",sPrice:"79"},
                {sProduct:"Cost Quotation System",sKind:"프로젝트",sCount:"1",sPrice:"3"},
                {sProduct:"전사업무지원시스템",sKind:"프로젝트",sCount:"1",sPrice:"59.5"},
                {sProduct:"통합판매관리시스템",sKind:"프로젝트",sCount:"1",sPrice:"39"},
                {sProduct:"E-HR시스템",sKind:"유지보수",
                    //3 Depth
                    Items:[
                        {sProduct:"물산 E-HR시스템",sKind:"기타",sCount:"1",sPrice:"4"},
                        {sProduct:"제조 E-HR시스템",sKind:"기타",sCount:"1",sPrice:"4" }
                    ]
                },
                {sProduct:"건설 외주실적 단가시스템",sKind:"납품",sCount:"1",sPrice:"95"},
                {sProduct:"인재육성시스템",sKind:"프로젝트",sCount:"1",sPrice:"7"},
                {sProduct:"웹사이트 액티브X제거 관련 SW 구매",sKind:"프로젝트", sCount:"1",sPrice:"22.5" }
        ]}
    ]
}
```

2) 간단한 Tree 데이터 형태

```javascript
var treeData = {
    "Data":[
        {Level:1 ,sProduct:"병원 개발/CDP 구축",sKind:"프로젝트",sCount:"1",sPrice:"29"},
        {Level:2 ,sProduct:"성능개량 군수지원교보재",sKind:"프로젝트",sCount:"1",sPrice:"15.5",sDiscount:"5"},
        {Level:3 ,sProduct:"SHE시스템 구축",sKind:"프로젝트",sCount:"1",sPrice:"79"},
        {Level:2 ,sProduct:"Cost Quotation System",sKind:"프로젝트",sCount:"1",sPrice:"3"},
        {Level:3 ,sProduct:"전사업무지원시스템",sKind:"프로젝트",sCount:"1",sPrice:"59.5"},
        {Level:3 ,sProduct:"통합판매관리시스템",sKind:"프로젝트",sCount:"1",sPrice:"39"},
    ]
}
```
위와 같이 Level을 통해 각 행의 Depth를 가져온 후 데이터 로드 시점에서 ibsheet-common.js에서 제공하는 convert함수를 통해 변환하여 로드한다. (Level의 대소문자 주의)
```javascript
var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData));
```


### 대용량 데이터 조회 관련

대용량 데이터 조회 관련

### 조회 시 이벤트 발생 순서

1. 시트 생성 시 발생하는 이벤트ibsheet는 IBSheet.create() 함수를 통해 객체를 생성합니다. 시트 생성 시 발생하는 이벤트는 다음과 같습니다.▼ 시트 생성 화면 ▼ 발생하는 이벤트 순서  순서
이벤트명기능설명1onRenderStart시트를 렌더링하기 전에 호출되는 이벤트입니다. 2onRenderFinish시트가 렌더링된 후 발생되는 이벤트입니다. 3onRenderFirstFinish시트가 처음 생성되어 렌더링될 때 호출되는 이벤트 입니다. (최초 1회만 발생) 4onRenderPageStart시트의 페이지를 렌더링하기 전 호출되는 이벤트입니다. 시트의 첫 페이지를 로딩하거나 페이지 새로 고침 실행, 페이지 간 이동 시 발생합니다. 5onRenderPageFinish시트의 페이지가 렌더링된 후 호출되는 이벤트입니다. 시트의 첫 페이지를 로딩 시, 페이지에 대한 새로 고침 실행 시, 페이지 간 이동 시 해당 이벤트가 발생합니다.   2. 조회 모드 별 이벤트 발생
시트의 조회 방식은 아래와 같습니다.유형 함수명기능설명기본 조회doSearch지정한 URL을 호출하여 리턴된 json을 시트에 로딩합니다.페이징 조회doSearchPaging페이징 조회(cfg:{SearchMode:3 or 4}) 사용시 지속적으로 호출할 서버 URL을 설정합니다.데이터 로드loadSearchDatajson 데이터(string 혹은 object)를 시트에 로딩합니다.
시트 내에 데이터 로딩은 SearchMode 설정에 따라 달라집니다.
1) 스크롤 조회 방식(LazyLoad)SearchMode : 2 인 LazyLoad 방식은 가장 일반적인 방식으로 사용자가 세로 스크롤을 움직일 때마다, 해당하는 데이터를 테이블로 구성하는 모드입니다. 트리나 그룹 등 사용에 제한이 없으며, 각각의 행의 높이가 서로 달라도 사용이 가능합니다.
▼ 시트 조회 화면(SearchMode : 2)
▼ 발생하는 이벤트 순서  순서 이벤트명기능설명1onReceiveData
데이터 조회 시, 조회 서버 호출 직후 발생하는 이벤트입니다.
2onBeforeDataLoad
시트에 전달된 데이터를 파싱하기 전에 발생합니다. 파싱할 데이터를 조작할 수 있습니다.
3onRowLoad
데이터 로우 객체가 생성된 직후 호출되는 이벤트입니다. 시트의 렌더링이 완료되기 전 시트에 생성되는 각 행마다 호출되며, 해당 이벤트에서 행의 속성 또는 행에 있는 셀의 데이터를 변경할 수 있습니다.
4onDataLoad
데이터 파싱 후 화면에 반영 전에 발생합니다.
5onRenderStart시트를 렌더링하기 전에 호출되는 이벤트입니다.6onRenderFinish
시트가 렌더링된 후 발생되는 이벤트입니다.7onSheetFocus시트에 포커스가 되었을 때 호출되는 이벤트입니다.8onRenderFirstFinish시트 객체가 최초로 생성되어 렌더링될 때 호출되는 이벤트입니다.(최초 1회만 발생)9onRenderPageStart시트의 페이지를 렌더링하기 전 호출되는 이벤트입니다.10onBeforeFocus시트 내 셀이 포커스 되기 전에 호출되는 이벤트입니다.11onFocus시트 내 셀이 포커스 되었을 때 발생하는 이벤트입니다.12onRenderPageFinish시트의 페이지가 렌더링된 후 호출되는 이벤트입니다.13onSearchFinish로드된 데이터가 화면에 반영되어 렌더링까지 완료된 상태에서 발생합니다.
 LazyLoad는 페이지 안에 있는 데이터들이 실제로 화면에 보여질 필요가 있을 때(당장 필요할 때) 해당하는 데이터를 테이블로 구성합니다.
따라서 Page 객체가 존재하며, 데이터 행들을 (cfg)PageLength에서 부여한 갯수 단위로 묶어서 관리합니다.Page 객체는 자신이 가지고 있는 행들 중 첫번째 행과 마지막행, 그리고 이전과 다음 페이지에 대한 링크를 가지고 있습니다.페이지 수가 클수록 많은 DOM을 갖게 됨으로 무거워질 수 있습니다. (cfg)MaxPages로 시트가 한 번에 갖고 있는 페이지 수를 설정할 수 있습니다.
2) 가상스크롤 처리 방식(FastLoad)SearchMode : 0 인 FastLoad 방식은 ibsheet8에서 새롭게 추가된 조회 방식으로 고정된 테이블 객체 안에서 스크롤 시 각 셀의 값만 변경하는 형태로 세로 스크롤시 보이는 영역의 데이터만 즉시 갱신합니다. 이로 인해 사용자는 스크롤과 동시에 화면의 끊김 없이 행의 데이터를 바로 확인할 수 있습니다.해당 기능을 사용 시 각 행의 높이는 모두 동일해야 하며, (Appendix)기능에 제약사항이 있습니다.
▼ 시트 조회 화면(SearchMode : 0)
▼ 발생하는 이벤트 순서  순서 이벤트명기능설명1onReceiveData데이터 조회 시, 조회 서버 호출 직후 발생하는 이벤트입니다. 2onBeforeDataLoad
시트에 전달된 데이터를 파싱하기 전에 발생합니다. 파싱할 데이터를 조작할 수 있습니다.
3onRowLoad
데이터 로우 객체가 생성된 직후 호출되는 이벤트입니다. 시트의 렌더링이 완료되기 전 시트에 생성되는 각 행마다 호출되며, 해당 이벤트에서 행의 속성 또는 행에 있는 셀의 데이터를 변경할 수 있습니다.
4onDataLoad
데이터 파싱 후 화면에 반영 전에 발생합니다.
5onRenderStart시트를 렌더링하기 전에 호출되는 이벤트입니다.6onRenderFinish
시트가 렌더링된 후 발생되는 이벤트입니다.7onSheetFocus시트에 포커스가 되었을 때 호출되는 이벤트입니다.8onBeforeFocus시트 내 셀이 포커스 되기 전에 호출되는 이벤트입니다.9onFocus시트 내 셀이 포커스 되었을 때 발생하는 이벤트입니다.10onRenderFirstFinish시트 객체가 최초로 생성되어 렌더링될 때 호출되는 이벤트입니다.(최초 1회만 발생)
11onSearchFinish로드 된 데이터가 화면에 반영되어 렌더링까지 완료된 상태에서 발생합니다.
 FastLoad는 프레임이 고정되어 있는 상태에서 데이터만 변경됩니다.
따라서 데이터 행의 높이에 동적으로 영향을 주는 타입들은 스크롤 시 문제가 될 수 있어 사용에 제약이 있을 수 있습니다.AutoRowHeight(Cfg) 속성을 설정하여 행 높이 자동 맞춤 기능 을 사용할 수 있습니다.단,  컬럼 타입 Lines, Html, Img, Button 또는 컬럼 속성 Wrap, HtmlPrefix, HtmlPostfix, TextSize, HtmlPrefixFormula, HtmlPostfixFormula, TextSizeFormula 를 사용한 컬럼이 있을 경우에만 사용이 가능합니다.



### 대용량 처리를 위한 페이징 조회

IBSheet8은 50,000개 이내의 데이터(20여개 열기준)는 페이지 처리 없이 조회 할 것을 권장합니다.하지만 데이터 양이 이보다 많거나, 대량 데이터 조회에 따른 서버의 부담을 줄이기 위해서 페이징 조회 기능도 제공하고 있습니다. 페이징 조회는 전체 데이터 중 일부를 PageLength 개수 나누어 조회하는 방법 입니다.
페이징 조회 방식에는 세로스크롤을 통해 이전 조회 데이터 밑에 새로운 데이터를 추가 시키는 ScrollAppend 방식(SearchMode:3)과 조회하는 페이지 데이터 만 화면에 표시하는 ServerPaging 방식(SearchMode:4) 이 있습니다.
시트에 전체 데이터를 가지고 있지 않으므로 조회를 제외한 많은 기능에 제약 사항이 있습니다.
[페이징 조회시 사용할 수 없는 기능] - 단순 조회용으로만 사용가능- 저장 - 소계, 합계- 트리 - Merge - 필터(조회된 페이지내에서 필터는 가능)- 피벗- 찾기(ctrl+shift+F)  등
페이징 조회를 사용하는 과정은 다음과 같습니다.
1. 조회 방식을 설정
```javascript
//페이지 네비게이션에서 선택된 페이지의 데이타만 표시하는 방식
options.Cfg = {SearchMode: 4, ...};
```
2. 한 페이지에 로드하는 레코드 개수를 설정 (default: 20) 
```javascript
options = {
    Cfg :{
      PageLength: 100  // 한페이지당 행(Row) 개 수
    }
};
```

3. 페이지 네비게이션 설정 (IBSheet8의 기본 네비게이션을 사용하는 경우)
```javascript
options.Cfg = {
    InfoRowConfig: {
        "Visible": true,
        "Layout": ["Paging", 
                    {Value:"별도 표시하는 내용을 입력할 수 있습니다.", TextColor:"#FF0000"}, 
                    "Count"], // default: ["Paging","Count"])
        "Space": "Bottom",  // "Top", "Bottom" 위치 설정
        "Format": "CHANGEROWS개 행이 수정되었습니다." // Count 영역에 들어갈 내용
    }
 };
```

시트에서 제공하는 페이지 네비게이션 외에 다른  디자인으로 표현하고자 하는 경우에는 따로 구현을 해야 한다.ex)샘플(https://www.ibsheet.com/v8/ibsheet/html/examples.html#massDataLoad)데이터조회 >> 페이징페이지네비게이션 표시, JQuery 네비게이션 표시 부분 참고
4. doSearchPaging()함수를 통해 조회
```javascript
//SearchMode가 3이거나 4인 경우 조회 함수
var opt = {
  "url":"/cust/getCustInfo.do",
  "param":"custId=92123&empId=24342",
  "method":"POST",
  "callback":function (rtn) {
    var rtnData = JSON.parse(rtn.data);
    alert("전체 데이터 건수 :" + rtnData["Total"]);
  }
};
sheet.doSearchPaging(opt);
```
5. 서버에서는 페이지 인덱스(ibpage) 값에 따라 해당하는 데이터를  DB에서 조회하여 리턴한다. (PageLength에서 설정한 개수만큼만) 이때 Total 에 전체 데이터 건수가 리턴 되어야 합니다.
6. 서버에서 조회데이터 리턴 시 Total 속성을 통해 전체 데이터의 건수정보를 리턴 
```javascript
int page = Integer.parseInt( request.getParameter("ibpage") );
//최초 조회시에만 전체 건수를 얻는다.
int total = 0;
if(page == 1){
  pstmt = conn.prepareStatement("SELECT COUNT(1) FROM TABLE_NAME");
  rs = pstmt.executeQuery();
  //전체 건수
  if(rs.next()){
    total = rs.getInt("CNT");
  }
}
//pageLength값을 기준으로 데이터를 100건 단위로 잘라서 조회한다.
int startrow,endrow;
startrow = ((page-1)*100) + 1;
endrow = startrow + 99;
/*
page 1 ==> startrow:1,endrow:100
page 2 ==> startrow:101,endrow:200
page 3 ==> startrow:201,endrow:300
....
*/
String query = "SELECT * FROM "
+"(SELECT ROWNUM RN, EMP, EMP_NO,.... FROM TABLE_NAME)"
+" WHERE RN BETWEEN ? and ?";
pstmt = conn.prepareStatement(query);
pstmt.setInt(1, startrow);
pstmt.setInt(2, endrow);
rs = pstmt.executeQuery();
//전체 데이터 수와 조회된 데이터를 갖고 json 을 만들어 리턴한다.
StringBuffer rtnStr = new StringBuffer();
rtnStr.append("{"); 
//전체 건수
if(total!=0){
  rtnStr.append("Total:"+total+","); 
}
rtnStr.append(" Data:[");
while(rs.next()){
   //SaveName을 이용한 방법
  rtnStr.append("{EMP:'"+rs.getString("EMP")+"',EMP_NO:'"+rs.
  getString("EMP_NO")+....."'},");
}
//마지막 콤마(,)를 제거
rtnStr.substring(0,rtnStr.length()-1);
rtnStr.append("]}"); 
//json string 출력
out.println(rtnStr.toString())
```
[서버에서 만들어진 데이터 규격]
```javascript
// Data 속성안에 배열형태로 데이터 구성 (cfg)PageLength 에서 설정한 개수만큼
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"},
        ... PageLength 개수 만큼 ...
    ],
 "Total":25410      //<-- DB상의 전체건수 전체 건수(반드시 필요)
}
```
7. 헤더 클릭을 통한 Sort 처리(Cfg)SortCurrentPage 값에 의하여 헤더 클릭 시 조회 된 데이터 내에서 Sort 할 것인지 서버에서 Sort된 데이터를 표시 할 것인지 결정된다.iborderby 파라미터에 클릭한 헤더의 Sort 정보가 전송된다.
8. 엑셀 다운로드시트에 전체 데이터가 없기 때문에 directDown2Excel 함수를 이용하여 다운로드 해야 한다.

### 원하는 대기이미지를 설정하는 방법

ibsheet8의 경우, 조회 시 다양한 경우의 작업 과정을 프로그래스 바 형태로 보여주는 SearchProgress(cfg)와 임의의 메시지를 시트 영역 가운데에 dialog 형태로 띄우는 showMessage(method) 기능을 제공하고 있습니다.
따라서 두 가지 경우의 대기이미지 변경 방법을 가이드 드립니다.

1. SearchProgress:1로 설정한 후 SearchProgress div 수정하기
SearchProgress 는 아래 이미지와 같이 데이터 조회 시 내부에서 일어나는 작업 과정을 순차적으로 프로그래스 바 형태로 보여줍니다.해당 메시지는 메시지파일인 ko.js 에서  SearchProgessMessage, DataSearchingMessage 부분에 설정되어 있습니다.

ko.js 에서 메시지 설정 부분
```javascript
"SearchProgressMessage": "데이터 조회중...",
                           //이미지로 표시, 배경이 투경한 이미지 제작  
"DataSearchingMessage": [  
    "",  
    "",  
    "",  
    ""
],
```

msg 파일(ko.js 등) 에서 위와 같이 이미지를 설정할 수 있습니다.

2. showMessage 함수를 이용하여 조회 함수 호출 전 div 띄우기
showMessage 는 아래 이미지와 같이 다이얼로그를 띄우는 기능입니다.개별 화면에서도 설정이 가능하나, ibsheet-common.js 에서 이벤트 공통 사용코드로 사용하면 조회 대기이미지로 설정할 수 있습니다.

- ibsheet-common.js 에 아래 코드를 삽입한다.


```javascript
_IBSheet.onBeforeCreate = function (obj) {
  obj.options.PageEvent = {};

    //각 페이지(화면)에서 정의한 이벤트를 따로 options.PageEvent라는 속성에 넣어 둔다.
    if( obj.options["Events"]["onSearchStart"] ){
        obj.options.PageEvent["onSearchStart"] = obj.options["Events"]["onSearchStart"];
    }

    //onBeforeDataLoad 이벤트에 대한 처리 (조회시 오류 공통 처리)
    obj.options["Events"]["onSearchStart"] = function(evtParam){

        //공통로직 처리!!!!
    evtParam.sheet.showMessage(
          {message:"",
            importance:4, 
            type:1
          });

        //개별 화면 이벤트에 대한 처리(위에 PageEvent에 담아둔 함수를 호출한다)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onSearchStart"] ){

            //세션이 종료된게 아니라면 해당 페이지의 이벤트를 호출한다.
           evtParam.sheet.options.PageEvent["onSearchStart"](evtParam);
        }
    }
  return obj;
}
```
 이미지는 임의로 my_bg 클래스를 부여했으며, 아래와 같이 div 사이즈를 이미지 너비에 맞게 설정합니다.

```javascript
/*my_bg 클래스는 추가 한다.*/
.my_bg { /*div의 사이즈를 이미지의 너비에 맞게 설정 한다.*/
    width:190px;
    height:60px;
}
```
 또한 main.css 파일의 padding 때문에 여백이 생기므로 IBMessage 클래스 padding을 0으로 설정합니다.

```javascript
.IBMessage{
    white-space:nowrap;
    text-align:center;
    visibility:hidden;
    z-index:266;
    position:absolute;
    left:0px;
    top:0px;
    padding:0px;
    min-width:120px
}
```
 이와 같은 방법으로 원하시는 대기이미지를 설정할 수 있습니다.

### infoRow의 Count에서 소계/누계 제외하는 방법(SEQ 순번 제외)

소계 및 누계는 makeSubTotal 메소드를 통해 설정이 가능합니다.이 때, 기본적으로 소계 및 누계행도 행으로 취급하는 경우 아래와 같이 표시됩니다.▼ excludeSubTotalRowCount :1 설정하지 않은 경우(Default)만약 소계/누계행은 infoRow의 Count에서 제외해서 행 개수에 포함하지 않고 싶거나,SEQ 순번 컬럼에서 번호를 부여하고 싶지 않은 경우 excludeSubTotalRowCount :1 를 설정해주시기 바랍니다.▼ excludeSubTotalRowCount :1 설정한 경우[사용방법]
```javascript
sheet.makeSubTotal( {  subTotalRows:[          {           stdCol: 'sPolicy',            sumCols: 'A|B|C|D',,            countCols: 'E',            position: 'bottom',            captionCol: [              {                col: 'sPolicy',                val: '%s: %col',                cumVal: '%s: %col',                span: 3              },              {                col: 'E',                val: ' ',                cumVal: ' ',                span: 2              }            ]          }        ], usermerge:0, excludeSubTotalRowCount:1 });
```



### 머지도 여기 있어야함

머지도 여기 있어야함

### 필터 관련

필터 관련

### ['조회된 데이터가 없습니다.'] 문구 수정하기

최초 시트 생성 시 data 인자가 비어있거나, 조회 함수를 이용한 조회 시 데이터가 비어있을 때,NoData 행이 생성되며 ['조회된 데이터가 없습니다.'] 라는 문구가 출력됩니다.


```javascript
//시트 생성 시 빈 데이터로 생성
IBSheet.create({
    id: "sheet",
    el: "sheetDiv",
    options: opt,
    data: []
});

//시트 조회 시 빈 데이터로 조회
sheet.loadSearchData();
```

▼ NoDataRow 가 생성됨
(Cfg) NoDataMessage 속성에 따라 NoData 행에 메시지 표시 여부를 설정할 수 있습니다.기본적으로 조회 시에만 표시되며(defalut) NoDataMessage: 3 설정 시 시트 생성 및 조회 시에 메시지가 표시됩니다.

1. 시스템 전체에서 NoData 문구 수정하기
해당 문구는 locale/ko.js 내 Lang.Text.NoSearchData 값이 표시되며, 아이콘은 css/default/main.css 의 .IBNoDataIcon 값이 표시됩니다.
```javascript
var IBSMSG = IBSMSG || {};

IBSMSG.Ko = {
  "Lang": {
    "Text": {
       .....     
      "NoSearchData": "조회된 데이터가 없습니다.",

       .....
```
전체적으로 문구 수정을 하시려면 ko.js 에서 수정하실 수 있습니다.

2. 특정 화면에서만 NoData 문구 수정하기(개별 화면마다 NoData 문구 다르게 하기) 
locale 폴더 안에 있는 메시지 파일은 getMessage / setMessage 로 접근 및 설정이 가능합니다.

```javascript
// msg 파일의 Text밑에 있는 NoSearchData메시지 내용을 가져옵니다.
sheet.getMessage("NoSearchData", "Text");

// 시트에 메시지를 설정합니다.
sheet.setMessage("NoSearchData", "Text", "변경하려는 문구");
sheet.loadSearchData(); // 재조회
```
▼ 개별 화면에서의 메시지 추출 및 메시지 수정
시트 생성 전 변경하시려면  onDataLoad 이벤트에서 적용 해주시면 됩니다.(만약 메소드로 적용하신다면, 재조회하여 문구를 적용해야 합니다.)


3. NoData 문구 가운데에 위치 시키기 
(Cfg) NoDataMiddle 설정 시 조회된 데이터가 없는 경우 메시지를 화면 가운데에 표시합니다.
▼ NoDataMiddle: 1 설정

▼ NoDataMiddle: 0(defalut) 설정


## 편집과 관련된 기능을 확인합니다. (Drag&Drop, 복사&붙여넣기, 메뉴, 자동완성, 데이터검증 등)

### 병합된 데이터 수정시 주의 사항

Cfg.DataMerge 설정값에 따라 동일한 데이터를 조회하면,  병합하여 사용할 수 있습니다.
병합된 셀(Cell)을 수정하는 경우, 병합된 셀(Cell)들의 데이터 중 첫 번째(좌측 상단) 셀(Cell)의 데이터만 변경 됩니다.
병합된 데이터 셀을 수정하면,  병합된 셀의 데이터를 동일하게 적용하시려면 MergeCellsMatch속성값을 true로 설정하셔야 합니다.
```javascript
Cfg: {
    ...
    MergeCellsMatch: true
    ...
}
```



### Enter 키를 입력시 동작(포커스 이동)

IBSheet8 생성 시 Cfg 속성에 EnterMode를 통해 다양한 방향으로 포커스를 이동 시킬 수 있습니다.해당 기능 사용 시에 기본적으로 CanFocus: 0 인 셀(Cell)들은 건너뜁니다.

```javascript
options.Cfg = {
 // Enter 키를 누르면 값 편집 시작, 편집 상태에서 Enter 키를 누르면 편집 종료 후, 오른쪽 셀 이동
  EnterMode: 3 
}
```

mode 의 경우 총 7가지 mode 를 제공합니다.valuedescription
mode: 0
(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 (default)
mode: 1
(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 아래 셀(down) 이동,마지막 행에서는 우측 셀 첫 행으로 이동, 마지막 행, 마지막 셀의 위치에는 첫 행, 첫 열으로 이동mode: 2(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 아래 셀(down) 이동,마지막 행에서는 행 추가 후 이동mode: 3(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 오른쪽 셀(tab) 이동,맨 오른쪽 셀의 위치에서는 다음행의 첫 번째 열으로 이동, 마지막 행, 마지막 셀의 위치에는 첫 행, 첫 열으로 이동mode: 4(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 오른쪽 셀(tab) 이동,마지막 셀의 위치에는 행 추가 후 첫 열으로 이동mode: 5(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 아래 셀(down) 이동,마지막 행에서는 우측 셀 첫 행으로 이동, 마지막 행, 마지막 셀의 위치에서 포커스 유지mode: 6(포커스 상태, 편집가능한 셀) Enter 키를 누르면 값 편집(edit) 시작, (편집 상태) Enter 키를 누르면 편집 종료 후 오른쪽 셀(tab) 이동,맨 오른쪽 셀의 위치에서는 다음행의 첫번째 열으로 이동, 마지막 행, 마지막 셀의 위치에는 포커스 유지
option 기능을 사용해서 CanFocus 말고, CanEdit 도 건너뛸 수 있습니다.

```javascript
options.Cfg = {
  EnterMode: {
    mode: 3,
    option: 1
  }
}
```

valuedescriptionoption: 0
CanFocus: 0 인 셀을 제외한 모든 셀을 포커스 이동에 포함. (default)option: 1CanEdit: 0 을 EnterMode 포커스 이동에 포함하지 않음.

### 추가된 행만 편집이 가능하게 하는 방법

특정 컬럼에서 조회 시엔 편집 불가하고 행추가 시에만 편집이 가능하도록 하기 위해서는 Attribute+Formula를 통해서 구현해야 합니다.
```javascript
"Def": {
    "Row": {
      CanFormula: 1,
      CalcOrder: "data1CanEdit"
    }
  },
  "Cfg": {
    "SearchMode": 0
  },
  //중앙(메인) 컬럼 설정
  "Cols": [{
                Header: "데이터1",
                Name: "data1", 
                Type: "Text",
                Align: "center",
                Width: 100,
                CanEditFormula:"Row.Added==1?1:0"
            },
...
```

예제) https://jsfiddle.net/nxLofu7y/

### 상태값을 표시하고 싶다.

ib_preset.status 상태 컬럼 사용 시addRow({render:0}) 으로 렌더링을 막은 뒤 이후 rerender() 하면 상태 컬럼에 상태값표시가 안된다.

addRow 시 render:1 일 때는 상태값 formula 계산이 되는데, render:0 으로 주고 rerender() 시 계산이 안됨.
동작에 일관성이 없는 듯하여 기능 개선 요청formula 계산이 안되어서 그럼. rerender() 뒤에 calculate()를 선언하면 된다.

상태값 관련된 글에 위 내용 추가 예정

### 편집 시 mask 설정 관련

편집 시 mask 설정 관련

### Drag & Drop 관련

Drag & Drop 관련
행단위 셀단위
데이터 복사 붙여넣기
찾기
우클릭해서 나오는 메뉴 등등

### 행 추가 시 속성 설정 방법

행 추가 메소드는 단일 행 추가 addRow와 멀티 행 추가 addRows가 있으며, 비동기로 동작합니다.속성은 각 동작 시 발생하는 이벤트 onRowAdd와 onAfterRowAdd를 통해서 설정할 수 있습니다.속성 설정 방법으로는 2가지 방법이 있으며,첫 번째 방법은 렌더링 되기 전에 사용 가능한 방법으로 아래와 같이 속성을 적용할 수 있습니다.
```javascript
evtParam.row["컬럼명"+"속성명"] = "속성값";
```
두 번째 방법은 렌더링 된 후에 사용 가능한 방법으로 아래와 같이 setAttribute를 사용하여 속성을 적용할 수 있습니다.
```javascript
evtParam.sheet.setAttribute(evtParam.row, "컬럼명", "속성명", "속성값", "render여부");
```
다중으로 속성을 부여할 경우 render여부를 0이나 false로 설정하고, 마지막에 속성 추가 시 render여부를 1이나 true로 설정해서 rerender가 한번만 적용되도록 설정하여 사용해야 합니다.rerender는 상당한 리소스를 사용하기 때문에 빈번하게 호출하지 말고, 업무가 종료되는 시점에 한 번만 호출하는 게 좋습니다. 

## 저장과 관련된 기능을 확인합니다.
(유효성 검증, 콜백, 메시지 등)

### 저장 데이터 규격

저장 작업을 위해 서버 호출시 서버에서 리턴되어야 할 "응답 데이터"의 형식을 정의합니다.

getChangedData 메소드로 수정된 데이터만 추출 시서버에 request로 보내지는 Data 객체는 다음과 같은 사항을 포함합니다.  1) 변경 대상이 되는 셀의 행 id  2) 셀 변경 사항의 종류(추가/삭제/변경)  3) 변경 대상이 되는 셀의 열이름을 프로퍼티로 하고 해당하는 프로퍼티의 값으로 변경된 데이터 값
```javascript
Data: {"IO": { }, "Changes": [{"id": "AR1", "Changed": 1, "열이름": "변경된 값"}]}
```



저장 작업 후 서버 응답 데이터 규격
IBSheet8  의 저장 데이터는 반드시 IO > Result  가 포함되어 리턴 되어야 합니다.
```javascript
// 서버에서 IBSheet8로 보낼 응답 규격

{"IO": {"Result": 0 , Message:"저장 되었습니다."}} // 성공 ( Result>= 0  성공)
{"IO": {"Result": -100, Message:"오류내용..." }} // 실패  (Result<0  실패 )
```


```javascript
// 서버 예제

<%@ page language="java" contentType="application/json; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ page import="java.util.*, org.json.*"%>
<%
    request.setCharacterEncoding("utf-8");
    response.setContentType("application/json");
    response.setStatus(200);

    JSONObject result = new JSONObject(); // 서버에서 시트로 보낼 JSON 형식의 통신 관련 객체
    JSONObject IO = new JSONObject(); // 결과를 담고 있는 객체
    try {
        if(조건) {
           // 결과를 담고 있는 객체에 Result 프로퍼티로 성공/실패 여부를 보냅니다. 
           //0으로 설정 시 성공. -2 ~ -9로 설정 시 실패. 실패하는 경우 시트에서 오류 메시지를 띄웁니다.
            IO.put("Result", 0); 
            // 서버에서 시트로 전달할 메시지(onAfterSave 이벤트의 message 인자로 받을 수 있습니다)
            IO.put("Message", "성공");
        } else {
            IO.put("Result", -200);
            IO.put("Message", "실패");
        }

        result.put("IO", IO);
    } catch(Exception ex) {
        result.put("Exception", ex);
    }
    out.print(result);
%>
```

저장 작업시 서버에로 리턴한 데이터는 onAfterSave 이벤트를 통해 확인하실 수 있습니다.

















### 데이터 저장 (save)

- IBSheet8에서 수정된 데이터를 추출하거나, 서버로 전송하고 결과를 반영하는 방법에 대해 알아봅니다.
저장 관련 함수doSave: 수정된 데이터를 지정한 URL로 전달하고, 결과 JSON에 따라 데이터를 반영getSaveJson: 수정된 데이터를 레코드 단위로 추출( JSON 형식 )getSaveString: 수정된 데이터를 레코드 단위로 추출( querystring 형식 )getChangedData: 수정된 데이터를 셀 단위로 추출( JSON 형식 )hasChangedData: 데이터 수정 여부 확인getRowsByStatus:  행(Row)의 상태(입력,수정,삭제)에 따른 추출applySaveResult: 저장 결과 JSON 내용을 시트에 로드acceptChangedData : 행(Row)의 상태(입력,수정,삭제)를 클리어 (상태가 삭제(Deleted)인 행은 제거됨)
저장 관련 이벤트
onSave : doSave()함수 사용 시 가장 먼저 호출되는 이벤트onBeforeSave : doSave()함수 사용 시 데이터 추출 후 서버로 전송 직전 호출되는 이벤트onAfterSave : 저장 작업 완료 시점에서 호출되는 이벤트
저장 관련 속성Required(Col) : 필수 여부 (doSave, getSaveJson, getSaveString함수 호출 시 동작)

각 데이터 행(Row)에는 수정 여부에 따라 Added,Changed,Deleted 속성이 추가되고, 이에 따른 배경 색상이 적용됩니다.

[삭제행 데이터 참고]
저장 완료 후 서버에서 받게 되는 데이터 구조는 다음과 같습니다.
```javascript
// 저장 후 서버 응답 규격
{"IO": {"Result": 0 , Message:"저장 되었습니다."}} // 저장 성공 시
{"IO": {"Result": -100, Message:"오류내용..." }} // 저장 실패 시 Result 값을 음수로 설정.
```







### 저장 시 유효성 검증 관련

저장 시 유효성 검증 관련
validCheck 부터 resultMask 까지

### 데이터 저장 시, 스크롤 유지 방법

doSave와 같은 저장 함수를 이용하면, 저장 완료 후 시트가 갱신되며, 기존의 포커스를 잃고 최상단으로 스크롤이 이동됩니다.
이때, 임의의 외부 변수를 두어 현재 행(Row) 객체를 담아두고, 조회가 완료된 뒤 동작하는 이벤트 onSearchFinish에서 추출한 행(Row) 객체를 이용하여 스크롤을 저장하기 전 위치로 이동할 수 있습니다.
```javascript
//임의의 행 객체를 담을 변수
var tempRow = null;
//스크롤의 위치를 담을 변수
var tempScroll = null;

//저장 기능 이용 시, 임의의 function save
function save() {
  //변수가 비어 있을 경우, 마지막 focus
  if(tempRow == null) {
    tempRow = sheet.getFocusedRow();
    tempScroll = sheet.getScrollTop();
  }
  sheet.doSave();
}

//조회 후 동작하는 이벤트
onSearchFinish: function(evt) {
  if(tempRow != null) {
    //시트의 포커스를 저장 전에 위치하던 행(Row)로 지정, 
    //현재의 Row객체와 저장한 Row객체는 다른 객체이기 때문에 동일한 값을 가지는 id로 행(Row) 객체 호출
    evt.sheet.focus(evt.sheet.getRowById(tempRow.id));
    //저장 전에 위치했던 위치로 이동시킵니다.
    evt.sheet.setScrollTop(tempScroll);

    //스크롤 이동 후, 변수 초기화
    tempRow = null;
    tempScroll = null;
  }
}
```
 


## 합계, 소계, 피벗과 관련 기능을 확인합니다.

### 피벗 기능 사용시 일부 데이터를 제외 하는 방법

시트 내에 데이터를 이용하여 피벗팅 기능을 사용할 때 일부 데이터에 대해서 피벗 계산에서 제외하고자 하시는 경우에는 피벗 함수 동작 전에 해당 행에 대해서 Deleted 속성을 추가하시면 됩니다.
ex)
```javascript
//피버팅 전에 CLS 열의 값이 공백인 데이터는 피버팅 계산에서 제외시키자
sheet.getDataRows().forEach(row=> {
    if(row["CLS"]=="") {
        row["Deleted"] = 1; // Deleted 속성 추가
        row["NoColor] = 1; // Deleted 속성이 추가되더라도 배경 색상에 영향을 주지 않게 설정
    }
})

//pivot 함수 호출
sheet.makePivotTable(param);
```

https://jsfiddle.net/bj96acpr/
주의) 해당 시트가 CRUD(저장)이 필요한 경우라면, 피벗팅 후에 Deleted 값을 원래대로 돌려줘야 합니다.

### 소계행(makeSubTotal)의 배경색 변경 방법

makeSubTotal함수의 color, cumulateColor속성을 통해 시트 개별로 배경색 지정이 가능합니다.하지만, 모든 시트에 공통으로 소계행에 대한 style을 적용하려면 Def.SubSum에 접근하여 설정해야 합니다.(ibsheet-common.js 에서 전역으로 설정)우선 순서는 Def.SubSum > makeSubTotal 의 color, cumulateColor 입니다.예제)https://jsfiddle.net/rx5meh4b/

### 합계행 머지 처리 방법

FomulaRow로 자동 생성된 합계행의 일부를 병합하려는 경우, setMergeRange를 통해 강제 머지 할 수 있습니다.
```javascript
onRenderFirstFinish : function() {
    // 합계행 row 객체 추출 
    var targetRow = sheet.getRowById("FormulaRow"); 
    // 합계행 sPolicy 부터 sUnit 까지 강제 머지 
    sheet.setMergeRange( targetRow, "sPolicy", targetRow, "sUnit "); 
}
```


### 소계 행에 합계나 평균 외 다른 계산 값을 추가하는 방법

 소계(makeSubTotal) 기능은 기준 컬럼과 계산될 컬럼을 인자로 지정하여 생성할 수 있습니다.이때, 소계시 자동 계산되는 컬럼은 합계(sum), 평균(avg), 행수(count) 를 표시할 수 있으며, 그 외의 별도의 계산 방법을 이용하려고 하시는 경우, captionCol에 연산식을 추가하여 사용할 수 있습니다.예제)
```javascript
// 자동 계산되지 않는 rate 컬럼에 소계행값을 이용하여 별도 계산식 처리
sheetObj.makeSubTotal({
  ...,
  captionCol: [{
    col: 'rate',   // Name: 'rate'를 사용하는 컬럼에 caption 출력 지정
    val: function(fr) {   // 연산식 추가
          var amt = fr.Row['amt'];  // Name: 'amt'를 사용하는 소계행의 값 추출
          var targetAmt = fr.Row['targetAmt']; // Name: 'targetAmt'를 사용하는 소계행의 값 추출
          var rate = amt / targetAmt * 100;
          rate = rate + '%' ;
        
       return rate; // 계산 처리한 변수 rate 반환(중요)
    }
  ]

})
```



### 합계행(FormulaRow)에 원하는 기능 추가하기

IBSheet8 객체 생성 시 Cols 속성에  FormulaRow을 통해 데이터 하단(혹은 상단)에 합계 행을 생성할 수 있습니다.
```javascript
options.Cols = [
    // ...
    {  Type: "Int", Name: "qt", FormulaRow: "Sum", Width: 120  },
    {  Type: "Int", Name: "rate", FormulaRow: "Avg", Width: 120  },
];
```
합계행(FormulaRow)에는 합계 외에 다음과 같은 기본 계산이 허용됩니다.valuedescriptionFormulaRow:"Sum"열 전체 합계 값FormulaRow:"Avg"열 전체 평균 값FormualRow:"Max"열 전체 최대 값FormualRow:"Min"열 전체 최소 값FormulaRow:"Count"전체 행의 개수FormulaRow: function(){ }사용자 정의 함수합계행(FormulaRow)을 상단에 표시하고자 하는 경우에는 setFormulaRowPosition() 함수를 사용합니다.필터링 기능 사용시, 필터링된 데이타에만  합계행(FormulaRow) 이 계산되어야 할때  FormulaRowNoFiltered  옵션을 사용하여 처리할 수 있습니다.합계행(FormulaRow)에 합계나 평균이 아닌 특정 조건에 대한 계산 값을 표시하고자 할 때는 사용자 정의 함수를 사용할 수 있습니다.
```javascript
//사용자 정의 함수
var myFunc = function(fr){
  var col = fr.Col;
  var rows = fr.Sheet.getDataRows();
  var sum = 0;
  for(var i=0;i다음 예제를 참고해 주세요.합계행 기능 추가

### 조회 후, 소계 적용시 성능 최적화

IBSheet8의 소계 메서드(makeSubTotal)는 조회 된 데이터를 기준으로 소계 행을 생성해 줍니다.그런데, 데이터 로드가 완전히 종료된 후 발생하는 onSearchFinish에서 메서드를 호출하는 경우, 이미 만들어진 데이터에 소계행을 삽입 후 다시 렌더링을 해야 하기 때문에 성능 저하가 발생하게 됩니다.따라서 데이터 조회 후, 소계메서드를 사용 시에는  onDataLoad 이벤트 에서 선언해주는 것이 가장 좋은 사용 방법입니다.
```javascript
onDataLoad: function (evt) {
  // onDataLoad 에서 소계를 생성합니다.
  evt.sheet.makeSubTotal(subTotalRows, usermerge);
}
```
참고) onDataLoad 이벤트는 데이터가  파싱되어 로드 된 후 화면에 렌더링 되기 전 호출됩니다.

## 시트의 트리 기능과 그룹핑 관련 내용을 확인합니다.

### Group 기능 사용 시, 조회 후 접고 펼치기 설정 방법

Group 기능 사용 시, 데이터를 조회 하면 기본적으로는 접힘 형태로 출력 되게 됩니다.하지만 조회 시 펼침 형태로 사용하고자 하시는 경우, Group행에 Expanded속성을 1(true)로 설정하여 사용할 수 있습니다.
예제)
```javascript
var options = {
  Cfg: {
    ...
  },
  Def: {
    Group: {
      Expanded: true // 접힘/펼침 여부 설정, 0(false): 접힘, 1(true): 펼침
    }
  },
  ...
}
```
https://jsfiddle.net/5fgvyq9m/

### 그룹 소계 기능 사용하기


```javascript
options.cfg = {
    "Group": "SA_DEPTID",
    //그룹 소계 기능 사용 설정
    "UseGroupSubTotal": 1
};

//그룹 소계행 설정
options.Cols = [
    ...
    {Type: "Int", Name: "SA_DEPTID", GroupSubTotal: { Type: "Sum", Color: "#FFDDAA" ,"Format": "#,###"}, ...},
    ...
];
```


그룹에서의 소계는 makeSubTotal 로 하는게 아니라
UseGroupSubTotal (Cfg)groupsubtotal(Col)
2개를 이용해서 내야 한다.
https://jsfiddle.net/j3dcyuo4/


## 시트의 필터 기능과 검색 기능 관련 내용을 확인합니다.

### Filter된 데이터를 추출하는 방법

1. 필터된 데이터 중 현재 화면에서 보여지는 데이터만 추출하는 경우Filter 된 데이터는 현재 화면에 보여지는 데이터 로우 객체를 리턴하는 getShownRows를 사용할 수 있습니다.기본적으로 현재 화면에 보여지는 영역을 리턴합니다. ( current: 1(true) )
```javascript
// 현재 화면에 보여지는 데이터
var shownData = sheet.getShownRows(1);
```
FilterCount 속성 사용 시 시트에서 필터링 되어 화면에 보이는 데이터 행의 개수를 반환합니다.
```javascript
// alert문에 사용 시
alert(sheet.FilterCount + "개 사용 가능합니다");
```
2.  필터된 데이터를 전부 추출하는 경우기본적으로 현재 화면에 보여지는 영역만 리턴하므로, 전체 영역에서 보여질 모든 행을 리턴하고 싶은 경우  current: 0(false) 으로 설정합니다.
```javascript
// 전체 영역 중 보여지는 행 추출
sheet.getShownRows(0);
```
3.  필터된 데이터를 JSON 객체로 뽑기 원하는 경우getShownRows는  데이터 로우 객체를 리턴합니다. Row의 정보를 포함한 정보이기 때문에 json 형식으로 변환해야 합니다.getRowValue는 해당 값을 json 형식의 객체로 반환합니다. 반복문을 통해 필터된 전체 데이터를 json 형태로 추출할 수 있습니다.
```javascript
//필터된 전체데이터를 json 형태로 추출
var jsonArr = [];
var Rows = sheet.getShownRows(0);

for (i = 0; i < Rows.length; i++) {
    jsonArr.push(sheet.getRowValue(Rows[i]));
}
```


### 필터행의 구분자를 변경하는 방법

필터행에서 콤마(,), 세미콜론(;) 의 입력은 Text 검색이 아닌 (,)AND, (;) OR  조건 검색 입니다.
콤마(,) 데이터를 검색하기 위해서 (Cfg) DisableKeyWord: 1 라는 속성이 추가 되었지만 
이 속성은 (,)AND, (;) OR  조건 검색을 할 수 없습니다.
AND, OR 조건 검색을 같이 하고자 하신다면 AND, OR에 해당하는 문자를 교체 하는 방식으로 해야 할 듯 합니다.
ko.js 등의 메세지 파일에 아래의 내용이 있습니다.
ValueSeparator : ";" //or 연산ValueAndSeparator : "," // and 연산
이 값을 데이터에서 들어 올 수 없는 값으로 교체 하시면 AND, OR 조건 검색과 컴마, 세미콜론의 데이터 검색이 가능 할 듯 합니다.

▼ 

## 엑셀 기능과 관련된 내용을 확인합니다.

### 1. 엑셀 다운로드 / 업로드 동작 방식

IBSheet8의 엑셀 업로드/다운로드 기능은 클라이언트 모듈(js)과 서버 모듈(java, .net) 두 가지 방식으로 제공됩니다.1. 서버 모듈 다운로드(down2Excel)- IBSheet의 설정 정보와 조회 데이터를 서버로 전송(multipart 또는 post 전송)- 서버에서 엑셀 파일을 생성 후 생성된 파일을 사용자 브라우저로 전송 처리
 업로드(loadExcel) - 사용자가 선택한 엑셀 파일과 IBSheet의 설정 정보를 서버로 전송 (multipart 전송)- 서버는 수신한 엑셀 파일과 IBSheet 설정 정보를 매핑하여 json 데이터 생성 전송
- IBSheet가 리턴 된 json 데이터를 로드(조회와 유사한 형태)2. 클라이언트 모듈다운로드(exportData)- JavaScript를 이용해 브라우저 내에서 IBSheet의 데이터를 읽고, 이를 기반으로 .xlsx 파일을 생성하여 사용자에게 다운로드
 업로드(importData)- 사용자가 선택한 엑셀 파일(.xlsx)을 JavaScript로 직접 읽고 파싱한 뒤, 해당 데이터를 IBSheet에 로드* 참고 : 각 방식 별 장단점클라이언트 모듈서버 모듈장점 :
- 설정이 단순하여 바로 사용이 가능
- 서버에 부담를 주지 않고 사용자PC의 컴퓨팅 파워를 이용하여 엑셀 다운로드
- 각 셀에 설정된 디자인(배경색,글자색 등) 반영이 용이함

단점 :
- DRM 이 설정된 Excel 파일 처리 불가
- 구형브라우저(Internet Explorer)사용자는 사용이 불가
- xls 서식 지원 불가
- 데이터 양이 많은 경우(5,000행 이상) 성능 저하 장점 :
- 사용자의 브라우저 버전과 무관하게 사용 가능
- 대용량(5,000행 이상)에 대해 안정적으로 처리 가능
- DRM 파일에 대한 처리 가능
- xls 파일 지원

단점 :
- 큰 데이터 다운로드 시 서버 측 부하로 인한 장애(OOME)가 발생할 위험 (다운로드 범위 제한이 필요)
- 레거시 시스템에서 사용하는 공통 library와 버전 충돌 문제 발생 가능성(apache POI 사용)


### 2. [클라이언트 모듈] 다운로드(exportData) / 업로드(importData) 환경 설정하기

서버와의 통신 없이, JavaScript 단에서 JSZip 라이브러리를 활용하여 브라우저 내에서 직접 처리됩니다. 
1. JSZip 라이브러리 필요ibsheet.js와 동일한 위치에 plugins/jszip.min.js 파일이 반드시 존재해야 한다. 

### 2-1. [클라이언트 모듈] 다운로드(exportData) / 업로드(importData) 구현하기

1. 엑셀 다운로드 / 업로드 함수 호출
```javascript
//다운로드 
sheet.exportData(
    {fileName: "재고리스트.xlsx"}
); 

//업로드
var param = {mode:"HeaderMatch", workSheetName:"sheet"};
sheet.importData(param);
```


### 2-2. [클라이언트 모듈] 엑셀 파일(exportData, importData) 에 엑셀 파일(down2Excel, loadExcel) 비밀번호 적용 및 제거 방법

exportData 또는 importData 메서드를 호출할 때, 기본적으로 엑셀 파일에 암호를 설정하거나 해제하는 기능을 제공하지 않습니다.하지만, 외부 라이브러리를 활용하면 기능 구현이 가능합니다.

1. exportDataexportData 함수 호출onBeforeExport 이벤트에서 전달되는 parameters 값 중 data를 이용하여 엑셀 파일에 비밀번호 설정onBeforeExport 이벤트에서 비밀번호 설정한 파일을 다운로드 하도록 구현onBeforeExport 이벤트에서 return 1을 설정하여 IBSheet 기본 다운로드 동작을 차단

2. importData사용자가 선택할 수 있는 파일 입력 UI 구현선택한 파일에 비밀번호가 설정된 경우 해당 비밀번호를 적용하여 파일 읽기importData 함수를 이용해 시트에 데이터를 바인딩
※ 참고이 기능은 제품의 버전 Ver 8.3.0.5-20250424-14 부터 지원합니다. 예시는 xlsx-populate.js 라이브러리를 활용한 구현 예시입니다.
예제 :  비밀번호 설정 예제보기








### 3. [서버 모듈] 다운로드(down2Excel) / 업로드(loadExcel) 환경 설정하기

서버에서 동작하는 기능이므로, 해당 기능을 사용하려면 당사에서 제공하는 JAR 또는 DLL 파일이 WEB-INF/lib 디렉토리에 포함되어 있어야 합니다.
1. 라이브러리 파일 추가java - jar(WEB-INF/lib) 추가제품 배포시 product/엑셀모듈 폴더에 관련 파일들이 있으며, 폴더 구조는 아래와 같습니다.

1. 공통설정파일/lib 폴더안의 파일을 개발환경의 WEB-INF/lib 폴더에 추가 합니다. 

- ibsheet8-1.X.X-.jar는 Core 파일이며, jdk 1.8이상 사용 가능합니다.- 이 파일은 오픈 소스인 Apache POI 라이브러리를 기반으로 개발되었습니다.- core 파일 추가 시 Java EE 또는 Jakarta EE에 맞는 JAR 파일을 추가 해야 합니다.닷넷- dll(bin 경로에 추가) 추가 
2. jsp(aspx) 파일 추가
1. 공통설정파일/jsp 폴더의 jsp(aspx) 파일을 개발 환경의 특정 경로에 추가한다.(ex : /assets/ibsheet/jsp)DirectDown2Excel.jsp(aspx)DirectLoadExcel.jsp(aspx)Down2Excel.jsp(aspx)Down2Image.jsp(aspx)Down2Pdf.jsp(aspx)Down2Text.jsp(aspx)LoadExcel.jsp(aspx)LoadText.jsp(aspx)

### 3-1. [서버 모듈] Maven dependency 설정 가이드

IBSheet의 엑셀모듈은 오픈 소스인 poi 라이브러리를 이용하여 구현되었습니다.poi 라이브러리와 당사에서 제공하는 라이브러리가 WEB-INF/lib 폴더에 존재해야 엑셀 다운로드/업로드가 가능합니다.Maven dependency 설정은 아래의 방법으로 설정 합니다.
```javascript

    
    
        org.apache.xmlgraphics
        batik-all
        1.17
        pom
    
    
        commons-io
        commons-io
        2.11.0
    
    
        xml-apis
        xml-apis-ext
        1.3.04
    
    
        org.apache.xmlgraphics
        xmlgraphics-commons
        2.9
    

    
    
        commons-codec
        commons-codec
        1.13
    
    
        org.apache.commons
        commons-collections4
        4.4
    
	
        org.apache.commons
        commons-compress
        1.19
    
	 
        commons-logging
        commons-logging
        1.1.3
    
    
        org.apache.commons
        commons-math3
        3.6.1
    
    
        com.github.virtuald
        curvesapi
        1.06
    
    
        org.apache.poi
        poi
        4.1.2
    
    
        org.apache.poi
        poi-ooxml
        4.1.2
    
    
        org.apache.poi
        poi-ooxml-schemas
        4.1.2
    
    
        com.zaxxer
        SparseBitSet
        1.2
    
    
        org.apache.xmlbeans
        xmlbeans
        3.1.0
    

```
단, ibsheet 엑셀 다운로드/업로드 코어 파일 ibsheet8-x.x.x.jar, pdf 다운로드시 필요한 ib-itext.jar 는 scope를 system으로 설정하여 해당 의존성을 로컬파일 시스템에서 직접 참조하거나 Local Repository를 구성한다.scope system 지정 하는 부분은 아래 내용을 참고해주세요.
```javascript


        ibsheet.ui
        ibsheet8
        1.1.1
        system
        ${basedir}/src/main/webapp/WEB-INF/lib/ibsheet8-1.1.1.jar


        ib-itext
        ib-itext
        1.0
        system
        ${basedir}/src/main/webapp/WEB-INF/lib/ib-itext.jar

```
systemPath로 직접 jar파일의 경로를 지정해주시면 됩니다.그리고 Local Repository구성하는 방법은 아래 링크를 참조해주시기 바랍니다.https://sleepyeyes.tistory.com/43ALSO엑셀 다운로드/업로드 설정 하기 

### 3-2. [서버 모듈]  다운로드(down2Excel) / 업로드(loadExcel)시 jsp를 쓸수 없는 환경일때

엑셀 다운로드 및 업로드 기능을 위해, 당사에서는 JSP 파일을 제공합니다.
단, JSP를 사용할 수 없는 환경에서는 해당 JSP 파일의 로직을 Java 코드로 변환하여 직접 구현하셔야 합니다.
변환된 Java 예제는 첨부된 파일에 포함되어 있으니, 자세한 내용은 첨부 파일을 참고해 주세요.
첨부 예제는 Java EE 환경 기준입니다. 
Jakarata EE사용시 다음과 같이 import 구문을 수정해 주세요Java EEJakarata EEimport javax.servlet.ServletContext;import javax.servlet.http.HttpServletRequest;import javax.servlet.http.HttpServletResponse;import jakarta.servlet.ServletContext;import jakarta.servlet.http.HttpServletRequest;import jakarta.servlet.http.HttpServletResponse;


### 3-3. [서버 모듈] 다운로드(down2Excel) / 업로드(loadExcel) 구현하기

1. 엑셀 다운로드 / 업로드 함수 호출하기 위한 js 링크 걸기plugins/ibsheet-excel.js파일을 소스코드에서 javascript src 한다.
```javascript





```

2. (Cfg)Export에 jsp (또는 서블릿) 경로 설정공통으로 설정하려면 ibsheet-common.js 파일의 _IBSheet.CommonOptions 설정한다.
```javascript
options.Cfg = {
    "Export":{
        "Url" : "/assets/ibsheet/jsp", 
        "Ext" : "jsp" //확장자 설정 default jsp
    }
}

//다운로드와 업로드를 각각 지정하는 경우
options.Cfg = {
    "Export":{
        "Down2ExcelUrl" : "/assets/ibsheet/jsp/Down2Excel.jsp",
        "LoadExcelUrl" : "/assets/ibsheet/jsp/LoadExcel.jsp",
    }
}

//다운로드와 업로드를 각각 지정하는 경우(서블릿으로 작성된 경우)
options.Cfg = {
    "Export":{
        "Down2ExcelUrl" : "/assets/ibsheet/jsp/Down2Excel.do",
        "LoadExcelUrl" : "/assets/ibsheet/jsp/LoadExcel.do",
    }
}
```
  3. 엑셀 다운로드 / 업로드 함수 호출
```javascript
//다운로드
var param = {
        FileName:"홍길동 교통비 내역.xlsx",
        downCols:"Visible",  /* 보여지는 컬럼만 다운로드*/
        downRows:"Visible", /* 필터링등을 통해 화면에 노출된 행만 다운로드 */
};
sheet.down2Excel(param); 

//업로드
var param = {mode:"HeaderMatch", workSheetName:"12월결산"};
sheet.loadExcel(param);
```


### 4. [서버 모듈] Html Filter, Xss Filter 적용 후 엑셀 다운로드/업로드가 되지 않는 경우

IBSheet 엑셀 다운로드 / 업로드 함수 호출시 화면에서 설정한 IBSheet 정보를 전송한다.

시트 정보의 내용은 아래 그림과 같이 xml 형태로 되어 있다.
[개발자도구 네트워크 탭에서 서버로 전송되는 데이터 내용]
Filter를 통과하면서 <, >, (, )등의 문자가 &lt; &gt; 등으로 치환이 되면 정상적으로 엑셀 로직을 수행 할 수 없게 된다.
Html Filter, Xss Filter 설정 후 엑셀 로직을 정상적으로 수행 하려면 아래 내용을 설정 한다.
 (Cfg) MarkupTagDelimiter 를 설정한다.

엑셀 처리모듈(jsp 나 서블릿)에서 setMarkupTagDelimiter를 설정한다.




### 5. [서버 모듈] spring security csrf 토큰 설정 및 X-Frame-Options 해결방법

IBSheet의 엑셀 다운로드 / 업로드는 기본적으로 Form submit의 형태로 동작한다.(target:iframe)csrf 토큰을 전송해야 하거나 iframe을 사용할 수 없다면 down2Excel / loadExcel 함수 호출시 reqHeader를 지정하거나
useXhr를 설정하며 된다.[iframe 차단시 브라우저 콘솔 에러 로그]Refused to display 'http://localhost:9090/' in a frame because it set 'X-Frame-Options' to 'deny'.
```javascript
//다운로드
sheet.down2Excel({ 
  reqHeader: { //request header에 값 설정
    Auth: "Basic login",
    Products: "IBSheet8"
  }
}); 

//업로드
sheet.loadExcel({ 
  reqHeader: { //request header에 값 설정
    Auth: "Basic login",
    Products: "IBSheet8"
  }
});
```
 [기본] - Form Submit 전송[reqHeader 설정] - xhr 전송

### 6. [서버 모듈] 엑셀 파일(down2Excel, loadExcel) 비밀번호 적용 및 제거 방법

down2Excel 또는 loadExcel 메서드를 호출할 때, 사용자로부터 입력받은 비밀번호를 workbookPassword 속성에 설정하면, 엑셀 파일에 암호를 적용하거나 이미 암호가 걸린 엑셀 파일의 암호를 해제할 수 있습니다.
 
Ex) sheet.down2Excel({fileName: "비밀번호 설정파일.xlsx",workbookPassword :"12345"});
 sheet.loadExcel({workbookPassword :"12345"}); 
비밀번호 설정은 xlsx 확장자 파일에서만 지원됩니다.
예제 : workbookPassword  예제 보기







### 7. [서버 모듈] 기타 에러 디버깅 하기

게시글의 4번 ~ 5번 항목을 모두 확인 하였는데도 엑셀 다운로드/업로드가 되지 않는 경우 아래의 내용을 확인하여 본다.
1. 다운로드 & 업로드 공통 사항1) (Cfg) Export 경로 확인 하기
(Cfg) Export 에서 다운로드 처리할 페이지 경로를 설정하는데 이 경로가 맞는지 확인한다.개발자 도구[F12] --> 네트워크탭으로 이동 --> 엑셀 다운로드 또는 엑셀 업로드 버튼 클릭 후 호출되는 url 경로가 정확한지 확인한다. 2) jar 파일이 WEB-INF/lib 폴더에 설정되었는지 확인하기
poi 라이브러리를 이용하여 개발 하였기 때문에 was 기동시 관련 파일들이 정상적으로 올라왔는지 확인 해야 한다.poi, poi.ooxml, poi-ooxml-schemas 이 3개의 파일이 정상적으로 로드 되었는지 확인한다.
Down2Excel.jsp에 아래 내용 삽입 후 서버콘솔에 찍히는 내용을 확인한다.
down = new IBSheetDown();
down.setLog(true); //업로드는  load.setLog(true);System.out.println(com.ibleaders.ibsheet.util.Version.getVersion()); // jar 및 POI 버전정보 출력.

[getVersion 로그]********************************************************************************## ibsheet8-1.1.12## IBSheet(H) 8.0.0.0~## IBChart(H) 7.3.0.1~********************************************************************************Class Info  : org.apache.poi.ss.usermodel.Workbookjar path    : /C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-4.1.2.jarjar Version : Apache POI 4.1.2Required Version : POI 3.8 beta3 or later********************************************************************************Class Info  : org.apache.poi.ooxml.POIXMLDocumentjar path    : /C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-ooxml-4.1.2.jarjar Version : Apache POI 4.1.2Required Version : POI 3.8 beta3 or later********************************************************************************Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbookPrjar path    : /C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jarjar Version : Apache POI 4.1.2Required Version : POI 3.8 beta3 or later********************************************************************************Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbookjar path    : /C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jarjar Version : Apache POI 4.1.2Required Version : POI 3.8 beta3 or later********************************************************************************Class Info  : org.apache.xmlbeans.XmlBeansjar path    : /C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/xmlbeans-3.1.0.jarjar Version :Required Version : XMLBeans 2.3.0 or later********************************************************************************POI Core Library file:/C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-4.1.2.jarPOI OOXML Library file:/C:/tomcat/tomcat-8.5_servertest/webapps/ibsheet7_sample/WEB-INF/lib/poi-ooxml-4.1.2.jar

[setLog 로그] Debug: ibsheet8-1.1.12Debug: Down2Excel start...Debug: [2023.08.18 14:34:06] Max:3,760,193,536, Total:1,488,977,920, Free:1,330,098,888, Used:158,879,032Debug: fileName=Excel.xls, fileType=xlsDebug: excel mode=POI //이부분이 POI로 나와야 정상적으로 poi가 잘 적용된 것이다.Debug: ###  전문분석 소요시간 : 0.004초Debug:  강제 타입설정 fileType=xlsDebug: excel mode=POI //이 부분이 POI로 찍혀야 된다.Debug: POI addSheet SheetDebug: Download Option : StartRow = 0Debug: Download Option : Down Header = trueDebug: Download Option : Header Rows = 1Debug: Download Option : Sum Rows = 1Debug: Download Option : Title Rows = 3Debug: Download Option : TopArea Rows = 0Debug: Download Option : BottomArea Rows = 0Debug: Sheet Finalize Index=0, SheetName=Sheet, total rows=38Debug: [2023.08.18 14:34:06] Max:3,760,193,536, Total:1,488,977,920, Free:1,277,495,472, Used:211,482,448Debug: ###  다운로드 총 소요시간 : 0.113초Debug: Down2Excel End...Debug: [2023.08.18 14:34:06] Max:3,760,193,536, Total:1,488,977,920, Free:1,277,495,472, Used:211,482,448
3) 그 외 에러 확인하기Down2Excel.jsp 또는 LoadExcel.jsp 소스코드에서 catch (Exception e) 와 catch (Error e) 부분에 에러찍는 부분이 주석으로 되어 있다.주석을 해제 후 서버 콘솔에 찍히는 에러 로그를 확인 후 기술지원에 연락하여 지원 받는다.
catch (Exception e) {            response.setContentType("text/html;charset=utf-8");            response.setCharacterEncoding("utf-8");            response.setHeader("Content-Disposition", "");                        //e.printStackTrace();            OutputStream out2 = response.getOutputStream();            out2.write(("<script>alert('An error has occurred while downloading the file.');</script>").getBytes());            out2.flush();    } catch (Error e) {            response.setContentType("text/html;charset=utf-8");            response.setCharacterEncoding("utf-8");            response.setHeader("Content-Disposition", "");                        //e.printStackTrace();            OutputStream out2 = response.getOutputStream();            out2.write(("<script>alert('An error has occurred while downloading the file.');</script>").getBytes());            out2.flush();              }

2. 업로드1) Temp 폴더 확인하기Temp 폴더에 파일을 생성 하기 때문에 Temp가 존재 하는지, OS가 Red Hat 계열일 경우 권한이 있는지 체크 한다.LoadExcel.jsp에 아래 코드 삽입하여 Temp 폴더의 위치를 파악한다.System.out.println(System.getProperty("java.io.tmpdir"));
2) DRM이 걸린 엑셀 파일을 Load하였는지 확인DRM 처리가 되어 난독이 된 엑셀 파일을 읽을 수 없다.DRM을 해제 하여 Load 하거나 LoadExcel.jsp 파일에서 DRM 해제 로직을 삽입한다.


### 1. 엑셀 다운로드 / 업로드 이벤트

IBSheet8의 엑셀 업로드/다운로드 기능은 클라이언트 모듈(js)과 서버 모듈(java, .net) 두 가지 방식으로 제공됩니다.1. 서버 모듈 엑셀 다운로드- IBSheet의 설정 정보와 조회 데이터를 서버로 전송(multipart 또는 post 전송)- 서버에서 엑셀 파일을 생성 후 생성된 파일을 사용자 브라우저로 전송 처리
 엑셀 업로드  - 사용자가 선택한 엑셀 파일과 IBSheet의 설정 정보를 서버로 전송 (multipart 전송) - 서버는 수신한 엑셀 파일과 IBSheet 설정 정보를 매핑하여 json 데이터 생성 전송
- IBSheet가 리턴 된 json 데이터를 로드(조회와 유사한 형태)2. 클라이언트 모듈엑셀 다운로드  - JavaScript를 이용해 브라우저 내에서 IBSheet의 데이터를 읽고, 이를 기반으로 .xlsx 파일을 생성하여 사용자에게 다운로드
 엑셀 업로드  - 사용자가 선택한 엑셀 파일(.xlsx)을 JavaScript로 직접 읽고 파싱한 뒤, 해당 데이터를 IBSheet에 로드* 참고 : 각 방식 별 장단점클라이언트 모듈서버 모듈장점 :
- 설정이 단순하여 바로 사용이 가능
- 서버에 부담를 주지 않고 사용자PC의 컴퓨팅 파워를 이용하여 엑셀 다운로드
- 각 셀에 설정된 디자인(배경색,글자색 등) 반영이 용이함

단점 :
- DRM 이 설정된 Excel 파일 처리 불가 
- 구형브라우저(Internet Explorer)사용자는 사용이 불가 
- xls 서식 지원 불가 
- 데이터 양이 많은 경우(5,000행 이상) 성능 저하 장점 :
- 사용자의 브라우저 버전과 무관하게 사용 가능
- 대용량(5,000행 이상)에 대해 안정적으로 처리 가능
- DRM 파일에 대한 처리 가능
- xls 파일 지원

단점 :
- 큰 데이터 다운로드 시 서버 측 부하로 인한 장애(OOME)가 발생할 위험 (다운로드 범위 제한이 필요)
- 레거시 시스템에서 사용하는 공통 library와 버전 충돌 문제 발생 가능성(apache POI 사용)


### 8. 업로드 이벤트

IBSheet8의 엑셀 다운로드시 발생하는 이벤트는 2가지 이다.1. onBeforeExport다운로드 함수들(exportData, down2Excel, down2Text, down2Pdf)이 호출될 때, 파일이 다운로드 되기전에 발생하는 이벤트이다.2. onExportFinish
파일 다운로드가 완료되고 발생하는 이벤트이다.


### 엑셀 로드(loadExcel, importData)시 DRM 해제 하기

서버모듈(loadExcel)과 클라이언트모듈(importData)의 동작 방식이 다르므로 DRM 해제 방법도 다르다.
1. (Method) loadExcel 호출시 DRM 해제함수 호출 시 DRM이 걸린 파일이 서버로 전송되므로 서버에서 DRM을 해제 할 수 있는 로직을 삽입해야 한다.당사에서 제공하는 LoadExcel.jsp 페이지에 아래와 같은 내용이 있다. /** ~ **/ 부분을 주석 해제 후 DRM 로직을 삽입 후 loadFile 함수에 DRM이 해제된 엑셀 파일 경로를 설정 한다.

```javascript
/** 서버로 전송된 파일을 가공해서 사용해야 할 경우. (예, DRM 복호화 등)

// 서버에 저장된 파일 객체

File uploadFile = load.getUploadFile();

String uploadFileName = uploadFile.getName();

String uploadFilePath = uploadFile.getAbsolutePath();

// TODO

// 업로드된 엑셀 파일을 가공함 (예, 엑셀문서를 DRM 처리함)



// 가공된 파일을 ibSheet에서 읽을 수 있도록 처리. 2번째 인자를 true로 설정하면 파일을 읽은 후 파일 삭제
load.loadFile(uploadFile,true);

**/

//브라우저에 데이터를 전달하여 시트에 로드
load.writeToBrowser();
```
DRM 해제 로직은 DRM 업체에 문의 하여 소스 코드를 받아 적용한다.
2. (Method) importData 호출시 DRM 해제
프론트엔드에서 DRM이 해제된 Excel 파일의 Blob 데이터를 확보한 경우, importData 함수의 file 인자에 이 Blob 객체를 전달하여 시트에 데이터를 로드할 수 있다.


### 여러개의 ibsheet를 하나의 엑셀파일에 다운로드하기

down2ExcelBuffer는 여러개의 ibsheet를 하나의 엑셀파일에 다운로드 하고자 할 때 사용됩니다.
down2ExcelBuffer(1 or true)로 실행하면, 이후 각 시트의 down2Excel를 호출하더라도 다운로드가 이루어지지 않고, down2ExcelBuffer(0 or false) 호출하는 순간에 각 시트의 내용이 엑셀파일 내 각각의 worksheet에 다운로드 됩니다.해당 기능을 이용하면 하나의 ibsheet를 여러개의 엑셀 워크시트로 나누어서 내려받는 것도 가능합니다.1. 일반적인 사용 방법
```javascript
//1. 일반적인 사용 방법
//버퍼링 시작
sheet1.down2ExcelBuffer(true);

//첫번째 시트 데이터 버퍼링
var param1 = {
  fileName:"여행경비 내역.xlsx", //엑셀파일명
  sheetName:"교통비"  //엑셀파일내 워크시트 명
};
sheet1.down2Excel(param1);

//두번째 시트 데이터 버퍼링
var param2 = {
  sheetName:"식비"    //엑셀파일내 워크시트 명
};
sheet2.down2Excel(param2);

//세번째 시트 데이터 버퍼링
var param3 = {
  sheetName:"숙박비/기타"    //엑셀파일내 워크시트 명
};
sheet3.down2Excel(param3);

//전체 시트 다운로드(실제 다운로드가 시작됨)
sheet1.down2ExcelBuffer(false);
```
예제 보기)https://jsfiddle.net/t0yc6uvw/2. 하나의  ibsheet에서 컬럼별로 나누어 엑셀파일을 생성
```javascript
//2. 하나의 시트에서 컬럼별로 나누어 엑셀파일을 생성
//버퍼링 시작
sheet.down2ExcelBuffer(true);

//4개 컬럼만 첫번째 워크시트로 다운
var param1 = {
  sheetName:"12분기",
  downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.down2Excel(param1);

//나머지 컬럼을 두번째 워크시트로 다운
var param2 = {
  sheetName:"34분기 및 종합",
  downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.down2Excel(param2);

//버퍼링 종료 (실제 다운로드가 시작됨)
sheet.down2ExcelBuffer(false);
```
예제 보기)https://jsfiddle.net/txgwd2nv/

### 엑셀 다운로드시 특정 컬럼만 내려받는 방법

IBSheet8 의 엑셀 다운로드 함수인  down2Excel 또는 exportData 를  사용할때, downCols 인자를 설정하면 지정한 컬럼만 다운로드할 수 있습니다. ( 두 함수의 차이는 아래 링크를 참조하세요)
* 엑셀 다운로드/ 업로드 설정하기 
1. 지정한 컬럼만 다운로드 하기 (컬럼Name 을 "|" 로 연결한 문자)
```javascript
sheet.down2Excel({fileName: 'sample.xlsx', SheetDesign: 1, downCols: "SEQ|sName|Reason|Qty|Date1|Date2"});
```
2. 화면에 보여지는 컬러만 다운로드 하기 (downCols: "Visible" 설정)
```javascript
sheet.down2Excel({fileName: 'sample.xlsx', SheetDesign: 1, downCols: "Visible"});
```
3. 조건에 따라 특정 컬럼을 제외하고 다운로드 하기 (함수를 이용해 조건 설정)

```javascript
sheet.down2Excel({ fileName: 'sample.xlsx', SheetDesign: 1, downCols : makeHiddenSkipCol() });


...

function makeHiddenSkipCol() {
  //visible:0인 컬럼, SEQ, 상태컬럼, check 컬럼을 제외한다.
  var cols = sheet.getCols();
  var colsArr = new Array();

  for (var i = 0; i < cols.length; i++) {

    var colName = sheet.getAttribute({col: cols[i],attr: "Name"});
    var colVisible = sheet.getAttribute({col: cols[i],attr: "Visible"});
    var colType = sheet.getAttribute({col: cols[i],attr: "Type"});

    if (colVisible && colName != "SEQ" && colName != "sStatus" && colType != "Bool") {
      colsArr.push(colName);
    }
  }
  //console.log(colsArr.join("|"));
  
  return colsArr.join("|");
}
```
ex) visible:0인 컬럼, SEQ, 상태, 체크박스 컬럼을 제외하고 다운로드 하는 예제https://jsfiddle.net/kfh6Lywm/
4. 다운로드 다이알로그를 통한 사용자 지정 다운로드 다운로드 함수를 사용하지 않고, showDownloadDialog 메소드를 호출하면 별도의 다운로드 다이알로그가 생성되고, Header에 있는 체크박스를 통해 사용자가 직접 원하는 컬럼만을 다운로드 할 수 있습니다. 다이알로그 함수는 ibsheet-dialog.js 파일 안에 정의되어 있으며, 공통 수정이 필요한 경우 해당 함수를 수정하시면 됩니다. (down2Excel 호출 인자는 downParams 넣어 함수를 호출할 수 있습니다.)


```javascript
//다운로드 다이얼로그 오픈
sheet.showDownloadDialog();
```




### 엑셀 다운로드 시 트리 레벨이 8레벨까지 밖에 안나온다.

IBSheet에서 트리형 데이터를 엑셀로 다운로드할 경우,엑셀 프로그램 자체의 구조 제한으로 인해 최대 8레벨까지만 표현됩니다.이는 IBSheet의 버그나 설정 문제는 아니며,엑셀의 계층 구조 지원 한계에 따른 정상적인 동작입니다.


아래 예제에서 동일한 동작을 확인할 수 있습니다.> https://jsfiddle.net/tmyhe0q8/
다운로드 시 “예(Y)” 버튼을 눌러 파일을 열면8레벨까지만 데이터가 표시되는 것을 확인하실 수 있습니다.(그 이상 레벨의 데이터는 엑셀에서 표현 불가)

참고) 엑셀 파일 내부에서도 9레벨 이상으로 직접 구조를 생성하려 해도엑셀 자체에서 제한되어 추가 생성이 불가합니다.따라서 해당 현상은 엑셀 프로그램의 한계로, 변경이 불가능한 부분입니다.



### CSS 디자인 수정 시 엑셀 다운로드 관련 주의사항

다운로드시 시트의 디자인을 설정하여 (SheetDesign:1) 다운로드 하려면 주의 사항이 있습니다.
엑셀 다운로드시 시트 디자인 정보는 main.css 파일에 설정한 내용을 읽습니다.main.css 파일에서 css 수정을 하지 않고 다른 파일 (ex: ibsheet_design.css) 에서 시트 관련 css를 수정하였다면 엑셀 다운로드 시 디자인 반영되지 않습니다.

[다운로드시 디자인 적용하지 못하는 예]https://jsfiddle.net/4tvx36cy/



## 시트의 디자인 관련 내용을 확인합니다.

### 테마 변경 방법

IBSheet8은 다음과 같은 5가지 기본 테마를 제공합니다.테마명(prifix)테마 파일default(IB)/css/default/main.cssgrace(IBGR)/css/grace/main.cssmaterial(IBMR)/css/material/main.cssmint(IBMT)/css/mint/main.csssimple(IBSP)/css/simple/main.css
사용하려는 테마의 main.css 가 각 화면에 include 되어야 합니다.기본 테마는 dafault 폴더에 있는 main.css 파일을 사용합니다.
기본 테마가 아닌  다른 테마를 사용하려는 경우, 아래와 같이 (Cfg)Style 로 원하는 테마 main.css파일의  prefix를 설정해 주어야 합니다.
```javascript




IBSheet.CommonOptions = {
    Cfg: {
        //사용할 css파일의 prefix 명
        Style: "IBMT", //mint테마
    }
    ...
}

```
만약, 제공되는 테마 중 하나를 (Cfg)Style 에 대한 설정 없이 기본 테마처럼 사용하고자 하는 경우에는, 사용하려는 main.css 의 prefix 를 IB로 변경하여야 합니다.
setTheme 함수를 통해 이미 생성된 의 테마를 변경하실 수도 있습니다.IBSheet8 에서 지원하는 테마는 아래 경로를 참고하시기 바랍니다.https://docs.ibleaders.com/ibsheet/v8/manual/#docs/appx/design

### 편집 가능여부 디자인 변경

IBSheet8의 편집 가능 여부는 CanEdit 속성을 통해 설정되며, 화면에서 배경색을 통해 구분됩니다.

편집이 불가능한 셀(Cell)은 main.css 파일에 .IBColorReadOnly 클래스에서 설정한 배경색을 갖게 됩니다.
```javascript
.IBColorReadOnly{background-color:#f4f4f4}
```
편집이 가능한 셀에는  .IBClassEdit 클래스가 적용됩니다.따라서 위 class를 이용하여 편집 가능한 셀(Cell)에 대해 별도의 디자인을 적용할 수 있습니다.
1. 편집 가능한 셀에 대해 테두리를 표시

```javascript
.IBClassEdit{
  position:relative;
}
td.IBClassEdit.IBText::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border-right:1px solid #666;
  border-top:1px solid #666;
  border-bottom:1px solid #666;
  border-left:1px solid #666;
  border-radius: 2px;
}

td.IBClassEdit.IBLines::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}
td.IBClassEdit.IBLines::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}
td.IBClassEdit.IBEnum::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}
td.IBClassEdit.IBInt::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}
td.IBClassEdit.IBFloat::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}

td.IBClassEdit.IBNoRight:not(.IBTree)::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:0px;
  /* border:1px solid #666; */
  border-right:0px solid #666;
  border-top:1px solid #666;
  border-bottom:1px solid #666;
  border-left:1px solid #666;
  border-radius:2px 0 0 2px;
}
td.IBClassEdit+.IBNoLeft::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:0px;
  right:2px;
  /* border:1px solid #666; */
  border-right:1px solid #666;
  border-top:1px solid #666;
  border-bottom:1px solid #666;
  /* border-left:1px solid #666; */
  border-radius:0 2px 2px 0;
}


td.IBClassEdit.IBPass::after{
  content:"";
  position:absolute;
  top:2px;
  bottom:2px;
  left:2px;
  right:2px;
  border:1px solid #666;
  border-radius: 2px;
}

td.IBTree::after{
  border:0 solid #FFFFFF;
}
```

예제
참고. 해당 디자인은 Chrome,Edge 에서만 사용 가능.(IE 불가)

2. 편집 가능한 셀(Cell)에 대해 우측 리본을 표시

```javascript
.IBClassEdit{
  position:relative;
}
.IBClassEdit:hover:after {
opacity: 1;
}
.IBClassEdit:after {
  position: absolute;
  content: '';
  width: 0;
  right: 0;
  top: -10px;
  border: 10px solid transparent;
  border-right: 10px solid #F76E11;
  opacity: 0.5;
}

.IBNoRight:after{
  border: 0px;
}
```


예제2


### 반응형 웹 페이지 개발(모바일 사용환경)

창의 크기, 혹은 모바일 환경에서 유연하게 사용하기 위한 기능을 소개합니다.1. HideMobile(Col)모바일 환경에서 해당 열(Column)을 보여줄 지 여부를 설정합니다.- IBSheet8 생성 시점(create)에서 OS를 판단하여 모바일 OS인 경우, 속성이 설정된 열(Column)을 감춥니다.(Visible:0)- iPadOS는 모바일 OS에 포함되지 않습니다.
[PC환경에서 오픈시]
[모바일 OS에서 오픈 시 (HideMobile로 설정한 열(Column)이 감춰짐)]
TouchScroll(Cfg)모바일 환경에서 IBSheet8 내 스크롤 바의 크기(모양)을 설정합니다.- 모바일 환경에서 가로/세로 스크롤 바의 크기나 보임/감춤 여부를 의미합니다.
(PC환경에서는 CustomScroll 속성에 영향을 받음)- 스크롤바 보임 여부와 무관하게 모바일 환경에서는 바디(데이터)영역을 드레그 하여 이동할 수 있습니다.
[TouchScroll:3 설정시]
BreakPoint(Col)시트가 담기는 div 의 크기에 따라 화면에 표시할 열을 설정할 수 있는 기능힙니다.열(Column)에 BreakPoints 를 설정하면 시트의 태그 사이즈(넓이)가 지정된 수치보다 작을 경우 숨기고, 클 경우 노출할 수 있습니다. 해당 기능은 언어팩에 BreakPoints라는 키 값에 Bootstrap에서 사용되는 미디어 쿼리의 기준 값과 같은 xl, sm, md, lg, xl, xxl이라는 키 값에 각각의 수치를 적용하는 기능으로, 해당 수치 값 변경이 필요한 경우에는 언어팩에서 변경하시면 됩니다.

```javascript
// 시트 넓이가 언어팩에 설정된 기본 수치 BreakPoints.sm인 576보다 작을 시 숨김
{"Header": ["세부사업","세부사업"],"Type": "Text","Name": "sDetail","MinWidth": "200",
   "RelWidth": 1,"Align": "Left","FormulaRow": "Sum", BreakPoint:'sm'},
```

[시트의 넓이가 500px일 때]
[시트의 넓이가 600px일 때]



### 자주 사용하는 css 항목 정리


시트 헤더의 배경색상과 Text 색상을 적용하는 class는 아래와 같습니다.
IBHeaderText : 시트 헤더 색상IBCellHeader : 시트 헤더 배경 색상


시트 부위별 class 명다음은 각 부분을 수정하기 위핸 클래스명 입니다.(default 테마 기준)전체영역클래스명역할.IBMain전체 폰트 사이즈,유형(family)개별설정이 없으면 이 설정을 상속받음.IBType전체 셀의 padding개별 설정이 없으면 이 설정을 상속받음헤더영역클래스명역할.IBHeaderRowHeight헤더 행의 높이.IBCellHeader헤더 행의 배경색,border 색(border가 없는 경우 .IBCellBase설정을 상속).IBHeaderText헤더 행의 font(글자색,사이즈, 유형).IBColorHoveredCellHeader헤더 셀 Hover시 색상데이터영역클래스명역할.IBRowHeight데이터 행 높이.IBCellBase데이터 셀 border.IBHoverRowBackground데이터 행 Hover 시 배경 색상.IBHoverRowBorder데이터 행 Hover 시 border 색상.IBColorHoveredCell데이터 셀 Hover 시 배경 색상.IBHoverCellBorder데이터 셀 Hover 시 border 색상.IBFocusRowBackground데이터 행 focus 시 배경 색상.IBFocusRowBorder데이터 행 focus 시 border 색상.IBColorFocusedCell데이터 셀 focus 시 배경 색상.IBFocusCellBorder데이터 셀 focus 시 border 색상.IBColorSelected데이터 셀 select 시 배경 색상.IBColorReadOnly편집 불가능한 셀의 배경색.IBEditCellBorder편집 input 객체 border.IBColorDefault기본 행의 배경색.IBColorAlternate짝수 행의 배경색 (cfg)Alternate 속성에 영향을 받음기타 영역클래스명역할.IBInfoRow건수정보 표시행 InfoRow.IBFormulaRow합계행.IBNoDataRowNoData 행 "조회된 데이터가 없습니다" 표시행.IBHeadRow상단 고정행 (row)Color나 (row)TextColor 속성을 통해 설정할 것을 권함.IBFootRow하단 고정행 (FormulaRow 포함) (row)Color나 (row)TextColor 속성을 통해 설정할 것을 권함.IBDialogButton, u.IBSheetButton버튼 타입 설정시 button 디자인.IBTipMain,.IBTipBody풍선도움말 (툴팁).IBHintMain,.IBHintOuter힌트.IBMessage메세지 shoMessage(),showMessageTime()을 통해 보여지는 메세지 상자.IBEnumMenuList드롭 다운 리스트(Enum타입)의 item 크기 (main.css에 없을 경우 추가하여 사용).IBEnumMenuListText드롭 다운 리스트(Enum타입)의 item font설정 (main.css에 없을 경우 추가하여 사용)각종 icon클래스명역할.IBSort1Right,.IBSort2Right,.IBSort3Right정렬 icon.IBDateRight달력 icon.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottomEnum icon.IBBool0,IBBool1,IBBool0RO,IBBool1RO체크박스 icon순서대로 [편집가능 언체크, 편집가능 체크, 편집불가능 언체크, 편집불가능 체크].IBBool2,.IBBool3,IBBool2RO,.IBBool3RO라디오 icon순서대로 [편집가능 언체크, 편집가능 체크, 편집불가능 언체크, 편집불가능 체크]페이지네비게이션클래스명역할.IBToolPagerFirst, .IBToolPagerFirst1첫번째 페이지로 이동 버튼.IBToolPagerPrev, .IBToolPagerPrev1이전 페이지로 이동 버튼.IBToolPagerNext, .IBToolPagerNext1다음 페이지로 이동 버튼.IBToolPagerLast, .IBToolPagerLast1마지막 페이지로 이동 버튼.IBPagerEdit > div현재 페이지 표시 객체

### 추가, 수정, 삭제 된 행의 배경색 설정 방법

추가/수정/삭제 가 이뤄지는 행에 대한 배경색은 Cfg.ColorState 로 표현여부를 설정할 수 있으며, 옵션값은 각 옵션값의 bit연산 형태로 설정이 가능합니다.
색상값을 변경할때는 시트 테마 파일인 main.css 에서 수정가능합니다. (테마가 별도 설정된 경우, IB+테마prefix+속성 을 찾아 변경하셔야 합니다.)
기본(default/main.css)테마 기준입니다. 
추가: .IBColorAdded수정: .IBColorChanged삭제: .IBColorDeleted
테마에 따라 접두어가 틀리니 사용에 주의하여 주시기 바랍니다. 
관련 API : setTheme

### Button사용 시, css수정 외의 색상 변경 방법

Button Type과 Button속성을 통해 Button을 사용할 수 있습니다.
시트 사용 시, 사용하는 Theme의 css수정 외에 버튼 색을 변경할 수 있습니다.
Button Type에서의 Button: Button 색 변경
```javascript
.btnBlue {
  background-color: blue !important;
}
```

```javascript
{"Header": "버튼(Button)","Type": "Button","Name": "ISO","Width": 80,
   "Align": "Left","CanEdit": 0, "Button": "Button"}

sheet.setAttribute(sheet.getFocusedRow(), 'ISO', 'AddClass', 'btnBlue');
```
위와 같이 AddClass속성을 이용하여 Button Type이고, Button속성이 Button인 Button의 배경색을 기본색상 외에 지정한 색으로 변경하여 사용할 수 있습니다.
예제)https://jsfiddle.net/ur9sbn0p/
Text Type에서의 Button: Button 색 변경
```javascript
td.btnAqua u{
  background-color:aqua;
}
```

```javascript
{"Header": "문자열(Text)","Type": "Text","Name": "TextData","Width": 100,"Align": "Center",
   "CanEdit": 1, Button:"Button", ButtonText:"확인"}

sheet.setAttribute(sheet.getFocusedRow(), 'TextData', "Class", "btnAqua");
```
위와 같이 Class속성을 이용하여 셀(Cell)에 커스텀 Class를 추가하여, 생성된 Button Tag인 u Tag에 배경색을 적용하여 기본색상 외에 지정한 색으로 변경하여 사용할 수 있습니다.
예제)https://jsfiddle.net/2adr1ecx/

## IBSheet의 다양한 기타 기능을 소개합니다.

### Visual Studio Code를 통한 IBSheet8 사용 편의성 제공

Visual Studio Code의 확장 프로그램을 통해 IBSheet8 사용 편의성을 제공 드리고 있습니다.마켓플레이스에서 다운 받으실 수 있습니다.편의성 기능을 제공하는 언어 및 확장자 정보입니다. (지원하는 확장자 파일에서만 사용 가능합니다.)확장 프로그램을 통해 3가지의 기능을 사용하실 수 있습니다.첫째, Code Snippet코드를 하나의 몇개의 글씨를 이용해서 축약시켜 놓고 사용할 수 있게 해주는 기능입니다.사용 가능한 Code Snippet의 크게 4종류가 있습니다.
1.Create SnippetSnippetRenders!ibs:temp:basicSheetTemplate기본 시트 생성 Snippet!ibs:temp:tree트리 사용 시트 생성 Snippet!ibs:temp:multiRecord멀티레코드 시트 생성 Snippet

2.Property(cfg, row, col, cell) SnippetSnippetRenders!ibs:cfg:infoRowcfg 속성 건수 정보 표시 행 Snippet!ibs:cfg:mergecfg 속성 머지 기능 Snippet!ibs:row:solid기본 솔리드 행 Snippet!ibs:row:find-solid찾기 솔리드 행 Snippet!ibs:row:group-solid그룹 솔리드 행 Snippet!ibs:row:head헤드 행 Snippet!ibs:row:foot풋 행 Snippet!ibs:col:customFormat커스텀 포맷 Snippet!ibs:col:contextMenu컨택스트 메뉴 Snippet!ibs:col:formula포뮬러 열 Snippet!ibs:col:attr+formulaattribute 포뮬러 Snippet!ibs:col:radioGroupradio 그룹 열 Snippet!ibs:col:relationCombo관계형 콤보 열 Snippet!ibs:col:suggestsuggest 열 Snippet!ibs:col:DateYmd년월일 날짜 포멧 열 Snippet!ibs:col:DateYm년월 날짜 포멧 열 Snippet!ibs:col:FromToYmd기간 입력 열 Snippet!ibs:cell:menu메뉴 기능 Snippet!ibs:cell:OnChangeJSON Event OnChange Snippet!ibs:cell:OnClickSideJSON Event OnClickSide Snippet

3.Event SnippetSnippetRenders!ibs:evt:onRenderFirstFinishonRenderFirstFinish Event Snippet!ibs:evt:onBeforeDataLoadonBeforeDataLoad Event Snippet!ibs:evt:onSearchFinishonSearchFinish Event Snippet!ibs:evt:onBeforeChangeonBeforeChange Event Snippet!ibs:evt:onAfterChangeonAfterChange Event Snippet!ibs:evt:onAfterClickonAfterClick Event Snippet!ibs:evt:onBeforeSaveonBeforeSave Event Snippet!ibs:evt:onAfterSaveonAfterSave Event Snippet
4.Function SnippetSnippetRenders!ibs:func:addRow행 추가 함수!ibs:func:deleteRow행 삭제 함수!ibs:func:removeRow행 제거 함수!ibs:func:excelDown엑셀 다운로드 함수!ibs:func:excelLoad엑셀 업로드 함수!ibs:func:print프린트 함수!ibs:func:ajaxajax 함수!ibs:func:doSearch조회 함수!ibs:func:doSearchPaging페이징 조회 함수!ibs:func:doSave저장 함수!ibs:func:getSaveJson행 추출 JSON 함수!ibs:func:getSaveString행 추출 String 함수!ibs:func:setValue셀값 수정 함수!ibs:func:setAttribute셀 속성 수정 함수!ibs:func:showMessageTime메세지 함수!ibs:func:showRow_hideRow행 보임 / 감춤 함수!ibs:func:showCol_hideCol열 보임 / 감춤 함수!ibs:func:subtotal소계 함수
둘째, Assistantapi 자동완성 기능입니다.
셋째, Hover Tooltip코드에 마우스를 가져다 대면 해당 api에 대한 설명을 툴팁으로 제공합니다.



### 멀티레코드(MultiRecord) 셀(Cell) 병합하기

IBSheet8 에서 하나의 데이터(혹은 레코드)를 여러 행으로 표시하는 기능을 멀티레코드(MultiRecord)라고 합니다.이러한 멀티레코드(MultiRecord)기능을 사용할 때, IBSheet8의 셀(Cell)을 병합하는 방법을 알아봅니다.멀티레코드(MultiRecord) 사용 예제멀티레코드 기능을 사용하면 자동 병합 기능(DataMerge, HeaderMerge)이 지원되지 않기 때문에 (Col)RecordColSpan, (Col) RecordRowSpan속성을 이용하여 병합할 영역을 지정해 주어야 합니다.
```javascript
options.Cfg = {
   MultiRecord: true  // 멀티레코드 기능 사용
   ...
};

// 멀티레코드 기능 사용시 열(Column) 설정(1차원 배열 -> 2차원 배열)
options.Cols = [
      //첫번째 단위데이터행(DataRow)
    [
        {Header: "이름", Name: "colA", Type: "Text", Align: "Center", Width: 100},
        {Header: "사진", Name: "colB", Type: "Img", Width: 120, RecordRowSpan: 3},
        {Header: "나이", Name: "colC", Type: "Int", Width: 120},
        {Header: "경력", Name: "colD", Type: "Float", Width: 120, Format:"0.## 년"}
    ],
    //두번째 단위데이터행(DataRow)
    [
        {Header: "사번", Name: "colE", Type: "Text", Align: "Center"},
        {Header: "사진"},
        {Header: "성별", Name: "colF", Type: "Enum", Enum:"|남|여", EnumKeys:"|M|F"},
        {Header: "입사일", Name: "colG", Extend:IB_Preset.YMD}
    ],
    //세번째 단위데이터행(DataRow)
    [
        {Header: "직급", Name: "colH", Type: "Text", Align: "Center"},
        {Header: "사진"},
        {Header: "주소", Name: "colJ", Type: "Text", RecordColSpan: 2},
        {Header: "주소"},
    ]
];
```
만약 데이터 영역은 병합하지 않고 헤더 영역만 병합하고 싶은 경우 (Col)Header속성에 (Col)RecordRowSpan, (Col) RecordColSpan 값을 넣으면 헤더 영역에서만 병합됩니다.단 이렇게 헤더만 병합되어 헤더와 데이터의 병합 모양을 다르게 설정하는 경우, 헤더를 클릭하여 데이터를 정렬 할 수 없습니다.
```javascript
options.Cfg = {
   MultiRecord: true  // 멀티레코드 사용
   ...
};

// 멀티레코드 기능 사용시 열(Column) 설정(1차원 배열 -> 2차원 배열)
options.Cols = [
  //첫번째 단위데이터행(DataRow)
    [
        {Header: "A", Name: "colA", Type: "Text", Width: 100},
        {Header: { Value: "B",  RecordRowSpan: 3 }, Name: "colB", Type: "Img", Width: 100},
        {Header: "C", Name: "colC", Type: "Int", Width: 100},
        {Header: "D", Name: "colD", Type: "Float", Width: 100}
    ],
    //두번째 단위데이터행(DataRow)
    [
        {Header: "E", Name: "colE", Type: "Text", Width: 100},
        {Header: "F", Name: "colF", Type: "Text", Width: 100},
        {Header: "G", Name: "colG", Type: "Enum", Width: 100},
        {Header: "H", Name: "colH", Type: "Date", Width: 100}
    ],
    //세번째 단위데이터행(DataRow)
    [
        {Header: "I", Name: "colI", Type: "Text", Width: 100},
        {Header: "J", Name: "colJ", Type: "Text", Width: 100},
        {Header: "K", Name: "colk", Type: "Text", Width: 100},
        {Header: "L", Name: "colL", Type: "Text", Width: 100},
    ]
];
```
 (Col)RecordColSpan, (Col)RecordRowSpan은 병합하게 되는 첫 번째 셀(좌측/상단 셀)에만 설정해야 합니다. 다른 셀에 중복해서 설정하는 경우 오류가 발생 할 수 있습니다.

### IBSheet8에서 클릭과 더블 클릭의 이벤트 구분 처리

일반적으로 웹(javascript)에서는 더블 클릭 시 클릭 이벤트도 같이 발생합니다. 
IBSheet8에서도 onDblClick 와 onClick 이벤트를 같이 선언하는 경우, 더블 클릭 시 onClick 이벤트도 발생하게 됩니다.
더블 클릭 시 onClick 이벤트가 발생하지 않게 하려면 다음과 같이 로직을 구성해야 합니다.

```javascript
// 셀(Cell) 클릭 시 호출되는 이벤트
onClick: function(evtParam) {
    if(!evtParam.sheet.ClickChecker) {
        //임의의 객체 ClickChecker를 IBSheet8에 추가
        evtParam.sheet.ClickChecker = setTimeout(function(){
            // 여기에 클릭 시 처리할 로직을 구성
            ....

            evtParam.sheet.ClickChecker = null;
        }.bind(this), 500); // 0.5초 후에 동작
    } else {
        // 0.5초 이내에 다시 클릭이 발생했을 시 더블 클릭으로 생각해서 이벤트 발생 X
        clearTimeout(evtParam.sheet.ClickChecker);
        evtParam.sheet.ClickChecker = null;
    }
}
```



### 비동기 동작을 가진 API

다음은 비동기 동작을 가지고 있는 API 입니다.API 사용시 시점 문제가 일어나지 않도록 주의해주세요.
API설명API return 유무Callback 이벤트 유무doFilter
-OdoSortSearchMode: 2 의 경우, 무조건 비동기 로직을 사용합니다.-OclearSortSearchMode: 2 비동기, SearchMode: 0 도 데이터 많아지면 비동기-OfindRows
-
-refreshPage렌더링을 비동기로 태움.-OreloadDataSearchMode: 2 비동기-Oreload
-
OrevertDataSearchMode: 2 비동기로 렌더링을 동작-OsetFixedCols
OOsetFixedLeft
OOsetFixedRight
OOsetFixedTop
OOsetFormulaRowPosition
OOsetFormulaRow
OOsetInfoRow
-OsetLocale
OOsetTheme
-OupdateClientPagingSearchMode: 1 에서 사용되는 기능으로, Render 를 비동기로 탐OO


### 소계 기능 사용시 병합된 셀에 대한 계산

소계(makeSubTotal)나 합계행(FormulaRow)기능을 사용할 때, 병합된 셀(Cell)을 하나의 데이터로 계산하는 것이 아니라, 각각의 셀(Cell)들로 구분하여 계산이 됩니다.
만약 병합된 셀을 하나의 데이터로 계산하시려면 아래와 같이 CalcMergeMode 속성을 설정하셔야 합니다.
```javascript
Cfg: {
    ...
    CalcMergeMode: 0/1/2/3
    ...
}
```
ValueDescription0소계, FormulaRow사용 시 머지가 된 셀도 Row별 값 계산(Default)
1소계 계산시 머지된 셀을 하나의 값으로 계산(makeSubTotal만 적용)
2FormulaRow계산 시 머지된 셀을 하나의 값으로 계산 (FormulaRow만 적용)
3FormulaRow와 소계 계산시 머지가 된 셀을 하나의 값으로 계산(둘다 적용)

### [Tree] Level 별 합계 구하기

트리의 Level별로 합계를 구하려면 Formula 기능을 이용하여 계산 로직을 삽입하면 됩니다.자세한 예제는 아래 링크에서 확인 하세요[예제 그림]https://jsfiddle.net/wgqfv1rn/

### 조회 저장 시 Focus의 위치

doSave1. 일반적인 조회의 경우일반적으로 데이터 조회 이후, Focus는 가장 왼쪽 상단에 위치한 셀에 위치하게 됩니다.LeftCols가 설정 되어있는 경우, LeftCols의 가장 왼쪽 상단에 위치한 셀에 Focus가 위치합니다.데이터 조회 시, Focus는 조회가 완료되기 전에 위치하게 됩니다.즉, onFocus 이벤트 발생 후에 onSearchFinish 이벤트가 발생합니다.2.  행추가를 한 경우 addRow 시 추가된 행으로 Focus가 이동합니다.addRows로 여러행을 추가한 경우, 추가된 행 중 가장 상단에 위치한 행에 Focus가 이동합니다.3. 저장한 후의 경우doSave로 저장한 경우, 이전에 위치한 셀에 그대로 Focus가 위치하게 됩니다.4. Cfg.IgnoreFocused 에 관한 설명시트는 데이터 조회 후 포커스를 보여지는 첫번째 행 첫번째 열에 위치시킵니다.해당 속성을 1(true)로 설정하면 조회 후 시트가 포커스를 갖고 오지 않게 합니다.따라서 IgnoreFocused : 1을 설정한 경우, 조회 시 onFocus 이벤트가 발생하지 않습니다.▼ 예제 확인 https://jsfiddle.net/h0e6jp9f/

### 수정한 데이터를 되돌리는 경우(reloadData, revertData, reload)

IBSheet를 사용할 때, 데이터를 초기화하거나 되돌리는 다양한 방법이 있습니다. 여기서는 reloadData, revertData, reload 세 가지 속성을 비교 설명합니다.

1. reloadData : 시트의 데이터를 처음 생성 시점, 즉 IBSheet.create()함수를 통해 로드된 데이터로 되돌립니다.

```javascript
IBSheet.create({id: 'sheet', el: 'sheetDiv', options: options});
```
 만약 위와 같이 create 시점에 data를 포함하였다면 reloadData 시 초기에 설정된 data값으로 데이터를 되돌립니다.
2. revertData : 시트 전체 데이터를 조회 시점의 값으로 변경합니다.revertData는 데이터의 "저장여부와 상관없이" 현재 화면에 보여지는 데이터를 조회시점 값으로 변경합니다.
3. reload : 시트를 처음 생성했던 상태로 되돌립니다.









### 피벗 테이블에 합계 행(열) 감추는 방법


피벗 테이블 생성시 피벗 테이블 하단과 값으로 설정되는 컬럼의 합계가 피벗 시트에 아래와 같이 나타나게 됩니다.

이때, 하단의 합계행과 피벗 테이블의 데이타 열의 합계값을 감추고 싶은 경우, 피벗 생성 함수의 callback 에서 처리할 수 있습니다.
1. 피벗 다이알로그를 통해 생성하는 경우
    sheet.showPivotDialog({      pivotParams: {        callback: function (evt) {         evt.sheet.hideRow(evt.sheet.getRowById("FR1"));          evt.sheet.hideCol(evt.sheet.getLastCol());                  }      },    });

2. 피벗 테이블로 생성하는 경우



### Suggest로 검색창과 유사한 자동완성 기능 구현


포탈 사이트 검색창의 자동완성과 마찬가지로 셀 안에 들어갈 내용 리스트를 정의해 두면, 입력 시 리스트 중에 시작글자가 동일한 값이 필터링되어 보여집니다.첫번째 글자를 구분자로 하는 문자열로 설정합니다.
```javascript
// CarName 열에 추천어를 미리 등록
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",
        Name: "CarName",
        Width: 120, 
        ...
    },
    ...
];
```

SuggestType은 Suggest 속성 사용과 관련한 다양한 추가기능을 설정합니다.여러 기능을 "," 를 구분자로 하여 설정하실 수 있습니다.




▼ 예제 확인https://www.ibsheet.com/v8/ibsheet/html/examples.html#autoComplete/






### formula와 render

formula 를 재계산 하는 calculate 는 render:0인 상태에서 formula를 동작하는 경우 rerender 후에 calculate 를 추가로 동작시켜줘야한다.

상황1)  addRow 시 render 인자를 0으로 꺼둔 상태에서 행추가를 하고, rerender 시 상태컬럼에 글씨가 나오지 않는다.
render는 화면을 새로고침 해줄 뿐 계산을 해주는 것이 아니기 때문에 calculate 를 추가로 써줘야한다. ( 지원번호 41666)

addRow의 render를 false로 설정 후 Formula 문제render인자를 false 로 하면 화면에 랜더링이 되지 않았기 때문에 (Method) rerender, (Method) renderBody 를 호출해야 화면에 반영이 됩니다. 그러나 Formula는  (Method) rerender, (Method) renderBody 함수로는 반영 할 수 없으며 (Method) calculate 를 호출해 줘야 합니다.------------------------------(지원번호 39512)

상황2) Extend로 IB_Preset을 사용한 뒤에 setAttribute 로 속성을 변경하면 반드시 calculate 를 써줘야한다.( 지원번호 41186)

상황3) CanEditFormula 와 같이 Formula가 설정되어있는 컬럼에 CanEdit를 동적으로 변경하면 calculate 로 재계산 해줘야한다. (지원번호 40845)
상황4) revertData 시킨 다음 포뮬러가 동작하지 않는다. (지원번호 40426)
revertData, revertRow 등 시트의 데이터를 조회시점으로 값을 돌리는 메소드는 말 그대로 데이터 값만을 변경하기 때문에 상태값을 제외한 행속성, 열속성 등이 반영되지 않습니다.revert 메소드를 통한 값 변경은 Formula 계산을 자동으로 해주지 않습니다.
따라서 Formula 재계산을 해주는 메소드를 추가로 사용해주셔야 합니다.calculate()를 통해 Formula를 재계산 해주시면 됩니다.
예제) https://jsfiddle.net/hm2dxz6s/2/

상황5) 상태컬럼은 Formula를 돌리는 것이기 때문에 calulate로 반영해줘야한다.(지원번호 40263)
sheet.setValue(sheet.FRow,"CheckData",sheet.FRow["CheckDataOrig"],1);        sheet.revertRow(sheet.FRow,1);        sheet.calculate();상태컬럼은 Formula를 돌리는거라서 calculate 하면 글자는 사라짐. 하지만 DelCheck는 onChange 이벤트로 값을 변경해주는거라 calculate 해도 onChange가 안타서 CanEdit까지 핸들링할 수 없다. 따라서 setvalue로 DelCheck값을 변경해주는 것이 최선이다.

(지원번호 36984)makeSubTotal 메뉴얼에 onDataLoad 시점에서 사용하라고 쓰여있음. 아마도 속도 이슈로 이 시점에 쓰라고 한 것으로 보임.
문제는 Formula가 onDataLoad 시점에서 동작하지 않음. 정확히 어떤 시점에 Formula가 생성되는지 확인이 필요함. onSearchFinish 에서는 동작을 하지만 대용량 데이터의 경우 속도 이슈가  나올 수 있어 개발팀에 문의해보아야 함.

지원번호 36178
행추가를 연속적으로 할 때 STATUS 컬럼의 상태 글씨가 보이지 않는 현상



### Drag 할 때 특정 이미지로 애니메이션을 변경하는 기능

※ 해당 기능은 Ver 8.1.0.14-20230330-10 부터 추가되었습니다. (패치버전 Release Note 보기)CanDrag : 1이 설정된 시트에서 Drag & Drop 시 기본적으로 행객체 모양이 아래와 같이 드래깅되어 움직입니다.[드래그 시 애니메이션이 행객체 모양으로 표시됨(Default)](Events)onStartDrag 또는 (Events)onStartDragCell 이벤트에서 string을 리턴하는 경우 드래그로 보여지는 html 값이 리턴값으로 보여집니다.8.1.0.14 이상 버전에서 사용 가능합니다.


```javascript
onStartDrag:function (evtParam) {
    var sheet = evtParam.sheet;
    if (sheet.id === 'LeftSheet' && evtParam.row.sPos === '대표이사') {
      sheet.showMessageTime('대표이사는 이동할 수 없습니다.', 800);
      return true;
    }

    return ''; //드래깅 시 아이콘 표시

  },
```
[드래그 시 애니메이션이 fa-user 아이콘으로 표시됨][드래그 시 애니메이션이 fa-user 아이콘으로 표시됨]아래 예제에서 확인하실 수 있습니다.예제) https://jsfiddle.net/4rpd1teq/



## IBSheet 사용 시 발생하는 오류에 대해 해결방법을 가이드합니다.

### IBSheet가 있는 화면 접근 시 locale 경고가 뜨는 증상

please import locale file 오류 발생
IBSheet가 있는 화면에 접속 시 아래와 같이 경고 메세지가 뜨는 현상에 대한 가이드 입니다.please import locale file.the browser(or ibsheet)default language code is "En".
Try loading IBSheet default locale.

IBSheet 에서 별도의 언어를 설정하지 않은 경우 브라우저의 Locale에 해당하는 메세지를 사용하려고 시도합니다.시트에서 띄워주는 메세지를 브라우저 언어에 맞게 띄워주기 위함입니다.
이를 정적으로 특정 언어로 메세지를 표시하려면 (Cfg)MsgLocale 속성을 설정해 주시고, 해당하는 msg 파일을 호출해야 합니다.
전체 시스템에 동일한 메세지를 적용하시고자 하시면 ibsheet-common.js 파일에서 CommonOptions(static) 부분에 다음과 같이 추가해 주시면 됩니다.
```javascript
//ibsheet-common.js 에서 전체 시스템에 동일언어 적용

...


_IBSheet.CommonOptions = {
  Cfg: {
    MsgLocale : "Ko", //한국어 메세지 사용
 
    Export: {
      Url: "../assets/ibsheet/jsp/"
    }, // 엑셀다운 URL
    Alternate: 2, // 홀짝 행에 대한 배경색 설정
    InfoRowConfig: {
      Visible: 1,

...
```

아래와 같이 MsgLocale 설정 후 그에 맞는  msg 파일을 호출 해야 합니다.(ex : MsgLocale : "Ko" 이면  ko.js 파일이 링크가 걸려 있어야 함)
```javascript








```

msg 파일을 하나로 만들고 그 안에 ko, en, jp 등의 msg를 설정하는 방법도 가능합니다. SEE ALSO IBSheet가 있는 화면 접근 시 스크립트 에러 발생getLocale(method)


### IBSheet가 있는 화면 접근 시 스크립트 에러 발생

1. ibsheet.js가 없는 경우Uncaught ReferenceError: IBSheet is not defined
2. ibsheet-common.js가 없는 경우JS FILE Load Error
3. Locale 파일 없음Uncaught [IBSheet] Please import locale file. This browser(or ibsheet) default language code is "Ko". Please check your configuration.

해당 메시지는 locale 파일(언어 파일)을 호출하지 않아 발생하는 메시지입니다.IBSheet 라이브러리 내 ibsheet.js 파일 위치에 존재하는 loacle 폴더에서 사용하실 언어 파일을 호출하실 수 있습니다.ibsheet.js 호출한 뒤 아래와 같이 호출하시기 바랍니다.

```javascript


```
언어 파일은 한국어(ko.js), 영어(en.js), 중국어(cn.js), 일본어(jp.js) 사용 가능합니다.



### Sheet업그레이드 이후, TimePicker 사용 시, 스크립트 오류만 발생하고 동작 안되는 현상

Sheet 구버전을 사용하다가 최신버전으로 업그레이드 하였을 때, TimePicker를 사용하는 경우
```javascript
Cannot read properties of undefined (reading 'Head')
```
와 같은 오류가 발생하고 TimePicker가 동작이 안되는 현상이 발생할 때에는
최신 버전의 IBSheet8의 전체 파일을 가지고 있을 시에는 locale폴더에서 사용하는 언어에 맞는 파일을 업데이트 하여 보시기 바랍니다.또한, TimePicker에 형태가 깨지는 경우에는 사용하시는 테마에 맞춰 css도 최신버전으로 업데이트하여 보시기 바랍니다.

### 조회 시, 오류없이 렌더링이 되지 않는 경우 확인사항

onReceiveData이벤트를 통해 조회 된 데이터 확인 및 데이터의 구조를 확인할 수 있습니다.
조회 API에 따른 데이터 구조 관련사항은 메뉴얼(https://docs.ibleaders.com/ibsheet/v8/manual/#docs/events/on-receive-data)을 참고하여 주시기 바랍니다.
```javascript
// 조회된 내용에 대한 수정 예시
options.Events = {
    onReceiveData: function(evtParam) {
        var DATA = evtParam.data; // 조회 결과 데이터
        var parseData = JSON.parse(DATA); // string으로 들어오는 data parsing

        // 조회된 데이터 일부를 수정한다
        /**
         * 조회 데이터 구조
         * { data: [{}, {}], etc: []}
         */
        for (var i = 0; i < parseData.data.length; i++){
            var row = parseData.data[i];
            // AttrYn 컬럼에 값이 Y 인 경우 ConfirmFinish 컬럼에 "결정완료"를 설정
            if (row["AttrYn"] == "Y") {
                row["ConfirmFinish"] = "결정완료";
                row["CanEdit"] = 0;
            }
        }

        return parseData; // 파싱 후 수정된 데이터 return
    }
}
```


### Type: Int -> Float으로 변경 시 소수점이 안 나타날 때

Cell 타입을 Type: Int 에서 Type: Float으로 변경할 때 소수점이 표현되지 않는 경우 Format을 반드시 설정해 주셔야 합니다. 설정하지 않는 경우, 속성이 기존 Type: Int의 기본Format으로 설정되어 있기 때문에 소수점이 표현되지 않을 수 있습니다.
예제) Float Type으로 변경, .setAttribute(row, col, 'Type', 'Float');
Format을 #,##0.##으로 변경, .setAttribute(row, col, 'Format', '#,##0.##');https://jsfiddle.net/om5e9a48/

### 팝업창 시트에서 달력, 메시지 등이 안 보일 때

IBSheet의 달력, Enum리스트 등은 div로 만들어 졌습니다. z-index로 div의 배치 순서를 설정해야 합니다.(Cfg)ZIndex로 z-index값 변경 가능 합니다.Modal div 안에 위치한 시트 달력이나 Enum div가 보이지 않을 경우,ZIndex가 낮게 설정되어 있을 수 있으니 보이지 않는 div 객체의 z-index를 확인해 보시기 바랍니다.

### Formula가 동작하지 않을 때, 확인 사항

행(Row), 열(Column), 셀(Cell)에 속성(attribute)+Formula나, 열(Column)에서 Formula를 설정하셨을 때,
Formula가 동작하지 않는 다면 아래와 같이 설정이 되어 있는지 확인하여 주시기 바랍니다.

```javascript
//첫째, Formula 동작을 허용이 되어 있는지 확인하여야 합니다.
options.Def.Row.CanFormula = true;

//둘째, CalcOrder에 " "와 같이 뛰어쓰기가 되어있는지 확인하여야 하며,
//      구분자로 ","가 적용이 되었는지 확인하여야 합니다.
//셋째, 속성(attribute)에 Formula를 사용하는 경우에는 열(Column)이름 + 속성(attribute)로 기입하셔야 하고, 
//      열(Column)에 Formula를 사용하시는 경우에는 열(Column)이름만 기입하셔서 사용하실 수 있습니다.
//넷째, Formula동작은 CalcOrder에 나열된 순서대로 동작됩니다.
options.Def.Row.CalcOrder =  "itemCanEdit,preWeek1TextColor,preYear1Color,preWeek2Color,preWeek3HtmlPrefix"
```

예제)https://jsfiddle.net/nksh5z16/

### [IBSheet.create({id:'sheet'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id.

[IBSheet.create({id:'sheet'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id .Create 시 el 객체를 찾지 못하는 경우 발생하는 오류 메시지 입니다.

```javascript

        
        


...

IBSheet.create({
    id: "sheet",
    el: "sheetDiv3", // el 객체의 id
    options: option
});
```

시트를 생성할 div의 id는 sheetDiv3 인데, sheetDiv3 를 id로 가진 div 를 찾을 수 없을 경우 발생합니다.



### 시트 생성 시 시트 높이가 계속 늘어난다.

※ 해당 현상은 Ver 8.2.0.10-20241128-14 에서 패치되었습니다. (패치버전 Release Note 보기)시트 생성 후 시트 높이가 계속해서 늘어나거나, 시트가 사라지는 등의 현상은 브라우저 또는 PC의 배율이 100%가 아닐 경우 발생할 수 있습니다.
브라우저 배율을 90%, 150%와 같이 100%가 아닌 배율로 설정하는 경우, 시트 높이 계산을 정상적으로 하지 못해 시트 높이가 늘어나거나, 시트가 사라지는 현상이 발생할 수 있습니다.

[브라우저 배율 설정]

[PC의 배율 설정]

브라우저 배율이 변경 될 때 시트의 높이를 이를 정상적으로 계산하지 못하는 오류는 Ver 8.2.0.10-20241128-14에서 패치되었습니다.
만약 시트의 높이가 늘어나는 현상이 발생한다면, 시트의 버전이 8.2.0.10 이상인지 확인해보시기 바랍니다.
IBSheet는 기본적으로 확대/축소에 대한 기능을 지원하지 않습니다.제품의 동작은 브라우저 배율  100%, 윈도우 디스플레이 100% 일 때만 보장 됩니다.(Cfg) Size를 이용하여 시트 전체의 행 높이나 글자크기 등을 조절하여 축소/확대 되는 것처럼 보이게 할 수 있습니다.

[Size 기능을 활용한 ibsheet demo 사이트의 Size 조절바]





## 고객님께서 자주 문의하시는 질문과 그에 대한 답변을 모아놓은 게시판입니다. 
아래에서 원하는 정보를 쉽게 찾으실 수 있습니다.

### ✒️Type:"Lines" 에서 Enter key 설정 방법

Type: Lines에서 AcceptEnters를 속성을 통해, 특정 컬럼에 Enter Key 입력 시 동작을 지정할 수 있습니다.필터행에서도 Enter Key 입력에 대한 동작을 별도 지정할 수 있으며, 해당 속성은 Sheet 객체 구조의 Filter에 설정해야 합니다.
```javascript
options.Cols[ 
  { Name: "Lines컬럼명", AcceptEnters: 1, ... }
  , ...
];
options.Filter: {
  "Lines컬럼명": { AcceptEnters: 2 // 필터에서 Lines컬럼에서 Enter Key를 입력할 때 동작 설정 }
};
```



### 열(Column)이나 셀(Cell)의 타입 변경 방법

IBSheet7에서 InitCellProperty()를 통해 지원되었던 셀(Cell)의 타입(Type)을 setAttribute를 이용하여, 변경할 수 있습니다.
Type: Int인 만족도 컬럼을 소수점 2째 자리까지 출력하는 Float타입으로 아래와 같이 변경하실 수 있습니다.
```javascript
//만족도 열(Column)의 타입 변경, 셀(Cell)변경 시에는 null에 해당하는 부분에 변경하려는 행(Row)객체를 적용
sheet.setAttribute(null, "sSatisfaction", "Type", "Float");

//Type 변경 시, Type에 맞추어 Format도 변경해야 합니다. 2자리 수까지 상시 고정으로 출력
sheet.setAttribute(null, "sSatisfaction", "Format", "#,##0.00 \\%");
```

셀(Cell)의 경우에는 행(row)객체로 접근하여 속성을 변경하실 수도 있습니다.
```javascript
onDataLoad: function(evtParam) {
  //모든 행(row) 객체 추출
  var rows = sheet.getDataRows();
  //for문으로 각 행(row)객체에 접근
  for(var r of rows) {
    //각 행의 sSatisfactionType 열(Column)의 Type을 Float로 변경
    r["sSatisfactionType"]  = "Float';
    //각 행의 sSatisfactionType 열(Column)의 Format을 Float로 변경
    r["sSatisfactionFormat"] = "#,##0.00 \\%";
  }
  sheet.rerender();
}
```
위와 같이 렌더링이 완료되기 전이나 렌더링이 완료된 후(onSearchFinish)이벤트를 통해 셀의 타입을 변경하실 수 있습니다.마지막엔 반드시 다시 렌더링(rerender)를 하셔야 합니다.
Int와 Float와 같은 같은 숫자형이라고 하여도, 사용되는 Format이 틀리기 때문에 타입(Type) 변경 시에는 Format도 같이 변경하여야 합니다.
※ FormulaRow에서는 타입(Type)변경을 할 수 없기 때문에, 시트 생성 시, 풋(Foot) 영역에 커스텀행을 추가하여 사용하셔야 합니다.
예제)https://jsfiddle.net/bn37oLhd/

### setSize와 같은 동적으로 시트의 크기를 변경하였을 때, 컬럼 너비가 늘어나지 않을 경우 확인사항

컬럼의 너비는 Width와 minWidth를 통해 너비를 설정할 수 있습니다.이 중 동적으로 시트의 크기를 넓혔을 경우, Width를 통해 너비를 설정하였을 때에는 컬럼의 너비가 고정되기 때문에 설정된 값 이상으로 넓어지지 않습니다.반면, minWidth의 경우 최소 너비를 설정하였기 때문에 RelWidth나 Size변경등의 기타 동작에 의해 컬럼의 너비가 동적으로 변경될 수 있습니다.

### Enum Type과 같이 Value와 Text를 별도로 사용하는 경우, 현재 선택된 Value(EnumKey)와 Text(Enum) 추출하는 방법

Enum Type과 같이 화면에 출력하는 item이 Value와 Text를 사용하는 경우,Value는 EnumKeys속성을 통해 설정된 값을 호출하고, Text는 Enum속성을 통해 설정된 값이 호출이 됩니다.
이 중 Value에 해당하는 현재 선택된 Key값은 getValue를 통해 구할 수 있으며,현재 선택된 Text값은 getString을 통해 구할 수 있습니다.
예제)
```javascript
onAfterChange: function(evt) {
  if(evt.col == 'ComboData') { //구하려는 컬럼의 Name이 ComboData일 때
    console.log('Enum Text(Enum):'+evt.sheet.getString(evt.row, evt.col));
    console.log('Enum Value(EnumKeys):'+evt.sheet.getValue(evt.row, evt.col));
  }
}
```



### 조회가 완료되었을 때, 첫번째 행이 아니라 마지막 행에 포커스를 주는 방법

Cfg.IgnoreFocused를 true로 설정하여, 조회 후 첫번째 행 첫번째 열에 포커스를 주는 동작을 막고 난 다음,조회가 완료되었을 때, 동작하는 이벤트인 onSearchFinish에서 마지막 행에 focus를 설정합니다.예제)
```javascript
Events: {
  onSearchFinish: function(evtParam) {
    evtParam.sheet.focus(evtParam.getLastRow());
  }
}
```



### Int와 Float와 같은 숫자형 타입의 컬럼에 데이터가 숫자형이 아닐 때, NaN대신 다른 문자 출력 방법

Int, Float와 같은 숫자형 타입의 컬럼에 데이터가 숫자형이 아닌 문자열일 때,기본적으로는 셀에 NaN 이라는 문자가 표시되는 데,현재 사용 중인 언어팩 예) ko.js, en.js등의 파일에서Lang.Formant.NaN에 해당하는 값을 변경하여 출력 되는 문자열을 변경할 수 있습니다.

### 민감한 정보를 이용할 경우, 한 글자만 노출하고 나머지는 *로 출력하는 방법

CustomFormat기능을 사용하여 원본 데이터에 대한 마스킹을 설정할 수 있습니다.
예제)
```javascript
{"Header": ["회사명","회사명"],"Type": "Text","Name": "sCorp","Width": "100","Align": "Center","CanEdit": 0, 
  CustomFormat: function(v) {
    var repstr = '';
    for(var i = 0; i < v.length -1; i++) { //문자열에서 한 글자만 제외한 만큼
      repstr += "*";
    }
    return v.substr(0, 1) + repstr; // 첫 글자만 정상 출력하고 나머지는 *로 마스킹
  }
}
```
CustomFormat을 처리한 셀을 클릭할 때에는 마스킹을 해제하였다가, 다른 셀을 클릭하였을 때에는 다시 마스킹 처리https://jsfiddle.net/ratbq6h4/

### SEQ 컬럼 순번을 유지하는 방법

Sheet8의 SEQ컬럼은 Sequence와 같이 자동으로 일련번호(1,2,3,4.....)를 생성해 주는 컬럼 입니다.데이터행의 변화(Sort, Filter, hideRow, deleteRow)가 있어도 무조건 1부터 번호를 생성하여 줍니다.
[조회]
[Sort 후]
[Filter 후]

만약, 조회했던  순번을 그대로 유지하고 싶다면 Name:"SEQ" 컬럼 대신에 아래의 방법을 이용해야 합니다.
1. 조회 데이터에 Sequence 데이터를 포함 하여 조회 하는 방법
    숫자 컬럼을 만든 후 데이터를 1,2,3,4....와 같이 조회한다.
2. Formula 기능을 이용하여 1,2,3,4...와 같이 보이도록 설정한다.
[예제 코드]
```javascript
"Def": {
    "Row": {
      "CanFormula": true,
      "CalcOrder":"nSeq"
    }
  },
  //틀고정 좌측 컬럼 설정
  "LeftCols": [
    /*{"Type": "Int","Width": 50,"Align": "Center","Name": "SEQ"}*/
    {Header: "순번", Type: "Int", Width: 50, Align: "Center", Name: "nSeq"
       , Formula: function(fr) {return fr.Row.id.substring(2);}
    }
  ],
```

[설정 후 Sort]
샘플 : https://jsfiddle.net/apbftnuj/1/
추가로,  조회시 SEQ 컬럼값을 내림차순(역순) 으로 생성하는 방법과 예제 는 아래와 같습니다.
[예제 코드]
```javascript
"Def": {
    "Row": {
      "CanFormula": true,
      "CalcOrder":"nSeq"
    }
  },
  //틀고정 좌측 컬럼 설정
  "LeftCols": [
    /*{"Type": "Int","Width": 50,"Align": "Center","Name": "SEQ"}*/
    {Header: "순번", Type: "Int", Width: 50, Align: "Center", Name: "nSeq"
      , Formula: function(fr) {return (fr.Sheet.getDataRows().length+1) - fr.Row.id.substring(2);}
   }
  ],
```
[조회 결과]

샘플 :  https://jsfiddle.net/4Ltrvxb5/2/
이렇게 설정하게 되면 행의 변화가 있을때에도 그대로 유지된다.
[Filter 후]





### 조회 후 고정된 행을 제외한 Count를 표시하는 방법

IBSheet는 시트 상단 혹은 하단에 별도의 행을 통해 조회된 데이터의 개수나 페이지 네비게이션을 설정하는 InfoRowConfig 기능을 제공합니다.
InfoRowConfig는 기본적으로 시트 전체 공통 설정을 하는 파일인 ibsheet-common.js 에 정의되어 있습니다.
데이터 행의 갯수를 표시하는 Count 는 Format을 통해 변경할 수 있습니다.
만약 개별 화면에서 InfoRowConfig 설정을 하지 않았는데도 건수가 표시된다면, 공통 설정된 infoRow가 표시된 것입니다.Count의 기본값은 [BOTTOMDATAROW / TOTALROWS] 가 표시됩니다.

문제는 TOTALROWS 값은 서버 데이터 전체 건수이기 때문에 조회 후 고정을 해서 데이터 영역에서 빠져도 그 갯수가 유지되는 점입니다.
해당 화면에서만 공통에 설정된 기본값 [BOTTOMDATAROW / TOTALROWS] 이 아닌 개별 시트의 Cfg에서 infoRow를 새롭게 표시할 수 있습니다.Format을 [BOTTOMDATAROW / VISIBLECOUNT] 로 설정하시면 해결됩니다.
해당 시트에 아래와 같이 설정해주세요.
options.Cfg = {    InfoRowConfig: {        "Visible": true,        "Layout": ["Paging","Count"], //페이징과 갯수 표시        "Space": "Bottom", //하단에 위치        "Format": "[BOTTOMDATAROW / VISIBLECOUNT]" //전체 데이터 개수가 아닌  보이는 데이터 개수로 변경    }

이 경우, 공통을 건드리지 않고도 해당 화면에서만 다른 Format으로 변경이 가능합니다.
단, VISIBLECOUNT 의 경우 보이는 데이터 행의 갯수이기 때문에 fixed 되어 고정행으로 이동되거나, Visible:0 속성을 가져 보이지 않는 행은 포함되지 않습니다.



### Bool Type의 Checkbox의 크기 조절, border 수정 방법

Bool Type 사용 시, Checkbox는 default/main.css 기준Size에 따라
```javascript
.IBBig .IBBoolImage {
    height: 49px;
    width: 24px
}

.IBHigh .IBBoolImage {
    height: 39px;
    width: 24px
}

.IBNormal .IBBoolImage {
    height: 29px;
    width: 14px
}

.IBLow .IBBoolImage {
    height: 24px;
    width: 12px
}

.IBSmall .IBBoolImage {
    height: 19px;
    width: 12px
}

.IBMini .IBDataRow .IBBoolImage {
    height: 17px;
    width: 16px
}
```
높이와 너비를 관리하고 있습니다.
해당 css들을 통해 높이 및 너비를 수정하실 수 있습니다.
Checkbox의 border 및 기타 속성을 변경하고자 하시는 경우에는(Col) BoolIcon속성을 통해, input type이나 div 객체를 이용하는 방법을 사용하실 수 있습니다.
이중 BoolIcon: 4로 설정하여 input type="checkbox"로 사용하실 때, Checkbox를 변경하는 방법을 예제로 전달 드립니다.BoolIcon: 4로 사용하실 경우 해당 Checkbox로 관리되는 css는 아래와 같습니다.
```javascript
.IBBoolInput {
    margin: 8px auto 8px auto;
    padding: 0px;
    display: inline-block;
}
```

하지만, border나 형태를 변경하여 사용하시고자 하시는 경우에는 아래와 같이 기본 Checkbox를 감추고 다른 형태를 출력하는 방법으로 사용하실 수 있습니다.
```javascript
input[type="checkbox"].IBBoolInput {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  height: 30px;
  outline: 0;
  width: 30px;
}
input[type="checkbox"].IBBoolInput::after {
  border: solid #fff;
  border-width: 0 2px 2px 0;
  content: '';
  display: none;
  height: 40%;
  left: 40%;
  position: relative;
  top: 20%;
  transform: rotate(45deg);
  width: 15%;
}
input[type="checkbox"].IBBoolInput:checked {
  background: #505bf0;
}
input[type="checkbox"].IBBoolInput:checked::after {
  display: block;
}
```

[BoolIcon: 4 적용 예제]https://jsfiddle.net/wqpg1ux5/
감사합니다.

### Date Type 이용 시, 캘린더에서 특정일 혹은 특정 기간만 사용하는 방법

onReadCanEditDate이벤트를 통해 캘린더에서 특정일 이나 특정 기간만 사용이 가능하도록 설정할 수 있습니다.
true, false로 리턴하여, 해당 날짜에 대한 사용여부를 선택할 수 있습니다.
아래는 오늘 이전의 날짜는 사용이 불가능 하도록 설정한 예제입니다.

```javascript
onReadCanEditDate:function(evt) {
  var today = new Date().setHours(0, 0, 0, 0); // 자정 시간으로 설정
  if(evt.date < today) {//오늘 이전날짜인 경우, 선택 불가
    return false;
  }
}
```

아래는 오늘부터 7일 뒤까지만 선택 가능하도록 설정한 예제입니다.

```javascript
onReadCanEditDate:function(evt) {
  var now = new Date().setHours(0, 0, 0, 0); // 자정 시간으로 설정
  var after7day = new Date(new Date().setHours(0, 0, 0, 0)); // Date 객체로 생성하여야 날짜 설정이 가능
  after7day = after7day.setDate(after7day.getDate() + 7);
    
  if(evt.date < now || evt.date > after7day) {
    return false;
  }
}
```


### Date Type 사용 시 Format 설정하기


IBSheet는 날짜 컬럼(Type:"Date")에 대해 다양한 달력 및 다이얼로그를 제공합니다.
날짜 컬럼은 다양한 Format 설정에 따라 상황별 데이터 형식을 설정할 수 있습니다.날짜 컬럼 설정에 필요한 Format은 아래와 같습니다.
- (Col)Format : 원본 데이터에 대한 마스킹된 데이터를 정의- (Col)DataFormat : 날짜 타입의 열에서 로딩할 데이터의 포맷을 설정- (Col)EditFormat :   사용자가 셀을 더블클릭하여 편집모드로 들어갔을 때 보여 줄 포맷을 설정
날짜의 Format은 y(년), M(월), d(일), H(시간), m(분), s(초)등의 예약어와 예약어를 제외한 문자를 조합해서 사용 가능하며,포맷이 비어있는 경우 yyyy/MM/dd 형식을 기본값으로 사용합니다.


```javascript
options.Cols = [
        {
            Name:"sDate_YmdHms",
            Type:"Date",
            Format:"yyyy.MM.dd", //화면에 보이는 데이터의 형식
            EditFormat:"dd-MM-yyyy", //편집시 사용자에게 보여질 데이터 형식
            DataFormat: "yyyyMMddHHmmss" //DB에서 받아온 데이터의 형식
        }
        ...
    ]

...
 'data': [{
    "sDate_YmdHms": "20130423091020",

...
}
```
위 예제의 경우, DB에서 불러온 데이터는 '20130423091020' 입니다.이를 날짜 타입의 열에서 로딩하기 위해서 DataFormat 설정이 필요합니다.
▼ Format : 시트에 조회되는 값(yyyy.MM.dd)

▼ EditFormat : 편집 시 보여지는 값(dd-MM-yyyy)



날짜 컬럼의 값을 메소드로 값을 확인하는 경우, 메소드 별로 값이 다를 수 있습니다.

▼ 메소드 별로 값이 다름
- getValue 는 특정 셀의 값을 구분자를 제거하고 가져오기 때문에 Format이 제거된 원본 데이터를 가져옵니다.- getString 은 포맷이 적용된 문자열을 가져옵니다.- getFirstRow 와 같은 행 객체에는 실제 내부값인 타임스탬프를 가져옵니다.


Date타입과 그에 따른 포맷을 Extend 속성을 통해 한번에 정의할 수 있습니다.


ALSO
Date Type 이용 시, 캘린더에서 특정일 혹은 특정 기간만 사용하는 방법달력 종류와 관련 기능, 이벤트 확인하기 
날짜를 뽑았을 때(getValue) 타임스탬프로 나오는 경우




### 달력 종류와 관련 기능, 이벤트 확인하기

IBSheet8의 다양한 달력 종류와 관련 기능, 달력 별 이벤트를 확인합니다.
목록1. Format 별 달력 종류2. 달력 관련 추가 기능3. 달력 별 이벤트


1. Format 별 달력 종류(Col)EditFormat 은 사용자가 셀을 더블클릭하여 편집모드로 들어갔을 때 보여 줄 포맷을 설정합니다.EditFormat 에 설정한 Format에 따라 달력 아이콘/시계 아이콘 클릭 시 표출되는 달력 종류가 다릅니다.1) 기본 일자달력(Ymd)2) 년월달력(Ym)3) 년도 달력(yyyy)※ 월 달력은 제공하지 않습니다.4) 시분초 다이얼로그(Hms)5) 시분 다이얼로그(Hm)6) 시분초를 포함한 일자달력(YmdHms)7) 시분을 포함한 일자달력(YmdHm)2. 달력 관련 추가 기능- (Cfg) Weeks 설정 시 달력의 주차를 표시할 수 있습니다.- (Col) CalendarButtons 설정 시 달력 하단에 버튼을 설정할 수 있습니다.
▼ 년월일 달력(CalendarButtons:6)
▼ 년월 달력(CalendarButtons:7)

- (Cfg) AutoSelectYm 설정 시 년월 달력에서 확인 버튼이 사라지고 월 클릭값으로 입력됩니다.
▼ 년월 달력에서 확인버튼 사라짐
- (Col) Range 설정 시 드래그를 통해 달력내에 여러 일자를 선택할 수 있습니다.※ 년월 달력에서는 기능을 제공하지 않습니다.
- (static) showCalendar 을 통해 캘린더를 시트 외부 input 객체 주변에도 사용 가능합니다.
▼ 외부 input 에 달력 컨트롤 사용
- (Cfg) AutoCalendar 는 시트의 날짜 타입 셀 편집모드에 들어갈 때 달력을 띄울지 여부를 설정합니다.   (Col, Cell 설정도 가능)
▼ 달력 아이콘이 사라지고 편집모드 시 달력이 오픈됨- 시간 포맷 설정 시 TimePicker 설정을 통해 시분초 아이콘을 띄울 수 있습니다.- (Col)Interval 설정 시 TimePicker 의 시간 조절 증감 단위를 설정합니다.▼ TimePicker 설정3. 달력 별 이벤트
- (event) onReadDate 는 달력창을 보여줄 때 달력 내 생성되는 모든 날짜들에 대해 호출되는 이벤트입니다.
```javascript
onReadDate:function(evtParam){
    //달력에서 매월 15일은 두꺼운 오렌지 색으로 표시
    var date = evtParam.date;
    if (date.getDate() == 15) {
        return "" + evtParam.text + "";
    } else {
        return evtParam.text;
    }
}
```
※ 년월 달력 및 시간 다이얼로그는 이벤트가 발생하지 않습니다.
- (event) onReadCanEditDate 는 달력창을 보여줄 때 달력 내 생성되는 모든 날짜들에 대해 호출되는 이벤트입니다.True/False를 리턴하여 날짜를 사용할지 여부를 선택할 수 있습니다.
※  년월일 달력 표출시에만 발생합니다.

- (event) onShowCalendarYm 는 년월 달력창을 보여줄 때 달력 내 생성되는 모든 년/월들에 대해 호출되는 이벤트입니다.True/False를 리턴하여 날짜를 사용할지 여부를 선택할 수 있습니다.
※  년월 달력 표출시에만 발생합니다.



ALSODate Type 이용 시, 캘린더에서 특정일 혹은 특정 기간만 사용하는 방법Date Type 사용 시 Format 설정하기

### 날짜를 뽑았을 때(getValue) 타임스탬프로 나오는 경우

날짜 컬럼(Type:"Date")의 값을 getValue() 로 값을 추출했을 때 간혹 타임스탬프로 나오는 경우가 있습니다.
Date 타입의 날짜 컬럼은 내부적으로 실제 값을 타임스탬프 형식으로 가지고 있습니다.getValue() 로 값을 뽑았을 때 타임스탬프로 나온다면  (Col)DataFormat을 설정하지 않았을 것으로 보입니다.
데이터가 "20241120"으로 들어왔다면 이 데이터가 "yyyyMMdd" 형식으로 들어왔음을  (Col)DataFormat을 통해 설정해주어야 합니다. 
(Col)DataFormat을 설정하지 않으면 기본 설정 값으로 값을 표시하지만, (포맷이 비어있는 경우 yyyy/MM/dd 형식을 기본값으로 사용합니다.)getValue() 으로 데이터를 뽑았을 때 내부 값인 타임스탬프가 추출됩니다.




다양한 날짜 Format과 관련된 설명은 아래 연관글을 참조해주세요.



ALSODate Type 사용 시 Format 설정하기
Date Type 이용 시, 캘린더에서 특정일 혹은 특정 기간만 사용하는 방법달력 종류와 관련 기능, 이벤트 확인하기 





### ☑️머지된 영역에 값 복사/붙여넣기 시 첫번째 셀에만 값이 들어가는 경우

Merge 기능은 가장 좌측 상단에 위치한 첫 번째 셀의 값을 기준으로 표시합니다.즉, Merge 동작 시 첫 번째 셀 이외 셀의 값은 보이지 않지만 기존 값을 가지고 있을 수 있습니다.

MergeCellsMatch : 1 설정 시 머지된 데이터 수정 할 때에 전체 머지 영역의 데이터를 수정합니다.
메뉴얼 링크) https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/merge-cells-match

해당 기능은 8.0.0.7 이상에서 사용 가능합니다.셀을 더블클릭하여 값을 수정하거나 setValue 등으로 값을 수정할 경우에 변경되며,8.1.0.49 버전 이상부터는 복사/붙여넣기를 통한 값 변경에도 적용되도록 수정되었습니다.

ibsheet 버전이 8.1.0.49 이상인지 확인해보시고,Cfg 에 MergeCellsMatch 속성을 설정해주시기 바랍니다.

### 타임리프(Thymeleaf) 환경에서 시트를 구현하는 방법

thymeleaf 를 이용한 프레임웍 구축 후 시트 화면을 호출 하실 때,  js 포함 시트div 를 가져온다면 사용상 제약사항은 없습니다. 
Ibsheet 제품을 사용하기 위해서는 ibsheet.js를 포함한 제품 파일을 웹페이지에 import 해주신 뒤, IBSheet 객체를 화면에 추가해주시면 됩니다.
down2Excel.jsp와 같은 서버모듈 관련 jsp을 서블릿으로 변환한 파일은 아래 링크 참조
https://portal.ibsheet.com/support/solutions/articles/72000591795-3-%EC%84%9C%EB%B2%84%EB%AA%A8%EB%93%88-spring-spring-boot-multipartfilter-%EC%A0%81%EC%9A%A9-%ED%9B%84-%EC%97%91%EC%85%80-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EC%97%85%EB%A1%9C%EB%93%9C-%EB%90%98%EC%A7%80-%EC%95%8A%EC%9D%84%EB%95%8C

## 제품과 관련된 라이선스 정보를 제공합니다. 라이선스의 정책 및 적용 방법을 확인하실 수 있습니다.

### ibsheet8 최신버전 적용 방법

최신 버전을 적용하여 업그레이드하는 방법입니다.ibsheet 제품은 사용자의 요구사항에 맞게 수정이 가능하기 때문에 무조건적으로 파일을 덮어쓸 수 없습니다.필요 시 기존 파일과 비교적용 되어야 합니다.
아래 내용 참고 바랍니다.
 bin/ibsheet.js 파일 업데이트
 제품 코어 파일입니다. 이 파일은 필수로 업데이트 필요 합니다.
 bin/css 폴더
 ibsheet.js 업그레이드되면서 기능이 추가될 수 있습니다.
 관련 기능을 이용하려면 css도 같이 업데이트 되어야 합니다.
 main.css 파일을 프로젝트에서 수정하지 않았다면 그냥 덮어쓰기 하시고 수정하였다면 파일 비교를 하여서 반영해야 합니다.
 
 ※ 단, main.css 파일에서 css 수정을 하지 않고 다른 파일 (ex: ibsheet_desinn.css) 에서 시트 관련 css를 수정하였다면 엑셀 다운로드 시 디자인 반영되지 않음
 [CSS 적용하지 못하는 예시]https://jsfiddle.net/t9j8nmLb/ bin/locale
 ibsheet.js 가 업그레이드 되면서 메세지가 추가 될 수 있습니다.
 각 메시지 내용 역시 수정이 가능하기 때문에 비교한 뒤 추가된 항목을 업데이트 하시기 바랍니다. bin/plugins
 - ibsheet-common.js 파일은 프로젝트에서 변경하여 이용 가능 합니다.
 따라서 추가된 신규 기능을 사용할 시 해당 파일을 반드시 이전과 비교하여 적용해주셔야 합니다. 

예를 들어, 시트의 헤더에서 마우스 우클릭 시 뜨는 메뉴 부분이 ibsheet-common.js에 있습니다.
 
 [기존] 클릭한 헤더 하나만 감추기 가능
  
[변경 후] 헤더의 list가 표시되며 체크박스로 감추기/보이기 가능
 (ibsheet-common.js 1.0.6-20240314-17 버전에서 기능이 추가되었습니다.)
 
 


이와 같은 부분을 적용하고 싶으시면 파일 비교하여 적용하시기 바랍니다.
 나머지 파일은 그냥 덮어쓰기 하셔도 됩니다.

- ibsheet-dialog.js 파일도 프로젝트에서 변경하여 이용 가능 합니다.
 기존 다이얼로그를 변경하여 사용하거나, 커스텀 다이얼로그를 추가했을 수 있으니 비교 적용하시기 바랍니다. 서버모듈
 Ver : ibsheet8-x.x.x.jar
 이 폴더 안의 파일들이 서버에서 엑셀 다운로드/업로드 하기 위해서 필요한 파일입니다.아래 url을 참고하여 환경을 구축하시고 기타 엑셀 오류 처리 방법 등을 확인하시기 바랍니다.
 https://portal.ibsheet.com/support/solutions/folders/72000394868  
이상입니다.

### 라이선스 정책

1. License 정책    IBSheet 제품을 사용하는 화면 접속 시 해당 사이트에 제품이 사용 가능한지 체크 하는 정책입니다.2. License 체크 기준브라우저 주소창에 입력되는 url을 기준으로 체크합니다.기본적으로 127.0.0.1와 localhost는 체크 하지 않으며 그 외의 도메인과 IP, Port까지 모두 체크합니다.만약 사이트의 접속 경로가 여러 개일 경우, 모든 URL에 대해서 라이선스를 발급해야 합니다.3. 라이선스 종류라이선스 종류는 정식(운영) 또는 개발(개발 및 테스트)이 있습니다.- 정식 라이선스(영구적으로 사용)제품 구매 여부 확인 후 구매한 서버에 대해서는 영구 라이선스로 발급됩니다.- 개발 라이선스 (기간제한)제품을 구매하지 않은 서버는 최대 1년 까지 사용 가능한 기간 제한용 라이선스로 발급됩니다.무상 유지보수 기간 (구매 후 1년) 이후에는 유상 유지보수 확인 후 개발 라이선스가 재발급 됩니다.4. 기타 참고사항1) IP 또는 도메인이 여러 개인 경우하나의 서버에서 여러 개의 url 을 설정하여 사용할 경우, 모든 url 을 작성하여 라이선스 발급을 신청합니다.- 192.168.0.11 서버에서 포트를 여러 개 설정(80,8080,8081)- 도메인도 여러 개인 경우http://192.168.0.1http://192.168.0.1:8080http://192.168.0.1:8081http://www.ibsheet.comhttp://ibsheet.comhttps://www.ibsheet.comhttps://ibsheet.comhttp://www.ibsheet.com:8091http://ibsheet.com:8091https://www.ibsheet.com:8091https://ibsheet.com:8091아래 SEE ALSO에서 라이선스 발급 요청 양식을 확인하실 수 있습니다.2) 서버의 ip 나 port,  url 변경된 경우 서버 이전이나 도메인 변경에 따른 라이선스 재발행은 아래 2가지 경우를 확인하세요.- 정식(영구) 라이선스 : 계약 시점의 서버 스펙과 동일한 경우, 영구 라이선스는 무상으로 발급 지원합니다.단, 서버 증설과 같은 서버 스펙에 대한 변경은 반드시 영업팀에 해당 내용을 고지하시고, 변경된 라이선스키를 재발급 받으시기 바랍니다.- 개발 라이선스 : 무상 또는 유상 유지보수 기간 내에는 라이선스 재발행이 가능합니다.

SEE ALSO 라이선스 발급 요청 양식라이선스 적용하기라이선스 오류별 해결 방법



### 라이선스 발급 요청 양식

제품 사용 라이선스키는 제품이 포함된 화면에 접속 시, 해당 사이트에 제품이 사용 가능한지를 체크합니다.
브라우저 주소창에 입력되는 URL 기준으로 체크되므로, 사용하는 URL 정보를 기입하여 라이선스키 발급을 요청해야 합니다.
라이선스 요청 양식은 아래와 같습니다.
안녕하세요                     (주)아이비리더스입니다.제품을 사용하기 위해서는 라이선스를 발급 받아야 합니다.발급을 위해서는 아래의 정보들이 필요합니다.
* 발급 필요 정보
==========================================
      제품명 :               (IBSheet7, IBSheet8, IBChart, IBOrg)
==========================================1. 고 객 사 명 :  
2. 개 발 사 명 :  
3. 프로젝트명 : 
4. 발급요청인 정보 
   (1)이름 :        (2)발급요청인 소속 회사 :        (3)발급요청인 전화 번호 :       (4)발급요청인 이메일 주소 : 
5. 발급요청일 : 
6. 라이선스 종류 : 
  - 개발     날  짜 제 한 : (예) 120일 
7. 서버 정보
    - 서비스 URL 정보                ==============================

- 사용상에 문제가 있거나 문의하시려면 아래로 연락바랍니다.    - (주)아이비리더스   Tel : 02)1644-5615


아래 작성 예시를 참조하세요.
안녕하세요                     (주)아이비리더스입니다.제품을 사용하기 위해서는 라이선스를 발급 받아야 합니다.발급을 위해서는 아래의 정보들이 필요합니다.
* 발급 필요 정보
==========================================
      제품명 :  IBSheet8                     → IBSheet8과 IBChart 구매한 경우 [ IBSheet8 + IBChart ] 로 기입==========================================1. 고 객 사 명 :  아이비리더스 → 고객사 업체명
2. 개 발 사 명 :  XX정보통신  → 개발사 명
3. 프로젝트명 : CRM 시스템  → 프로젝트 명
4. 발급요청인 정보  → 라이선스를 요청하는 요청자의 연락 가능한 정보를 기입 
   (1)이름 :  홍길동      (2)발급요청인 소속 회사 :  아이비리더스      (3)발급요청인 전화 번호 : 010-0000-0000      (4)발급요청인 이메일 주소 : support@ibleaders.co.kr
5. 발급요청일 : 2023-05-04
6. 라이선스 종류 :   → 정식(운영) 또는 개발(개발 및 테스트)을 입력
  - 개발     날  짜 제 한 : 120일 
7. 서버 정보   → 사용하는 url 정보를 전부 기입
    http://www.ibsheet.com    https://www.ibsheet.com    http://www.ibsheet.com:8090    https://www.ibsheet.com:8090
    http://192.168.0.1:9090    http://192.168.0.1:9091    https://192.168.0.1:9090    https://192.168.0.1:9091                ==============================

- 사용상에 문제가 있거나 문의하시려면 아래로 연락바랍니다.    - (주)아이비리더스   Tel : 02)1644-5615









### 라이선스 적용 하기

1. 라이선스 동작 방식ibleaders 변수의 license 키값을 읽어 동작한다.  2. 라이선스 적용 하기    1) 라이선스 처음 적용하기
ibsheet.js/ibUpload.js/ibTab.js 등 코어파일에서 ibleaders 변수를 읽을 수 있도록 설정

ibsheet.js가 읽히기 전에 제품과 같이 배포 되는 ibleaders.js 파일을 모든 페이지에 include 하거나 프로젝트에서 공통으로 사용하는 javascript 파일에 ibleaders.js 파일에 있는 ibleaders 변수를 추가하여 사용 가능하다.[웹페이지에 ibleaders.js 파일 링크 추가]

[공통으로 사용하는 script 파일에 ibleaders 변수 설정]
common.js 파일을 ibsheet가 있는 모든 화면에서 호출한다는 가정 하에 ibleaders 변수 설정
발급받은 키 값 적용하기

라이선스 요청양식을 통해 발급 받은 라이선스 키 값을 아래와 같은 방법으로 license 에 적용한다.

 [ibleaders.js 파일 내용] 

2) 라이선스 갱신 하기

이미 적용된 라이선스를 갱신해야 하는데 ibleaders.js 파일이나 ibleaders 변수가 설정된 파일을 찾기가
어렵다면 아래 내용을 확인 한다.
F12키로 개발자도구를 띄운 후 네트워크 탭으로 이동한다.

브라우저에서 페이지를 강력 새로고침 한다.

개발자도구(F12)에서 Ctrl + F 키로 찾기창을 띄운다.

ibleaders 를 입력 후 찾기를 하면 ibleaders 변수 설정 부분을 찾을 있다.
ibleaders 변수에 새로 발급 받은 라이선스 키를 적용한다.
   


3) 라이선스 적용 확인제품이 있는 페이지에 접속한다.

제품이 있는 프레임에서 라이선스 키 값을 확인한다.
제품이 있는 프레임에 들어간다.(왼쪽 상단 네모 선택 후 화면 클릭)콘솔창에 ibleaders 변수를 입력한다.새로 적용한 라이선스 키가 맞는지 확인한다.

3. 라이선스 확인 하기라이선스 적용 후 경고창이 뜬다면 라이선스 오류별 해결방법 페이지를 확인하여 해결한다.


### 라이선스 오류별 해결 방법

라이선스 오류는 크게 4가지가 있습니다.번호오류 메세지 내용설명1License does not exist.(1)라이선스가 없거나 빈값인 경우2License is not valid.(1)허용되지 않은 URL에서 제품을 사용한 경우3License has expired.(1)사용기간이 만료된 경우4Version is incorrect.(1)라이선스 유효기간과 제품의 버전이 일치하지 않는 경우 메시지와 같이 나오는 숫자는 제품의 종류를 의미한다.(1: ibsheet7, 2 : ibchart, 3 : ibtab/ibupload, 8 : ibsheet8)1. License does not exist.(1) -> 라이선스가 없는 경우입니다.오류가 발생하는 화면에서 라이선스 키를 담고 있는 ibleaders.js를 호출하지 않았거나, ibleaders.js 파일 안에 있는 ibleaders 변수에 licesne 키값을 넣지 않을 때 발생합니다. 2. License is not valid.(1)-> 라이선스가 있으나 URL 정보가 발급 신청한 정보와 다른 경우입니다.    라이선스 발급 신청서에 기재되지 않은 URL은 허용되지 않기 때문에, 현재 접속한 경로의 URL 정보를 확인해서, 발급확인서의 정보와 비교해 보셔야 합니다.만약 URL이 추가되었다면 라이선스키 재발급을 요청하시기 바랍니다. (E-mail : support@ibleaders.co.kr)3. License has expired.(1)-> 라이선스 사용기간이 만료된 경우입니다.기간 제한이 있는 개발 라이선스에서 발생합니다. 이 경우, 라이선스 갱신을 요청하셔야 합니다. 만약, 운영 서버에서 해당 오류가 발생한 경우, 개발용 라이선스를 잘못 적용했을 수 있습니다. 영구 라이선스를 신청하여 적용하시기 바랍니다.4. Version is incorrect.(1)-> 라이선스의 유효기간과 사용하는 제품 버전이 일치하지 않는 경우입니다.제품 업그레이드 후 발생할 수 있습니다. 라이선스를 재발급 받아 적용해야 합니다.※ 라이선스를 교체하였는데도 여전히 오류메시지가 발생하는 경우, 캐시 문제일 수 있습니다.최근에 운영중인 시스템의 도메인이 바뀌거나 추가되면서 새로운 라이선스를 발급 받아 적용한 경우, 캐시 문제로 교체된 라이선스가 적용되지 않을 수 있습니다.이 경우, 라이선스를 담고 있는 js파일을 화면에 include할 때 브라우저가 캐싱하지 못하도록 아래와 같이 임의의 숫자나 정보를 붙여주어야 합니다.

```javascript


```



해결이 어려운 경우 아래 연락처로 문의하시기 바랍니다.(Tel. 02-1644-5615 ARS 2번 기술지원)SEE ALSO 라이선스 발급 요청 양식라이선스 적용하기라이선스 정책



## IBSheet8 기초교육 동영상 및 공지사항을 확인할 수 있습니다. 

### IBSheet 기초 교육 신청 안내

IBSheet 기초 교육에 관심을 가져주셔서 감사합니다.아래는 교육 신청과 관련된 자세한 정보입니다.교육 목적IBSheet 기초 교육은 IBSheet의 기본 기능과 사용법을 익히고자 하는 분들을 위해 마련되었습니다. 교육을 통해 IBSheet를 효과적으로 활용할 수 있는 기초 지식을 습득하실 수 있습니다.교육 일정일시: 신청 링크에서 교육 일정 확인 가능장소: 서울 영등포구 양산로 91 리드원센터 711호         2, 5호선 영등포구역 1번 출구에서 도보 300m (https://naver.me/xGIyHLce)신청 링크IBSheet8 교육 신청 : ibsheet8 교육 신청 바로 가기신청 방법[신청 링크]를 클릭하여 신청서를 작성해 주세요.신청서 제출 후, 확인 이메일을 통해 교육 참여 여부를 안내해 드립니다.참가비무료추가적인 문의사항이 있으시면 언제든지 1644-5615 (ARS 2번 – 기술지원) 으로 연락 주시기 바랍니다.

### IB Sheet8  기초 교육 동영상 입니다.


IB Sheet8 기초 교육 동영상입니다.
아래 URL을 클릭하세요.https://github.com/ibsheet/ibsheet8-tutorial

## IBSheet 패치 내역을 확인합니다. 제품은 매주 목요일 정기 릴리즈됩니다.

### 릴리즈 노트 초안

New- 년도 달력 추가

Fixed- 클라이언트 모듈로 엑셀 다운로드 시 Mode 옵션이 제대로 적용되지 않는 현상 수정

### Ver 8.3.0.18-20250703-13

New1. (Cfg)StyleRowConfig 에 스타일행의 input을 표시하거나 숨길 수 있는 Extend 옵션 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정할 수 있는 StyleRowConfig에 Extend 옵션이 추가되었습니다.사용 시 처음 렌더링 시 '헤더행', '데이터행' 버튼의 펼쳐짐 여부를 설정할 수 있습니다.ValueTypeDescriptionExtendboolean처음 랜더링 시 '헤더행', '데이터행' 버튼의 펼쳐짐 여부 (default: true)
[사용 예시]options.Cfg = {  StyleRowConfig: {    Visible: true,    StorageType: 2,    ServerUrl: "./ibsheet/styleInfo.jsp",    AutoLoad: true,    Themes: {      Mono: "./assets/ibsheet/css/mono/main.css", // css 파일 내의 클래스를 key와 일치되도록 수정 필요      IBGY: "./assets/ibsheet/css/gray/main.css"    },    Extend : true // 처음 렌더링 시 '헤더행','데이터행' 버튼을 펼침  }};
[Extend: false 스타일 행 렌더링 예시]
[Extend: true 스타일 행 렌더링 예시]
2. Def의 Header, Row에 스타일 관련 설정을 할 수 있는 (Method)setCurrentStyle, getCurrentStyle, clearCurrentStyle 추가 localStorage 등에 문자열로 저장하는 등의 작업을 위해, 현재 Def에 설정된 테마, 배경색, 글자색 및 Alternate 색상, 글자크기 정보를 문자열로 꺼내거나 컨트롤 하는 setCurrentStyle, getCurrentStyle 이 추가되었습니다.getCurrentStyle 로 리턴되는 문자열은 현재 시트의 Def에 설정된 배경색, 글자색 및 Alternate 색상, 글자크기 정보 값을 가지고 있습니다.
localStorage, sessionStorage 에 저장한 현재 스타일 정보를 제거할 때는 clearCurrentStyle 을 사용할 수 있습니다.* (Cfg)StorageSession 값이 0 인 경우에는 clearCurrentStyle 로 스토리지에서 관련 정보를 삭제할 수 없습니다. 사용을 위해서는 StorageSession :1 을 설정해야 합니다.
[사용 예시] 
// 현재 시트의 컬럼 정보를 담고 있는 문자열을 반환sheet.getCurrentStyle();/-----------------------------------------------------------------/
var info = '{"HeaderColor":"#1d1d1b","HeaderTextSize":"14","HeaderTextColor":"#efe6e6","AlternateColor":"#dfdfe2","RowColor":"#f6f6ee","RowTextSize":"12","RowTextColor":"#211c1c","Theme":"IB"}' // getCurrentStyle에서 얻은 결과와 같은 형식
sheet.setCurrentStyle( info );/-----------------------------------------------------------------/
options.Cfg = {    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정};// 로컬 스토리지 혹은 세션 스토리지에 저장된 스타일 정보를 제거한다.sheet.clearCurrentStyle();

 CSS New1. StyleRowConfig의 Extend 관련 css 변경 
/* 테마 별 css 파일에 변경됨 *//* .IBMain tr:has([ib-row='STYLE']) { display: flex;flex-wrap: wrap;margin: 4px 0;height: auto !important;align-items: center; }.IBMain td[ib-row='STYLE'] { margin: 0;margin-right: 10px;padding: 0;background-color: transparent !important; }.IBMain td[ib-row='STYLE'] label { display: flex;align-items: center; }*/.IBMain tr:has([ib-row='STYLE']) { display: flex;flex-wrap: wrap;margin: 4px 0 2px 0;height: auto !important;align-items: center; }.IBMain td[ib-row='STYLE'] { margin: 0;margin-right: 10px;margin-bottom: 2px;padding: 0;background-color: transparent !important; }.IBMain td[ib-row='STYLE'] .styleWrap { display: flex;align-items: center; }.IBMain td[ib-row='STYLE'] .styleWrap > div:first-child { margin-right: 16px; }.IBMain td[ib-row='STYLE'] label { display: inline-flex;align-items: center;margin: 0;margin-right: 12px;padding: 0; }
/*.IBMain td[ib-col='handler'] div button, .IBMain td[ib-col='resetStyle'] button { margin-right: 4px;padding: 4px;border: none;background-color: #53bfca;color: white;cursor: pointer; }*/.IBMain td[ib-row='STYLE'] .styleWrap > div:first-child, .IBMain td[ib-col='handler'] div button, .IBMain td[ib-col='resetStyle'] button { padding: 4px;border: none;background-color: #53bfca;color: white;border-radius:1px;cursor: pointer; }.IBMain td[ib-col='handler'] div button, .IBMain td[ib-col='resetStyle'] button { margin-right: 4px; }
/*.IBMain td[ib-row='STYLE']:has(.divider) { position: relative;padding-right: 12px !important; }.IBMain td[ib-row='STYLE']:has(.divider)::after { content: "";position: absolute;top: 50%;right: 0;display: block; width: 1px;height: 100%; max-height: 18px;background: #bbb; transform: translateY(-50%); }*/.IBMain td[ib-row='STYLE'] .divider { position: relative; }.IBMain td[ib-row='STYLE'] .divider::after { content: "";position: absolute;top: 50%;right: 0;display: block; width: 1px;height: 100%; max-height: 18px;background: #bbb; transform: translateY(-50%); }.IBMain td[ib-col='resetStyle']::after { height: 18px; }.IBMain td[ib-row='STYLE'] .styleWrap > div:first-child.extend { margin-right: 10px; }.IBMain td[ib-row='STYLE'] .styleWrap > div:first-child::after {content: '';display: inline-block;position: absolute;top: 50%;left: calc(100% - 12px);width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left: 4px solid #53bfca;transform: translateY(-50%); }.IBMain td[ib-row='STYLE'] .styleWrap > div:first-child.extend::after { display: none; }


Fixed1. showMessage가 호출되고 이후 피벗테이블을 만든 경우, 시트의 클릭이 불가능한 문제 수정 
2. Foot행의 병합된 셀에 NoChanged 속성이 적용되지 않는 문제 수정 3. 찾기 다이얼로그에서 " 특수문자를 검색한 후 loadSearchData로 데이터를 다시 조회할 경우 알림 메시지가 뜨던 현상 수정 4. create 시 입력한 데이터가 없는 경우, reload 호출 후 시트가 그려지지 않는 문제 수정 5. Menu의 Edit:1 사용시 생성되는 input 으로 키보드 방향키를 통해 포커스가 가도록 수정 6. MergeCellsMatch를 설정하고 onAfterChange 이벤트에서 setCheck 호출 시 에러가 발생하던 문제 수정 7. 병합된 셀을 마우스 드래그로 선택 할 때, 병합된 셀 전부가 선택되도록 변경 

Dialog Fixibsheet-dialog.js 1.0.41-20250703-13  버전에서 해당 패치가 이루어졌습니다.1. 피벗 다이얼로그에서 검색 시 숨겨지는 항목이 많을 경우 빈 공간이 생기는 현상 수정 
 Excel Fixibsheet-excel.js 1.1.22-20250703-13버전에서 해당 릴리즈가 이루어졌습니다.1. 합계행이 상단에 위치한 경우 엑셀 파일 다운로드 시 합계행의 높이가 잘못 계산되는 문제 수정  


ServerModule NewServerModule 2.0.0 버전이 릴리즈 되었습니다.반드시 버전에 맞는 jsp가 필요합니다. (1.x.x 버전에서 서버모듈 jar 파일만 교체하면 오류발생함)1. 시트8 서버모듈 패키지명 변경 sheet7과 sheet8 을 함께 사용하는 경우, 두 개의 서버모듈 패키지명이 동일하여 가끔 반대의 서버모듈이 사용되어 오류가 났던 현상이 있었습니다. 이 현상을 해결하기 위해 sheet8 서버모듈 패키지명을 sheet7과 다르게 변경하였습니다.패키지명 변경으로, 반드시 관련 jsp 파일도 함께 적용해야 정상적으로 서버모듈을 사용할 수 있습니다.



### Ver 8.3.0.17-20250627-10

Fixed1. LWC 환경에서 시트가 그려지지 않는 현상 수정ibsheet.js 8.3.0.15 에서 showMessageTime로 표시하는 메시지가 CSP 환경에서 동작하도록 수정되었는데,시트가 그려지지 않는 사이드 이펙트가 발생하여 수정이 이루어졌습니다.

### Ver 8.3.0.16-20250626-16

New1. (Method)ExportData에 numberFormatMode 인자 추가 (Method)down2Excel 에 제공되는 numberFormatMode 인자를 ExportData 에도 제공하도록 추가하였습니다.down2Excel 과 동일하게 엑셀 다운 시 실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 지정할 수 있습니다.NameTypeRequiredDescriptionnumberFormatModenumber선택실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 설정합니다.0:시트의 컬럼 포맷을 따릅니다. (default)1:셀의 값 기준에 따라 정수 또는 실수 형태로 셀 서식을 설정합니다.2:일반 서식으로 설정합니다.
[사용 예시]sheet.exportData({numberFormatMode:1}) // 값에 따라 정수, 실수 형태로 셀 서식을 지정
2. Enum의 선택 여부를 설정할 수 있는 (Col) EnumDisabled 옵션 추가 Enum 메뉴에서 특정 항목을 선택 불가로 만드려면 (Col,Cell)EnumMenu 를 이용하여 Enum과 관련된 소스를 다시 EnumMenu.Item 으로 지정해줘야 했습니다.사용에 편의성을 높이기 위해 EnumDisabled 속성이 추가되었습니다. 이를 이용하여 간단하게 특정 Enum을 선택 불가(Disabled 상태)로 만들 수 있습니다.
[사용 예시] 
//Enum 열에 item의 선택 불가능 여부를 설정한다.options.Cols = [  {    "Header": "대분류",    "Type": "Enum",    "Name": "Category1",    "Enum": "|가정/살림|경제 경영|국어 외국어 사전|만화/라이트노벨|소설/시/희곡|어린이|역사|예술|인문|자기계발|자연과학",    "EnumKeys": "|A0|A1|A2|A3|A4|A5|A7|A8|A9|A10|A11",    "EnumDisabled": "|1|0|0|0|0|1|0|1|1|0|0" // 특정 Enum 항목만 Disabled 로 만든다.  }];

 
3. 시트의 가로 스크롤을 숨길 수 있는 (Cfg) HideHScroll 옵션 추가 가로 스크롤을 표시하지 않는 기능인 (Cfg)HideHScroll 이 추가되었습니다.시트의 너비를 조절하여 스크롤이 표시되지 않게 하는 (Cfg)NoHScroll 과는 다르게 HideHScroll 은 가로 스크롤은 보이지 않지만 유지되는 상태입니다.Shift+위아래마우스휠 동작으로 보이지 않는 가로 스크롤을 움직일 수 있습니다.
4. 시트의 스크롤을 동기화 할 수 있는 (cfg) Sync 옵션 추가 시트의 스크롤을 다른 시트와 동기화 하는 기능입니다.동기화하고자 하는 시트에 동일한 Sync 옵션을 주면 자동으로 해당 Sync 옵션을 가진 시트끼리 지정한 스크롤(세로,가로)이 동기화 됩니다. ValueDescriptionVert세로 스크롤 동기화 기능 설정Horz가로 스크롤 동기화 기능 설정제약사항 다음의 경우에 정상적으로 동작하지 않습니다:시트 간 SearchMode가 다른 경우시트 간AutoRowHeight 설정 여부가 다른 경우
[사용 예시]두 시트의 가로, 세로 스크롤을 동기화 시킨다.
-> 
sheetInit1 : {  Cfg: {    Sync: "Vert,Horz" // 가로, 세로 스크롤 동기화  }, ...}
sheetInit2 : {  Cfg: {    Sync: "Vert,Horz" // 가로, 세로 스크롤 동기화  }, ...}

Fixed1. setAttribute로 CanEmpty를 변경 후 시트를 다시 그릴 경우 변경 사항이 적용 되지 않는 현상 수정 
2. Foot 행에서 컬럼의 속성 NoChanged가 0(false) 되어 있지 않은 경우, 1(true)로 설정 되도록 변경 3. ctrl + 0으로 스케일을 1로 변경할 수 있도록 개선 

common Fixibsheet-common.js 1.0.25-20250626-15 버전에서 해당 패치가 이루어졌습니다.1. common.js에 설정된 Menu를 변경한 경우에도 '컬럼 표시 여부' 메뉴가 표시되도록 수정 

### Ver 8.3.0.15-20250619-15

New1. 문자형 열에서 천단위 구분자(',')와 소수점 구분자('.')를 Size 계산에서 제외할 수 있는 (col) SizeIgnoreDecimalSep 옵션 추가  입력된 문자열이 숫자형인 경우, 설정된 열에 입력 가능한 글자 수에서 자릿수 구분자와 소수점 구분자의 값들을 글자 수에서 제외하는 기능입니다.locale 파일의 GroupSeparator, DecimalSeparator를 기준으로 동작합니다.locale 메세지 파일(ko.js,en.js등)에서 자릿수 구분자는 Format.GroupSeparator, 소수점 구분자는 Format.DecimalSeparator로 설정되어 있습니다.주의 : Col 혹은 Cell에 Size 속성이 설정되어 있어야 해당 기능이 동작합니다.
ValueDescriptionboolean입력된 데이터에서 자릿수 구분자와 소수점 구분자를 이용하여 숫자형인지 판단하고, 숫자형 데이터일 경우 구분자 문자들을 입력가능한 글자수에서 제외 여부(Int, Float type: default:1(true), 그 외의 type: default:0(false))전 세계에서 사용되는 자릿수 구분자(Format.GroupSeparator) 문자: ,, ., , '전 세계에서 사용되는 소수점 구분자(Format.DecimalSeparator) 문자: ,, .
[사용 예시]//FloatData열에 최대 10글자까지 입력가능, 데이터가 숫자형인 경우 구분자를 입력제한 글자수에서 제외options.Cols = [    ...    {Type: "Text", Size: 10, SizeIgnoreDecimalSep: true, Name: "FloatData", Width: 120 ...},    ...];
2. 시트의 스타일을 변경할 수 있는 고정행을 추가하는 (cfg) StyleRowConfig 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정 할 수 있습니다.StorageType을 통해 스타일 정보를 저장할 방법을 설정할 수 있습니다.
[사용 예시]

```javascript
StyleRowConfig: {
    Visible: true, // 화면 표시 여부 default: true
    StorageType: 2, // 0: 사용안함, 1: 캐시 사용, 2: 서버통신
    ServerUrl: "../styleinforeturn.jsp", // 서버통신을 할 경우 url
    AutoLoad: true, // 생성 시 스타일 정보 자동 로드 여부
    Themes: {
        IBMT: "../../assets/ibsheet/css/mint/main.css",
        Custom: "../../assets/ibsheet/css/simple/main2.css"
    }
},
```

[실행 결과]
CSS New1. StyleRowConfig 관련 css 속성 추가 (IB, IBGR, IBGY, IBMR, IBMT, IBSP에 추가) 
```javascript
/* IB 테마 기준 */
.IBMain tr:has([ib-row='STYLE']) { display: flex;flex-wrap: wrap;margin: 4px 0;height: auto !important;align-items: center; }
.IBMain td[ib-row='STYLE'] { margin: 0;margin-right: 10px;padding: 0;background-color: transparent !important; }
.IBMain td[ib-row='STYLE'] label { display: flex;align-items: center; }
.IBMain td[ib-row='STYLE'] input { margin: 0;padding: 0;margin-left: 4px;cursor: pointer; }
.IBMain td[ib-row='STYLE'] input[type='color'] { height: 20px;width: 20px;background-color: transparent;border: none; }
.IBMain td[ib-row='STYLE'] input[type='number'] { padding-left: 4px;width: 40px;line-height: 24px;cursor: initial; }
.IBMain td[ib-row='STYLE'] select { margin-left: 4px;padding-bottom: 1px;width: 60px;height: 26px;cursor: pointer; }
.IBMain td[ib-row='STYLE'] input[type='number'], .IBMain td[ib-row='STYLE'] select { margin-left: 6px;border: 1px solid #bbb;border-radius: 2px;box-sizing: border-box !important; }
.IBMain td[ib-row='STYLE'] input[type='number']:focus, .IBMain td[ib-row='STYLE'] select:focus { outline: none; }
.IBMain td[ib-col='handler'] div button, .IBMain td[ib-col='resetStyle'] button { margin-right: 4px;padding: 4px;border: none;background-color: #53bfca;color: white;cursor: pointer; }
.IBMain td[ib-col='handler'] div button:last-child, .IBMain td[ib-col='resetStyle'] button { margin-right: 0px; }
.IBMain td[ib-row='STYLE']:has(.divider) { position: relative;padding-right: 12px !important; }
.IBMain td[ib-row='STYLE']:has(.divider)::after { content: "";position: absolute;top: 50%;right: 0;display: block; width: 1px;height: 100%; max-height: 18px;background: #bbb; transform: translateY(-50%); }
.IBMain td[ib-col='resetStyle']::after { height: 18px; }
```

Locale New1. StyleRowConfig 관련 메시지 추가 (ko, en, jp, cn) 
```javascript
"StyleRow": {
    "Header": "헤더행",
    "Row": "데이터행",
    "Alternate": "교차행 색상",
    "Save": "저장",
    "Load": "불러오기",
    "ApplyAll": "모든 시트에 적용",
    "Reset": "리셋",
    "TextSize": "글자크기",
    "TextColor": "글자색",
    "BackgroundColor": "배경색",
    "Theme": "테마",
    "SaveSuccess": "스타일이 저장되었습니다.",
    "SaveFail": "스타일 저장에 실패했습니다.",
    "NoStyleDataToSave": "저장할 스타일 정보가 없습니다.",
    "LoadFail": "스타일을 불러오는 데 실패했습니다.",
    "NoStyleDataToLoad": "불러올 스타일 정보가 없습니다.",
    "NoServerUrl": "서버 주소가 설정되어 있지 않습니다.",
    "MaxFontSize": "글자크기는 %1px 보다 클 수 없습니다.",
    "MinFontSize": "글자크기는 %1px 보다 작을 수 없습니다."
}
```



Fixed1. setFixedCols, setFixedLeft, setFixedRight로 열 이동 후 병합된 셀의 onButtonClick 이벤트가 발생하지 않던 문제 수정 
2. 시트 외부의 브라우저에 포커스가 있는 상태에서 확대/축소 키보드 입력(Ctrl + '+', '-') 시 시트의 Scale이 변경 되는 문제 수정 3. showMessageTime로 표시하는 메시지가 CSP 환경에서 동작하도록 수정 4. 숫자형 열에서 Size에 소수점 구분자('.')가 포함되지 않도록 변경 
5. 피벗시트에서 addFormula로 추가한 Formula의 계산이 이루어지지 않는 문제 수정 
6. 시트 생성 옵션에 Data, data 키를 사용할 경우 조회 시 에러가 발생하는 문제 수정 

Excel Fixibsheet-excel.js 1.1.21-20250619-15버전에서 해당 릴리즈가 이루어졌습니다.이번 릴리즈 내역 적용 시 servermodule 1.1.41 버전 이상이 필요합니다.1. 문자형 열의 Format이 json 형태로 설정되어 있을 때, 다운로드 받을 값을 선택하는 downTextFormat 기능 추가 
2. 대용량 엑셀 파일 업로드를 위한 load.setStreamingUploadMode() 추가 streamingUploadMode 사용시 메모리에 캐싱할 행 개수를 설정하는 load.setStreamingRowCacheSize(), inputStream으로 파일을 읽을 때 버퍼 사이즈를 설정하는 load.setStreamingBufferSize(512) 옵션 추가 
3. load.directLoadExcel()처럼 한꺼번에 모든 데이터를 HashMap으로 읽어오지 않고, 한 행씩 스트리밍 콜백으로 받아오도록 하는 load.directLoadExcelStreaming(new StreamingCallback()) 추가 
4. Text 타입 컬럼의 Format으로 설정되어 있을 경우, 포맷을 value 값으로 내려받을지, key 값으로 내려받을지 설정하는 downTextFormat 옵션 추가 
5. Jakarta 서버모듈에서 POI를 사용하지 않는 엑셀 다운로드, 업로드가 정상 동작하지 않는 현상 수정 
6. batik-all-1.17 버전 사용시 down2Image를 이용한 pdf 다운로드가 정상 동작하지 않는 현상 수정 



### Ver 8.3.0.14-20250612-15

New1. 선택 함수 사용 시에 (Event)onSelectEnd 발생 여부를 제어하는 ignoreEvent 인자 추가기존 (Method)selectCell, selectCol, selectRow, selectAllRows, selectRange 와 같은 api 사용 시onSelectEnd 이벤트가 발생하지 않았습니다.이번 릴리즈에 각 api에 추가된 ignoreEvent 인자를 통해 onSelectEnd 이벤트 발생 여부를 제어할 수 있습니다.NameTypeRequiredDescriptionignoreEventboolean선택onSelectEnd 이벤트 발생 여부0(false):발생1(true):발생하지 않음 (default)[사용 예시]sheet.selectAllRows(1, 0) // onSelectEnd 이벤트를 발생시킴. Ctrl+A 와 동일



Fixed1. 헤더 더블 클릭 또는 (Method)fitWidth 사용 시 (Col,Cell)EmptyValue를 기준으로 열의 너비가 설정되던 문제 수정 
2. (Cfg)Searchmode: 0인 시트에서 데이터 행 100개를 기준으로 필터링 시 (Event)onFocus의 리턴 값이 다른 문제 수정 

### Ver 8.3.0.13-20250609-10

Fixed1. (Event)onCancelFile 이 파일 정상 선택 시에도 발생하는 문제 수정 

### Ver 8.3.0.12-20250605-14

Fixed1. (Cfg)SearchMode:5 에서 (Cfg)RowIndex 설정 시 row의 index, id 가 페이지마다 1부터 시작되는 문제 수정 
2. 화면에 여러개의 시트가 존재할 경우 infoRow의 인자 Paging2가 정상적으로 동작하지 않던 문제 수정 

### Ver 8.3.0.11-20250529-14

New1. Enum셀을 클릭 시 드롭다운 메뉴의 열림 여부를 설정 할 수 있는 (cfg) EnumOpenMode 옵션 추가 포커스 이동 간에 Enum 드롭다운 메뉴 열기 방법을 설정할 수 있습니다.EnumOpenMode:0 로 설정 시 포커스 시 (다른 셀에서 해당 셀을 클릭하는 등) Enum 목록을 열지 않습니다.ValueDescription0(false)포커스 시 Enum 리스트 목록을 표시하지 않음1(true)포커스 시 Enum 리스트 목록을 표시 (default)[사용 예시]options.Cfg = {     EnumOpenMode: 0 // 포커스 시 Enum 리스트 목록을 표시하지 않음.}

2. 시트의 배율을 조절할 수 있는 기능 추가(cfg) Scale옵션 추가주어진 배율(zoom factor)에 따라 시트 전체를 확대하거나 축소합니다.1.0보다 작은 값은 시트를 축소합니다. (0.1 미만으로 사용하실 수 없습니다.)1.0보다 큰 값은 시트를 확대합니다.주의 : 해당 속성은 Menu, Dialog, Message에는 영향을 주지 않습니다.주의 : 시트 div의 너비나 높이를 100%와 같이 비율로 설정하여 사용하시는 경우 NoVScroll이나 NoHScroll을 같이 사용하실 때, 설정하신 배율에 따라 시트의 영역 전체가 확대/축소 될 수 있습니다. (Method)setScale 추가setScale(val, render) 를 이용하여 동적으로 Scale 옵션을 설정할 수 있습니다.valnumber선택배율(zoom factor) 지정 (default:1.0)renderboolean선택즉시 화면 반영 여부해당 기능을 0(false)로 사용했을 경우, 작업 마무리 시에 rerender()를 실행해야 화면에 반영 됩니다.0(false):반영 안함1(true):즉시 반영 (default)(Method)getScale 추가현재 시트에 설정되어있는 Scale 값을 확인할 수 있습니다.ctrl + '+', ctrl + '-' 로 배율 변경 동작 추가Locale New1. 배율 변경 관련 메세지 추가
```javascript
// ko.js 
"ScaleSmallerThan": "%d 보다 작게 축소 할 수 없습니다."

// en.js
"ScaleSmallerThan": "Scaling below %d is not allowed."

// jp.js
"ScaleSmallerThan": "%d より小さく縮小できません。"

// cn.js
"ScaleSmallerThan": "不能将比例缩小到小于 %d。"
```



Fixed1. (Method)setValue를 호출 시 헤더 체크박스와 데이터행의 체크박스들이 동기화 되도록 수정
2. (ColRange가 설정된 Radio,Enum 열을 필터링 시 and 조건으로 동작하도록 변경 3. (Cfg)UseFilterDialog: 1인 시트에서 (Method)showPivotDialog로 피벗다이얼로그를 표시한 경우 다이얼로그를 닫은 후에도 필터다이얼로그 아이콘이 사라지는 현상 수정 ibsheet-dialog.js 1.0.40-20250529-15 이상 버전이 필요합니다.4. (Method)showGroupRow에 존재하지 않는 열을 인자로 사용 시 스크립트 에러가 발생하지 않도록 수정 

Dialog Fixibsheet-dialog.js 1.0.40-20250529-15  버전에서 해당 패치가 이루어졌습니다.1. UseFilterDialog: 1인 시트에서 showPivotDialog로 피벗다이얼로그를 표시한 경우 다이얼로그를 닫은 후에도 필터다이얼로그 아이콘이 사라지는 현상 수정  ibsheet.js 8.3.0.11-20250529-14 이상 버전이 필요합니다.
 

### Ver 8.3.0.10-20250522-14

Fixed1. 숫자형 컬럼의 (Col,Cell)Format에 '\%'가 있는 경우 소수점이 정상적으로 표시 되지 않던 문제 수정 
2. (Method)hideFilterDialog가 동작하지 않는 문제 수정 3. 구버전의 크롬에서 필터다이얼로그가 정상적으로 표시 되지 않는 문제 수정 4. (Cfg)SearchMode: 2 에서 스크롤을 내리고 조회 시 간헐적으로 진행 막대가 남아있는 현상 수정 
5. 숫자형 열의 (Col)Formula를 문자열로 설정할 경우 셀의 계산이 숫자 연산이 아닌 문자 연산으로 이루어지는 문제 수정 

Excel Fixibsheet-excel.js 1.1.20-20250522-14 버전에서 해당 패치가 이루어졌습니다.1. 합계행이 상단에 있을 때, 서버모듈 엑셀 다운로드 시 합계행이 비정상적으로 다운로드 되는 현상 수정 

### Ver 8.3.0.9-20250515-17

New1. 그룹행을 만들고 숨길 수 있는 (Method)showGroupRow, hideGroupRow 추가 그룹행을 동적으로 생성하고 숨길 수 있는 showGroupRow, hideGroupRow 함수가 추가되었습니다.showGroupRow 는 내부 인자를 통해 그룹핑 대상 컬럼이나 그룹 기준 컬럼의 데이터 포맷을 설정하실 수 있습니다.
[사용 예시]// 빈 그룹행 생성sheet.showGroupRow();
// 그룹행 생성하고, sName, sPrice 컬럼으로 그룹핑sheet.showGroupRow(["sName", "sPrice"]);
// 그룹행을 생성하고 그룹핑시 '{%s} <font color="gray">({%c}건)</font>' 포맷을 적용합니다.sheet.showGroupRow(null, '{%s} <font color="gray">({%c}건)</font>');
//생성된 그룹행 감추기sheet.hideGroupRow();  

2. 포커스 된 상태에서 더블 클릭하는 경우만 편집 모드로 들어가는 (Cfg)InEditMode: 3 추가 시트의 편집 시점을 설정하는 (Cfg)InEditMode 속성에 아래의 경우에만 편집 모드로 들어가는 3번 옵션이 추가되었습니다.- 이미 포커스된 셀을 더블 클릭할 때- Enter 나 F2 키를 입력할 때- 포커스 상태에서 입력할 떄
3. 피벗시트의 합계행을 표시하지 않는 옵션 추가 ibsheet-dialog.js 1.0.39-20250515-17 이상 버전이 필요합니다.
피벗 시트의 데이터 행에 '행 총합계 표시', '열 총합계 표시' 컨텍스트 메뉴가 추가되었습니다.(Method)showPivotDialog, makePivotTable 함수에 hideTotal 인자가 추가되었습니다.
//피벗 시트에서 마우스 우클릭으로 총합계 표시여부 컨텍스트 메뉴 표시 및 옵션 추가


Fixed1. (Col) SelectCheck이 shift + click으로는 동작하지 않도록 변경 
2. (Col,Cell)Format을 설정한 경우 피벗시트의 헤더가 NaN으로 표시되던 문제 수정 3. 필터행의 Radio 타입 셀의 값을 다중으로 선택할 때, and 조건으로 동작하도록 변경4. Formula가 설정된 시트의 계산이 종료된 후 전역 변수가 설정되지 않게 수정 IBChart 와 Formula 가 있는 시트를 한 화면에서 사용 시 위 내용으로 인해 차트 생성이 되지 않았습니다.해당 설정 수정을 통해 정상적으로 사용할 수 있게 되었습니다.
5. 엑셀 다운로드 시 (Col)Enum, EnumKeys의 구분자가 '|'가 아닌 경우에 대응 되도록 변경 6. body.style.zoom을 변경한 경우 발생하던 이슈의 수정 사항을 원상 복구 
7. (Method)importData, loadExcel로 파일을 업로드 할 때, 파일 탐색기의 취소 버튼을 클릭하거나, esc를 누른 후 (Event)onCancelFile 이벤트가 발생하도록 수정 ibsheet-excel.js 1.1.19-20250515-17 이상 버전이 필요합니다. 8. (Cfg)SearchMode: 0의 트리 시트에서 생성 시 데이터가 없는 경우 (Method)reloadData 후 에러가 발생하는 문제 수정 9. UseFilterDialog와 showPivotDialg를 동시에 사용할 때, 발생하던 문제 수정 ibsheet-dialog.js 1.0.39-20250515-17 이상 버전이 필요합니다.


Excel Fixibsheet-excel.js 1.1.19-20250515-17 버전에서 해당 패치가 이루어졌습니다.1. (Method)getSheetData로 날짜 데이터가 정상적으로 추출되지 않는 문제 수정 
2. loadExcel로 표시되는 파일 탐색기의 취소한 경우 시트의 onCancelFile 이벤트가 호출되도록 수정 ibsheet.js 8.3.0.9-20250515-17 이상 버전이 필요합니다.

3. EnumKeys, Enum의 길이가 길 경우, comboValidation이 동작하지 않도록 수정 서버모듈 1.1.39.jar 이상 버전이 필요합니다.

4. Enum, EnumKeys에서 '|' 이외의 구분자도 서버 전문에 전달 하도록 개선 서버모듈 1.1.39.jar 이상 버전이 필요합니다.

Dialog Fixibsheet-dialog.js 1.0.39-20250515-17 버전에서 해당 패치가 이루어졌습니다.1. seFilterDialog와 showPivotDialg를 동시에 사용할 때, 발생하는 문제 수정 다이얼로그 상단의 검색 input의 내용을 삭제할 수 있는 버튼 추가피벗테이블을 생성 후 피벗다이얼로그를 접을 경우 시트의 영역에만 disabled가 되도록 변경클릭으로 열을 설정할 수 있는 체크박스 추가
2. showPivotDialog의 name을 설정 시 에러가 발생하는 문제 수정

3. 피벗다이얼로그의 대상 열을 드래그로 순서를 변경할 수 있도록 개선 
4. 피벗 시트의 합계를 숨길 수 있는 hideTotal 인자 추가
 
common Fixibsheet-common.js 1.0.23-20250515 버전에서 해당 패치가 이루어졌습니다.1. setRangeValue의 인자가 시트의 api와 유사하게 동작하도록 수정 기존 인자는 rowIndex, colIndex 를 기준으로 동작했는데, 이번 수정으로 다른 api 와 유사하게 row객체, 컬럼명을 인자를 받고 동작합니다.


### Ver 8.3.0.8-20250508-15

Fixed1. chronium 128 이전 버전에서 body.style.zoom을 변경한 화면에서 시트의 마우스 좌표 계산이 틀어지는 문제 수정 
2. Format을 설정한 Text, Date 열을 피벗의 기준 열로 설정 시 헤더에 NaN으로 표시 되는 현상 수정 3. UsePivot과 showFilterDialog를 동시에 사용할 경우, 시트의 메시지가 삭제되지 않고 남아있는 문제 수정 4. Header 설정 시 object로 설정할 때와 string으로 설정할 때, 문자 색상이 다른 문제 수정 

Common Fixibsheet-common.js 1.0.22-20250508-15 버전에서 해당 릴리즈가 이루어졌습니다.1. setRangeValue 내부의 반복문 이후에 rerender를 호출하도록 개선 


### Ver 8.3.0.7-20250430-14

Fixed1. showPivotDialog를 통해 피벗다이얼로그의 name을 설정할 경우 피벗 필터의 버튼('적용', '초기화') 버튼이 동작하지 않던 문제 수정  
2. 피벗다이얼로그의 필터 기능 사용 시 Date 타입 열의 체크가 해제되는 현상 수정 3. 시분초를 포함하는 Date 타입의 열의 필터행 달력에서 시분초가 표시되도록 변경 4. doFilter를 통해 필터링 후 필터행의 값을 가져올 때, Date 타입 셀의 값이 타임스탬프로만 리턴되는 문제 수정 

Css Fixed1. gray 테마(IBGY) css 수정 '둥근 테마 관련' 주석에 해당하는 내용 삭제필터 다이얼로그 체크 박스 이미지 경로 수정폰트 파일 추가Pretendard-Black.woffPretendard-Black.woff2Pretendard-Bold.woffPretendard-Bold.woff2Pretendard-ExtraBold.woffPretendard-ExtraBold.woff2Pretendard-ExtraLight.woffPretendard-ExtraLight.woff2Pretendard-Light.woffPretendard-Light.woff2Pretendard-Medium.woffPretendard-Medium.woff2Pretendard-Regular.woffPretendard-Regular.woff2Pretendard-SemiBold.woffPretendard-SemiBold.woff2Pretendard-Thin.woffPretendard-Thin.woff2/* 아래 내용이 삭제 됨 */ /* 헤더 왼쪽을 둥글게 */.IBGYMainTable .IBGYHeadLeft .IBGYSection tbody tr:nth-child(2) td:nth-child(2) {   border-top-left-radius: 15px; } .IBGYMainTable .IBGYHeadMid:not(.IBGYSplitterLeft) .IBGYSection tbody tr:nth-child(2) td:nth-child(2) {   border-top-left-radius: 15px; }   /* 헤더 오른쪽을 둥글게 */ .IBGYMainTable .IBGYHeadMid:not(.IBGYSplitterRight) .IBGYSection tbody tr:nth-child(2) td:last-child {   border-top-right-radius: 15px; } .IBGYMainTable .IBGYHeadRight .IBGYSection tbody tr:nth-child(2) td:last-child {   border-top-right-radius: 15px; }   /* 멀티레코드 대응 */ div.IBGYRecordPart .IBGYSection tbody tr td, #pivot_sheet .IBGYSection tbody tr td {   border-top-right-radius: 0px!important;   border-top-left-radius: 0px!important; } 
  .IBGYSigma {   background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIGhlaWdodD0iODAwcHgiIHdpZHRoPSI4MDBweCIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDE5MCAxOTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTMuNTMsMGgxODIuOTR2NDQuNzhoLTMyLjQzOVYzMi40MzlINzMuMDE3TDEyNS40Miw5NWwtNTIuNDAzLDYyLjU2MWg4MS4wMTVWMTQ1LjIyaDMyLjQzOVYxOTBIMy41M2w3OS41NzQtOTVMMy41MywweiIvPg0KPC9zdmc+) } .IBGYRowBelow .roundBT{   border-bottom-left-radius: 15px;   border-bottom-right-radius: 15px; } .IBGYRowBelow .roundBTL{   border-bottom-left-radius: 15px; } .IBGYRowBelow .roundBTR{   border-bottom-right-radius: 15px; } .StatusLabel>div>div{   text-overflow: ellipsis; } .Cnt>div>div{   text-overflow: ellipsis; } .TipCls{   max-width: 400px; } .BR {   border-right: 1px solid #F1F1F1; }  div#editSheet_sheet_EditDialogBody>div:first-child {   border-top:2px solid #D0D0D0; } .IBGYS_FIND_BTN button{border:0;}
/* 체크 박스 이미지 경로가 png에서 svg로 변경 */.IBGYDataFilterDialogSideCheck1 { background-image:url(./icons/MenuBool1.svg?v120); background-repeat: no-repeat; background-position-x: right; background-position-y: center; width: 16px; height: 16px; min-width: 16px;}.IBGYDataFilterDialogSideCheck0 { background-image:url(./icons/MenuBool0.svg?v120); background-repeat: no-repeat; background-position-x: right; background-position-y: center; width: 16px; height: 16px; min-width: 16px;}
 

Common Fixibsheet-common.js 1.0.21-20250430-14 버전에서 해당 릴리즈가 이루어졌습니다.1. IBSheet 7의 SetRangeFontColor, SetRangeBackColor, SetRangeFontBold를 대체할 수 있는 setRangeAttribute 추가
2. IBSheet 7의 SetRangeValue, SetRangeText를 대체할 수 있는 setRangeValue 추가 



Dialog Fixibsheet-dialog.js 1.1.38-20250430-14 버전에서 해당 릴리즈가 이루어졌습니다.1. document에 접근 할 수 없는 경우 피벗 다이얼로그의 버튼 클릭 시 발생하던 에러 수정  


### Ver 8.3.0.6-20250425-12

Fixed1. 터치가 가능한 기기에서 시트에 마우스 커서가 올라간 상태에서 터치 스크롤 시, 마우스 위치에 커서의 호버 표시가 그려지지 않도록 변경 

### Ver 8.3.0.5-20250424-14

New1. onBeforeExport 이벤트에 data 인자 추가 onBeforeExport 이벤트에서 엑셀 다운 전 Blob 데이터를 받을 수 있는 인자인 data 인자가 추가되었습니다.evtParam.data.blob 으로 blob 데이터를 받아 이용할 수 있습니다.* 주의 : 해당 인자는 exportData 메소드에서만 사용가능합니다.
[사용 예시]onBeforeExport : function (evtParam){
     evtParam.data.blob // Blob 데이터를 이렇게 꺼낼 수 있음
..
return true; // Blob 데이터 처리로 엑셀 파일 다운이 필요없는 경우 return ture를 하여 엑셀 다운 중단
}
2. 외부 달력을 제어할 수 있는 onExCalendar 이벤트 추가 외부 달력을 제어할 수 있는 시트 이벤트를 발생시키도록 하는 onExcalendar 이벤트가 추가되었습니다.시트의 onScroll, onKeyDown, onAfterFilter, onClick 이벤트 시점에 해당 이벤트가 발생합니다.onClickSide 이벤트에서 외부 달력을 시트 셀 영역에 표시하고, 해당 이벤트에서 외부 달력을 제거할 수 있습니다.
[사용 예시] // 외부 달력 이벤트 닫기 (onScroll, onKeyDown, onAfterFilter, onClick)  onExcalendar : function (evtParam) {
    var isCal = false;    var evtName = evtParam.evType;
    if (document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0] && document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0].style.display != 'none') isCal = true;
    switch (evtName) {      case "onScroll":        if (isCal) $('#CalendarInput').data('daterangepicker').remove();        break;      case "onAfterFilter":        // 필터행 초기화인 경우        if (evtParam.sheet.FCol == "FromData" && evtParam.sheet.FRow[evtParam.sheet.FCol] == '') {          evtParam.sheet.doFilter("ToData",'');          if (isCal) $('#CalendarInput').data('daterangepicker').remove();        }        break;      case "onKeyDown": //esc키를 누를        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();        break;      case "onClick":        console.log('onClick');        break;    }  }


Fixed1. 외부 달력 오픈하고 내부 달력 오픈 시 스크립트 오류가 발생하는 현상 수정 
2. (Cfg)SearchMode:0 의 트리 시트에서 (Col,Cell)Icon을 설정한 열의 헤더를 클릭할 경우 공백문자가 추가되던 현상 수정3. 필터 다이얼로그의 데이터 필터의 항목 간 간격이 (Cfg)Size 에 따라 변경되지 않던 문제 수정 4. (Col,Cell)BoolIcon:4 가 특정 버전 이후 동작하지 않던 문제 수정5. (Method)doFilter 를 통해 필터링할 경우 필터행의 Type:Date 열의 값이 (Method)getValue 로 확인 시 타임스탬프로 나오던 문제 수정6. (Cfg)AutoSelectFirstEnum:1 시트에서 (Method)setAttribute로 Enum, EnumKeys 변경 시 변경된 EnumKeys로 우선 변경되도록 수정
7. 모바일 또는 (Cfg)TabletMode:1 에서 터치로 시트의 세로 스크롤이 되지 않던 문제 수정8. (Method)exportDataBuffer 에서 인자 appendPrevSheet 를 사용할 경우 동일한 이름의 컬럼 머지가 정상적으로 적용되지 않는 현상 수정9. 태블릿PC에서 셀 터치 시 가상키보드가 뜨는 현상 수정10. 태블릿PC에서 빠른 편집 시 첫 글자가 영문으로 표시되는 수정 원상복구 (제품의 문제가 아닌 Windows의 문제로 확인됨)
Css Fixed1. Hint에 Menu가 가려지지 않게 Menu의 z-index를 Hint보다 높게 변경 /* 기존 258에서 268로 변경 */.IBMenuMain { position:absolute;left:0px;top:0px;z-index:265;overflow:hidden;box-shadow:0 2px 5px rgba(84, 105, 120, 0.3); }2. (cfg) Size 대응하기 위해 font-size 추가 및 높이를 설정하는 필터다이얼로그 css 변경 /* 체크박스 크기를 지정 */.IBFilterDialogHeaderCheckIcon0 { background-image:url(./imgs/DlgFilterUnCheckAll.png); background-repeat: no-repeat; background-position-x: left; background-position-y: center; width: 10px; height: 16px; }.IBFilterDialogHeaderCheckIcon1 { background-image:url(./imgs/DlgFilterCheckAll.png); background-repeat: no-repeat; background-position-x: left; background-position-y: center; width: 10px; height: 16px; }/* 필터다이얼로그의 헤더 높이를 auto로 변경 */.IBDataFilterDialogHeaderLayer { display:flex;flex-direction:column;position:relative;padding: 5px 10px;justify-content:space-between; }/* 필터다이얼로그의 input크기를 search영역과 동일하도록 변경 (#2414) */.IBGRDataFilterDialogSearch { width:inherit;margin-top:8px;overflow:hidden;line-height:24px;border-radius:3px;background-color:#fff;border:solid 1px #c7c7c7;font-size:1em;outline:none;padding-left: 20px;box-sizing: border-box !important; }.IBGRDataFilterDialogSearch>input { width:100%;border:none;height:calc(100% - 10px);outline: 0;box-sizing:border-box !important; }/* 높이가 내부 폰트 사이즈로 설정되도록 수정 */.IBGRDataFilterDialogHeaderCheck { margin-bottom: 4px;padding: 0px 10px; }.IBGRDataFilterDialogHeaderCheck .IBMenuItemText { font-size: 12px; }.IBHigh .IBGRDataFilterDialogHeaderCheck .IBMenuItemText, .IBBig .IBGRDataFilterDialogHeaderCheck .IBMenuItemText { font-size: 20px; }

3. gray 테마 수정 설명 주석 수정font 추가: 'Pretendard'시트의 기본 color 변경: #222222 > #000000시트의 border-color 변경: #d0d0d0d > #f1f1f1 등
/* gray 테마 수정 */.IBGYMain { font-family: /*'Malgun Gothic','Verdana','Nanum Gothic'*/'Pretendard',sans-serif;font-style: normal;font-weight: normal;font-variant: normal;}
.IBGYMain,.IBGYMain * { font-size:/*13px*/14px;line-height:18px; }
.IBGYRowAbove .IBGYTabHtmlBase,.IBGYRowBelow .IBGYTabHtmlBase { font-family: /* 'Noto Sans CJK kr Bold','Noto Sans KR Bold','Noto Sans Bold','Nanum Gothic Bold' */'Pretendard','Nanum Gothic Bold',sans-serif;font-style: normal; }
.IBGYMain { color:/* #222222 */#000000; }
.IBGYSearchRow { border-bottom:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYRowSpace4 .IBGYSolidRow { background:white;border-bottom:1px solid #f1f1f1;border-left:1px solid #f1f1f1;border-right:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYRowSpace0.IBGYRowSpaceFirst .IBGYSolidRow,.IBGYRowSpace2.IBGYRowSpaceFirst .IBGYSolidRow,.IBGYRowSpace3.IBGYRowSpaceFirst .IBGYSolidRow { border-top:1px solid /* #d0d0d0 */#f1f1f1; }           .IBGYRowSpace1.IBGYRowSpaceLast .IBGYSolidRow { border-bottom:1px solid /* #d0d0d0 */#f1f1f1; }                                                   .IBGYRowSpace4.IBGYRowSpaceFirst .IBGYSolidRow { border-top:1px solid /* #d0d0d0 */#f1f1f1; }                                                                                             .IBGYRowSpace0 .IBGYSolidRow,.IBGYRowSpace1 .IBGYSolidRow,.IBGYRowSpace2 .IBGYSolidRow,.IBGYRowSpace3 .IBGYSolidRow { border-left:1px solid /* #d0d0d0 */#f1f1f1;border-right:1px solid /* #d0d0d0 */#f1f1f1; } 
.IBGYSpaceSelectInner,.IBGYSpaceSelectInnerIcon,.IBGYSpaceEditInner,.IBGYSpaceEditInnerIcon { border:1px solid /* #d0d0d0 */#f1f1f1;background-color:#FFFFFF; }.IBGYSpaceEditReadOnly { border:1px solid /* #d0d0d0 */#f1f1f1;background-color:#d8d8d8;min-height:18px; }
.IBGYHeaderGroup { border:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYCellBase { border-bottom:1px solid /* #d0d0d0 */#f1f1f1;border-right:1px solid /* #d0d0d0 */#f1f1f1;border-left:0px none;border-top:0px none; }
.IBGYCellHeader { color:#222222;background:#E4E7EB;border-bottom:1px solid /* #d0d0d0 */#f1f1f1;border-right:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYHoverRowBackground { background:rgba(152, 207, 229, /* 0.1 */0); }.IBGYFocusRowBackground { background-color:rgba(152, 207, 229, /* 0.2 */0.1); }/* border-radius 추가 */.IBGYDialogButton,u.IBGYSheetButton { background:/*#999999*/#888888;border:0px solid #9f9f9f;color:#FFFFFF;border-radius:4px;}
.IBGYMenuFoot { background:#ededed;border-top:1px solid /* #d0d0d0 */#f1f1f1; }    .IBGYMenuEdit,.IBGYMenuEditEdit,.IBGYMenuEnum { border:1px solid /* #d0d0d0 */#f1f1f1;background-color:#FFFFFF;color:black; }.IBGYMenuCaption,.IBGYMenuLevel { color:#333333;background:#ededed;text-align:center;border-top:1px solid #f1f1f1;border-bottom:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYMenuSeparator { border-top:1px solid /* #d0d0d0 */#f1f1f1; } .IBGYMenuVSeparator { border-right:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYPickFooter,.IBGYPick2Footer,.IBGYPickTimeCell { background:#ededed;border:1px solid #CACACA;border-top:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYPickRowW .IBGYPickCell { border-bottom:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYPrompt input { border:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYPagerHeaderSingle { border-bottom:1px solid /* #d0d0d0 */#f1f1f1; } .IBGYPagerBodyLeft,.IBGYPagerHeaderLeft { border-left:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYPagerBodyRight,.IBGYPagerHeaderRight { border-right:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYPagerItem { border-bottom:1px solid /* #d0d0d0 */#f1f1f1; }
.IBGYHintOuter { background:white;color:black;border-color:/* #22222 */#dddddd; }
.IBGYHeadLeft,.IBGYBodyLeft,.IBGYFootLeft { border-left:1px solid /* #d0d0d0 */#ffffff; }.IBGYHeadMid,.IBGYBodyMid,.IBGYFootMid { border-left:1px solid #ffffff;border-right:1px solid /* #d0d0d0 */#ffffff; }.IBGYHeadRight,.IBGYBodyRight,.IBGYFootRight { border-right:1px solid /* #d0d0d0 */#ffffff; }.IBGYHeadLeft,.IBGYHeadMid,.IBGYHeadRight { border-bottom:0px solid /* #d0d0d0 */#ffffff;border-top:/*1px*/0px solid #D0D0D0; }.IBGYHasHead .IBGYHeadLeft,.IBGYHasHead .IBGYHeadMid,.IBGYHasHead .IBGYHeadRight { border-top:1px solid /* #d0d0d0 */#f1f1f1; }.IBGYFootLeft,.IBGYFootMid,.IBGYFootRight { border-top:/*1px*/0px solid #7b7b7b; }
.IBGYLeftSplitter,.IBGYRightSplitter { width:/*3px*/1px;overflow:hidden;cursor:e-resize;font-size:0px; }.IBGYLeftSplitter { border-left:/*1px*/0px solid /*b4b4b4*/#ffffff; background-color:/*b4b4b4*/#ffffff;}.IBGYRightSplitter { border-right:/*1px*/0px solid /*b4b4b4*/#ffffff; background-color:/*b4b4b4*/#ffffff;}
.IBGYVScroll { padding-top:0px;padding-bottom:0px;overflow:hidden;border-top:/*1px*/0px solid #d0d0d0;border-right:/*1px*/0px solid #d0d0d0; }.IBGYVScrollHeadPadding { border-bottom: 0px solid #d0d0d0; border-top: 1px solid #CACACA; border-right:1px solid /*d0d0d0*/#f1f1f1; }
.IBGYHScrollLeft,.IBGYHScrollMid,.IBGYHScrollRight { /* padding-left:1px;padding-right:1px; */overflow:hidden;border-top:1px solid /* d0d0d0 */#f1f1f1;border-bottom:1px solid /* d0d0d0 */#f1f1f1; }.IBGYHScrollLeft { border-left:1px solid /* d0d0d0 */#f1f1f1; }.IBGYHScrollMid { border-left:1px solid /* d0d0d0 */#f1f1f1;border-right:1px solid /* d0d0d0 */#f1f1f1; }.IBGYHScrollRight { border-right:1px solid /* d0d0d0 */#f1f1f1; }
.IBGYXScroll { background:#f3f3f3;cursor:default;border-top:1px solid /* d0d0d0 */#f1f1f1;border-bottom:0px solid /* d0d0d0 */#f1f1f1;border-right:1px solid /* d0d0d0 */#f1f1f1; }
.IBGYCustScroll1X,.IBGYCustScroll2X { background:#f1f1f1;cursor:default;border-right:1px solid /* d0d0d0 */#f1f1f1;border-bottom:1px solid /* d0d0d0 */#f1f1f1;border-top:1px solid /* d0d0d0 */#f1f1f1; }
.IBGYCustScroll3X { background:#f1f1f1;cursor:default;border-right:1px solid * d0d0d0 */#f1f1f1;border-bottom:1px solid * d0d0d0 */#f1f1f1;border-top:1px solid * d0d0d0 */#f1f1f1; }/* font-size, font-weight 추가 */.IBGYNoDataRow div { text-align:center; font-size: 15px; font-weight:700;}
.IBGYNoDataIcon{  display: inline-block;  width: /*15px*/20px;  height: /*15px*/20px;}
.IBGYRowAbove,.IBGYRowBelow { margin-left:/*5px*/0px;margin-right:/*5px*/0px;overflow:hidden; }
/* font-weight 추가 */.IBGYHeaderText {font-weight: 500; color:/* 050505 */#444444; letter-spacing: 1px;}/* 아래 속성의 주석 해제 */.IBGYInfoRow, .IBGYInfoRow * { background-color: /* #ececec */#e4e7eb; }
.IBGYColorFound1 { background-color:/* #b8b8b8*/#ddff93; }.IBGYColorFound2 { background-color:/* #cecece */#fff183; }.IBGYColorFound3 { background-color:/* #cdcdcd */#ffc3e1; }
.IBGYProgressOuter { text-align:left;width:300px;margin:0px 30px 10px 30px;border:1px solid /* #d0d0d0 */#f1f1f1; }/* border-radius 속성 추가 */.IBGYProgressButton,.IBGYMessageButton { padding:4px 5px 4px 5px;margin:1px 4px 1px 4px;text-align:center;white-space:nowrap;overflow:hidden;min-width:70px;border-radius:4px; }
.IBGYEditDialogSheetMain .IBGYMainTable .IBGYHeadMid {border-top: 1px solid #f1f1f1; border-bottom: 0px solid /* #d0d0d0 */#f1f1f1;}
/* 아래 내용 추가 */.pivotDown:hover{ background-size: 18px 18px;}

 

Excel Fix1. EnumKeys 가 길 경우 ComboValidation 설정과 상관없이 서버 전문에 EnumKeys를 포함하지 않는 문제 수정ibsheet-excel.js 1.1.18-20250424-14 버전에서 해당 릴리즈가 이루어졌습니다.


Dialog Fixibsheet-dialog.js 1.1.37-20250424-14 버전에서 해당 릴리즈가 이루어졌습니다.ibsheet.js ver 8.3.0.5-20250424-14 이상 버전이 함께 필요합니다.1. 피벗 다이얼로그 개선다이얼로그 상단의 검색 input의 내용을 삭제할 수 있는 버튼 추가피벗테이블을 생성 후 피벗다이얼로그를 접을 경우 시트의 영역에만 disabled가 되도록 변경클릭으로 열을 설정할 수 있는 체크박스 추가
2. Drag, Link, Pass, File, Radio 타입 열이 피벗 열로 설정되지 않도록 변경  


### Ver 8.3.0.4-20250417-15

Fixed1. (Cfg)CanDrag:1, DragCell:1인 경우에도 세로 스크롤 (지속)이동이 될 수 있도록 기능 개선  
2. (Method)blur로 시트의 포커스를 해제한 이후에도 (Cfg)SelFocusColor: 1로 포커스가 있던 행의 SEQ, 열의 헤더의 색상이 유지되던 문제 수정  3. (Col)Range를 사용한 Date열의 값이 (Method)getValue로 (Cfg)GetByDataFormat와 상관없이 타임스탬프로 나오는 문제 수정 
4. (Cfg)TabletMode: 1에서 빠른 편집 기능을 통해 입력 시 첫글자가 영문으로 입력되는 문제 수정  5. (Row,Col,Cell)Menu가 닫힌 후에 버튼의 문구가 초기화되는 문제 수정 
6. (Method)reload 후 Type:Radio 컬럼의 라디오 이미지가 Bool타입으로 변경되는 문제 수정 
7. (Cfg) CanEdit: 3의 Link타입 열 클릭 시 링크로 이동되지 않던 문제 수정 
8. 시트의 마지막 셀에서 tab키를 눌러 포커스를 변경할 경우 포커스가 시트 밖으로 나가도록 변경 
9. (Cfg)NoVScroll: 1로 세로스크롤이 없는 경우에도 shift + 마우스 휠로 시트의 가로 스크롤이 동작하도록 수정 
 
Css Fix1. default_img 테마의 잘못된 이미지 경로 수정 
[변경된 css]
```javascript
/* .pivotUp { float:left;width:27px;line-height:20px;cursor:pointer;background:url(./icons/MenuEnumExpanded.svg) no-repeat;background-size:16px 16px; } */
.pivotUp { float:left;width:27px;line-height:20px;cursor:pointer;background:url(./imgs/MenuEnumExpanded.png) no-repeat;background-size:16px 16px; }

/* .pivotDown { float:left;width:27px;line-height:20px;cursor:pointer;background:url(./icons/MenuEnum.svg) no-repeat;background-size:16px 16px; } */
.pivotDown { float:left;width:27px;line-height:20px;cursor:pointer;background:url(./imgs/MenuEnum.png) no-repeat;background-size:16px 16px; }
```


Dialog Fixibsheet-dialog.js 1.1.36-20250417-15 버전에서 해당 릴리즈가 이루어졌습니다.1. 피벗 다이얼로그의 name을 설정할 경우 초기화 버튼 클릭 시 스크립트 오류가 발생하는 현상 수정 


### Ver 8.3.0.3-20250410-16

New1. Section별로 HtmlPrefix, HtmlPostfix가 다르게 적용되어 있을 때, 행 높이를 보정해주는 (Cfg) MergeHeightAdjust 추가 HtmlPrefix나 HtmlPostfix와 같이 Cell의 높이에 영향을 주는 기능을 사용할 경우, 병합 영역 또는 시트의 섹션별 레이아웃 깨짐 현상이 발생 시, 병합 영역의 높이를 조정해주는 (Cfg)MergeHeightAdjust 속성을 추가했습니다.true 로 사용 시 시트 내 병합 정보를 항상 확인하여 표시하기 때문에 머지된 영역이 많으면 시트가 느려질 수 있습니다. 
[사용 예시]options.Cfg = {  MergeHeightAdjust: 1 // 병합된 영역의 높이 보정};


Fixed1. 마우스 드래그 시 마우스가 시트 하단에 위치할 때 아래로 스크롤이 자동으로 이동하지 않던 문제 수정 
2. (Cfg)EditTabMode: 0에서 (Cell)CanEdit: 1, 2를 건너뛰던 문제 수정 편집 상태인 셀에서 tab 이동 시 CanEdit: 0, 3, 4와 CanFocus:0,2 가 설정되지 않은 셀로 편집을 유지하면서 이동하는 (Cfg)EditTabMode:0 사용 시,셀에 설정을 무시하고 컬럼 단위로 이동을 할지 말지를 판단하는 현상을 수정했습니다.3. 피벗시트의 헤더 정렬이 가능하도록 수정 
4. (Method)donw2Pdf로 gray 테마의 스타일이 다운로드 되지 않던 문제 수정  5. (Col)Required: 1을 설정한 컬럼의 헤더에 (Cell)HtmlPrefix, HtmlPostfix가 적용 되도록 개선 기존에는 (Col)Required:1 을 설정하면 Required의 별표 아이콘과 헤더에 설정한 HtmlPrefix 와 HtmlPostfix 의 영역이 겹쳐,HtmlPrefix 와 HtmlPostfix 가 출력 되지 않았습니다.Required:1 을 설정할 때도 정상적으로 HtmlPrefix 와 HtmlPostfix가 표시되도록 개선되었습니다.
 

Excel Fixibsheet-excel.js 1.1.17-20250410-16버전에서 해당 릴리즈가 이루어졌습니다.이번 릴리즈 내역 적용 시 servermodule 1.1.38 버전 이상이 필요합니다.1. (Method)down2Excel에 excelFontFamily 인자 추가  (Method)exportData 와 동일하게 엑셀 다운 시 폰트를 지정할 수 있는 excelFontFamily 인자가 추가되었습니다.
2. (Method)down2Excel 인자 exHead, exFoot 에 TextFont 기능 추가(Method)exportData 와 동일하게 엑셀 다운 시 exHead 와 exFoot 에 폰트를 지정할 수 있는 TextFont 기능이 추가되었습니다.
3. (Method)directDown2Excel로 엑셀 다운로드 시 downCombo 인자가 동작하도록 수정(Method)directDown2Excel 로 엑셀 다운로드 시Type:"Enum" 컬럼의 다운로드 형태를 TEXT 또는 CODE로 지정할 수 있는 downCombo 인자가 동작하도록 수정되었습니다.
[사용예제]var param = {        url:"./apex/yearApexDataList.do",        downCombo :"TEXT",                        // Enum 컬럼에서 Enum 에 해당하는 텍스트가 표출되도록 다운로드        fileName:"년단위 결산 정보.xlsx"};sheet.directDown2Excel(param);




### Ver 8.3.0.2-20250404-10

Fixed1. 필터 다이얼로그에서 스크립트 오류가 발생하는 현상 수정
2. 피벗 다이얼로그 오픈 시 스크립트 오류가 발생하며 동작하지 않는 현상 수정 

### Ver 8.3.0.1-20250403-19

New1. (Col,Cell)SuggestType 에 Validate 인자 추가 Suggest 사용 시 사용자가 편집을 끝낸 시점에 입력한 값을 판단하여 Suggest 에 없는 값이 입력될 경우 이전 값으로 되돌려버리는 Validation 인자가 SuggestType에 추가되었습니다.
[사용 예시]//Suggest기능 사용options.Cols = [    ...    {        ...        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",        SuggestType: "Validate"   // Suggest 에 선언한 이외의 값이 입력될 경우 이전 값으로 치환
    },    ...];

2. 피벗 다이얼로그에 레이아웃 바로 업데이트 기능 추가 및 ui 개선 ibsheet-dialog.js 1.1.35-20250403-15 이상의 버전이 필요합니다.ibsheet.js 8.3.0.1-20250403-19 버전에 맞는 locale 파일도 함께 적용되어야합니다.
피벗 다이얼로그에 피벗 조건을 변경할 때 시트에 즉시 반영되는 기능(바로 업데이트 버튼)을 추가했습니다.상단 컬럼 검색창과 피벗 관련 설명 문구가 추가되었습니다.
[수정된 피벗 다이얼로그]
3. (Method)showFilterDialog, (Method)hideFilterDialog 추가  (Cfg)UseFilterDialog 를 동적으로 제어할 수 있는 showFilterDialog(),hideFilterDialog() 가 추가되었습니다.
[사용 예시]sheet.showFilterDialog()         // 필터 다이얼로그 동적으로 표현
sheet.hideFilterDialog()           // 필터 다이얼로그 동적으로 숨김

Fixed1. InfoRow 의 ViewCount가 마우스가 떠나도 닫히지 않도록 개선 edge 브라우저에서는 일반 <select> 태그에 셀렉트 박스와 옵션 메뉴에 빈 공간이 발생하는 문제가 있습니다.edge 브라우저를 이용자들의 사용성을 높이기 위하여 InfoRow 의 ViewCount(select 태그로 구성됨)에 마우스가 떠나면 닫아주는 이벤트를 제거했습니다.
2. 아래 쪽 페이지가 렌더링 되지 않은 상태에서 (Method)addRow() 호출 시 스크롤 계산이 틀어지는 문제 수정 페이지마다 나눠서 렌더링 되는 (Cfg)SearchMode:2 등에서는 addRow를 호출하면 데이터 렌더링과 addRow 렌더링 시점이 어긋나있어 스크롤 계산이 틀어지는 현상이 있었습니다. 렌더링 시점을 수정하여 해당 현상이 수정되었습니다. 3. (Col)CanFilter:0 으로 (Cfg,Col)UseFilterDialog 제어 가능하도록 수정 4. 행 고정, 열 고정이 함께 되어있는 엑셀 파일이 정상적으로 업로드 되도록 수정  5. LWC 환경 지원 

Excel Fix1. 트리 구조의 시트가 (Method)down2Excel 로 트리 구조의 엑셀로 다운받아지지 않는 문제 수정 ibsheet-excel.js 1.1.16-20250403-15 버전에서 해당 릴리즈가 이루어졌습니다.

Dialog Fixibsheet-dialog.js 1.1.35-20250403-15 버전에서 해당 릴리즈가 이루어졌습니다.1. 피벗 다이얼로그 UI 수정아래와 같이 수정이 이루어졌습니다.컬럼 검색창 추가설명 문구 추가2. 브라우저 배율 확대 시 피벗 다이얼로그의 드래그 앤 드랍 동작이 이루어지지 않던 문제 수정
3. 피벗 다이얼로그에 '바로 업데이트' 기능 추가피벗 다이얼로그에 피벗 조건을 변경할 때 시트에 즉시 반영되는 기능을 추가했습니다.

### Ver 8.2.0.26-20250327-15

New1. exportData의 인자들을 설정할 수 있는 (cfg) ExportDataConfig 옵션 추가 (Cfg)Down2ExcelConfig 와 동일하게,exportData 함수 호출시 들어가는 인자를 공통으로 설정합니다.CommonOptions(static)에 Cfg속성에 설정하시면 모든 화면에서 exportData 함수 호출시 기본적인 속성을 설정하실 수 있습니다. 
[사용 예시]options.Cfg  = {  // 모든 화면에서 exportData 로 엑셀 다운로드시 기본 속성을 설정  ExportDataConfig: {    "sheetDesign":0,    "merge":1  }};

2. 시트를 태블릿 모드로 생성할 수 있는 (cfg) TabletMode 옵션 추가 태블릿 PC 와 같은 기기 사용 시 기존은 무조건 모바일 모드로 동작했습니다.TabletMode:1(true) 를 설정하면 태블릿 PC에서 시트가 모바일 모드가 아니라 태블릿 모드로 동작합니다.
3. 마우스 드래그 또는 shift+클릭으로 Type: "Bool" 컬럼만 선택할 경우 선택 셀의 체크를 변경하는 (col) SelectCheck 추가  체크박스를 여러 개 변경할 때 사용성이 간편하도록(Col)SelectCheck 인자가 추가되었습니다.해당 인자를 1로 설정 시, 다중 선택(마우스 드래그, shift+클릭) 시 체크박스의 값이 반전 됩니다.
[사용 예시]Cols : [      {        Header: { Value: "체크박스(Bool)", HeaderCheck: 1 },        Type: "Bool",        Name: "CheckData",        CanEdit: 1,        SelectCheck: 1,     // 다중 선택 시 체크박스의 값이 변경되도록 설정      },...
] 
4. 조회된 데이터에 Enum에 설정한 값이 없을 때, Enum, EnumKeys에 해당 값이 추가되는 (col) EnumStrictMode: 2 옵션 추가 기존에 있었던 (Col)EnumStrictMode: 1 은 Enum 에 없는 값이 들어올 때 단순히 셀에 해당 값을 표시하는 속성입니다.이번 릴리즈에서 2 옵션을 추가하여 Enum에 없는 값이 들어올 때 셀에 표시할 뿐 아니라 Enum, EnumKeys 에 자동으로 해당 값이 추가됩니다.
5. 조회된 데이터에 Enum에 설정한 값이 없을 때, Enum의 드롭다운 메뉴에 대체 텍스트를 표시할 수 있는 (col) EnumNoMatchText 옵션 추가 (Col)EnumNoMatchText:1 로 설정 시 Enum 에 설정한 값이 없을 때 Enum 셀에 들어온 값이 아닌 대체 텍스트를 표시할 수 있습니다.Enum 에 설정한 값이 셀에 출력되어야 함으로 (Col)EnumStrictMode:1 과 함께 사용하셔야 합니다.

Fixed1. shift+마우스 휠로 시트의 가로 스크롤이 이동하도록 수정 
2. 스크롤 바 클릭 시 다이얼로그가 닫히도록 수정 3. 마우스 휠 스크롤 시 필터 다이얼로그가 닫히도록 수정 4. 피벗 생성 시 데이터에 '가 존재하는 경우 피벗 시트의 헤더가 정상적으로 생성되지 않던 문제 수정 5. (cell) CanEdit이 없는 상태에서 데이터 행을 클릭하면 무조건 헤더 체크가 되는 현상 수정 6. 피벗 다이얼로그의 필터 다이얼로그가 닫히는 동작 개선  

Excel Fix1. down2Excel로 파일을 다운로드할 때, 틀고정을 설정할 수 있는 freezePane 인자 추가 ibsheet-excel.js 1.1.15-20250327-15 버전에서 해당 릴리즈가 이루어졌습니다.
2. 엑셀 다운로드 시 setFixedTop으로 고정한 행이 다운로드 되지 않는 문제 수정 

Dialog Fix1. 피벗 다이얼로그 빈 영역 클릭 시 필터 필드의 다이얼로그가 닫히도록 수정  ibsheet-dialog.js 1.1.34-20250327-15 버전에서 해당 릴리즈가 이루어졌습니다.


### Ver 8.2.0.25-20250320-15

New1. (Method)exportData 로 엑셀 파일을 틀고정해서 내보낼 수 있는 freezePane 인자 추가해당 인자는 비트 연산으로, 선택할 수 있는 옵션은 아래와 같습니다.freezePanenumber선택상단 행과 왼쪽 열을 틀 고정하여 다운로드하는 옵션입니다. 옵션 설정에 따라 다르게 틀 고정이 적용되어 다운로드되며, 비트 연산으로 동작합니다.0: 틀 고정을 적용하지 않음(default)1: 헤더 틀 고정 적용 (2과 함께 적용시 헤드 영역 틀 고정으로 동작)2: 헤드 영역 틀 고정 적용3: 왼쪽 고정 열 틀 고정 적용[사용 예시]sheet.exportData({
     freezePane: 5 // 헤드 영역 틀고정, 왼쪽 고정 열 틀 고정 적용
})



Fixed1. (Cfg)SearchMode:0 에서 단일 셀에 복사&붙여넣기 시 전체 데이터의 (Col,Cell)CustomFormat이 동작하는 문제 수정
2. (Cfg)SearchMode:5 에서 (Method)removeAll 후 데이터 행이 남아있는 현상 수정3. (Method)setAutoMergeCancel 로 취소된 HeaderMerge 가 화면에 바로 반영되지 않던 문제 수정4. (Cfg)Size 설정 시 시트의 우측 영역이 잘리는 문제 수정5. Type:Bool 헤더의 체크박스가 편집 불가 셀을 제외하고 전체 체크 여부를 판단하도록 변경6. (Cfg,Col)UseFilterDialog 의 텍스트 필터에 표시되는 placeholder 가 날짜와 숫자형 컬럼에만 표시되도록 수정기존에 모든 컬럼에서 placeholder가 "~로 구간 필터 설정 가능" 으로 표시되는 현상을 실제로 적용되는 날짜, 숫자형 컬럼에만 표시되도록 수정했습니다.
7. (Static)showCalendar 인자로 Range 사용 시 Date에 문자형으로 값을 넣을 경우 달력의 일자가 NaN으로 출력되던 문제 수정8. (Row,Col,Cell)Tip 에 실수형 문자('01','00','1','0' 등)를 사용할 경우 해당 문자들이 표시되지 않던 현상 수정 

Excel Fix1. (Method)down2Excel 의 인자 downCols:"Visible" 설정 시 보이지 않는 열을 포함하는 경우 머지가 깨지는 현상 수정ibsheet-excel.js 1.1.4-20250320-15 버전에서 해당 릴리즈가 이루어졌습니다.

### Ver 8.2.0.24-20250313-14

Fixed1. sheet 위에 별개의 공간이 있을 경우 드래그 객체의 좌표가 틀어지던 현상 수정
2. (Cfg)EditAutoMerge:1 설정 시 붙여넣기(Ctrl+V) 동작 속도 개선3. Date 컬럼의 년도 달력이 데이터의 년도를 기준으로 우측 상단에 고정되어 표시되도록 수정기존 년도 달력의 년은 5단위로 나뉘어서 데이터의 년도가 무조건 왼쪽에 위치하도록 동작했습니다.사용자가 과거와 미래 둘 다 용이하게 선택할 수 있도록 데이터의 년도가 무조건 우측 상단에 표시되도록 수정되었습니다.
[기존]
[수정]4. (Cfg,Col)UseFilterDialog 의 초기화 버튼이 모든 열의 필터링을 초기화하지 않도록 수정5. (Cfg,Col)UseFilterDialog 의 필터 리스트가 현재 필터된 데이터를 기준으로 생성되도록 설정6. (Method)exportData 인자 excelFontSize, excelRowHeight, excelFontFamily 가 옵션 ExHead, ExFoot 에 적용되지 않도록 수정7. 병합된 영역의 첫번째 행이 드래그 가능하도록 변경8. 찾기 다이얼로그 사용 후 조회함수(doSearch, loadSearchData) 를 호출하면 에러가 발생하던 현상 수정9. 시트에 표시되는 다이얼로그들의 닫기 동작이 통일성 있게 동작하도록 일부 개선각 공간을 클릭했을 때 커스텀을 제외한 다이얼로그들은 모두 닫히도록 개선되었습니다.
[각 공간 클릭 시 닫히는지 여부] 


Dialog New1. 서버모듈로 엑셀 업로드 시, mode:"NoHeader,HeaderSkip" 을 사용할 경우 SEQ 컬럼을 제외하고 값이 들어가도록 개선 서버모듈 ibsheet8-1.1.36.jar 이상 버전이 필요합니다.


### Ver 8.2.0.23-20250306-19

New1. Required 이미지 경로를 설정할 수 있는 (Cfg)RequiredImage 추가기존에 별표로 표시되었던 Required의 이미지를 변경하려면 main.css 에서 수정해야 했습니다.사용자가 손쉽게 Required 이미지를 변경할 수 있도록 (Cfg)RequiredImage 가 추가되었습니다.
[사용 예시]Cfg : {
     ...
     RequiredImage : "원하는이미지경로"
     ...
}

2. 피벗 필터 기능을 피벗 다이얼로그에서 적용할 수 있도록 추가ibsheet-dialog.js 1.0.32-20250306-19 이상 버전이 필요합니다.

▼ main.css 추가
```javascript
.IBMain b.box:hover{outline:2px solid #0a0a0a;color:#ffffff}
.IBPivotFilterDialogFooterButtons{width:190px;display:flex;justify-content:space-between}
.IBPivotFilterDialogFooterButtons>button{cursor:pointer;background-color:#bdc3c7;color:#fff;height:25px;width:80px;border:0}
```

▼ locale/ko.js 추가
```javascript
"ShowPivot": "피벗시트보기",

   /* 피벗필터 관련 내용 추가 */
      "PivotInfoMsg": "아래 영역 사이에 컬럼을 끌어 놓으십시오.",
      "PivotAll": "(모두)",
      "PivotSelected": "(다중 선택)",

      "ShowOrgSheet": "원본시트보기",
```

피벗 필터 기능은 ibsheet.js 8.2.0.1 에서 (Method)doPivotFilter 로 추가되었습니다.이에 맞춰 피벗 다이얼로그에서도 편하게 피벗필터 기능을 사용할 수 있도록 추가되었습니다.
추가된 피벗 필터 기능에 맞춰 피벗 다이얼로그 UI에 변경이 있습니다.
[변경된 피벗 다이얼로그]

Fixed1. (Method)setInfoRow 사용 시 InfoRow 구조가 정상 렌더링 되도록 수정
2. (Method)getRowsByDup 의 subsum 인자가 동작하지 않던 현상 수정3. 엑셀 업로드 시 업로드 메소드 인자로 mode:"NoHeader", mode:"HeaderSkip" 설정하면 SEQ 컬럼은 제외하고 값이 업로드 되도록 수정4. (Method)setTheme 시 Required 이미지가 계속 추가되던 현상 수정 

Dialog New1. 피벗 다이얼로그에서 피벗 필터 기능을 사용하도록 개선 ibsheet-dialog.js 1.0.32-20250306-19 버전에서 해당 릴리즈가 이루어졌습니다.[변경된 UI] 


### Ver 8.2.0.22-20250227-14

Fixed1. (Method)getSaveJson, getSaveString 호출 시 (Col)Required로 유효성 검사가 통과되지 않을 때, doSave와 달리 유효성에서 걸린 셀에 포커스/편집이 가지 않는 문제 수정
2. (Cfg)MergeCellsMatch가 설정된 상태에서 (Method)setMergeRange로 병합시킨 Type: Bool 셀의 값을 편집할 때 병합된 영역이 전부 수정되지 않던 문제 수정  

Excel New1. 서버에 전송하는 데이터에 유니코드(\u0006)가 포함된 경우 엑셀 다운로드가 되지 않던 문제 수정 ibsheet-excel.js ver 1.1.13-20250227-15 이상 버전이 필요합니다.

### Ver 8.2.0.21-20250220-14

New1. (Method)setValue 의 인자 ignoreOnEndEdit 를 ignoreEvent 로 통합ibsheet Ver 8.2.0.19-20250206-14 에서 이벤트 발생 여부를 제어할 수 있는 ignoreEvent 인자가 추가 된 이후,사용자의 편의성을 위해 onEndEdit 이벤트를 제어할 수 있는 ignoreOnEndEdit 인자를 추가된 ignoreEvent 로 통합했습니다.
[사용 예시]var setRow = sheet.getRowById("AR5")sheet.setValue({     row: setRow,     col: "sName",     val: "홍길동",     ignoreEvent : {          onEndEdit: true,                   // setValue 시 onEndEdit 발생X     }})
2. 시트 생성 시 Visible:0 으로 설정된 컬럼이 DOM에 생성되지 않는 (Cfg)NoRenderHidden 추가시트 생성후 최초 조회할 때 보이지 않는 컬럼은 Dom에 생성하지 않도록 합니다.해당 기능을 1으로 사용하면 보이지 않는 컬럼 (Visible: 0) 은 화면에 랜더링되지 않아 많은 컬럼이 있는 경우 보다 빠르게 랜더링 될 수 있습니다. 
[사용 예시]options = {
     Cfg : {
          NoRenderHidden :1 //보이지 않는 컬럼을 Dom에다 미리 생성하지 않도록 설정
     }
};


Fixed1. 조회 데이터가 0 이나 "0" 일 때 (Col,Cell)CustomFormat 이 적용되지 않는 현상 수정
2. Header의 Value 를 빈 값으로 설정하여 (Cfg,Col)HeaderCheck:1 로 체크박스만 표시할 때 헤더 정렬 이후 전체 체크 동작이 이루어지지 않는 문제 수정3. 시트 좌측에 여백이 있을 때, 시트의 달력이 시트 바깥으로 생성되던 문제 수정 4. Filter 셀에 설정된 (Cell)MenuItems 중 13,14,15번 옵션이 표시되지 않는 현상 수정5. (Cfg)SearchMode:0 에서 브라우저 배율이 변경된 경우 행의 높이 계산이 부정확하던 문제 수정6. Numbers 에서 편집한 Excel 파일을 불러오지 못하는 문제 수정Apple 에서 제공하는 스프레드 시트 프로그램인 Numbers 에서 Excel 파일로 내보낸 파일이 업로드가 되지 않던 현상이 수정됐습니다.7. (Cfg)NoVScroll, (Cfg)MaxVScroll 과 (Cfg)NoDataMiddle 을 함께 사용할 경우 NoData 행이 보이지 않는 현상 수정스크롤이 표시되지 않게 하는 NoVScroll 을 사용할 때 NoData 행이 NoDataMiddle 여부와는 상관없이 한 행 크기로 표시되도록 수정되었습니다.8. (Col)BreakPoint 를 설정한 상태에서 시트 너비를 변경한 뒤 (Method)rerender 를 호출해도 바로 적용되지 않는 현상 수정 9. 시트의 달력의 z-index가 body의 css 영향을 받던 문제 수정 

Excel New1. 시트의 데이터를 설정한 인자의 형식으로 추출하는 (Method)getSheetData 추가  getSheetData 에 들어가는 인자는 아래와 같습니다.type 인자를 통해 json 이나 csv 로 추출할 지를 지정할 수 있습니다.
NameTypeRequiredDescriptiontypestring선택시트 데이터를 JSON으로 추출할지, CSV로 추출할지 선택합니다.(default:json)colsstring선택추출할 컬럼을 지정합니다. 설정하지 않는 경우 모든 컬럼 데이터를 추출합니다. 보여지는 열만 추출하고 싶다면 "Visible"로 설정하면 됩니다.colDelimstring선택출력 대상의 컬럼 구분자를 지정합니다. 해당 옵션은 type을 CSV로 지정한 경우만 사용하실 수 있습니다.(default:,)formattedTextstring선택데이터를 포맷이 적용된 문자열로 추출할지 여부를 설정합니다.(default:0)newLinestring선택셀 데이터에 개행이 포함되어 있는 경우, 출력 데이터의 개행 구분자를 설정합니다. 해당 옵션은 type을 CSV로 지정한 경우만 사용하실 수 있습니다.(default:\r\n)rowDelimstring선택출력 대상의 행 구분자를 설정합니다. 해당 옵션은 type을 CSV로 지정한 경우만 사용하실 수 있습니다.(default:\r\n)stylePropertystring선택행과 셀에 관한 스타일 관련 속성값을 포함하여 추출할지 여부를 설정합니다. 해당 옵션은 type을 JSON으로 지정한 경우만 사용하실 수 있습니다.(default:0)[사용 예시]// 시트의 데이터를 json 형식으로 추출합니다.
sheet.getSheetData({type:"json"})

### Ver 8.2.0.20-20250213-13


Fixed1. 시트 셀의 value 값이 비어 있을 때 해당 셀에 onValidation 이벤트를 건너뛰는 현상 수정  
2. 비공개 기능이였던 (Method)getUserData 공개  getUserData() 는 시트 초기화 시 생성된 데이터를 리턴 합니다. (생성 시 넣는 정적 데이터 or 조회 데이터)조회 이후 수정, 삭제 등 데이터에 변화가 있어도 반영되지 않습니다.
시트 생성 시 create 에 정적 data 를 넣지 않는 경우,가장 마지막에 조회된 데이터가 getUserData() 로 리턴됩니다.
정적 data를 넣은 경우 getUserData() 시 동적으로 조회된 데이터는 무시하고 생성 시 넣은 정적 데이터가 리턴됩니다.
ex) 아래처럼 시트를 생성하고 getUserData() 호출 시 this.data 에 해당하는 데이터 리턴IBSheet.create({      id: 'sheet', // 생성할 시트의 id      el: 'sheetDiv', // 시트를 생성할 Dom 객체 및 id      options: options, // 생성될 시트의 속성      data: this.data // 생성될 시트의 정적데이터});
 
Common New1. 특정 열의 값을 전부 변경할 수 있는 (Method)setAllColValue 추가 ibsheet-common.js Ver 1.0.17-20250213-13 에서 지정한 컬럼의 값을 일괄 변경할 수 있는 사용자 함수가 추가되었습니다.시트ID.setAllColValue("변경할컬럼명", "변경할값") 으로 사용 가능합니다.
ibsheet-common.js 이전 버전의 사용자가 해당 함수를 사용하고자 하는 경우 아래 소스를 ibsheet-common.js 내부에 추가해주시길 바랍니다.
/** *  setValue를 이용하여 하나 컬럼의 전체 데이터행 값을 일괄적으로 변경합니다. *  @method     setAllColValue *  @return     boolean */Fn.setAllColValue = function (colName, value) {
  var dataRows = this.getDataRows();  if (!colName || typeof value == undefined || !dataRows || dataRows.length > 10000) return false;
  for (var i = 0; i < dataRows.length; i++) {    if (dataRows[i].Name != "SubSum") this.setValue({row : dataRows[i], col : colName, val: value, render: 1});  }
  return true;}


### Ver 8.2.0.19-20250206-14

New1. doSave, getSaveJson, getSaveString시 유효성 검사를 할 수 있는 onValidation 이벤트 추가 doSave, getSaveJson, getSaveString 등 저장 api 호출시, 사용자가 저장할 값들에 관해 유효성 검사를 진행할 수 있도록 셀 별로 순회하며 발생하는 이벤트 입니다.기본적인 필수입력 항목에 대한 확인이나 전체 입력 여부에 대한 확인은 저장 전에 시트가 내부적으로 확인하지만, 업무 로직에 따라 발생할 수 있는 각종 유효성 검사를 이 이벤트에서 처리합니다. 
[사용 예시]options.Events = {    onValidation: function (evtParam) {      if (evtParam.col != "TextData") return false;      var prevCol = evtParam.sheet.getPrevCol(evtParam.col);
      // TextData 컬럼의 이전 컬럼 값이 100보다 큰 경우 메세지창을 띄우고 저장을 중단합니다.      if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {        var index = evtParam.sheet.getRowIndex(evtParam.row);                    evtParam.sheet.showMessageTime({          message: index + "행 정수(Int)컬럼 셀 값이 100보다 큽니다.",          time: 10000,          buttons: ["OK", "취소"],        })
        return true;      }    }}
2. onBeforeSave 이벤트에 source.params(소문자) 추가이벤트 내부 인자의 통일성을 위해 기존 Params에서 params 로 첫글자가 소문자로 변경되었습니다.

3. (Method)setValue 호출 시 이벤트 발생 여부를 제어할 수 있는 ignoreEvent 인자 추가setValue 호출 시 ignoreEvent 설정을 통해 제어할 수 있는 각 이벤트의 사용방법은 아래와 같습니다.인자로 Json 형태로 옵션 세팅이 가능하며, 이벤트 이름을 key 값으로 넣고, true 리턴 시 지정한 이벤트가 발생하지 않습니다. NameTypeRequiredDescriptionOnChangeBoolean선택setValue시 발생하는 OnChange 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))OnSameBoolean선택setValue시 발생하는 OnSame 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))onEndEditBoolean선택setValue시 발생하는 onEndEdit 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))
[사용 예시]
var setRow = sheet.getRowById("AR5")

sheet.setValue({
     row: setRow,
     col: "sName",
     val: "홍길동",
     ignoreEvent : {
          OnChange: true,                   // setValue 시 OnChange 발생x
          OnSame: true                        // setValue 시 OnSame 발생x
     }
})



Fixed1. doFilter로 타임스탬프 값으로 필터링 시 NaN으로 표기 되는 문제 수정 .
2. Date타입의 열의 필터다이얼로그에서 구간 필터('20151201~20170101')가 동작하지 않던 문제 수정   Ver 8.2.0.19-20250206-14 이상의 css, locale 파일이 필요합니다.3. setAttribute로 Button 속성을 변경할 경우 기존에 설정된 이미지가 남아있는 현상 수정   4. group행의 항목들 간 간격이 사라진 문제 수정  5. SearchMode: 0에서 GroupSortMain을 설정할 경우 에러가 발생하던 문제 수정   6. SelectingCells: 0 설정 시 선택된 행 단위로 복사 / 붙여넣기 동작이 이루어지도록 변경  7. ChangeEdit:0, AddEdit:1가 설정 시 저장 후 편집불가 상태인 Enum열의 아이콘이 표시되던 현상 수정 8. 열 이동 시 (Cell) Span의 값이 초기화되는 현상 수정 9. default css를 불러오지 않을 경우 찾기 다이얼로그의 디자인이 깨지는 문제 수정  


### Ver 8.2.0.18-20250123-14

New1. 특정 아이디의 시트가 존재하는 지 확인하는 IBSheet.hasSheet API 추가기존에는 특정 아이디의 시트가 존재하는지 판단하기 위해 window 객체에 직접 접근하여 시트 ID를 탐색했습니다.특정 아이디의 시트가 존재하는 지 확인하는 로직은 꽤 많이 이용되는 로직이기 때문에(특히 SPA 사용자) 시트단에서 저리를 하는 방식으로 hasSheet API 가 추가되었습니다.
IBSheet.hasSheet("찾고자하는ID") 방식으로 호출하시면 해당 ID시트 존재 여부에 따라 true/false 를 리턴합니다.
[사용 예시]
IBSheet.hasSheet("sheet") // sheet 라는 id의 시트가 존재하면 true, 없으면 false return


Fixed1. InfoRow의 StatusLabel 개선  StatusLabel 관련 다국어 메세지가 추가적으로 locale 파일에 추가되었습니다.StatusLabel 의 개선 사항은 아래와 같습니다.클릭으로 Enum, Bool, Radio, Date 변경 시 메시지가 출력SummaryLabel과 StatusLabel 같은 영역에 표시되도록 수정데이터 조회 시 조회 메시지 표시되도록 수정.
2. (Col)AddEdit, ChangeEdit 가 셀 단위 설정이 가능하도록 수정  AddEdit, ChangeEdit는 컬럼에만 적용되는 속성이라 이후 개별 셀에 관해 AddEdit, ChangeEdit를 동적 컨트롤이 불가능했습니다.해당 속성의 사용성을 확대하기 위해 (Cell)AddEdit, ChangeEdit 도 추가되었습니다. 3. SelectingCells:0, InfoRow 의 SummaryLabel 사용 시 영역 선택이 제대로 되지 않는 문제 수정  4. (Cfg)XlsImportMode:1 을 통해 서버모듈이 호출될 경우 endRow, workSheetNo, workSheetName 옵션이 적용되지 않는 현상 수정 5. 소수점 처리 방식을 IBSheet7과 동일하게 동작하도록 수정   6. (Cfg)DragCell:1 설정하여 드래그 시 드래그하는 대상이 표시되지 않던 현상 수정   
Excel Fixed1. 엑셀 관련 메소드 인자 useXhr 을 설정하여 엑셀 파일 업로드 시 "과  \가 포함된 데이터가 정상적으로 업로드 되지 않던 현상 수정  엑셀 관련 메소드 인자인 useXhr : 1로 설정하여 xhr 통신을 통해 업로드 시데이터 "과 \ 가 포함된 데이터는 로드 되지 않거나, 이상하게 업로드 되는 현상이 수정되었습니다.

### Ver 8.2.0.17-20250116-14


Fixed1. 포커스가 불가능한 행에서 (Row,Col,Cell)NoColor:3 이 동작하지 않는 문제 수정 포커스가 불가능한 행에서 NoColor:3 이 동작하지 않고 여전히 상태값, AlternateColor 가 섞여서 표시되던 현상이 수정되었습니다.
2. (Static)showCalendar 의 OnClickWeek 이벤트에서 현재 달력의 년도와 다른 년도의 주차를 클릭했을 때 year 가 현재 달력의 년도로만 출력되던 현상 수정 (Static)showCalendar 에서 지원하는 OnClickWeek 이벤트에서 다음년도 1주차 or 이전년도 마지막주차를 클릭 시 제공 인자인 year 가 현재 달력이 열린 년도를 출력하는 현상이 수정되었습니다.  


### Ver 8.2.0.16-20250109-13

New1. importData로 'xls'파일을 선택 시 서버모듈 호출 여부를 설정하는 (Cfg) XlsImportMode 추가 ibsheet-excel.js 1.1.9-20250109-13 이상 버전이 필요합니다.
클라이언트 모듈인 importData 로 xls 파일을 업로드 시도하면"xls 파일 형식은 지원하지 않습니다." 라는 경고창이 출력되며 업로드가 불가능했습니다.
(Cfg)XlsImportMode:1 로 사용하면 importData 로 xls 파일을 선택했을 때 서버모듈로 동작하여 xls 파일을 업로드 할 수 있도록 동작합니다.
[사용 예시]
Cfg : {
     // importData 를 이용하여 xls 파일 업로드 시 서버모듈을 이용
     XlsImportMode:1 
}

2. DataFormat에 타임존을 포함하는 yyyyMMddTHHmmssz 추가 기존에는 DataFormat 에 타임존 포함 형식을 지정하면 인식하지 못하고 NaN으로 값이 표시되었습니다.DataFormat: yyyyMMddTHHmmssz 의 타임존 포함 형식이 지원됩니다.

Fixed1. (Col)Range를 설정한 Type: Date 열에 (Method)setValue로 기간 형태의 값(20250101~20250107)으로 변경 가능하도록 수정  Range를 설정한 Type:Date 컬럼에 setValue 로 기간 값을 넣었을 때 타임스탬프만 인식하던 현상을 수정했습니다.
2. (Method)addCol로 열 추가 시 (Col)Header에 설정한 속성들이 반영되지 않던 문제 수정 addCol로 열을 추가할 때 Header에 선언한 Color 등과 같은 속성이 반영되도록 수정했습니다.3. Type : File 열에  (Cell)Alias가 적용 안되는 문제 수정  4. (Col)addEdit 을 셀 단위로 설정할 수 있도록 개선  5. 대량의 데이터 복사 시 브라우저가 느려지는 현상 개선   6. (Method)doFilter로 Type: Date 열을 필터링 할 때 잘못된 값이 들어가는 현상 수정  7. (Cfg)SearchMode: 1에서 (Cfg)HeaderMerge, DataMerge 3, 4, 5가 동작하지 않던 문제 수정   8. (Col)CustomFormat을 설정한 경우 (Method)exportData 시 엑셀 파일에 셀의 빈 값이 정상적으로 표현되도록 수정 9. (Cfg)SearchMode: 1에서 (Method)importData의 인자 append로 데이터를 추가할 때, 시트 동작이 멈추는 문제 수정10. (Col)FormulaRow가 설정된 열이 많은 경우 (Method)setValue 시 데이터 변경 속도 개선 
Locale Fixed1. cn, jp locale 메시지 중 영어 메시지들을 각 국가 별 언어로 변경  몇 부분 번역이 누락된 중국어, 일본어 locale 파일의 번역이 완료되었습니다.
Server Module Fixed1. SSL이 적용된 서버에서 이미지 다운로드가 이뤄지지 않는 현상 수정 기존에는 SSL이 적용된 서버에서 잘못된 이미지 경로를 호출하여 이미지가 다운로드 되지 않았습니다.이 현상은 서버모듈 1.1.34 로 릴리즈가 되었습니다.

### Ver 8.2.0.15-20250102-15

New1. (Cfg) ValidCheck로 나오는 경고 메시지 이후 동작을 제어할 수 있는 Edit, Focus 옵션 추가 기존에 ValidCheck: true 로 설정 시 경고 메시지 출력 이후 무조건 해당 셀에 Focus 가 가고, Edit 상태가 됩니다.해당 속성을 boolean 이 아닌, Json 형태로 설정하면 경고 메세지 출력 이후 Focus 와 Edit 을 커스텀하여 설정 할 수 있게 되었습니다.
[사용 예시]
Cfg.ValidCheck: {
      Focus : 1,                  // 경고 메세지 출력 이후 해당 셀에 Focus 를 주기
      Edit : 0                      // 경고 메세지 출력 이후 해당 셀은 Edit 상태로 들어가지 않기
}
2. makePivotTable에 평균 계산 기능 추가 Ver 8.2.0.15-20250102-15 에 맞는 locale 파일이 필요합니다.
기존에는 피벗 테이블을 만들 때 Sum, Count, Max, Min 으로만 컬럼을 계산 할 수 있었습니다.여기에 추가해 Type: "Avg" 를 추가하여 평균값을 계산할 수 있도록 수정하였습니다.

Fixed1. onShowMessage 이벤트에서 isAlert 인자를 사용해 시트 내의 경고창을 제어할 수 있도록 수정 onShowMessage 에서 isAlert 인자는 boolean으로,해당 메세지가 alert 으로 출력되는지(true) 아닌지(false) 를 확인할 수 있습니다.
2. (Cfg)SelectingCells : 0 에서 Ctrl+클릭 등으로 다중 선택 시 onSelectEnd 이벤트가 호출되도록 수정 SelectingCells:0 은 행 선택이 가능합니다. 이를 Ctrl+클릭이나 Ctrl+A 등으로 다중 행 선택 시 기존에는 onSelectEnd 이벤트가 호출되지 않았습니다.다중 셀 선택과 동일하게, SelectingCells:0 을 이용하는 경우라도 onSelectEnd 이벤트가 호출되도록 수정이 있었습니다.
3. (Col,Cell,Row)NoColor : 3이 (Cfg)CanEdit:0 에서 설정되지 않던 현상 수정 4. makePivotTable 기능 개선 Ver 8.2.0.15-20250102-15 에 맞는 locale 파일이 필요합니다.
data 별로 type을 설정 할 수 있도록 개선일반형 열을 data로 사용 시 count로 동작하도록 변경숫자형 열을 row, col로 설정이 가능하도록 변경 
Dialog Fixed1. makePivotTable 개선에 따라 관련된 피벗 다이얼로그 변경 개선된 피벗 다이얼로그를 이용하려면 ibsheet.js Ver 8.2.0.15-20250102-15 이상이 필요합니다.열 옆에 계산 방식이 표시되도록 변경기준 행, 기준 열, 값에 열의 타입 제한이 사라짐

### Ver 8.2.0.14-20241226-1443

New1. (Method)importData 를 통해 데이터를 로드할 때, 로드할 위치를 정할 수 있는 next 인자 추가기존에는 append 인자를 통해서 기존 데이터 밑에 추가할 지 말 지를 결정했습니다.(Method)loadSearchData 의 next 인자처럼 해당 인자에는 데이터 로우 객체가 들어오고,row 객체 설정 시 설정된 row 위에서부터 데이터가 append 됩니다.해당 인자 사용 시 append 인자는 무조건 true 여야 합니다.
[사용 예시]
var param = {append:1, next:sheet.getFocusedRow()};sheet.importData(param);
2. Color 속성을 별도로 지정한 경우 상태 색상을 무시하고 해당 색상을 그대로 적용하는 NoColor:3 추가 [NoColor:3 편집 전 - Color 로 지정한 색상이 들어가있음]
[NoColor:3 편집 후 - 수정 상태가 되었지만 Color 지정한 색상이 들어가있음]
3. (Method)setAutoMerge 에 고정 영역의 머지를 설정하는 headMerge, footMerge, headPrevColumnMerge, footPrevColumnMerge 인자 추가각 인자의 설명은 아래와 같습니다.headMergenumber선택Head 영역의 셀들을 병합할 때 적용할 기준 (default: 0)0 : 병합 안함1 : 열 기준 병합2 : 행 기준 병합3 : 열 우선 병합4 : 행 우선 병합5 : 열 우선 사방 병합6 : 행 우선 사방 병합footMergenumber선택Foot 영역의 셀들을 병합할 때 적용할 기준 (default: 0)0 : 병합 안함1 : 열 기준 병합2 : 행 기준 병합3 : 열 우선 병합4 : 행 우선 병합5 : 열 우선 사방 병합6 : 행 우선 사방 병합headPrevColumnMergeboolean선택Head의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부 (default: false)footPrevColumnMergeboolean선택Foot의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부 (default: false)[사용 예시]sheet.setAutoMerge({    dataMerge:1,     headerMerge:2,    headMerge:0,     footMerge:4});4. (Method)setAutoMergeCancel 의 mode 인자에 고정 영역을 선택하는 "Head", "Foot" 옵션 추가각 옵션의 설명은 아래와 같습니다.
"Head" : Head 영역에 있는 병합 해제"Foot" : Foot 영역에 있는 병합 해제 
[사용 예시]sheet.setAutoMergeCancel( {mode:"Head"} )


Fixed1. TimePicker(시분초 다이얼로그)에 시간 입력이 안되던 문제 수정2. (Col,Cell)Suggest 에서 (Cfg)MenuMaxHeight 가 적용되지 않던 문제 수정 3. 다이얼로그가 띄워진 상태에서 시트의 내/외부 클릭 동작이 구분되지 않던 문제 수정  4. (Cfg,Col)UseFilterDialog 의 필터 다이얼로그가 (Col)CaseSensitive 에 맞게 동작하도록 수정  5. (Col)Range : 1을 설정한 열에서 조회 데이터 중 '20241224~20241225;20241226' 같은 다중 영역 데이터가 정상적으로 출력되지 않는 문제 수정 
Excel New1. (Method)loadExcel 을 통해 데이터를 로드할 때, 로드할 위치를 정할 수 있는 next 인자 추가  ibsheet-excel.js Ver 1.1.8-20241226-14  이상의 파일이 필요합니다.기존에는 append 인자를 통해서 기존 데이터 밑에 추가할 지 말 지를 결정했습니다.(Method)loadSearchData 의 next 인자처럼 해당 인자에는 데이터 로우 객체가 들어오고,row 객체 설정 시 설정된 row 위에서부터 데이터가 append 됩니다.해당 인자 사용 시 append 인자는 무조건 true 여야 합니다.
[사용 예시]var param = {append:1, next:sheet.getFocusedRow()};sheet.loadExcel(param);

### Ver 8.2.0.13-20241219-13

New1. Required를 설정한 열의 필수표시를 보여주지 않는 (Cfg)RequiredPosition: None 추가 (Col)Required 를 설정하면 무조건 해당 컬럼 헤더에 필수 입력 표시(별표)가 출력되고 해당 표시를 없애기 위해서는 무조건 CSS파일을 수정해야했었습니다.
CSS 수정보다 간단하게 변경을 위해 RequiredPosition 속성에 "None" 설정을 추가해 좌,우측 외에도 CSS 파일 수정 없이 해당 표시를 없앨 수 있습니다.[사용 예시]Cfg : {    RequiredPositon: "None"}
[기존]
[RequiredPosion:"None" 적용 후]Fixed1. Type:Drag 열에 헤더명을 입력할 수 있도록 수정 기존에는 Type:Drag 인 컬럼에 Header:"임의문자열" 과 같이 설정해도 헤더에 적용되지 않고, 지정된 아이콘이 표시되었습니다. 수정 후에는 Header 에 Value 값(헤더명)을 지정할 시에는 해당 문자열이 헤더명으로 출력되고, 지정하지 않을 시에는 기존처럼 아이콘이 표시됩니다.
[기존]
[수정 후]2. exportDataBuffer사용 시 comboValidation을 설정할 경우 에러가 발생하는 문제 수정 3. Type:Date 컬럼에 Range를 사용할 경우 범위 데이터를 인식하지 못하는 현상 수정  
Excel Fix1. extendParam을 JSON 형태로 설정하고, extendParamMethod를 "POST"로 설정한 경우 Value 값에 들어간 & 값 그대로 서버로 전송하도록 개선  ibsheet-excel.js Ver 1.1.7-20241219-12  이상의 파일이 필요합니다.extendParam을 쿼리스트링 형태로 보낼 때는 extendParamMethod:"POST" 라도 여전히 &를 구분값으로 사용합니다.[사용 예시]sheet.directDown2Excel({    extendParam: {        a: "aaa&bbb"
    },    extendParamMethod: "POST"})
[기존 쿼리스트링으로 입력]
[ibsheet-excel.js Ver 1.1.7-20241219-12 적용 후 JSON으로 입력]

### Ver 8.2.0.12-20241212-13

New1.열 추가 동작이 랜더링까지 완료 된 후 호출되는 onAfterColAdd  이벤트 추가onAfterColAdd 이벤트는 시트에 새로운 열이 추가되어 렌더링 된 후 호출되는 이벤트입니다. [사용 예시]options.Events = {    onAfterColAdd:function(evtParam){        console.log(evtParam.col);    }}2. 상위 헤더가 병합된 경우 하위 헤더 열의 이동을 병합된 영역 내에서만 이동할 수 있는 (Cfg) CanColMove: 2 추가Fixed1. (Cfg)SearchMode : 2 에서 MainCol(트리 기준 컬럼) 이 중간에 있는 경우 헤더의 열 머지가 깨지는 현상 수정 2. SearchMode에 따라 showMessage로 표시한 메시지가 데이터 조회 후 사라지는 시점을 동일하게 수정  3. ctrl+v (붙여넣기) 동작에 대한 개선  변경된 ctrl+v (붙여넣기) 동작Type설명Int, Float숫자데이터(천단위 쉼표 허용)에 대해서만 붙여넣기 가능Enum, RadioEnumKey, Enum 에 해당하는 값에 대해서만 붙여넣기 가능다른 타입들에 대해서는 기존 동작 유지4. onAfterPaste 이벤트에 pasteError 인자 추가붙여넣기 실패한 행, 열, 값 에 대한 정보를 배열로 리턴 onAfterPaste: function (evParam) {    // console.log("onAfterPaste");    console.log(evParam.pasteError); // 붙여넣기 실패한 정보 리턴}

### Ver 8.2.0.11-20241205-15

New1.(Method)exportData 에 숨겨진 컬럼을 엑셀 숨김 처리하여 다운로드하는 hiddenColumn 인자 추가(Method)down2Excel 에는 Visible:0 인 컬럼을 엑셀 다운 시 엑셀 숨김 처리(접힘)하여 다운 받는 hiddenColumn 인자가 있습니다.exportData 에서도 동일한 기능을 사용할 수 있도록 hiddenColumn 인자를 추가했습니다.주의하실 점은 downCols 인자와 함께 사용하실 수 없습니다.
[사용 예시]sheet.exportData({
    hiddenColumn  : true
})
[위 코드 사용 예시]붉은 네모 안의 컬럼처럼 숨김 처리하여 다운로드 됩니다.Fixed1. (Cfg) ValidCheck 설정시 에러 팁이 제대로 뜨지 않는 현상 수정 2. 필터가 적용된 시트에서 exportData 시에도 시트의 전체 데이터가 다운로드 되게 변경 3. exportData 시 SEQ 정보가 없을 경우, "BLANK"가 아닌 빈 문자열이 들어가도록 수정 4. 시트가 body 왼쪽에 붙어있을 경우 Hint 위치가 오른쪽으로 이격 되는 문제 수정 5. onStartDrag, onStartDragCell에서 리턴 되는 html 위치를 마우스 우측 아래로 수정 

Dialog Fixed1. FindDialog와 UploadDialog의 일부 다국어 메시지를 참조하지 못하는 문제 수정 
Excel Fixed1. FindDialog와 UploadDialog의 일부 다국어 메시지를 참조하지 못하는 문제 수정 

### Ver 8.2.0.10-20241128-14

Fixed1. (Cfg)SearchMode: 1에서 열 머지를 설정한 경우 (Cfg)PageLength 이상의 데이터를 정렬 할 때 스크립트 에러가 나는 현상 수정 2. 브라우저 배율 변경 시 시트의 높이 계산이 반복되는 현상 수정 3. (Cfg)NoVScroll:1 인 경우 InfoRow의 Paging2 클릭 시 셀 클릭까지 발생하는 문제 수정 4. (Cfg)HeaderSortMode: 0 설정 시 ctrl+헤더클릭으로 단일 정렬이 이루어지지 않던 문제 수정 5. StatusLabel 다국어 지원이 가능하게 변경 Ver 8.2.0.10-20241128-14 이상의 Locale 파일(ko, en, jp, cn) 이 필요합니다.6. SelFocusColor 사용 시 헤더 행에서 랜더링이 발생하지 않도록 수정 7. 붙여넣기 기능 개선 기존 붙여넣기는 시트에 포커스된 셀을 기준으로 우측, 하단만 붙여넣기가 가능했습니다.일반적인 붙여넣기와는 기능을 맞추기 위해, 포커스와는 관계없이 자유로운 붙여넣기가 가능하도록 개선했습니다.

Dialog Fixed1. dialog가 다국어 메시지를 참조해서 생성되도록 수정 

### Ver 8.2.0.9-20241121-14

New1.Type:Enum 의 표시 포맷을 지정할 수 있는 (Col)EnumFormat 추가Enum 에 표시되는 포맷을 자유롭게 지정할 수 있는 (Col)EnumFormat 이 추가되었습니다.function 으로 지정할 땐 param으로 Enum 에 현재 선택된 value 값이 들어옵니다.
[사용 예시]{       ...        Type: "Enum",        Enum: "|a|b|c",        EnumKeys: "|01|02|03",        EnumFormat: function (param) {           // ; 가 없을 땐(0~1 건 선택되었을 땐)           if (param.indexOf(";") == -1 || param == "&#160;") {               // 해당 값을 그대로 return               return param;           }           // 여러 건 선택된 경우 valArr 배열에 넣기           var valArr = param.split(";");           // 현재 선택된 개수 구함           var length = valArr.length - 1 + "";
           // 'a;b'로 여러 값이 선택된 경우, 'a 외 1건'과 같은 형식으로 표시한다.           return valArr[0] + " 외 " + length + "건";        },        Range: 1       ... }

[위 예시 실행 결과]
Fixed1.헤더가 2줄 이상인 피벗 시트를 merge:1 로 엑셀 다운 시(down2Excel, exportData 공통) 헤더 머지가 이상하게 다운받아지는 현상 수정ibsheet-excel.js 1.1.5-20241121-14 이상 버전이 필요합니다.2. RecordColSpan, RecordRowSpan 사용 시 머지되는 컬럼에 Name 설정 시 스크립트 에러 나는 현상 수정3. (Cfg) ValidCheck 설정하여 유효성 검사 중 실패시 false를 리턴하지 않고 유효성 검사 실패한 첫 번째 셀 정보 리턴하도록 수정 4.file 타입 컬럼에 Format: "*Name* <img src='*Url*' height='200' width='200'>"과 같이 설정 시 이미지 미리보기가 표시되도록 수정 [설정 예시]
5. (Cfg) HeaderSortMode:0 설정시 ctrl+헤더클릭으로 단일 컬럼 소팅이 이뤄지지 않는 현상 수정 6.(Cfg) SelFocusColor 설정시 마지막 헤더 행에만 하이라이트 색상이 적용되도록 수정 [기존]
[수정 후]


### Ver 8.2.0.8-20241114-15

Fixed1. (Cfg)SelFocusColor :1를 설정한 상태에서 헤더에 SelectBox를 삽입시 셀 클릭할 때마다 SelectBox가 다시 접어지는 현상 수정 2. (Cfg) ValidCheck 설정시 삭제행은 유효성 검사 실행하지 않도록 개선 3. (Cfg) ValidCheck 설정시 유효성 검사 실패 관련 팁 띄울 때 행 id가 아닌 행의 인덱스로 띄우도록 개선 [수정 전]
[수정 후]
4. Enum 타입에서 (Col) IconAlign : "Right" 설정 시 텍스트가 무조건 좌측정렬되는 현상 수정 아래 컬럼을 넣고 데이터 조회 시... 
Cols : [
{"Header": "콤보(Enum)","Type": "Enum","Name": "ComboData",
"Align": "Right", IconAlign:"Right",
"Enum": "|대기|진행중|완료","EnumKeys": "|01|02|03"},
]
...

[수정 전 - Align:Right 가 적용되지 않음]
[수정 후 - Align:Right 가 정상적으로 적용됨]

### Ver 8.2.0.7-20241107-15

New1.유효성 검사 실행 시, 사용자가 설정한대로 유효성 검사를 실행할 수 있는 onValidate 이벤트 추가유효성 검사 실행 시 발생하는 onValidate 이벤트가 추가되었습니다.해당 이벤트 내부에서 다른 컬럼 조건에 따라 유효성 검사를 다르게 하는 등의 작업을 할 수 있습니다.이벤트 내부에서 false 를 리턴하면 유효성 검사를 통과합니다.
[사용 예시]event: {      onValidate: function(evtParam) {           // 컬럼이 텍스트 데이터면 유효성 검사 뛰어넘기           if(evtParam.col != "TextData") return false;                  // 앞 컬럼 가져오기           var prevCol = sheet.getPrevCol(evtParam.col);           // 앞 컬럼 값이 100이 넘는다면           if(evtParam.row[prevCol] >= 100) {              // 뒷 컬럼에 유효성 검사 실패 시 뜨는 툴팁을 넣고              evtParam.row[evtParam.col + "ValidationError"] = "정수(Int)컬럼의 값이 100보다 큽니다.";              // 유효성 검사에 걸리게 하기              return true;            }      }  }

2. (Method)saveCurrentInfo 호출 시 시트 아이디를 대신하여 커스텀 아이디를 설정하는 (Cfg)StorageKeyId 기능 추가 saveCurrentInfo 메소드를 통해 시트의 정보를 저장하는 경우 현재 시트의 id를 기준으로 저장이 됩니다. 따라서 시트의 이름을 random 하게 생성하는 경우 saveCurrentInfo 자체를 사용하기가 불가능했습니다.이를 보완하기 위해 (Cfg)StorageKeyId 가 추가되었습니다.(Cfg)StorageKeyId :"원하는아이디" 를 설정하면 saveCurrentInfo 시 지정한 아이디로 저장이 됩니다.
[사용 예시]Cfg:{
...
// 스토리지에 시트id 가 아닌 StorageKeyIdTest 로 저장
StorageKeyId: "StorageKeyIdTest",
...
}, ... 
[saveCurrentInfo 로 저장 결과]Fixed1. IE11 브라우저에서 시트가 그려지지 않는 현상 수정
2. Enum 컬럼 필터링 시 and 예약어(,)가 동작하지 않도록 수정Enum 컬럼은 필터행에서 입력이 아닌 값의 선택으로 동작하기 때문에 and 조건을 사용할 수 없습니다.이런 상황에서 Enum 에 and예약어(,) 를 값으로 넣으면 필터링이 제대로 되지 않는 현상이 발생해 Enum에는 사용하지 않는 and예약어를 고려하지 않게 수정했습니다.
3. (Cfg)UseHeaderSortCancel:1, HeaderSortMode:0 인 시트에서 단일 sort 후 다중 sort 가 되지 않던 현상 수정(Cfg)UseHeaderSortCancel:1, HeaderSortMode:0 에서 ctrl+헤더클릭으로 단일 sort를 한 후, 이후 다중 sort 를 시도하면 다중 sort가 되지않고 계속 단일 sort만 되는 현상을 수정했습니다.
4. ctrl+z 로 이전 동작을 취소하면 formula 가 재계산되지 않는 현상 수정값입력과 동일하게 ctrl+z 로 이전 동작을 취소하여 데이터가 변경되면 formula 가 재계산 되도록 수정했습니다.
5. (Cfg)FitWidth:1 사용 시 생성되는 더미컬럼 우측으로는 컬럼이동이 불가능하게 수정[더미 컬럼 뒤로 컬럼 이동 시도]
[수정 전 - 더미컬럼 뒤로 컬럼 이동이 됨]

[수정 후 - 컬럼 이동을 시도해도 컬럼 이동 가능 표시가 나오지 않고, 이동이 되지 않음]

6. importData 를 통해 한셀로 작성한 엑셀 파일을 불러오지 못하는 현상 수정
7. 데이터가 많은 시트를 exportDataBuffer 를 이용해 엑셀 다운 시 오류가 발생하는 현상 수정exportDataBuffer 는 두 개 이상의 시트를 하나의 엑셀 파일로 다운로드 할 때 사용합니다.데이터가 많은 경우 exportDataBuffer 를 사용해도 하나의 엑셀 파일이 아니라 오류가 발생하면서 시트 개수의 엑셀 파일이 다운되는 현상이 발생해 이를 수정했습니다.
8. 브라우저 배율을 바꿀 때 시트 높이가 계속 커지는 현상 수정
 (Method)doSave 시 (Event)onAfterSave 에서 데이터 파싱 오류코드가 이상한 값으로 나오던 문제 수정onAfterSave 이벤트에서는 기본적으로 result 코드를 0, -1, -3, -5, -6, -7  지원합니다. 지원하는 코드 이외의 값이 return 될 때가 있어 이를 수정했습니다.


### Ver 8.2.0.6-20241031-13

Common New1. 마우스 우클릭으로 출력되는 기본 컨텍스트 메뉴에 전체 체크, 전체 체크 해제 기능 추가 ibsheet-common.js Ver 1.0.12-20241031-13 이상 버전이 필요합니다.
New2. (Cfg)SearchMode:3 에서 헤더 클릭 시 시트 소팅을 진행하지 않고 백엔드로 소팅 정보를 전송하도록 하는 (Cfg)ScrollPagingServerSort 옵션 추가기존에는 sort 정보를 서버로 보내지 않고, 보여지는 화면에서 sort 가 이루어졌습니다. ScrollPagingServerSort : 1 설정 시 sort 정보를 서버로 보내, 받은 응답 데이터를 출력합니다.
자세한 과정은 아래와 같습니다.sort 정보를 담아 서버로 전송 -> sort 정보로 DB에서 쿼리 실행 -> 실행된 쿼리를 js로 보냄(재조회와 비슷한 과정)
[서버로 보내지는 파라미터]
Fixed1. appendPrevSheet:1 을 설정하여 (Method)exportData 로 엑셀 다운 시 .IBCellHeader css 에 설정한 폰트 색상이 적용되지 않는 현상 수정수정 후에는 appendPrevSheet:0 과 동일하게 .IBCellHeader css 에 설정한 Color 값이 엑셀 다운 시 사용됩니다.
2. 그룹행에서 그룹 취소 버튼이 제대로 출력되지 않는 현상 수정ibsheet Ver 8.2.0.6-20241031-13 이상의 css 파일이 필요합니다.
3. (Col)ResultMask, ResultMessage 를 함께 설정해놓은 컬럼에서 (Cfg)ValidCheck:1 옵션에 따른 유효성 검사를 실행했을 때 실패 시 자세한 팁이 제대로 표시되지 않는 현상 수정
[수정 전]
[수정 후]

4. (Cfg)SearchMode:0, AutoRowHeight:1 을 설정한 시트에서 이미지를 추가했을 때, 행 높이 자동 보정이 제대로 되지 않는 현상 수정
5 default_img css 이미지 파일이 누락되는 현상 수정ibsheet Ver 8.2.0.6-20241031-13 이상의 css 파일이 필요합니다.


### Ver 8.2.0.5-20241024-13

New- (Method)exportData 에 헤더만 머지하는 onlyHeaderMerge 옵션 추가onlyHeaderMerge : 1(true) 로 설정 시, 시트의 데이터 영역의 머지를 강제로 제한하고 헤더 영역의 머지만을 엑셀에 반영합니다. 주의할 점은 merge 인자가 1로 설정되어야합니다.(Method)down2Excel 의 onlyHeaderMerge 인자와 동일한 기능을 합니다.
[사용 예시]sheet.exportData({          merge: 1,                        // 시트 머지 반영          onlyHeaderMerge: 1     // 헤더만 머지});
[onlyHeaderMerge:0]

[onlyHeaderMerge:1]

- 신규행 추가 시 Enum 의 값이 자동적으로 세팅되는 (Cfg)AutoSelectFirstEnum 추가기존에 Enum 컬럼은 행 추가 시 값을 설정하지 않으면 빈값으로 추가되었습니다.AutoSelectFirstEnum :1 설정 시 해당 셀에 값이 없다면 첫 번째 데이터로 자동 선택됩니다.
[기존]
[AutoSelectFirstEnum : 1]
Fixed- (Method)getRowValue, getSaveJson 의 saveAttr 사용 시 특정 형태의 값이 정상적으로 추출되지 않는 현상 수정
- (Cfg)SearchMode:2 인 시트에서 행 높이가 다를 때 (Method)setScrollTop 로 지정한 높이에 스크롤 이동이 안되던 현상 수정
- 피벗행에 허용되지 않은 컬럼 드래그 시 커서 아이콘을 not-allowed 로 바꿔주도록 수정[수정 후]


### Ver 8.2.0.4-20241017-14

New- 동적으로 Foot 과 Head를 생성하는 (Method)showFixedRows 추가메소드의 인자로 Head,Foot 의 object 객체가 들어갑니다.[사용 예시]// 1. Foot 행 1개 생성var obj1 = {Kind : 'Foot', ... };sheet.showFixedRows(obj1);
// 2. Foot 행 2개, Head 행 1개 생성sheet.showFixedRows([    {        Kind:'Foot',       TextData: {          'Value' : '커스텀 Foot행1', 'TextColor': 'green', 'Span': 4      }    },    {        Kind:'Head',      TextData: {          'Value' : '커스텀 Head행', 'TextColor': 'red', 'Span': 3, 'Color': 'yellow'      }    },    {        Kind:'Foot',      Color: 'blue'    }  ]);
[예시 2번 실행 결과]
- 동적으로 Formula를 추가하는 (Method)addFormula 추가기존에는 동적으로 Formula를 추가하는 동작(컬럼을 추가하거나 등)을 설정하는 것이 복잡하고, 가끔은 불가능했습니다.addFormula 를 사용 시 CanFormula 가 자동으로 true 로 설정되고, CalcOrder에 설정한 Formula 가 순차적으로 추가됩니다.[사용 예시]// 1. Row에 colorFormula 추가var colorFormula = function (param) {    if (param.Row && param.Row["IntData"] === 0) {        return "#FFD9FA"    }}// 데이터 행의 배경색을 조건에 따라 변경sheet.addFormula(colorFormula, "", "", "Color");
// 2. Col 에 Formula 추가var Formula = function (param) {    if (param.Row["IntData"] > 100) {        return true    } else {        return false    }}// IntData의 값에 따라 체크박스 열의 체크 변경sheet.addFormula(Formula, "", "CheckData", "", true);[예시 1 실행 결과]
Fixed- Type:Link 컬럼 셀에 마우스 우클릭 시 링크가 동작하지 않도록 수정- (Cfg)FilterIgnoreEmpty : 1,8 이 정상적으로 동작하지 않는 현상 수정- (Method)getSaveJson, getSaveString, doSave 의 saveAttr 로 Object 형태의 Value 값이 추출되도록 수정- (Cfg)ValidCheck:1 을 설정하여 유효성 검사 실패 시 유효성 검사 통과에 실패한 첫 번째 셀에 포커스하고 편집 모드로 들어가도록 수정[통과 실패 예시]- (Cfg)ValidCheck:1 을 설정하여 유효성 검사 실패 시 셀마다 통과 실패 사유를 Tip 으로 띄우도록 수정Locale 파일 내부가 아래와 같이 수정되어야 Tip이 정상적으로 출력됩니다."ValidationError": {   "Required": "%1 행의 %2 열은 필수 입력 항목입니다.",   "Size": "%1 행 %2 열에 입력된 글자가 입력가능한 글자수보다 많습니다.",   "Mask": "%1 행 %2 열에 마스킹에 알맞은 값이 입력되지 않았습니다.",}[통과 실패 Tip 예시]- 피벗 지우기 버튼을 눌러 피벗 시트를 삭제할 때, 피벗행에 설정되어 있는 가로 행 가준, 세로 행 기준, 데이터도 함께 지워지도록 수정[피벗 시트 생성 후 피벗 지우기 버튼 클릭][기존 동작 - 피벗행이 그대로 유지됨][수정 후 - 피벗행이 초기화됨]

### Ver 8.2.0.3-20241010-14

New- (Method)doSave, getSaveJson, getSaveString 등의 저장 함수를 호출할 때, 사용자가 저장함수에서 설정한 인자(saveMode, col, validRequired)에 따라 유효성 검사를 진행하는 (Cfg)ValidCheck 추가Cfg:{
     ValidCheck: true // 저장 함수 호출 시 유효성 검사 실행
}
- 유효성 검사 통과 실패 시 띄울 메세지를 설정하는 (Cfg)ValidateMessage 추가Cfg:{
     ValidateMessage : "유효성 검사 실패!" // 유효성 검사 통과 실패 시 설정한 문구를 출력
}[실행 결과]
- (Method)getRowValue 에 saveAttr 인자 추가Row 내부에 기존에 선언한 컬럼값이 아닌 다른 데이터가 있는 경우 saveAttr:"추출할데이터key값" 을 선언하면 해당 데이터도 getRowValue 에서 리턴됩니다.여러 개를 추출하고자 하는 경우 "," 를 구분자로 작성하면 됩니다.
// 현재 포커스 하고 있는 row의 값들을 가져오는데, 
// 선언한 컬럼은 아니지만 Test, abc 라는 이름의 데이터도 들고오겠다.
sheet.getRowValue({row: sheet.getFocusedRow(), saveAttr:"Test,abc"})Fixed- (Cfg)EditArrowBehavior 을 설정한 상태에서 필터 다이얼로그 검색창에 값 입력 시 필터 다이얼로그가 꺼지고, 시트에 포커스 된 셀에 값이 입력되는 현상 수정
- (Method)doSave 인자로 quest:1 를 설정하여 호출 시 출력 되는 기본 메세지 수정[기존 - 기본 메세지로 전체 개수만 출력됨]
[수정 후 - 기본 메세지로 추가, 수정, 삭제 건수가 출력됨]

- 필터 다이얼로그의 텍스트 필터를 열어둔 상태에서 브라우저 스크롤 시에 다이얼로그의 위치가 업데이트 되지 않는 현상 수정
- (Method)addCol 로 (Col)FormulaRow 를 선언한 컬럼 추가 시 자동으로 FormulaRow:Sum 가 표시되도록 개선아래 addCol 로 FormulaRow 가 있는 컬럼 추가 후sheet.addCol( "EXT_SUBSUM", 1, -1, {Type:"Int",Header:"중간합계",Width:200,Color:"#DADADA", FormulaRow:"Sum"}, true );

[기존 - FormulaRow 가 표시되지 않음]
[수정 후 - 설정한 FormulaRow:Sum 이 자동으로 표시됨]
- 관계형 콤보를 사용하는 시트에서 (Method)addRow 로 행을 추가한 뒤 관계형 상위 콤보를 선택했을 때 하위 콤보 값이 자동으로 선택되지 않는 현상 수정

### Ver 8.2.0.2-20240926-15

New- 트리 시트에서 부모 체크 시 자동으로 자식노드를 체크할 지 여부를 설정하는 (Cfg)TreeCheckSync 에서 일부 자식행이 체크 되었을 때 부모 체크박스에 V(체크표시)가 표시되게 하는 (Cfg)TreeCheckSync : 2 옵션 추가기존에는 모든 자식행이 체크된 것이 아니면 부모 체크박스에 ? 아이콘이 표시되었습니다.해당 아이콘을 직관적으로 사용할 수 있도록 부모 체크박스에 체크가 되도록 하는 인자를 추가하였습니다.
[기존]
[TreeCheckSync:2]
Fixed- (Cfg)RowIndex 로 SEQ 컬럼을 설정하고 (Method)makeSubTotal 인자로 usermerge:0 을 사용할 때, 소계 데이터 행이 하나일 경우 데이터행과 소계행의 SEQ가 머지되는 현상 수정
- validRequired 메세지 통일
- (Cfg)SearchMode:2 에서 (Method)deleteRow, deleteRows 로 행 삭제 시 SEQ 컬럼이 갱신되지 않는 현상 수정
- (Method)deleteRows 를 사용할 때 인자로 del:2 를 설정하면서 100개 이상의 행을 삭제할 때 스크립트 오류가 발생하며 시트가 이상해지는 현상 수정

### Ver 8.2.0.1-20240912-15

New- 열이 이동하기 전에 발생하는 (Event)onBeforeColMove 추가열을 드래그로 다른 위치로 이동시키기 직전 호출되는 이벤트입니다.return true 시 컬럼 이동을 취소할 수 있습니다.onBeforeColMove: function(evt) {      // 열이 이동되는 위치가 SEQ 컬럼이면 열이동을 취소한다.      if (evt.toCol == "SEQ") return true;  }
- 필터된 데이터를 기반으로 피벗 시트를 생성하는 (Method)doPivotFilter, doPivotFilter 로 만들어진 피벗 필터를 취소하고 다시 피벗 시트를 생성하는 (Method)clearPivotFilter 추가피벗 다이얼로그로 해당 기능을 사용하기 위해서는 ibsheet-dialog.js ver 1.0.23-20240926-15 이상이 필요합니다.기존에는 원본 시트에 필터가 되어있더라도 전체 데이터를 기준으로 피벗 시트를 생성했습니다.여전히 전체 데이터를 기준으로 피벗 시트를 생성할 경우 (Method)makePivotTable 를 사용하시면 됩니다.
- 시트의 헤더에서 우클릭 시 컨텍스트 메뉴 호출 여부를 결정하는 (Cfg)UseHeaderContextMenu 옵션 추가헤더 메뉴 관련 소스는 common.js 에 존재하기 때문에 특정 페이지에서만 컨텍스트 메뉴를 사용하지 않으려면 Def.Header.Menu.Items : [] 를 선언해야 빈값으로 오버라이드 되어 비활성화 시켰습니다.해당 속성 추가 후에는 (Cfg)UseHeaderContextMenu : 0 으로 선언하면 우클릭 시에도 호출되지 않습니다.

### Ver 8.2.0.0-20240905-15

Fixed- 서브그리드의 셀을 선택 후 ctrl+v 로 값이 복사되도록 수정
- 구글 스프레드 시트에서 다운받은 엑셀 파일을 (Method)importData 로 시트에 업로드 시 발생하던 문제 수정
- (col)CanEdit:0, AddEdit:1 을 사용하는 컬럼에서 tab으로 셀이동을 할 때 편집 불가 컬럼처럼 건너뛰어지는 현상 수정

### Ver 8.1.0.102-20240829-14

New- 다중 컬럼 소팅 시 컬럼별 소팅 우선순위를 숫자로 표현하는 (Cfg)SortIconsNum 기능 추가Ver 8.1.0.102-20240829-14 이상의 main.css 파일이 함께 필요합니다.Fixed- 시트 두 개의 컬럼 개수가 다르고, 첫 번째 시트에 합계행이 설정되어 있을 때, (Method)exportDataBuffer 에 인자  appendPrevSheet : 1 을 사용해 엑셀 다운로드 시 첫 번째 시트에 설정된 합계행 색상이 제대로 반영되지 않는 현상 수정 
- 맥OS에서 트랙패드로 헤더행 좌우 가로스크롤 할 수 없도록 수정 윈도우 환경에서와 동일한 동작이 이루어지도록 수정


### Ver 8.1.0.101-20240822-14

New- 전체 설정이 아닌 컬럼 단위로 필터 다이얼로그를 설정하는 기능 (col)UseFilterDialog추가(cfg)UserFilterDialog 와 동일하게 컬럼에서 UserFilterDialog  을 선언하여 사용할 수 있습니다.Common Fixed- 개별 시트의 설정에 Menu 가 존재하는 경우 '컬럼 표시 여부' 가 메뉴 항목에 생성되지 않게 수정ibsheet-common.js Ver 1.0.11-20240822-1424 패치 내역 입니다.Fixed- 필터 다이얼로그 기능 개선필터 다이얼로그 헤더 아랫쪽에 띄우도록 개선필터 다이얼로그 안에 표시되는 데이터 정렬되도록 개선텍스트 필터의 select 박스에서 가장 아래쪽 값 클릭시 텍스트 필터 다이얼로그가 사라지는 현상 수정데이터 필터 다이얼로그의 "텍스트 필터" 문구 컬럼이 Int, Float 타입일 경우 "숫자 필터", Date 타입일 경우 "날짜 필터"로 표시되도록 개선숫자 타입 컬럼에서 데이터 필터 다이얼로그 띄울시 천단위 구분자 붙도록 수정
- (Method)setCheck 사용 시 Bool 타입이 아닌 셀은 false 가 리턴되도록 수정
- (Method)setCheck 사용 시 onAfterChange, onBeforeChange 이벤트가 발생하지 않도록 수정
- setFixedBottom 을 사용할 때 count 인자만큼 행이 고정되지 않는 현상 수정
- locale 파일에 따라 자동적으로 날짜 컬럼 포맷을 설정하도록 하는 예약어 추가ValueDescriptionm월, 일 데이터를 포함해서 포맷 형성("M/d")d년, 월, 일 데이터를 포함해서 포맷 형성("M/d/yyyy")h년, 월, 일, 시, 분 데이터를 포함해서 포맷 형성("M/d/yyyy H:mm")t시, 분 데이터를 포함해서 포맷 형성("H:mm")T시, 분, 초 데이터를 포함해서 포맷 형성("H:mm:ss")Y년, 월 데이터에 문자 포함해서 포맷 형성("4월 2013")D년, 월, 일 데이터에 문자 포함해서 포맷 형성("23일 4월 2013")l년, 월, 일 데이터에 문자 포함하고, 시, 분 데이터 덧붙여 포맷 형성("23일 4월 2013 9:10")L년, 월, 일 데이터에 문자 포함하고, 시, 분, 초 데이터 덧붙여 포맷 형성("23일 4월 2013 9:10:20")

### Ver 8.1.0.100-20240814-15

Fixed- Icon 이 설정된 병합 된 헤더의 일부를 숨길 때, 헤더 텍스트가 사라지는 현상 수정 
- Menu의 Edit : 1 사용 시 생성되는 input이 편집이 불가능한 현상 수정 
- (Method)exportData로 titleText 인자를 설정하여 다운로드 시 엑셀 2007에서 파일이 손상 파일로 인식하는 현상 수정 

### Ver 8.1.0.99-20240812-15

Fixed- exportData({appendPrevSheet:1}) 로 설정하여 두 개 이상의 시트를 exportDataBuffer 를 사용하며 다운로드 시, 엑셀 구성 파일 내부에 의도하지 않은 값이 삽입되는 현상 수정

### Ver 8.1.0.98-20240808-16

New- (Method)findRows 의 callback 파라미터로 해당하는 데이터 Row를 배열로 반환하는 result 인자 추가sheet.SearchExpression = 'aa';     sheet.findRows({          action: "Select",          callback: function(action, result) {               console.log(result)          }     });
[result 형태]Fixed- Type : Lines 인 컬럼에서 한글 이외의 문자를 공백 없이 넣었을 때 줄넘김이 이뤄지지 않는 현상 수정[수정 전]줄넘김이 정상적으로 이루어지지 않음
[수정 후]정상적으로 줄넘김 됨
- 조회된 데이터가 없을 경우 InfoRow 의 Paging2 가 자연스럽게 표시되도록 변경[수정 전]

[수정 후]

- setLocale 함수로 Locale 설정 변경한 뒤 달려 클릭 시 달력에 변경한 Locale 설정이 적용되지 않는 현상 수정
- Edge 로 demo사이트 접속했을 때 warning 문구가 표시되지 않도록 개선main.css 파일 내부에 IE에서 지원되지 않는 CSS 주석 처리 하여 수정수정 전@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){
           .IBTimePicker { width: 180px; }
           .IBTimePicker input { width: 25px; }
} 수정 후/*  해당 코드 주석처리
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){          .IBTimePicker { width: 180px; }          .IBTimePicker input { width: 25px; }}
*/ 

- 두 가지 이상의 시트를 exportDataBuffer 과 exportData({appendPrevSheet:1}) 을 이용해 다운로드 받을 때 특정 상황에서 스크립트 오류가 발생하는 현상 수정


### Ver 8.1.0.97-20240801-15

New- 편집 중 키보드 좌/우 방향키로 셀 이동 가능 여부를 설정하는 (Cfg)EditArrowBeavior 추가기존에는 편집 중 좌/우 방향키로 편집 중인 데이터 내부에서만 이동이 가능했습니다.EditArrowBeavior : 1 로 설정 시 좌/우 방향키로 편집 중인 데이터의 맨 끝에 도달했을 때 편집 불가인 컬럼은 건너뛰고 좌/우 셀로 이동합니다.EditArrowBeavior : 2 로 설정 시 좌/우 방향키로 편집 중인 데이터의 맨 끝에 도달했을 때 편집 불가인 컬럼은 포커스 이동 후 편집모드가 종료되면서 좌/우 셀로 이동합니다.Fixed- merge 시 개행이 이뤄진 첫 헤더가 숨겨져 있을 경우 나머지 숨겨지지 않은 행도 개행이 되지 않는 현상 수정[개행이 되어있고, merge 된 첫 헤더를 숨길 시]
[수정 전 -  개행이 풀림]
[수정 후 - 개행 유지]

- getSaveJson, doSave, getSaveString 에서 saveExtraAttr : 1을 설정했을 경우, object 형태의 값이 정상적으로 추출되도록 설정
- (Cfg)Pagination 사용 방법이 (Cfg)InfoRowConfig 에 인자를 선언하는 것으로 변경. Layout[Paging2], ViewCount, ViewFormat, Paging2Count 인자 추가[코드 예시]InfoRowConfig: {        Visible: 1,        Layout: ["Paging2","Count"],        ViewCount: 1,         Paging2Count: 10,        ViewFormat: "10|20|40|50|70|90|100",        Space: "Bottom"}
[실행 결과]

### Ver 8.1.0.96-20240725-15

New- 사용자가 시트에 수행한 동작을 표시해주는 Status 바 기능 추가 InfoRowConfig 의 인자 Layout 배열에 "StatusLabel" 을 설정하면 Status바를 사용하실 수 있습니다.Cfg : {
  InfoRowConfig : {
    Layout : ["StatusLabel"]
  }
}

Fixed- 필터 다이얼로그 사용 시 발생하던 버그(4건) 수정헤더행에 행 머지가 이뤄져있을 때, 필터 다이얼로그 아이콘을 클릭해도 필터 다이얼로그가 뜨지 않는 현상 수정컬럼에 CustomFormat이 적용되어 있을 때, 데이터 필터가 제대로 이뤄지지 않는 현상 수정소계행이 데이터 필터에 표시되는 현상 수정행 머지가 길게 이뤄진 셀이 있는 컬럼 대상으로 필터 다이얼로그를 열었을 때, 필터 다이얼로그가 이상하게 뜨는 현상 수정
- 시트가 여러 개이고, NoVScroll과 MaxVScroll을 사용할 때 시트 클릭 시 브라우저 스크롤이 이동하는 현상 수정
- 그룹행과 InfoRowConfig를 같이 사용하는 상태에서 포커스된 컬럼을 그룹행으로 드래그할 때 스크립트 오류가 발생하는 현상 수정 - 사용자가 자바스크립트 내장 객체인 Array 의 Prototype 메서드를 직접 규정한 상태에서 importData를 사용할 경우 스크립트 오류가 발생하는 현상 수정


### Ver 8.1.0.95-20240718-15

New- 클라이언트 모듈, 서버 모듈로 파일 다운로드 시 대기 이미지 표시 여부를 결정하는 (cfg)SuppressExportMessage 옵션 추가ibsheet-excel.js Ver 1.1.4 이상이 필요합니다.SuppressExportMessage : 1 로 설정하면 아래 다운로드 대기 이미지가 표시되지 않습니다.
Fixed- default 테마 외 다른 테마를 사용하면서 피벗 기능을 사용할 때 피벗 대기 이미지가 사라지지 않는 현상 수정
- onAfterChange 이벤트에서 Enum, Lines, Text 컬럼 타입의 Value 값이 String 으로 리턴되도록 수정
- (cfg)SearchMode:0, CalcMergeMode : 1 를 사용하면서 소계행이 있는 시트에 Type:Date 인 컬럼이 머지되어 있을 때, 스크롤 시 간헐적으로 데이터 값이 타임스탬프 값으로 변경되는 현상 수정




### Ver 8.1.0.94-20240711-15

New- focus 함수로 현재 선택된 셀을 호출하는 경우에도 포커스 이벤트가 발생하도록 하는 (Method)focus 인자 triggerOnFocus 추가기존에는 focus 함수로 현재 선택된 셀을 호출하는 경우 false 가 리턴되면서 포커스 관련 이벤트(onBeforeFocus, onFocus)가 발생하지 않았습니다.focus 함수 호출 시, 인자로  triggerOnFocus:1 을 추가하면 focus 함수로 현재 선택된 셀에 포커스를 다시 줄 경우 true 를 리턴하면서 포커스 관련 이벤트가 발생합니다.
- 필터 다이얼로그로 필터링하는 (Cfg)UseFilterDialog 옵션 추가사용을 위해서는 Ver 8.1.0.94-20240711-15 이상의 main.css, locale/언어.js 파일이 필요합니다.
Fixed- Enum 컬럼 데이터를 getValue 로 추출 시 무조건 문자형으로 return 되도록 수정기존에는 getValue 로 Enum 데이터를 추출 시 상황에 따라 숫자형으로 return 되는 경우가 있었습니다. 수정 후에는 어떤 상황이든 무조건 문자형으로 return 됩니다.
- 외부 컴포넌트에서 탭 이동으로 시트에 포커스 할 때 곧바로 현재 포커스된 셀에서 다음 셀로 포커스 이동하지 않도록 수정[아래와 같이 외부 컴포넌트에서 탭으로 포커스를 이동할 때]
[수정 전] 기존 포커스 된 셀 다음 셀에 포커스가 바로 이동
[수정 후] 기존에 포커스 된 셀에 포커스 유지

- (Method)makePivotTable 의 criterias 인자를 선택 인자로 변경criterias 인자는 (Cfg)UsePivot:1 사용 시 생성되는 피벗 관련 고정 행에 각 컬럼을 Drag&Drop 가능 여부를 설정하는 데, (Cfg)UsePivot 를 사용하지 않을 때는 필수일 필요가 없다고 판단해 선택 인자로 변경되었습니다.

### Ver 8.1.0.93-20240704-15

Fixed- row["CanDrag"] = 0 으로 설정 시 Type:Drag 컬럼의 드래그가 불가능하도록 수정
- EditMaskFunc 기능 사용 시 스크립트 오류가 발생하는 현상 수정
- 그룹핑과 InfoRow 를 함께 사용하는 상태에서 그룹핑 해제 시 스크립트 오류가 발생하면서 시트가 동작하지 않는 현상 수정

### Ver 8.1.0.92-20240627-16

New- 시트에 포커스나 영역 선택 시, 헤더행과 SEQ 컬럼행의 배경색이 변경되게 하는 (Cfg)SelFocusColor 속성 추가SelFocusColor:1 로 설정하면 포커스나 영역 선택 시에 헤더, SEQ 컬럼 행의 배경색이 변합니다.
[기존 영역 선택]

[SelFocusColor:1 사용 시 영역 선택]

Fixed- 피벗 시트 생성 중 대기 메세지가 출력되도록 기능 개선[피벗 차트 생성 시 기본으로 출력되는 대기 메세지]

- showCalendar(static) 의 달력 사이즈를 적용하는 StyleSize 파라미터가 CalSize 로 명칭 변경styleSize 가 간헐적으로 설정되지 않던 현상도 수정되었습니다.
- Type : Drag 인 컬럼에 CanEdit : 1 설정 시 해당 컬럼에 마우스를 올렸을 때 커서 포인터가 grab 으로 변하지 않는 현상 수정
- SearchMode : 3 을 사용하며 PageLength 의 값이 시트 높이보다 작을 때 스크롤이 생기지 않는 현상 수정

### Ver 8.1.0.91-20240620-16

New- 편집 중인 데이터 값을 변경하는 setEditText(value) 메소드 추가valuestring or number필수변경하려는 문자열 혹은 숫자sheet.setEditText("안녕하세요");        // 편집 중인 데이터 값을 "안녕하세요" 로 변경
Fixed- setFormulaRow 설정 시 val 값이 없을 때 format 이 사라지는 현상 수정format 을 "#,##0" 으로 설정 한 합계행을 없앴다 다시 생성[수정 전]
[수정 후]

- addRow 의 init 옵션 사용 시 문자열이 숫자 형태로 입력되는 현상 수정

### Ver 8.1.0.90-20240614-16

Fixed- euc-kr 빌드 시 오류 수정


### Ver 8.1.0.89-20240613-15

New- (Method)showCalendar() 함수에서 주차를 선택할 때 호출되는 OnClickWeek Calendar 이벤트 추가주의 : sheet 의 이벤트가 아니라 Calendar 의 이벤트입니다.var calOption = {    Weeks: 1,    // 주차를 선택하면 호출되는 이벤트    OnClickWeek: function (year, week) {        console.log(year+"년"+week+"주차를 선택했습니다.")    }}IBSheet.showCalendar(calOptions, {    Mouse: 1});Fixed- gray 테마를 사용하면서 트리 시트를 사용했을 때,  (cfg)SearchMode:0, Size:"Tiny" 를 설정하고 LeftCol 을 설정하면 좌우 행의 높이가 맞지 않는 현상 수정[수정 전]
[수정 후]

### Ver 8.1.0.88-20240605-15

New- 편집 시 숫자 컬럼에 스피너를 표시할 수 있는 (Col)SpinnerVisible, (Col)SpinnerStep, (Col)SpinnerMax, (Col)SpinnerMin 추가Ver 8.1.0.88-20240605-15 의 main.css 도 함께 적용해야합니다.(Col)SpinnerVisible 

Type이 Int, Float인 열에서 편집 시 화살표를 표시합니다.설정 시 input의 type이 number로 생성됩니다.추가적으로 SpinnerStep, SpinnerMax, SpinnerMax 을 통해 input의 step, min, max를 설정 할 수 있습니다. 

- 드래그해서 행을 옮길 수 있는 (Col)Type : "Drag" 추가Ver 8.1.0.88-20240605-15 의 main.css 도 함께 적용해야합니다.[Type:Drag 인 컬럼 드래그]행 옮기기 가능
[Type:Drag 이외 컬럼 드래그]셀이 선택 됨
-  (Static) showCalendar 로 생성하는 달력이 (Cfg)Size 에 영향을 받지 않게 하는 IgnoreSize, StyleSize 를 (Method)showCalendar 의 calOption 인자 속성으로 추가IgnoreSizeboolean달력의 Size가 Cfg 설정의 Size와 별도로 동작 시킵니다.(해당 옵션을 true로 적용하면 Normal이 적용됩니다.)StyleSizestring달력의 Size 를 적용합니다. Size cfg 와 동일한 옵션값을 지정할 수 있습니다.Fixed- Type : Data 컬럼에서 "2024-05-17T15:08:08+09:00" 와 같은 날짜 데이터도 정상적으로 표시되도록 수정
- SearchMode : 5 에서 페이지 네비게이션이 동작하지 않던 문제 수정
- allTypeToText 인자 설정 후 (Method)exportData 시 타임스탬프 값이 날짜 형식으로 다운로드 되게 수정


### Ver 8.1.0.87-20240530-15

New- (Col) CustomFormat 을 사용하며 함수를 사용할 때 시트 객체와 컬럼명을 새로운 인자로 추가{Type: "Text", Name: "ISDNS", CustomFormat: function(v, sheet, col){
        console.log("시트객체 => " +sheet)
        console.log("컬럼명 => " +col)
}

- 행의 상태가 Added(추가) 상태일 때 편집 가능 여부를 설정하는 (Col)AddEdit, 조회/수정 상태일 때 편집 가능 여부를 설정하는 (Col)ChangeEdit 인자 추가options.Cols = [
        //addRow 등을 통해 추가된 행의 AA 컬럼은 편집 불가
    {Type : "Int" , AddEdit : 0, Name : "AA},

        // Changed 또는 조회 행의 BB 컬럼은 편집 불가
    {Type : "Int" , ChangeEdit : 0, Name : "BB},
]

Fixed- (Cfg)MergeCellsMatch : 1 설정하고 머지된 컬럼에 값 입력 후 머지 되지 않은 컬럼을 편집 완료 시점에 값이 강제로 머지된 컬럼의 값으로 변경되는 현상 수정

### Ver 8.1.0.86-20240523-16

New- 그룹 셀에 취소 버튼 추가 및 그룹 버튼의 크기 데이터 길이에 따라 생성되도록 디자인 개선사용을 위해  main.css 파일이 필요합니다.

- 파일 선택 창에서 취소/닫기 버튼 클릭 시 발생하는 onCancelFile 이벤트 추가onCancelFile : function(evtParam){
    console.log("파일 업로드를 취소 했습니다.)
}Fixed- Theme 사용 시, Size 속성의 행 최소 높이보다 Def.Row.Height 높이가 클 경우 SEQ 컬럼만 글자가 틀어져 보이는 현상 수정[수정 전]
[수정 후]


- (cfg)SearchMode : 5 에서 페이지 이동을 하지 않았는데 페이지 이동 이벤트가 발생하는 현상 수정
- IE11 에서 지원되지 않는 문법 수정ibsheet-dialog.js Ver 1.0.19-240523-16 ibsheet-common.js Ver 1.0.9-20240523-16위 파일에서도 IE11 에서 지원되지 않는 문법 수정이 있었습니다.
- (cfg)SearchMode : 5, SortCurrentPage : 0 설정했을 때 전체 데이터가 아닌, 페이지 내에서 소팅이 이뤄지는 현상 수정


### Ver 8.1.0.85-20240516-16

New- 한글 파일(Hwpx)을 다운 받는 기능인 (Method)down2Hwpx, down2HwpxBuffer 추가사용을 위해선 ibsheet-excel.js ver 1.1.2-20240516-15 이상 파일이 include 되어야합니다.
- chart 다이얼로그를 보여주는 (Method)showChartDialog 추가시트의 선택한 영역을 차트로 시각화 할 수 있는 기능이 추가되었습니다.ibsheet-dialog.js ver 1.0.17-20240516-16과 IBChart 관련 파일이 포함되어야 사용하실 수 있습니다.

Locale Fixed- locale.js 파일에 (Method)setCurrentInfo 빈 값이나 잘못된 값이 들어갔을 때 출력되는 Alert 에러 메세지 추가
"EmptyInfoErr": "시트 정보를 입력해 주세요.", 
"InputInfoErr": "입력한 시트 정보가 올바르지 않습니다.",


Fixed- (Method)setCurrentInfo 에서 빈 값이나 맞지 않는 정보를 입력한 뒤 데이터 조회 시 헤더 머지가 풀리는 현상 수정아래처럼 헤더 머지가 되어있는 시트에 setCurrentInfo 에 잘못된 정보를 넣고 조회
[수정 전]헤더 머지가 풀려서 조회 됨

[수정 후]setCurrentInfo 에 빈 값이나 잘못된 값을 입력하면 alert 출력 되고 setCurrentInfo 가 중단되게 변경(정상적인 문구가 출력 되기 위해서는 Locale Fixed 내역이 적용되어야 합니다.)

- (Cfg)searchMode:5 에서 페이지 네비게이션 기능이 동작하지 않는 현상 수정페이지 네비게이션이 맞지않는 페이지를 표시하지 않음.페이지 번호 클릭으로 페이지 이동이 정상적으로 되지 않음.전체 데이터가 NaN 으로 표시되는 등의 현상을 수정했습니다.


### Ver 8.1.0.84-20240509-16

New- 단색 테마 추가

Fixed- default_img 테마 사용 시 정렬 아이콘 오름/내림차순 디자인이 직관적으로 변경되도록 수정[수정 전]내림차순 정렬 이지만 활성화 된 정렬 아이콘이 회색으로 표시가 되어 오름차순으로 인식됨
[수정 후]활성화 된 정렬 아이콘을 흰색, 해당 없는 아이콘을 회색으로 변경해 직관적으로 인식됨
- (Cfg)AutoRowHeight : true 설정 상태에서 Solid 행에 컬럼 Drag&Drop 시 스크립트 에러가 발생하는 현상 수정AutoRowHeight:true 설정 뒤 Solid 행에 아래처럼 Drag&Drop 시
[수정 전]스크립트 에러 발생
[수정 후]에러 발생하지 않고 정상적으로 동작함
- onDataLoad 이벤트에서 makeSubTotal 사용 시 인자인 excludeSubTotalRowCount 가 간헐적으로 적용되지 않는 현상 수정



### Ver 8.1.0.83-20240502-15

Fixed- (Method)hasChangeData 사용 시 0과 1만 리턴되도록 개선[수정 전]특정 상황에서는 2, 3 리턴이 발생
[수정 후]0과 1 리턴만 발생
- 시트 초기화 시 (Cfg)InfoRowConfig 에 설정하지 않은 레이아웃을 (Method)setInfoRow 로 설정할 시, 설정한 레이아웃이 제대로 적용되지 않는 현상 수정

- onDataLoad 이벤트에서 excludeSubTotalRowCount 인자를 설정해서 소계 생성 시 excludeSubTotalRowCount 설정이 적용되지 않는 현상 수정
onDataLoad 이벤트에서 excludeSubTotalRowCount 인자 설정 후 소계 생성onDataLoad : function(paramObject) {    sheet.makeSubTotal(         ~~        ,excludeSubTotalRowCount : 1);}
[수정 전]소계행에 SEQ 컬럼 번호 표시
[수정 후]소계행에 SEQ 컬럼 번호 표시 안함
- (Cfg)AutoRowHeight 가 SearchMode:0 에서만 동작되도록 수정

### Ver 8.1.0.82-20240429-13

Fixed- onEndEdit 이벤트에서 return true 사용 후 달력 클릭 시 onEndEdit 이벤트가 두 번 발생하는 현상 수정


### Ver 8.1.0.81-20240426-16

Fixed- (Method)doSearchPaging 사용 시 POST 메소드로 파라미터를 넘겼을 때 (Method)doSearch 와 동일하게 파라미터를 인코딩 동작하도록 수정


### Ver 8.1.0.80-20240425-14

Fixed- onEndEdit 이벤트에서 return true 하고 잘못된 값 입력한 뒤 달력 클릭 시 onEndEdit 이벤트가 두 번 발생하는 현상 수정onEndEdit 이벤트 발생 시 console에 "onEndEdit" 출력하도록 설정onEndEdit : function(){    console.log("onEndEdit");    return true;  }잘못된 값 입력 후 달력 클릭
[수정 전]onEndEdit 이벤트 2번 발생
[수정 후]onEndEdit 이벤트 1번 발생
- (Method)doSearchPaging 사용 시 GET 메소드로 파라미터를 넘겼을 때 파라미터가 이중으로 인코딩되는 현상 수정
파라미터에 searchMode="가" 를 보냈을 때[수정 전]

[수정 후]

- (cfg)UseAnimations:1 사용하고 데이터 행이 병합 되어 있을 때 헤더 체크 시 스크립트 에러가 발생하는 현상 수정


### Ver 8.1.0.79-20240418-16

Fixed- TextSizeFormula 사용 시 em 단위로 글자 사이즈를 세팅할 때 행 높이가 틀어지는 현상 수정[수정 전]미세하게 행 높이가 맞지 않음[수정 후]

- (cfg)SearchMode:0, SearchProgress : true 설정한 후, onSearchFinish 이벤트에서 특정 행/셀에 포커스를 줄 때 스크롤이 이상하게 동작하는 현상 수정onSearchFinish 이벤트에서 36번째 행에 포커스를 줌[수정 전]포커스는 갔지만 스크롤이 이상한 위치에 있음
[수정 후]

- (cfg)CanEdit:0,3,4 설정 시 페이지 네비게이션 입력란이 비활성화 되는 현상 수정CanEdit:0,3,4 설정 후 페이지 네비게이션 입력란에 입력 시도[수정 전]눌러도 편집 불가
[수정 후]


- Ctrl+F 로 찾기 다이얼로그를 띄우는 기능 추가기존 > Ctrl+Shift+F 를 눌렀을 때만 찾기 다이얼로그를 띄움수정 > Ctrl+Shift+F 는 동작X (common.js 1.0.7 버전 이후를 적용해야 동작하지 않습니다.)            Ctrl+F 를 눌렀을 때만 찾기 다이얼로그를 띄움



### Ver 8.1.0.78-20240411-18

New- (Method)makeSubTotal 에서 소계/누계행을 SEQ 컬럼과 InfoRow 행의 개수 카운트에서 제외하는 excludeSubTotalRowCount 옵션 추가
소계행이 4건인 테이블에 SEQ 컬럼 추가,  InfoRow로 행의 개수 카운트를 추가한 시트[excludeSubTotalRowCount : 0]

[excludeSubTotalRowCount : 1]


Fixed- (Cfg)UseAnimations 기능 사용시 애니메이션 효과 개선Timepicker 버튼에 마우스 오버 시 애니메이션 효과 추가셀값을 수정했을 때의 효과 추가
- 데이터를 로드하는 메소드를 사용한 뒤에 Solid행의 Expression Action 속성이 디폴트값인 Filter로 갱신되어 Filter 만 수행하는 현상 수정
- (Method)findRows로 Type:Pass 컬럼이 검색되지 않도록 수정[수정 전]
[수정 후]

- (Method)doSearchPaging 의 beforeSend 인자에 설정한 함수에서 evtParam.param과 같은 방식으로 서버로 보내는 파라미터를 설정할 수 있도록 수정var param = {          url: URL,          beforeSend:function(bf){               bf.sheet.ServerParams = {                   서버로 보낼 파라미터 설정               }};sheet.doSearchPaging(param);



- Icon:Date 적용했을 때 좌측에 달력이 아닌 시계 아이콘이 표시되는 현상 수정css 파일도 함께 수정됨
수정 전
@keyframes IBFocus { 0% { color:inherit; } 50% { color:red; } 100% { color:inherit; } }

수정 후
.IBTimePicker button:hover{background-color:#DDD;}.IBTimePicker button:active{background-color:#FCF1DD;} 
/* @keyframes IBFocus { 0% { color:inherit; } 50% { color:red; } 100% { color:inherit; } } */@keyframes IBFocus { from{background-color: #B8D8E0;} }@keyframes IBEditTo {from{background-color:#FFFFFF;}}


- (Col)NoButtonInFilter : 1 을 설정해도 TimePicker 아이콘이 필터행에 출력되는 현상 수정[수정 전]
[수정 후]
- (Method)setCurrentInfo 로 시트를 재구성 할 때 인자에서 설정한 (Row, Col, Cell) Visible : 1 적용되지 않는 현상 수정



### Ver 8.1.0.77-20240409-09

Fixed- (Cfg)NoVScroll : true 를 한 화면에서 여러 시트에 사용할 때, 마지막으로 생성했던 시트를 (Method)dispose 로 삭제하면 (Cfg)NoVscroll : true 가 적용된 다른 시트의 데이터가 제대로 표시되지 않는 현상 수정
모든 시트에 NoVScroll:true 설정.마지막 생성 시트를 (Method)dispose 로 삭제한 뒤 데이터가 11건 있는 다른 시트 조회[수정 전]
[수정 후]



### Ver 8.1.0.76-20240404-16

New- 컬럼의 필터행에 버튼이 생기지 않게 하는 (Col)NoButtonInFilter : 1 옵션 추가
[NoButtonInFilter : 0 적용]
[NoButtonInFilter : 1 적용]

Fixed- (Col)FormulaRow : function(){ ~ } 으로 설정하고 (Method)exportData 사용 시 오류가 발생하는 현상 수정
- (Cfg)searchMode : 4 에서 필터링 후, 필터링 한 컬럼을 (Method)removeCol 로 삭제하면 스크립트 오류 발생하는 현상 수정
- (Method)setFormulaRowPosition(0) 으로 합계행의 위치를 상단으로 옮긴 뒤, (Method)setMergeRange 로 합계행을 머지해서 (Method)exportData 로 내려받을 때, 데이터가 중앙 정렬 되지 않는 현상 수정
[내려받을 시트]

[수정 전 내려받은 엑셀파일]
[수정 후 내려받은 엑셀파일]


### Ver 8.1.0.75-20240329-15

Fixed- (Col)Button 속성이 적용된 경우에도 필터행에 Button 속성이 적용되게 수정8.1.0.73, 8.1.0.74 에서 (Col)Button 과 관련된 내역 원상복구
[수정 전] 
[수정 후] 


### Ver 8.1.0.74-20240328-15

Fixed- (Col)Button 속성이 적용된 경우 필터행에 Button 속성이 적용되지 않도록 수정Ver 8.1.0.75 에서 관련 릴리즈 내용이 원상복구 되었습니다.


### Ver 8.1.0.73-20240321-15

New- 붙여넣기가 완전히 끝났을 때 호출되는 onAfterPaste 이벤트 추가시트 내에서 ctrl+v 를 통해 붙여넣기가 동작된 이후에 발생합니다.


Fixed- 찾기 다이얼로그 UI 수정(dialog V 1.0.12) [기존 다이얼로그]
[수정 후 다이얼로그]
수정 후 다이얼로그를 이용하기 위해서는 ibsheet-dialog.js V1.0.12ibsheet.js V1.0.73ibsheet.js V1.0.73 에 해당하는 css 파일이 필요합니다.
- onReceiveData 이벤트에서 return 1(true) 할 경우 이후 발생하는 데이터 파싱 작업을 중단하도록 기능 개선onBeforeDataLoad, onDataLoad, onSearchFinish 이벤트가 발생하지 않음

onReceiveData: function(evtParam){
ㅤ var DATA = evtParam.data;
ㅤ var parseData = JSON.parse(DATA);

ㅤ if (parseData.data.length>2) {
ㅤ ㅤ return parseData;
ㅤ }
ㅤ else {
ㅤ ㅤ //onReceiveData 이벤트 중단
ㅤ ㅤ return 1;
ㅤ }
}


- (Cfg) AutoRowHeight : true 를 설정한 상태에서 TextSize 를 설정하거나 TextSizeFormula 를 설정하여 행 너비가 늘어났을 때 스크롤 계산이 제대로 되지 않는 현상 수정
[수정 전]스크롤이 바닥에 붙었음에도 불구하고 데이터가 정상적으로 보이지 않음(스크롤 계산이 잘못되어서 데이터가 더 있지만 스크롤을 내리는 것이 불가능)
[수정 후]정상적으로 스크롤 계산이 이루어짐
- doSearchPaging 의 param 인자가 없을 경우 iborderby 파라미터가 서버로 전송되지 않는 현상 수정
param을 빈값으로 처리한 뒤 헤더를 눌러 정렬시킴
[수정 전]> page 와 pagelength 만 서버로 전송 됨
[수정 후]> page 와 pagelength, orderby 모두 정상적으로 서버 전송

- (Cfg) SearchMode : 1 사용 중 findRows 로 데이터를 검색할 때 다음 페이지의 데이터가 검색되지만 페이지는 이동하지 않는 현상 수정
[수정 전]1페이지의 마지막 검색 데이터에서 다음 데이터를 검색할 때 포커스 자체는 다음 페이지의 데이터로 이동하지만,페이지는 이동을 하지않음
[수정 후]다음 검색 데이터가 있는 페이지로 이동 함

- findRows 로 데이터 검색 시 Type : Data 컬럼에서 EmptyValue(null) 가 검색되는 현상 수정
- 모바일 모드에서 멀티라인 레코드 행이 한번에 선택되지 않는 현상 수정
- Type: Int 컬럼에서 필터 행에 값 입력 후, clearFilter() 사용 시 0이 나타나는 현상 수정
[수정 전]
[수정 후]
- Button:URL 설정 시 필터행에는 Button 속성 적용되지 않도록 수정Ver 8.1.0.75 에서 관련 릴리즈 내용이 원상복구 되었습니다.


### Ver 8.1.0.72-20240314-16

Fixed- TextSize, TextSizeFormula 사용 시 동작하지 않던 (Cfg)AutoRowHeight가 정상적으로 행 높이 자동 맞춤을 하도록 수정
[수정 전]TextSize 가 적용된 행을 클릭했을 때 -> (Cfg)AutoRowHeight 작동 안함
[수정 후]TextSize 가 적용된 행을 클릭했을 때 -> (Cfg)AutoRowHeight 작동해서 자동으로 행 높이가 맞춰짐


### Ver 8.1.0.71-20240307-17

Fixed- (Method)makeSubTotal 의 usermerge 인자에 true 설정 시 동작 되지 않는 현상 수정
[수정 전]    makeSubTotal(subTotalRows, usermerge : 1 )   -> 동작    makeSubTotal(subTotalRows, usermerge : true )   -> 동작 안함
[수정 후]    makeSubTotal(subTotalRows, usermerge : 1 )       -> 동작    makeSubTotal(subTotalRows, usermerge : true )   -> 동작

- create 함수의 options에서 Filter가 Events 보다 먼저 정의된 경우 (Cfg)ShowFilter 가 동작하지 않는 현상 수정
[수정 전]Filter 가 Events 보다 먼저 정의된 경우"Cfg": {    "SearchMode": 2,    "ShowFilter" : 0},Filter: {Color:"red"},Events: {}
ShowFilter : 0 이 동작하지 않고 필터행이 계속 Visible 임

[수정 후]Filter 가 Events 보다 먼저 정의된 경우"Cfg": {    "SearchMode": 2,    "ShowFilter" : 0},Filter: {Color:"red"},Events: {}
ShowFilter : 0 이 동작해서 필터행이 Visble:0 임



### Ver 8.1.0.70-20240229-17

Fixed- 모바일 디바이스에서 InfoRow(페이지 네비게이션)의 페이지 버튼을 눌러도 페이지 이동이 불가능한 현상 수정

### Ver 8.1.0.69-20240222-15

Fixed- (Method)findRows 이용해 시트에 없는 데이터 검색 시 "처음부터 다시 찾으시겠습니까?" 확인 창이 뜨고 다시 확인 버튼 클릭했을 때 "처음부터 다시 찾으시겠습니까?" 확인 창이 계속 뜨는 현상 수정최초 한번을 제외하고는 일치하는 데이터가 없으면 "일치하는 검색 결과가 없습니다." 경고창 띄워 확인창이 계속 뜨지 않도록 수정
[수정 전]검색 결과가 없는 데이터를 검색한 후 확인을 누른 후 다시 검색하면 반복적으로 위 사진의 Confirm창이 뜸

[수정 후]검색 결과가 없는 데이터를 검색한 후 확인을 누르면 바로 다시 검색한 후 아래의 Alert 창을 띄움 

- 필터링 후 select한 데이터를 del키로 삭제했을 때 필터 되어 숨겨진 데이터까지 삭제되는 현상 수정'(폐쇄)영등포현주' 필터링 뒤 빨간 박스 부분 select 후 del 키로 데이터 삭제
[수정 전]
필터링 되어 보이지 않던 행의 데이터도 삭제된 것을 확인
[수정 후]삭제하고자 했던 행의 데이터만 삭제된 것을 확인

- 크롬/엣지 브라우저 121버전 업데이트 후 숨겨진 컬럼을 (Method)showCol 했을 때 숨겨졌던 컬럼이 깜빡이며 컬럼이 보여지는 현상 수정
- 찾기 다이얼로그에서 검색어 입력한 뒤 원본 시트로 포커스 이동했다가 다시 찾기 다이얼로그로 돌아와서 값을 입력하거나 backspace 눌렀을 때 원본 시트 셀의 값이 지워지거나 변경되는 현상 수정
[수정 전]찾기 다이얼로그로 다시 이동해서 backspace 를 누르자 기존 데이터 '셔츠' 가 없어지는 것을 확인
[수정 후]찾기 다이얼로그로 다시 이동해서 backspace 를 눌러도 기존 데이터 '셔츠' 가 유지되는 것을 확인


### Ver 8.1.0.68-20240208-15

Fixed- 크롬 121.0.6167.86버전, 엣지 121.0.2277.83 버전 업데이트 후 숨겨진 컬럼을 showCol 할 때 컬럼이 깨지거나, 보이지 않는 등 비정상적으로 랜더링 되던 문제 수정(Css)IBSectionScroll에 transition:width 속성을 추가
- (Method)exportDataBuffer 기능을 사용하여 여러개의 시트를 하나의 엑셀파일의 워크시트에 나누어서 다운로드할 때 (Method)exportData 옵션들이 각각으로 적용되지 않는 문제 수정sheet1 의 exportData 에 titleText, userMerge 옵션 설정sheet2 의 exportData 에는 sheetName 외에 다른 옵션 설정 안함sheet1.exportDataBuffer(true);sheet1.exportData({sheetName: "sheet1", titleText: '||2019년 3월 교통비\r\n|||||', userMerge: '0,2,1,4'});sheet2.exportData({sheetName: "sheet2"});  sheet1.exportDataBuffer(false);
[수정 전]sheet1 >titleText, userMerge 정상적으로 적용됨sheet2 > sheet1 에 설정한 userMerge 속성이 적용됨
[수정 후]sheet1 >titleText, userMerge 정상적으로 적용됨
sheet2 > 설정하지 않은 exportData 옵션이 적용되지 않음

- InfoRow 영역에서는 우클릭 시 IBSheet의 ContextMenu 팝업이 뜨지 않도록 수정[수정 전]
InfoRow 영역에서 우클릭 시  ContextMenu 팝업이 뜨는 것을 확인
[수정 후]
InfoRow 영역에서 우클릭 시 아무 현상도 일어나지 않음참고. InfoRow 영역에서 우클릭 시, 좌클릭과 동일한 액션을 취합니다.(Ex. 다음 페이지로 이동 버튼에서 우클릭 시, 다음 페이지로 이동합니다.) 


- (Cfg) NoDataMessage :1/2/3 중 하나이고 시트 create() 에서 data 인자를 사용하지 않는 경우 시트의 이벤트가 등록되지 않는 문제 수정
"Cfg": {    "SearchMode": 0,    NoDataMessage: 3  },
//시트 이벤트 설정'event':{    onRenderFirstFinish : function(paramObject) {            alert("onRenderFirstFinish!");    }}...
IBSheet.create({      id: 'sheet',      el: 'sheetDiv',      options: options,      //data: []                  data 인자 주석 처리하여 생략    });
[수정 전]onRenderFirstFinish 이벤트로 등록했던 alert 창이 출력되지 않음(이벤트가 정상적으로 등록되지 않기 때문에 onRenderFirstFinish 이벤트 말고 다른 이벤트 또한 동일)
[수정 후]onRenderFirstFinish 이벤트로 등록했던 alert 창이 처음 렌더링 되었을 때 정상적으로 출력


### Ver 8.1.0.67-20240201-15(Chorme 이슈)

Fixed- 크롬 121.0.6167.86 업데이트 후 시트 랜더링 이상 현상 수정행추가시((Method) addRow) 추가된 행이 보이지 않는 증상마우스 드래그 & 드랍으로 컬럼 이동시 이동된 컬럼이 보이지 않는 증상 컬럼 추가시((Method) addCol) 추가된 컬럼이 보이지 않는 증상 헤더 리사이즈시 리사이즈 이후 컬럼이 보이지 않는 증상 css 추가로 문제 해결(main.css)수정전수정후
.IBSectionScroll{-ms-overflow-style:none;scrollbar-width:none; }.IBSectionScroll::-webkit-scrollbar{display:none}
.IBSectionScroll{-ms-overflow-style:none; scrollbar-width:none; transition:height 0.01s,width 0.01s;}.IBSectionScroll::-webkit-scrollbar{display:none}
- exportData의 sheetName에 쌍따옴표가 들어갈 경우 엑셀 파일이 손상되서 다운로드 되는 현상 수정- setLocale을 사용하여 한글 -> 영어 -> 한글처럼 언어설정을 처음으로 되돌릴 경우 Locale 파일 안의 JSON 구조의 메시지에 해당하는 글자가 바뀌지 않는 문제 수정- exportData시 서버모듈과 동일하게 EmptyValue에 설정한 값이 다운로드 되지 않도록 변경

### Ver 8.1.0.66-20240129-22

Fixed- 크롬,엣지 121 버전 업데이트 이후 세로스크롤이 없고 가로스크롤만 있는 시트에서 행 추가시 렌더링 되지 않거나 추가된 행에서 포커스 아웃 후 데이터가 사라지는 문제 수정

### Ver 8.1.0.65-20240125-16

Fixed- (Method)hideCol의 인자인 userHidden 을 true 설정해 (Method)hideCol로 컬럼을 감춘 뒤, rerender시 userHidden 속성이 적용되지 않는 현상 수정
sheet.hideCol({col: 'TextData', userHidden: true, render: 1});
위 코드를 실행하고 나서 rerender() 뒤 hideCol 된 행의 정보 추출
[수정 전]hideCol 에서 설정한 속성과는 다르게 UserHidden : false 로 적용되어 있는 것을 확인
[수정 후]hideCol 에서 설정한 속성과 동일하게 UserHidden : true 로 적용되어 있는 것을 확인


- showDialog로 호출한 다이얼로그 영역 안에서 마우스 드래그 가능하도록 수정

[수정 전]사용자가 만든 다이얼로그 안에서 마우스 드래그 불가능
[수정 후]사용자가 만든 다이얼로그 안에서도 마우스 드래그 가능


### Ver 8.1.0.64-20240118-15

Fixed- (Method)exportData에 comboValidation : true 설정해도 Enum 데이터에 드롭다운 리스트가 적용되지 않은 채로 엑셀 다운되는 현상 수정
[수정 전]type : Enum 인 신청사유 컬럼에 드롭다운 리스트가 적용되지 않음
[수정 후]type : Enum 인 신청사유 컬럼에 드롭다운 리스트가 적용됨

- 사용자가 엑셀에서 직접 헤더 상하병합을 진행한 워크시트 파일을 (Method)importData로 업로드 할 때, 엑셀 워크시트와 원본 시트의 컬럼 순서가 다른 경우 헤더 매칭이 제대로 이뤄지지 않아 알맞은 데이터가 들어가지 않는 현상 수정
> importData 하는 엑셀 파일1.원본 sheet 의 컬럼 순서와 엑셀의 컬럼 순서가 다름2. 헤더에 해당하는 1행,2행을 사용자가 merge 를 해놓음
[수정 전]헤더가 매칭되지 않아 시트에 데이터가 들어가지 않았음
[수정 후]엑셀 워크시트의 머지 여부와 관계없이 헤더와 데이터가 잘 매칭됨

- 사용자가 엑셀에서 직접 상하병합한 워크시트 (Method)importData로 업로드시 상하병합이 이뤄진 셀들 중 최초 셀에만 데이터가 기입되는 현상 수정
> importData 하는 엑셀 파일A열의 강인철 데이터가 상하 병합 된 것을 볼 수 있다.

[수정 전]상하병합이 이루어진 셀 중에서 첫 번째 셀에만 데이터가 들어가는 것을 확인
[수정 후]상하병합이 이루어진 셀 모두 데이터가 들어간 것을 확인


- (Method)exportData로 엑셀 다운로드시 Type : html 을 제외한 나머지 컬럼 데이터에 포함된 xml 태그는 제거되지 않도록 수정Type : Enum, Button 과 같은 데이터를 엑셀 다운 시 <a>나 <u> 와 같은 xml 태그 가 생기는데, 엑셀 다운 시에도 태그가 그대로 남아있게 수정
[수정 전]콤보 컬럼에 태그없이 Text 만 엑셀로 들어 옴
[수정 후]콤보 컬럼에 <a> 태그까지 모두 포함된 데이터가 엑셀로 들어 옴
- (cfg) SearchMode: 3 설정 상태에서 스크롤을 내려 서버를 호출할 때, 체크해둔 Boolean 데이터의 체크가 해제되는 현상 수정SearchMode : 3, PageLength : 50 설정한 시트에서 위와 같이 3건 체크 뒤 스크롤 내림
[수정 전]기존에 체크한 행의 체크가 해제 됨
[수정 후]기존에 체크한 행의 체크가 그대로 유지 됨
- IBTab 내부에 시트가 있고, 시트가 있는 탭 영역이 감춰져 있을 때 Lines 타입 컬럼의 Height 계산이 정상적으로 이루어지지 않는 현상 수정
[수정 전]Type : Lines 컬럼의 Height 가 데이터에 맞지 않게 설정 됨

[수정 후]Type : Lines 컬럼의 Height 가 데이터에맞게 설정 됨


### Ver 8.1.0.63-20240111-15

New- 정렬 이후 포커스와 스크롤을 어떻게 처리할지 동작을 설정하는 (Cfg) HighlightAfterSort 옵션 추가
3행 사원수 컬럼에 포커스를 둔 채로 사원수 클릭해서 정렬
HighlightAfterSort : 0포커스 클리어 및 세로스크롤 위치를 유지합니다.포커스가 없어지고, 세로 스크롤의 위치는 고정(위 사진은 스크롤이 맨 위로 올라간 채로 정렬했기 때문에 맨 위에 고정되어있는 것임)
HighlightAfterSort : 1정렬 동작 이전 포커스 행 유지 및 해당 셀의 위치로 세로 스크롤이 이동합니다. (default)포스코의 사원수 셀에 포커스 유지, 만일 포커스 된 셀이 밑에 있으면 세로 스크롤이 밑으로 이동
HighlightAfterSort : 2정렬 동작 이전 포커스 행 유지 및 세로스크롤 위치를 최상단으로 초기화합니다.포스코의 사원 수 셀에 포커스가 유지되어 있지만, 세로 스크롤은 최상단으로 이동 HighlightAfterSort : 3정렬 동작 이후에도 항상 첫번째 행에 포커스 이동 및 세로 스크롤의 위치를 해당 셀 위치로 이동합니다.첫번째 행인 한국외환은행 사원수 셀에 포커스가 이동하고, 그에 맞춰서 스크롤의 위치 이동

HighlightAfterSort : 4포커스 행 위치에 포커스 유지 및 세로 스크롤 위치 유지정렬 전 포커스를 줬던 6행의 사원수 셀에 그대로 포커스 및 스크롤 유지


Fixed- (Cfg)MultiRecord 사용할 때 (Col)RecordColSpan 사용하여 헤더 영역 별도 머지 시 컬럼 리사이즈 되지 않는 현상 수정
- (Method)exportData의 exFoot, exHead 옵션으로 이미지 추가해 엑셀 다운 시 이미지 크기가 셀 크기에 딱 맞춰져 설정되지 않고, 원본 이미지 크기에 맞게 설정되도록 수정


### Ver 8.1.0.62-20240104-16

Fixed- 엑셀에서 사용자가 상하 병합해 헤더를 만들고 importData로 엑셀 로드할 때 사용자가 병합시킨 헤더 인식이 제대로 되지 않는 현상 수정
- (Cfg) SearchMode: 0, AutoRowHeight: true 설정된 트리 시트를 사용할 때, 접혀져 보이지 않는 데이터를 포커스하면 시트가 제대로 그려지지 않는 현상 수정(Cfg) SearchMode : 0, AutoRowHeight : true설정된 트리 시트
sheet.focus(sheet.Rows.AR15); 로 보이지 않는 AR15 행(마지막 행)에 포커스를 줌
[수정 전]포커스가 가지 않을 뿐더러, 시트가 깨지는 현상 확인
[수정 후]정상적으로 마지막 행에 포커스가 가면서 시트가 정상적으로 그려짐

### Ver 8.1.0.61-20231228-15

New- (Method)loadSearchData에 조회 관련 이벤트를 발생시키지 않게 하는 ignoreEvent 인자 추가.
sheet.loadSearchData({
 data : DATA,
 ignoreEvent : true
})> loadSearchData 호출 시 조회 관련 이벤트 ( onBeforeDataLoad, onDataLoad, onReceiveData, onSearchFinish) 발생 X

Fixed- addRows 함수를 이용하여 여러행을 추가 할때 STATUS 컬럼의 상태값이 추가된 모든 행에 반영되도록 수정sheet.addRows({ "count" : 2 }); 를 실행하여 2행 추가
[수정 전]14, 15행 2개가 추가 되었지만 마지막 추가된 행의 STATUS 컬럼에만 상태값이 추가됨
[수정 후]추가된 14, 15행의 STATUS 컬럼에 모두 상태값 추가됨
- addRows 함수로 추가한 행만큼 onAfterCalculate 이벤트가 발생하도록 수정onAfterCalculate 이벤트가 실행될 때마다 콘솔에 출력되게 설정sheet.addRows({ "count" : 2 }); 를 실행하여 2행 추가
[수정 전]2행을 추가했지만 onAfterCalculate 이벤트가 한번만 실행됨
[수정 후]2행을 추가해서 onAfterCalculate 이벤트가 추가된 행만큼 실행 됨


### Ver 8.1.0.60-20231222-16

Fixed- (cfg) SearchMode: 3 사용할 때 PageLength의 값이 시트 높이보다 작을 때 스크롤이 생기지 않는 현상 수정(8.1.0.58 Fixed 내용) 원상복구해당 현상을 수정했지만, 사이드 이펙트가 다수 발생해 원상복구를 진행했습니다.


### Ver 8.1.0.59-20231221-17

Fixed- (Cfg) SearchMode:4, AlwaysSearchPage: 1 사용하는 시트에서 getRowsByChecked()를 호출했을 때 보여지는 행들 중 체크된 행만 리턴하는 현상 수정맨 위의 4개 행, 맨 아래 6개 행을 체크하고 스크롤을 내리면서 getRowsByChecked() 호출
[수정 전]맨 위 행에서 getRowsByChecked () 호출> 체크된 10행을 모두  리턴
맨 아래 행에서 getRowsByChecked() 호출 > 보여지는 체크된 행만 리턴(맨 아래에서는 체크된 행이 6개만 보임)
[수정 후]맨 위 행에서 getRowsByChecked () 호출> 체크된 10행을 모두  리턴
맨 아래 행에서 getRowsByChecked () 호출> 체크된 10행을 모두 리턴 
- (Cfg) SearchMode:3 설정 시트에서 필터/소팅했을 때 필터되는 행이 시트 크기보다 작은 경우 서버를 호출해 아래쪽에 행을 덧붙이는 현상 수정빨간색으로 표시된 행을 필터하고자, 필터행에 원하는 행의 가격 데이터 입력
[수정 전]필터링 되어서 원하는 행이 맨 처음으로 왔지만, 그 후 바로 서버를 호출해 아래쪽에 행을 붙임
[수정 후]필터링이 되길 바라는 행만 정상적으로 필터링 되는 것을 확인



### Ver 8.1.0.58-20231218-13

Fixed- (cfg) SearchMode: 3 사용할 때 PageLength의 값이 시트 높이보다 작을 때 스크롤이 생기지 않는 현상 수정
[수정 전]빨간색 부분(시트 높이)보다 데이터의 높이(PageLength : 10)가 커서 스크롤이 생기지 않음> 정상적으로 SearchMode : 3 을 사용할 수 없음
[수정 후]시트 높이가 데이터 높이보다 큰 경우, 스크롤이 생길만큼 서버를 호출해서 데이터를 붙임(예제 화면에서는 PageLength 가 10이기때문에 서버를 최초 호출 이후 2번 더 호출)


### Ver 8.1.0.57-20231214-18

Fixed- 모바일에서 대용량모드로 조회한 시트 전체 체크 체크/해제 정상 동작 되도록 수정


### Ver 8.1.0.56-20231214-18

Fixed- onSetFile 이벤트에서 return true; 시 onSetFile 이벤트가 2번 발생하는 현상 수정onSetFile  : function(evtParam) {        console.log("onSetFile 호출")        return true;    }위 코드 선언 후 파일 업로드
[수정 전]콘솔에 onSetFile 호출이 2번 찍힘=> onSetFile 이벤트 2번 발생
[수정 후]콘솔에 onSetFile 호출이 한번 찍힘=> onSetFile 이벤트 1번 발생
- (Method)exportData로 csv 파일 다운 시 | 데이터가 공백문자로 치환되는 현상 수정- (Method)exportData로 csv 파일 다운 시 쉼표, 쌍따옴표 처리 로직 개선- (Method)importData로 csv 파일 로드 시 쉼표, 쌍따옴표 처리 로직 개선
- 접혀진 트리에 포커스 줄 때 노드가 펼쳐지지 않는 현상 수정
sheet.focus(sheet.getRowById("AR234")); 를 이용해 접혀있는 트리 안의 AR234 ID를 가진 행 호출보여야하는 행 > 빨간색으로 표시한 합금철 행
[수정 전]포커스를 준 행이 접혀있어서 포커스 자체도 확인이 안됨
[수정 후]원하는 행에 포커스가 되고, 트리도 잘 펼쳐짐

- SearchMode: 0, AutoRowHeight: true 설정된 트리 시트에 Lines 타입 데이터 존재할 때 노드 펼칠시 스크롤이 깨지는 현상 수정[수정 전]마지막 행이 보이는데, 스크롤이 바닥에 붙은 것이 아니라 중간에서 멈춰있음
[수정 후]스크롤 위치가 정상적으로 바닥에 붙어있음

- exportData시 excelRowHeight나 excelHeaderRowHeight 설정한 높이가 엑셀에서 작게 다운로드 되는 현상 수정sheet.exportData({excelHeaderRowHeight: 40, excelRowHeight: 30});sheet.down2Excel({excelHeaderRowHeight: 40, excelRowHeight: 30});위 코드를 각각 실행해서 exportData, down2Excel 로 엑셀 파일 다운
[수정 전]똑같은 값을 설정했지만 높이가 서로 다른 것을 확인
[수정 후]똑같은 값을 설정해서 똑같은 높이로 다운 받아진 것을 확인


### Ver 8.1.0.55-20231207-14

Fixed- (Cfg) SearchMode : 0, (Event) onSearchFinish에서 (Method) focus로 특정행 선택시 세로 스크롤 이동하지 않는 현상 수정onSearchFinish 이벤트에서 sheet.focus(sheet.getRowByIndex(36)); 설정
[수정 전]36행에 포커스가 있는 상태지만 세로 스크롤이 위로 올라가있음
[수정 후]포커스에 맞춰서 스크롤도 함께 이동
- (Method) importData 에서 fileExt 설정값과 상관없이 xls, xlsx, csv, txt 파일만 load 하도록 수정


### Ver 8.1.0.54-20231130-15

New- (Cfg)SearchMode: 5 (ServerPaging2) 추가5ServerPaging2사용 방식은 ServerPaging과 동일하지만, 페이지 이동시 항상 서버를 호출하여 데이터를 조회하는 표시 모드입니다.실시간으로 변경되는 데이터를 조회해야 할 때 사용하면 변경된 데이터를 조회할 수 있습니다.해당 모드에서 시트는 현재 조회한 페이지의 Row 객체와 데이터만 가지고 있습니다.(Method)updatePageLength 를 통해 동적으로 페이지 행의 개수를 변경하실 수 있습니다.

Fixed- LeftCols의 Header가 SEQ이고 (cfg) HeaderMerge: 2 이상으로 설정되어 있을 때 헤더 영역 텍스트 정렬이 되지 않는 현상 수정[수정 전]헤더 영역의 텍스트가 정렬이 되지 않음
[수정 후]헤더 영역의 텍스트가 정상적으로 정렬 되어 있음
- (Method)RemoveRow 호출 시 FormulaRow 행의 값은 갱신되지만 onAfterCalculate 이벤트가 발생하지 않는 현상 수정
- (Method)exportData로 엑셀 다운로드시 Enum 타입 데이터가 숫자 형태로 길 때 지수로 변환되어 다운되는 현상 수정
Enum 타입 컬럼에 '800001046789' 인 데이터가 있는 시트를 exportData() 로 엑셀 다운
[수정 전]지수 형태로 엑셀 다운 됨
[수정 후]정상적으로 데이터 그대로 보임
- (cfg) SearchMode: 0, AutoRowHeight: 1, DataMerge 적용 시트에서 스크롤을 중간 정도로 이동시킨 후 데이터를 붙여넣기했을 때 스크롤이 이상한 위치로 이동하는 현상 수정
- loadSearchData가 onBeforeDataLoad, onDataLoad 이벤트에 result, message를 보내지 않던 문제 수정
- loadSearchData의 result가 0이 아닐 경우 onBeforeDataLoad 호출 후 동작이 종료 되게 변경
- doSearch 데이터 파싱 후 -7 result를 보내지 않던 문제 수정
- doSearch에서 {data:{IO:{"Result":0,Message:"조회"}의 Result와 Message를 출력하게 변경



### Ver 8.1.0.53-20231123-15

New- 필터행에서 예약어 기능을 사용하지 않도록 하는 기능 추가(Cfg) DisableKeyWord 추가- 데이터 Edit 후 Tab / Shift + Tab 키를 눌렀을 때 동작을 설정하는 기능 추가(Cfg) EditTabMode 추가

Fixed- (Method) exportData 다운 받은 엑셀 파일이 excel2007 12.0.4518.1014 버전에서 열리지 않는 오류 수정- (Cfg) SearchMode : 4, (Cfg) AlwaysSearchPage :1 설정한 시트에서 Sort 후 페이지 이동이 되지 않거나 데이터가 사라지는 현상 수정


### Ver 8.1.0.52-20231116-16

New- (Cfg) SearchMode : 0 , 모바일에서 스크롤시 이동할 행 갯수 설정 기능 추가(Cfg) TouchScrollCount 추가

Fixed- (Cfg)  "CanDrag" : 1, 시트에 데이터가 없을 때 Drag & Drop 으로 데이터 이동 되지 않는 현상 수정[수정전]
[수정후]
- 데이터 마지막이 '\n'으로 개행된 CSV 파일 (Method) importData 로드시 스크립트 에러 발생하는 현상 수정- (Method) addCol --> (Method) rerender 호출시 헤더 머지 반영 되지 않는 현상 수정


### Ver 8.1.0.51-20231109-15

New- (Method) doPrint 시 첫 페이지만 시트의 헤더를 출력하는 기능 추가firstPrintHead 인자 추가

Fixed- (Method) setFixedBottom --> (Method) removeRow --> (Method) setFixedBottom 순서로 호출시 고정행 설정되지 않는 현상 수정- (Method) setValue로 Enum컬럼의 값을 index 형식으로 설정시 값이 바뀌는 현상 수정[컬럼설정 내용] {
"Header": "신청사유"
,"Type": "Enum"
,"Enum": "|야근|주말특근|휴일특근"
,"EnumKeys": "|01|02|03"
}

[수정전] - 주말특근으로 데이터가 바뀐다.
[수정후] - 없는 값을 설정 하였기 때문에 빈값으로 보여진다.
- (Method) exportData CSV 다운로드시 쌍따옴표(") 데이터가 다운로드 되지 않는 현상 수정[수정전]
[수정후]
- (Col) Icon : "이미지 url 또는 svg" 설정된 컬럼 (Method) exportData 시 이미지 다운로드 되지 않도록 수정- 조회데이터 구조에서 Data 없이 IO 만 있을때 (Method) getRowValue({row : sheet.getRowById("AR5"), saveExtraAttr : 1}) 설정시 에러 발생 현상 수정


### Ver 8.1.0.50-20231103-10

Fixed- 편집 상태에서 Tab 입력시 (Col) CanEdit : 3,4 설정한 컬럼으로 포커스 이동 하는 현상 수정


### Ver 8.1.0.49-20231102-18

New- (Method) doSearchPaging ajax 통신 전에 호출되는 인자 추가beforeSend 인자 추가, onSearchStart --> beforeSend   순으로 동작- (Col) FormulaRow, 소계, 누계행에서 평균/건수 계산시 0 또는 빈값 포함 여부 설정하는 속성 추가(Col) ExcludeEmpty 추가

Fixed- (Cfg) SearchMode:0, (Cfg) MergeCellsMatch : 1 설정한 시트에서 복사/붙여넣기를로 데이터 수정시 Merge 된 영역의 값이 변경되지 않는 현상 수정[수정전][수정후]- (Method) importData CSV 파일 로드시 쌍따옴표("), 컴마(,) 데이터 로드 되지 않는 현상 수정- 시트에서 Ctrl+C로 데이터 복사시 브라우저 스크롤이 움직이는 현상 수정- 소계와 소팅이 적용된 시트에서 필터 사용 시 병합이 풀어지는 현상 수정- (Cfg) SearchMode : 0, (Cfg) AutoRowHeight : true 설정한 시트에서 세로 스크롤이 없을때 제일 마지막 데이터에서 스크롤이 생성되도록 데이터 편집시 스크롤이 움직이는 현상 수정


### Ver 8.1.0.48-20231026-18

New- 시트 id를 랜덤하게 생성하는 속성 추가(Cfg) UseRandomId 속성 추가create 함수 호출시 id를 설정하지 않았을 경우
IBSheet.create({    //id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt, // 생성될 시트의 속성    data: dataArr // 생성될 시트의 정적데이터});
[수정전] Table0, Table1과 같이 시트 ID 부여[수정후] sheet+6개숫자 랜덤하게 시트 ID 부여(ex : sheet254819)

Fixed- (cfg) SearchMode : 4, (Cfg) AlwaysSearchPage : 1 설정한 시트에서 헤더의 전체 체크박스 클릭시 현재 보고 있는 페이지만 체크 되도록 수정


### Ver 8.1.0.47-20231020-14

New-  (Cfg) PivotFunc, (Method) makePivotTable에  Max, Min 옵션 추가ibsheet-dialog.js : (Method) showPivotDialog의 showType에 Max/Min 추가 메세지 파일(ko.js, en.js 등) 업데이트 필요[수정전] ibsheet-dialog.js  [수정후] ibsheet-dialog.js  Lang.Text 에 추가(메세지 파일)"PivotMax": "최대값","PivotMin": "최소값","PivotSum": "합계","PivotCount": "개수"Fixed- Pivot 된 Sheet의 합계행에 Sum, Count 문자 Locale(ko.js, en.js 등) 설정값으로 나오도록 수정[수정전] Locale : Ko[수정후] Locale : Ko 


### Ver 8.1.0.46-20231019-18

Fixed-  (Event) onAfterChange에서 FormulaRow의 계산된 결과값이 추출되지 않는 증상 수정셀을 선택한 상태에서 붙여넣기 했을때, FormulaRow 의 결과 값이 정상 추출되지 않는 증상 수정- IFRAME 안에 Sheet가 있고,  IFRAME이 display:none 일 경우 Sheet가 그려지지 않는 현상 수정- (Cfg) SearchMode : 0, (Cfg) AutoRowHeight : 1, (Col) Wrap: 1 설정한 시트에서 긴 문자열을 입력 하고 시트의 빈 여백을 클릭하여 편집 종료시 Row의 높이가 정상 계산되지 않는 증상 수정[수정전][수정후] - (Cfg) SearchMode : 0, (Cfg) AutoRowHeight : 1, (Col) Wrap: 1 설정한 시트에서 세로 스크롤 이후 긴 문자열 붙여넣기시 시트가 깨지는 증상 수정Ver 8.1.0.41-20230914-14 부터 발생 했던 현상 수정[수정전]
[수정후]- (Row) HaveChild 기능 정상 동작하도록 수정조회 데이터에 HaveChild 포함되어 있으나, + 표시 안되는 현상트리 조회시 ibsheet-common.js 파일의 convertTreeData 함수를 이용하였다면  ibsheet-common.js(Ver 1.0.4-20231019-18)의 convertTreeData  함수 업데이트 필요[수정전]
[수정후]
- (Cfg) SearchMode: 0 설정한 시트에서 필터행에 값 입력하고 데이터행 클릭시 (Event) onFocus 의 row 값이 클릭한 시점인 현상 수정필터된 row 값이 되도록 수정((Cfg) SearchMode : 2 와 동작 통일) [onFocus 이벤트 로직] onFocus:function (evt) {        console.log('onFocus:',evt.row.id);}[원본시트] [수정전] 대차지점컬럼의 필터행에서  '천' 입력하고 6행 클릭시 브라우저 콘솔에 찍히는 데이터 AR6[수정후] 대차지점컬럼의 필터행에서  '천' 입력하고 6행 클릭시 브라우저 콘솔에 찍히는 데이터 AR1 - Pivot 된 Sheet의 필터행에서 값 입력시 "셀을 편집할 수 없습니다" 문구 출력 되는 현상 수정

### Ver 8.1.0.45-20231012-19

New- (Static) create 동기 옵션 추가sync  추가IBSheet.create({    id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt, // 생성될 시트의 속성    data: dataArr, // 생성될 시트의 정적데이터    sync: 1 // 동기로 시트 생성});
- (Method) focus 호출시 브라우저 스크롤 이동하지 않도록 속성 추가(Cfg) ScrollFreeze 추가

Fixed- (Method) setCountInfoElement 속도 개선헤더의 전체 체크박스 체크시 속도가 느린 증상 개선- (Method) doSearchPaging, Request Payload 방식으로 parameter 전달 시 get 방식으로 동작하는 현상 수정- 컬럼의 갯수가 많을 경우 렌더링 속도 개선- (Method) setFixedBottom 기능 개선데이터가 4개 이상이어야 하는 제약 조건 제거- FilterRow에 값이 입력된 상태에서, 데이터 조회 시 화면에 데이터가 표시되지 않는 증상 수정


### Ver 8.1.0.44-20231005-16

Fixed- (Cfg) SearchMode : 0, (Cfg) AutoRowHeight : 1 설정한 시트에서 헤더 전체 체크시 세로 스크롤이 움직이는 오류 수정- (Cfg) SearchMode : 4, 페이지 이동 버튼을 빠르게 연속으로 누를 시 데이터가 맞지 않는 증상 수정


### Ver 8.1.0.43-20230921-14

Fixed- 모니터가 터치 가능한 PC에서 IBSheet가 모바일 모드로 동작하는 현상 수정모바일 모드 일때 시트의 스크롤 모양이 다르다.[모바일 모드] (Cfg) CustomScroll : 2 로 동작
[일반 모드] (Cfg) CustomScroll : 0 로 동작- (Cfg) SearchMode : 0, (Cfg) AutoRowHeight : true, (Col) Wrap: 1 설정한 시트에서 세로 스크롤이 없을 때 긴 문자열을 입력하면 높이가 이상해지는 현상 수정- (Col) Type : "Text", (Col) Wrap : 1 컬럼에서 (Row) MaxHeight가 적용되지 않는 현상 수정- (Col) Required 설정된 시트를 (Method) exportData로 다운로드 받고, 바로 (Method) importData 바로 로드시 시트 헤더에 (*)가 붙는 현상 수정[원본시트][수정전][수정후]- 가로 스크롤이 있는 시트에서, 헤더의 전체체크 클릭시 스크롤이 이동하는 현상 수정8.1.0.40-20230907-15에서 수정한 내용이나, (Cfg) SearchMode : 0 반영하지 않아 재수정- 시트 내에서 마우스 우클릭시 스크립트 오류가 발생하는 현상 수정- (Col) Type : "Float" , (Col) Format : "0.000" 설정된 컬럼에 0.089데이터를 (Method) importData 시 8.9가 로드 되는 현상 수정 - (Method) getSaveJson 특정 Row 데이터 추출 기능 추가(Method) getRowValue 와 (Method) getSaveJson 의 리턴값이 다른 증상으로 인하여  rows 인자 추가 getRowValue
GetSaveJson(Col) TrueValue , (Col) FalseValue의 값 0/1로 추출
(Col) TrueValue , (Col) FalseValue의 값으로 추출
(Col) NoUpload 설정한 컬럼 추출(Col) NoUpload 설정한 컬럼 추출하지 않음
(Col) FormatFix 설정한 컬럼 비반영
(Col) FormatFix 설정한 컬럼반영
ex) sheet.getSaveJson( { saveMode : 0, rows : [sheet.getRowById("AR5")] } );
- (Cfg) AutoRowHeight 기능 사용중인 시트에서 (Method) fitColWidth 호출 시 Row가 틀어지는 현상 수정


### Ver 8.1.0.42-20230915-17

Fixed- 가로 스크롤이 있는 시트에서, 헤더의 전체체크 클릭 시 스크롤이 이동하는 현상 수정Ver 8.1.0.40-20230907-15에서 수정 했던 내용으로 (Cfg) CustomScroll : 1~3 의 동작 개선


### Ver 8.1.0.41-20230914-14

New-  전체 컬럼의 너비 조절하는 함수 추가(Method) fitColWidth 추가- (Method) doSearchPaging 속성 추가 pageLengthParam 속성 추가PageLength의 갯수를 서버로 전달 할 수 있는 pageLengthParam 추가
[추가전]
[추가후]
- (Method) exportData, down2Excel sheetDesign 옵션 추가sheetDesign : 4 번 추가, 시트의 헤더만 디자인 적용
(Method) down2Excel :  ibsheet-excel.js(1.0.19-20231012-19), jar(1.1.16.jar) 업그레이드 필요
- (Cfg) UsePivot : 1 설정된 시트에서, Pivot Sheet 생성 완료 이벤트 추가(Event) onAfterPivot  추가

Fixed- Secret Mode 브라우저에서 localStorage 관련 스크립트 오류 발생 현상 수정- 성능이 떨어지는 브라우저에서 (Col) Type : "File"  컬럼에 파일 추가 되지 않는 증상 수정- Pivot Sheet 에서 Filter 동작 개선[Pivot Sheet]
[수정전 Filter 결과]
[수정후 Filter 결과]
- (Cfg) SearchMode : 0 인 시트에서 여러줄의 데이터를 붙여 넣고, 세로 스크롤을 이동시 SEQ 컬럼의 데이터가 이상해 지는 현상 수정[수정전][수정후]


### Ver 8.1.0.40-20230907-15

Fixed- (Method) showUploadDialog 엑셀 파일 업로드 후, Dialog 창의 시트 편집 시 스크립트 에러 수정- RealGridsJs를 통해 만들어진 엑셀 파일 (Method) importData 엑셀 로드 가능하도록 수정- (Col) TrueValue, FalseValue 가 설정되어 있는 (Col) Type:"Bool" 컬럼을 (Method) setAttribute 함수로 타입 변경 하여 데이터를 수정 후 저장시 (Col) TrueValue, FalseValue 값 추출되는 현상 수정- 가로 스크롤이 있는 시트에서, 헤더의 전체체크 클릭 시 가로 스크롤이 초기화 되는 현상 수정
- (Cfg) Size : Low, Small, Tiny 사용시 (Col) Button 설정된 시트에서 행 높이가 틀어지는 현상 수정8.1.0.37-20230817-15 에서 수정했던 css의 문제로 최종으로 아래 css 반영.IBCellBase>div>*{font-size: inherit; line-height: inherit;} 제거

.IBDialogButton,u.IBSheetButton { background:#53bfca;border:0px solid #53bfca;color:white; padding-top: 0.2em; padding-bottom: 0.2em; } --> .IBDialogButton,u.IBSheetButton { background:#53bfca;border:0px solid #53bfca;color:white; }

- 헤더가 열 기준 병합되었을 경우, (Method) exportData 시 Required Mark가 출력되지 않는 현상 수정[sheet 화면]
[수정전]
[수정후]



### Ver 8.1.0.39-20230831-15

Fixed- Sheet 초기화 시, <head> Tag 밑에 생성되는 <div id="IBSheetMessageStyle"> Tag 제거[수정전][수정후]- (Col) RelWidth : 1, (Col) Visible : 0, (Col) MinWidth 설정 되어 있는 시트에서 Width값 2000으로 설정되는 현상 수정(Method) exportData시 보이지 않는 컬럼의 사이즈가 크게 설정되어 다운로드 되는 현상으로 인한 수정
- (Cfg) searchMode : 0인 시트에서 setFilter --> clearFilter --> 엑셀업로드의 순서로 동작시, 데이터가 일부만 표시되는 현상 수정- (Col)Type : "Radio" 에서 (Row) TextSize 적용되지 않는 현상 수정-  셀 서식이 날짜이고 데이터가 1970년 이전인 파일을 (Method) importData로 로드시 날짜값이 바뀌어 로드 되는 현상 수정
- (Cfg) NoDataMiddle : 1로 설정한 시트에서 '조회된 데이터가 없습니다' 상태에서 (Method) removeAll 호출시 시트의 높이가 변경되는 현상 수정
- 데이터의 행 높이가 일정하지 않은 경우, (Method) exportData로 다운받은 엑셀 파일의 행 높이가 작아 데이터가 다 보이지 않는 증상 수정excelRowHeight를 -1로 설정시 자동으로 행 높이를 설정하도록 수정
[시트 화면]
[수정전]
[수정후]


### Ver 8.1.0.38-20230824-17

New- (Method) deleteRow visible 인자 적용 : 삭제 행을 화면에 보여줄지 여부- (Method) getCol, 설정하지 않은 SEQ컬럼 제외하여 추출하는 기능 추가[Cols 설정]var opt = {        //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)        Cols:[            {Header: {Value: "이름"}, Name: "sa_nm", Type: "Text"},            {Header: {Value: "사원번호" }, Name: "sa_id", Type: "Text", Align: "center"},            {Header: {Value: "부서"}, Name: "sa_dept", Type: "Enum"             , Enum: "|경영지원|총무|인사|설계|시공1|시공2", EnumKeys: "|01|02|03|04|05|06"},            {Header: {Value: "직급"}, Name: "sa_position", Type: "Enum"            , Enum: "|대표|상무|이사|부장|차장|과장|대리|사원", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"}        ]    };    //시트객체 생성IBSheet.create({    id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt // 생성될 시트의 속성});

[수정전] sheet.getCols() : [ "SEQ", "sa_nm", "sa_id", "sa_dept", "sa_position" ] 리턴[수정후] sheet.getCols({seq:1}) : [  "sa_nm", "sa_id", "sa_dept", "sa_position" ] 리턴

Fixed- (Cfg) searchMode : 0에서 (Method) showPopupSheet를 1회 이상 호출 후 시트 스크롤 이동 시 (Col) Type: "Float" 컬럼의 데이터가 이상하게 바뀌는 현상 수정[원본 데이터]
[수정전]
- (Cfg) searchMode : 0에서 Head가 있는 시트에서 Sort 후 첫번째 데이터가 표시되지 않는 증상 수정[발생조건]1. 숫자컬럼에서 1회 sort 하여 오름차순 정렬
2. 스크롤을 제일 하단으로 이동하여 가장 큰 데이터 선택
3. 오름차순된 컬럼에서 다시 sort 하여 내림차순 정렬
[수정전]
[수정후]- (Method) exportData로 헤더만 다운로드 받을 경우 Merge 되지 않는 현상 수정sheet.exportData({downRows : " ", merge:1 }) 


### Ver 8.1.0.37-20230817-15

Fixed- 일부 (Col) Type 에서 (Col) TextSize 적용되지 않는 현상 수정적용되지 않았던 (Col) Type : Button, Link, Html,  File
main.css 수정 필요 - core(ibsheet.js) 적용하지 않아도 무방함new.IBCellBase>*{font-size: inherit; line-height: inherit;}.IBCellBase>div>*{font-size: inherit; line-height: inherit;}fix
.IBDialogButton,u.IBSheetButton { background:#53bfca;border:0px solid #53bfca;color:white; } => .IBDialogButton,u.IBSheetButton { background:#53bfca;border:0px solid #53bfca;color:white; padding-top: 0.2em; padding-bottom: 0.2em; }

[수정전] - (Col) TextSize : "20px"
[수정후] - (Col) TextSize : "20px" 


### Ver 8.1.0.36-20230810-14

New- 조회된 데이터가 없습니다. 시트의 가운데 표시 기능 추가(Cfg) NoDataMiddle:1 설정 추가 main.css 수정 필요.IBNoDataRow>table { height: 100%;} //추가

[추가전]
[추가후]

Fixed- (Col) Type: "Lines" 컬럼에서 시트 높이보다 데이터의 길이가 길 경우 시트 크기의 절반으로 Row 높이 적용되도록 수정 [수정전]
[수정후]
- (Cfg) SearchMode : 0, (Method) importData 로 엑셀 로드 후 (Method) setFilter 호출시 오류 수정- (Col) Type : "Radio" 에서 TextSize 속성 적용이 안되는 현상 수정[수정전] - (Col) TextSize: "18px" 설정
[수정후] - (Col) TextSize: "18px" 설정 



### Ver 8.1.0.35-20230803-17

Fixed-  필터행의 필터 옵션에서 값있음, 값없음 이미지 교체main.css의 class값만 수정하면 된다..IBFilter14Left,.IBFilter14Right,.IBFilter14Menu.IBFilter15Left,.IBFilter15Right,.IBFilter15Menu[수정전]
[수정후]-  (Cfg) SearchMode: 0, (Cfg) GroupMain, (Cfg) Group, (Cfg) DataMerge: 1 설정한 시트에서 스크롤시 에러 발생하는 현상 수정


### Ver 8.1.0.34-20230727-19

New- (Col) Name에 설정하지 않은 데이터 추출 하는 기능 추가[Cols 설정]"Cols": [    {"Header": ["신청인","신청인"],"Type": "Text","MinWidth": 80,"Name": "sName","ColMerge": 1}]
[조회데이터]{ Data: [    {"sName" : "홍길동", sSabeon:"2001010105"},    {"sName" : "임꺽정", sSabeon:"2001050105"}]
sSabeon 추출하는 기능 (Method) getRowValue, (Method) getSaveString, (Method) getSaveJson, (Method) doSave saveExtraAttr 인자 추가됨

Fixed- (Method) doPrint 시 미리보기 인쇄창에 시트 데이터가 표시되지 않는 증상 수정
-  (Cfg) UseButton :1 사용시 Button  정렬 되도록 수정(default Align : "Center" 정렬)main.css 적용 필요new
.IBAlignRight>button.IBToolButtonUseButton{float:right}.IBAlignLeft>button.IBToolButtonUseButton{float:left}fix
button.IBToolButtonButton,button.IBToolButtonButton1{margin-top:5px;margin-bottom:4px;padding:1px 2px 1px 2px;line-height:14px;cursor:pointer;white-space:nowrap;display:block;color:inherit}
==>
button.IBToolButtonButton,button.IBToolButtonButton1 { margin-top:5px;margin-bottom:4px;padding:1px 2px 1px 2px;line-height:14px;cursor:pointer;white-space:nowrap;color:inherit; } //display:block 제거됨

-  Solid Row에서 Type  :"Date" Cell 달력 오픈시 스크립트 오류 수정-  시트 create 시 id 를 설정하지 않았을때 브라우저 console 표시되는 메시지 제거[IBSheet.create({id:'undefined'})] 'id' argument not exist. Can't creation.
-  (Static) showCalendar 브라우저 스크롤시 IBSheet 달력이 움직이는 현상 수정(외부 달력)-  필터행의 필터 옵션에서 값있음 선택시 입력값이 남아 있는 현상 수정[수정전][수정후]- (Cfg) SearchMode : 4, (Cfg) AlwaysSearchPage : 1 에서 페이지 이동 후 이전 페이지의 데이터를 기억하고 있는 현상 수정(Method) getSaveJson, (Method) getSaveString, (Method) doSave, (Method) getRowsByChecked, (Method) getRowsByStatus, (Method) getRowsByDup 반영함
- IBSheet.create 함수로 시트 초기화시 id를 설정하지 않았을때 console에 찍히는 메세지 제거IBSheet.create({      el: 'sheetDiv', // 시트를 생성할 Dom 객체 및 id      options: options, // 생성될 시트의 속성    });
[수정전 console 내용]



### Ver 8.1.0.33-20230721-16

New- Excel load 시 workSheetName에 설정한 이름이 없는 경우 load 취소 기능 추가(Method) loadExcel, (Method) importData workSheetNameStrict 추가
ibsheet-excel.js : 1.1.11, LoadExcel.jsp, jar : 1.0.12-20230720-22  적용 필요


### Ver 8.1.0.32-20230720-22

Fixed- (Json event) OnClickSide 에 코드가 있고 빠르게 체크/언체크시 OnClickSide 의 소스가 정상동작하지 않는 증상 수정
- 모바일에서 데스크탑모드 선택시 브라우저가 확대되는 증상 수정- drag & drop으로 시트 Selection 시 마우스 포인터가 시트 밖으로 벗어난 이후 Selection이 정상적으로 되지 않는 증상 수정


### Ver 8.1.0.31-20230713-14

Fixed- Windown11, Firefox 브라우저에서 스크롤 영역이 아닌 곳에 스크롤이 생기는 현상 수정main.css 수정 필요.IBSectionScroll{-ms-overflow-style:none} -- > .IBSectionScroll{-ms-overflow-style:none;scrollbar-width:none} 

[수정전] 

[수정후]
- (Cfg) AutoRowHeight : 1인 시트에서 Html, Img 컬럼에 (Method) setValue 시 행높이가 변경되지 않는 현상 수정 - (Cfg) SelectionSummary 숨겨진 Row, Col 제외하고 계산하도록 수정- 헤더가 1줄 이상이고 가로로 Merge 된 경우, Pivot 된 Sheet의 헤더 Text가 원본시트의 Merge 된 첫번째 헤더 Text로 표시되는 현상 수정[원본 시트]

[수정 전 Pivot Sheet]

[수정 후 Pivot Sheet] - 헤더의 Text가 "/" 구분자로 연결되어 표시되도록 수정


### Ver 8.1.0.30-20230711-16

New- (Method) exportData시 Sheet 데이터의 상단/하단에 값 설정하는 기능 추가exHead, exFoot 속성 추가 var param = {          sheetDesign: 1,          merge: 1,          fileName: document.getElementById('filename').value + '.xlsx'        };
        param["exHead"] = [ //시트 데이터 상단 설정          { // 첫번째 행            Height: 30,            Cells:[              {                Type:"Img",                 Value:"|/ibsheet8_sample/assets/imgs/logo.png|78|28"              },              {},{},{},{},{},{},{}, //7칸 빈셀              {                Type:"Text",                Value:"(취급주의)대외비",                TextColor:"#FF0000",                Wrap: 0,                TextSize: 14              }            ]          },           { // 두번째 행            Height: 40,            Cells:[              {}, //첫칸 빈셀              {                Type:"Text",                Align: "Center",                Value: "202X년 근무 외 수당 청구 내역",                Color:"#DEDEDE",                TextSize: 45,                TextStyle: 1,                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF",                BorderLeft:"2 dashed #0000FF",                ColSpan: 8              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF",                BorderRight:"2 dashed #0000FF"              }            ]          },          {}, // 세번째 행          {// 네번째 행            Cells:[              {                Value:"부서",                Align:"Right",                Color:"#DEDEDE",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },{                ColSpan: 3,                Value:"총무부",                Align:"Left",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222"              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderRight:"1 solid #222222"              }            ]          },          {// 다섯번째 행            Cells:[              {                Value:"기간",                Align:"Right",                Color:"#DEDEDE",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                ColSpan: 3,                Value:"202X/01/01 ~ 202X/04/01",                Align:"Left",                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222"              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderRight:"1 solid #222222"              }            ]          }        ];        param["exFoot"] = [ //시트 데이터 하단 설정           {},  //시트 데이터 하단 첫번째 행          { //시트 데이터 하단 두번째 행             Height:30,             Cells:[              {                Value: "출력: 2023-06-23 김XX",                Align: "Left",                Wrap: 0              }            ]          }        ];

sheet.exportData(param);

[다운로드 받은 엑셀 내용]


### Ver 8.1.0.29-20230707-10

Fixed- (Method) setAllCheck 성능 개선


### Ver 8.1.0.28-20230706-16

New- 조회, 저장 요청에 credential 정보 전송하는 기능 추가(Cfg) WithCredentials 추가


### Ver 8.1.0.27-20230706-14

New- (Event) onReadCanEditDate return 형식 추가return [false,"class명"] - css class를 설정 할 수 있는 인자 추가ex) <style>.bgColor{ background-color: #baebbd; }</style><script> onReadCanEditDate:function (evtParam) {      if (evtParam.col === 'DUE_DATE') {        var row = evtParam.row;        var startDate = new Date(parseInt(row.ORDER_DATE, 10));        var endDate = new Date(parseInt(row.DTDY31, 10));
        // 수주일과 검수일 사이만 선택 가능함.        if (evtParam.date < startDate || evtParam.date > endDate) {          return [false,"bgColor"]; //취소선 대신에 bgColor class의 내용 반영
        }
       return true      }    }</script>

[수정전 달력 - 선택할 수 없는 날짜 취소선으로 처리]
[수정후 달력  - 선택할 수 없는 날짜 배경색으로 처리 ]

- (Cfg) GroupFormat 예약어 추가{%vc} 감춰진 행을 제외하고 행 갯수 표시
- 필터 행의 필터옵션에 값있음, 값없음 추가main.css 업데이트 필요 - 아래 class 추가 .IBFilter14Left,.IBFilter14Right,.IBFilter14Menu .IBFilter15Left,.IBFilter15Right,.IBFilter15Menu

메세지 파일 업데이트 필요 - ko.js, cn.js 등 "MenuFilter": {      "F0": "사용안함",      "F1": "같음",      "F2": "같지 않음",      "F3": "작음",      "F4": "같거나 작음",      "F5": "큼",      "F6": "같거나 큼",      "F7": "단어로 시작함",      "F8": "단어로 시작하지 않음",      "F9": "단어로 끝남",      "F10": "단어로 끝나지 않음",      "F11": "포함함",      "F12": "포함하지 않음",      "F13": "상위 10",      "F14": "값 있음", //추가      "F15": "값 없음" //추가    }


값있음 : 값이 있는 데이터를 필터링 함값없음 : 빈 데이터를 필터링 함

Fixed- (Cfg) ClickPivotFilter : 1 사용시 Enum 컬럼의 값이 Filter 되지 않는 증상 수정[원본데이터]

[Enum 컬럼으로 Pivot 된 데이터]

[수정전] -  Pivot 시트에서 강원 컬럼의 여자를 클릭 했을 경우

[수정후] - Pivot 시트에서 강원 컬럼의 여자를 클릭 했을 경우
- (Cfg) SearchMode : 4, (Cfg) PageLength 설정한 시트에서 (Cfg) PageLength 설정값 보다 많은 데이터 조회시 페이지네비게이션 값이 바뀌는 현상 수정PageLength 에 설장한 갯수만큼 조회 해야 한다.
- (Cfg) SearchMode : 4, (Cfg) IgnoreFocused :1 설정한 시트에서 (Method) getPageIndex의 리턴값이 1부터 시작하는 현상 수정- (Cfg) SearchMode : 0, Group과 Filter 기능을 썼을때 오류 나는 증상 수정Uncaught TypeError: Cannot read properties of null (reading 'insertRow') 



### Ver 8.1.0.26-20230629-13

New- 기존보다 큰 달력 css 추가main.css 업데이트 필요 - 하단 내용 주석 해제
ibsheet.js 의 변경 사항이 아니라 main.css 파일에 아래 내용 추가하면 된다./*.IBPickCell{width:43px;height:34px;font-size:initial;}.IBPick2Row{height:33.8px;font-size:initial;}.IBPick2CellY{width:65px;}.IBPick2CellM{width:83px;}*/[기존]
[사이즈가 큰 달력]



Fixed- (Col) Sort, 오름/내림차순 아이콘을 반대로 변경main.css 업데이트 필요(.IBSort0~6Left,.IBSort0~6Right)ibsheet.js 의 변경 사항이 아니라 main.css 파일에서 Sort 관련 Class svg 이미지 변경
[기존]

[수정 후] - 정렬 내용으로 이미지 반전시킴(하얀색 부분)
- "Format": "yyyy/MM/dd", "DataFormat": "yyyyMMddHHmmss" 설정한 컬럼에 (Method) ImportData 로yyyyMMddHHmmss  데이터 load 되지 않는 현상 수정


### Ver 8.1.0.25-20230622-15

New- 행단위 데이터 설정 기능 추가(Method) setRowValue 추가- (Cfg) AutoCalendar, (Col) TimePicker 연동 기능 추가

Fixed- (Cfg) AutoRowHeight : 1, (Col) Type : "Lines"  컬럼에서 (Method) addRow시 오류 수정 
- (Method) importData시 헤더에 \n 이 포함되어 있으면 load 되지 않는 증상 수정
- (Method) exportData시 \n 데이터가 사라지는 증상 수정


### Ver 8.1.0.24-20230615-17

New- (Method) exportData 여러개의 시트를 하나의 엑셀 파일로 다운로드 하는 기능 추가(Method) exportDataBuffer 추가

Fixed- (Method) showCalendar 에서 "Format" : "yyyy" 연도 달력 뜨지 않는 증상 수정
- (Method) importData시 특정 컬럼이 load 되지 않는 증상 수정


### Ver 8.1.0.23-20230608-18

New- 데이터행 하단 고정 기능 추가(Method) setFixedBottom 추가됨

- (Method) getDataRows currentPage 인자 추가(Cfg) SearchMode : 4, (Cfg) AlwaysSearchPage : 1 일때 필요한 기능


### Ver 8.1.0.22-20230601-12

Fixed- Type : Date, (Col) Size 적용된 컬럼에 데이터가 있을때 편집모드(더블클릭, Enter, F2)로 전환 후 End키로 커서를 제일 마지막으로 보낸 다음 값 입력시 데이터가 timestamp로 표시되는 증상 수정- 조회된 데이터가 없는 시트에서 Foot 영역이 정상적으로 보이지 않는 증상 수정- Html 타입에서 img tag의 onerror 속성을 사용할 시, 영문대문자가 소문자로 출력되는 현상 수정[수정전]

[수정후]
onerror속성은 xss취약점으로 인하여 동작하지 않음
- (Cfg) SearchMode:2 인 시트에서 Img를 표현할 때 Img 크기가 Row 높이보다 클 경우 포커스가 틀어지는 현상 수정-  소계 기준 컬럼 보다 앞에 있는 숫자컬럼이 소계 계산 컬럼이 아닐 경우 빈값으로 표시되도록 수정[수정전][수정후]
- (Cfg) SearchMode:4, (Cfg) AlwaysSearchPage:1 설정 후 페이지 이동 시 (Col) DefaultValue가 적용되지 않는 현상 수정[수정전][수정후]



### Ver 8.1.0.21-20230525-14

Fixed- Pivot시트 다운로드시 원본시트의 (Cfg) Export.Url 의 경로 참조 하지 않는 증상 수정- Pivot(Method) exportData 오류 수정8.0.0.11 버전부터 발생한 오류 수정- Locale 바꾸고 데이터 invalid 시 출력되는 메시지 Locale 설정값과 동일하게 출력 되도록 수정- (Method) importData, 숫자형 컬럼에 대해서 빈값일 때 CanEmpty 속성에 따라 빈값 또는 0 으로 로드 되도록 수정


### Ver 8.1.0.20-20230518-12

New- (Method) importData 에 File 객체나 BLOB 데이터를 직접 넣을 수 있는 기능 추가file 인자 추가

Fixed- (Method) loadSearchData 호출 시 CalcOrder에 설정한 내용이 정렬되는 현상 수정- 시트 create 할 때 id가 없을 경우 경고창이 띄워지도록 개선


### Ver 8.1.0.19-20230512-08

New- (Cfg) AutoSelectYm: 2 동작 추가확인버튼 유지하고 값 선택시 바로 셀에 값 입력
- 엑셀 다운로드시 셀 값을 다른 값으로 설정하는 기능 추가(Cell) ExportValue 추가
Fixed- setAttribute를 이용하여 Changed, Deleted, Added 을 변경할 때 Formula가 동작하지 않는 현상 수정- (Col) Width 설정하지 않고 컬럼 생성 후, 컬럼의 사이즈 변경하고 (Method) setCurrentInfo로 너비가 저장되지 않는 현상 수정- (Method) setInfoRow visible 인자 동작 하지 않는 현상 개선- 년 달력("Format": "yyyy")에서 년도 선택시 셀에 바로 값이 입력 되도록 수정-  Type : "File", 파일이 올라가지 않는 증상 수정8.1.0.13 버전에서 발생한 버그 수정- (Cfg) CanEdit: 3이 설정된 시트에서 Type:"Enum", Type:"Date" 마우스 pointer로 동작하는 현상 수정


### Ver 8.1.0.18-20230427-10

Fixed- HtmlPrefix, HtmlPostfix에 의한 행 높이 변화 시 AutoRowHeight 기능 오류 수정
- (cfg) IgnoreFocused : 1 시트에서 조회 후 focus 이동 되는 현상 수정8.1.0.9 버전에서 현상 발생, 해당 내용 수정 완료


### Ver 8.1.0.17-20230421-10

Fixed- Type : "Bool" , 0 데이터 붙여넣기시 체크되면서 붙여넣어지는 현상 개선
- (Cfg) SearchMode: 0, CustomScroll 사용 시 가로스크롤 동작 개선


### Ver 8.1.0.16-20230414-11

New- (Method) setFixedCols, setFixedLeft, setFixedRight 동기로 동작 기능 추가각 함수에 sync 추가

Fixed- 데이터에 & 문자가 있을 경우 (Method) exportData 오류 수정
- (Method) setAttribute, render : 0 동작하지 않는 증상 수정
- (Cfg) GroupFormat 예약어 {%c} 사용시 자식행의 갯수가 보여지도록 수정[수정전]
[수정후]

- 그룹핑 이후 포커스 동작 개선 [그룹전]

[그룹후]  그룹전 선택되어 있던 행으로 focus이동
- 그룹된 시트에서 조회하고, 그룹을 해제 하면 그룹 트리가 남아 있던 증상 수정
- (Method) setMergeRange로 머지된 영역에 전체 체크가 동작하지 않는 현상 수정[수정전]
[수정후]

### Ver 8.1.0.15-20230406-08

Fixed- (Method) makeSubTotal의 %capCol 값이 원본 값으로 보여지는 현상 수정[수정전] - 날짜, Enum, Format 있는 데이터가 원본 값으로 보인다.


[수정후] - 날짜, Enum, Format 있는 데이터가 눈에 보이는 값으로 보인다.

- 필터행에서 (Col) TimePicker 아이콘이 동작하지 않는 문제
- 멀티레코드 Foot 영역 머지 기능 개선



### Ver 8.1.0.14-20230330-10

New- (Method) getChildRows, 특정 레벨까지만 추출하는 기능 추가(Method) getChildRows, maxLevel 인자값 추가- (Event) onStartDrag 드래그시 커서에 표시되는 내용을 다른 값으로 바꾸는 기능 추가(Event) 리턴값을 String으로 설정하면 해당 문자열 표시되는 기능[수정전]
[수정후] return "가나다"


Fixed- (Method) down2Excel, (Method) exportData comboValidation:1 컬럼별로 적용 되도록 기능 수정[수정전]
Enum에 설정한 Text의 총 길이가 256byte를 초과하는 컬럼이 있는 경우 comboValidation 기능을 모두 취소
[수정후]Enum에 설정한 Text의 총 길이가 256byte를 초과하는 컬럼만 comboValidation 기능취소- (Cfg) AutoRowHeight:1로 설정한 display:none인 시트에서 (Method) loadSearchData 오류 수정
- (Cfg) SearchMode: 0, (Cfg)TouchScroll: 3 설정 시트에서 스크롤 오류 수정(모바일)- jqueryPagination을 이용한 Paging 조회시 url 정보가 이상하게 바뀌는 증상 수정


### Ver 8.1.0.13-20230323-12

New- (Col) "TimePicker" : 1, (Col) Interval 설정 후 빈값 클릭시 현재시간이 아닌 (Col) Interval에 설정한 단위로 보여주는 기능 추가(Col) Interval.Init 추가-  PivotSheet에서 Data Sort 하지 않는 기능 추가(Cfg) NoPivotSort 추가

Fixed- (Col) "Type" : "File" 컬럼에 파일이 있는 상태에서, 파일 선택창을 띄운후 취소시 서버로 전달되는 File 명이 없어지는 현상 개선- (Col) Header에 이미지가 있을때, (Method) importData시 오류 나타나는 현상 수정- TreeSheet에서 (Cfg) AutoRowHeight 계산 안되는 현상 수정
- TreeSheet에서 Merge 시 연결선 나타나지 않는 증상 패치
[사용법] 
```javascript
Cfg : {
    "PrevColumnMerge" : 1, 
    "DataMerge" : 1,
    "MainCol": "Cls"
}
```
[수정전]

[수정후]

### Ver 8.1.0.12-20230321-16

Fixed- (Col) "EditFormat" : "HH:mm", (Col) "TimePicker" : 1 설정한 컬럼에서 다이얼로그 표시되지 않는 현상 수정


### Ver 8.1.0.11-20230317-10

Fixed- 유니코드 문자가 포함된 시트 (Method) exportData 시 다운로드 이후 오류 수정

- (Method) importData시 (Col) "Type" : "Date" 인 컬럼에 NaN으로 로드 되는 현상 개선엑셀의 셀 서식이 일반 또는 Text로 되어 있을 있는 파일


### Ver 8.1.0.10-20230316-12

New- (Event) onStartDrag return -1 추가

Fixed- (Event) onAfterSave에서 시트의 함수가 호출되지 않는 증상 개선
- 가로스크롤이 중간에 있는 상태에서 재조회시 스크롤 초기화 되는 현상 수정(스크롤 유지)
-  (Method) exportData csv 다운로드 오류 수정
- 고정(Solid)행에 Radio 타입을 사용하는 경우  Width 동작하지 않는 현상 수정


### Ver 8.1.0.9-20230310-12

New- (Cfg) SearchMode:4 , 페이지 이동시 항상 조회 하는 기능 추가(cfg) AlwaysSearchPage 추가- (Method) showMenu 호출시 Cell Data와 동일한 값 선택 기능 추가(Method) ShowMenu에 cursor 추가

Fixed- (Col) CanFocus : 0, (Col) CanEdit : 0 인 컬럼에서 (Cfg) ColorState 적용 안되는 현상 수정[수정전] -줄넘김문자열 컬럼
[수정후] - 줄넘김문자열 컬럼
- (Col) TimePicker : 1 컬럼에서 Cell Data가 9시일때 다이얼로그에 현재 시간으로 표시되는 현상 수정


### Ver 8.1.0.8-20230223-13

New-  PivotSheet와 원본시트의 Cfg를 다르게 설정 할 수 있는 기능 추가(Cfg) PivotCfg 추가원본시트의 Cfg 영역에 PivotCfg를 설정하면 된다.
```javascript
Cfg: {
  PivotCfg: {
    Alternate: 0
  }
},
Def: {
  PivotRow: {
    // 가로행 기준으로 생성되는 컬럼의 색상 설정 가능 (default: "245,245,245")
    Color: ''",  //색상을 적용하지 않는다.
    // 세로행 기준으로 생성되는 컬럼의 색상 설정 가능 (default: "245,255,255")
    PivotDataColor: ''" //색상을 적용하지 않는다.
  }
}
```
[원본시트 이미지]
[PivotSheet 이미지] - 짝수홀수 배경색 지정하지 않음, 데이터 행을 흰색으로 설정


Fixed-  (Cfg) SearchMode:2, 트리시트를 숨겼다 보이면 펼쳐진 자식행들이 사라지는 현상 개선


### Ver 8.1.0.7-20230217-17

Fixed- (Cfg) ExactCheck 헤더의 체크 박스에서도 동작 되도록 개선


### Ver 8.1.0.6-20230216-12

New- (Col) TimePicker, (Method) showTimePicker 기능 추가시분초("Format" :"HHmmss"), 시분("Format" :"HHmm")  컬럼에 시계 아이콘이 표시
main.css(.IBTimePicker로 시작하는 css 추가), ko.js(TimePicker 부분 추가) 파일 같이 업그레이드 필요

- (Col) TimePicker :1, 분과 초의 간격 설정 하는 기능 추가(Col) Interval 추가
- (Cfg) SelectionSummary 외부에 표시 하는 기능 추가(Method) setSelectionSummaryInfoElement , (Method) getSelectionSummaryInfoElement 추가
- (Event)onImportFinish 에서 엑셀로드 취소기능 추가 return ture 시 엑셀 로드 취소된다.

Fixed- (Method) DoSave, (Method) getSaveString queryMode:2 사용시 saveAttr 동작하지 않는 증상 개선- PivotSheet에서 원본시트의 (Cfg) ColorState의 값을 따라가지 않는 현상 개선- (Cfg) SearchMode:4, (Method) goToPageByIndex로 페이지 이동시 (Method) doSearchPaging에서 설정한 Content-Type이 변경되는 현상 개선- (Cfg) SearchMode:4, (Cfg) PageLength 값이 20으로 설정 되는 현상 개선- (Cfg) SearchMode:0, 트리시트에서  (Col) IconAlign:"Right" 설정한 컬럼 이후로 Text 컬럼의 정렬이 맞지 않는 증상 개선- (Col) Enum, (Col) Related 설정한 컬럼이 있을 때 (Method) getUserOptions 에러 개선- (Method) doSearchPaging({cPage}) 설정 후 재조회시 오류 개선- 아이폰 webView 에서의 null 오류 개선



### Ver 8.1.0.5-20230209-16

Fixed- (Method) makeSubTotal의 countCols 에 날짜 컬럼 지정시 건수가 계산되지 않는 증상 개선
  [변경전] 

  [변경후]

- (Col) "Type" : "Date" 컬럼의 revertData() 동작 오류 개선   조회데이터 : 20220130   데이터변경 :  20090201
   revertData() 호출 : "20220130"이 아닌 "19700101"로 변경 되는 증상 개선

- (method) importData로 Type:"Bool" 컬럼에 빈 데이터 로드시 0으로 로드 되는 증상 개선 - 원본 데이터 유지
  


### Ver 8.1.0.4-20230202-13

New- 년도 달력 추가  사용방법 : "Type" : "Date", "Format" : "yyyy", "DataFormat" : "yyyy", "EditFormat" : "yyyy"

### Ver 8.1.0.3-20230126-13

Fixed- (Cfg) CanDrag :  1, 행 이동 동작 개선Cannot read properties of undefined (reading 'colSpan') 오류 수정(Cfg) SearchMode : 0 , (Cfg) MainCol 설정한 시트 onAfterRowMoveToSheet  이벤트에서 return -1 시 행 정보가 모두 사라지는 증상 패치
[Row 이동 전]
[Row  이동 후] - 이동한 Row 이후로 데이터가 모두 사라진다.


### Ver 8.1.0.2-20230119-13

Fixed- (Col) "Type" : "Float", 소계행이(makeSubTotal) 있는 시트를 (Method) exportData로 다운로드 받은 
파일에서 소계행의 데이터가 0. 으로 표시되는 현상 개선[수정전][수정후]

- FormulaRow에 0값 setValue시 값 표시되지 않는 증상 개선- (Method) setAttribute를 이용한 (Col) Required 적용되지 않는 증상 개선


### Ver 8.1.0.1-20230112-12

Fixed- (Cfg) SearchMode : 4, (Cfg) SortCurrentPage : 0 으로 설정한 시트에서 Sort가 되고 있는 증상 개선


### Ver 8.0.0.29-20230105-09

New- (Method) exportData시 Font 설정 기능 추가excelFontFamily 속성 추가
Fixed- (Method) doSave({queryMode:2}), (Method) getSaveString({queryMode:2}) 시 (Col) NoUpload:1 설정한 컬럼이 저장 데이터에 포함 되는 문제 개선- (Method) exportData, 헤더 색상이 반영되지 않는 현상 개선- (Method) importData, 엑셀의 빈행이 로드 되는 현상 개선- 소계가 있는 시트에서 (Method) removeAll, (Method) removeSubTotal 성능 개선- (Cfg) SearchMode :2, 시트의 크기보다 Merge 된 데이터 영역이 클 경우, Enum div가 넘치는 증상 개선[수정전]
[수정후]- (Cfg) SearchMode : 0, (Col) "Type" : "Enum" Merge된 셀 편집시 스크롤 동작 개선



### TEst

## this h1

### Ver 8.3.0.19-20250710-15

New1. Int, Float 타입에서 Format 설정 시 양수, 음수, 0에 대한 TextColor, TextFont, TextSize, TextStyle를 설정할 수 있는 (col, cell)SignFontStyle 속성 추가 SignFontStyle을 이용하여 숫자형 컬럼에서 데이터가 각 양수, 음수, 0일 때 Text가 표시될 속성들을 설정하여 적용할 수 있습니다.양수, 음수, 0 일 때 Format을 지정하는 것과 동일하게 ;를 구분자로 사용합니다."red;;yellow" 와 같이 어떤 값을 빈 값이나 '', null로 지정할 경우 기존의 text 속성을 유지합니다.
NameTypeRequiredDescriptionTextColorstring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자색(TextColor)을 설정합니다.ex) "SignFontStyle": {"TextColor": "red;blue;orange", …}TextFontstring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 폰트(TextFont)를 설정합니다.ex) "SignFontStyle": {TextFont: "Gulim, Helvetica;Malgun Gothic;Times New Roman", …}TextSizestring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 크기(TextSize)를 설정합니다.ex) "SignFontStyle": {TextSize: "12px;15px;5px", …}TextStylestring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 스타일(TextStyle)를 숫자로 설정합니다.ex) "SignFontStyle": {TextStyle: "5;2;8", …}
[사용 예시]{    "Header": "정수(Int)",    "Type": "Int",    "Name": "IntData",     SignFontStyle: {        TextColor: "blue; red; pink",  // 양수-blue, 음수-red, 0-pink    }},
Fixed1. revertData를 호출했을 때 NoChanged가 설정된 컬럼/셀의 값이 초기값으로 되돌아가지 않는 현상 수정 
2. (col) Header에 Wrap이 설정된 경우, Hint가 무조건 표시되던 문제 수정 3. (col) CustomFormat: "PhoneNo"설정 시 처음 4자리가 0501 ~ 0509로 시작하는 경우 4-4-4 포맷(안심번호)으로 표시 되도록 개선 4. LWC에서 showMessageTime으로 표시한 메시지의 클릭 이벤트 동작하지 않는 현상 수정 5. Solid 행의 셀의 Width가 padding을 제외하고 설정되던 문제 수정 

Dialog Fixibsheet-dialog.js 1.0.42-20250710-15  버전에서 해당 패치가 이루어졌습니다.1. 피벗 다이얼로그 디자인 변경 다이얼로그의 기본 높이 540에서 600으로 변경대상 컬럼의 항목이 10개의 컬럼까지 보이도록 크기 축소각 필드 별 타이틀 영역 높이 축소다수 컬럼으로 피벗 다이얼로그 사용 시 사용의 편의성을 위해 대상 컬럼에 더 많은 컬럼이 한눈에 보이도록 수정되었습니다.
[변경된 UI] 


### Ver 8.3.0.20-20250717-16

New1. (Method)hasChangedData, getChangedData에 데이터 행만 대상으로 동작할 수 있는 dataonly 인자 추가 시트의 변경된 사항이 있는지 확인할 수 있는 Method 인 hasChangedData, getChangedData 는 데이터 영역 뿐 아니라 Foot, Header, Head, FormulaRow 등의 수정 사항도 인식하여 함께 return 이 됩니다.사용의 편의성을 늘리고자, data 행만의 변경된 사항을 인식하여 리턴받을 수 있게 하는 dataonly 인자가 추가 되었습니다.dataonly:1(true) 로 설정 시 데이터를 대상으로 변경된 사항을 리턴합니다.[사용 예시]sheet.hasChangedData({dataonly:true})2. (Cfg)SelectingCells: 0인 경우 복사할 영역을 제어할 수 있는 (Cfg)CopyCols 옵션 추가(Cfg)SelectingCells:0 을 설정한 경우 행단위로만 선택이 되어, 복사나 붙여넣기 동작 시 모든 행이 기준으로 복사/붙여넣기 되어 사용에 불편함이 있었습니다.사용성 개선을 위하여 (Cfg)CopyCols 옵션을 추가하여 복사하여 붙여넣기에 사용할 열을 설정할 수 있습니다.ValueDescription0포커스된 열만 붙여넣기에 사용1모든 표시열을 붙여넣기에 사용2모든 열을 붙여넣기에 사용(숨겨진 컬럼도 포함)3포커스된 행에 대해서만 포커스된 셀 범위 또는 모든 표시 열(default)
Locale Fix1. 중국어 언어 파일에 ReqStatusDeleted, ReqStatusAdded, ReqStatusChanged가 한자로 되어 있던 문제 수정 // "ReqStatusDeleted": "已删除",// "ReqStatusAdded": "额外",// "ReqStatusChanged": "改变了","ReqStatusDeleted": "Deleted","ReqStatusAdded": "Added","ReqStatusChanged": "Changed",2. zh.js, ja.js 언어파일 추가 Fixed1. LWC 환경에서 (Method)showMessageTime으로 표시되는 메시지 상자의 위치가 화면 하단에 표시되는 현상 수정 2. (Row,Col,Cell)Menu의 Edit: 1로 생성되는 input 클릭 시 커서가 표시되지 않는 문제 수정 3. (Method)doSearchPaging의 pageParam, pageLengthParam가 숫자형으로 전달 되도록 수정 4. (Method)doSearchPaging의 param이 없는 경우 undefined로 전송되는 현상 수정 5. (Cfg)SearchMode: 3에서 시트의 세로 스크롤이 존재하지 않는 경우, 데이터 행의 개수 줄어들 경우 데이터 조회를 하는 문제 수정 6. (Cfg)PageLength가 데이터의 Total보다 값이 클 때 SEQ셀의 값이 음수로 표시되는 문제 수정 7. (Col)Range가 설정된 File타입의 셀에 2개 이상의 파일 첨부 시 파일 수만큼 링크가 생성되도록 변경 8. (Col)Range가 설정된 File타입의 셀에 구분자가 포함된 값을 조회 시 개별 파일로 처리되도록 수정 9. (Cfg)PastCols 공개 및 (Cfg)SelectingCells: 0인 경우에도 동작하도록 수정 10. 사용자가 (Method)showProgress로 표시한 진행 막대의 경우 사용자가 (Method)hideMessage를 호출할 때만 사라지도록 변경 Common Fixibsheet-common.js 1.0.26-20250717-16  버전에서 해당 패치가 이루어졌습니다.1. 트리시트에서 IB_Preset.DelCheck 사용 시 자식행이 랜더링되도록 수정 


### Ver 8.3.0.21-20250724-14

Fixed1. onValidation 이벤트의 메시지가 (Method)doSave의 quest에 설정한 메시지 보다 먼저 나오도록 변경  2. (cell) Path, (cell) Alias를 구분자를 통해 파일 마다 설정할 수 있도록 수정  3. (Col)SignFontStyle의 설정이 셀에 설정된 extColor, TextSize, TextFont, TextStyle 보다 우선 시 되지 않도록 변경 (cell) SignFontStyle 제거
4. (Cfg)SelectingCells와 관계없이 (Cfg)CopyCols가 설정되도록 변경 5. 사용자가 (Method)showProgress를 호출한 경우 시트 내부의 showMessage 동작으로 showProgress 메시지가 닫히지 않도록 수정 6. (cfg) ValidCheck로 (col) Size가 정상적으로 체크되지 않는 문제 수정 


### Ver 8.3.0.22-20250731-14

New1. (Method)importData 시 엑셀 파일의 셀 위에 이미지를 불러올 지 결정하는 uploadImage 인자 추가  업로드할 엑셀 파일에 아래처럼 이미지가 들어있을 경우, 해당 이미지를 데이터로 업로드 할지 무시할지 여부를 결정하는 uploadImage 인자가 추가되었습니다.uploadImageboolean선택셀 위에 띄워진 이미지를 업로드할지 여부를 결정합니다.0(false): 셀 위에 띄워진 이미지를 업로드하지 않음1(true):셀 위에 띄워진 이미지를 업로드함 (default)
[사용 예시]sheet.importData({     uploadImage:false // 엑셀에 있는 이미지를 업로드 시 무시함})
Fixed1. (Method)exportData 시 (Col,Cell)Format에 'dd', 'dddd'처럼 일만 설정된 셀의 값이 (cfg) MsgLocale과 상관없이 영어로만 다운로드 되던 문제 수정 
2. 접근성 모드 사용 시 caption의 display가 inline style이 아닌 css에서 설정 되도록 변경 3. solid행의 Cells에 공백이 포함되어 있을 경우 발생하던 에러 수정 4. (Method)doSave 인자 quest:1를 설정한 상태에서 onValidation 이벤트에서 true를 리턴 할 때, 저장할 데이터가 없다고 메시지가 뜨는 현상 수정 5. LWC에서 시분이 표시되는 달력의 레이아웃이 깨지는 문제 수정 6. 스타일행의 '리셋' 버튼 클릭 시 글자크기에 허용 범위 밖의 값이 입력된 경우 alert이 뜨던 문제 수정 7. LWC에서 제공하는 레이아웃 컴포넌트를 사용할 때 시트가 사라지는 문제 수정 8. LWC에서 IBSheet.ControlsTag를 설정하지 않고 (Cfg) ControlsTag만 설정한 경우에도 시트가 생성되도록 개선 

CSS Fix1. StyleRowConfig 관련 css 변경 spin-button에 -webkit-appearance 추가'글자크기' input의 너비 44px로 변경2. 2025년 웹접근성 대응 caption 태그 관련 css 추가 prefix + capblind 클래스 추가
/* 테마 별 css 파일에 변경됨 *//* IB */.IBMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}
/* IBGR */.IBGRMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBGRMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBGRcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}
/* IBGY */.IBGYMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBGYMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBGYcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}
/* IBMR */.IBMRMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBMRMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBMRcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}
/* IBMT */.IBMTMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBMTMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBMTcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}
/* IBSP */.IBSPMain td[ib-row='STYLE'] input[type='number']{padding-left:4px;width:44px;line-height:24px;cursor:initial}.IBSPMain td[ib-row='STYLE'] input[type=number]::-webkit-inner-spin-button, .IBMain td[ib-row='STYLE'] input[type=number]::-webkit-outer-spin-button{-webkit-appearance:auto}
.IBSPcapblind{width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;white-space:nowrap}


Excel Fixibsheet-excel.js 1.0.23-20250731-14  버전에서 해당 패치가 이루어졌습니다.패치 적용을 위해 servermodule ibsheet8-2.0.2.jar 이상 적용이 필요합니다.1. (Method)loadExcel에 엑셀 파일의 셀 위에 이미지를 셀 데이터로 포함할 수 있는 uploadImage 기능 추가 업로드할 엑셀 파일에 아래처럼 이미지가 들어있을 경우, 해당 이미지를 데이터로 업로드 할지 무시할지 여부를 결정하는 uploadImage 인자가 추가되었습니다.uploadImageboolean선택셀 위에 띄워진 이미지를 업로드할지 여부를 결정합니다.
0(false): 셀 위에 띄워진 이미지를 업로드하지 않음
1(true):셀 위에 띄워진 이미지를 업로드함 (default)
[사용 예시]sheet.loadExcel({     uploadImage:false // 엑셀에 있는 이미지를 업로드 시 무시함}) 


### Ver 8.3.0.23-20250807-15

Fixed1. LWC 환경에서 (Cfg)ControlsTag의 부모 컴포넌트에 스크롤이 있는 경우 시트의 메뉴 위치 계산이 잘못되는 문제 수정 
2. Undo 동작이나 (Method)revertData 시 소계행, 합계행, Formula의 값이 재계산 되지 않는 문제 수정 3. (Cfg)InfoRowConfig의 Paging2 사용 시 힌트가 표시되지 않는 문제 수정 4. 열이 존재하지 않는 행에서 Menu가 표시되지 않던 문제 수정 
5. Formula의 대상이 되는 열의 값을 수정한 경우, Formula로 설정된 값에 반영되도록 수정

Excel Fixibsheet-excel.js 1.0.24-20250807-15  버전에서 해당 패치가 이루어졌습니다.1. 이전 패치에서 추가된 엑셀 업로드 시 셀 위에 이미지를 셀 데이터로 포함할 수 있는 uploadImage 인자가 (Cfg)LoadExcelConfig 로 설정되지 않는 현상 수정


### Ver 8.3.0.24-20250814-14

New1. 시트에서 메뉴가 표시될 때, 마우스가 메뉴를 벗어나면 자동으로 메뉴가 닫히는 (cfg) AutoCloseDialog 기능 추가, AutoCloseDialog를 사용할 경우 마우스가 벗어날 때, 닫히기 전까지 시간을 설정할 수 있는 (cfg)AutoCloseDialogTimeout 옵션 추가시트의 달력, Enum리스트, 컨텍스트 메뉴의 경우 사용자가 닫기 버튼을 누르거나 다른 영역을 클릭하기 전에는 시트에 플로팅되는 다이얼로그가 닫히지 않았습니다.사용성을 높이기 위하여 사용자가 직접 닫지 않아도 다이얼로그 영역 바깥으로 마우스가 나가면 떠있는 다이얼로그를 닫을 수 있는 (Cfg)AutoCloseDialog 속성이 추가되었습니다.
AutoCloseDialog:true 사용 시 마우스가 나간 후 닫히는 지연 시간을 설정할 수 있는 AutoCloseDialogTimeout 기능도 함께 추가되었습니다. 이때 설정하는 시간의 단위는 ms 단위입니다.
[사용 예시]options.Cfg = {    AutoCloseDialog: 1, // 다이얼로그 자동닫기 설정    AutoCloseDialogTimeout: 5000, // 자동닫기 지연시간 설정 };
2. 포커스 된 셀의 오른쪽 하단을 드래그 하여 채우기 동작을 할 수 있는 (cfg) DragFill 추가 포커스 된 셀 오른쪽 하단을 드래그 시 채우기 동작 활성화 여부를 지정할 수 있는 Cfg.DragFill 속성이 추가되었습니다. Cfg.DragFill: true 설정 시 아래 사진처럼 셀 우측 하단 모서리에 마우스 hover 시 + 표시가 생깁니다.
+ 표시가 생긴 상태로 클릭 후 원하는 영역을 드래그 하면 아래와 같이 채워질 영역이 표시됩니다.
영역 드래그 동작을 종료하면 아래처럼 기준 셀과 동일한 값으로 선택한 영역에 데이터가 채워 넣어집니다.
[사용 예시]options.Cfg = {   "DragFill": true // 채우기 동작 활성화}

3. getSaveJson, getSaveString, doSave에서 Size, ResultMask, EditMask에 관한 유효성 검사를 진행 할 수 있는 옵션 추가 각 함수의 인자로 validSize, validEditMask, validResultMask 인자가 추가되면서 Size, ResultMask, EditMask 에 관해 각각 유효성 검사를 진행할 지 말 지를 설정할 수 있습니다.
validSizeboolean선택사이즈 설정(Size col)에 대한 유효성 검사 여부 설정.0(false):사이즈 유효성 검사 안함 (default)1(true):사이즈 유효성 검사 실행validEditMaskboolean선택EditMask 설정(EditMask col)에 대한 유효성 검사 여부 설정.0(false):EditMask 유효성 검사 안함 (default)1(true):EditMask 유효성 검사 실행validResultMaskboolean선택ResultMask 설정(ResultMask col)에 대한 유효성 검사 여부 설정.0(false):ResultMask 유효성 검사 안함 (default)1(true):ResultMask 유효성 검사 실행[사용 예시]// ResultMask에 관한 유효성 검사 진행sheet.getSaveJson({validResultMask: 1});
// Size, EditMask에 관한 유효성 검사 진행sheet.doSave({url: "a.html", validSize: 1, validEditMask: 1});
Fixed1. (LWC 환경에서 띄우려는 시트 다이얼로그의 높이가 (Cfg) DialogsArea로 설정한 영역의 높이보다 작을 때, 다이얼로그가 잘리는 현상 개선 
2. 시트 하단에 필터 다이얼로그가 표시될 공간이 부족할 경우, 위쪽으로 표시 되도록 변경 3. 시트의 셀 마우스 드래그 시 CSP 보안 정책에 따라 스크립트 오류가 발생하는 현상 수정 


### Ver 8.3.0.25-20250821-14

Fixed1. TextColorFormula를 설정한 상태에서 DragMerge 사용 시 스크립트 오류 발생하는 현상 수정 
2. lwc에서 피벗 다이얼로그가 시트에 설정된 (cfg) ZIndex를 상속하지 않는 문제 수정 ibsheet-dialog.js 1.0.43-20250821-15 가 함께 적용되어야 합니다.


Dialog Fixibsheet-dialog.js 1.0.43-20250821-15  버전에서 해당 패치가 이루어졌습니다.1. lwc에서 피벗 다이얼로그와 차트 다이얼로그가 시트의 (cfg) ZIndex로 설정되지 않는 문제 수정 ibshee.js 8.3.0.25-20250821-14 와 함께 적용이 되어야 해결되는 현상입니다.


### Ver 8.3.0.26-20250828-15

New1. (Cfg) SearchMode:1에서 HeaderCheck 클릭 시 현재 보여지는 페이지만 체크하는 (Cfg) HeaderCheckPageOnly: 1 옵션 추가 (Cfg)SearchMode:1 에서 HeaderCheck 클릭 시 전체 페이지의 해당 컬럼을 체크하는 것이 현재 기본 동작 입니다. 동작의 다양성을 위해 전체 페이지가 아니라 현재 보고있는 페이지만 체크할 수 있도록 하는 HeaderCheckPageOnly 옵션이 추가되었습니다.
[사용 예시]options = {    Cfg :{        HeaderCheckPageOnly: 1, // `(Cfg) SearchMode: 1`에서 `(Cfg) HeaderCheck` 옵션을 사용하여 전체 체크를 할 때, 전체 페이지를 체크하지 않고 현재 보여지는 페이지만 체크합니다.        ...    }}; 



Fixed1. Type: Date의 필터행에서 여러 날짜를 선택하여 필터링 동작이 안되던 문제 수정 
2. (Col)CanEdit: 0, AddEdit: 1이 설정된 컬럼에 붙여넣기 시 해당 설정이 반영되지 않던 문제 수정 3. 필터 다이얼로그를 띄울 공간이 부족할 경우 필터 다이얼로그를 위쪽 방향으로 표시되도록 변경 4. (Cfg)SearchMode: 0에서 필터 후 가로스크롤이 초기화 되지 않도록 변경 
5. (Col)RelWidth:1과 (Col)MinWidth를 설정한 뒤, 헤더가 (Col)MinWidth보다 작아질 경우 원래 크기로 설정되는 문제 수정 6. 엑셀파일 다운로드 시 (Col)TrueValue, FalseValue에 설정된 값으로 다운로드 되도록 변경 

Excel Fixibsheet-excel.js 1.0.25-20250828-16 버전에서 해당 패치가 이루어졌습니다.1. IE에서 오류 발생하는 현상 수정 
2. 엑셀파일 다운로드 시 (Col) TrueValue, FalseValue에 설정된 값으로 다운로드 되도록 변경 

 
common Fixibsheet-common.js 1.0.27-20250828-16 버전에서 해당 패치가 이루어졌습니다.1. 특정 행의 상태값을 반환하는 (Method)getRowStatus 기능 추가 

2. 트리 시트에서 부모의 DelCheck가 체크된 상태에서 자식의 DelCheck 클릭 시 해당 자식과 부모의 체크가 해제되도록 변경

### Ver 8.3.0.27-20250904-15

New1. 위쪽 헤더 행 기준으로 아래쪽 헤더 행의 헤더 머지를 설정하는 (Cfg) PrevHeaderMerge 옵션 추가 위쪽의 헤더 행 기준으로 아래쪽 헤더 행의 헤더 머지를 설정하는 PrevHeaderMerge 옵션이 추가되었습니다.대분류-하위분류로 이루어진 헤더를 선언할 때 유용하게 사용 가능합니다.
HeaderMerge:6 을 사용하고 아래와 같은 헤더를 사용할 경우 b,c 중분류의 값이 다르지만 3번째 헤더의 값이 동일해 서로 머지가 되는 게 기본동작이고, 이 3번째 행의 머지를 조절하기 위해서는 번거로운 작업이 필요했습니다.
동일한 옵션에 Cfg.PrevHeaderMerge:1 을 추가할 경우 아래처럼 위쪽 헤더행의 머지를 기준으로 아래쪽 행이 머지되게 됩니다.
[사용 예시]options.Cfg = {    HeaderMerge: 6,    PrevHeaderMerge: 1 // 위쪽 헤더를 기준으로 머지함.};
2. SEQ 또는 RowIndex 셀 클릭 시 해당 행 선택이 되는 (Cfg) SelectingCells: 4 옵션 추가 사용의 다양성을 위해 SEQ 컬럼을 선택할 경우에는 SelectingCells:0으로 동작하고, 그 외 컬럼을 선택할 경우에는 SelectingCells:1로 동작하도록 설정할 수 있는 SelectingCells:4 옵션이 추가되었습니다.
[SelectingCells :4 설정 후 줄넘기문자열 컬럼의 2,3행 드래그로 선택]
[SelectingCells :4 설정 후 SEQ 컬럼의 2,3행을 드래그로 선택]
[사용 예시]options.Cfg = {   "SelectingCells ": 4}

Fixed1. Def에 CalcOrder를 설정하는 경우 Formula를 설정한 컬럼의 소계, 합계 계산이 이루어지지 않는 문제 수정 
2. 브라우저 배율 조절하는 경우 특정 배율에서 시트가 깨지는 문제 개선 3. down2Excel로 다운로드한 파일을 importData로 업로드 시 Bool 타입의 셀의 값이 업로드 되지 않는 문제 수정  4. 피벗 시트 객체에서 showPivotDialog 호출 시 피벗 다이얼로그가 원본 시트의 ZIndex를 상속하지 않는 문제 수정 5. 셀 값을 변경한 후 Undo로 값을 되돌린 경우, revertData 시 초기 조회 값이 아닌 Undo된 값으로 설정되는 문제 수정6. FormulaRow가 감춰진 상태에서 removeRow로 데이터 행을 제거할 경우, FormulaRow의 재계산이 이뤄지지 않는 문제 수정 7. LWC 환경에서 NoVScroll이 설정된 시트의 달력 버튼 클릭 시 스크롤이 이동하는 문제 수정 8. SearchMode: 5에서 removeAll 호출 시 InfoRow의 페이지 수가 유지되는 문제 수정 


### Ver 8.3.0.28-20250911-17

New1. saveCurrentInfo로 저장한 정보를 가져올 수 있는 (Method)getSavedCurrentInfo 추가 현재 로컬 스토리지 혹은 세션 스토리지에 saveCurrentInfo 로 저장한 시트의 컬럼 정보를 문자열로 가져올 수 있는 (Method)getSavedCurrentInfo 가 추가되었습니다.
[사용 예시]// 현재 로컬 스토리지 혹은 세션 스토리지에 저장되어 있는 시트의 컬럼 정보를 문자열로 반환sheet.getSavedCurrentInfo();
2. (Cfg) SelectMode 추가 마우스 조작으로 셀 또는 행을 선택 시에 일어나는 동작을 변경할 수 있는 (Cfg)SelectMode 가 추가되었습니다.ValueDescription0ctrl + 클릭, 마우스드래그 선택으로 포커스가 변경되지 않습니다. (default)새로운 선택 영역 중 이미 선택된 셀이 포함된 경우 기존에 선택된 셀과 새로운 영역의 선택이 해제됩니다.1ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다.shift + 클릭으로 선택 시 기존의 선택을 취소하고 새롭게 선택된 영역을 유지합니다.2ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다.shift + 클릭으로 선택 시 기존의 선택과 새롭게 선택된 영역을 유지합니다.
CSS New1. HtmlPostFix, HtmlPrefix를 Bool, Radio 타입 셀에 설정할 경우, 위치 개선 
/* 테마 별 css 파일에 추가됨 */.IBBool > * { vertical-align: middle; }



Fixed1. SearchMode: 0에서 마우스 드래그 중 데이터 영역을 벗어날 경우, 에러가 발생하던 문제 수정 
2. (Col) CanSort: 0, (Cfg) CanSort:0 인 경우 열의 헤더 클릭 시 선택된 셀이 해제되지 않도록 변경 3. 데이터 행을 드래그 하여 시트 밖에 드랍할 경우 에러가 발생하던 문제 수정  4. 필터 다이얼로그가 시트 바깥에 표시된 경우 클릭 시 필터다이얼로그가 닫히던 문제 수정  5. 시트의 외부 영역에 드랍 시 onEndDrag 이벤트에서 evtParam.type 값이 4로 보내도록 변경  6. LWC 환경에서 시트의 부모 div에 overflow-y:Scroll이 적용되어 있는 상태에서 데이터 필터다이얼로그의 '텍스트 필터'에 마우스 호버 시 텍스트 필터의 위치 계산이 잘못되던 문제 수정  7. 여러 시트가 있는 화면에서 Formula를 통해 getSelectedRows 호출 시 에러가 발생하던 문제 수정  8. 유효하지 않은 확장자를 선택하는 경우에도 onSelectFile 이벤트가 발생하도록 변경  9. onSelectFile 이벤트에서 false나 0을 리턴할 경우 업로드가 중단되도록 변경   

Excel Fixibsheet-excel.js 1.1.26-20250911-17 버전에서 해당 릴리즈가 이루어졌습니다.이번 패치 내역 사용 시 server-module ibsheet8-2.0.4.jar 가 함께 적용되어야 합니다.1. 유효하지 않은 확장자를 선택하는 경우에도 onSelectFile 이벤트가 발생하도록 개선 
2. onSelectFile 이벤트에서 false나 0 리턴 시 업로드 중단하도록 개선 
3. down.downToBrowser() 메서드 호출시 workbookPassword 자동으로 적용되도록 개선 
4. directLoadExcelStreaming에서 maxRow, maxColumn 적용되도록 개선 
5. exHead, exFoot에 Wrap:0이 적용되지 않는 현상 수정 
6. exHead, exFoot에서 TextStyle : 1을 설정했는데 TextStyle: 5가 적용되는 현상 수정  
7. StreamingCallback에서 콜백을 중단시키고 에러 코드 -18을 onImportFinish 이벤트로 넘길 수 있는 StreamingCallbackException 추가 

### Ver 8.3.0.30-20250918-15

Fixed1. InfoRow를 클릭할 경우 시트의 선택 영역이 취소 되지 않도록 변경 
2. create시 el에 css로 적용된 width, height가 있는 경우 해당 크기로 설정되도록 개선 3. addCol의 param에 Required를 설정한 경우, 추가된 열에 'Required' 표시가 바로 생기지 않는 문제 수정 4. FilterRow의 셀을 '값 있음', '값 없음'으로 필터링 할 때, 셀 편집이 불가능하게 변경 
Dialog Fixibsheet-dialog.js 1.0.44-20250918-16  버전에서 해당 패치가 이루어졌습니다.1. 업로드 다이얼로그를 통해 엑셀 파일을 불러올 때, SEQ열이 포함되는 문제 수정 해당 패치내역 적용을 위해 ibsheet-excel.js 1.1.27-20250918-16 이상 버전이 함께 적용되어야 합니다.
 Excel Fixibsheet-excel.js 1.1.27-20250918-16 버전에서 해당 릴리즈가 이루어졌습니다.1. 업로드 다이얼로그를 통해 엑셀 파일을 불러올 때, SEQ열이 포함되는 문제 수정 해당 패치내역 적용을 위해 ibsheet-dialog.js 1.0.44-20250918-16 이상 버전이 함께 적용되어야 합니다.



### Ver 8.3.0.32-20250925-15



Fixed1. (Cfg)PrevHeaderMerge 설정 후 down2Excel 시 머지가 변경되던 문제 수정 ibsheet-excel.js 1.1.28-20250925-13 이상 버전이 필요합니다.
2. 수정 이후에도 Undo 후 RevertData 시 값이 초기 조회 값으로 되돌아가지 않던 문제 수정 3. MultiRecord 시트에서 마우스 드래그로 선택하여 시트 바깥으로 마우스를 이동 시킬 경우, 스크립트 에러가 발생하는 현상 수정  4. LWC에서 Menu에 설정한 MaxHeight가 적용되지 않는 문제 수정  5. 부모 요소의 height가 명확하지 않을 때 Def의 (Row) MaxHeight가 설정되지 않는 문제 수정  6. moveCol을 norender: 1로 동작이 발생한 후 rerender 시 컬럼 헤더가 깨지는 문제 수정  7. 열 개수가 많고 병합된 헤더가 많은 시트에서 헤더 이동 시 루프가 발생하던 문제 수정  8. Formula를 사용하여 다른 시트의 getSelectedRows 호출 시, Formula가 설정된 시트의 클릭으로 선택된 열과 동일한 열이 다른 시트의 존재하지 않을 경우 getSelectedRows가 빈 배열을 리턴 하던 문제 수정   

Excel Fixibsheet-excel.js 1.1.28-20250925-13 버전에서 해당 릴리즈가 이루어졌습니다.
1. (Cfg)PrevHeaderMerge 설정한 시트 (Method)down2Excel 시 설정한 PrevHeaderMerge가 풀리는 문제 수정 


### Ver 8.3.0.33-20251002-16

New1. StyleRowConfig에 버튼을 설정할 수 있는 Layout 옵션 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정 할 수 있는 StyleRowConfig 속성에 스타일 행의 버튼 순서와 종류를 설정할 수 있는 Layout 옵션이 추가되었습니다.ValueTypeDescriptionLayoutArray스타일 행에 버튼의 순서와 종류를 설정합니다.default: ["Init", "Save", "Load", "ApplyAll"]Init: 초기화 버튼Save: 저장 버튼Load: 불러오기 버튼ApplyAll: 전체 적용 버튼InitAll: 전체 초기화 버튼
[사용 예시]options.Cfg = {  StyleRowConfig: {    Visible: true,    StorageType: 2,    ServerUrl: "./ibsheet/styleInfo.jsp",    AutoLoad: true,    Themes: {      Mono: "./assets/ibsheet/css/mono/main.css", // css 파일 내의 클래스를 key와 일치되도록 수정 필요      IBGY: "./assets/ibsheet/css/gray/main.css"    },    Layout: ["Init", "Save", "Load", "InitAll"] // 초기화, 저장, 불러오기, 전체 초기화 버튼 추가  }};
[예시 소스 실행 결과]

Locale New1. StyleRowConfig관련 메시지 추가 (ko, en, jp, cn, ja, zh에 추가) 
/* 각 locale 파일에 추가됨. 기존 있던 Lang.Text.StyleRow 내부에 추가됨 */"Lang" : {     "Text" : {          "StyleRow" : {               ... ,               "Initialize": "초기화",               "InitAll": "모든 시트 초기화",               "InitSuccess": "스타일이 초기화되었습니다.",               "InitFail": "스타일 초기화에 실패했습니다.",               "DeleteFail": "스타일 정보 삭제에 실패했습니다."          }     }}



Fixed1. SEQ열의 Color 설정된 경우, 소계/누계행 생성 시 SEQ의 Color이 변경되지 않도록 수정  
2. 행 머지가 설정되어 있고, 사이에 숨겨진 열이 있는 경우 downCols 이후 머지가 변경 되던 문제 수정 3. 필터행의 Defaults 기능 사용시 가로스크롤 표시 개선  4. StyleRowConfig 관련 개선사항 적용 clearCurrentStyle이 StyleRowConfig의 StorageType: 2인 경우, 서버에 Delete 요청을 전송하도록 수정AutoLoad의 기본값이 true로 변경초기화 동작이 저장된 스타일 정보도 삭제하도록 변경'모든 시트에 적용' 버튼 클릭 시 저장되는 정보의 id가 IB_Style로 변경ServerUrl을 요청에 따라 개별 설정이 가능하도록 수정
 

Excel Fixibsheet-excel.js 1.1.29-20251002-1618 버전에서 해당 릴리즈가 이루어졌습니다.1. Related가 설정된 Enum 열이 포함된 경우, downCombo: "CODE" 설정하여 down2Excel 시 에러가 발생하던 문제 수정 

### Ver 8.3.0.34-20251016-16

New1. Formula의 계산이 발생하기 전 시점의 onBeforeRowFormula 이벤트 추가 각 행에서 Formula가 실행되기 전 호출되는 이벤트인 onBeforeRowFormula 이벤트가 추가되었습니다.리턴을 통해 Formula의 실행을 제어할 수 있습니다.> 1(true)리턴 시 각 행에서 실행되는 실행되는 Formula 동작을 막습니다. **주의 : 해당 이벤트는 Formula 설정이 많을 수록 많이 호출되기 때문에 성능에 문제가 발생할 수 있습니다.
NameTypeDescriptionsheetobject시트 객체rowobjectFormula가 실행되는 데이터 로우 객체colstringFormula가 실행되는 열이름formulaNamestring실행되는 Formula이름eventNamestring해당 이벤트 이름(onBeforeRowFormula)
options.Events = {    onBeforeRowFormula:function(evtParam){        // 첫번째 행이 아닐 때 Formula를 실행하지 않습니다.        var sheet = evtParam.sheet;        var datas = sheet.getDataRows();        if (datas.length > 0) {            var firstRow = sheet.getFirstRow();            if (evtParam.row != firstRow) {                return true;            }        }    }}
2. Filter행의 Defaults의 최대 너비를 설정할 수 있는 (Cfg) FilterDefaultsMaxWidth 추가필터 행에서 Defaults 를 사용할 때 생성되는 필터 메뉴의 MaxWidth 를 설정합니다.생성될 필터 메뉴의 width 가 설정하는 값보다 작은 경우에는 기존의 생성될 width 가 우선되고, 설정하는 값보다 큰 경우에 필터 메뉴의 너비 축소 및 가로 스크롤이 생성됩니다.
options.Cfg = {    FilterDefaultsMaxWidth: 500};
3. getSaveJson 사용 시 null값을 ""이 아닌 null로 추출할 수 있는 (Cfg)PreserveNull 옵션 추가 사용자가 데이터를 null로 기입한 경우 시트 객체에 null 값 그대로 바인딩하고, getSaveJson으로 데이터 추출시 데이터를 ""이 아닌 null 값 그대로 추출합니다.ValueDescription0사용자가 데이터를 null로 기입해도 getSaveJson으로 데이터 추출할 때는 데이터가 ""으로 추출됨 (default)1사용자가 데이터를 null로 기입한 경우 getSaveJson으로 데이터 추출할 때 데이터가 null 값 그대로 추출됨options = {    Cfg :{        PreserveNull: 1, // 사용자가 데이터를 null로 기입한 경우 getSaveJson으로 데이터를 추출할 때 데이터가 null 값 그대로 추출됨        ...    }};

Css New1. Wrap1 클래스에 word-wrap 속성 추가 
.IBWrap1 { white-space:normal; word-wrap: break-word; } 

Fixed1. Bool 타입 셀을 대상으로 setValue 시 성능 개선 
2. 헤더 전체 체크 성능 개선  3. 열이 많은 경우에서 showFilterDialog, hideFilterDialog 동작 속도 개선  4. Def.Subsum에 CalcOrder가 설정된 경우, Attr+Formula는 동작하도록 변경 
5. DragObject: 2, 3에서 드래그 객체의 너비가 증가하던 문제 수정  6. DefaultsWidth의 이름을 DefaultsMaxWidth로 변경   7. (Cfg) SearchMode:0에서 시트의 사이즈를 늘렸다가 줄일 때 시트 높이가 정상적으로 업데이트 되지 않는 문제 수정  8. (Cfg) UseFilterDialog를 설정한 상태에서 addCol로 시 새로 추가된 열의 헤더에 필터 아이콘이 표시되지 않던 문제 수정  9. dispose 후 스타일 행의 저장, 불러오기 동작이 이루어지지 않던 문제 수정  10. 필터다이얼로그의 크기가 변경된 이후, 텍스트 필터의 위치가 비정상적으로 표시되던 문제 수정  11. (Row) Wrap: 1이 설정된 경우, Text 타입 셀에서 3333 같은 연속된 문자가 줄바꿈 되지 않는 문제 수정   

### Ver 8.3.0.35-20251023-16

New1. Group시 정렬 여부를 제어할 수 있는 (Cfg) GroupSort 옵션 추가 기본적으로 ibsheet8은 Group 시 자동으로 데이터가 정렬이 되도록 동작합니다.Group 시에 데이터를 자동으로 정렬하지 않도록 설정하는 옵션인 Cfg.GroupSort 옵션이 추가되었습니다.GroupSort:false 로 설정 시 자동 정렬이 이뤄지지 않습니다.[사용 예시]options.Cfg:{     GroupSort:false // 그룹 시 정렬하지 않음}

2. (Cfg) UseFilterDialog 설정 시 세부 사항을 설정할 수 있는 옵션 제공 UseFilterDialog 설정 시 최상단 입력 필터를 숨길지 여부, 높이, ZIndex를 조절할 수 있도록 인자 값으로 object를 설정할 수 있게 추가 되었습니다.object 설정 시 자동으로 UseFilterDialog 는 기능을 사용한다고 인식합니다.
[options 로 설정할 수 있는 값]ValueDescriptionHideInputFilter데이터 필터 다이얼로그 최상단의 입력 필터를 숨길지 여부를 설정합니다.true: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 숨깁니다.false: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 포함합니다. (default: false)Height데이터 필터 다이얼로그 아이템 영역의 높이를 조정합니다. (default: 180)ZIndex시트의 (Cfg) ZIndex와 무관하게 필터 다이얼로그의 Zindex를 조정합니다.[사용 예시]UseFilterDialog: {   HideInputFilter: true, // 데이터 필터 다이얼로그 내부의 텍스트 필터 다이얼로그 태그를 표시하지 않는 옵션   Height: 150, // 데이터 필터 다이얼로그 오픈 시점의 높이를 조정하는 옵션   ZIndex: 9999, // 데이터 필터 다이얼로그의 ZIndex 값을 조정하는 옵션},
Fixed1. showPopupSheet 시 에러가 발생하던 문제 수정 
2. LWC에서 (Col) Stack을 설정하지 않은 경우에도 일부 동작이 작동하던 문제 수정 3. File타입의 Format이 설정되지 않던 문제 수정  4. Filter행의 Enum셀의 Type을 Text로 설정 시 Defaults 동작이 열에 설정된 Enum으로 동작하도록 변경 
5. NoChanged: 1인 경우 Formula가 동작하지 않는 문제 수정  

### Ver 8.3.0.36-20251027-12

Fixed1. Filter행의 Defaults 메뉴를 통해 체크 시 '같음' 조건으로 필터행이 동작하도록 변경

### Ver 8.3.0.37-20251030-14

New1. 시트의 넓이가 css 클래스에 설정된 height나 width로 설정되는 (Cfg) UseClassStyle 추가 시트에 class 속성이 설정되어 있는 경우, 해당 class에 지정된 CSS에서 height와 width 값을 읽어 시트 생성 시 너비와 높이에 적용하는 UseClassStyle이 추가되었습니다.너비와 높이가 적용되는 우선순위는 style속성 > class속성 > 기본 값 순으로 적용됩니다.각 항목에 설정된 값이 없을 경우, 다음 순서로 우선순위가 넘어갑니다.너비는 100%, 높이는 800px를 기본값으로 갖습니다.
주의 : 이 기능은 단일 Class 정보만을 대상으로 동작합니다.[사용 예시]options.Cfg = {    UseClassStyle: true, // 시트 div에 style 정보가 없을 경우, class에 선언된 css 클래스들을 확인하여 width와 height를 시트 너비와 높이에 적용};

2. (Method)showFilterDialog에 필터다이얼로그을 설정할 수 있는 opt인자 추가 showFilterDialog에 필터 다이얼로그의 상세 설정을 설정할 수 있는 opt 인자가 추가되었습니다.지정 가능한 옵션은 상단 input 검색창 표현 여부, 높이, z-index 값이 있습니다.
[사용 예시]sheet.showFilterDialog({    opt: {      HideInputFilter: true,      Height: 50,      ZIndex: 9999,    }});
Fixed1. StyleRowConfig의 AutoLoad가 StorageType이 다르게 설정된 시트도 적용되는 문제 수정 
2. 필터다이얼로그의 텍스트 필터 다이얼로그가 마지막에 생성된 시트의 테마 클래스로 생성되는 문제 수정 3. DragObject: 2, 3으로 설정 후 드래그 시, 세로 스크롤이 갱신 되는 경우 드래그 오브젝트의 높이가 지속적으로 증가하는 문제 수정  4. onBeforeRowFormula 이벤트 제거  css Fixed1. woff2 파일로 폰트 교체 및 css 속성 수정파일 변경: NotoSansCJKkr-Regular.otf, NotoSansCJKkr-Bold.otf > NotoSansKR-Regular.woff2, NotoSansKR-Bold.woff2 /* @font-face { font-family: 'Noto Sans KR';src: url('./../../fonts/NotoSansCJKkr-Regular.otf') format('truetype'); } *//* @font-face { font-family: 'Noto Sans KR Bold';src: url('./../../fonts/NotoSansCJKkr-Bold.otf') format('truetype'); } */@font-face {font-family: 'Noto Sans KR'; src: url('./../../fonts/NotoSansKR-Regular.woff2') format('woff2');}@font-face {font-family: 'Noto Sans KR Bold'; src: url('./../../fonts/NotoSansKR-Bold.woff2') format('woff2');}

### Ver 8.3.0.38-20251106-15

New1. 터치 스크롤 여부를 제어할 수 있는 (Cfg) TouchScrolling 추가 모바일 환경에서 시트 바디 영역 터치 스크롤을 막는 (Cfg) TouchScrolling 기능 추가되었습니다. 
 디폴트는 1이며 0을 설정할 경우 모바일에서 시트 영역 터치 스크롤이 동작하지 않습니다. ValueDescription0모바일 환경에서 시트 바디 영역 터치 스크롤이 동작하지 않습니다.1모바일 환경에서 시트 바디 영역 터치 스크롤이 동작합니다. (default)[사용 예시]options = {    Cfg :{        TouchScrolling: 0, // 모바일 환경에서 시트 바디 영역 터치 스크롤을 막습니다.        ...    }};


2. rerender, renderBody가 debounce로 동작하는 (Cfg) DebounceRender 추가 rerender, renderBody 호출 시 너무 자주 호출되는 경우(루프문에서 한번 루프 돌 때마다 호출되는 등) 성능 향상을 위해 debounce를 걸어 호출하도록 설정할 수 있는 DebounceRender 속성이 추가되었습니다.
[사용 예시]options = {    Cfg :{        DebounceRender: 1, // `rerender`, `renderBody` 호출시 debounce를 걸어 호출합니다.        ...    }};
3. getSaveJson 같은 추출 api에서 Added: 1, Deleted: 1 인 행을 제외할 수 있는 (Cfg)ExcludeAddDelStatus 추가 행 추출 함수 사용 시 상태가 Added 이면서 Deleted 인 행의 추출 제외 여부를 설정할 수 있는 ExcludeAddDelStatus 속성이 추가 되었습니다.기본 동작은 0(사용 안함, 추출됨) 이고 1(사용, 추출 제외) 로 설정 시 해당 상태인 행이 추출되지 않습니다.저장 관련 데이터 추출 함수 (getSaveJson, getSaveString, doSave) 호출에 적용 됩니다.
[사용 예시]options = {  Cfg:{    ExcludeAddDelStatus: 1   // Added:1, Deleted:1 인 행 추출 제외   }};



Fixed1. MultiRecord 사용 시 firefox 브라우저에서 시트가 그려지지 않는 문제 수정  

Excel Fixibsheet-excel.js 1.1.30-20251106-15 버전에서 해당 릴리즈가 이루어졌습니다.1. loadExcel의 useXhr: 1 설정 시 개행문자('\n')가 n으로 업로드 되는 문제 수정 

### Ver 8.3.0.39-20251107-14

Fixed1. SetAllCheck 시 값만 변경되고 아이콘은 변경되지 않ㅡㄴ 현상 수정  

### Ver 8.3.0.40-20251113-17

New1. UseFilterDialog의 데이터 목록을 표시 방법을 설정하는 Mode 옵션 추가데이터 필터 목록에 포함될 데이터를 결정합니다. 디폴트는 1이며 2 를 설정할 경우 현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시합니다.ValueDescriptionMode
데이터 필터 목록에 포함될 데이터를 결정합니다.

1: 현재 보여지는 데이터를 포함하여 목록을 표시합니다. (default)
2: 현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시합니다.

[사용 예시]//헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다.options.Cfg = {    UseFilterDialog: true};
options.Cfg = {    // 필터 다이얼로그를 띄울 때, 어떻게 띄울지 변경합니다.    UseFilterDialog: {      HideInputFilter: true, // 데이터 필터 다이얼로그를 띄울 때, 다이얼로 최상단의 입력 필터를 띄우지 않습니다.      Height: 150, // 데이터 필터 다이얼로그를 띄울 때, 아이템 영역의 높이를 150px로 조정합니다.      ZIndex: 1000, // 필터 다이얼로그의 `ZIndex`를 1000으로 설정합니다.      Mode: 2 //현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시    },};Fixed1. (Cfg) PreserveNull 설정 시 addRow로 추가된 행의 데이터가 빈 경우 getSaveJson에서 null로 추출되도록 수정
2. rerender 시 컬럼 숨김과 관련된 스타일 정보도 갱신 되도록 변경
3. Salesforce 어플리케이션에서 시트 호환성 개선
4. SearchMode: 2에서 downCols 시 병합 계산이 잘못되던 문제 수정
5. (Cfg) NoRenderHidden을 설정한 경우, setCurrentInfo를 통해서도 반영되도록 수정 





### Ver 8.3.0.41-20251114-13

Fixed1. 필터행 입력 시 값 변경 여부 상관없이 필터링이 동작하도록 수정 


### Ver 8.3.0.42-20251120-16

New1. 새로운 행을 추가하지 않고 그룹 행에 소계를 표시하는 (Cfg) UseGroupSubTotal: 2 기능 추가 기존에는 UseGroupSubTotal:1 속성만 제공하여 소계행이 그룹행 이외에 따로 생성되었습니다.[UseGroupSubTotal:1 사용]
소계행을 따로 만들고 싶지 않고, 그룹행에 함께 표시하고자 할 때 UseGroupSubTotal:2 를 사용할 수 있습니다.[UseGroupSubTotal:2 사용]
[사용 예시]options.Cfg = {    UseGroupSubTotal:2 // 그룹행에 소계를 함께 표시};
optons.Col =[     ...    {"Header": "추천수","Name": "sRcmn","Type": "Int","Format": "#,###","MinWidth": 140,"Width": 140          ,GroupSubTotal: { Type: "Sum", Format: "#,###", TextColor: "#FFB2F5" }     },     ...];
2. 셀 단위로 설정할 수 있는 (Cell) SpinnerVisible, (Cell) SpinnerMax, (Cell) SpinnerMin, (Cell) SpinnerStep 옵션 추가 Type:Int, Float 인 컬럼에 적용 가능한 (Col)Spinner 관련 속성들을 Cell 개별적으로 설정할 수 있도록 속성이 추가되었습니다.
[사용 예시]var data = [     {"aa":123, "bb":222, "bbSpinnerVisible":1},     .....];
Fixed1. InfoRowConfig의 Paging2를 사용할 때, setFixedLeft 호출 시 시트 랜더링이 적게 발생하도록 수정 
2. 시트의 컨테이너 높이가 헤더 행을 전부 표시하지 못할 정도로 작을 경우, 컨테이너의 높이가 최소 헤더 행의 높이로 설정되도록 변경 3. UseFilterDialog의 필터 다이얼로그가 몇몇 테마에서 정상적으로 표시되지 않는 문제 수정   css Fixed1. 일부 테마의 UseFilterDialog, UseButton 관련 스타일 수정 IBGR, IBMR의 필터다이얼로그 체크박스 이미지 경로 수정IBGR, IBMR, IBMT, IBSP에 맞게 'ToolButtonUseButton' 클래스 prefix 수정수정된 테마는 아래 주석을 참고해주시기 바랍니다./* 필터다이얼로그 체크박스 이미지 경로 수정 (`IBGR`, `IBMR` 수정) */.IBGRDataFilterDialogSideCheck1{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxwYXRoIGZpbGw9IiNDMUMxQzEiIGQ9Ik0yNzAgMGgtMjIwYy0yNy41IDAtNTAgMjIuNS01MCA1MHYyMjBjMCAyNy41IDIyLjUgNTAgNTAgNTBoMjIwYzI3LjUgMCA1MC0yMi41IDUwLTUwdi0yMjBjMC0yNy41LTIyLjUtNTAtNTAtNTB6bTI2IDI3MGMwIDE0LjMzNy0xMS42NjMgMjYtMjYgMjZoLTIyMGMtMTQuMzM2IDAtMjYtMTEuNjYzLTI2LTI2di0yMjBjMC0xNC4zMzYgMTEuNjY0LTI2IDI2LTI2aDIyMGMxNC4zMzcgMCAyNiAxMS42NjQgMjYgMjZ2MjIweiIvPjxwYXRoIHN0cm9rZT0iIzhCOEZDNiIgc3Ryb2tlLXdpZHRoPSI0MCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIiBkPSJNMjQzLjUxNiAxMTguMjQxbC04My41MTYgODMuNTE3LTgzLjUxNi04My41MTciLz48L3N2Zz4=);background-repeat:no-repeat;background-position-x:right;background-position-y:center;width:16px;height:16px;min-width:16px}.IBGRDataFilterDialogSideCheck0{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxwYXRoIGZpbGw9IiNDMUMxQzEiIGQ9Ik0yNzAgMGgtMjIwYy0yNy41IDAtNTAgMjIuNS01MCA1MHYyMjBjMCAyNy41IDIyLjUgNTAgNTAgNTBoMjIwYzI3LjUgMCA1MC0yMi41IDUwLTUwdi0yMjBjMC0yNy41LTIyLjUtNTAtNTAtNTB6bTI2IDI3MGMwIDE0LjMzNy0xMS42NjMgMjYtMjYgMjZoLTIyMGMtMTQuMzM2IDAtMjYtMTEuNjYzLTI2LTI2di0yMjBjMC0xNC4zMzYgMTEuNjY0LTI2IDI2LTI2aDIyMGMxNC4zMzcgMCAyNiAxMS42NjQgMjYgMjZ2MjIweiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-position-x:right;background-position-y:center;width:16px;height:16px;min-width:16px}
/* ToolButtonUseButton의 클래스의 prefix를 테마에 맞게 변경 (`IBGR`, `IBMR`, `IBMT`, `IBSP` 수정) */.IBGRAlignRight>button.IBGRToolButtonUseButton { float:right; }.IBGRAlignLeft>button.IBGRToolButtonUseButton { float:left; }

### Ver 8.3.0.43-20251127-14

New1. MaxSort 이상 정렬 시, 가장 이전의 정렬이 취소되면서 정렬의 우선 순위는 유지되는 (Cfg) HeaderSortMode: 4 추가 (Cfg)HeaderSortMode: 0(default)은 클릭하여 순서대로 대분류/중분류/소분류가 되며,MaxSort 이상 정렬 시도 시 정렬 시도를 무시했습니다.
사용의 다양성을 위해 HeaderSortMode:0 과 동일하게 클릭 순서대로 대분류/중분류/소분류가 되지만,MaxSort 이상 정렬 시도 시 가장 이전의 정렬을 취소시키고 우선순위를 유지하는 옵션인 HeaderSortMode:4 가 추가되었습니다.
[동작 예시]아래와 같은 상황의 시트에서 "실수" 컬럼을 클릭 시
"콤보" 컬럼의 sort가 취소되고 "실수" 컬럼이 3순위 sort 컬럼이 됨

[사용 예시]options.Cfg = {    HeaderSortMode :4};
Fixed1. exportData의 allTypeToText를 사용하여 파일 다운로드 시 EmptyValue가 설정되지 않은 Date 타입의 데이터 Format이 비정상적인 문제 수정
2. Filter행에서 0과 빈 문자열("")을 구분하지 못하는 문제 수정 3. Filter행의 Button 셀의 값 입력 시 (Col) ButtonText가 변경되는 문제 수정4. Menu가 시트 바깥에 위치할 때, 클릭 시 Menu가 닫히는 문제 수정5. (Cfg) DebounceRender 설정 시 rerender의 일부 동작이 발생하지 않던 문제 수정6. SpinnerStep, SpinnerMax, SpinnerMin이 소수인 경우, Int 열에서 반올림 되어 설정 되도록 변경7. Filter행의 Float셀에서 범위 값을 입력할 때, 소수점이 한번만 입력되는 문제 수정


### Ver 8.3.0.44-20251128-16

Fixed1. create 이후 시트의 랜더링이 여러번 발생하는 경우 불필요한 높이 조정이 발생하는 문제 수정


### Ver 8.3.0.45-20251204-15

New1. loadExcel로 엑셀 파일 업로드 시 SEQ 포함 여부를 결정할 수 있는 skipSEQ 인자 추가 해당 인자 사용을 위해 servermodule: 2.0.13, excel: 1.1.31-20251204-15 이상 버전이 필요합니다.loadExcel 시 mode:NoHeader,HeaderSkip 의 경우 원치 않는 엑셀의 SEQ 컬럼이 업로드 되어 한 칸씩 밀리는 상황이 있습니다.사용의 다양성을 제공하고자, loadExcel 인자로 엑셀의 SEQ를 포함하여 업로드할 지 여부를 결정할 수 있는 skipSEQ 인자가 추가되었습니다.
[사용 예시]sheet.loadExcel({     mode:"HeaderSkip",     skipSEQ:true // 엑셀의 SEQ 컬럼은 업로드하지 않는다.})
2. setRowValue 시 시트 랜더링 여부를 선택 할 수 있는 render 인자 추가, 시트 계산 여부를 선택 할 수 있는 noCalc 인자 추가 행 단위별 데이터를 설정하는 setRowValue 의 경우 셀 단위 데이터를 설정하는 setValue 와는 다르게 렌더링 여부와 시트 계산 여부를 지정할 수 없었습니다.데이터 설정 시 동작의 일관성을 유지하기 위해 setRowValue 에 렌더링 여부와 시트 계산 여부를 컨트롤 할 수 있는 render, noCalc 인자가 추가되었습니다.해당 인자를 false 로 사용 시에는 rerender() 와 calculate() 를 호출하여 수동으로 해당 작업을 해야합니다.
[사용 예시] 
var row = sheet.getRowById("AR5"); // ID가 AR5인 행var data = sheet.getRowValue(row); var targetRow = sheet.getRowById("AR1"); sheet.setRowValue({     row : targetRow,      data : data,     render : false, // 호출 후 즉시 반영하지 않음     noCalc : false // 호출 후 즉시 포뮬러 계산하지 않음}); 
sheet.rerender(); // 시트 렌더링sheet.calculate(); // 시트 포뮬러 계산



Fixed1. 시트가 그려질 공간이 부족할 때, 최소한의 높이로 그려주도록 수정했던 동작 제거 
2. 브라우저 배율이 변할 때 onRenderFinish가 발생하지 않던 문제 수정 3. setLocale 시 시트가 지닌 메시지 정보가 이전과 달라지는 문제 수정 4. fitColWidth 시 새롭게 추가된 열이나, 숨김 여부가 변경된 열이 있는 경우 시트가 사라지던 문제 수정 Common Fixibsheet-common.js 1.1.28-20251204-16버전에서 해당 릴리즈가 이루어졌습니다.1. 데이터 셀의 DelCheck 를 체크할 경우 행의 랜더링이 발생하도록 변경 

Dialog Fixibsheet-dialog.js 1.0.45-20251204-15  버전에서 해당 패치가 이루어졌습니다.1. 업로드 다이얼로그 사용 시 SEQ를 제외하지 않도록 변경 
 Excel Fixibsheet-excel.js 1.1.31-20251204-15버전에서 해당 릴리즈가 이루어졌습니다.1. loadExcel로 엑셀 파일 업로드 시 SEQ 포함 여부를 결정할 수 있는 skipSEQ 인자 추가  core: 8.3.0.45-20251204-15, servermodule: 2.0.13 이상 버전이 필요합니다.


ServerModule NewServerModule 2.0.13 이상 버전이 필요합니다.1. 엑셀 데이터에 &#39;가 있을 때 업로드가 제대로 이뤄지지 않는 현상 수정 
2. 한셀로 만든 xlsx 파일 업로드시 onImportFinish 이벤트에서 -19 에러 확인할 수 있도록 처리 
3. loadExcel 호출 시 skipSEQ 인자에 따라 SEQ 건너뛸지 여부 체크하도록 처리 




### Ver 8.3.0.46-20251211-16

Fixed1. getShownCols로 설정하지 않은 SEQ 컬럼이 포함되는 문제 수정 
2. onSuggest 이벤트에 비동기 지원 3. solid 행에 Type: "Bool" 설정시 시트 그려지지 않고 스크립트 에러 발생하는 문제 수정 4. 시트가 그려질 공간이 부족할 경우, '시트 공간이 부족합니다.' 메시지가 표시되도록 변경 
5. setValue, setRowValue의 noCalc인자를 calc로 변경 기존 재계산 여부를 결정하는 noCalc 인자는 "재계산을 하지 않겠다" -> noCalc:true 로 동작했습니다.직관적으로 재계산 여부를 확인할 수 있도록 calc 인자로 명칭이 바뀌었습니다.변경된 명칭에 따라 재계산을 하지 않을 경우 calc:false 로 설정해주셔야 합니다.또한 해당 인자의 default 값이 변경되었습니다: 0 -> 1 
6. 필터행의 Date 셀에서 Defaults를 통해 null, 빈 값이 구분되지 않던 문제 수정 
ServerModule NewServerModule 2.0.14 이상 버전이 필요합니다.1. POI를 사용하지 않는 방식으로 수식이 포함된 한셀 XLSX 파일 업로드시 정상적으로 업로드가 이뤄지지 않는 현상 수정 





## IBSheet8의 추가된 신규기능을 확인할 수 있습니다.

### 2023년 신규기능

Ver 8.0.0.29-20230105-09 
New- (Method) exportData시 Font 설정 기능 추가excelFontFamily 속성 추가

### 2023년 1분기 신규기능(1월~3월)

2023년 1분기 신규기능(Ver 8.0.0.29~8.1.0.14)


Ver 8.0.0.29-20230105-09 - (Method) exportData시 Font 설정 기능 추가excelFontFamily 속성 추가Ver 8.1.0.4-20230202-13- 년도 달력 추가  사용방법 : "Type" : "Date", "Format" : "yyyy", "DataFormat" : "yyyy", "EditFormat" : "yyyy"
Ver 8.1.0.6-20230216-12
- (Col) TimePicker, (Method) showTimePicker 기능 추가시분초("Format" :"HHmmss"), 시분("Format" :"HHmm")  컬럼에 시계 아이콘이 표시main.css(.IBTimePicker로 시작하는 css 추가), ko.js(TimePicker 부분 추가) 파일 같이 업그레이드 필요- (Col) TimePicker :1, 분과 초의 간격 설정 하는 기능 추가(Col) Interval 추가- (Cfg) SelectionSummary 외부에 표시 하는 기능 추가(Method) setSelectionSummaryInfoElement , (Method) getSelectionSummaryInfoElement 추가- (Event)onImportFinish 에서 엑셀로드 취소기능 추가 return ture 시 엑셀 로드 취소된다.
Ver 8.1.0.8-20230223-13-  PivotSheet와 원본시트의 Cfg를 다르게 설정 할 수 있는 기능 추가(Cfg) PivotCfg 추가원본시트의 Cfg 영역에 PivotCfg를 설정하면 된다.
```javascript
Cfg: {  PivotCfg: {    Alternate: 0  }},Def: {  PivotRow: {    // 가로행 기준으로 생성되는 컬럼의 색상 설정 가능 (default: "245,245,245")    Color: ''",  //색상을 적용하지 않는다.    // 세로행 기준으로 생성되는 컬럼의 색상 설정 가능 (default: "245,255,255")    PivotDataColor: ''" //색상을 적용하지 않는다.  }}
```
[원본시트 이미지][PivotSheet 이미지] - 짝수홀수 배경색 지정하지 않음, 데이터 행을 흰색으로 설정Ver 8.1.0.9-20230310-12
- (Cfg) SearchMode:4 , 페이지 이동시 항상 조회 하는 기능 추가(cfg) AlwaysSearchPage 추가- (Method) showMenu 호출시 Cell Data와 동일한 값 선택 기능 추가(Method) ShowMenu에 cursor 추가
Ver 8.1.0.10-20230316-12- (Event) onStartDrag return -1 추가Ver 8.1.0.13-20230323-12 - (Col) "TimePicker" : 1, (Col) Interval 설정 후 빈값 클릭시 현재시간이 아닌 (Col) Interval에 설정한 단위로 보여주는 기능 추가(Col) Interval.Init 추가-  PivotSheet에서 Data Sort 하지 않는 기능 추가(Cfg) NoPivotSort 추가
Ver 8.1.0.14-20230330-10- (Method) getChildRows, 특정 레벨까지만 추출하는 기능 추가(Method) getChildRows, maxLevel 인자값 추가- (Event) onStartDrag 드래그시 커서에 표시되는 내용을 다른 값으로 바꾸는 기능 추가(Event) 리턴값을 String으로 설정하면 해당 문자열 표시되는 기능[수정전][수정후] return "가나다"


### 2023년 2분기 신규기능(4월~6월)

2023년 2분기 신규기능(Ver 8.1.0.15~8.1.0.26)

Ver 8.1.0.16-20230414-11- (Method) setFixedCols, setFixedLeft, setFixedRight 동기로 동작 기능 추가각 함수에 sync 추가
Ver 8.1.0.19-20230512-08- (Cfg) AutoSelectYm: 2 동작 추가확인버튼 유지하고 값 선택시 바로 셀에 값 입력- 엑셀 다운로드시 셀 값을 다른 값으로 설정하는 기능 추가(Cell) ExportValue 추가
Ver 8.1.0.20-20230518-12- (Method) importData 에 File 객체나 BLOB 데이터를 직접 넣을 수 있는 기능 추가file 인자 추가
Ver 8.1.0.23-20230608-18- 데이터행 하단 고정 기능 추가(Method) setFixedBottom 추가됨- (Method) getDataRows currentPage 인자 추가(Cfg) SearchMode : 4, (Cfg) AlwaysSearchPage : 1 일때 필요한 기능Ver 8.1.0.24-20230615-17- (Method) exportData 여러개의 시트를 하나의 엑셀 파일로 다운로드 하는 기능 추가(Method) exportDataBuffer 추가
Ver 8.1.0.25-20230622-15- 행단위 데이터 설정 기능 추가(Method) setRowValue 추가- (Cfg) AutoCalendar, (Col) TimePicker 연동 기능 추가
Ver 8.1.0.26-20230629-13- 기존보다 큰 달력 css 추가main.css 업데이트 필요 - 하단 내용 주석 해제ibsheet.js 의 변경 사항이 아니라 main.css 파일에 아래 내용 추가하면 된다./*.IBPickCell{width:43px;height:34px;font-size:initial;}.IBPick2Row{height:33.8px;font-size:initial;}.IBPick2CellY{width:65px;}.IBPick2CellM{width:83px;}*/[기존][사이즈가 큰 달력]



### 2023년 3분기 신규기능(7월~9월)

2023년 3분기 신규기능(Ver 8.1.0.27~8.1.0.43)


Ver 8.1.0.27-20230706-14- (Event) onReadCanEditDate return 형식 추가return [false,"class명"] - css class를 설정 할 수 있는 인자 추가ex) <style>.bgColor{ background-color: #baebbd; }</style><script> onReadCanEditDate:function (evtParam) {      if (evtParam.col === 'DUE_DATE') {        var row = evtParam.row;        var startDate = new Date(parseInt(row.ORDER_DATE, 10));        var endDate = new Date(parseInt(row.DTDY31, 10));        // 수주일과 검수일 사이만 선택 가능함.        if (evtParam.date < startDate || evtParam.date > endDate) {          return [false,"bgColor"]; //취소선 대신에 bgColor class의 내용 반영        }       return true      }    }</script>[수정전 달력 - 선택할 수 없는 날짜 취소선으로 처리][수정후 달력  - 선택할 수 없는 날짜 배경색으로 처리 ]- (Cfg) GroupFormat 예약어 추가{%vc} 감춰진 행을 제외하고 행 갯수 표시- 필터 행의 필터옵션에 값있음, 값없음 추가main.css 업데이트 필요 - 아래 class 추가 .IBFilter14Left,.IBFilter14Right,.IBFilter14Menu .IBFilter15Left,.IBFilter15Right,.IBFilter15Menu메세지 파일 업데이트 필요 - ko.js, cn.js 등 "MenuFilter": {      "F0": "사용안함",      "F1": "같음",      "F2": "같지 않음",      "F3": "작음",      "F4": "같거나 작음",      "F5": "큼",      "F6": "같거나 큼",      "F7": "단어로 시작함",      "F8": "단어로 시작하지 않음",      "F9": "단어로 끝남",      "F10": "단어로 끝나지 않음",      "F11": "포함함",      "F12": "포함하지 않음",      "F13": "상위 10",      "F14": "값 있음", //추가      "F15": "값 없음" //추가    }값있음 : 값이 있는 데이터를 필터링 함값없음 : 빈 데이터를 필터링 함
Ver 8.1.0.28-20230706-16- 조회, 저장 요청에 credential 정보 전송하는 기능 추가(Cfg) WithCredentials 추가
Ver 8.1.0.30-20230711-16- (Method) exportData시 Sheet 데이터의 상단/하단에 값 설정하는 기능 추가exHead, exFoot 속성 추가 var param = {          sheetDesign: 1,          merge: 1,          fileName: document.getElementById('filename').value + '.xlsx'        };        param["exHead"] = [ //시트 데이터 상단 설정          { // 첫번째 행            Height: 30,            Cells:[              {                Type:"Img",                 Value:"|/ibsheet8_sample/assets/imgs/logo.png|78|28"              },              {},{},{},{},{},{},{}, //7칸 빈셀              {                Type:"Text",                Value:"(취급주의)대외비",                TextColor:"#FF0000",                Wrap: 0,                TextSize: 14              }            ]          },           { // 두번째 행            Height: 40,            Cells:[              {}, //첫칸 빈셀              {                Type:"Text",                Align: "Center",                Value: "202X년 근무 외 수당 청구 내역",                Color:"#DEDEDE",                TextSize: 45,                TextStyle: 1,                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF",                BorderLeft:"2 dashed #0000FF",                ColSpan: 8              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF"              },              {                BorderTop:"2 dashed #0000FF",                BorderBottom:"2 dashed #0000FF",                BorderRight:"2 dashed #0000FF"              }            ]          },          {}, // 세번째 행          {// 네번째 행            Cells:[              {                Value:"부서",                Align:"Right",                Color:"#DEDEDE",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },{                ColSpan: 3,                Value:"총무부",                Align:"Left",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222"              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderRight:"1 solid #222222"              }            ]          },          {// 다섯번째 행            Cells:[              {                Value:"기간",                Align:"Right",                Color:"#DEDEDE",                BorderTop:"1 solid #222222",                BorderRight:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                ColSpan: 3,                Value:"202X/01/01 ~ 202X/04/01",                Align:"Left",                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderLeft:"1 solid #222222",              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222"              },              {                BorderTop:"1 solid #222222",                BorderBottom:"1 solid #222222",                BorderRight:"1 solid #222222"              }            ]          }        ];        param["exFoot"] = [ //시트 데이터 하단 설정           {},  //시트 데이터 하단 첫번째 행          { //시트 데이터 하단 두번째 행             Height:30,             Cells:[              {                Value: "출력: 2023-06-23 김XX",                Align: "Left",                Wrap: 0              }            ]          }        ];sheet.exportData(param);[다운로드 받은 엑셀 내용]
Ver 8.1.0.33-20230721-16- Excel load 시 workSheetName에 설정한 이름이 없는 경우 load 취소 기능 추가(Method) loadExcel, (Method) importData workSheetNameStrict 추가ibsheet-excel.js : 1.1.11, LoadExcel.jsp, jar : 1.0.12-20230720-22  적용 필요Ver 8.1.0.34-20230727-19- (Col) Name에 설정하지 않은 데이터 추출 하는 기능 추가[Cols 설정]"Cols": [    {"Header": ["신청인","신청인"],"Type": "Text","MinWidth": 80,"Name": "sName","ColMerge": 1}][조회데이터]{ Data: [    {"sName" : "홍길동", sSabeon:"2001010105"},    {"sName" : "임꺽정", sSabeon:"2001050105"}]sSabeon 추출하는 기능 (Method) getRowValue, (Method) getSaveString, (Method) getSaveJson, (Method) doSave saveExtraAttr 인자 추가됨
Ver 8.1.0.36-20230810-14- 조회된 데이터가 없습니다. 시트의 가운데 표시 기능 추가(Cfg) NoDataMiddle:1 설정 추가 main.css 수정 필요.IBNoDataRow>table { height: 100%;} //추가[추가전][추가후]
Ver 8.1.0.38-20230824-17- (Method) deleteRow visible 인자 적용 : 삭제 행을 화면에 보여줄지 여부- (Method) getCol, 설정하지 않은 SEQ컬럼 제외하여 추출하는 기능 추가[Cols 설정]var opt = {        //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)        Cols:[            {Header: {Value: "이름"}, Name: "sa_nm", Type: "Text"},            {Header: {Value: "사원번호" }, Name: "sa_id", Type: "Text", Align: "center"},            {Header: {Value: "부서"}, Name: "sa_dept", Type: "Enum"             , Enum: "|경영지원|총무|인사|설계|시공1|시공2", EnumKeys: "|01|02|03|04|05|06"},            {Header: {Value: "직급"}, Name: "sa_position", Type: "Enum"            , Enum: "|대표|상무|이사|부장|차장|과장|대리|사원", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"}        ]    };    //시트객체 생성IBSheet.create({    id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt // 생성될 시트의 속성});[수정전] sheet.getCols() : [ "SEQ", "sa_nm", "sa_id", "sa_dept", "sa_position" ] 리턴[수정후] sheet.getCols({seq:1}) : [  "sa_nm", "sa_id", "sa_dept", "sa_position" ] 리턴
Ver 8.1.0.41-20230914-14-  전체 컬럼의 너비 조절하는 함수 추가(Method) fitColWidth 추가- (Method) doSearchPaging 속성 추가 pageLengthParam 속성 추가PageLength의 갯수를 서버로 전달 할 수 있는 pageLengthParam 추가[추가전][추가후]- (Method) exportData, down2Excel sheetDesign 옵션 추가sheetDesign : 4 번 추가, 시트의 헤더만 디자인 적용(Method) down2Excel :  ibsheet-excel.js(1.0.19-20231012-19), jar(1.1.16.jar) 업그레이드 필요- (Cfg) UsePivot : 1 설정된 시트에서, Pivot Sheet 생성 완료 이벤트 추가(Event) onAfterPivot  추가





### 2023년 4분기 신규기능(10월~12월)

2023년 4분기 신규기능(Ver 8.1.0.44~8.1.0.61)

Ver 8.1.0.45-20231012-19- (Static) create 동기 옵션 추가sync  추가IBSheet.create({    id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt, // 생성될 시트의 속성    data: dataArr, // 생성될 시트의 정적데이터    sync: 1 // 동기로 시트 생성});- (Method) focus 호출시 브라우저 스크롤 이동하지 않도록 속성 추가(Cfg) ScrollFreeze 추가
Ver 8.1.0.47-20231020-14-  (Cfg) PivotFunc, (Method) makePivotTable에  Max, Min 옵션 추가ibsheet-dialog.js : (Method) showPivotDialog의 showType에 Max/Min 추가 메세지 파일(ko.js, en.js 등) 업데이트 필요[수정전] ibsheet-dialog.js  [수정후] ibsheet-dialog.js  Lang.Text 에 추가(메세지 파일)"PivotMax": "최대값","PivotMin": "최소값","PivotSum": "합계","PivotCount": "개수"Ver 8.1.0.48-20231026-18 - 시트 id를 랜덤하게 생성하는 속성 추가(Cfg) UseRandomId 속성 추가create 함수 호출시 id를 설정하지 않았을 경우IBSheet.create({    //id: "sheet", // 생성할 시트의 id    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id    options: opt, // 생성될 시트의 속성    data: dataArr // 생성될 시트의 정적데이터});[수정전] Table0, Table1과 같이 시트 ID 부여[수정후] sheet+6개숫자 랜덤하게 시트 ID 부여(ex : sheet254819)
Ver 8.1.0.49-20231102-18- (Method) doSearchPaging ajax 통신 전에 호출되는 인자 추가beforeSend 인자 추가, onSearchStart --> beforeSend   순으로 동작- (Col) FormulaRow, 소계, 누계행에서 평균/건수 계산시 0 또는 빈값 포함 여부 설정하는 속성 추가(Col) ExcludeEmpty 추가Ver 8.1.0.51-20231109-15- (Method) doPrint 시 첫 페이지만 시트의 헤더를 출력하는 기능 추가firstPrintHead 인자 추가Ver 8.1.0.52-20231116-16- (Cfg) SearchMode : 0 , 모바일에서 스크롤시 이동할 행 갯수 설정 기능 추가(Cfg) TouchScrollCount 추가Ver 8.1.0.53-20231123-15- 필터행에서 예약어 기능을 사용하지 않도록 하는 기능 추가(Cfg) DisableKeyWord 추가- 데이터 Edit 후 Tab / Shift + Tab 키를 눌렀을 때 동작을 설정하는 기능 추가(Cfg) EditTabMode 추가
Ver 8.1.0.54-20231130-15- (Cfg)SearchMode: 5 (ServerPaging2) 추가5ServerPaging2사용 방식은 ServerPaging과 동일하지만, 페이지 이동시 항상 서버를 호출하여 데이터를 조회하는 표시 모드입니다.
실시간으로 변경되는 데이터를 조회해야 할 때 사용하면 변경된 데이터를 조회할 수 있습니다.
해당 모드에서 시트는 현재 조회한 페이지의 Row 객체와 데이터만 가지고 있습니다.
(Method)updatePageLength 를 통해 동적으로 페이지 행의 개수를 변경하실 수 있습니다.Ver 8.1.0.61-20231228-15- (Method)loadSearchData에 조회 관련 이벤트를 발생시키지 않게 하는 ignoreEvent 인자 추가.sheet.loadSearchData({data : DATA,ignoreEvent : true})> loadSearchData 호출 시 조회 관련 이벤트 ( onBeforeDataLoad, onDataLoad, onReceiveData, onSearchFinish) 발생 X


### 2024년 1분기 신규기능(1월~3월)

2024년 1분기 신규기능(Ver 8.1.0.62~8.1.0.75)


Ver 8.1.0.63-20240111-15
- 정렬 이후 포커스와 스크롤을 어떻게 처리할지 동작을 설정하는 (Cfg) HighlightAfterSort 옵션 추가
3행 사원수 컬럼에 포커스를 둔 채로 사원수 클릭해서 정렬
HighlightAfterSort : 0포커스 클리어 및 세로스크롤 위치를 유지합니다.포커스가 없어지고, 세로 스크롤의 위치는 고정(위 사진은 스크롤이 맨 위로 올라간 채로 정렬했기 때문에 맨 위에 고정되어있는 것임)
HighlightAfterSort : 1정렬 동작 이전 포커스 행 유지 및 해당 셀의 위치로 세로 스크롤이 이동합니다. (default)포스코의 사원수 셀에 포커스 유지, 만일 포커스 된 셀이 밑에 있으면 세로 스크롤이 밑으로 이동
HighlightAfterSort : 2정렬 동작 이전 포커스 행 유지 및 세로스크롤 위치를 최상단으로 초기화합니다.포스코의 사원 수 셀에 포커스가 유지되어 있지만, 세로 스크롤은 최상단으로 이동 HighlightAfterSort : 3정렬 동작 이후에도 항상 첫번째 행에 포커스 이동 및 세로 스크롤의 위치를 해당 셀 위치로 이동합니다.첫번째 행인 한국외환은행 사원수 셀에 포커스가 이동하고, 그에 맞춰서 스크롤의 위치 이동

HighlightAfterSort : 4포커스 행 위치에 포커스 유지 및 세로 스크롤 위치 유지정렬 전 포커스를 줬던 6행의 사원수 셀에 그대로 포커스 및 스크롤 유지


Ver 8.1.0.73-20240321-15
- 붙여넣기가 완전히 끝났을 때 호출되는 onAfterPaste 이벤트 추가시트 내에서 ctrl+v 를 통해 붙여넣기가 동작된 이후에 발생합니다.





### 2024년 2분기 신규기능(4월~6월)

2024년 2분기 신규기능(Ver 8.1.0.76~8.1.0.92)


Ver 8.1.0.76-20240404-16 
- 컬럼의 필터행에 버튼이 생기지 않게 하는 (Col)NoButtonInFilter : 1 옵션 추가
[NoButtonInFilter : 0 적용]
[NoButtonInFilter : 1 적용]

Ver 8.1.0.78-20240411-18
- (Method)makeSubTotal 에서 소계/누계행을 SEQ 컬럼과 InfoRow 행의 개수 카운트에서 제외하는 excludeSubTotalRowCount 옵션 추가
소계행이 4건인 테이블에 SEQ 컬럼 추가,  InfoRow로 행의 개수 카운트를 추가한 시트[excludeSubTotalRowCount : 0]

[excludeSubTotalRowCount : 1]



Ver 8.1.0.84-20240509-16
- 단색 테마 추가

Ver 8.1.0.85-20240516-16
- 한글 파일(Hwpx)을 다운 받는 기능인 (Method)down2Hwpx, down2HwpxBuffer 추가사용을 위해선 ibsheet-excel.js ver 1.1.2-20240516-15 이상 파일이 include 되어야합니다.
- chart 다이얼로그를 보여주는 (Method)showChartDialog 추가시트의 선택한 영역을 차트로 시각화 할 수 있는 기능이 추가되었습니다.ibsheet-dialog.js ver 1.0.17-20240516-16과 IBChart 관련 파일이 포함되어야 사용하실 수 있습니다.


Ver 8.1.0.86-20240523-16
- 그룹 셀에 취소 버튼 추가 및 그룹 버튼의 크기 데이터 길이에 따라 생성되도록 디자인 개선사용을 위해  main.css 파일이 필요합니다.
- 파일 선택 창에서 취소/닫기 버튼 클릭 시 발생하는 onCancelFile 이벤트 추가onCancelFile : function(evtParam){
    console.log("파일 업로드를 취소 했습니다.)
}


Ver 8.1.0.87-20240530-15
- (Col) CustomFormat 을 사용하며 함수를 사용할 때 시트 객체와 컬럼명을 새로운 인자로 추가{Type: "Text", Name: "ISDNS", CustomFormat: function(v, sheet, col){
        console.log("시트객체 => " +sheet)
        console.log("컬럼명 => " +col)
}

- 행의 상태가 Added(추가) 상태일 때 편집 가능 여부를 설정하는 (Col)AddEdit, 조회/수정 상태일 때 편집 가능 여부를 설정하는 (Col)ChangeEdit 인자 추가options.Cols = [
        //addRow 등을 통해 추가된 행의 AA 컬럼은 편집 불가
    {Type : "Int" , AddEdit : 0, Name : "AA},

        // Changed 또는 조회 행의 BB 컬럼은 편집 불가
    {Type : "Int" , ChangeEdit : 0, Name : "BB},
]



Ver 8.1.0.88-20240605-15
- 편집 시 숫자 컬럼에 스피너를 표시할 수 있는 (Col)SpinnerVisible, (Col)SpinnerStep, (Col)SpinnerMax, (Col)SpinnerMin 추가Ver 8.1.0.88-20240605-15 의 main.css 도 함께 적용해야합니다.(Col)SpinnerVisible 

Type이 Int, Float인 열에서 편집 시 화살표를 표시합니다.설정 시 input의 type이 number로 생성됩니다.추가적으로 SpinnerStep, SpinnerMax, SpinnerMax 을 통해 input의 step, min, max를 설정 할 수 있습니다. 

- 드래그해서 행을 옮길 수 있는 (Col)Type : "Drag" 추가Ver 8.1.0.88-20240605-15 의 main.css 도 함께 적용해야합니다.[Type:Drag 인 컬럼 드래그]행 옮기기 가능
[Type:Drag 이외 컬럼 드래그]셀이 선택 됨
-  (Static) showCalendar 로 생성하는 달력이 (Cfg)Size 에 영향을 받지 않게 하는 IgnoreSize, StyleSize 를 (Method)showCalendar 의 calOption 인자 속성으로 추가IgnoreSizeboolean달력의 Size가 Cfg 설정의 Size와 별도로 동작 시킵니다.(해당 옵션을 true로 적용하면 Normal이 적용됩니다.)StyleSizestring달력의 Size 를 적용합니다. Size cfg 와 동일한 옵션값을 지정할 수 있습니다.


Ver 8.1.0.89-20240613-15
- (Method)showCalendar() 함수에서 주차를 선택할 때 호출되는 OnClickWeek Calendar 이벤트 추가주의 : sheet 의 이벤트가 아니라 Calendar 의 이벤트입니다.var calOption = {    Weeks: 1,    // 주차를 선택하면 호출되는 이벤트    OnClickWeek: function (year, week) {        console.log(year+"년"+week+"주차를 선택했습니다.")    }}IBSheet.showCalendar(calOptions, {    Mouse: 1});

Ver 8.1.0.91-20240620-16
- 편집 중인 데이터 값을 변경하는 setEditText(value) 메소드 추가valuestring or number필수변경하려는 문자열 혹은 숫자sheet.setEditText("안녕하세요");        // 편집 중인 데이터 값을 "안녕하세요" 로 변경



Ver 8.1.0.92-20240627-16
- 시트에 포커스나 영역 선택 시, 헤더행과 SEQ 컬럼행의 배경색이 변경되게 하는 (Cfg)SelFocusColor 속성 추가SelFocusColor:1 로 설정하면 포커스나 영역 선택 시에 헤더, SEQ 컬럼 행의 배경색이 변합니다.
[기존 영역 선택]
[SelFocusColor:1 사용 시 영역 선택]







### 2024년 3분기 신규기능(7월~9월)

2024년 3분기 신규기능(Ver 8.1.0.93~ 8.2.0.2)Ver 8.1.0.94-20240711-15- focus 함수로 현재 선택된 셀을 호출하는 경우에도 포커스 이벤트가 발생하도록 하는 (Method)focus 인자 triggerOnFocus 추가기존에는 focus 함수로 현재 선택된 셀을 호출하는 경우 false 가 리턴되면서 포커스 관련 이벤트(onBeforeFocus, onFocus)가 발생하지 않았습니다.focus 함수 호출 시, 인자로  triggerOnFocus:1 을 추가하면 focus 함수로 현재 선택된 셀에 포커스를 다시 줄 경우 true 를 리턴하면서 포커스 관련 이벤트가 발생합니다.- 필터 다이얼로그로 필터링하는 (Cfg)UseFilterDialog 옵션 추가사용을 위해서는 Ver 8.1.0.94-20240711-15 이상의 main.css, locale/언어.js 파일이 필요합니다.Ver 8.1.0.95-20240718-15- 클라이언트 모듈, 서버 모듈로 파일 다운로드 시 대기 이미지 표시 여부를 결정하는 (cfg)SuppressExportMessage 옵션 추가ibsheet-excel.js Ver 1.1.4 이상이 필요합니다.SuppressExportMessage : 1 로 설정하면 아래 다운로드 대기 이미지가 표시되지 않습니다.Ver 8.1.0.96-20240725-15- 사용자가 시트에 수행한 동작을 표시해주는 Status 바 기능 추가 InfoRowConfig 의 인자 Layout 배열에 "StatusLabel" 을 설정하면 Status바를 사용하실 수 있습니다.Cfg : {InfoRowConfig : {Layout : ["StatusLabel"]}}Ver 8.1.0.97-20240801-15- 편집 중 키보드 좌/우 방향키로 셀 이동 가능 여부를 설정하는 (Cfg)EditArrowBeavior 추가기존에는 편집 중 좌/우 방향키로 편집 중인 데이터 내부에서만 이동이 가능했습니다.EditArrowBeavior : 1 로 설정 시 좌/우 방향키로 편집 중인 데이터의 맨 끝에 도달했을 때 편집 불가인 컬럼은 건너뛰고 좌/우 셀로 이동합니다.EditArrowBeavior : 2 로 설정 시 좌/우 방향키로 편집 중인 데이터의 맨 끝에 도달했을 때 편집 불가인 컬럼은 포커스 이동 후 편집모드가 종료되면서 좌/우 셀로 이동합니다.Ver 8.1.0.98-20240808-16- (Method)findRows 의 callback 파라미터로 해당하는 데이터 Row를 배열로 반환하는 result 인자 추가sheet.SearchExpression = 'aa';     sheet.findRows({          action: "Select",          callback: function(action, result) {               console.log(result)          }     });[result 형태]Ver 8.1.0.101-20240822-14- 개별 컬럼에 필터 다이얼로그를 띄울지 결정하는 (Col)UseFilterDialog 옵션 추가기존 전체적으로 필터 다이얼로그 사용이 설정되었던 (Cfg)UseFilterDialog 와는 다르게 컬럼마다 사용여부를 지정할 수 있습니다.Ver 8.1.0.102-20240829-14- 다중 컬럼 소팅 시, 컬럼별 소팅 우선순위를 숫자로 표현하는 (Cfg)SortIconsNum 기능 추가기존에는 소팅 우선순위가 색상으로만 표현되어 간결하지만 우선순위를 한 눈에 알아보기는 힘들다는 점이 있었습니다.(Cfg)SortIconsNum : 1을 사용하면 소팅 우선순위가 아이콘 옆에 작게 표시되어 가시성이 올라갑니다.사용을 위해서는 Ver 8.1.0.102-20240829-14 이상의 main.css 파일이 필요합니다. Ver 8.2.0.1-20240912-15- 열이 이동하기 전에 발생하는 (Event)onBeforeColMove 추가열을 드래그로 다른 위치로 이동시키기 직전 호출되는 이벤트입니다.return true 시 컬럼 이동을 취소할 수 있습니다.onBeforeColMove: function(evt) {      // 열이 이동되는 위치가 SEQ 컬럼이면 열이동을 취소한다.      if (evt.toCol == "SEQ") return true;  }- 필터된 데이터를 기반으로 피벗 시트를 생성하는 (Method)doPivotFilter, doPivotFilter 로 만들어진 피벗 필터를 취소하고 다시 피벗 시트를 생성하는 (Method)clearPivotFilter 추가피벗 다이얼로그로 해당 기능을 사용하기 위해서는 ibsheet-dialog.js ver 1.0.23-20240926-15 이상이 필요합니다.기존에는 원본 시트에 필터가 되어있더라도 전체 데이터를 기준으로 피벗 시트를 생성했습니다.여전히 전체 데이터를 기준으로 피벗 시트를 생성할 경우 (Method)makePivotTable 를 사용하시면 됩니다.- 시트의 헤더에서 우클릭 시 컨텍스트 메뉴 호출 여부를 결정하는 (Cfg)UseHeaderContextMenu 옵션 추가헤더 메뉴 관련 소스는 common.js 에 존재하기 때문에 특정 페이지에서만 컨텍스트 메뉴를 사용하지 않으려면 Def.Header.Menu.Items : [] 를 선언해야 빈값으로 오버라이드 되어 비활성화 시켰습니다.해당 속성 추가 후에는 (Cfg)UseHeaderContextMenu : 0 으로 선언하면 우클릭 시에도 호출되지 않습니다.Ver 8.2.0.2-20240926-15- 트리 시트에서 부모 체크 시 자동으로 자식노드를 체크할 지 여부를 설정하는 (Cfg)TreeCheckSync 에서 일부 자식행이 체크 되었을 때 부모 체크박스에 V(체크표시)가 표시되게 하는 (Cfg)TreeCheckSync : 2 옵션 추가기존에는 모든 자식행이 체크된 것이 아니면 부모 체크박스에 ? 아이콘이 표시되었습니다.해당 아이콘의 직관적인 사용을 위해 부모 체크박스에 체크가 되도록 하는 인자를 추가하였습니다.
[기존]
[TreeCheckSync:2]

### 2024년 4분기 신규기능(10월~12월)

2024년 4분기 신규기능(Ver 8.2.0.3~ Ver 8.2.0.14)Ver 8.2.0.3-20241010-14
1. (Method)doSave, getSaveJson, getSaveString 등의 저장 함수를 호출할 때, 사용자가 저장함수에서 설정한 인자(saveMode, col, validRequired)에 따라 유효성 검사를 진행하는 (Cfg)ValidCheck 추가Cfg:{
 ValidCheck: true // 저장 함수 호출 시 유효성 검사 실행
}

2. 유효성 검사 통과 실패 시 띄울 메세지를 설정하는 (Cfg)ValidateMessage 추가Cfg:{
 ValidateMessage : "유효성 검사 실패!" // 유효성 검사 통과 실패 시 설정한 문구를 출력
}[실행 결과]

3. (Method)getRowValue 에 saveAttr 인자 추가Row 내부에 기존에 선언한 컬럼값이 아닌 다른 데이터가 있는 경우 saveAttr:"추출할데이터key값" 을 선언하면 해당 데이터도 getRowValue 에서 리턴됩니다.여러 개를 추출하고자 하는 경우 "," 를 구분자로 작성하면 됩니다.
// 현재 포커스 하고 있는 row의 값들을 가져오는데, 
// 선언한 컬럼은 아니지만 Test, abc 라는 이름의 데이터도 들고오겠다.
sheet.getRowValue({row: sheet.getFocusedRow(), saveAttr:"Test,abc"})
Ver 8.2.0.4-20241017-141. 동적으로 Foot 과 Head를 생성하는 (Method)showFixedRows 추가메소드의 인자로 Head,Foot 의 object 객체가 들어갑니다.[사용 예시]// 1. Foot 행 1개 생성var obj1 = {Kind : 'Foot', ... };sheet.showFixedRows(obj1);
// 2. Foot 행 2개, Head 행 1개 생성sheet.showFixedRows([    {        Kind:'Foot',       TextData: {          'Value' : '커스텀 Foot행1', 'TextColor': 'green', 'Span': 4      }    },    {        Kind:'Head',      TextData: {          'Value' : '커스텀 Head행', 'TextColor': 'red', 'Span': 3, 'Color': 'yellow'      }    },    {        Kind:'Foot',      Color: 'blue'    }  ]);
[예시 2번 실행 결과]
2. 동적으로 Formula를 추가하는 (Method)addFormula 추가기존에는 동적으로 Formula를 추가하는 동작(컬럼을 추가하거나 등)을 설정하는 것이 복잡하고, 가끔은 불가능했습니다.addFormula 를 사용 시 CanFormula 가 자동으로 true 로 설정되고, CalcOrder에 설정한 Formula 가 순차적으로 추가됩니다.[사용 예시]// 1. Row에 colorFormula 추가var colorFormula = function (param) {    if (param.Row && param.Row["IntData"] === 0) {        return "#FFD9FA"    }}// 데이터 행의 배경색을 조건에 따라 변경sheet.addFormula(colorFormula, "", "", "Color");
// 2. Col 에 Formula 추가var Formula = function (param) {    if (param.Row["IntData"] > 100) {        return true    } else {        return false    }}// IntData의 값에 따라 체크박스 열의 체크 변경sheet.addFormula(Formula, "", "CheckData", "", true);[예시 1 실행 결과]

Ver 8.2.0.5-20241024-13
1. (Method)exportData 에 헤더만 머지하는 onlyHeaderMerge 옵션 추가onlyHeaderMerge : 1(true) 로 설정 시, 시트의 데이터 영역의 머지를 강제로 제한하고 헤더 영역의 머지만을 엑셀에 반영합니다. 주의할 점은 merge 인자가 1로 설정되어야합니다.(Method)down2Excel 의 onlyHeaderMerge 인자와 동일한 기능을 합니다.
[사용 예시]sheet.exportData({          merge: 1,                        // 시트 머지 반영          onlyHeaderMerge: 1     // 헤더만 머지});
[onlyHeaderMerge:0]

[onlyHeaderMerge:1]

2. 신규행 추가 시 Enum 의 값이 자동적으로 세팅되는 (Cfg)AutoSelectFirstEnum 추가기존에 Enum 컬럼은 행 추가 시 값을 설정하지 않으면 빈값으로 추가되었습니다.AutoSelectFirstEnum :1 설정 시 해당 셀에 값이 없다면 첫 번째 데이터로 자동 선택됩니다.
[기존]
[AutoSelectFirstEnum : 1]

Ver 8.2.0.6-20241031-13Common.js New1. 마우스 우클릭으로 출력되는 기본 컨텍스트 메뉴에 전체 체크, 전체 체크 해제 기능 추가 ibsheet-common.js Ver 1.0.12-20241031-13 이상 버전이 필요합니다.
ibsheet.js New1. (Cfg)SearchMode:3 에서 헤더 클릭 시 시트 소팅을 진행하지 않고 백엔드로 소팅 정보를 전송하도록 하는 (Cfg)ScrollPagingServerSort 옵션 추가기존에는 sort 정보를 서버로 보내지 않고, 보여지는 화면에서 sort 가 이루어졌습니다. ScrollPagingServerSort : 1 설정 시 sort 정보를 서버로 보내, 받은 응답 데이터를 출력합니다.
자세한 과정은 아래와 같습니다.sort 정보를 담아 서버로 전송 -> sort 정보로 DB에서 쿼리 실행 -> 실행된 쿼리를 js로 보냄(재조회와 비슷한 과정)
[서버로 보내지는 파라미터]

Ver 8.2.0.7-20241107-151. 유효성 검사 실행 시, 사용자가 설정한대로 유효성 검사를 실행할 수 있는 onValidate 이벤트 추가유효성 검사 실행 시 발생하는 onValidate 이벤트가 추가되었습니다.해당 이벤트 내부에서 다른 컬럼 조건에 따라 유효성 검사를 다르게 하는 등의 작업을 할 수 있습니다.이벤트 내부에서 false 를 리턴하면 유효성 검사를 통과합니다.
[사용 예시]event: {      onValidate: function(evtParam) {           // 컬럼이 텍스트 데이터면 유효성 검사 뛰어넘기           if(evtParam.col != "TextData") return false;                  // 앞 컬럼 가져오기           var prevCol = sheet.getPrevCol(evtParam.col);           // 앞 컬럼 값이 100이 넘는다면           if(evtParam.row[prevCol] >= 100) {              // 뒷 컬럼에 유효성 검사 실패 시 뜨는 툴팁을 넣고              evtParam.row[evtParam.col + "ValidationError"] = "정수(Int)컬럼의 값이 100보다 큽니다.";              // 유효성 검사에 걸리게 하기              return true;            }      }  }

2. (Method)saveCurrentInfo 호출 시 시트 아이디를 대신하여 커스텀 아이디를 설정하는 (Cfg)StorageKeyId 기능 추가 saveCurrentInfo 메소드를 통해 시트의 정보를 저장하는 경우 현재 시트의 id를 기준으로 저장이 됩니다. 따라서 시트의 이름을 random 하게 생성하는 경우 saveCurrentInfo 자체를 사용하기가 불가능했습니다.이를 보완하기 위해 (Cfg)StorageKeyId 가 추가되었습니다.(Cfg)StorageKeyId :"원하는아이디" 를 설정하면 saveCurrentInfo 시 지정한 아이디로 저장이 됩니다.
[사용 예시]Cfg:{
...
// 스토리지에 시트id 가 아닌 StorageKeyIdTest 로 저장
StorageKeyId: "StorageKeyIdTest",
...
}, ... 
[saveCurrentInfo 로 저장 결과]
Ver 8.2.0.9-20241121-141.Type:Enum 의 표시 포맷을 지정할 수 있는 (Col)EnumFormat 추가Enum 에 표시되는 포맷을 자유롭게 지정할 수 있는 (Col)EnumFormat 이 추가되었습니다.function 으로 지정할 땐 param으로 Enum 에 현재 선택된 value 값이 들어옵니다.
[사용 예시]{       ...        Type: "Enum",        Enum: "|a|b|c",        EnumKeys: "|01|02|03",        EnumFormat: function (param) {           // ; 가 없을 땐(0~1 건 선택되었을 땐)           if (param.indexOf(";") == -1 || param == "&#160;") {               // 해당 값을 그대로 return               return param;           }           // 여러 건 선택된 경우 valArr 배열에 넣기           var valArr = param.split(";");           // 현재 선택된 개수 구함           var length = valArr.length - 1 + "";
           // 'a;b'로 여러 값이 선택된 경우, 'a 외 1건'과 같은 형식으로 표시한다.           return valArr[0] + " 외 " + length + "건";        },        Range: 1       ... }
[위 예시 실행 결과]

Ver 8.2.0.11-20241205-151.(Method)exportData 에 숨겨진 컬럼을 엑셀 숨김 처리하여 다운로드하는 hiddenColumn 인자 추가(Method)down2Excel 에는 Visible:0 인 컬럼을 엑셀 다운 시 엑셀 숨김 처리(접힘)하여 다운 받는 hiddenColumn 인자가 있습니다.exportData 에서도 동일한 기능을 사용할 수 있도록 hiddenColumn 인자를 추가했습니다.주의하실 점은 downCols 인자와 함께 사용하실 수 없습니다.
[사용 예시]sheet.exportData({
    hiddenColumn  : true
})
[위 코드 사용 예시]붉은 네모 안의 컬럼처럼 숨김 처리하여 다운로드 됩니다.


 

Ver 8.2.0.12-20241212-131.열 추가 동작이 랜더링까지 완료 된 후 호출되는 onAfterColAdd  이벤트 추가onAfterColAdd 이벤트는 시트에 새로운 열이 추가되어 렌더링 된 후 호출되는 이벤트입니다. [사용 예시]options.Events = {    onAfterColAdd:function(evtParam){        console.log(evtParam.col);    }}2. 상위 헤더가 병합된 경우 하위 헤더 열의 이동을 병합된 영역 내에서만 이동할 수 있는 (Cfg) CanColMove: 2 추가 
Ver 8.2.0.13-20241219-131. Required를 설정한 열의 필수표시를 보여주지 않는 (Cfg)RequiredPosition: None 추가 (Col)Required 를 설정하면 무조건 해당 컬럼 헤더에 필수 입력 표시(별표)가 출력되고 해당 표시를 없애기 위해서는 무조건 CSS파일을 수정해야했었습니다.
CSS 수정보다 간단하게 변경을 위해 RequiredPosition 속성에 "None" 설정을 추가해 좌,우측 외에도 CSS 파일 수정 없이 해당 표시를 없앨 수 있습니다.[사용 예시]Cfg : {    RequiredPositon: "None"}
[기존]
[RequiredPosion:"None" 적용 후]

Ver 8.2.0.14-20241226-14431. (Method)importData 를 통해 데이터를 로드할 때, 로드할 위치를 정할 수 있는 next 인자 추가기존에는 append 인자를 통해서 기존 데이터 밑에 추가할 지 말 지를 결정했습니다.(Method)loadSearchData 의 next 인자처럼 해당 인자에는 데이터 로우 객체가 들어오고,row 객체 설정 시 설정된 row 위에서부터 데이터가 append 됩니다.해당 인자 사용 시 append 인자는 무조건 true 여야 합니다.
[사용 예시]var param = {append:1, next:sheet.getFocusedRow()};sheet.importData(param);
2. Color 속성을 별도로 지정한 경우 상태 색상을 무시하고 해당 색상을 그대로 적용하는 NoColor:3 추가 [NoColor:3 편집 전 - Color 로 지정한 색상이 들어가있음]
[NoColor:3 편집 후 - 수정 상태가 되었지만 Color 지정한 색상이 들어가있음]
3. (Method)setAutoMerge 에 고정 영역의 머지를 설정하는 headMerge, footMerge, headPrevColumnMerge, footPrevColumnMerge 인자 추가각 인자의 설명은 아래와 같습니다.headMergenumber선택Head 영역의 셀들을 병합할 때 적용할 기준 (default: 0)
0 : 병합 안함
1 : 열 기준 병합
2 : 행 기준 병합
3 : 열 우선 병합
4 : 행 우선 병합
5 : 열 우선 사방 병합
6 : 행 우선 사방 병합footMergenumber선택Foot 영역의 셀들을 병합할 때 적용할 기준 (default: 0)
0 : 병합 안함
1 : 열 기준 병합
2 : 행 기준 병합
3 : 열 우선 병합
4 : 행 우선 병합
5 : 열 우선 사방 병합
6 : 행 우선 사방 병합headPrevColumnMergeboolean선택Head의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부 (default: false)footPrevColumnMergeboolean선택Foot의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부 (default: false)[사용 예시]sheet.setAutoMerge({    dataMerge:1,     headerMerge:2,    headMerge:0,     footMerge:4});4. (Method)setAutoMergeCancel 의 mode 인자에 고정 영역을 선택하는 "Head", "Foot" 옵션 추가각 옵션의 설명은 아래와 같습니다.
"Head" : Head 영역에 있는 병합 해제"Foot" : Foot 영역에 있는 병합 해제 
[사용 예시]sheet.setAutoMergeCancel( {mode:"Head"} )


### 2025년 1분기 신규기능(1월~3월)

2025년 1분기 신규기능(Ver 8.2.0.15 ~ Ver 8.2.0.26)

Ver 8.2.0.15-20250102-15
1. (Cfg) ValidCheck로 나오는 경고 메시지 이후 동작을 제어할 수 있는 Edit, Focus 옵션 추가 기존에 ValidCheck: true 로 설정 시 경고 메시지 출력 이후 무조건 해당 셀에 Focus 가 가고, Edit 상태가 됩니다.해당 속성을 boolean 이 아닌, Json 형태로 설정하면 경고 메세지 출력 이후 Focus 와 Edit 을 커스텀하여 설정 할 수 있게 되었습니다.[사용 예시]Cfg.ValidCheck: {      Focus : 1,                // 경고 메세지 출력 이후 해당 셀에 Focus 를 주기      Edit : 0                      // 경고 메세지 출력 이후 해당 셀은 Edit 상태로 들어가지 않기}2. makePivotTable에 평균 계산 기능 추가 Ver 8.2.0.15-20250102-15 에 맞는 locale 파일이 필요합니다.기존에는 피벗 테이블을 만들 때 Sum, Count, Max, Min 으로만 컬럼을 계산 할 수 있었습니다.여기에 추가해 Type: "Avg" 를 추가하여 평균값을 계산할 수 있도록 수정하였습니다.

Ver 8.2.0.16-20250109-13
1. importData로 'xls'파일을 선택 시 서버모듈 호출 여부를 설정하는 (Cfg) XlsImportMode 추가 ibsheet-excel.js 1.1.9-20250109-13 이상 버전이 필요합니다.
클라이언트 모듈인 importData 로 xls 파일을 업로드 시도하면"xls 파일 형식은 지원하지 않습니다." 라는 경고창이 출력되며 업로드가 불가능했습니다.
(Cfg)XlsImportMode:1 로 사용하면 importData 로 xls 파일을 선택했을 때 서버모듈로 동작하여 xls 파일을 업로드 할 수 있도록 동작합니다.
[사용 예시]
Cfg : {
     // importData 를 이용하여 xls 파일 업로드 시 서버모듈을 이용
     XlsImportMode:1 
}

2. DataFormat에 타임존을 포함하는 yyyyMMddTHHmmssz 추가 기존에는 DataFormat 에 타임존 포함 형식을 지정하면 인식하지 못하고 NaN으로 값이 표시되었습니다.DataFormat: yyyyMMddTHHmmssz 의 타임존 포함 형식이 지원됩니다.

Ver 8.2.0.18-20250123-14
1. 특정 아이디의 시트가 존재하는 지 확인하는 IBSheet.hasSheet API 추가기존에는 특정 아이디의 시트가 존재하는지 판단하기 위해 window 객체에 직접 접근하여 시트 ID를 탐색했습니다.특정 아이디의 시트가 존재하는 지 확인하는 로직은 꽤 많이 이용되는 로직이기 때문에(특히 SPA 사용자) 시트단에서 저리를 하는 방식으로 hasSheet API 가 추가되었습니다.
IBSheet.hasSheet("찾고자하는ID") 방식으로 호출하시면 해당 ID시트 존재 여부에 따라 true/false 를 리턴합니다.
[사용 예시]
IBSheet.hasSheet("sheet") // sheet 라는 id의 시트가 존재하면 true, 없으면 false return


Ver 8.2.0.19-20250206-14
1. doSave, getSaveJson, getSaveString시 유효성 검사를 할 수 있는 onValidation 이벤트 추가 doSave, getSaveJson, getSaveString 등 저장 api 호출시, 사용자가 저장할 값들에 관해 유효성 검사를 진행할 수 있도록 셀 별로 순회하며 발생하는 이벤트 입니다.기본적인 필수입력 항목에 대한 확인이나 전체 입력 여부에 대한 확인은 저장 전에 시트가 내부적으로 확인하지만, 업무 로직에 따라 발생할 수 있는 각종 유효성 검사를 이 이벤트에서 처리합니다. 
[사용 예시]options.Events = {    onValidation: function (evtParam) {      if (evtParam.col != "TextData") return false;      var prevCol = evtParam.sheet.getPrevCol(evtParam.col);
      // TextData 컬럼의 이전 컬럼 값이 100보다 큰 경우 메세지창을 띄우고 저장을 중단합니다.      if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {        var index = evtParam.sheet.getRowIndex(evtParam.row);                    evtParam.sheet.showMessageTime({          message: index + "행 정수(Int)컬럼 셀 값이 100보다 큽니다.",          time: 10000,          buttons: ["OK", "취소"],        })
        return true;      }    }}
2. onBeforeSave 이벤트에 source.params(소문자) 추가이벤트 내부 인자의 통일성을 위해 기존 Params에서 params 로 첫글자가 소문자로 변경되었습니다.

3. (Method)setValue 호출 시 이벤트 발생 여부를 제어할 수 있는 ignoreEvent 인자 추가setValue 호출 시 ignoreEvent 설정을 통해 제어할 수 있는 각 이벤트의 사용방법은 아래와 같습니다.인자로 Json 형태로 옵션 세팅이 가능하며, 이벤트 이름을 key 값으로 넣고, true 리턴 시 지정한 이벤트가 발생하지 않습니다. NameTypeRequiredDescriptionOnChangeBoolean선택setValue시 발생하는 OnChange 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))OnSameBoolean선택setValue시 발생하는 OnSame 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))onEndEditBoolean선택setValue시 발생하는 onEndEdit 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (default:0(false))
[사용 예시]
var setRow = sheet.getRowById("AR5")

sheet.setValue({
     row: setRow,
     col: "sName",
     val: "홍길동",
     ignoreEvent : {
          OnChange: true,                   // setValue 시 OnChange 발생x
          OnSame: true                        // setValue 시 OnSame 발생x
     }
})




Ver 8.2.0.21-20250220-141. (Method)setValue 의 인자 ignoreOnEndEdit 를 ignoreEvent 로 통합ibsheet Ver 8.2.0.19-20250206-14 에서 이벤트 발생 여부를 제어할 수 있는 ignoreEvent 인자가 추가 된 이후,사용자의 편의성을 위해 onEndEdit 이벤트를 제어할 수 있는 ignoreOnEndEdit 인자를 추가된 ignoreEvent 로 통합했습니다.
[사용 예시]var setRow = sheet.getRowById("AR5")sheet.setValue({     row: setRow,     col: "sName",     val: "홍길동",     ignoreEvent : {          onEndEdit: true,                   // setValue 시 onEndEdit 발생X     }})
2. 시트 생성 시 Visible:0 으로 설정된 컬럼이 DOM에 생성되지 않는 (Cfg)NoRenderHidden 추가시트 생성후 최초 조회할 때 보이지 않는 컬럼은 Dom에 생성하지 않도록 합니다.해당 기능을 1으로 사용하면 보이지 않는 컬럼 (Visible: 0) 은 화면에 랜더링되지 않아 많은 컬럼이 있는 경우 보다 빠르게 랜더링 될 수 있습니다. 
[사용 예시]options = {
Cfg : {
          NoRenderHidden :1 //보이지 않는 컬럼을 Dom에다 미리 생성하지 않도록 설정
}
};


Ver 8.2.0.23-20250306-191. Required 이미지 경로를 설정할 수 있는 (Cfg)RequiredImage 추가기존에 별표로 표시되었던 Required의 이미지를 변경하려면 main.css 에서 수정해야 했습니다.사용자가 손쉽게 Required 이미지를 변경할 수 있도록 (Cfg)RequiredImage 가 추가되었습니다.
[사용 예시]Cfg : {
     ...
     RequiredImage : "원하는이미지경로"
     ...
}

2. 피벗 필터 기능을 피벗 다이얼로그에서 적용할 수 있도록 추가ibsheet-dialog.js 1.0.32-20250306-19 이상 버전이 필요합니다.피벗 필터 기능은 ibsheet.js 8.2.0.1 에서 (Method)doPivotFilter 로 추가되었습니다.이에 맞춰 피벗 다이얼로그에서도 편하게 피벗필터 기능을 사용할 수 있도록 추가되었습니다.
추가된 피벗 필터 기능에 맞춰 피벗 다이얼로그 UI에 변경이 있습니다.
[변경된 피벗 다이얼로그]

Ver 8.2.0.25-20250320-151. (Method)exportData 로 엑셀 파일을 틀고정해서 내보낼 수 있는 freezePane 인자 추가해당 인자는 비트 연산으로, 선택할 수 있는 옵션은 아래와 같습니다.freezePanenumber선택상단 행과 왼쪽 열을 틀 고정하여 다운로드하는 옵션입니다. 옵션 설정에 따라 다르게 틀 고정이 적용되어 다운로드되며, 비트 연산으로 동작합니다.

0: 틀 고정을 적용하지 않음(default)
1: 헤더 틀 고정 적용 (2과 함께 적용시 헤드 영역 틀 고정으로 동작)
2: 헤드 영역 틀 고정 적용
3: 왼쪽 고정 열 틀 고정 적용[사용 예시]sheet.exportData({
     freezePane: 5 // 헤드 영역 틀고정, 왼쪽 고정 열 틀 고정 적용
})


Ver 8.2.0.26-20250327-15 1. exportData의 인자들을 설정할 수 있는 (cfg) ExportDataConfig 옵션 추가 (Cfg)Down2ExcelConfig 와 동일하게,exportData 함수 호출시 들어가는 인자를 공통으로 설정합니다.CommonOptions(static)에 Cfg속성에 설정하시면 모든 화면에서 exportData 함수 호출시 기본적인 속성을 설정하실 수 있습니다. 
[사용 예시]options.Cfg  = {  // 모든 화면에서 exportData 로 엑셀 다운로드시 기본 속성을 설정  ExportDataConfig: {    "sheetDesign":0,    "merge":1  }};

2. 시트를 태블릿 모드로 생성할 수 있는 (cfg) TabletMode 옵션 추가 태블릿 PC 와 같은 기기 사용 시 기존은 무조건 모바일 모드로 동작했습니다.TabletMode:1(true) 를 설정하면 태블릿 PC에서 시트가 모바일 모드가 아니라 태블릿 모드로 동작합니다.
3. 마우스 드래그 또는 shift+클릭으로 Type: "Bool" 컬럼만 선택할 경우 선택 셀의 체크를 변경하는 (col) SelectCheck 추가  체크박스를 여러 개 변경할 때 사용성이 간편하도록(Col)SelectCheck 인자가 추가되었습니다.해당 인자를 1로 설정 시, 다중 선택(마우스 드래그, shift+클릭) 시 체크박스의 값이 반전 됩니다.
[사용 예시]Cols : [      {        Header: { Value: "체크박스(Bool)", HeaderCheck: 1 },        Type: "Bool",        Name: "CheckData",        CanEdit: 1,        SelectCheck: 1,     // 다중 선택 시 체크박스의 값이 변경되도록 설정      },...
] 
4. 조회된 데이터에 Enum에 설정한 값이 없을 때, Enum, EnumKeys에 해당 값이 추가되는 (col) EnumStrictMode: 2 옵션 추가 기존에 있었던 (Col)EnumStrictMode: 1 은 Enum 에 없는 값이 들어올 때 단순히 셀에 해당 값을 표시하는 속성입니다.이번 릴리즈에서 2 옵션을 추가하여 Enum에 없는 값이 들어올 때 셀에 표시할 뿐 아니라 Enum, EnumKeys 에 자동으로 해당 값이 추가됩니다.
5. 조회된 데이터에 Enum에 설정한 값이 없을 때, Enum의 드롭다운 메뉴에 대체 텍스트를 표시할 수 있는 (col) EnumNoMatchText 옵션 추가 (Col)EnumNoMatchText:1 로 설정 시 Enum 에 설정한 값이 없을 때 Enum 셀에 들어온 값이 아닌 대체 텍스트를 표시할 수 있습니다.Enum 에 설정한 값이 셀에 출력되어야 함으로 (Col)EnumStrictMode:1 과 함께 사용하셔야 합니다.


### 2025년 2분기 신규기능(4월~6월)

2025년 2분기 신규기능(Ver 8.3.0.1~8.3.0.17)

Ver 8.3.0.1-20250403-19 1. (Col,Cell)SuggestType 에 Validate 인자 추가 Suggest 사용 시 사용자가 편집을 끝낸 시점에 입력한 값을 판단하여 Suggest 에 없는 값이 입력될 경우 이전 값으로 치환해버리는 Validation 인자가 SuggestType에 추가되었습니다.
[사용 예시]//Suggest기능 사용options.Cols = [    ...    {        ...        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",        SuggestType: "Validate"   // Suggest 에 선언한 이외의 값이 입력될 경우 이전 값으로 치환
    },    ...];

2. 피벗 다이얼로그에 레이아웃 바로 업데이트 기능 추가 및 ui 개선 ibsheet-dialog.js 1.1.35-20250403-15 이상의 버전이 필요합니다.ibsheet.js 8.3.0.1-20250403-19 버전에 맞는 locale 파일도 함께 적용되어야합니다.
피벗 다이얼로그에 피벗 조건을 변경할 때 시트에 즉시 반영되는 기능(바로 업데이트 버튼)을 추가했습니다.상단 컬럼 검색창과 피벗 관련 설명 문구가 추가되었습니다.
[수정된 피벗 다이얼로그]
3. (Method)showFilterDialog, (Method)hideFilterDialog 추가  (Cfg)UseFilterDialog 를 동적으로 제어할 수 있는 showFilterDialog(),hideFilterDialog() 가 추가되었습니다.
[사용 예시]sheet.showFilterDialog()         // 필터 다이얼로그 동적으로 표현
sheet.hideFilterDialog()           // 필터 다이얼로그 동적으로 숨김
Ver 8.3.0.3-20250410-19 1. Section별로 HtmlPrefix, HtmlPostfix가 다르게 적용되어 있을 때, 행 높이를 보정해주는 (Cfg) MergeHeightAdjust 추가 HtmlPrefix나 HtmlPostfix와 같이 Cell의 높이에 영향을 주는 기능을 사용할 경우, 병합 영역 또는 시트의 섹션별 레이아웃 깨짐 현상이 발생 시, 병합 영역의 높이를 조정해주는 (Cfg)MergeHeightAdjust 속성을 추가했습니다.true 로 사용 시 시트 내 병합 정보를 항상 확인하여 표시하기 때문에 머지된 영역이 많으면 시트가 느려질 수 있습니다. 
[사용 예시]ddoptions.Cfg = {  MergeHeightAdjust: 1 // 병합된 영역의 높이 보정};


Ver 8.3.0.5-20250424-141. onBeforeExport 이벤트에 data 인자 추가 onBeforeExport 이벤트에서 엑셀 다운 전 Blob 데이터를 받을 수 있는 인자인 data 인자가 추가되었습니다.evtParam.data.blob 으로 blob 데이터를 받아 이용할 수 있습니다.* 주의 : 해당 인자는 exportData 메소드에서만 사용가능합니다.
[사용 예시]onBeforeExport : function (evtParam){
     evtParam.data.blob // Blob 데이터를 이렇게 꺼낼 수 있음
..
return true; // Blob 데이터 처리로 엑셀 파일 다운이 필요없는 경우 return ture를 하여 엑셀 다운 중단
}
연관게시글 보기) 엑셀 다운로드 시 비밀번호를 설정 방법

2. 외부 달력을 제어할 수 있는 onExCalendar 이벤트 추가 외부 달력을 제어할 수 있는 시트 이벤트를 발생시키도록 하는 onExcalendar 이벤트가 추가되었습니다.시트의 onScroll, onKeyDown, onAfterFilter, onClick 이벤트 시점에 해당 이벤트가 발생합니다.onClickSide 이벤트에서 외부 달력을 시트 셀 영역에 표시하고, 해당 이벤트에서 외부 달력을 제거할 수 있습니다.
[사용 예시] // 외부 달력 이벤트 닫기 (onScroll, onKeyDown, onAfterFilter, onClick)  onExcalendar : function (evtParam) {
    var isCal = false;    var evtName = evtParam.evType;
    if (document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0] && document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0].style.display != 'none') isCal = true;
    switch (evtName) {      case "onScroll":        if (isCal) $('#CalendarInput').data('daterangepicker').remove();        break;      case "onAfterFilter":        // 필터행 초기화인 경우        if (evtParam.sheet.FCol == "FromData" && evtParam.sheet.FRow[evtParam.sheet.FCol] == '') {          evtParam.sheet.doFilter("ToData",'');          if (isCal) $('#CalendarInput').data('daterangepicker').remove();        }        break;      case "onKeyDown": //esc키를 누를        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();        break;      case "onClick":        console.log('onClick');        break;    }  }

Ver 8.3.0.9-20250515-171. 그룹행을 만들고 숨길 수 있는 (Method)showGroupRow, hideGroupRow 추가 그룹행을 동적으로 생성하고 숨길 수 있는 showGroupRow, hideGroupRow 함수가 추가되었습니다.showGroupRow 는 내부 인자를 통해 그룹핑 대상 컬럼이나 그룹 기준 컬럼의 데이터 포맷을 설정하실 수 있습니다.[사용 예시]// 그룹행을 생성하고 그룹핑시 '{%s} <font color="gray">({%c}건)</font>' 포맷을 적용합니다.sheet.showGroupRow(null, '{%s} <font color="gray">({%c}건)</font>');sheet.hideGroupRow();  2. 포커스 된 상태에서 더블 클릭하는 경우만 편집 모드로 들어가는 (Cfg)InEditMode: 3 추가 시트의 편집 시점을 설정하는 (Cfg)InEditMode 속성에 아래의 경우에만 편집 모드로 들어가는 3번 옵션이 추가되었습니다.- 이미 포커스된 셀을 더블 클릭할 때- Enter 나 F2 키를 입력할 때- 포커스 상태에서 입력할 떄3. 피벗시트의 합계행을 표시하지 않는 옵션 추가 ibsheet-dialog.js 1.0.39-20250515-17 이상 버전이 필요합니다.피벗 시트의 데이터 행에 '행 총합계 표시', '열 총합계 표시' 컨텍스트 메뉴가 추가되었습니다.(Method)showPivotDialog, makePivotTable 함수에 hideTotal 인자가 추가되었습니다.

Ver 8.3.0.14-20250612-151. 선택 함수 사용 시에 (Event)onSelectEnd 발생 여부를 제어하는 ignoreEvent 인자 추가기존 (Method)selectCell, selectCol, selectRow, selectAllRows, selectRange 와 같은 api 사용 시onSelectEnd 이벤트가 발생하지 않았습니다.이번 릴리즈에 각 api에 추가된 ignoreEvent 인자를 통해 onSelectEnd 이벤트 발생 여부를 제어할 수 있습니다.
NameTypeRequiredDescriptionignoreEventboolean선택onSelectEnd 이벤트 발생 여부
0(false):발생
1(true):발생하지 않음 (default)[사용 예시]sheet.selectAllRows(1, 0) // onSelectEnd 이벤트를 발생시킴. Ctrl+A 와 동일


Ver 8.3.0.15-20250619-15 1. 문자형 열에서 천단위 구분자(',')와 소수점 구분자('.')를 Size 계산에서 제외할 수 있는 (col) SizeIgnoreDecimalSep 옵션 추가  입력된 문자열이 숫자형인 경우, 설정된 열에 입력 가능한 글자 수에서 자릿수 구분자와 소수점 구분자의 값들을 글자 수에서 제외하는 기능입니다.locale 파일의 GroupSeparator, DecimalSeparator를 기준으로 동작합니다.locale 메세지 파일(ko.js,en.js등)에서 자릿수 구분자는 Format.GroupSeparator, 소수점 구분자는 Format.DecimalSeparator로 설정되어 있습니다.주의 : Col 혹은 Cell에 Size 속성이 설정되어 있어야 해당 기능이 동작합니다.
ValueDescriptionboolean입력된 데이터에서 자릿수 구분자와 소수점 구분자를 이용하여 숫자형인지 판단하고, 숫자형 데이터일 경우 구분자 문자들을 입력가능한 글자수에서 제외 여부
(Int, Float type: default:1(true), 그 외의 type: default:0(false))
전 세계에서 사용되는 자릿수 구분자(Format.GroupSeparator) 문자: ,, ., , '
전 세계에서 사용되는 소수점 구분자(Format.DecimalSeparator) 문자: ,, .
[사용 예시]//FloatData열에 최대 10글자까지 입력가능, 데이터가 숫자형인 경우 구분자를 입력제한 글자수에서 제외options.Cols = [    ...    {Type: "Text", Size: 10, SizeIgnoreDecimalSep: true, Name: "FloatData", Width: 120 ...},    ...];
2. 시트의 스타일을 변경할 수 있는 고정행을 추가하는 (cfg) StyleRowConfig 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정 할 수 있습니다.StorageType을 통해 스타일 정보를 저장할 방법을 설정할 수 있습니다.
[사용 예시] 

```javascript
StyleRowConfig: {
    Visible: true, // 화면 표시 여부 default: true
    StorageType: 2, // 0: 사용안함, 1: 캐시 사용, 2: 서버통신
    ServerUrl: "../styleinforeturn.jsp", // 서버통신을 할 경우 url
    AutoLoad: true, // 생성 시 스타일 정보 자동 로드 여부
    Themes: {
        IBMT: "../../assets/ibsheet/css/mint/main.css",
        Custom: "../../assets/ibsheet/css/simple/main2.css"
    }
},
```

[실행 결과] 

Ver 8.3.0.16-20250626-161. (Method)ExportData에 numberFormatMode 인자 추가 (Method)down2Excel 에 제공되는 numberFormatMode 인자를 ExportData 에도 제공하도록 추가하였습니다.down2Excel 과 동일하게 엑셀 다운 시 실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 지정할 수 있습니다.NameTypeRequiredDescriptionnumberFormatModenumber선택실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 설정합니다.0:시트의 컬럼 포맷을 따릅니다. (default)1:셀의 값 기준에 따라 정수 또는 실수 형태로 셀 서식을 설정합니다.2:일반 서식으로 설정합니다.[사용 예시]sheet.exportData({numberFormatMode:1}) // 값에 따라 정수, 실수 형태로 셀 서식을 지정2. Enum의 선택 여부를 설정할 수 있는 (Col) EnumDisabled 옵션 추가 Enum 메뉴에서 특정 항목을 선택 불가로 만드려면 (Col,Cell)EnumMenu 를 이용하여 Enum과 관련된 소스를 다시 EnumMenu.Item 으로 지정해줘야 했습니다.사용에 편의성을 높이기 위해 EnumDisabled 속성이 추가되었습니다. 이를 이용하여 간단하게 특정 Enum을 선택 불가(Disabled 상태)로 만들 수 있습니다.[사용 예시] //Enum 열에 item의 선택 불가능 여부를 설정한다.options.Cols = [  {    "Header": "대분류",    "Type": "Enum",    "Name": "Category1",    "Enum": "|가정/살림|경제 경영|국어 외국어 사전|만화/라이트노벨|소설/시/희곡|어린이|역사|예술|인문|자기계발|자연과학",    "EnumKeys": "|A0|A1|A2|A3|A4|A5|A7|A8|A9|A10|A11",    "EnumDisabled": "|1|0|0|0|0|1|0|1|1|0|0" // 특정 Enum 항목만 Disabled 로 만든다.  }]; 3. 시트의 가로 스크롤을 숨길 수 있는 (Cfg) HideHScroll 옵션 추가 가로 스크롤을 표시하지 않는 기능인 (Cfg)HideHScroll 이 추가되었습니다.시트의 너비를 조절하여 스크롤이 표시되지 않게 하는 (Cfg)NoHScroll 과는 다르게 HideHScroll 은 가로 스크롤은 보이지 않지만 유지되는 상태입니다.Shift+위아래마우스휠 동작으로 보이지 않는 가로 스크롤을 움직일 수 있습니다.4. 시트의 스크롤을 동기화 할 수 있는 (cfg) Sync 옵션 추가 시트의 스크롤을 다른 시트와 동기화 하는 기능입니다.동기화하고자 하는 시트에 동일한 Sync 옵션을 주면 자동으로 해당 Sync 옵션을 가진 시트끼리 지정한 스크롤(세로,가로)이 동기화 됩니다. ValueDescriptionVert세로 스크롤 동기화 기능 설정Horz가로 스크롤 동기화 기능 설정제약사항 다음의 경우에 정상적으로 동작하지 않습니다:시트 간 SearchMode가 다른 경우시트 간AutoRowHeight 설정 여부가 다른 경우[사용 예시]두 시트의 가로, 세로 스크롤을 동기화 시킨다.->sheetInit1 : {  Cfg: {    Sync: "Vert,Horz" // 가로, 세로 스크롤 동기화  }, ...}sheetInit2 : {  Cfg: {    Sync: "Vert,Horz" // 가로, 세로 스크롤 동기화  }, ...}

### 2025년 3분기 신규기능(7월~9월)

2025년 3분기 신규기능(Ver 8.3.0.18~Ver 8.3.0.32)

Ver 8.3.0.18-20250703-131. (Cfg)StyleRowConfig 에 스타일행의 input을 표시하거나 숨길 수 있는 Extend 옵션 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정할 수 있는 StyleRowConfig에 Extend 옵션이 추가되었습니다.사용 시 처음 렌더링 시 '헤더행', '데이터행' 버튼의 펼쳐짐 여부를 설정할 수 있습니다.ValueTypeDescriptionExtendboolean처음 랜더링 시 '헤더행', '데이터행' 버튼의 펼쳐짐 여부 (default: true)[사용 예시]options.Cfg = {  StyleRowConfig: {    Visible: true,    StorageType: 2,    ServerUrl: "./ibsheet/styleInfo.jsp",    AutoLoad: true,    Themes: {      Mono: "./assets/ibsheet/css/mono/main.css", // css 파일 내의 클래스를 key와 일치되도록 수정 필요      IBGY: "./assets/ibsheet/css/gray/main.css"    },    Extend : true // 처음 렌더링 시 '헤더행','데이터행' 버튼을 펼침  }};[Extend: false 스타일 행 렌더링 예시][Extend: true 스타일 행 렌더링 예시]2. Def의 Header, Row에 스타일 관련 설정을 할 수 있는 (Method)setCurrentStyle, getCurrentStyle, clearCurrentStyle 추가 localStorage 등에 문자열로 저장하는 등의 작업을 위해, 현재 Def에 설정된 테마, 배경색, 글자색 및 Alternate 색상, 글자크기 정보를 문자열로 꺼내거나 컨트롤 하는 setCurrentStyle, getCurrentStyle 이 추가되었습니다.getCurrentStyle 로 리턴되는 문자열은 현재 시트의 Def에 설정된 배경색, 글자색 및 Alternate 색상, 글자크기 정보 값을 가지고 있습니다.localStorage, sessionStorage 에 저장한 현재 스타일 정보를 제거할 때는 clearCurrentStyle 을 사용할 수 있습니다.* (Cfg)StorageSession 값이 0 인 경우에는 clearCurrentStyle 로 스토리지에서 관련 정보를 삭제할 수 없습니다. 사용을 위해서는 StorageSession :1 을 설정해야 합니다.[사용 예시] // 현재 시트의 컬럼 정보를 담고 있는 문자열을 반환sheet.getCurrentStyle();/-----------------------------------------------------------------/var info = '{"HeaderColor":"#1d1d1b","HeaderTextSize":"14","HeaderTextColor":"#efe6e6","AlternateColor":"#dfdfe2","RowColor":"#f6f6ee","RowTextSize":"12","RowTextColor":"#211c1c","Theme":"IB"}' // getCurrentStyle에서 얻은 결과와 같은 형식sheet.setCurrentStyle( info );/-----------------------------------------------------------------/options.Cfg = {    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정};// 로컬 스토리지 혹은 세션 스토리지에 저장된 스타일 정보를 제거한다.sheet.clearCurrentStyle();
Ver 8.3.0.19-20250710-15 1. Int, Float 타입에서 Format 설정 시 양수, 음수, 0에 대한 TextColor, TextFont, TextSize, TextStyle를 설정할 수 있는 (col, cell)SignFontStyle 속성 추가 SignFontStyle을 이용하여 숫자형 컬럼에서 데이터가 각 양수, 음수, 0일 때 Text가 표시될 속성들을 설정하여 적용할 수 있습니다.양수, 음수, 0 일 때 Format을 지정하는 것과 동일하게 ;를 구분자로 사용합니다."red;;yellow" 와 같이 어떤 값을 빈 값이나 '', null로 지정할 경우 기존의 text 속성을 유지합니다.
NameTypeRequiredDescriptionTextColorstring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자색(TextColor)을 설정합니다.
ex) "SignFontStyle": {"TextColor": "red;blue;orange", …}TextFontstring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 폰트(TextFont)를 설정합니다.
ex) "SignFontStyle": {TextFont: "Gulim, Helvetica;Malgun Gothic;Times New Roman", …}TextSizestring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 크기(TextSize)를 설정합니다.
ex) "SignFontStyle": {TextSize: "12px;15px;5px", …}TextStylestring선택숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 스타일(TextStyle)를 숫자로 설정합니다.
ex) "SignFontStyle": {TextStyle: "5;2;8", …}
[사용 예시]{    "Header": "정수(Int)",    "Type": "Int",    "Name": "IntData",     SignFontStyle: {        TextColor: "blue; red; pink",  // 양수-blue, 음수-red, 0-pink    }},

Ver 8.3.0.20-20250717-16 1. (Method)hasChangedData, getChangedData에 데이터 행만 대상으로 동작할 수 있는 dataonly 인자 추가 시트의 변경된 사항이 있는지 확인할 수 있는 Method 인 hasChangedData, getChangedData 는 데이터 영역 뿐 아니라 Foot, Header, Head, FormulaRow 등의 수정 사항도 인식하여 함께 return 이 됩니다.사용의 편의성을 늘리고자, data 행만의 변경된 사항을 인식하여 리턴받을 수 있게 하는 dataonly 인자가 추가 되었습니다.dataonly:1(true) 로 설정 시 데이터를 대상으로 변경된 사항을 리턴합니다.[사용 예시]sheet.hasChangedData({dataonly:true})2. (Cfg)SelectingCells: 0인 경우 복사할 영역을 제어할 수 있는 (Cfg)CopyCols 옵션 추가(Cfg)SelectingCells:0 을 설정한 경우 행단위로만 선택이 되어, 복사나 붙여넣기 동작 시 모든 행이 기준으로 복사/붙여넣기 되어 사용에 불편함이 있었습니다.사용성 개선을 위하여 (Cfg)CopyCols 옵션을 추가하여 복사하여 붙여넣기에 사용할 열을 설정할 수 있습니다.ValueDescription0포커스된 열만 붙여넣기에 사용1모든 표시열을 붙여넣기에 사용2모든 열을 붙여넣기에 사용(숨겨진 컬럼도 포함)3포커스된 행에 대해서만 포커스된 셀 범위 또는 모든 표시 열(default)
Ver 8.3.0.22-20250731-141. (Method)importData 시 엑셀 파일의 셀 위에 이미지를 불러올 지 결정하는 uploadImage 인자 추가  업로드할 엑셀 파일에 아래처럼 이미지가 들어있을 경우, 해당 이미지를 데이터로 업로드 할지 무시할지 여부를 결정하는 uploadImage 인자가 추가되었습니다.uploadImageboolean선택셀 위에 띄워진 이미지를 업로드할지 여부를 결정합니다.
0(false): 셀 위에 띄워진 이미지를 업로드하지 않음
1(true):셀 위에 띄워진 이미지를 업로드함 (default)
[사용 예시]sheet.importData({     uploadImage:false // 엑셀에 있는 이미지를 업로드 시 무시함}) 
Ver 8.3.0.24-20250814-141. 시트에서 메뉴가 표시될 때, 마우스가 메뉴를 벗어나면 자동으로 메뉴가 닫히는 (cfg) AutoCloseDialog 기능 추가, AutoCloseDialog를 사용할 경우 마우스가 벗어날 때, 닫히기 전까지 시간을 설정할 수 있는 (cfg)AutoCloseDialogTimeout 옵션 추가시트의 달력, Enum리스트, 컨텍스트 메뉴의 경우 사용자가 닫기 버튼을 누르거나 다른 영역을 클릭하기 전에는 시트에 플로팅되는 다이얼로그가 닫히지 않았습니다.사용성을 높이기 위하여 사용자가 직접 닫지 않아도 다이얼로그 영역 바깥으로 마우스가 나가면 떠있는 다이얼로그를 닫을 수 있는 (Cfg)AutoCloseDialog 속성이 추가되었습니다.AutoCloseDialog:true 사용 시 마우스가 나간 후 닫히는 지연 시간을 설정할 수 있는 AutoCloseDialogTimeout 기능도 함께 추가되었습니다. 이때 설정하는 시간의 단위는 ms 단위입니다.[사용 예시]options.Cfg = {    AutoCloseDialog: 1, // 다이얼로그 자동닫기 설정    AutoCloseDialogTimeout: 5000, // 자동닫기 지연시간 설정 };2. 포커스 된 셀의 오른쪽 하단을 드래그 하여 채우기 동작을 할 수 있는 (cfg) DragFill 추가 포커스 된 셀 오른쪽 하단을 드래그 시 채우기 동작 활성화 여부를 지정할 수 있는 Cfg.DragFill 속성이 추가되었습니다. Cfg.DragFill: true 설정 시 아래 사진처럼 셀 우측 하단 모서리에 마우스 hover 시 + 표시가 생깁니다.+ 표시가 생긴 상태로 클릭 후 원하는 영역을 드래그 하면 아래와 같이 채워질 영역이 표시됩니다.영역 드래그 동작을 종료하면 아래처럼 기준 셀과 동일한 값으로 선택한 영역에 데이터가 채워 넣어집니다.[사용 예시]options.Cfg = {   "DragFill": true // 채우기 동작 활성화}3. getSaveJson, getSaveString, doSave에서 Size, ResultMask, EditMask에 관한 유효성 검사를 진행 할 수 있는 옵션 추가 각 함수의 인자로 validSize, validEditMask, validResultMask 인자가 추가되면서 Size, ResultMask, EditMask 에 관해 각각 유효성 검사를 진행할 지 말 지를 설정할 수 있습니다.validSizeboolean선택사이즈 설정(Size col)에 대한 유효성 검사 여부 설정.0(false):사이즈 유효성 검사 안함 (default)1(true):사이즈 유효성 검사 실행validEditMaskboolean선택EditMask 설정(EditMask col)에 대한 유효성 검사 여부 설정.0(false):EditMask 유효성 검사 안함 (default)1(true):EditMask 유효성 검사 실행validResultMaskboolean선택ResultMask 설정(ResultMask col)에 대한 유효성 검사 여부 설정.0(false):ResultMask 유효성 검사 안함 (default)1(true):ResultMask 유효성 검사 실행[사용 예시]// ResultMask에 관한 유효성 검사 진행sheet.getSaveJson({validResultMask: 1});// Size, EditMask에 관한 유효성 검사 진행sheet.doSave({url: "a.html", validSize: 1, validEditMask: 1}); Ver 8.3.0.27-20250904-15 1. 위쪽 헤더 행 기준으로 아래쪽 헤더 행의 헤더 머지를 설정하는 (Cfg) PrevHeaderMerge 옵션 추가 위쪽의 헤더 행 기준으로 아래쪽 헤더 행의 헤더 머지를 설정하는 PrevHeaderMerge 옵션이 추가되었습니다.대분류-하위분류로 이루어진 헤더를 선언할 때 유용하게 사용 가능합니다.
HeaderMerge:6 을 사용하고 아래와 같은 헤더를 사용할 경우 b,c 중분류의 값이 다르지만 3번째 헤더의 값이 동일해 서로 머지가 되는 게 기본동작이고, 이 3번째 행의 머지를 조절하기 위해서는 번거로운 작업이 필요했습니다.
동일한 옵션에 Cfg.PrevHeaderMerge:1 을 추가할 경우 아래처럼 위쪽 헤더행의 머지를 기준으로 아래쪽 행이 머지되게 됩니다.
[사용 예시]options.Cfg = {    HeaderMerge: 6,    PrevHeaderMerge: 1 // 위쪽 헤더를 기준으로 머지함.};
2. SEQ 또는 RowIndex 셀 클릭 시 해당 행 선택이 되는 (Cfg) SelectingCells: 4 옵션 추가 사용의 다양성을 위해 SEQ 컬럼을 선택할 경우에는 SelectingCells:0으로 동작하고, 그 외 컬럼을 선택할 경우에는 SelectingCells:1로 동작하도록 설정할 수 있는 SelectingCells:4 옵션이 추가되었습니다.
[SelectingCells :4 설정 후 줄넘기문자열 컬럼의 2,3행 드래그로 선택]
[SelectingCells :4 설정 후 SEQ 컬럼의 2,3행을 드래그로 선택]
[사용 예시]options.Cfg = {   "SelectingCells ": 4}

Ver 8.3.0.28-20250911-17 1. saveCurrentInfo로 저장한 정보를 가져올 수 있는 (Method)getSavedCurrentInfo 추가 현재 로컬 스토리지 혹은 세션 스토리지에 saveCurrentInfo 로 저장한 시트의 컬럼 정보를 문자열로 가져올 수 있는 (Method)getSavedCurrentInfo 가 추가되었습니다.[사용 예시]// 현재 로컬 스토리지 혹은 세션 스토리지에 저장되어 있는 시트의 컬럼 정보를 문자열로 반환sheet.getSavedCurrentInfo();2. (Cfg) SelectMode 추가 마우스 조작으로 셀 또는 행을 선택 시에 일어나는 동작을 변경할 수 있는 (Cfg)SelectMode 가 추가되었습니다.ValueDescription0ctrl + 클릭, 마우스드래그 선택으로 포커스가 변경되지 않습니다. (default)새로운 선택 영역 중 이미 선택된 셀이 포함된 경우 기존에 선택된 셀과 새로운 영역의 선택이 해제됩니다.1ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다.shift + 클릭으로 선택 시 기존의 선택을 취소하고 새롭게 선택된 영역을 유지합니다.2ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다.shift + 클릭으로 선택 시 기존의 선택과 새롭게 선택된 영역을 유지합니다.





### 2025년 4분기 신규기능(10월~)

2025년 4분기 신규기능(Ver 8.3.0.33 ~ )

Ver 8.3.0.33-20251002-161. StyleRowConfig에 버튼을 설정할 수 있는 Layout 옵션 추가 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정 할 수 있는 StyleRowConfig 속성에 스타일 행의 버튼 순서와 종류를 설정할 수 있는 Layout 옵션이 추가되었습니다.ValueTypeDescriptionLayoutArray스타일 행에 버튼의 순서와 종류를 설정합니다.
default: ["Init", "Save", "Load", "ApplyAll"]
Init: 초기화 버튼
Save: 저장 버튼
Load: 불러오기 버튼
ApplyAll: 전체 적용 버튼
InitAll: 전체 초기화 버튼
[사용 예시]options.Cfg = {  StyleRowConfig: {    Visible: true,    StorageType: 2,    ServerUrl: "./ibsheet/styleInfo.jsp",    AutoLoad: true,    Themes: {      Mono: "./assets/ibsheet/css/mono/main.css", // css 파일 내의 클래스를 key와 일치되도록 수정 필요      IBGY: "./assets/ibsheet/css/gray/main.css"    },    Layout: ["Init", "Save", "Load", "InitAll"] // 초기화, 저장, 불러오기, 전체 초기화 버튼 추가  }};
[예시 소스 실행 결과]

Ver 8.3.0.34-20251016-161. Formula의 계산이 발생하기 전 시점의 onBeforeRowFormula 이벤트 추가 각 행에서 Formula가 실행되기 전 호출되는 이벤트인 onBeforeRowFormula 이벤트가 추가되었습니다.리턴을 통해 Formula의 실행을 제어할 수 있습니다.> 1(true)리턴 시 각 행에서 실행되는 실행되는 Formula 동작을 막습니다. **주의 : 해당 이벤트는 Formula 설정이 많을 수록 많이 호출되기 때문에 성능에 문제가 발생할 수 있습니다.
NameTypeDescriptionsheetobject시트 객체rowobjectFormula가 실행되는 데이터 로우 객체colstringFormula가 실행되는 열이름formulaNamestring실행되는 Formula이름eventNamestring해당 이벤트 이름(onBeforeRowFormula)
options.Events = {    onBeforeRowFormula:function(evtParam){        // 첫번째 행이 아닐 때 Formula를 실행하지 않습니다.        var sheet = evtParam.sheet;        var datas = sheet.getDataRows();        if (datas.length > 0) {            var firstRow = sheet.getFirstRow();            if (evtParam.row != firstRow) {                return true;            }        }    }}
2. Filter행의 Defaults의 최대 너비를 설정할 수 있는 (Cfg) FilterDefaultsMaxWidth 추가필터 행에서 Defaults 를 사용할 때 생성되는 필터 메뉴의 MaxWidth 를 설정합니다.생성될 필터 메뉴의 width 가 설정하는 값보다 작은 경우에는 기존의 생성될 width 가 우선되고, 설정하는 값보다 큰 경우에 필터 메뉴의 너비 축소 및 가로 스크롤이 생성됩니다.
options.Cfg = {    FilterDefaultsMaxWidth: 500};
3. getSaveJson 사용 시 null값을 ""이 아닌 null로 추출할 수 있는 (Cfg)PreserveNull 옵션 추가 사용자가 데이터를 null로 기입한 경우 시트 객체에 null 값 그대로 바인딩하고, getSaveJson으로 데이터 추출시 데이터를 ""이 아닌 null 값 그대로 추출합니다.ValueDescription0사용자가 데이터를 null로 기입해도 getSaveJson으로 데이터 추출할 때는 데이터가 ""으로 추출됨 (default)1사용자가 데이터를 null로 기입한 경우 getSaveJson으로 데이터 추출할 때 데이터가 null 값 그대로 추출됨options = {    Cfg :{        PreserveNull: 1, // 사용자가 데이터를 null로 기입한 경우 getSaveJson으로 데이터를 추출할 때 데이터가 null 값 그대로 추출됨        ...    }};

Ver 8.3.0.35-20251023-161. Group시 정렬 여부를 제어할 수 있는 (Cfg) GroupSort 옵션 추가 기본적으로 ibsheet8은 Group 시 자동으로 데이터가 정렬이 되도록 동작합니다.Group 시에 데이터를 자동으로 정렬하지 않도록 설정하는 옵션인 Cfg.GroupSort 옵션이 추가되었습니다.GroupSort:false 로 설정 시 자동 정렬이 이뤄지지 않습니다.[사용 예시]options.Cfg:{     GroupSort:false // 그룹 시 정렬하지 않음}2. (Cfg) UseFilterDialog 설정 시 세부 사항을 설정할 수 있는 옵션 제공 UseFilterDialog 설정 시 최상단 입력 필터를 숨길지 여부, 높이, ZIndex를 조절할 수 있도록 인자 값으로 object를 설정할 수 있게 추가 되었습니다.object 설정 시 자동으로 UseFilterDialog 는 기능을 사용한다고 인식합니다.[options 로 설정할 수 있는 값]ValueDescriptionHideInputFilter데이터 필터 다이얼로그 최상단의 입력 필터를 숨길지 여부를 설정합니다.true: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 숨깁니다.false: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 포함합니다. (default: false)Height데이터 필터 다이얼로그 아이템 영역의 높이를 조정합니다. (default: 180)ZIndex시트의 (Cfg) ZIndex와 무관하게 필터 다이얼로그의 Zindex를 조정합니다.[사용 예시]UseFilterDialog: {   HideInputFilter: true, // 데이터 필터 다이얼로그 내부의 텍스트 필터 다이얼로그 태그를 표시하지 않는 옵션   Height: 150, // 데이터 필터 다이얼로그 오픈 시점의 높이를 조정하는 옵션   ZIndex: 9999, // 데이터 필터 다이얼로그의 ZIndex 값을 조정하는 옵션},
Ver 8.3.0.37-20251030-14  1. 시트의 넓이가 css 클래스에 설정된 height나 width로 설정되는 (Cfg) UseClassStyle 추가 시트에 class 속성이 설정되어 있는 경우, 해당 class에 지정된 CSS에서 height와 width 값을 읽어 시트 생성 시 너비와 높이에 적용하는 UseClassStyle이 추가되었습니다.너비와 높이가 적용되는 우선순위는 style속성 > class속성 > 기본 값 순으로 적용됩니다.각 항목에 설정된 값이 없을 경우, 다음 순서로 우선순위가 넘어갑니다.너비는 100%, 높이는 800px를 기본값으로 갖습니다.
주의 : 이 기능은 단일 Class 정보만을 대상으로 동작합니다.[사용 예시]options.Cfg = {    UseClassStyle: true, // 시트 div에 style 정보가 없을 경우, class에 선언된 css 클래스들을 확인하여 width와 height를 시트 너비와 높이에 적용};

2. (Method)showFilterDialog에 필터다이얼로그을 설정할 수 있는 opt인자 추가 showFilterDialog에 필터 다이얼로그의 상세 설정을 설정할 수 있는 opt 인자가 추가되었습니다.지정 가능한 옵션은 상단 input 검색창 표현 여부, 높이, z-index 값이 있습니다.
[사용 예시]sheet.showFilterDialog({    opt: {      HideInputFilter: true,      Height: 50,      ZIndex: 9999,    }});
Ver 8.3.0.40-20251113-171. UseFilterDialog의 데이터 목록을 표시 방법을 설정하는 Mode 옵션 추가데이터 필터 목록에 포함될 데이터를 결정합니다.
디폴트는 1이며 2 를 설정할 경우 현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시합니다. ValueDescriptionMode데이터 필터 목록에 포함될 데이터를 결정합니다.1: 현재 보여지는 데이터를 포함하여 목록을 표시합니다. (default)2: 현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시합니다.[사용 예시]//헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다.options.Cfg = {    UseFilterDialog: true};options.Cfg = {    // 필터 다이얼로그를 띄울 때, 어떻게 띄울지 변경합니다.    UseFilterDialog: {      HideInputFilter: true, // 데이터 필터 다이얼로그를 띄울 때, 다이얼로 최상단의 입력 필터를 띄우지 않습니다.      Height: 150, // 데이터 필터 다이얼로그를 띄울 때, 아이템 영역의 높이를 150px로 조정합니다.      ZIndex: 1000, // 필터 다이얼로그의 `ZIndex`를 1000으로 설정합니다.      Mode: 2 //현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시    },};



Ver 8.3.0.42-20251120-161. 새로운 행을 추가하지 않고 그룹 행에 소계를 표시하는 (Cfg) UseGroupSubTotal: 2 기능 추가 기존에는 UseGroupSubTotal:1 속성만 제공하여 소계행이 그룹행 이외에 따로 생성되었습니다.[UseGroupSubTotal:1 사용]
소계행을 따로 만들고 싶지 않고, 그룹행에 함께 표시하고자 할 때 UseGroupSubTotal:2 를 사용할 수 있습니다.[UseGroupSubTotal:2 사용]
[사용 예시]options.Cfg = {    UseGroupSubTotal:2 // 그룹행에 소계를 함께 표시};
optons.Col =[     ...    {"Header": "추천수","Name": "sRcmn","Type": "Int","Format": "#,###","MinWidth": 140,"Width": 140          ,GroupSubTotal: { Type: "Sum", Format: "#,###", TextColor: "#FFB2F5" }     },     ...];
2. 셀 단위로 설정할 수 있는 (Cell) SpinnerVisible, (Cell) SpinnerMax, (Cell) SpinnerMin, (Cell) SpinnerStep 옵션 추가 Type:Int, Float 인 컬럼에 적용 가능한 (Col)Spinner 관련 속성들을 Cell 개별적으로 설정할 수 있도록 속성이 추가되었습니다.
[사용 예시]var data = [     {"aa":123, "bb":222, "bbSpinnerVisible":1},     .....];
Ver 8.3.0.43-20251127-141. MaxSort 이상 정렬 시, 가장 이전의 정렬이 취소되면서 정렬의 우선 순위는 유지되는 (Cfg) HeaderSortMode: 4 추가 (Cfg)HeaderSortMode: 0(default)은 클릭하여 순서대로 대분류/중분류/소분류가 되며,MaxSort 이상 정렬 시도 시 정렬 시도를 무시했습니다.
사용의 다양성을 위해 HeaderSortMode:0 과 동일하게 클릭 순서대로 대분류/중분류/소분류가 되지만,MaxSort 이상 정렬 시도 시 가장 이전의 정렬을 취소시키고 우선순위를 유지하는 옵션인 HeaderSortMode:4 가 추가되었습니다.
[동작 예시]아래와 같은 상황의 시트에서 "실수" 컬럼을 클릭 시
"콤보" 컬럼의 sort가 취소되고 "실수" 컬럼이 3순위 sort 컬럼이 됨

[사용 예시]options.Cfg = {    HeaderSortMode :4};

Ver 8.3.0.45-20251204-151. loadExcel로 엑셀 파일 업로드 시 SEQ 포함 여부를 결정할 수 있는 skipSEQ 인자 추가 해당 인자 사용을 위해 servermodule: 2.0.13, excel: 1.1.31-20251204-15 이상 버전이 필요합니다.loadExcel 시 mode:NoHeader,HeaderSkip 의 경우 원치 않는 엑셀의 SEQ 컬럼이 업로드 되어 한 칸씩 밀리는 상황이 있습니다.사용의 다양성을 제공하고자, loadExcel 인자로 엑셀의 SEQ를 포함하여 업로드할 지 여부를 결정할 수 있는 skipSEQ 인자가 추가되었습니다.[사용 예시]sheet.loadExcel({     mode:"HeaderSkip",     skipSEQ:true // 엑셀의 SEQ 컬럼은 업로드하지 않는다.})2. setRowValue 시 시트 랜더링 여부를 선택 할 수 있는 render 인자 추가, 시트 계산 여부를 선택 할 수 있는 noCalc 인자 추가 행 단위별 데이터를 설정하는 setRowValue 의 경우 셀 단위 데이터를 설정하는 setValue 와는 다르게 렌더링 여부와 시트 계산 여부를 지정할 수 없었습니다.데이터 설정 시 동작의 일관성을 유지하기 위해 setRowValue 에 렌더링 여부와 시트 계산 여부를 컨트롤 할 수 있는 render, noCalc 인자가 추가되었습니다.해당 인자를 false 로 사용 시에는 rerender() 와 calculate() 를 호출하여 수동으로 해당 작업을 해야합니다.[사용 예시]var row = sheet.getRowById("AR5"); // ID가 AR5인 행var data = sheet.getRowValue(row); var targetRow = sheet.getRowById("AR1"); sheet.setRowValue({     row : targetRow,      data : data,     render : false, // 호출 후 즉시 반영하지 않음     noCalc : false // 호출 후 즉시 포뮬러 계산하지 않음}); sheet.rerender(); // 시트 렌더링sheet.calculate(); // 시트 포뮬러 계산



## 최근 추가된 기능이나 외부 사이트에 대한 홍보

### 2025.11.10 CSS Guide 메뉴얼 및 페이지 오픈


IBSheet8 의 디자인 수정 시 헤더,데이터,푸터 등 영역별로 CSS파일의 어떤 클래스를 수정해야 하는지를 설명하는 메뉴얼과 직접 사용자가 css를 수정해보고 IBSheet8에 수정한 내용을 확인해 볼 수 있는 웹페이지가 추가되었습니다.
IBSheet 메뉴얼 좌측 메뉴 최하단 부분을 참고해 주세요.
또한 메뉴얼 내에 확인하기 를 클릭하시면 해당 영역을 수정해 볼 수 있는 CSS Guide 페이지가 오픈됩니다.

CSS Guide 페이지의 사용법은 "튜토리얼"을 참고해 주세요.
감사합니다.



### 2025.10.21 커스텀스타일 기능 추가

시스템 이용자가 자유롭게 시트의 테마나 색상 등을 변경하고 이를 저장하는 커스텀 스타일 기능이 추가 되었습니다.
사용 방법은 시트 생성시 StyleRowConfig 속성을 설정시 시트 상단에 커스텀 스타일 행이 추가되고, 이를 통해 사용자가 디자인을 변경 후 저장하는 방식 입니다.

1. 스타일 개인화 예제에서 테마 및 헤더와 데이터 영역에 대한 디자인 변경 후 "저장" 버튼 클릭
2. 설정된 디자인이 모든 화면에 동일하게 반영 
3.초기 설정으로 되돌리려면 스타일 개인화 화면에서 초기화 버튼 클릭
스타일 개인화  기능 예제스타일 개인화 메뉴얼

### 2025.10.02 행고정 (Stack) 기능 추가


사용자가 스크롤을 통해 데이터를 확인 하는 과정에서 원하는 데이터를 데이터 상단(혹은 하단)에 고정시킬 수 있는 Stack 기능이 추가 되었습니다.
사용 방법은 열 생성시 Type은 Bool로 설정하시고 새로 추가된 Stack 속성을 1 로 설정하시면 사용자가 자유롭게 고정할 수 있는 Stack 열이 생성 됩니다. (마치 css 의 position: sticky 와 유사하게 동작)

stack 기능 예제stack 기능 메뉴얼


### 2025.09.16 차트 다이얼로그 예제 추가


이번에 IBSheet에서 드레그 한 영역을 IBChart를 통해 확인할 수 있는 showChartDialog() 함수가 추가되었습니다.
이 기능은 단순히 시트에서 영역을 드레그하고 함수를 호출하는 것 만으로 다이얼로그를 생성하고, 생성된 다이얼로그 내에서 차트의 유형을 변경하거나 선택한 데이터, 디자인을 변경하여 확인 할 수 있습니다.
또한 만들어진 차트는 이미지나 엑셀 파일로 다운로드 가능합니다.
보다 자세한 내용은 다음 예제를 참고해 주세요.
차트 다이얼로그 예제



### 2025.09.01 SPA(React,Vue,Angular) 환경에서 IBSheet 사용을 위한 Loader 업그레이드


기존 SPA 환경에서 IBSheet 사용을 도와주는 IBSheet loader 가 최신 SPA 버젼(React v19,Vue3 , Angular v20) 환경에 맞게 업그레이드 되었습니다.
이와 더불어 각 SPA 환경에서 IBSheet 를 동일한 방법으로 사용할 수 있게 도와주는 IBSheet 컴포넌트와 Typescript 환경에서 IBSheet 객체에 대한 타입을 정의하는 인터페이스까지 추가 되었습니다.
아래 URL을 참고해 주세요.
npm 설치 페이지
- IBSheet Loader (@ibsheet/loader)- IBSheet Component for React v19 (@ibsheet/react)- IBSheet Component for Vuw3 (@ibsheet/vue)- IBSheet Component for Angular (@ibsheet/angular)- IBSheet Component Typescript interface) (@ibsheet/interface)
IBSheet loader 사용법 가이드
- IBSheet loader manual (https://ibsheet.github.io/loader-manual/)
각 환경 별 예제 사이트
- React https://github.com/ibsheet/ibsheet-react-sample.githttps://github.com/ibsheet/loader-react-guide-samples.git- Vuehttps://github.com/ibsheet/ibsheet-vue-sample.githttps://github.com/ibsheet/loader-vue-guide-samples.git- Angularhttps://github.com/ibsheet/ibsheet-angular-sample.githttps://github.com/ibsheet/loader-angular-guide-sample.git






### 2025.08.19 Salesforce LWC 환경 IBSheet 연동 예제가 추가되었습니다.


올해 초 IBSheet 8.3.0.1 version부터  Salesforce 사의 최신 프레임워크 인 Lighting Web Component(LWC) 환경을 지원할 수 있게 업그레이드 되었는데, 이번에 LWC 환경에서 IBSheet의 동작을 확인 할 수 있는 예제 페이지가 추가 되었습니다.

LWC + IBSheet 예제
위 예제에서는 LWC의 대표적인 컴포넌트인 tab이나 아코디언 환경에서 ibsheet , ibchart 를 사용하는 예시를 표현하고 있습니다.
LWC 환경을 고려하시는 고객님들의 많은 관심 부탁드립니다.

### 2025.07.24 IBMap + open street map 연동 기능 추가


그 동안IBMap을 통해 지도차트를 구현하면서 실제 지도 위에 그래프나 레이블 등의 위젯을 표현하고자 하시는 요청이 많았는데, 이번에 open street map 과 연동을 통해 실제 지도 데이터 위에 원하는 인포데이터를 표현하는 기능이 추가되어 소개 드립니다.
[지사와 본사간에 거리를 open street map 과IBMap을 연동하여 표현]
[각 지역 공장의 위치 정보 표현]

예제는 https://www.ibsheet.com/v8/ibmap/html/examples.html  에서 기타기능 > 타일맵 1,타일맵 2를 참고해 주세요.
open street map 연동에 관한 보다 자세한 사항은 여기 포털 사이트로 문의해 주세요.

### 2025.07.07 IBSheet8 웹그리드 소프트웨어 접근성 품질 인증 심사


IBSheet8 제품이 2025년도 소프트웨어 접근성 인증 심사를 통과하였습니다.
접근성이 강조되는 공공 프로젝트에서 보다 안전하게 사용할 그리드 제품을 찾으신다면 IBSheet8을 기억해 주세요.
감사합니다.


## IBSheet를 생성하는 방법을 확인합니다.

### 개발환경 셋팅하기

IBSheet는 javascript 라이브러리이기 때문에 별다른 셋팅 방법이 있지는 않다.파일 복사/붙여 넣기를 하여 적용하면 된다.
1. 배포 폴더 구조IBSheet의 제품 배포 폴더는 아래 그림과 같은 구조로 되어 있다.
2. 배포 파일 복사하기
WEBROOT의 특정 경로에 임의의 폴더를 만든 후 배포 폴더 안의 내용을 복사/붙여넣기 하면 된다.
WEBROOT 이하에 IBSheet 파일이 위치할 임의의 폴더를 만든다.(ex : sheet)sheet 폴더 아래에 배포 폴더의 파일들을 복사/붙여 넣기 한다.

주의해야 할 사항은 배포폴더 내용을 그대로 복사해야 한다.예를 들어 css 폴더를 따로 관리하고 싶어 다른 폴더에 적용 할 경우 엑셀 다운로드/pdf 다운로드시 문제가 발생 한다.[잘못적용한 예] - css 폴더와 fonts 폴더가 없음

3. 엑셀모듈 설정하기화면에 있는 IBSheet의 내용을 엑셀로 다운로드 하거나 엑셀 파일의 내용을 화면의 IBSheet로 로드하기 위해서 필요한 설정이다.엑셀설정하기 부분을 참고 하여서 셋팅하면 된다.





### IBSheet 화면에 그리기

[01] 개발환경 셋팅하기와 같이 개발환경에 제품 복사 후 특정 페이지에 IBSheet를 생성해보자
```javascript


    
        
        My Website
        
    
    
        환영합니다!
        이것은 기본적인 index.html 파일입니다.
    

```
html 코드에서 p 태그 아래에 IBSheet를 그리려면 아래 순서로 코드를 작성해야 한다.1. IBSheet 제품 import 하기IBSheet 관련 파일을 import 한다.
```javascript


    
        
        My Website
        
        
        
        
        

        
        
        
        
        
    
    
        환영합니다!
        이것은 기본적인 index.html 파일입니다.
    

```
각 파일에 대한 설명은 도움말의 파일 구성 부분을 참고 하시기 바랍니다.
2. IBSheet를 그릴 DIV 객체 삽입하기IBSheet 객체를 삽입하기 위해서는 body태그 사이에 IBSheet를 그릴 div 태그가 반드시 존재해야 한다.
```javascript


    
        
        My Website

        
        
        
        

        
        
        
        
    
    
        환영합니다!
        이것은 기본적인 index.html 파일입니다.

        
        
    

```
3. IBSheet.create 함수를 이용하여 초기화 하기브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 시점(sheetDiv가 랜더링이 완료된 시점)에 초기화 구문을 작성하면 된다.자세한 함수 설명은 도움말(IBSheet.create)을 참고 하시기 바랍니다.
```javascript


    
        
        My Website
        
        
        
        
        

        
        
        
        
        
         document.addEventListener("DOMContentLoaded", () => initIBSheet());

		function initIBSheet(){
			const opt = {
				//각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
				Cols:[
					{Header: "이름", Name: "sa_nm", Type: "Text"},
					{Header: "사원번호", Name: "sa_id", Type: "Text", Align: "center"},
					{Header: "비고", Name: "sa_desc", Type: "Lines"}
				]
			};
			
			//시트객체 생성
			IBSheet.create({
				id: "sheet", // 생성할 시트의 id
				el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id
				options: opt // 생성될 시트의 속성
			});
		}

        
       
    
    
        환영합니다!
        이것은 기본적인 index.html 파일입니다.
		
    

```

[최종화면]
[관련 파일 정상 호출] - 개발자도구 >> 네트워크탭에서 아래와 같이 Status가 200으로 되어 있어야 한다.
SEE ALSO객체 생성과 초기화
교육 동영상
각 열(Column) 별 타입(Type) 관련 참고IBSheet8 Appendix Type


### IBSheet.create 함수 호출시 주의 사항(오류 해결방법)


IBSheet.create 함수로 초기화시 주의해야 할 사항은 아래와 같다.1. 시트객체 중복 문제IBSheet.create 시 id값은 반드시 UNIQ 하게 설정해야 한다.
```javascript
IBSheet.create({
    id: "sheet", // 생성할 시트의 id
});
```
id값이 중복으로 설정될 경우 아래와 같은 경고 메세지가 표출 된다.[IBSheet.create({id:'sheet'})] Can't creation : Duplicate sheet_id already exists.  "sheet"
SPA(Single Page Application) 경우 또는 팝업 페이지에서 시트를 항상 새로 그려야 할때 UNIQ 하게 id를 지정 할 수 없다면 dispose 또는 disposeAll 함수로 DOM과 메모리에서 IBSheet 삭제하고 IBSheet.create를 다시 호출 하는 형태로 구현 되어야 한다.
```javascript
let hasSheet = IBSheet.hasSheet("sheet"); //id 값이 sheet인 객체가 있는지 확인

if(hasSheet){ //시트객체가 있으면
    IBSheet["sheet"].dispose(); //IBSheet라는 전역변수에 모든 시트가 배열로 관리된다.
}
```
2. 시트를 그릴 DIV가 없을때 문제IBSheet.create 시 el에 설정한 DIV 객체가 없거나 DIV객체가 DOM 트리를 완성 전에 create 함수를 호출하게 되면 아래 오류를 만나게 된다.IBSheet는 el 에 해당하는 DIV에 html을 append 하는 형태로 동작하기 때문에 반드시 el에 해당하는 DIV가 랜더링이 완료된 시점에 create  함수를 호출해야 한다.
```javascript
IBSheet.create({
    id: "sheet", // 생성할 시트의 id
    el: "sheetDiv" //시트를 생성할 Dom 객체 및 id
});
```
[IBSheet.create({id:'sheet'})] 'el' argument must be HtmlDivElement or HtmlDivElement's id .
3. 비동기 동작 문제IBSheet.create 함수는 비동기로 동작한다.create 함수 호출 이후 시트객체에 접근하는 로직이 있을 경우 pc 성능에 따라 동작을 보장 할 수 없다.
```javascript
IBSheet.create({
    id: "sheet", // 생성할 시트의 id
    el: "sheetDiv", 
    options: opt,
});

sheet.doSearch("/search.do"); //조회 데이터가 표시 될수도 있고 안될수도 있음
```
객체 초기화 하자마자 시트객체에 접근하는 로직을 구현해야 한다면 반드시 onRenderFirstFinish 이벤트에서 작업하거나IBSheet.create 함수가 동기로 동작하도록 sync를 설정 하면 된다.
[sync] - sync 예제IBSheet.create 함수가 동기로 동작한다.조회가 늦으면 IBSheet도 늦게 그려진다.
```javascript
var opt = {
    //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
    Cols:[
        {Header: "이름", Name: "sa_nm", Type: "Text"},
        .....
    ]
};

//시트객체 생성
IBSheet.create({
id: "sheet", // 생성할 시트의 id
el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id
options: opt, // 생성될 시트의 속성
sync: 1          //시트 생성 동기로 동작
});

sheet.doSearch("/search.do");
```
[async ] - onRenderFirstFinish 예제 (추천)IBSheet.create 함수가 비동기로 동작한다.callback 인 onRenderFirstFinish 이벤트에서 시트가 그려지고 난 이후에 처리해야 할 코드를 작성한다.
```javascript
var opt = {
    //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
    Cols:[
        {Header: "이름", Name: "sa_nm", Type: "Text"},
        .....
    ],
    Events :{
        onRenderFirstFinish : function(evtParm) {
            //시트가 다그려진 시점에 조회를 한다.
            evtParm.sheet.doSearch("/search.do"); 
        }
    }
};

//시트객체 생성
IBSheet.create({
id: "sheet", // 생성할 시트의 id
el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id
options: opt // 생성될 시트의 속성
});
```

4. IBSheet 관련 파일 여러번 호출시 문제하나의 DOM에 IBSheet 관련 파일이 한번만 호출되어야 한다.(ibsheet.js, main.css 등)아래 그림과 같이 팝업화면을  dom에 append 하여 보여지는 형태라면 팝업에서 IBSheet 관련 파일을 호출하면 안된다.


### [시작하기]2. html 에서 시트가 위치할 div 설정하기

※ [시작하기] 목록은 메뉴얼 Quick Start에서 보다 자세하게 확인하실 수 있습니다. 
2. html 에서 시트가 위치할 div 설정하기
ibsheet가 위치할 곳에 시트 id를 가진 div를 설정합니다.

```javascript




    IBSheet8 기본 샘플입니다.    
    search
    
    
     




```
이 때 시트의 너비 및 높이를 설정할 수 있습니다.px로 고정적인 크기를 설정할 수 있습니다.



```javascript




    IBSheet8 기본 샘플입니다.    
    search
    

    
         
    




```


▼ ibsheet 제품 목록 및 구조



ibsheet 파일 목록 및 구성(서버모듈 제외)은 아래와 같습니다.
▼ ibsheet 제품 목록 및 구조
각 파일 구성 및 기능은 메뉴얼에서 확인 가능합니다.
IBSheet는 순수 javascript 기반의 데이터 그리드 컨트롤 컴포넌트로, 사용자 PC에 어떠한 설치 없이 HTML, javascript, CSS만을 이용하여 윈도우 어플리케이션에서 볼 수 있는 데이터 그리드의 다양한 기능을 제공합니다.
따라서 ibsheet를 사용하려는 화면에는 위 ibsheet 제품 목록이 import 되어야 합니다.
ibsheet를 사용하려는 화면에 아래와 같이 파일을 추가합니다.(제품의 경로는 사용자가 추가한 위치에 따라 달라질 수 있습니다.)

```javascript

















```
정상적으로 import 시 개발자도구>Network 탭에서 import 한 js 및 css를 확인할 수 있습니다.
▼ 화면에 import 된 제품 파일 확인












### [시작하기] 1. start

1. 시트 import 하기2. html 구문 짜기3. 시트 생성하기4. 시트 컬럼 설정하기5. 데이터 넣고 조회하기6. 공통속성(cfg) 설정하기7. 이벤트 설정하기 ( click 시 alert 표시, )8. 응용)이벤트 설정하기2 ( 시트 하나 더 만들어서 포커스 시 아래 시트 조회시키기 )9. 행추가, 데이터 수정, 삭제, 저장하기



### [시작하기]4. 시트 초기화 설정하기

※ [시작하기] 목록은 메뉴얼 Quick Start에서 보다 자세하게 확인하실 수 있습니다. 4. 시트 초기화 생성하기(options)Create 메소드의 options는 생성될 시트의 속성을 설정합니다.
```javascript
IBSheet.create({
        id: "sheet",
        el: "sheetDiv",
        options: opt, // 생성될 시트의 속성
        data: dataArr,
        sync: 1
    });
```
시트의 전역 속성(Cfg), 시트 각 영역의 공통 기능 설정(Def), 시트의 열 설정(Cols), 시트의 이벤트(Events) 등 시트 객체 구조를 설정할 수 있습니다.
시트 초기화 시 설정할 수 있는 속성은 아래와 같습니다.

▼ 시트 초기화 구문 구조
Def는 시트 각 영역의 공통 기능을 설정합니다.
▼ 컬럼 공통설정으로 편집불가, 행 공통설정으로 중앙정렬 설정
```javascript
var OPT =
{
    "Def" : {
        "Col": {            // 모든 열에 공통 설정으로 편집불가 설정
            "CanEdit": 0
        },
        "Row": {            // 모든 행에 공통설정으로 중앙정렬
            "Align": "Center"
        }
    }

...
```

Cfg는 시트의 전역 속성을 설정합니다.
▼ 다양한 시트의 전역 속성 설정
```javascript
var OPT =
{
    "Cfg" : {                 // 전역 속성 설정
       MaxSort: 2,        // 최대 2개까지만 소팅됩니다.
       Style: "IBMT",    // 해당 시트의 테마를 IBMT로 설정합니다.
        ColorState : 7,  // 시트의 배경색 표현을 설정합니다.
        SeachMode: 2, // 시트의 데이터 조회 모드를 설정합니다.

        ......
     },

...
```

Cols는 시트의 각 열에 대한 정의를 할 수 있습니다.(열의 이름, 유형(Type), 포맷(Format)등을 설정)열의 "Type"과 "Name" 속성은 반드시 설정되어야 합니다.
▼ 각 열에 대한 정의와 설정
```javascript
var OPT = {
        Cols:[
            {Header: "컬럼1", Name: "colName1", Type: "Text"},
            {Header: "컬럼2", Name: "colName2", Type: "Text", Align: "center"}
        ]
    };
```


Events는 시트의 각 열에 대한 정의를 할 수 있습니다.(열의 이름, 유형(Type), 포맷(Format)등을 설정)열의 "Type"과 "Name" 속성은 반드시 설정되어야 합니다.
▼ 각 열에 대한 정의와 설정
```javascript
var OPT = {
        Cols:[
            {Header: "컬럼1", Name: "colName1", Type: "Text"},
            {Header: "컬럼2", Name: "colName2", Type: "Text", Align: "center"}
        ]
    };
```














ALSO

### [시작하기]5. 데이터 조회하기

※ [시작하기] 목록은 메뉴얼 Quick Start에서 보다 자세하게 확인하실 수 있습니다. 4. 데이터 조회하기
IBSheet에서 데이터를 조회하는 메소드는 3가지가 있습니다.
1) doSearchajax 통신을 통해 json형식의 데이터를 가져와 시트에 로드합니다.ajax 통신 모듈을 탑재하고 있으며, 서버의 데이터를 조회하여 json 형식으로 가져옵니다.조회된 데이터는 시트에 표시됩니다.
데이터 규격은 메뉴얼을 참조해주세요.
```javascript
// GET 방식으로 데이터 조회
sheet.doSearch("./insaAppMain.do", "dept_cd=031&position_cd=A0", "GET");

// POST 방식으로 데이터 조회
var opt = {
  url: "./insaAppMain.do",
  param: {"dept_cd": 031, "position_cd": "A0"},
  method: "POST",
  reqHeader: {"Content-Type":"application/json"}
};
sheet.doSearch(opt);
```

▼ doSearch로 조회 시 서버에서 응답받은 데이터를 시트에 로드한다.

2) doSearchPagingajax 통신을 통해 json형식의 데이터를 가져와 시트에 로드합니다.페이징 조회를 사용하는 시트에서만 사용 가능합니다.(SearchMode : 3,4,5)단, (cfg)PageLength에서 설정한 건수 만큼 서버에서 데이터를 만들어 리턴되면 해당 건수만 가져옵니다.반드시 리턴된 JSON 에 Total 값이 있어야 하며, Total 값에 전체 데이터의 건수를 갖고 오면 해당 건수만큼 페이지를 나누어 조회 됩니다.
데이터 규격은 메뉴얼을 참조해주세요.
```javascript
//SearchMode가 3이거나 4이거나 5인 경우 조회 함수
var opt = {
  "url":"/cust/getCustInfo.do",
  "param":"custId=92123&empId=24342",
  "method":"POST",
  "beforeSend":function (rtn) {
    console.log(rtn.sheet);  // 시트 객체
   },
  "callback":function (rtn) {
    var rtnData = JSON.parse(rtn.data);
    alert("전체 데이터 건수 :" + rtnData["Total"]);
  }
};
sheet.doSearchPaging(opt);

//조회 데이터 예시
{
  "Total":254141    //전체 데이터 건수
  "Data":[
    {},...,{}   //PageLength에서 설정한 건수만큼 조회
  ]
}
```
▼ doSearchPaging으로 페이징 조회 시 서버에서 보내준 Total 값 확인
▼ 페이징을 넘길 때마다 (cfg)PageLength에서 설정한 건수 만큼 다음 페이지의 데이터를 서버에서 가져와 시트에 로드(ibpage는 서버로 전송할 페이지 변수입니다)




3) loadSearchDatajson 형식의 데이터를 가져와 시트에 로드합니다.ajax 통신 모듈이 탑재되어있지 않으며, 단순히 존재하는 json 데이터를 시트에 로드해주는 기능만 합니다.
데이터 규격은 메뉴얼을 참조해주세요.
```javascript
var DATA = {"data":[
    {"TextData":"홍길동","IntData":"08212"},
    {"TextData":"허균","IntData":"07417"},
    {"TextData":"홍판서","IntData":"02600"},
]};

//시트에 데이터를 조회합니다.
sheet.loadSearchData( DATA );
```
▼ DATA 의 데이터를 시트에 로드한다

(Cfg)SearchMode에서 시트의 데이터 조회 모드를 설정할 수 있습니다.doSearchPaging 은 SearchMode : 3,4,5 에서만 사용 가능합니다.



------------------------------------------------------------------------------

사용자 입장에서 시트에 데이터를 조회되는 방식은 크게 두가지가 있습니다.
1) 페이지 로딩 시 데이터가 자동 조회2) 페이지 로딩 후 [조회] 버튼을 눌러 데이터 조회

1) 페이지 로딩 시 데이터가 자동 조회
시트가 생성될 때 정적 데이터를 가지고 조회할 수 있습니다.
```javascript
IBSheet.create({
        id: "sheet",
        el: "sheetDiv",
        options: opt,
        data: [ //시트의 정적데이터 설정
                  {"TextData":"기본데이터1","ComboData":"01"},
                  {"TextData":"기본데이터2","ComboData":"02"}
                ]
    });
```
하지만 정적 데이터는 조회와 관련된 이벤트가 발생하지 않습니다.


시트가 생성과 동시에 데이터 조회를 하고 싶은 경우, 최초로 시트의 생성이 완료된 onRenderFirstFinish 이벤트를 활용할 수 있습니다.데이터 없이 시트 생성 함수(IBSheet.create)를 호출한 경우, onRenderFirstFinish 이벤트에서 시트에 데이터를 넣을 수 있습니다.
```javascript
var data = [
    {"chgrDptNm":"전략기획","taskId":"100201","actnEndTm":"190000","ordr":"1","preTaskId":"100200"},
    {"chgrDptNm":"실행예산","taskId":"100204","actnEndTm":"170000","ordr":"2","preTaskId":"100200"}
];

options.Events = {
    onRenderFirstFinish: function(evtParam){
        // 시트에 데이터를 넣습니다.
        evtParam.sheet.loadSearchData(data);
    }
}
......


//시트객체 생성
IBSheet.create({
    id: "sheet",
    el: "sheetDiv",
    options: opt,
    //data: data, // 정적데이터를 선언하지 않음
});
```

이 경우, 시트 조회와 관련된 이벤트가 전부 발생합니다.
- 조회/데이터 로딩 과정에서 다음과 같은 이벤트가 발생합니다. (중간에 렌더링함수는 제외)이벤트명기능설명1onReceiveData데이터 파싱 직전에 발생합니다. 로드 될 데이터를 조작할 수 있습니다.2onBeforeDataLoadjson 데이터 파싱 후 발생합니다. 파싱된 json 데이터를 조작할 수 있습니다.3onDataLoad화면에 렌더링 전에 발생합니다.4onSearchFinish데이터에 대한 렌더링이 끝나고, 모든 조회 절차가 끝난 후에 발생합니다.



2) 페이지 로딩 후 [조회] 버튼을 눌러 데이터 조회
[조회] 버튼을 눌렀을 때의 클릭 이벤트에서 데이터를 조회하는 메소드를 실행합니다.

```javascript

  조회
  추가
  저장
  엑셀다운


.......

function doAction(str){
	switch(str){
		case "search":
		//데이터 조회
		sheet.doSearchPaging({
			url: "",
			param: $(document.frm).serialize(),
			cPage: 1,
			sync: 0,
			callback:function (rtn) {
			//	console.log("doSearchPaging_callback");
			  }
		});
		break;
............
```
 

ALSO

### IBSheet8 객체 생성

1. 관련 파일 import 하기아래와 같이 기본적인 js,css 파일을 import 합니다.
```javascript






















   
   

```
2. IBSheet8 객체 생성 및 초기화 하기IBSheet.create() 함수를 통해 IBSheet8 객체를 생성합니다.
```javascript
function PageLoad() {
  //IBSheet8 객체 초기화 속성 설정
  var OPT = {
    // 기본 기능 설정
    Cfg:{
      SearchMode: 0, // FastLoad
      HeaderMerge: 3, //헤더 영역 머지 모드 선택
    },
    //각 열(Column)에 대한 정의 (이름, 유형(Type), 포맷(Format)등을 설정)
    //열(Color)의 "Type"과 "Name" 속성은 반드시 설정되어야 합니다.
    Cols:[
      {Header: "ID", Name: "userid", Type: "Text", Align: "center", CanEdit: 0},
      {Header: "사용자 이름", Name: "userNm", Type: "Text", Align: "center"},
      {Header: "성별", Name: "gender", Type: "Enum", Enum:"|남|녀", EnumKeys:"|M|F"},
      {Header: "입사일", Name: "edate", Extend:IB_Preset.Ymd },
      {Header: "나이", Name: "age", Type: "Int", Format: "#,### 세"}
    ],
    Events: {
      //시트가 생성되어 렌더링 된 이후, 한 번만 동작하는 이벤트에서 데이터 조회
      //다중으로 시트 생성 시에는 모든 시트가 생성 된 후 한 번만 동작하는 이벤트인
      //onRenderFirstFinishAll를 이용하여 데이터를 조회하여 주십시오.
      onRenderFirstFinish: function(evtParam) {
        //조회 api로는 loadSearchData와 doSearch, doSearchPaging이 있습니다.
        evtParam.sheet.loadSearchData(
          [
            {userid:"2170022", userNm:"홍길동", gender:"M", edate:"20010302", age:48},
            {userid:"981065", userNm:"허심청", gender:"F", edate:"20010302", age:23},
          ]
        );
      }
    }
  };

  // IBSheet8 객체 생성, 비동기
  IBSheet.create({
    id: "sheet",        // 시트 객체 ID
    el: "sheetDiv",     // 시트를 생성할 DIV객체 ID
    options: OPT       // 초기화 구문 변수
   //,sync: 1 // 동기로 시트 생성
  });

/*IBSheet.create 이후 조회를 하면 데이터 바인딩을 보장하지 못한다.
 IBSheet.create가 비동기로 동작하기 때문에 onRenderFirstFinish 이벤트에서 조회 하거나 create 
함수에 sync:1을 설정하여 동기로 동작하게 해야 한다.
*/
sheet.doSearch("search.html");
}
```
생성된 IBSheet8 객체 모습SEE ALSO객체 생성과 초기화
교육 동영상
각 열(Column) 별 타입(Type) 관련 참고IBSheet8 Appendix Type





## IBSheet8 헤더 생성 및 설정 내용을 확인합니다.

### 헤더(Header) 설정하기

1) 헤더(Header) 생성IBSheet8의 헤더(Header)는 열(Column) 생성 시 (Col)Header 속성에 부여한 값에 의해 결정됩니다.(Col)Header 속성의 값을 문자열로 설정하시면 단일 헤더(Header) 행이 만들어집니다.
```javascript
var initSheet = {
  "Cols": [
    //Header를 문자열로 설정
    {Header: "예상현액", Name: "A", Type:"Int"},
    {Header: "전일까지", Name: "B", Type:"Int"},
    {Header: "당일", Name: "C", Type:"Int"},
    {Header: "누계", Name: "D", Type:"Int"}
  ]
}
```

▼ 한 줄 헤더 행


두 개 이상의 헤더(Header) 행을 사용하려면 IBSheet8 생성 시 Header 속성 값을 배열로 선언합니다.
```javascript
var OPT = {
  Cols: [
    //Header를 배열로 설정
    {Header: ["예상현액", "예상현액"], Name: "A", ...},
    {Header: ["지출액", "전일까지"], Name: "B", ...},
    {Header: ["지출액", "당일"], Name: "C", ...},
    {Header: ["지출액", "누계"], Name: "D", ...}
  ]
}
```

▼두 줄 헤더(Header) 행 생성
(Col)Header 속성 값을 object로 선언하여 헤더(Header)에 세부적인 속성을 설정 할 수 있습니다.

```javascript
var OPT = {
  Cols :  [
    {Header: ["예상현액", "예상현액"], Name: "A" },
    //Header에 Color, TextColor 설정
    {Header: ["지출액", {Value:"전일까지",Color:"#F7CCAC",TextColor:"#3A3845"}], Name: "B" },
    //Header에 HtmlPostfix 설정
    {Header: [{Value:"지출액", HtmlPostfix:"확인"}, "당일"], Name: "C" },
    {Header: ["지출액", "누계"], Name: "D" }
  ]
}
```

▼ 헤더 셀에 속성 추가( 배경색 설정, 버튼 생성)


2) 헤더(Header) 수정헤더(Header) 행의 id는 최상단을 기준으로  "Header", "HR1" , "HR2", "HR3" ... 순으로 자동 부여됩니다.생성된 헤더(Header) 행은 getRowById()함수를 통해 얻을 수 있습니다.

```javascript
//최상단 헤더행
var hr = sheet.getRowById("Header"); 

//최상단 헤더 행 배경색을 붉은색으로 변경
sheet.setAttribute( hr, null, "Color", "#FF0000" );

//두번째 헤더행
var hr1 = sheet.getRowById("HR1");

//두번째 헤더행 "C" 컬럼의 내용을 '금일'로 변경
sheet.setValue( hr1, "C", "금일" );
```

▼ 헤더 행의 속성, 타이틀 변경 


3) 헤더(Header) 병합(Cfg)HeaderMerge 속성을 이용하여 헤더(Header) 영역의 병합 규칙을 설정 할 수 있습니다.

```javascript
var OPT = {
  Cfg: {
    HeaderMerge: 3 //헤더 열 우선 병합
  },
  Cols: [
    {Header: ["예상현액", "예상현액"], Name: "A", ...},
    {Header: ["지출액", "전일까지"], Name: "B", ...},
    {Header: ["지출액", "당일"], Name: "C", ...},
    {Header: ["지출액", "누계"], Name: "D", ...}
  ]
}
```
▼ 헤더 열 우선 병합
























### 다양한 헤더 메뉴(Menu)기능 사용하기

헤더 메뉴
헤더 셀에서 마우스 우클릭을 통해 메뉴를 띄울 수 있습니다.컬럼 표시 여부, 컬럼 정보 저장 여부, 필터행 여부는 ibsheet-common.js에서 공통으로 제공하는 기능입니다.화면 개발 시 보여지는 메뉴의 구성을 추가/삭제하여 설정할 수 있습니다.
[헤더 메뉴]

1) 다중컬럼 보이기/감추기
컬럼의 표시 여부를 설정하여 일부 컬럼을 감추거나 보이게 할 수 있습니다.
[다중컬럼 감추기/보이기]


헤더가 여러줄인 경우, 트리 형태로 표시됩니다.
[헤더가 여러줄인 경우 다중컬럼 감추기/보이기]

단, 멀티레코드 형태의 그리드에서는 다중컬럼 보이기/감추기 기능을 지원하지 않습니다.[멀티레코드 그리드에서는 다중컬럼 보이기/감추기 기능 메뉴가 노출이 되지 않음]


2) 컬럼 정보 저장
시트의 정보를 로컬/세션 스토리지에 저장할 수 있습니다.
[컬럼 순서 수정 후 새로고침 시 저장한 순서로 생성됨]

컬럼 정보 저장을 취소하면 새로고침 시 초기 설정의 시트를 확인할 수 있습니다.


3) 필터행 생성

헤더 아래 필터행을 생성하거나 제거할 수 있습니다.
[필터행 생성/제거]



4) 업무에 따라 메뉴 커스텀 기능
헤더 우클릭 시 나오는 헤더 메뉴는 시트 공통설정 파일인 ibsheet-common.js에 설정되어 있습니다.ibsheet-common.js의 아래 부분을 수정하시면 업무에 따라 메뉴를 커스텀하여 공통으로 설정할 수 있습니다.

```javascript
//ibsheet-common.js 의 공통설정 부분

_IBSheet.CommonOptions = {
  Cfg: {

    ... 

  },
  Def: {
    Header: { //헤더 영역 행에 대한 설정
      Menu: {
        Items: [
          {
            "Name": "컬럼 정보 저장"
          },
          {
            "Name": "컬럼 정보 저장 취소"
          },
          {
            "Name": "*-"
          },
          {
            "Name": "필터행 생성"
          },
          {
            "Name": "필터 감추기"
          }
        ],
        "OnSave": function (item, data) {

...
```
[Def > Header > Menu > Items에서 공통 Menu 설정 가능]

ibsheet-common.js 의 CommonOptions 설정 부분에서 Def > Header > Menu > Items 부분을 수정하시면 기존 메뉴를 숨기거나, 원하시는 메뉴 기능을 추가하실 수 있습니다.Menu의 OnSave 함수에서 구체적인 기능을 설정하실 수 있습니다.  

```javascript
Def: {
    Header: { //헤더 영역 행에 대한 설정
      Menu: {
        Items: [
          {
            "Name": "엑셀 다운로드"
          }
        ],
        "OnSave": function (item, data) {
          var sheet = this.Sheet.Dialog ? this.Sheet.Dialog : this.Sheet;
          if (item) {
            var col = item.Owner.Col;
            switch (item.Name) {
              case '엑셀 다운로드':
                sheet.down2Excel({ "sheetDesign":1, //시트 디자인 적용
                                    "merge":1, //시트 머지 적용
                                    "downCols":"Visible" //보이는 컬럼만 다운
                                })
                break;
            }
          } else if(data) toggleCols(sheet, data);
        }
      }
    },
```
[공통 Menu 기능으로 엑셀 다운로드 기능 추가]

[헤더 우클릭 시 엑셀 다운로드 메뉴가 나타남]











### 헤더 체크박스(checkbox) 설정 하기

타입이 Bool인 열의 헤더 셀에 체크박스 설정하여 전체 데이터를 체크하거나 언체크 하는 방법을 알아봅니다.
1. 모든 Bool타입 열의 헤더 셀에 체크박스 표시하기(Cfg)HeaderCheck 속성을 1로 설정하면 모든 Bool 타입 열에 헤더 셀에 체크박스가 표시됩니다. 
```javascript
const opt = {
  Cfg: {
    HeaderCheck: 1
  },
  Cols: [
   // 헤더 타이틀 왼쪽에 체크박스가 표시됩니다.
   {Header:"선택", Type: "Bool", Name: "CHK", Width: 60 },
    ...
  ]
};
IBSheet.create({
  id: "mySheet",
  el: "sheetDIV",
  options: opt
});
```
2. 일부 열의 헤더 셀에만 체크박스 표시하기(Col->Header)HeaderCheck 속성을 통해 특정 열에만 헤더 체크박스를 표시하거나 표시하지 않을 수 있습니다.
```javascript
// 특정 열의 헤더에 체크 박스 표시
const opt = {
  Cols: [
    {Header:{Value:"선택", HeaderCheck: 1 }, Type: "Bool", Name: "CHK" , Width: 60 },
    ...
  ]
}

// 특정 열의 헤더에만 체크 박스 제거
const opt = {
  Cfg: {
    HeaderCheck: 1      // 모든 Bool 타입 열의 헤더 셀에 체크박스 표시
  },
  Cols: [
    ...
    // Header.HeaderCheck 가 우선순위가 높아서 아래 열에는 헤더셀에 체크박스가 표시되지 않음.
    {Header:{Value:"선택", HeaderCheck: 0 }, Type: "Bool", Name: "CHK" , Width: 60 },
    ...
  ]
}

IBSheet.create({
  id: "mySheet",
  el: "sheetDIV",
  options: opt
});
```


### 헤더(Header)의 checkbox를 가운데 정렬하는 방법

Type: "Bool" 인 컬럼을 생성 시, HeaderCheck(Col) 속성을 통해 헤더(Header)에 전체 선택 checkbox를 생성 할 수 있습니다.
```javascript
//Header에 IconAlign을 사용
{
  "Header": {
    "Value": "체크박스(Bool)", //헤더 Text 설정
    "HeaderCheck": 1, //헤더(Header)에 체크박스 생성
  },
  "Type": "Bool",
  "Name": "CheckData",
  "Width": 80,
  "Align": "Center",
  "CanEdit": 1
}
```

[전체 체크박스 설정]

이때 생성되는 checkbox는 헤더 타이틀과 같이 표현되기 위해 약간 좌측에 표시됩니다.만약 헤더의 Text를 빈 값으로 설정한 뒤, 체크박스 아이콘을 가운데 정렬하려면 IconAlign(Cell) 을 설정 하시면 됩니다.

```javascript
//Header에 IconAlign을 사용
{
  "Header": {
    "Value": "", //헤더의 Text를 빈값으로 설정
    "HeaderCheck": 1, //헤더(Header)에 체크박스 생성
    "IconAlign": "Center" //체크박스 가운데 정렬
  },
  "Type": "Bool",
  "Name": "CheckData",
  "Width": 80,
  "Align": "Center",
  "CanEdit": 1
}
```

[전체 체크박스 아이콘 가운데 정렬] 



### 헤더(Header)의 Filter행 사용 방법

Cfg.ShowFilter : 1 또는 ShowFilterRow 메서드를 통해 필터 기능을 사용할 수 있습니다.

1. "Type" : "Text"열(Column)의 Filter 행에서 Menu 띄우기"Type" : "Text" 인 열(Column)은 필터 셀에서 입력한 글자를 기준으로 필터링 됩니다.[Text 타입에서 기본 필터링]

이를 excel 처럼 열(Column)의 내용을 기준으로 Menu로 표시하려면 다음과 같이 설정하시면 됩니다.
```javascript
// Defaults를 설정하여 필터행 변경
var options = {
  "Cfg":{},
  "Cols":[ ... ],
  "Filter": {
    "DELIVERYDEPTNAME": { //<-- 열(Column) Name
      "Button": "Defaults",
      "Defaults": "|*Rows"
    }
  }
}
```

[Text 타입에서 Defaults를 설정하여 필터행 변경]2. "Type" : "Enum"열(Column)의 Filter 행에서 Menu 띄우지 않기"Type" : "Enum" 인 열(Column)은 필터에서 Menu 객체가 열리고 아이템을 선택하여 필터링 하게 됩니다.[Enum 타입에서 기본 필터링]


"Type" : "Enum" 열(Column)에서 Menu를 띄우지 않고 입력한 글자로 검색하려면 Filter 셀의 타입을 변경하면 됩니다.
```javascript
//필터링 셀의 타입을 Text로 변경
var options = {
  Cfg:{},
  Cols:[...],
  Filter: {
    //Enum 열(Column) Name
    "ComboData": {  
      "Type": "Text"
    }
  }
}
```

[Enum 타입에서 Type을 변경해서 필터링 변경]

3. "Type" : "Date" 또는 Button 설정한 열(Column)에서 Filter행에 아이콘 표시 하지 않기"Type" : "Date"  또는  Button을 설정한 열(Column)은 기본적으로 Filter 행에 아이콘이 표시됩니다.[Date 타입에서 기본 필터링]
"Type" : "Date" 열(Column)에서 달력 아이콘을 없애려면 Button 속성을 변경하면 됩니다.
```javascript
//달력 아이콘 없애기
var options = {
  Cfg:{},
  Cols:[...],
  Filter: {
    //날짜 열(Column) Name
    "YmdData": {  
      "Button": ""
    }
  }
}
```

[필터행에 달력아이콘이 없어짐]



### 소팅 관련

소팅 관련

### Icon : Expand 관련 내용

ibsheet.com 열고정 예제에서
{"Header": ["인구",        {"Value": "한국인","Icon": "Expand","ExpandCols": "KoMale,KoFemale"},"계"],"Type": "Int","Name": "KoTotal","Radio": 1,"Width": "120","Align": "Right","CanEdit": 1,"RawSort": 1,"Formula": "KoMale + KoFemale"},   
이 내용 작성하기
사진이랑 동작까지 

### 헤더가 여러줄일 때 맨 아래 헤더를 클릭했을 때만 소팅(sort)하고 싶다.

시트의 헤더(Header)를 클릭 시 컬럼이 정렬(sort)됩니다.
헤더가 여러줄인 경우, 상위 헤더를 클릭했을 때 하위 헤더 중 가장 왼쪽에 있는 컬럼이 소팅됩니다.[기본동작 : 상위 헤더 소팅 시 하위 중 가장 왼쪽에 있는 컬럼이 소팅됨]

만약 헤더가 여러줄일 때 상위 헤더 소팅을 막고 맨 하위 헤더로만 소팅하고 싶다면, 아래와 같이 설정해줄 수 있습니다.
```javascript
onClick:function(evtParam){
    if(evtParam.row.Kind == "Header"){
      var endRow = sheet.getMergeRange(evtParam.row, evtParam.col)[2];
      var lastHeader = sheet.getHeaderRows()[sheet.getHeaderRows().length-1];
      //클릭한 헤더가 가장 하위를 포함하는 경우에만 소팅이 되어야 한다.
      if(endRow.id != lastHeader.id){
        return true;
      }
    }
  }
```
마우스로 셀 내부를 클릭했을 때 호출되는 onClick 이벤트에서 가장 하위의 헤더를 포함하는 경우에만 소팅이 될 수 있도록 설정합니다.1(true)를 리턴 시 클릭에 의한 기본 동작을 막습니다.[가장 하위 헤더를 포함하는 경우에만 소팅됨]

머지가 되어있는 경우, 머지된 영역의 id값을 비교하여 소팅 유무를 구분합니다.아래 예제에서 확인해보실 수 있습니다.
예제) https://jsfiddle.net/Luvp1tqm/





















## 합계,필터행 등 각 행에 대한 세부기능을 확인합니다.

### IBSheet8에서 행(Row)객체 얻기

IBSheet8에서는 다양한 메서드를 통해 행(Row)객체를 얻는 방법을 제공하고 있습니다.
- getFocusedRow : 현재 포커스가 있는 행(Row) 객체를 리턴- getRowById : ID을 통한 행(Row) 객체 리턴 (헤더(Header)행이나 필터(Filter) ,합계행(FormulaRow) 을 얻을 때 사용)- getRowByIndex : index를 통한 데이터 행 객체 리턴 (첫번째 데이터 행을 1부터 시작)- getDataRows : 전체 데이터 행 객체를 배열로 리턴- getSubTotalRows : 생성된 소계/누계 행 객체를 배열로 리턴
그 외 행(Row)객체를 리턴하는 메서드들getFirstRow, getLastRow, getNextRow, getPrevRow, getShownRows, getChildRows, getSelectedRows, getHeaderRows, getPrevVisibleRow, getPrevSiblingRow등
행(Row) 객체 안에는 해당 행의 데이터와 행의 상태(Added,Changed,Deleted), 변경 이력 등 다양한 정보를 갖고 있습니다.






### 행(Row) 높이 변경하는 방법

행(Row)의 높이는 (Def.Row)Height를 설정하여 변경할 수 있습니다.
그런데, 단순히 행의 높이 뿐만 아니라, 시트에 표시되는 아이콘의 크기도 행 높이에 따라 달라져야 하므로, (Cfg)Size (default: Normal - 최소 행의 높이:30px) 값을 이용하여 디자인 요소를 같이 변경해야 합니다.
Size 값이 동적으로 변경되어야 하는 경우, setSize를 이용하여 처리할 수 있습니다.
[Size:"Tiny" 설정 시][Size:"Normal" 설정 시 - default][Size:"Big" 설정 시]






### 데이터의 입력, 수정, 삭제에 따른 상태 값 확인

IBSheet8은 행의 상태에 따라 배경색이 표시됩니다.각 색상은 css/(테마)/main.css 파일에 설정된 값으로 적용됩니다.
아래 색상은 defaults 테마를 기준으로 작성된 화면입니다.(테마별 색상값 별도)구분색상클래스 명입력연한파랑색(#eee6fa).IBColorAdded수정연한노란색(#ffffd6).IBColorChanged삭제연한빨간색(#ffe6e0).IBColorDeleted
입력
addRow 또는 addRows 메서드를 이용합니다. 
addRow를 통해 추가된 행은 내부적으로 Added 속성 값을 1로 갖게 됩니다.

수정값이 수정되면 Changed 속성 값을 1로 갖게 됩니다. 
값을 원래 값으로 복원하면 자동으로 속성이 제거됩니다.

삭제
deleteRow 또는 deleteRows 메서드를 이용 합니다. 
deleteRow 가 적용된 행(Row)은 내부적으로 Deleted 속성 값을 1로 갖게 됩니다.
deleteRow는 지정한 행의 상태를 삭제로 변경하는 메서드로, 상태 값만 바뀔 뿐 바로 삭제되지 않으며, 
변경된 데이터를 추출하는 메서드(getSaveJson, getSaveString, doSave) 호출시 자동으로 STATUS 값이 서버로 전달됩니다.

```javascript
var saveData = mySheet.getSaveJson();console.log(saveData);
```

saveData 내용
{  "data":[    {      "id":"AR51",      "Def":"R",      "Parent":"",      "Next":"AR3",      "Prev":"AR2",      "SEQ":3,      "sCheck":"0",      "sNation":"한국",      "sTitle":"범죄도시",      "sShare":24,      "sCount":343,      "sDate":"",      "STATUS":"Added"    },    {      "id":"AR3",      "SEQ":4,      "sCheck":"0",      "sNation":"미국",      "sTitle":"도리를 찾아서123",      "sShare":16.6,      "sCount":1136765,      "sDate":"20160706",      "STATUS":"Changed"    },    {      "id":"AR4",      "SEQ":5,      "sCheck":"0",      "sNation":"미국",      "sTitle":"레전드 오브 타잔",      "sShare":10.6,      "sCount":692133,      "sDate":"20160629",      "STATUS":"Deleted"    }  ]}
acceptChangedData 와 같은 메서드를 사용해 데이터 내에 변경된 내용을 반영(Clear)시키면 Deleted 상태의 행은 화면에서 제거 됩니다.

상태컬럼 만들기
위 이미지에서 상태, 삭제 열(Column)을 사용하려면 ibsheet-common.js에 정의된 IB_Preset.Status, IB_Prest.DelCheck 값을 Extend 속성을 통해 설정해야 합니다.

예제) https://jsfiddle.net/epsf0xb6/
removeRow와 removeRows 함수
지정한 행의 데이터 로우 객체가 삭제되고 화면에도 즉시 반영됩니다.
저장과 관련된 메서드(getSaveJson, getSaveString, doSave) 호출시 데이터는 추출되지 않습니다.[관련 메서드]- hasChangedData : 데이터 내에 변경된 내용(Added,Changed,Deleted )이 있는지 확인합니다.- getRowsByStatus :  특정 상태(Added,Changed,Deleted)의 행들을 배열로 리턴합니다.- getChangedData : 시트 내에 변경된 내용(Added,Changed,Deleted )를 json 형식의 문자열로 추출합니다.- acceptChangedData : 시트 내에 변경된 내용(Added,Changed,Deleted )을 반영(clear)합니다.
- getRowStatus : 특정 행의 상태값을 반환합니다.(common 1.0.27부터 기능추가)

### fixed 고정에 관하여

fixed 고정에 관하여

### 페이지네이션 / 건수정보  행 설정하기(InfoRow)

(Cfg)InfoRowConfig 속성을 통해 조회 된 데이터 개수나 페이지네이션을 시트의 상단이나 하단에 표시할 수 있습니다. 
```javascript
const OPT = {
  "Cfg": {
    "InfoRowConfig": {
       "Space": "Top",                           // InfoRow 위치 (Top or Bottom)
       "Visible": 1,                                // 보임 여부
       "Layout": ["Paging", "Count"],   // 표시할 내용 (Paging, Count, SummaryLabel 등)
        "Format": "[BOTTOMDATAROW / TOTALROWS]"  // Count에 표시되는 내용 (메뉴얼 참고)
     }
  },
  "Cols": [ ... ]
};
```
InfoRow 응용- Layout 속성은 배열 형태로 값의 개수만큼 InfoRow에 Cell 이 생성됩니다.
```javascript
const OPT = {
  "Cfg": {
    "InfoRowConfig": {
      ... 
      "Layout": ["가","나","다","마","바"]
    }
  }
}
```
- Layout에는 단순 텍스트가 아닌 Cell 속성을 설정 할 수 있습니다.
```javascript
const OPT = {
  "Cfg": {
    "InfoRowConfig": {
      ... 
      "Layout": [
        "Count",  
        {"Type":"Text", "Align":"Right", "Value":"확인완료"} ,
        {"Type":"Bool","CanEdit": 1, "RelWidth":0, "Width": 30}
      ], 
    }
  }
}
```
- InfoRow 행은 기본적으로 CanEdit:0, CanFocus:0 입니다. 따라서 해당 행에서 편집 가능한 셀을 만들고자 하실 때는 반드시 CanEdit: 1, CanFocus: 1 속성을 추가하셔야 합니다.
```javascript
const OPT = {
  "Cfg": {
    "InfoRowConfig": {
      ... 
      "Layout": [
        "Count",  
        {"Type":"Text", "Align":"Right", "Value":"사이즈 선택"} ,
        {"Type":"Enum", "Enum":"|XS|S|M|L|XL|XXL", "CanFocus":1, "CanEdit": 1, "RelWidth":0, "Width": 80}
      ],  
    }
  }
}
```
- Count (조회 데이터 개수 정보)를 InfoRow가 아닌 시트 외부에 표시하고 자 하는 경우에는 setCountInfoElement 함수를 사용하세요.- 시트 내에 표시되는 페이지네이션 대신 goToPage , goToNextPage 와 같은 함수를 통해서 외부 라이브러리를 사용하실 수도 있습니다. 다음 예제에서 확인해 보세요.

### ✒️Solid 행에 Type:'Empty' 설정 시 공백으로 들어간다

https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/solid

solid 예제에는 존재하는데 설명이 있는 부분이 없음.포탈에 게시글 등록이 필요함

## 열의 특수한 기능과 관련 내용을 확인합니다.
(Type 등)

### 열 (Column)의 너비

열(Column)의 너비는 다음 속성들을 통해 제어할 수 있습니다.
1. (Col) Width : 열(Column)의 기본 너비 정의2. (Col) RelWidth : 상대적 너비 (각 열의 너비 설정 후 남는 너비를 비율에 따라 늘리거나 줄일 수 있습니다.)3. (Col) MinWidth : 최소 너비 (줄일 수 있는 최소 너비를 정의합니다.)4. (Col) MaxWidth : 최대 너비 (늘릴 수 있는 최대 너비를 정의합니다.)5. (Col) CanResize : 사용자 너비 조절 가능 여부6. (Cfg) FitWidth : 우측에 더미 열(Column)을 추가 여부

다음 예제를 참고 하세요.
```javascript

var OPT = {
  Cols:[
    {Header: "No", Name: "SEQ", Type: "Int", "Width": 60},
    {Header: "제목", Name: "subject", Type: "Text", "Width": 150},
    {Header: "작성자", Name: "userId", Type: "Text", "Width": 100, "Align": "center"},
    {Header: "작성일", Name: "rdate", Type: "Date", "Width": 90, "Align": "center" },
    {Header: "추천수", Name: "rcmnd", Type: "Int", "Width": 60, "Align": "center"},
  ],
  Events: {
    onRenderFirstFinish: function(evtParam) {
      evtParam.sheet.loadSearchData(DATA);
    }
  }
};

var DATA = [
  {subject:"금일 코스피,코스닥 현황 분석", userId:"렘브란트", rdate:"20220302", rcmnd:48},
  {subject:"하락장 강세 종목 정리", userId:"세잔", rdate:"20220228", rcmnd:110},
];

// IBSheet8 생성 함수
IBSheet.create({
  id: "sheet",        // 객체 ID
  el: "sheetDIV",     // 생성할 DIV객체 ID
  options: OPT       // 초기화 구문 변수
});




```



1. (Col) Width 속성각 컬럼의 너비를 설정하는 속성입니다.이 속성을 설정하지 않을 경우 헤더의 Text 길이에 맞춰 시트가 생성됩니다.
이후 데이터를 조회 하게 되면 조회 데이터의 길이에 맞춰 헤더가 늘어나게 됩니다.

2. (Col) RelWidth 속성위와 같은 IBSheet8 객체에서 "제목" 열(Column) 생성 부에 "RelWidth" 속성을 1로 추가 설정하면 다음과 같이 생성됩니다.

```javascript
{Header: "제목", Name: "subject", Type: "Text", "Width": 150, "RelWidth":1}
```
RelWidth 속성 값 1은 남는 너비에 대한 비율을 의미합니다.만약 "제목"열(Column) 생성 부에 "RelWidth" 속성을 2로 설정하고, "작성자" 열(Column) 생성 부에 "RelWidth" 속성을 1로 설정하면 남는 너비를 두 개 열(Column)에서 2:1 로 나누어 가지게 됩니다. 

```javascript
{Header: "제목", Name: "subject", Type: "Text", "Width": 150, "RelWidth":2},
{Header: "작성자", Name: "userId", Type: "Text", "Width": 100, "RelWidth":1}
```

위와 같이 RelWidth 속성을 사용하는 열(Column)의 너비는 IBSheet8 객체의 너비 변화에 따라 동적으로 늘어나거나 줄어들게 됩니다.

3. (Col) MinWidth 속성
IBSheet8 객체의 너비가 충분히 넓은 경우에는 RelWidth 속성이 유용하지만 열(Column)이 많거나 IBSheet8 객체의 너비가 부족한 경우에는 RelWidth를 사용하는 열(Column)의 너비가 줄어들어 사용하기 어려움이 있습니다.
위 IBSheet8 객체의 너비를 300px로 줄이는 경우 다음과 같이 보여지게 됩니다.
```javascript


```
"제목","작성자" 열은 RelWidth에 따라 너비가 가변적으로 늘어나거나 줄어들기 때문에 IBSheet8 객체의 너비가 충분하지 못한 경우에는 지나치게 줄어들어 보기에 어려움이 있을 수 있습니다.
이러한 경우, MinWidth 속성을 통해 최소 너비를 설정하면 열(Column)이 지나치게 줄어드는 것을 방지할 수 있습니다.

```javascript
{Header: "제목", Name: "subject", Type: "Text", "MinWidth": 150, "RelWidth":2},
{Header: "작성자", Name: "userId", Type: "Text", "MinWidth": 100, "RelWidth":1},
```
[Width 대신 MinWidth를 설정]
위와 같이 RelWidth 속성이 설정되더라도, MinWidth보다 줄어들지 않게 되어 가로 스크롤을 통해 사용자가 각 열(Column)의 내용을 확인 할 수 있습니다.
4. (Cfg) FitWidth 속성
1번,2번 처럼 각 열(Column)의 너비를 늘리거나,줄이지 않고, 우측의 남는 영역을 채우기 위해 더미 열(Column)을 추가할 수 있습니다.
```javascript

var OPT = {
  Cfg: {
    FitWidth: 1
  },
  Cols:[
    {Header: "No", Name: "SEQ", Type: "Int", "Width": 60},
    {Header: "제목", Name: "subject", Type: "Text", "Width": 150},
    {Header: "작성자", Name: "userId", Type: "Text", "Width": 100, "Align": "center"},
    {Header: "작성일", Name: "rdate", Type: "Date", "Width": 90, "Align": "center" },
    {Header: "추천수", Name: "rcmnd", Type: "Int", "Width": 60, "Align": "center"},
  ]
};
```
<p style="margin-left: 0px; text-align: left;"><span style="font-size: 13px; background-color: rgba(0, 0, 0, 0); color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif;"><img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/72004117629/original/9PhRs-WMENT7vNgmN9eYxrvaSOi5eANBZg.png?1646617797" style="width: auto;" class="fr-fic fr-fil fr-dib" data-attachment="[object Object]" data-id="72004117629"></span></p></div><p dir="ltr">
</p><p dir="ltr">
</p><p dir="ltr">
</p>
</div><p dir="ltr" style="margin-left: 0px; text-align: left;">
</p></div><p>
</p>

### 버튼(button)이 포함된 열(Column) 타입 설정

IBSheet8의 버튼은 크게 3가지로 나눌 수 있습니다.Type:"Button" 형식Button 속성을 이용한셀 우측 버튼Icon 속성을 이용한셀 좌측 버튼  각 버튼의 세부 설정에 관해 아래를 참고해 주세요.1. Type:"Button" 형식 버튼 클릭 시 onClick 이벤트에서 클릭에 대한 업무 로직을 구성하실 수 있습니다. (onButtonClick 이벤트 아님)조회 된 문자(데이터)가 버튼으로  표시됩니다.조회 된 문자(데이터)가 없는 경우( "" 또는 null ) 버튼 표시되지 않습니다. (onClick이벤트는 발생)조회 된 문자(데이터)가 없거나( null ) 행을 추가시 기본적인 데이터를 표시하려면 DefaultValue 속성을 설정합니다.열조회 데이터 없이 (Column) 전체에 동일한 버튼을 생성하고자 할 때에는 ButtonText 속성으로 설정할 수 있습니다.실제 <button> 테그가 아닌 <u> 테그를 통해 되며, <button> 테그를 사용하고자 하는 경우에는 UseButton 속성을 사용합니다.기본적으로 버튼은 셀에 꽉 찬 너비를 갖게 되고 ButtonWidth 속성을 통해 변경할 수 있습니다.<button>이나 <u>테그 대신 <img>같은 별도의 html로 표시하고자 하는 경우에는 Button 속성 값을 "Html" 로 설정하시면 됩니다.Disabled 속성을 통해 일부 버튼을 비활성화 시킬 수 있습니다. (비 활성화 된 상태에서는 onClick 이벤트도 발생하지 않습니다.)다음 예제를 참고해 주세요.
```javascript
// 버튼 열(Column) 설정
initSheet.Cols =  [
 {"Header": "버튼1","Type": "Button","Name": "btn1","Width": 100, "DefaultValue": "확인"},
 {"Header": "버튼2","Type": "Button","Name": "btn2","Width": 100, "Align":"Center", "ButtonText":"진행중", 
  "ButtonWidth": 60},
  {"Header": "버튼3","Type": "Button","Name": "btn3","Width": 100, "Button":"Html"},
];


// 조회 데이터 참고
Data = [
 {"btn1":"보류", "btn2":"보류", "btn3":"진행중"},
 {"btn1":"완료", "btn1Disabled":1, "btn2":"완료", "btn2Disabled":1, "btn3":""},
 {"btn1":"", "btn2":"승인", "btn3":"오류"},
 {"btn1":"승인", "btn1Class":"myBtn3" ,"btn2":"대기", "btn3":""},
 {"btn1":null,"btn2":null,"btn3":null}
];
```
다양한 버튼 형식 예제2. 셀 우측 버튼 사용Text타입이나 Date,Int 등의 타입 열(Column) 우측에 버튼을 표시하려면 Button 속성을 설정합니다.우측 버튼을 클릭 시 onButtonClick 이벤트가 호출됩니다.[셀이 편집불가(CanEdit:0) 한 경우에는 셀(Cell) 내에 어디를 클릭해도 이벤트 발생]Button 속성 값을 공백("")으로 설정하면 우측 버튼이 표시되지 않고, onButtonClick 이벤트도 발생하지 않습니다.우측 버튼 영역에 대한 너비는  WidthPad 속성을 통해 설정할 수 있습니다."Button" : "Check" 의 check/uncheck 값은 Checked 속성으로 확인 가능 합니다.json Event OnClickSide  사용할 수 있습니다.다음 예제를 참고해 주세요.
```javascript
// 열(Column) 생성 부
initSheet.Cols =  [
  {"Header": "버튼1","Type": "Text","Name": "btn1","Width": 120, Button:"Button", 
     ButtonText:"확인", WidthPad:50},
  {"Header": "버튼2","Type": "Int","Name": "btn2","Width": 100, Button:"Clear"},
  {"Header": "버튼3","Type": "Text","Name": "btn3","Width": 120, WidthPad: 50}
];

//조회 데이터 참고
data = [
  {btn1:"SM8201", btn2:98001,btn3:"XZ2482", btn3Button:"Check"},
  {btn1:"KC3942",btn1Button:"",btn2:12345,btn3:"ZIO5621",
     btn3Button:"Html", btn3ButtonText:"찾기"},
  {btn1:"MT1020",btn2:0,btn3:"KI7291", btn3Button:"/assets/img/search.gif" },
  {btn1:"JX888", btn2:-3921,btn3:""}
];
```
우측 버튼 예제3. 셀 좌측 버튼(Icon) 사용Icon 속성을 통해 셀 좌측에 버튼을 표시할 수 있습니다.좌측 버튼을 클릭시 onIconClick 이벤트가 발생합니다.Icon속성 값이  "Check"나 "Clear" 인 경우에는 onIconClick 이벤트가 발생하지 않습니다.Icon의 위치는 IconAlign속성을 통해 변경 할 수 있습니다.좌측 버튼 영역에 대한 너비는 IconWidth 속성을 통해 설정할 수 있습니다."Icon" : "Check" 의 check/uncheck 값은 Checked 속성으로 확인 가능 합니다.json Event OnClickSide  사용할 수 있습니다.다음 예제를 참고해 주세요.
```javascript
//열(Column) 생성 부
initSheet.Cols = [
  {"Header": "버튼1","Type": "Text","Name": "btn1","Width": 120, Icon:"Check"},
  {"Header": "버튼2","Type": "Int","Name": "btn2","Width": 100, Icon:"Clear"},
  {"Header": "버튼3","Type": "Text","Name": "btn3","Width": 120, Icon: plus_icon},   
];

//데이터 참고
data = [
  {btn1:"SM8201", btn2:98001,btn3:"XZ2482"},
  {btn1:"KC3942",btn2:12345,btn3:"ZIO5621"},
  {btn1:"MT1020",btn2:0,btn3:"KI7291",btn3Icon: minus_icon},
  {btn1:"JX888", btn2:-3921,btn3:"",btn3Icon: minus_icon},
];
```
좌측 버튼 예제 

### Name: "SEQ" 에 대한 다른 이름을 부여하는 방법

열(Column) 생성시 Name: "SEQ" 로 설정하면 해당 열은 서버에서 조회해 온 데이터와 무관하게 자동으로 1,2,3,4 ... 숫자가 보여지게끔 동작합니다. (편집 불가, 대소문자 주의)SEQ 라는 예약된 이름을 다른 이름으로 바꾸고 싶다면, Cfg.RowIndex 를 설정해주시면 됩니다. 해당 기능 설정 시 SEQ 기능을 대신 할 열 이름을 지정할 수 있습니다.
```javascript
Cfg: {
  RowIndex: "AAA"  // SEQ 의 기능을 대신할 열 이름
},
Cols: [
  {
    Name: "AAA"
  }
]
```


### Type : "Text" 컬럼 데이터가 숫자일 경우 정렬 방법

"Text"와 같은 문자형 컬럼에서도 데이터가 숫자형일 경우,문자열 정렬 방식이 아닌, 숫자열 정렬 방식을 이용할 수 있습니다.
먼저 정렬 기능을 사용하기 위해서는 아래와 같은 설정이 필요합니다.
```javascript
Cfg: {
    ...,
    CanSort: 1
}
```

그리고 문자형의 컬럼에 아래와 같은 설정을 추가합니다.
```javascript
Cols: [
    ...
    {Type: "Text",  Name: "Temp_Text", NumberSort: 1}
    ...
]
```

[NumberSort 없는 Sort]
[NumberSort 설정 후 Sort ]


커스텀포멧을 지정한 데이터라도 원 데이터가 숫자형의 데이터일 경우, 숫자형 정렬 방식을 이용하실 수 있습니다.

### Type:Img 사용 시, 이미지 변경 방법

Type: Img에서 이미지를 변경할 때에도 다른 타입들과 마찬가지로 setValue를 이용합니다.
다만,다른 타입들과는 다르게 value값만 입력하는 방식이 아니라, 조회할 때 이용되었던 구분자를 이용한 문자열을 이용하여야 합니다.
문자열은 다음과 같은 순서로 구성되어 있습니다.
|URL|Width|Height|Left|Top|LinkUrl|Target|Backgroud-size

### Type:"Enum" 사용 시 리스트 응용 방법

Type : Enum 열(Column)은 클릭 시 리스트가 펼쳐지며 설정한 내용이 보이게 됩니다.이 리스트 안에 아이템을 여러 개 열(Column)형태로 표현하거나, 이미지를 표시하는 등 다양한 기능을 구현 할 수 있습니다.1. 리스트의 내용을 Enum과 다르게 표현하기EditEnum 속성을 통해 선택된 값과 리스트의 값을 다르게 표현 할 수 있습니다.Enum, EditEnum 속성 설정 시 리스트 값에 \t를 추가하여 다 단 형태를 구현할 수 있습니다.
```javascript
// IBSheet8 생성 부
   Cols:[
    {"Header": "현재작업상태","Type": "Enum","Name": "PRate", 
       "EnumKeys": "|01|02|03",   // 디비 저장 값
       "Enum": "|대기|진행중|완료", // 셀(Cell)에 표시되는 값
       "EnumEdit": "|대기\tDelay\t01|진행중\tProcess\t02|완료\tComplete\t03" // 리스트에 표시되는 값
    },
   ...
]
```
2. attribute+Formula 를 통한 리스트 내용 동적 변경
```javascript
{
"Def": {
      "Row": {
      "CanFormula": true,
      "CalcOrder": "sPosEnum,sPosEnumKeys"
},
"Cols":[
    ....

    {"Header": "직급","Type": "Enum","Name": "sPos","Width": "95","Align": 
    "Center","ColorFormula": changeColorFormula,"CanEdit": 1,"RawSort": 1,
    "Enum": "|대표이사|이사|상무|소장|차장|부장|과장|대리|사원",
    "EnumKeys": "|01A|02A|03A|04A|04B|05B|06B|07B|08B|09B",
    "EnumFormula": enumFormula,"EnumKeysFormula": enumKeysFormula},

    ....
    ]
}

function enumFormula(f) {
  return f.Row['Chk'] ? '|대표이사|이사|상무|소장' : '|차장|부장|과장|대리|사원';
}

function enumKeysFormula(f) {
  return f.Row['Chk'] ? '|01A|02A|03A|04A' : '|04B|05B|06B|07B|08B|09B';
}
```
[채크박스 체크시][체크박스 언체크시]예제보기)https://jsfiddle.net/83fzck0v/3. Type:"Enum"인  열(Column)에 Menu 기능 사용하기1) 일부 아이템 선택 불가
```javascript
{
"Cols": [
  {
    Header: "Type Enum",           
    Type: "Enum",
    Name: "sEnum",
    Enum: "|안산1|안산2|화성1|화성2|화성3|일산1|일산2",
    EnumKeys: "|A0|B0|C0|D0|E0|F0|G0",
    EnumMenu : {
      Items: [
        { Text: "안산1", Value: "A0", Disabled: 1 },
        { Text: "안산2", Value: "B0" },
        { Text: "화성1", Value: "C0" },
        { Text: "화성2", Value: "D0" },
        { Text: "화성3", Value: "E0", Disabled: 1 },
        { Text: "일산1", Value: "F0" },
        { Text: "일산2", Value: "G0" },
      ]
    },
    Width: 200,
    }
]
}
```
예제보기)https://jsfiddle.net/kdwzexp0/2) EnumMenu를 이용한 버튼 추가
```javascript
var menuInit = {
  Color: "#DDFFDD",
  MenuMaxHeight: 50, //드랍리스트의 높이를 줄임
  Enum: "|안산1|안산2|화성1|화성2|화성3|일산1|일산2",
  EnumKeys: "|01|02|03|04|05|06|07",
  EnumMenu : {
    Items: [
          {Text: "공사현장 리스트",Caption: 1},
          {Text: "[안산1] 경기도 안산시 단원구 광덕3로 201",Value: "안산1"},
          {Text: "[안산2] 경기도 안산시 단원구 신길동 1509",Value: "안산2"},
          {Text: "[화성1] 경기도 화성시 반송동", Value: "화성1"},
          {Text: "[화성2] 경기도 화성시 동탄대로22길 30", Value: "화성2"},
          {Text: "[화성3] 경기도 화성시 산척동 283", Value: "화성3"},     
          {Text: "[일산1] 경기도 고양시 일산동구 정발산로82번길 10", Value: "일산1"},
          {Text: "[일산2] 경기도 고양시 일산동구 장항동 1761", Value: "일산2"},
    ],
    "Buttons":["item 추가"],
    OnButton:function(selectitem){
      if(selectitem == "item 추가"){
        alert("아이템 추가 버튼을 클릭하셨습니다.")
      }
    }
  }
}

options.Cols  = "Cols": [
   ...
    {"Header": "콤보(Enum)","Type": "Enum","Name": "ComboData",Extend:menuInit},
   ...
 ]
```
예제보기)https://jsfiddle.net/6t9q21gk/

### Type:"Enum"에서 셀 또는 드롭다운에 색상이나 이미지 설정 방법

Type:"Enum"은 Enum 속성에 html 태그를 이용하여 다양한 형식으로 표현할 수 있습니다.셀 또는 드롭다운에 폰트 색상이나 이미지 등을 설정할 수 있습니다.방법1) Enum에 html태그 넣어서 설정
```javascript
"Cols": [     
      {
        Header: "html 태그로 설정", //Enum에 html태그 넣어서 설정
        Type: "Enum",
        Name: "sEnum",
        Width: 120,
        Enum: "|red
               |yellow
               |blue
               |green",
        EnumKeys: "|A0|B0|C0|D0"
      },
```


방법2) onShowEnumMenu 이벤트로 설정이벤트로 설정

```javascript
onShowEnumMenu(paramObject) {
       let col = paramObject.col;
        if(col === 'sEnum2') { // 드롭다운 내부에 아이콘 설정
          let texts = document.querySelectorAll('.IBEnumMenuItemText');                            
          let menu = {
            Items: [
               {Name: "red", Value: "A0", 
                              LeftHtml: "", LeftWidth: 60},
              {Name: "yellow", Value: "B0", 
                              LeftHtml: "", LeftWidth: 60},
              {Name: "blue", Value: "C0", 
                              LeftHtml: "", LeftWidth: 60},
              {Name: "green", Value: "D0",
                              LeftHtml: "", LeftWidth: 60}
            ]
          };
          return menu;                              
        }
    },
```
아래 예제를 참고해주세요.예제) Enum 타입에서 style 설정하는 예제


### 관계형 콤보 구현하기

﻿Type이 Enum이나 Radio 인 열(Column)들 간에 연관성을 통해, 대분류/중분류/소분류와 같은 관계형 콤보를 설정하는 방법입니다.대분류(혹은 최상위)에 해당하는 열은 Related를 설정할 필요가 없고, 중분류 열에는 대분류 열의 이름(Name)을, 소분류 열에는 중분류 열 이름(Name)을 설정합니다.샘플페이지 > 컬럼 유형과 기능 > 관계형 콤보 에서 예제 확인 가능합니다.
아래 샘플은 공통코드 테이블의 구조가 자신의 id와 parent id로 구성된 것을 가정하여, json으로 가져온 데이터로 대분류/중분류/소분류 리스트 내용을 추가하는 예제입니다.onRenderFirstFinish 이벤트에서 조회 전에 Enum, EnumKeys 내용을 추가하는 방법
```javascript
onRenderFirstFinish:function(evt){  
  //대분류
  //조회전에 Enum,EnumKeys 내용을 추가합니다.
  evt.sheet.setAttribute( null, "Category1", "Enum",
          enumData.filter((v)=>!v.pid).reduce((a,c)=>"|"+c.value+a , "" ) );
  evt.sheet.setAttribute( null, "Category1", "EnumKeys",
          enumData.filter((v)=>!v.pid).reduce((a,c)=>"|"+c.id+a , "" ) );
  
  
  
  //중분류
  //대분류 EnumKeys을 기준으로 item을 추가합니다.
  const cat1EnumKeys = evt.sheet.getAttribute(null, "Category1","EnumKeys").split("|").splice(1);
  let cat2EnumKeys = [];
  for(let i=0;iv.pid==cat1EnumKeys[i]);
    
    evt.sheet.setAttribute(null, "Category2", "Enum"+cat1EnumKeys[i],
          enumData.filter((v)=>v.pid==cat1EnumKeys[i]).reduce((a,c)=>"|"+c.value+a, ""));
    evt.sheet.setAttribute(null, "Category2","EnumKeys"+cat1EnumKeys[i],
          empKeys.reduce((a,c)=>"|"+c.id+a, ""));
    
    //중분류의 EnumKeys를 모아둡니다. 
    cat2EnumKeys.push(...(tempKeys.map(v=>v.id)));
  } 
  
  
  
  //소분류
  //중분류 EnumKeys를 기준으로 item을 추가합니다.
  for(let i=0;iv.pid==cat2EnumKeys[i]);
    
    evt.sheet.setAttribute(null, "Category3", "Enum"+cat2EnumKeys[i],
        enumData.filter((v)=>v.pid==cat2EnumKeys[i]).reduce((a,c)=>"|"+c.value+a, ""));
    evt.sheet.setAttribute(null, "Category3", "EnumKeys"+cat2EnumKeys[i],
        tempKeys.reduce((a,c)=>"|"+c.id+a, ""));
  }

  evt.sheet.loadSearchData(ib.data);
}
```
예제) https://jsfiddle.net/45wm07vj/

### Uncaught TypeError: Cannot read properties of null (reading 'getBoundingClientRect')

Uncaught TypeError: Cannot read properties of null (reading 'getBoundingClientRect')

## 셀의 특수한 기능과 관련 내용을 확인합니다.

### 조건에 따른 셀 편집(Edit) 속성 제어방법

조회 된 데이터에서 특정 조건에 따른 개별 셀(Cell) 속성을 제어하거나, 어떤 조건에서 셀(Cell)별 속성을 제어하려는 경우 아래와 같이 사용하실 수 있습니다.1. attribute + Formula 를 통한 설정특정 행(Row), 열(Column), 셀(Cell)의 조건에 따라 CanEdit 속성을 제어하는 CanEditFormula를 설정할 수 있습니다.(Col) attribute + Formula(Row) attribute + Formula(Cell) attribute + Formula열(Column) 별로 속성 제어를 하는 자세한 예제는 아래 문서를 참고하시기 바랍니다.참고 : 열의 속성값을 변경하는 Formula 사용하기 : IBSHEET82.  조회 데이터에서 개별 셀(Cell) 속성으로 제어 방법
```javascript
onBeforeDataLoad:function(evt) {  
      for(var i=0;i3. setAttribute를 통한 설정setAttribute 메서드를 통해 특정 행(Row), 열(Column), 셀(Cell)에 원하는 속성을 설정할 수 있습니다.특히 setAttribute 메서드의  row나 col 인자를 null 로 설정하면 열(Column) 이나 행(Row)  전체에 속성이 설정됩니다.
```javascript
//특정 열에 편집불가 처리
sheet.setAttribute(null, "ColName", "CanEdit", 0);
//선택행에 편집 불가 처리
sheet.setAttribute(sheet.getFocusedRow(), "null", "CanEdit", 0);
//특정 셀에 편집을 불가능하게 변경
sheet.setAttribute(sheet.getFocusedRow(), sheet.getFocusedCol(), "CanEdit", 0 );
```
만약, 다수의 셀(Cell)에 속성 값을 적용하려는 경우, setAttribute 의 render 인자를 0 으로 설정하고, 마지막에 render 관련 메서드(renderBody, rerender)를 호출하는 것이 좋습니다. 

### 셀(Cell)의 속성 값을 변경하는 Formula(attribute Formula) 사용하기

특정 값에 따라 셀(Cell)의 배경색(Color), 편집여부(CanEdit) 등을 동적으로 변경하는 기능을 제공합니다.
ex) 스크린 수가 1,000 이상인 경우 "영화명" 셀(Cell)에 배경 색을 변경하는attribute Formula 예제

attribute Formula 설정1. 컬럼 생성시 attribute+Formula 정의하기
attribute Formula는 "속성명 + Formula" 형식으로 컬럼 생성 시 정의 됩니다.ex) CanEditFormula , ColorFormula, ClassFormula, TextStyleFormula등
```javascript
options.Cols = [
    { Type:"Bool", Name:"CHK" },

    //CHK열 값이 true인 경우 배경을 붉은색으로 표시
    { Type:"Text", Name:"A", ColorFormula:"CHK ? '#FF0000' : ''" }, 

    //CHK 열 값이 true인 경우 편집 가능
    { Type:"Text", Name:"B", CanEditFormula:"CHK?1:0" }, 

    // A열의 배경색이 붉은색인 경우, 해당 셀에 특정 class(style) 적용
    { Type:"Text", Name:"C", 
          ClassFormula: function(fr){
                if(fr.Sheet.getAttribute( fr.Row, "A", "Color") === "#FF0000") {
                      return "SPCell"; //td 테그에 SPCell 클래스가 적용됨.
                }
                return "";
          }   
     }
]
```

2. 계산 순서 설정하기attribute Formula 기능 사용 시에는 (Row)CanFormula와 (Row)CalcOrder가 반드시 설정되어야 합니다. (매우 중요!!!)
```javascript
options.Def.Row = {CanFormula: 1, CalcOrder: "AColor"};
```

여러 개의 Formula를 사용하는 경우, (Row)CalcOrder에 열이름 + 속성명 형식으로 계산 순서를 정의해야 합니다.
```javascript
options.Def.Row = {
    CanFormula: 1,     // Formula나 AttributeFormula를 사용하려면 무조건 정의 되어야 함

    // C컬럼의 Formula 계산 후, 
    // A컬럼 ColorFormula ,  B컬럼 CanEditFormula가 계산됨. (계산 순서 주의)
    CalcOrder: "C,AColor,BCanEdit" 
};
```
CalcOrder 설정시 콤마(,) 구분자 앞뒤로 공백이 들어가면 안됩니다.


기타 참고 내용
가 ) Formula 내용은 문자열이나 함수로 정의 할 수 있습니다.
```javascript
options.Cols = [
    // formula 내용을 문자열로 정의
    {Type: "Text", Name: "A", ColorFormula: "C < 100 ? '#FF0000' : '#FFFFFF' "},
    // formula 내용을 함수로 정의
    {Type: "Int",  Name: "B",
        ColorFormula: function(fr) {
            //함수로 정의시 반드시 설정할 값을 리턴 해 줘야 함.
            return fr.Row.A > 100 ? '#FF0000' : '#FFFFAA';
        }
    },
    ... 
]
```
나 ) 한번 정의된 Formula는 조회나 값 수정 시 자동으로 계산되어 반영됩니다. (수정불가)
다) 일반 Formula와 attribute Formula를 같이 사용하는 경우에는 일반  Formula가 정의된 열 이름도 (Row)CalcOrder 속성에 추가되어야 합니다.ex) 일반 Fomrula와 attribute Formula를 같이 사용하는 예제
라) Formula는 열(Column) 뿐 아니라 행(Row)이나 셀(Cell)에도 설정이 가능합니다. (메뉴얼 참고)







## 시트의 다양한 이벤트의 기능과 관련 내용을 확인합니다.

### IBSheet8에 이벤트 사용방법

1. 객체 생성시점에서 이벤트 설정하기(static) create Method의 options 파라미터 안에 Events 속성을 통해 설정합니다.

```javascript
var OPT = {
  Cfg: { ... },
  Cols: [
    // 열(Column) 기능 설정...
  ],
  Events: {
   // 클릭 이벤트
    onAfterClick: function(evtParam) {
         ...            
    },
    // 수정 이벤트
    onAfterChange: function(evtParam) {
         ...
    }
  }
};

// IBSheet8 객체 생성 함수
IBSheet.create({
  id: "sheet",        // 객체 ID
  el: "sheetDiv",     // IBSheet8을 생성할 DIV객체 ID
  options: OPT       // 초기화 구문 변수
});
```
IBSheet8의 이벤트는 다음과 같은 특징을 갖습니다.모든 이벤트의 파라미터는 1개이며 object 형식 입니다.모든 이벤트의 파라미터에는 "sheet"(이벤트 수행 IBSheet8 객체) 와 "eventName"(이벤트 이름) 이 포함되어 있으며, 이벤트에 따라 row, col , x, y , keyCode 등의 속성이 들어있습니다.[onBeforeChange 이벤트의 파라미터 내용]일부 이벤트는 return 값을 통해 현재 진행 상태를 중단하거나, 사용자 입력을 변경할 수 있습니다.ex)- onSave, onBeforeSave, onStartEdit 등 : true를 return 시 저장 작업을 중단합니다.- onBeforeChange, onEndEdit 등 : return 하는 값으로 셀(Cell) 값을 변경합니다.2. 객체 생성 이후 이벤트 설정하기객체가 생성되고 난 이후에는 bind 함수를 통해 이벤트를 설정하실 수 있습니다.

```javascript
// 이벤트 명, 발생 시 콜백함수
    sheet.bind("onAfterChange", function(evtParam) {

       //콜백함수

});
```
이벤트 발생 시 callback 함수에 넘어오는 evtParam에는 각 이벤트 별로 이벤트가 발생한 시트 객체나, 행 객체, 열이름등이 들어 있습니다.주의!객체 생성 이후에 이벤트를 추가하는 것은 onBeforeCreate에서 공통으로 처리한 로직을 무시할 수 있으므로 권장하지 않습니다.
SEE ALSO 공통 이벤트(event) 처리 방법event error 객체


### 이벤트 처리 시 반드시 Kind 조건을 사용해야 하는 이유

1. 이벤트 범위 제한하기IBSheet에서는 모든 이벤트(event)의 기본 동작 범위는 전체 행(헤더, 데이터, 필터, 그룹 포함) 입니다.
예를 들어, onClick, onAfterChange, onDblClick 등 모든 이벤트는 행 범위를 한정하지 않으면 시트 내의 모든 행에서 발생합니다.즉, 필터 행이나 헤더 행을 클릭해도 동일한 이벤트가 호출됩니다.
따라서 이벤트 핸들러를 작성할 때 반드시 Kind 속성을 활용하여 이벤트 대상 행을 구분해야 합니다.

▼ Kind 종류

Kind는 각 행이 어떤 기능을 수행하는지를 구분하는 속성입니다.
특정 이벤트가 데이터 행에만 적용되어야 하는 경우, 반드시 아래처럼 Kind 조건문을 추가해야 합니다.

```javascript
onClick: function (e) {
    if (e.row.Kind !== "Data") return; // 데이터 행이 아닐 경우 무시
    // 클릭 시 동작 처리
}
```
이 조건이 없을 경우, 필터행을 클릭했을 때도 동일한 로직이 실행되어불필요한 조회나 변경이 일어날 수 있습니다.


2. 공통설정으로 이벤트 범위 제한하기(이벤트 오버라이드)프로젝트 내에서 매번 이벤트마다 조건을 추가하기 어렵다면,공통 로직(ibsheet-common.js) 에서 한 번에 제어할 수 있습니다.아래 예시는 모든 시트의 onClick 이벤트에서 Filter 행을 자동 제외하는 코드입니다.

```javascript
_IBSheet.onBeforeCreate = function (init) {
    if (!init.options["Events"]) init.options["Events"] = {};
    init.options.PageEvent = {};

    if (init.options["Events"]["onClick"]) {
        init.options.PageEvent["onClick"] = init.options["Events"]["onClick"];
    }

    init.options["Events"]["onClick"] = function (e) {
        // ✅ Filter 행일 경우 클릭 이벤트 제외✅
        if (e.row.Kind === "Filter") return;

        if (e.sheet.options.PageEvent && e.sheet.options.PageEvent["onClick"]) {
            return e.sheet.options.PageEvent["onClick"](e);
        }
    };

    return init;
};
```
이 코드를 공통 파일에 등록하면, 모든 시트에서 필터 행 클릭 시 onClick 이벤트가 자동으로 무시됩니다.


단, 공통 오버라이드 방식을 적용할 때는,각 프로젝트마다 사용 중인 이벤트(onClick, onAfterChange, onDblClick  등)를 모두 확인한 뒤필요한 이벤트마다 동일한 방식으로 조건을 추가해야 합니다.







