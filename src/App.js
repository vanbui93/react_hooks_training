import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {

        //_limit=10&page=1    
        const paramString = queryString.stringify(filters);   //chuyển filters thành dạng _limit=10&page=1

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);

        const { data, pagination } = responseJSON;
        
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list', error.message);
      }
    }
    console.log('POST list effect');
    fetchPostList();
  }, [filters]);  //dấu [] là để chạy đúng 1 lần,  [filters] là dependencies, mỗi khi filters thay đổi thì sẽ chạy lại hàm useEffect()

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
    console.log(newPage);
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index !== -1) {
      const newTodoList = [...todoList];   //Nhớ clone ra list mới
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  }

  function handleTodoFormSubmit(formValues) {
    console.log('form submit', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log('newFilters', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })
    
  }

  return (
    <div className="App">
      <h1>ColorBox</h1>
      <ColorBox />

      <h1>TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

      
      <PostFilterForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
      <Clock/>
    </div>
  );
}

export default App;
