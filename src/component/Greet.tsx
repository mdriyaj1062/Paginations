import React from "react";
type GreetProp={
    name:string,
    messageCount:number
}
const Greet=(props: GreetProp)=>{
    return(
        <div>Syren{props.name} count{props.messageCount}</div>
    )
}
export default Greet