import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`
export const ContentHome = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100%;
  width: 100%;
`
// Store

export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  justify-content: flex-start;
`

export const StoreImg = styled.div``

export const Review = styled.div``

export const ContentDetail = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
// end Store

// Hot
export const CardHot = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 2rem;
  align-items: center;
  border: solid 5px #f37305;
  border-radius: 30px;
  padding: 7rem;
  box-shadow: 6px 6px 7px 3px rgba(0, 0, 0, 0.301);
`
export const LineHot = styled.div`
  height: 6px;
  width: 100%;
  background-color: red;
`
export const HomeHot = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70%;
  width: 100vw;
  padding: 45px 0px;
`
// endHot

// Pro
export const CardPro = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin-left: 2rem;
  align-items: center;
  border: solid 5px #ffffff;
  border-radius: 30px;
  padding: 7rem;

  box-shadow: 6px 6px 7px 3px rgba(0, 0, 0, 0.301);
`

export const LinePro = styled.div`
  height: 6px;
  width: 100%;
  background-color: #ffffff;
`

export const HomePromotion = styled.div`
  height: 70%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #af0909;
  padding: 45px 0px;
  margin-bottom: 45px;
`
// endPro

// img
export const Button = styled.button`
  order: 1;
  align-self: flex-end;
`

export const ContentImage = styled.div`
  padding:0rem 0rem 15rem 0rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  color: #ffffff;
`
// endimg
