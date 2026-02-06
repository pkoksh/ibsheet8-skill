# IBSheet Skill 사용 가이드

## 다른 프로젝트에서 스킬 사용하기

### 방법 1: 글로벌 스킬 등록 (추천)

홈 디렉토리에 한 번만 등록하면 **모든 프로젝트**에서 사용 가능합니다.

```
~/.claude/skills/ibsheet8/
├── SKILL.md
├── assets/
│   └── templates/
└── references/
```

Windows 기준 경로: `C:\Users\{사용자명}\.claude\skills\ibsheet8\`

### 방법 2: 프로젝트 레벨 스킬 등록

특정 프로젝트에서만 사용하려면 프로젝트 루트에 복사합니다.

```
my-project/
├── .claude/
│   └── skills/
│       └── ibsheet8/
│           ├── SKILL.md
│           ├── assets/
│           └── references/
├── src/
└── ...
```

### 복사 대상

| 복사해야 할 것 | 설명 |
|---|---|
| `SKILL.md` | 스킬 정의 파일 (필수) |
| `assets/` | 템플릿 예제 |
| `references/` | API, 이벤트, 속성 참조 문서 |

| 복사하지 않아도 되는 것 | 설명 |
|---|---|
| `.claude-plugin/` | npm 배포용 플러그인 매니페스트 |
| `CLAUDE.md` | 이 저장소 자체의 개발 가이드 |
| `.git/` | Git 히스토리 |
| `node_modules/` | 의존성 |
| `.mcp.json` | MCP 서버 설정 |
| `docs/` | 이 가이드 등 내부 문서 |

---

## ibsheet7 / ibsheet8 스킬 동시 운용

### 스킬 분리 전략

IBSheet7과 IBSheet8은 API 구조가 다르므로 별도 스킬로 관리합니다.

```
~/.claude/skills/
├── ibsheet7/
│   ├── SKILL.md
│   ├── assets/
│   └── references/
└── ibsheet8/
    ├── SKILL.md
    ├── assets/
    └── references/
```

### 자동 버전 감지 원리

Claude Code는 시작 시 모든 스킬의 `name`과 `description`을 읽어 시스템 프롬프트에 로드합니다. 사용자가 "ibsheet"라고만 말해도 Claude가 프로젝트 컨텍스트와 description의 키워드를 기반으로 적절한 스킬을 자동 선택합니다.

**각 스킬의 description에 버전 고유 키워드를 포함**하는 것이 핵심입니다:

| 구분 | ibsheet8 고유 키워드 | ibsheet7 고유 키워드 |
|---|---|---|
| 시트 생성 | `IBSheet.create()` | `createIBSheet()` |
| 로더 | `ibsheetloader` | - |
| 초기화 구조 | `Cfg`, `Cols`, `Events` 옵션 객체 | `InitSheet`, `HeaderMode` |
| 데이터 로드 | `SearchMode`, `doSearch` | `DoSearch`, `DoSave` (대문자 구분) |

### 사용자 입력에 따른 스킬 선택

| 사용자 입력 | Claude 동작 |
|---|---|
| `/ibsheet8` | ibsheet8 스킬 직접 호출 |
| `/ibsheet7` | ibsheet7 스킬 직접 호출 |
| "ibsheet 그리드 만들어줘" | 프로젝트 코드를 보고 자동 판단 |
| "IBSheet.create 사용법" | ibsheet8 자동 선택 (키워드 매칭) |
| "createIBSheet 사용법" | ibsheet7 자동 선택 (키워드 매칭) |

### 프로젝트 CLAUDE.md에 버전 명시 (권장)

자동 감지가 불확실한 경우, 대상 프로젝트의 `CLAUDE.md`에 한 줄만 추가하면 확실합니다:

```markdown
# 이 프로젝트는 IBSheet8을 사용합니다.
```

---

## SKILL.md frontmatter 작성 시 주의사항

- `name`: 스킬 이름. `/name`으로 수동 호출할 때 사용됨
- `description`: **반드시 한 줄로 작성**. 여러 줄로 감싸면 스킬 검색이 실패할 수 있음
- description에 버전 고유 키워드를 포함해야 자동 구분이 정확해짐
