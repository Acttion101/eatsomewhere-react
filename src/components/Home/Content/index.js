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
  Test, ImageStore
} from './styled'
import { Footer } from '../../Footer/styled'

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
                <StoreImg><ImageStore /></StoreImg>
              </Link>
              <TextStore>ร้านโวคาโน่</TextStore>
            </CardHot>
            <CardHot>
              <Link to='/detail'>
                <StoreImg><ImageStore /></StoreImg>
              </Link>
              <TextStore>hhhhhh</TextStore>

            </CardHot>
            <CardHot>
              <Link to='/detail'>
                <StoreImg><ImageStore /></StoreImg>
              </Link>
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
              <Link to='/detail'>
                <StoreImg><ImageStore /></StoreImg>
              </Link>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
            <CardPro>
              <Link to='/detail'>
                <StoreImg><ImageStore /></StoreImg>
              </Link>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
            <CardPro>
              <Link to='/detail'>
                <StoreImg><ImageStore /></StoreImg>
              </Link>
              <TextStore>hhhhhh</TextStore>
            </CardPro>
          </ContentDetail>
        </HomePromotion>
        <Footer>
          <TextFooter>wheretoeat@gmail.com</TextFooter>
        </Footer>
      </ContentHome>
    </ContainerHome>
  )
}

export default Content
