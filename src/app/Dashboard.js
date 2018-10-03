import React from "react";
import {render} from "react-dom"
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Form from "./Form";






class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
           table :true
        }
        console.log("hi",props.data);

    }

    onUpdate =(index) =>{
        console.log("props update",index);
        this.index = index;
        this.setState({table:false});

    }

    render(){
        console.log("sai",this.props.data[0])
        return(
           <div className = "dashboard_cont">
             <Search/>
             {this.state.table ? <Table data = {this.props.data} update = {this.onUpdate}/> :<Form index = {this.index}/>}
             {/* <div className = "sidebar_cont"> */}
             {/* </dTiv> */}
            </div>
        )

    }
}

export default Dashboard
