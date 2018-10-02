import React from "react";
import {render} from "react-dom"
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";





class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.props=props;
        console.log("hi",props.data);

    }
    render(){
        console.log("sai",this.props.data[0])
        return(
           <div className = "dashboard_cont">
             <Search/>
             <Table data = {this.props.data}/>
             {/* <div className = "sidebar_cont"> */}
             {/* </dTiv> */}
            </div>
        )

    }
}

export default Dashboard
