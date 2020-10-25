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
  ContentDetail
} from './styled'
// import Review from 'react-star-rating'
import { TextStore, TextTopicHot, TextTopicPromotion } from '../../Typography'
import { Link } from 'react-router-dom'

// import backgroundImage from '../assets/Promotion.jpg'
// const handleRatingClick = (e, data)=> {

//   alert('You left a ' + data.rating + ' star rating for ' + data.caption);

// }
function Content () {
  return (
    <ContainerHome>
      <ContentImage>
        img
        <Button><Link to='/news'>อ่านเพิ่มเติม</Link></Button>
      </ContentImage>

      <ContentHome>
        <HomeHot>
          <Topic>
            <TextTopicHot>ร้านอาหารยอดฮิตติดใจ</TextTopicHot>
            <LineHot />
          </Topic>
          <ContentDetail>
            <CardHot>
              <Link to='/detail'><StoreImg>dsss</StoreImg></Link>
              <TextStore>hhhhhh</TextStore>
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} />  */}
            </CardHot>
            <CardHot>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} /> */}
            </CardHot>
            <CardHot>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} /> */}
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
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} /> */}
            </CardPro>
            <CardPro>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} /> */}
            </CardPro>
            <CardPro>
              <StoreImg>dsss</StoreImg>
              <TextStore>hhhhhh</TextStore>
              {/* <Review name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} /> */}
            </CardPro>
          </ContentDetail>
        </HomePromotion>
      </ContentHome>
    </ContainerHome>
  )
}

export default Content
