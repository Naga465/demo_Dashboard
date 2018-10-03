import React from 'react'


class Form extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

        this.state = {
            name:"",
            phone:""
        }
    }



onClickUpdate =(index) =>{
    let data = { name:this.state.name ,phone:this.state.phone };
    console.log("update details",index);
    const url = "http://localhost:3000/patients/"+index ;
    console.log(url); 
    let request ={
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
.fetch(url, request)
    .then((resp) => console.log(resp.status))

    .catch((error) => {
        console.error();
    })


    
}

render() {
        return (
                <div className="updateForm">
                <h1>Update Details</h1>
                    <div  className = "update_cont" >
                        <div className="user_cont">
                        <label>name</label>
                        <label>
                        <input type="text" onChange = {(event) => this.setState({name:event.target.value})} name="username" id="user"  required />
                        </label>
                        </div>
                        <div className="user_cont"> 
                        <label>phone</label>
                            <label>
                            <input type="password" onChange = {(event) => this.setState({phone:event.target.value})} name="password" id="pass"  required />
                        </label>
                        </div>
                        <button className="update_btn"  onClick = {() => {this.onClickUpdate(this.props.index)}}>update</button>
                    </div>
                    </div>
        )
    }
}

export default Form