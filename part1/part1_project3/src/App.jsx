import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const vote = (props) => {
    const copy = [...votes]
    copy[props.value] += 1
    setVotes(copy)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <div>
        <Button 
          onClick={() => setSelected(Math.floor(Math.random() * 8))}
          text="Next anecdote"
          />
        <Button
          onClick={() => vote({value: selected})}
          text="Vote"
          />
      </div>
    </div>

  )
}

export default App