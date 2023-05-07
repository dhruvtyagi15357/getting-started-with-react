import React, { useState } from 'react'
import "./TextForm.css"
// import PropTypes from 'prop-types'

function TextForm(props) {

  const [text, setText] = useState('');
  const [wordCount, setwordCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);


  const handleUClick = () => {
    let textU = text;
    textU = textU.toUpperCase();
    setText(textU)
  
  }

  const handleLClick = () => {
    let textL = text;
    textL = textL.toLowerCase();
    setText(textL);
  
  }

  const handleAltClick = () => {
    let newText='';
    let i = 0;
    for (let element of text) {
      i+=1;
      if (i%2 == 0){
        element = element.toLowerCase();
      }
      else{
        element = element.toUpperCase();
      }

      newText+=element;
    };

    setText(newText);
  
  }
  
  const handleOnChange = (event) => {
  
    setText(event.target.value)
    setwordCount(text === ''?0:text.split(' ').length)
    setsentenceCount(text === ''?0:text.split('.').length)
    // console.log({text})
  }


  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
          <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUClick}>Convert to uppercase</button>
        <button className='btn btn- btn-primary mx-1' onClick={handleLClick}>convert to lowercase</button>
        <button className='btn btn- btn-primary mx-1' onClick={handleAltClick}>convert to AlTeRnAtInGcAsE</button>
      </div>

      <div className="container">
        <h1>Your text summary: </h1>
        <p>Words: {wordCount}</p>
        <p>Characters: {text.length}</p>
        <p>Sentences: {sentenceCount}</p>
        <h6>Time required to read the text: {(1/200) * wordCount} minuites</h6>
      </div>
    </>
  )
}

export default TextForm