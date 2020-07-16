# Instagram 클론 프로젝트

전세계적으로 사용되는 소셜 미디어 플랫폼 중 심플하고 재사용 가능한 컴포넌트 UI로 구현된 인스타그램 Web App 클론

## 목적

- git을 통한 협업으로 실무환경 경험
- Http 통신을 통한 JavaScript 비동기 처리 이해
- SPA(Single Page Application) 구축 경험
- React 컴포넌트 Life Cycle 이해

## 개발 기간

- 개발 기간 : 2020/07/06 - 2020/07/17

## 팀원

- 10기 최 준
  - [github](https://github.com/Jun4928)
  - [blog](https://medium.com/@jun.choi.4928)
- 10기 서동찬
  - [github](https://github.com/seo337dc)
  - [blog](https://velog.io/@sdc337dc)
- 10기 김신영
  - [github](https://github.com/bonbon0202)
  - [blog](https://dream-frontend.tistory.com/)
- 10기 오호근
  - [github](https://github.com/dhgh95)
  - [blog](https://velog.io/@ghrms2525)
- 10기 이윤식
  - [github](https://github.com/dark2356)
  - [blog](https://velog.io/@dark2356)

## 기술 스택 및 구현 기능

### 1. 기술 스택

- React, React-Router, Fetch API, Sass, React-icons, Faker

### 2. 협업 툴

- Git, Slack, Notion

### 3. 구현 기능 상세 설명

- **로그인**
  - UI 구현
  - fetch API로 로그인 기능 비동기 처리
  - 세션스토리지 사용해서 JWT 활용
- **메인 페이지**
  - 보다 복잡한 UI/UX React Component로 구현
  - fetch API로 메인 페이지 데이터 로딩
  - state, props, event handling 을 통해 댓글 생성, 삭제
  - 좋아요 기능
  - Story Component 클릭 이벤트 발생 시 Story Modal 창 구현

## 작업순서

1. `git checkout master`: 마스터 브랜치로 이동
2. `git pull origin master`: github에 변화된 최신 코드를 받아온다
3. `git branch feature/name`: 본인의 브랜치 생성
4. `git checkout feature/name`: 브랜치로 이동
5. `git merge master`: 마스터에서 받아온 최신 코드를 브랜치에 병합시킨다
6. `npm install`: package.json dependencies 에 추가된 모듈 로컬에 다운로드
7. 최대한 기능별로 쪼개서 작업하기
8. 프로젝트 상위 디렉토리로 가서 `git add .` 명령어로 내가 수정한 코드를 git stage 에 올린다
9. `git status`: add가 잘 되었는지 확인
10. `git commit -m "commit message"`: commit message는 팀원과 상의한 후에 slack 에 공유한다
11. `git push origin feature/name`: 본인 브랜치에서 작업한 내용을 원격 리포지토리에 올린다
