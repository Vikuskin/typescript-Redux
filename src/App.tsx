import React from 'react';
import { Counter } from './components/Counter';
import { Users } from './components/Users';
import { TodoList } from './components/TodoList';
import { Posts } from './components/Posts';

function App() {
  return (
    <>
      <Counter/>
      <hr/>
      <Users/>
      <hr/>
      <TodoList/>
      <hr/>
      <Posts/>
    </>
  );
  
}

export default App;
