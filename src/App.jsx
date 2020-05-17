import React from 'react';
import {Router, navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Navbar"
import People from "./Components/People"
import Planet from "./Components/Planet"
import Starship from "./Components/Starship"
function App() {
  
  const showResults = (e,info) =>{
    e.preventDefault()
    // console.log(e)
    // console.log(info)
    navigate(`/${info.subject}/${info.id}`)
  }

  return (
    <>
    <Navbar showResults={showResults}/>
    <Router>
      <People path="/people/:id"/>
      <Planet path="/planets/:id"/>
      <Starship path="/starships/:id"/>
    </Router>
    </>
  );
}

export default App;
