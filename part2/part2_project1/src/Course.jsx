const Course = ({course}) => {
  return (
    <div>
      <div>
        <Header course={course}/>
      </div>
      <div>
        <Content parts={course.parts}/>
      </div>
      <div>
        <Total parts={course.parts}/>
      </div>
    </div>
  )
}

const Header = ({course}) => <h2>{course.name}</h2>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p>
      <strong>Number of exercises {total}</strong>
    </p>
  )
}

export default Course