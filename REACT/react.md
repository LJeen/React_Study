# REACT

## 장점
- 빠른 업데이트와 렌더링 속도 : 내부적으로 Virtual DOM(Document Object Model) 을 사용
- 컴포넌트 기반 구조 : 모든 페이지가 컴포넌트로 구성
- 컴포넌트를 통한 재사용성 : 의존성을 낮추고 호환성 해결 방향

## create-react-app
 - npx create-react-app <your-project-name>
 - cd <your-project-name>
 - npm start

## 리액트 엘리먼트
 - Elements are the samllest building blocks of React apps
 - DOM(Document Object Model)에서 사용하는 용어
 - DOM Elemnet -> react element가 아닌 html요소
 - react element는 실제로 보이는 DOM element의 가상 표현
 - 리액트 엘리먼트는 자바스크립트 객체 형태로 존재
 - 엘리먼트 생성 후에는 children이나 attributes를 바꿀 수 없다 -> 새로운걸로 교체
 - 빠른 랜더링 속도로 인하여 가능하며 이를 위해서 내부적으로 Virtual DOM을 사용

## React create함수
 - React.createElement(type, [props], [..children])
 - type : HTML태그가 문자열로 들어가거나 또 다른 리액트 컴포넌트가 들어감
 - props : 여러 가지 속성
 - children : 해당 엘리먼트의 자식 엘리먼트들

## React Component
 - 자바스크립트 함수와 비슷하지만 Props를 입력으로 리액트 엘리먼트를 출력으로 가짐
 - Component의 이름은 항상 대문자로 시작

## Props의 개념
 - Propertys의 준말, 리액트 컴포넌트의 속성을 뜻함
 - Read-Only : 값을 변경할 수 없음
 - All React components must act like pure functions with respect to thier props
 - 같은 props에 대하여 항상 같은 return값을 가져야함 -> parameter 값을 바꿀 수 없음