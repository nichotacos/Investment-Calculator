import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'
import { useState } from 'react'


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousInput => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  const inputIsValid = userInput.duration > 0

  return (
    // <h1>React Investment Calculator</h1>
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
