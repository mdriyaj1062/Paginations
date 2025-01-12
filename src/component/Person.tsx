import React from "react"

type perosnProps={
    name:{
        first:String
        last:String
    }
}
const Person=(props:perosnProps)=>{
    return(
        <div>{props.name.first} {props.name.last}</div>
    )
}
export default Person