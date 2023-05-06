// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

function App() {
  let name="TextUtils";
  let aboutText="This is the about section";
  let heading="Enter the text to analyze: ";

  return (
      <>
        <NavBar title={name} aboutText={aboutText} />
        <div className="container my-3">
          <TextForm heading={heading}/>
        </div>
      </>
  )
}

export default App
