# front

## Tech Stack
react, javascript, zustand, react-query, styled-component, axios

## Convention
### Git
- issue 생성해서 각자 진행 정도를 알려준다.
- 커밋메시지는 `한국어`로 작성
- 타입은 **`소문자`로** 작성
- `init`은 프로젝트 세팅 시 한정적으로 사용
- `chore`는 프로젝트 설정 변경 시 사용
- 브랜치명: `기능내용/숫자`
| **Type** | **내용** |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 또는 typo |
| refactor | 리팩토링 |
| design | CSS 등 사용자 UI 디자인 변경 |
| comment | 필요한 주석 추가 및 변경 |
| style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| test | 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우) |
| chore | 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등) |
| init | 프로젝트 초기 생성 |
| rename | 파일 혹은 폴더명 수정하거나 옮기는 경우 |
| remove | 파일을 삭제하는 작업만 수행하는 경우 |
| docs | 문서를 추가하거나 수정하는 경우 |

### Code
### 1. 코드 **네이밍**

| 상수 | 대문자 + 스네이크 네이밍 | `TOTAL_DISCOUNT_ACCOUNT = 30000` |
| --- | --- | --- |
| 변수 | 카멜케이스, 명사 사용 |  |
| 함수 | 카멜케이스. 동사를 맨 처음에 작성 ⇒ 최대한 명확한 이름 짓기! 힘들다면 함수로 분리하기! | `getValue`,`fetchUsers`, `navigateToNextPage` |
| 클래스 | 파스칼 케이스 |  |
| 타입 | 파스칼 케이스 |  |

### 2. 브랜치 **네이밍**

**타입/기능이름(kebab-case)** 으로 작성

- {keyword}/{issueNumber}
- ex) feature/123

### 3. 파일 **네이밍**

| **components, pages** | **파스칼 케이스** |
| --- | --- |
| **hooks** | **use prefix (use를 맨앞에 씁니다.)** |
| **utils** | **카멜 케이스** |
| **api** | **카멜 케이스** |
| **types** | **카멜 케이스** |

### 4. 스타일 네이밍

문자열, 객체 는 대문자

함수랑 삼항연산자 들어가면 카멜케이스

### ✅  Folder Structure

```
/src
│ App.tsx
│ main.tsx
│ /api
| /assets
| /components
| /hooks
| /pages
| /types
| /utils
```