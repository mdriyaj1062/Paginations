import React from "react";
type buttonProps={
   
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
 
}
 const Button=(props:buttonProps)=>{
   
    return(<>
    <button onClick={props.handleClick}>Click Me</button>
    
    </>
        
    )
}
export default Button