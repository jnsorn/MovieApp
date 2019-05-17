## React
A JavaScript Front-end library for building user interfaces
- JavaScript-based
- Composition
- Unidirectiomal Data Flow (Data → UI)
- Props, State

### `Component Lifecycle`
#### Render
![](https://cdn-images-1.medium.com/max/800/1*YD6sBv5Ly548pGl042z3DA.jpeg)

componentWillMount() → render() → componentDidMount()


1. componentWillMount(): 사이클 시작
2. render(): 컴포넌트가 리액트 세계에 존재하게 됨
3. componentDidMount(): 컴포넌트가 성공적으로 리액트 세계에 자리잡음


#### Update
componentWillReceiveProps() → shouldComponentUpdate() → componentWillUpdate() → render() → componentDidUpdate()

1. componentWillReceiveProps(): 컴포넌트가 새로운 props를 받음
2. shouldComponentUpdate(): 리액트는 이전 props와 새로운 props를 비교하여 다르면 업데이트 

### `Props & State`

#### Props
- 부모 컴포넌트가 자식 컴포넌트에게 Data를 전달
- props는 컴포넌트의 mounting, updating 프로세스 시점에 값이 할당될 뿐 컴포넌트 내부에서 값을 변경할 수 없음

![이미지](https://cdn-images-1.medium.com/max/800/1*1JzmOFt70B-EF3rQzrI9PQ.png)

#### State
- 상황에 따라 변경되어야 하는 값들은 state를 이용
- state update → render()가 새로운 state와 함께 다시 작동함
- _**주의!**_ &nbsp; state를 직접적으로 변경하면 render설정들이 작용하지 않기 때문에 꼭 this.setState를 이용하여 변경하자

### `Stateful(Class) vs Stateless(Functional)`
#### Stateful(Class) Component
- Lifecycle을 정의하여 사용할 수 있음
- state를 이용할 수 있음
> (공식 문서) 클래스 component는 props와 함께 기본 생성자를 호출해야 합니다.
#### Stateless(Functional) Component
- ~~Lifecycle을 정의하여 사용할 수 없으며 render 함수만 정의됨~~ 
→ Lifecycle을 functional component에서도 사용할 수 있도록 Hook이 등장함 
- props(입력)을 선택적으로 취함
### `Promise & Await & Async`
#### Promise
비동기에서 완료(then)와 실패(catch)를 분리해서 메서드를 수행 (시나리오 관리) 

>비동기: 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성

#### Await
일반 비동기 처리처럼 바로 실행이 다음 라인으로 넘어가는 것이 아니라 결과값을 얻을 수 있을 때까지 기다림 (비동기코드를 동기코드처리와 동일한 흐름으로 작성 가능)

#### Async
async 키워드가 붙어있는 함수를 호출하면 명시적으로 Promise 객체를 생성하여 리턴하지 않아도 Promise 객체가 리턴

### `그 외`

#### ES6 Arrow 함수




---
Link: [https://www.inflearn.com/course/reactjs-web/dashboard](https://www.inflearn.com/course/reactjs-web/dashboard)
