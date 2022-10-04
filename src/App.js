// import logo from './logo.svg';me
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import {Switch,Route} from 'react-router-dom';
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom';

function App() {
  //dark mode is enabled or not
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAllert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');      
      document.body.style.backgroundColor='#042743';
      document.title = "TextUtils- Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils- Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = "TextUtils- Light Mode";
      
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutil" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3" >
        {/* <Switch> */}
          {/* <Route  path="/about" exact component={About}>
            <About mode={mode}/>
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAllert={showAllert} heading="Enter the heading to analyze below." mode={mode}/>
          {/* </Route>
        </Switch> */}
        {/* Before using router */}
        {/* <TextForm showAllert={showAllert} heading="Enter the heading to analyze below." mode={mode}/> */}
        {/* <About/> */}
      </div>
     {/* </Router>       */}
    </>
    
  );
}

export default App;
