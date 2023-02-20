import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BoxSlide from './BoxSlide'
function App() {
  

  return (
    <div className="App">
      <BoxSlide size="50px"></BoxSlide>
      <BoxSlide size="100px"></BoxSlide>
      <BoxSlide size="150px"></BoxSlide>
    </div>
  )
}

export default App
