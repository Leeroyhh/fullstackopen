const Header = ({ courseName }) => <h2>{courseName}</h2>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
      {console.log(part)}
    </p>
  )
}

const Total = ({ parts }) => {
  return parts.reduce((sum, part) => {
    console.log('what is happening:', sum, part.exercises);
    return sum + part.exercises;
  }, 0)
}

const Course = ({ course }) => {
  return (
    <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <p><strong>Total exercises: {Total({ parts: course.parts })}</strong></p>
    </div>
  )
}

export default Course