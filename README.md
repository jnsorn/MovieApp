## React
- JavaScript-based
- Composition
- Unidirectiomal Data Flow (Data → UI)
- Props, State


#### `Component Lifecycle`
**Render** 
componentWillMount() → render() → componentDidMount()

1. componentWillMount(): 사이클 시작
2. render(): 컴포넌트가 리액트 세계에 존재하게 됨
3. componentDidMount(): 컴포넌트가 성공적으로 리액트 세계에 자리잡음


**Update** 
componentWillReceiveProps() → shouldComponentUpdate() → componentWillUpdate() → render() → componentDidUpdate()

1. componentWillReceiveProps(): 컴포넌트가 새로운 props를 받음
2. shouldComponentUpdate(): 리액트는 이전 props와 새로운 props를 비교하여 다르면 업데이트 

#### `Props`
부모 컴포넌트가 자식 컴포넌트에게 Data를 전달

#### `State`
state update → render()가 새로운 state와 함께 다시 작동함

_**주의**_ state를 직접적으로 변경하면 render설정들이 작용하지 않기 때문에 꼭 this.setState를 이용하여 변경하자

---
Link: [https://www.inflearn.com/course/reactjs-web/dashboard](https://www.inflearn.com/course/reactjs-web/dashboard)
