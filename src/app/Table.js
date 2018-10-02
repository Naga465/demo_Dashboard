import React from 'react'


var headers = [ "s.no","name","Phone"];
const Table = (rowData) =>{
    console.log(rowData);
    return(
        <div className = "t_header">
            <div className = "r_column">
            {headers.map((number) => <label className="r_head">{number}</label>)} 
            {/* <label> phone </label> */}
            </div>
            <Row data = {rowData}/>
        </div>
    )
}

const Row = (values)=>{
    var patient_data = values.data;
    var c =Object.values(patient_data);
    var b = c[0];
    return(
    <div id = "main">
        {patient_data.map((i ,index) => <div id ={"r"+index} className = "r1_column">
         {Object.values(i).map((values, index) =>
             <label className = "r_data">{values}</label>)}
             <img src = "view.png" width = "30px" alt = "view" onClick={(event) => {onView(event ,index)}}></img>
             <img src = "update.png" width = "30px" alt = "update" onClick={(event) => {onUpdate(event ,index)}}></img>

        </div>)}
    </div>
    )
}

const set = new Set();

function onUpdate(event,index){
    console.log("update called");
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
    


export default Table