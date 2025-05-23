const App = () => {
  const course = 'Half Stack application development'
  const PartsAndExercises = [
    { part1: "Fundamentals of React", exercises1: 10},
    { part2: "Using props to pass data", exercises2: 7},
    { part3: "State of a component", exercises3: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={PartsAndExercises}/>
      <Total content={PartsAndExercises}/>
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p>{props.content[0].part1} {props.content[0].exercises1}</p>
      <p>{props.content[1].part2} {props.content[1].exercises2}</p>
      <p>{props.content[2].part3} {props.content[2].exercises3}</p>
    </div>
  )
}


const Total = (props) => {
  const excercises = props.content[0].exercises1 + props.content[1].exercises2 + props.content[2].exercises3

  return (
    <div> 
      <p>Number of exercises {excercises}</p>
    </div>
  )
}


export default App