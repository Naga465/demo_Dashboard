import React from "react";
import {render} from "react-dom";
import Header from "./Header"
import Dashboard from "./Dashboard"
import Search from "./Search"
import Login from "./login"
import { Router, Route, Link, IndexRoute, hashHistory, Redirect } from 'react-router-dom'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logIn : false,
      Details:"",
      header:"Welcome to Patient Monetering Dashboard"
    }
    

      }

  loginClick = (status ,Det) =>{

    console.log("onLogin",Det);
    this.setState({Details:Det})
    this.setState ({header:"Patient Management"});
    this.setState({logIn:status});  
    
  }
  

  render() {
    let state = this.state;
    console.log("state",state);
     return (
        <div className = "top" >
          <div className = "container">
          <Header head = {this.state.header} />
              {state.logIn ? <Dashboard data = {state.Details}/>:<Login onLogin = {this.loginClick} ></Login> }
            </div>
        </div>  


     );
  }
}
render(<App/>,window.document.getElementById("app"));