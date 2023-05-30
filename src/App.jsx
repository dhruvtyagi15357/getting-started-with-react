// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import AboutPage from './components/About'
import Alert from './components/alert'
import { useState } from "react";

function App() {

  let name="TextUtils";
  let aboutText=`Welcome to our text analysis website! Our website is designed to help you analyze any text quickly and easily. With a variety of useful features, you can make the most of your text in no time.

  One of our most popular features is the ability to convert text to upper case, lower case, and alternating case. This means you can easily format your text in any way you prefer, whether you need to make it more readable or just want to emphasize certain words.
  
  Another key feature of our website is the ability to count the number of characters, words, and sentences in your text. This can be incredibly useful for a variety of purposes, whether you're trying to keep your text within a certain length or just want to get a better sense of how much content you're dealing with.
  
  We also provide a tool to remove extra spaces in your text. This feature helps to clean up your text and make it easier to read, ensuring that your message comes across clearly and concisely.
  
  In addition to these helpful features, our website also includes the ability to copy text to your clipboard, making it easy to share or paste your text into another application.
  
  Finally, we also provide an estimate of the approximate time it will take to read your text. This feature can be especially useful if you're writing content for a website or blog and want to ensure that your readers can easily digest your text.
  
  Overall, our website is designed to be a powerful yet user-friendly tool for anyone looking to analyze and optimize their text. We hope you find it as helpful as we do!`;
  
  
  let heading="Enter the text to analyze: ";

  const [darkTheme, setTheme] = useState(false);

  const toggleTheme = ()=>{
    setTheme(!darkTheme)
    showAlert(`${!darkTheme?'Dark':'Light'} theme has been enabled!`, "success")
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }
  
  function componentDidMount() {
    document.body.style.backgroundColor = darkTheme?"#282C34":"white"
  }

  componentDidMount();
  

  return (
      <div>
        <NavBar title={name} aboutText={aboutText} darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        <Alert alert={alert}/>       
        <div className="container my-3">
          <TextForm heading={heading} darkTheme={darkTheme} showAlert={showAlert}/>
        </div>

        <AboutPage aboutText={aboutText}  darkTheme={darkTheme}/>
      </div>
  )
}

export default App
