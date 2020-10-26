import React from 'react'
import {
  ContainerHome,
  ContentImage,
  ContentHome,
  Button,
  HomeHot,
  HomePromotion,
  CardHot,
  CardPro,
  StoreImg,
  LineHot,
  LinePro,
  Topic,
  ContentDetail,
  Test
} from './styled'
import { Footer } from '../../Footer/styled'
// import Review from 'react-star-rating'
import {
  TextStore,
  TextTopicHot,
  TextTopicPromotion,
  TextFooter
} from '../../Typography'

import { Link } from 'react-router-dom'

function Content () {
  return (
    <ContainerHome>
      <ContentImage>
        <Test>
          <Button><Link to='/news'>อ่านเพิ่มเติม</Link></Button>
        </Test>
      </ContentImage>

      <ContentHome>
        <HomeHot>
          <Topic>
            <TextTopicHot>ร้านอาหารยอดฮิตติดใจ</TextTopicHot>
            <LineHot />
          </Topic>
          <ContentDetail>
            <CardHot>
              <Link to='/detail'>
                <StoreImg>dsss</StoreImg>
              </Link>
              <TextStore>hhhhhh</TextStore>
            </CardHot>
            <CardHot>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
            </CardHot>
            <CardHot>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
            </CardHot>
          </ContentDetail>
        </HomeHot>

        <HomePromotion>
          <Topic>
            <TextTopicPromotion>ร้านอาหารยอดฮิตติดใจ</TextTopicPromotion>
            <LinePro />
          </Topic>
          <ContentDetail>
            <CardPro>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
            <CardPro>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
            <CardPro>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
          </ContentDetail>
        </HomePromotion>
        <Footer>
          <TextFooter>Copy right by where to eat</TextFooter>
        </Footer>
      </ContentHome>
    </ContainerHome>
  )
}

export default Content
