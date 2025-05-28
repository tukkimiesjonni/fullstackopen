import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const feed = props.good + props.neutral + props.bad

  if (feed != 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="All" value={props.good + props.neutral + props.bad} />
            <StatisticLine text="Average" value={(props.good * 1 + props.bad * -1) / (props.good + props.bad + props.neutral)} />
            <StatisticLine text="Positive" value={`${(100 * (props.good / (props.good + props.neutral + props.bad))).toFixed(1)} %`} />
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <p>No feedback given</p>
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
        <Button 
          onClick={() => setGood(good + 1)}
          text="Good"
          />
        <Button 
          onClick={() => setNeutral(neutral + 1)}
          text="Neutral"
          />
        <Button 
          onClick={() => setBad(bad + 1)}
          text="Bad"
          />
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