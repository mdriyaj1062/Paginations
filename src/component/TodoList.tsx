import React, { useState } from "react";
import './Todo.css'
const TodoList=()=>{
   const[todoList,setTodoList]=useState<string[]>([]);
   console.log(todoList);
   const[errorMesage,setErrorMessage]=useState<string>('');
   console.log(errorMesage);


   const saveTodoList=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
 
     const toname=(event.target as HTMLFormElement).toname.value;
     if (toname) {
        setErrorMessage("");
      }
     if(!todoList.includes(toname)){
        let finalTodoList= [...todoList,toname];
        
        setTodoList(finalTodoList);
        
     }else{
        setErrorMessage("This name is already exist");
     }
   }
const list=todoList.map((value,index)=>{
    return(
        <TodoListItems value={value} key={index} indexNumber={index}
    todoList={todoList} setTodoList={setTodoList}/>
    )
})
   
   return(
    <div className="main-container">
        <h3>To Do List</h3>
        <form onSubmit={saveTodoList}>
            <input type="text" name="toname"  />
            <button>Save</button>
        </form>
        {errorMesage && <p style={{color:'red'}}>{errorMesage}</p>}
       <div className="outer-div">
       <ul>{list}</ul>
       </div>
        
    </div>
   )
}
export default TodoList
type TodoListItemsProps ={
    value: string;
    indexNumber: number;
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  }
  function TodoListItems({value,indexNumber,todoList,setTodoList}:TodoListItemsProps){
    let [status,setStatus] = useState(false)
    let deleteRow=()=>{
        let finalData=todoList.filter((v,i)=>i!=indexNumber);
        // console.log(finalData);
        setTodoList(finalData);
    }
    let checkStatus=()=>{
     setStatus(!status)
    }
    return(
 
        <li className={(status)? 'completetodo' : ''} onClick={checkStatus}>{indexNumber+1}   {value} <button onClick={deleteRow} style={{color:"blue"}} ><b>&times;</b></button></li>
    )
  }

