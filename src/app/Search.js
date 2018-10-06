import React from "react"


function onCreate(prop) {
    console.log("oncreate clicked");
    prop.onCreate();
}

const Search = (props) => (
   <div className = "search">
            <button className="small_but" onClick = {() => {onCreate(props)}}>create</button>
   </div>
)
export default Search
