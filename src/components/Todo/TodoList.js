import React, { useState } from 'react'
import TodoForm from './TodoFrom'
import Todo from './Todo'

function TodoList () {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }
  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <div className='textComment'>
        <Todo todos={todos} completeTodo={completeTodo} />
      </div>
      <h1>comment</h1>
      <TodoForm onSubmit={addTodo} />

    </div>
  )
}

export default TodoList
