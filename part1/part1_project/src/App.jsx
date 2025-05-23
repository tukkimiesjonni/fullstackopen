const App = () => {
  const course = 'Half Stack application development'
  const PartsAndExercises = [
    { part: "Fundamentals of React", exercises: 10},
    { part: "Using props to pass data", exercises: 7},
    { part: "State of a component", exercises: 14}
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


const Part = (props) => {
    return (
    <div>
      <p>{props.content.part} {props.content.exercises}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]}/>
      <Part content={props.content[2]}/>
    </div>
  )
}


const Total = (props) => {
  const excercises = props.content[0].exercises + props.content[1].exercises + props.content[2].exercises

  return (
    <div> 
      <p>Number of exercises {excercises}</p>
    </div>
  )
}


export default App