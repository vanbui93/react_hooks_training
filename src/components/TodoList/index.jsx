import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

//Trường hợp todos: PropTypes.array, khong có required thì phải thêm giá trị mặc định để tránh bị lỗi
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
}

function TodoList(props) {
  const {todos, onTodoClick} = props;
  return (
    <ul className="todo-list">
      {todos.map((todo,index) => (         //dùng ngoặc () -> nghĩa là trả về jsx
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;