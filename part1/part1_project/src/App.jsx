const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content content={course}/>
      <Total content={course}/>
    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}


const Part = (props) => {
    return (
    <div>
      <p>{props.content.name} {props.content.exercises}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part content={props.content.parts[0]}/>
      <Part content={props.content.parts[1]}/>
      <Part content={props.content.parts[2]}/>
    </div>
  )
}


const Total = (props) => {

  return (
    <div> 
      <p>Number of exercises {props.content.parts[0].exercises + props.content.parts[1].exercises + props.content.parts[2].exercises}</p>
    </div>
  )
}


export default App