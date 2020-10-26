import React from 'react'
import { BackContent, Container, Card, Pic, LineHot } from './styled'
import { TextFooter } from '../../Typography'
import { Footer } from '../../Footer/styled'
function index () {
  return (
    <>
      <BackContent>

        <h1>ข่าวสารและกิจกรรม</h1>
        <LineHot />
        <Card><Pic />
          <Container>
            <h4>
              <b>โปรโมชั่นร้าน นิมานคาเฟ่</b>
            </h4>
            <p>โปรโมชั่น 1 แถม 1 ร้านนิมานคาเฟ่</p>
          </Container>
        </Card>

        <Card><Pic />

          <Container>
            <h4>
              <b>โปรโมชั่นร้าน นิมานคาเฟ่</b>
            </h4>
            <p>โปรโมชั่น 1 แถม 1 ร้านนิมานคาเฟ่</p>
          </Container>
        </Card>

        <Card><Pic />

          <Container>
            <h4>
              <b>โปรโมชั่นร้าน นิมานคาเฟ่</b>
            </h4>
            <p>โปรโมชั่น 1 แถม 1 ร้านนิมานคาเฟ่</p>
          </Container>
        </Card>

        <Card><Pic />

          <Container>
            <h4>
              <b>โปรโมชั่นร้าน นิมานคาเฟ่</b>
            </h4>
            <p>โปรโมชั่น 1 แถม 1 ร้านนิมานคาเฟ่</p>
          </Container>
        </Card>

      </BackContent>
      <Footer><TextFooter>Copy right by where to eat</TextFooter></Footer>
    </>
  )
}
export default index
