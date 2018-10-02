import React from 'react'


var headers = [ "s.no","name","Phone"];
var temp = [{ "id": 1, "name": "user1", "phone": "123456"},
            { "id": 2, "name": "user2", "phone": "123456"},
            { "id": 3, "name": "user3", "phone": "123456"},
            { "id": 4, "name": "user4", "phone": "123456"},
            { "id": 5, "name": "user5", "phone": "123456"},
            { "id": 6, "name": "user6", "phone": "123456"},
            { "id": 7, "name": "user7", "phone": "123456"},
            { "id": 8, "name": "user8", "phone": "123456"},
            { "id": 9, "name": "user9", "phone": "123456"},
            { "id": 10, "name": "user9", "phone": "123456"},
            { "id": 11, "name": "user9", "phone": "123456"}

            
            ]

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
        {temp.map((i ,index) => <div id ={"r"+index} className = "r1_column">
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