import React from 'react'
import {
  CommentText
} from '../Detail/Content/styled'
function Todo ({ todos, completeTodo }) {
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: ''
  // })
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
      key={index}
    >
      <CommentText key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </CommentText>
    </div>
  ))
}

export default Todo
