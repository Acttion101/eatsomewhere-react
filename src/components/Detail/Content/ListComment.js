import React from 'react'
import { Comment } from './styled'
function ListComment ({ children }) {
  return (
    <li className='list-item'>
      <Comment>{children}</Comment>
    </li>
  )
}
export default ListComment
