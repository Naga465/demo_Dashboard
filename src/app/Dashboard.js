import React from "react";
import {render} from "react-dom"
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Login from "./login";
import Form from "./Form";





class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
           table :true,
           tittle:"",
           action:""
        }
        console.log("hi",props.data);

    }

    onUpdate =(index) =>{
        console.log("props update",index);
        this.index = index;
        this.setState({table:false,tittle:"Update Details",action:"update"});

    }

    onCreate = () =>{
        console.log("props create");
        this.setState({table:false,tittle:"Create new Details",action:"create"});


    }

    CreateDetails =(state) =>{
        let data = {name:state.name ,phone:state.phone};
        console.log("create details");
        const url = "http://localhost:3000/patients" ;
        console.log(url); 
        let request = { 
            method: 'POST', 
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        
     fetch(url, request)
        .then((resp) => {console.log(resp.status)})
        .then( function(resp){
               
        })
    
        .catch((error) => {
            console.error();
        })

        this.cancel()


    }

UpdateDetails = (state) =>{
    console.log("update Details",state);

}

cancel = ()=>{
    console.log("cancel called");
    this.setState({table:true});
}

    render(){
        console.log("sai",this.props.data[0])
        console.log(this.state);
        let Action = this.state.action;
        return(
           <div className = "dashboard_cont">
             <Search data = {this.props} onCreate = {this.onCreate}/>
             {this.state.table ? <Table data = {this.props.data} update = {this.onUpdate}/> :Action =="update"? <Form onClick = {this.UpdateDetails}  cancelClick = {this.cancel} tittle = {this.state.tittle}/> : <Form onClick = {this.CreateDetails} cancelClick = {this.cancel} tittle = {this.state.tittle}/>}
             {/* <div className = "sidebar_cont"> */}
             {/* </dTiv> */}
            </div>
        )

    }
}

export default Dashboard
