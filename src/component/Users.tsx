import React, { useState } from "react";
type AutherUser={
    name:string
    email:string
}
const Users=()=>{
    const[users,setUsers]=useState<AutherUser | null>(null);
    const handleLogin=()=>{
        setUsers({
            name:'john',
            email:'john@gmail.com',
        })
    }
    const handkeLoggedout=()=>{
        setUsers(null)
    }
    return(
        <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handkeLoggedout}>Logout</button>
        <div>{users?.name}</div>
        <div>{users?.email}</div>
        </>
    )
}
export default Users