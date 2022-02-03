import React from 'react';
import { Counter } from './components/Counter';
import { Users } from './components/Users';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <Counter/>
      <Users/>
      <TodoList/>
    </>
  );
}

export default App;
