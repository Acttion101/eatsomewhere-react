import React from 'react'
import { BackContent, Card, Container, Comment } from './styled'
import styled from 'styled-components'
import { Footer } from '../../Footer/styled'
import TodoList from '../../Todo/TodoList'
import { TextFooter, TextNews } from '../../Typography'

const Test = styled.div`
  width: 70vw;
  height: 150px;
  background-color: #a25c20;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  select {
    width: 300px;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 5px 20px;
    color: white;
  }
`
const BG = styled.div`
  display: flex;
  padding: 30px 60px;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  margin: 0 1rem 1.5rem 1rem;
`

const Select = styled.select`
  border-radius: 5px;
  font-size:25px;
`
function PostView () {
  return (
    <>
      <BackContent>
        <Test>
          <h1>ชุมชน</h1>
          <BG>
            <Select>
              <option value='volvo'>มหาลัยเชียงใหม่</option>
              <option value='saab'>มหาลัยเเม่โจ้</option>
              <option value='opel'>มหาวิทยลัยธรรมศาสตร์</option>
              <option value='audi'>มหาลัยจุฬาลงกรณ์</option>
            </Select>

            <Select>
              <option value='volvo'>หมวดหมู่</option>
              <option value='saab'>ร้านอาหาร</option>
              <option value='opel'>ของหวาน</option>
              <option value='audi'>ของกินเล่น</option>
            </Select>
          </BG>
        </Test>
        <Card>
          <TextNews>ชื่อผู้ใช้</TextNews>
          <Container>
            <h4>
              <p> หาร้านอร่อยในหอสาม</p>
            </h4>
            <p>

              หาร้านอร่อยแถวหอสามอยู่หอสามายแล้วไม่รู้จะกินอะไรดีเพื่อนๆช่วยแนะนำหน่อยครับ
            </p>
          </Container>
        </Card>
        <Comment>
          <TodoList />
        </Comment>
      </BackContent>
      <Footer>
        <TextFooter>wheretoeat@gmail.com</TextFooter>
      </Footer>
    </>
  )
}
export default PostView
