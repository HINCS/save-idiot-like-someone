# Mentor & Mentee

'Metor & Mentee' 서비스는 프로그래밍에 초점을 맞춰 배우고 싶은 사람과 알려주고 싶은 사람을 위한 멘토링 플랫폼이다. 이 플랫폼을 통해 서로가 서로에게 도움을 주고 이를 바탕으로 실력 향상과 유대관계를 형성하는데 기여하고자 한다.

## Why

처음 시작할떄 막막하고 딱딱하게 느껴져서 시작도 제대로 못해보던 나같은 놈들을 위해서 뭔가 쉽게 프로그래밍을 시작할 수 있게끔 가이드라인을 제공하는 부분이 있었으면 좋겠음(ex. 생활코딩 소개)

# Requirement

이 플랫폼의 사용자는 멘토와 멘티, 이 두 개의 역할로 구분할 수 있는데, 한 사람이 두 가지의 역할을 모두 수행할 수 있다.

## Intro Page

기본적으로 사용자는 홈페이지 접속하여 플랫폼에 대한 intro 페이지를 조회할 수 있다. Intro 페이지에는 이 플랫폼이 어떤 어떤 목적으로 서비스하는지, 어떤 사람을 대상으로 하는지, 그리고 어떤 플랫폼을 활용할 수 있는지에 대한 설명이 있다.(추가 필요)
또한 메인 페이지에는 회원가입 또는 로그인이 가능하다.

회원가입 로그인, 모두 SNS 로그인 모듈과 연계한다. SNS 로그인 모듈 연계 리스트는 다음과 같다.

- KAKAO
- Facebook
- Google
- Naver
- Github

## Home Page

Home page에서는 멘토로서의 활동 내역, 멘티로서의 활동 내역, 그리고 멘토와 멘티를 구하는 글 목록이 보인다. 

- 멘토로서의 활동 내역과 멘티로서의 활동 내역은 최신순으로 정렬하며, 상세 내용은 추후 다시 정해야한다.
- 글 목록은 최신으로 정렬하는데, 필터링 기능을 제공한다. 글의 필터링은 글에 매핑된 태그로 진행한다.
- 글 목록은 pagination 또는 scroll loading 방식으로 한다.(변경 될 수 있음)
- 글 목록의 상단에는 글쓰기가 가능한 버튼이 존재한다.

## User Page

User page는 멘토의 활동 내역과 멘티의 활동 내역을 상세하게 조회할 수 있다.

등등

# Develop Environment

## Version Control System & Managing System

- Version Control: git
- Managing System: Github

## Deployment System & Hosting

- Netlify or AWS?

## Technique Spec

## Front End

- ES5?ES6?(javascript) or React?
- SASS(SCSS)
- Bundling → Webpack or Parcel

## Back end

- Server: Node JS(Express)
- Database: mongo DB

## Test Framework

???

### To-do

- Requirement 더 구체화 하기
- 각 페이지 할 수 있는 action 구체화 하기
- 각 action에 필요한 sequence 구체화 하기
- 각 sequence에 맞는 state 구체화 하기
- 위의 과정에서 필요한 modeling구체화 하기
- Code Styling
- Code Convention
- Test Framework
