import React,{useState} from 'react';
import { Router, Link } from '@reach/router';
import Navbar from "./Components/Navbar"
const Number = props => <h2>The number is : {props.number}</h2>
const Word = props => <h2> The word is: {props.word}</h2>
const Home = props => <h2> Wellcome </h2>
const Login = prop => <h2> This is the login page</h2>
const Dashboard = props => <h2> This the Dash Board</h2>
const CustomizedHeader = props => {
  return (
    <div style={{backgroundColor: props.backGroundColor,
                textAlign: "center",
                border: "black solid 1px"}}>
      <h2 style= {{color: props.fontColor}}> 
        The word is: {props.content}
      </h2>
    </div>
  )
}

function App() {  
  return (
    <Router>
        <Home path="/home"/>
        <Number path="/:number"/>
        <Word path="/:word"/>
        <Navbar path="/"/>
        <Login path="/login"/>
        <Dashboard path="/dashboard"/>
        <CustomizedHeader path="/:content/:fontColor/:backGroundColor"/>
    </Router>
  );
}

export default App;
