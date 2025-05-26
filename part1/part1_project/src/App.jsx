const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content content={parts}/>
      <Total content={parts}/>
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
      <p>{props.content.name} {props.content.exercises}</p>
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

  return (
    <div> 
      <p>Number of exercises {props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</p>
    </div>
  )
}


export default App