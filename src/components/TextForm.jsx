import React, { useState } from 'react'

function TextForm(props) {

  const [text, setText] = useState('');
  const [wordCount, setwordCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);


  const handleUClick = () => {
    let textU = text;
    textU = textU.toUpperCase();
    setText(textU);
    props.showAlert("Converted to UPPERCASE!", "success");
  }

  const handleLClick = () => {
    let textL = text;
    textL = textL.toLowerCase();
    setText(textL);
    props.showAlert("CONVERTED TO lowercase!", "success");  
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
    props.showAlert("CoNvErTeD To AlTeRnATiNgCaSe!", "success");
  }
  
  const handleOnChange = (event) => {
  
    setText(event.target.value)
    setwordCount(text === ''?0:text.split(' ').length)
    setsentenceCount(text === ''?0:text.split('.').length)
    // console.log({text})
  }

  const copyText  = () => {
    let textContent = document.getElementById("myBox").value;
    navigator.clipboard.writeText(textContent)
    props.showAlert("Text copied | deipoc txeT!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(' ');
    setText(newText);
    props.showAlert("Extra spaces   removed!", "success");
  }

  return (
    <>
      <div className={`container bg-${props.darkTheme?"dark":"light"} text-${props.darkTheme?"light":"dark"}`} style={{borderRadius: '20px'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
          <textarea className={`form-control bg-${props.darkTheme?"dark":"light"} text-${props.darkTheme?"light":"dark"}`} id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLClick}>convert to lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleAltClick}>convert to AlTeRnAtInGcAsE</button>
        <button className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className={`container bg-${props.darkTheme?"dark":"light"} text-${props.darkTheme?"light":"dark"}`} style={{borderRadius: "10px"}}>
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