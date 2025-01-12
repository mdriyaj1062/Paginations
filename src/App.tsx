import React from 'react';

import './App.css';
import Greet from './component/Greet.tsx';
import Person from './component/Person.tsx';
import List from './component/List.tsx';
import Button from './component/Button.tsx';
import Users from './component/Users.tsx';
import Counter from './component/Counter.tsx';
import StopWatch from './component/StopWatch.tsx';
import Form from './component/Form.tsx';
import TodoList from './component/TodoList.tsx';
import Pagination from './pagination/Pagination.tsx';

function App() {
  const fullName={
    first:'Riyaj',
    last:'Ahmad'
  }
  const ListName=[
    {
      first:'john',
      last:'alex'
    },
    {
      first:'jahn',
      last:'aex'
    },
    {
      first:'lohn',
      last:'ax'
    },
    {
      first:'mhn',
      last:'alx'
    },
  ]
  return (
    <div className="App">
     {/* <Greet name="Cloud" messageCount={20}/>
     <Person name={fullName}/>
     <List names={ListName}/>
     <Button handleClick={()=>{
      console.log('button was clicked!');
     }}/>
    <Users/>
    <Counter/>
    <StopWatch/> */}
    {/* <Form/> */}
    {/* <TodoList/> */}
    <Pagination/>
    </div>
  );
}

export default App;
