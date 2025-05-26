import { useState } from 'react'

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
        <p>Good = {good}</p>
        <p>Neutral = {neutral}</p>
        <p>Bad = {bad}</p>
        <p>All = {good + neutral + bad}</p>
        <p>Average = {(good * 1 + bad * -1) / (good + bad + neutral)}</p>
        <p>Positive = {100 * (good / (good + neutral + bad))} %</p>
      </div>
    </div>
  )
}

export default App