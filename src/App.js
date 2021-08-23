
import React, { useState} from 'react'


const Header = (props) =>{
  return (

    <h1>
    {props.course.name}
    </h1>
  )
}

const Content = (props) => {

  return (
    <div>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}/>
    <Part part={props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  //console.log(props.part)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}


const Total = (props) => {
  return (
    <p>
      Total number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </p>
  )
}

const Hello = ({name, age})=>{

  const bornYear = ()=> new Date().getFullYear() - age

  return(
    <div>
       <p>Hello {name}, you are {age} years old.</p>
       <p> So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {

  const [ counter, setCounter] = useState(0)

  const increment = ()=>{
    setCounter(counter+1)
  }

  const decrement = ()=>{
    setCounter(counter-1)
  }

  const reset = ()=>{
    setCounter(0)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }]
  }

  const name = 'Peter';
  const age = 10;

  return (
    <>
    <Display  counter={counter}/>
    <Button
      onClick={increment}
      text="Increment"/>
    <Button
      onClick={decrement}
      text="Decrement"/>
    <Button
      onClick={reset}
      text="Reset"/>

    <div>
      <Header course = {course} />
      <Content parts={course.parts}/>
      <Total total = {course.parts} />
    </div>

    <div>
       <h1>Greetings</h1>
       <Hello name="Maya" age={26+10}/>
       <Hello name={name} age={age}/>
    </div>
    </>
  )
}

export default App
