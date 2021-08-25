import React from 'react';
import Todo from "./Todo";
const TodoList = ({todos, settodos,filtered})=>{
    return(
        <div className="todo-container">
      <ul className="todo-list">
          {filtered.map(todo=>(
              <Todo  todos={todos} todo={todo} settodos={settodos} text={todo.text} key={todo.id}/>
          ))}
      </ul>
    </div>
    );
}

export default TodoList;