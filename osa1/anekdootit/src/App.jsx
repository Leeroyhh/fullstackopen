import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const DisplayPoints = ({ points, text }) => {
  return (
    <h3>{text} {points}</h3>
  )
}

const MostPointsAnecdote = ({ points, anecdotes }) => {
  const mostPoints = Math.max(...points)
  const mostPointsIndex = points.indexOf(mostPoints)
  console.log(mostPointsIndex)
  if (mostPoints === 0) {
    return (
      <div>
        No points given yet
      </div>
    )
  }
  return (
    <div>
      {anecdotes[mostPointsIndex]}
      <br/>
      <DisplayPoints text='Anecdote points: ' points={mostPoints} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(copy)
  }

  return (
    <div>
      <Header text='A random anecdote' />
      {anecdotes[selected]}
      <br/>
      <DisplayPoints text='Anecdote points: ' points={points[selected]} />
      <br/>
      <Button handleClick={vote} text='Give point' />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='Random anecdote' />
      <br/>
      <Header text='Anecdote with most points' />
      <MostPointsAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App