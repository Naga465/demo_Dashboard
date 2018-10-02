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
      Details:[],
      header:"Welcome to Patient Monetering Dashboard"
    }
    

      }

  loginClick = (status ,Details) =>{

    this.setState(({logIn:status}));

    // let fetchData = { 
    //     method: 'GET', 
    //     headers: new Headers()
    // }

    //   fetch(url,fetchData)
    //     .then((resp) =>resp.json())
    //     .then(function(data){
    //       console.log("data",data[0]);            
    //       return data.map((i) => Details.push(i));
          

    //     })
    //     .catch((error) =>{
    //       console.log(error);
    //     })

      this.setState(({Details:Details ,header:"Patient Management"}));
      
      }
  

  render() {
    let state = this.state;
    console.log("i am",state.Details);
    console.log(this.props);
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