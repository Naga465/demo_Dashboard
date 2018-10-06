import React from 'react'


var headers = [ "Name","Phone","Id"];

const TableHead = (rowData) =>{
    console.log("props in table",rowData);
    return(
        <div className = "t_header">
            <div className = "r_column">
            {headers.map((number) => <label className="r_head">{number}</label>)} 
            {/* <label> phone </label> */}
            </div>
            <Row values = {rowData}/>
            {/* <button  onClick = {(event) =>{ this.nextPage(event)}} className = "page_nataion">nextPage</button> */}

        </div>
    )
}

// nextPage = (event)=>{
//     console.log("next page",event);

// }


const Row = (info)=>{
    console.log("props in row",info);
    var patient_data = info.values.data.data;
    console.log(patient_data);
    return(
    <div id = "main">
        {patient_data.map((i ,index) => <div id ={"r"+index} className = "r1_column">
         {Object.values(i).map((values, index) =>
             <label className = "r_data">{values}</label>)}
             <img src = "view.png" width = "30px" alt = "view" onClick={(event) => {onView(event ,index)}}></img>
             <img src = "update.png" width = "30px" alt = "update" onClick={(event) => {onUpdate(event ,index,info.values.data)}}></img>

        </div>)}
    </div>
    )
}

const set = new Set();

function onUpdate(event,index,prop){
    console.log("update called",prop);
    prop.update(index);

}

function onView(event ,index){
    console.log("view clicked",event);

    var id = document.getElementById("r"+index);
    
         if(!set.has(index)){
            set.add(index);
            console.log(set.has(index),set.size);
            var node = document.createElement("DIV");
            node.style.height = "100px";
            node.id = "show"+index;
            node.textContent = "Data is not Available"
            node.style.fontWeight = "bold";
            node.style.fontSize = "40";
            node.style.marginTop="15px"
            node.style.color = "lightseagreen"
            node.style.textAlign = "center";
            node.style.background="white";
            id.style.height = "150px";
            id.appendChild(node);
        } 
         else{
            set.delete(index);
            console.log("removed")
            id.removeChild(id.childNodes[5]);
            id.style.height ="40px";
        }
    }

class Table extends React.Component{
    constructor(props){
        super(props);
        this.props =props;
        console.log("table component called",this.props);
        this.state = {
            props : this.props
        }

    }
    render(){
        return(
            <div>
            <TableHead data = {this.props}/>
            </div>
        )
    }
}
        
          

    


export default Table