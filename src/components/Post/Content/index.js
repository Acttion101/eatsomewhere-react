import React, { useState } from 'react'
import { BackContent } from './styled'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import { Footer } from '../../Footer/styled'
import { TextFooter } from '../../Typography'

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
    display:flex;
    justify-content:center;
    align-items:center;
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
  margin: 0 1rem 1.5rem 1rem ;
`

const Select = styled.select`
  border-radius: 5px;
font-size:25px;
`

function Post () {
  const [value, setValue] = useState('')

  const handleOnChange = (e, editor) => {
    const data = editor.getData()
    setValue(data)
  }
  return (
    <>
      <BackContent>
        <Test><h1>ชุมชน</h1>
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
        <from>
          <input type='text' placeholder='หัวข้อที่จะโพส' />
          <input type='text' placeholder='สถานที่ที่จะโพสลง เช่น มหาวิทยลัยเชียงใหม่' />
          <CKEditor
            editor={ClassicEditor} placeholder='รายละเอียดโพส เช่น วันนี้กินร้านไหนดีแนะนำหน่อย'
            onChange={handleOnChange}
          />
          <button type='submit'>โพสข้อความของคุณ</button>
          {ReactHtmlParser(value)}
        </from>
      </BackContent>
      <Footer><TextFooter>Copy right by where to eat</TextFooter></Footer>
    </>
  )
}
export default Post
