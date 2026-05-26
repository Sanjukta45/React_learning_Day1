import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './Components/ProfileCard'
import Counter from './Components/Counter'
import CharacterCounter from './Components/CharacterCounter'
import PasswordChecker from './Components/PasswordChecker'
import ToDoApp from './Components/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Frontend Developer Journey</h1>
      <p>I am learning React step by step.</p>
      <button>Click Me</button>

      <hr/>      
      <ProfileCard name="Sanjukta" role = "FrontEnd Developer" age = "26"/>
      <ProfileCard name="Trilochan" role = "FullStack Developer" age = "29"/>
      <ProfileCard name="Shreya" role = "Backend Developer" age = "26"/>

       <hr/>     
       <Counter />
        <br/><br/>
        <hr/>
       <CharacterCounter />
       <br/><br/>
        <hr/>
        <PasswordChecker />
        <br/><br/>
        <hr/>
        <ToDoApp />
        <br/><br/>
        <hr/>
    </div>
  );
}

export default App
