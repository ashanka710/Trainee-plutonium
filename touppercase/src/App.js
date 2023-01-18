import React, { useState } from "react";
import './App.scss';

function App() {

  const [text, setText] = useState('')
  const [para, setPara] = useState(false)
  
  const handleClick = (e) => {
    e.preventDefault();
    setText(e.target.value.toUpperCase())
  }

  const MakeTrue = () => {
    setPara(true)
  }
  
  const handleSubmit = () => {
    setText(text)
  }

  const bind = () => {
    handleSubmit()
    MakeTrue()
  }

  return (
    <div className="App">
    <div className='main'>
    <h1>Convert your text to <span>Upper Case</span></h1>
      <textarea placeholder='Enter your text here' onChange={handleClick}/>
      <button onClick={bind}>Convert</button>
      <div className="result">
      {para && <p> {text}</p> }
      </div>
      <div className='footer'>
      Made with React by <span>Muhaz</span> 
    </div>
    </div>
    </div>
  );
}

export default App;
