## React
- JavaScript-based
- Composition
- Unidirectiomal Data Flow (Data → UI)


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


---
Link: [https://www.inflearn.com/course/reactjs-web/dashboard](https://www.inflearn.com/course/reactjs-web/dashboard)
