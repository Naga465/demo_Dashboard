import React from 'react'

const url = "http://localhost:3000/patients";

 class Login extends React.Component {
     constructor(props){
         super(props);
         this.props = props;
         this.state={
            username:'',
            password:''
            }
         console.log("login",props);
         this.status = false;

     }

login = () => {
    console.log("i am done");
    let data = this.props;
    let state = this.state;
    var Details = [];
    var status = state.username =="undefined" && state.password =="un@123" ? true : false
    let fetchData = { 
        method: 'GET', 
        headers: new Headers()
    }

    fetch(url,fetchData)
        .then((resp) => resp.json())
        .then(function(resp){
          console.log("data",(resp));            
          data.onLogin(status ,resp);
          
        })
        .catch((error) =>{
          console.log(error);
        })

    
}


render(){
    return (
<div className="content_login">
  <h1>Login</h1>
    <div  className = "form_cont" >
        <div className="user_cont">
          <p>  
          <label>Username</label>
          </p>
            <input type="text" onChange = {(event) => this.setState({username:event.target.value})} name="username" id="user"  required />
         </div>
         <div className="user_cont"> 
          <p>
          <label>Password</label>
          </p>
            <input type="password" onChange = {(event) => this.setState({password:event.target.value})} name="password" id="pass"  required />
          </div>
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          <button className="button"  onClick = {this.login}>Login</button>
    </div>
      </div>)

 }
}
      export default Login
