import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);
  return (
    <div className="App">
      <h1>ColorBox</h1>
      <ColorBox/>

      <h1>TodoList</h1>
      <TodoList todos={todoList}/>
    </div>
  );
}

export default App;
