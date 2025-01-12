import React from "react";
type listOfProps={
    names:{
        first:string,
        last:string
    }[]
}
const List=({names}:listOfProps)=>{
    return(
        <div>
          {
          names.map((e)=>(
            <p>{e.first} {e.last}</p>
           ))
          }
        </div>
    )
}
export default List