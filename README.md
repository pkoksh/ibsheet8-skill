# IBSheet Skill for Claude Code

IBSheet 그리드 라이브러리를 활용한 웹 개발을 위한 Claude Code Skill입니다.

## 설치 방법

### GitHub에서 직접 설치

```bash
/plugin install ibsheet-plugin --source github --repo [your-org]/ibsheet8-skill
```

## 사용 방법

```bash
/ibsheet
```

또는 IBSheet, 그리드, 스프레드시트 관련 질문 시 자동으로 활성화됩니다.

## 포함 콘텐츠

### 템플릿 (assets/templates/)

| 카테고리 | 파일 | 설명 |
|----------|------|------|
| basic | simple-grid.html | 최소 설정 그리드 |
| basic | readonly-grid.html | 읽기 전용 그리드 |
| crud | standard-crud.html | 표준 CRUD 그리드 |
| crud | batch-crud.html | 일괄 저장 방식 |
| advanced | master-detail.html | 마스터-디테일 |
| advanced | tree-grid.html | 트리 그리드 |
| advanced | pivot-table.html | 피벗 테이블 |
| framework | react-component.jsx | React 컴포넌트 |
| framework | vue-component.vue | Vue 컴포넌트 |

### 참조 문서 (references/)

| 카테고리 | 주제 |
|----------|------|
| core | 컬럼 타입, 이벤트, API 메서드 |
| features | 필터링/정렬, 그룹핑/합계, 트리 그리드, 틀고정/병합, 내보내기, 유효성 검사 |
| integration | React, Vue, 서버 통신 |
| troubleshooting | 자주 발생하는 오류, 성능 최적화 |

## 라이선스

MIT
