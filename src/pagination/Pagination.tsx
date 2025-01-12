import React, { useEffect, useState } from "react";
import './pagination.css';

const Pagination=()=>{
    interface User {
        id: number;
        firstname: string;
        email: string;
        phone: string;
        // other optional fields can go here
      }
      
    const[data,setData]=useState<User[]>([]);
    // console.log(data);
    const[currentPage,setCurrentPage]=useState<number>(1);
    const recordPerPage=5;
    const lastIndex=currentPage*recordPerPage;
    const firstIndex=lastIndex-recordPerPage;
    const records=data.slice(firstIndex,lastIndex);
    console.log(records);
    const TotalNumOfPages=Math.ceil(data.length/recordPerPage);
    const numbers=[...Array(TotalNumOfPages+1).keys()].slice(1);
    console.log('numbers:',numbers)

    useEffect(()=>{
     fetch('https://jsonplaceholder.org/users')
     .then((response)=>response.json())
     .then((data)=>setData(data))
    },[])

    const prevPage=()=>{
        setCurrentPage(currentPage-1);
    }
    const nextPage=()=>{
        setCurrentPage(currentPage+1);
    }
    const changeCurrentPage=(m:number)=>{
        setCurrentPage(m);
        
    }
   return(
    <div className="main-container">
      <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            {
                records.map((d,i)=>(
                    <tr key={i}>
                        <td >{d.id }</td>
                        <td>{d.firstname}</td>
                        <td>{d.email}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      <nav className="pagination">
       <li className="pageItem">
         {
            currentPage>1 ? <button onClick={prevPage}>Prev</button> : ''
         }
       </li>
         {
            numbers.map((n,i)=>(
                <li  className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                   <button onClick={()=>changeCurrentPage(n)}>{n}</button>
                </li>
            ))
         }
       <li className="nextPage">
          {
            currentPage==6?'':<button onClick={nextPage}>Next</button>
          }
       </li>
      </nav>
    </div>
   )
}
export default Pagination