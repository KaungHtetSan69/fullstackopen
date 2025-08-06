import Header from "./Header.jsx"
import Total from "./Total.jsx"
import Content from "./Content.jsx"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}></Header>
      <Content exercises = {[{name:part1, numberofex:exercises1},{name:part2, numberofex:exercises2}, {name:part3, numberofex:exercises3}]}></Content>
      <Total total= {exercises1 + exercises2 + exercises3}> </Total>
    </div>
  )
}

export default App