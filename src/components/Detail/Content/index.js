import React from 'react'
import {
  ContentDetail,
  Box,
  TopicDetail,
  Line,
  DetailImage,
  BoxInput,
  Picture
} from './styled'
import { TopicText, Detail, TextFooter } from '../../Typography'
import { Footer } from '../../Footer/styled'
import TodoList from '../../Todo/TodoList'

function Content () {
  return (
    <ContentDetail>
      <Box>
        <TopicDetail>
          <TopicText>ร้านVolcano</TopicText>
          <Line />
        </TopicDetail>
        <DetailImage>
          <Picture />
        </DetailImage>
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
        <BoxInput>
          <TodoList />
        </BoxInput>
      </Box>
      <Footer>
        <TextFooter>wheretoeat@gmail.com</TextFooter>
      </Footer>
    </ContentDetail>
  )
}

export default Content
