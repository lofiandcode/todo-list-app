import React, { Fragment } from 'react';
import './App.css';

// Components
import InputTodo from './components/InputTodo';
import List from './components/List';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <h1 className='text-center mt-5'>To-Do List App</h1>
        <InputTodo />
        <List />
      </div>
    </Fragment>
  );
}

export default App;
