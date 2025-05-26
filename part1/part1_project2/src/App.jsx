import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <p>Good = {props.good}</p>
      <p>Neutral = {props.neutral}</p>
      <p>Bad = {props.bad}</p>
      <p>All = {props.good + props.neutral + props.bad}</p>
      <p>Average = {(props.good * 1 + props.bad * -1) / (props.good + props.bad + props.neutral)}</p>
      <p>Positive = {100 * (props.good / (props.good + props.neutral + props.bad))} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
      </div>
      <div>
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <div>
        <h2>Statistics</h2>
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App