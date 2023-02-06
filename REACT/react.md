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

## State
 - 리액트 컴포넌트의 상태를 의미
 - 리액트 컴포넌트의 변경 가능한 데이터
 - 렌더링과 데이터 흐름에 관련 있는 값만 state에 포함, 그렇지 않은 값은 컴포넌트 인스턴스의 필드로 정의

## State의 특징
 - 하나의 자바스크립트 객체, 생성자(Constructor)에서 정의
 - 클래스 컴포넌트 > this.state로정의 , 함수 컴포넌트 > useState()함수를 이용
 - 직접 수정하지 않고 setState()함수를 이용하여 변수처럼 다룸

## Hook(훅)
 - 함수 컴포넌트에서 원하는 시점에 정해진 함수를 실행되도록 함
 - 클래스 컴포넌트에서 state를 이용하는것과 마찬가지 기능

## useState()
 - 가장 대표적인 훅
 - const[변수명,set함수명]=useState(초기값);

## useEffect()
 - Side Effect를 수행하기 위한 훅
 - useEffect(이펙트 함수, 의존성 배열);
 - 배열 안에 있는 변수 중 하나라도 값이 변경었을때 이펙트 함수가 실행
 - 기본적으로 이펙트 함수는 처음 컴포넌트가 렌더링된 이후와 업데이트로 인한 재렌더링 이후 실행
 - 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시 단 한번씩만 실행
 - 의존성 배열을 생략 시 컴포넌트 업데이트 시마다 실행 

## useMemo()
 - Memoized value를 리턴하는 훅
 - 파라미터로 Memoized value를 생성하는 create함수와 의존성 배열을 받음

## useCallback()
- useMemo함수와 다르게 함수를 리턴하는 훅

## useRef()
 - Reference를 사용하기 위한 훅
 - 레퍼런스 : 특정 컴포넌트에 접근할 수 있는 객체
 - 