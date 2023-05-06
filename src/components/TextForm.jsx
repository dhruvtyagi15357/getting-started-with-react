import React, { useState } from 'react'
// import PropTypes from 'prop-types'




function TextForm(props) {

  const [text, setText] = useState('')

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
  
  const handleOnChange = (event) => {
  
    setText(event.target.value)
    console.log({text})
  }
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUClick}>Convert to uppercase</button>
      <span> </span>
      <button className='btn btn-primary'onClick={handleLClick}>convert to lowercase</button>
    </div>
  )
}

export default TextForm