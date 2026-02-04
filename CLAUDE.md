# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 저장소는 IBSheet8 그리드 라이브러리 개발을 지원하는 Claude Code Skill 플러그인입니다. `/ibsheet8` 명령으로 호출하거나 IBSheet8 관련 질문 시 자동 활성화됩니다.

## 구조

- **SKILL.md**: Skill 정의 파일 (frontmatter + IBSheet 개발 가이드)
- **assets/templates/**: HTML, React, Vue 템플릿 예제
- **references/**: 상세 참조 문서 (컬럼 타입, 이벤트, API, 기능별 가이드, 트러블슈팅)
- **.claude-plugin/plugin.json**: 플러그인 배포용 매니페스트

## Skill 수정 시 주의사항

- SKILL.md의 frontmatter(`---` 블록)에서 `name`, `description` 필드는 필수
- `description`에 트리거 키워드를 포함해야 자동 호출이 작동함
- references/ 문서 추가 시 SKILL.md의 레퍼런스 테이블에도 링크 추가 필요

## 참고 문서
- ibsheet8의 각 api에 대한 자세한 내용은 references/ibsheet-official-manual/funcs/core/index.md 를 참고 할 것
- ibsheet8의 각 event에 대한 자세한 내용은 references/ibsheet-official-manual/events/index.md 를 참고 할 것
- ibsheet8 생성시 Cfg의 각 속성에 대한 자세한 내용은 references/ibsheet-official-manual/props/cfg/index.md 를 참고 할 것
- ibsheet8 생성시 Cols의 각 속성에 대한 자세한 내용은 references/ibsheet-official-manual/props/col/index.md 를 참고 할 것