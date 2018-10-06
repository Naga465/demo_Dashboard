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


render() {
        return (
                <div className="updateForm">
                <h1>{this.props.tittle}</h1>
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
                        <button className="update_btn"  onClick = {() => {this.props.onClick(this.state)}}>update</button>
                        <button className="cancel_btn"  onClick = {() => {this.props.cancelClick()}}>Cancel</button>
                    
                    </div>
                    </div>
        )
    }
}

export default Form