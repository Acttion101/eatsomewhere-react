import React from 'react'
import { BackContent, Card, Container, Comment } from './styled'
import styled from 'styled-components'
import TodoList from '../../Todo/TodoList'

const Test = styled.div`
  width: 80vw;
  height: 150px;
  background-color: #a25c20;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  select {
    width: 300px;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
  }
  h1 {
    color: white;
  }
`
function PostView () {
  return (
    <BackContent>
      <Test>
        <h1>ชุมชน</h1>

        <select>
          <option value='volvo'>มหาลัยเชียงใหม่</option>
          <option value='saab'>มหาลัยเเม่โจ้</option>
          <option value='opel'>มหาวิทยลัยธรรมศาสตร์</option>
          <option value='audi'>มหาลัยจุฬาลงกรณ์</option>
        </select>

        <select>
          <option value='volvo'>หมวดหมู่</option>
          <option value='saab'>ร้านอาหาร</option>
          <option value='opel'>ของหวาน</option>
          <option value='audi'>ของกินเล่น</option>
        </select>
      </Test>
      <Card>
        <h1>ชื่อผู้ใช้</h1>
        <Container>
          <h4>
            <b> หาร้านอร่อยในหอสาม</b>
          </h4>
          <p>
            หาร้านอร่อยแถวหอสามอยู่หอสามายแล้วไม่รู้จะกิรอะไรดีเพื่อนๆช่วยแนะนำหน่อยครับ
          </p>
        </Container>
      </Card>
      <Comment>
        <TodoList />
      </Comment>
    </BackContent>
  )
}
export default PostView
