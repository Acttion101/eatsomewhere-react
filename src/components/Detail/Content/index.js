import React, { useState } from 'react'
import {
  ContentDetail,
  Box,
  TopicDetail,
  Line,
  DetailImage,
  InputComment,
  ButtonComment,
  BoxInput,
  ContentButton,
  ListComment
} from './styled'
import { TopicText, Detail } from '../../Typography'
import { Image } from '../../../assets/img1.jpg'
import { useComment } from '../contexts/ActionContext'
import Comment from './ListComment'

function Content ({ onSubmit }) {
  const [value, setValue] = useState('')
  const [{ comments, handleAddComment }] = useComment()
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(value)
    setValue('')
  }
  const handleInput = event => setValue(event.target.value)
  return (
    <ContentDetail>
      <Box>
        <TopicDetail>
          <TopicText>ร้านVolcano</TopicText>
          <Line />
        </TopicDetail>
        <DetailImage src={Image} />
        <Detail>ชื่อร้าน : ร้านVolcano</Detail>
        <Detail>
          รายละเอียด : ร้านอยู่เเถวโครงการ PP Place หน้าปากซอย 5 บ้านใหม่หลังมอ
          ถนนสุเทพ เชียงใหม่ (ติดกับร้าน Sofuto) ทางร้านไม่รับบัตรเครดิต
          เป็นร้านที่เหมาะมากินขนม มากันเป็นกลุ่ม
          สำหรับคนชอบของหวานก็เเนะนำร้านนี้
        </Detail>
        <Detail>เบอร์โทร : 065-705-0905, 062-172-2270, 062-172-2205</Detail>
      </Box>

      <Box>

        <BoxInput onSubmit={handleSubmit}>
          <ListComment title='Comment'>
            {comments.map((item) => (
              <Comment key={item.id} id={item.id} type={item.type}>
                {item.content}
              </Comment>
            ))}
          </ListComment>
          <InputComment
            type='text'
            value={value}
            placeholder='แสดงความคิดเห็น'
            onChange={handleInput}
          />

          <ContentButton>
            <ButtonComment onSubmit={handleAddComment}>แสดงความคิดเห็น</ButtonComment>
          </ContentButton>
        </BoxInput>
      </Box>
    </ContentDetail>
  )
}

export default Content
