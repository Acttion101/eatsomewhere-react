import styled from 'styled-components'
import Img from '../../../assets/img1.jpg'

export const BackContent = styled.div`
  display: flex;
  margin: 50px 0 2rem 50px;
  padding: 10px;
  border-radius: 2rem;
  align-items: top;
  height: 200vh;
  width: 70vw;
  background-color: #ffffff;
  flex-direction: column;
`
export const Container = styled.div`
  padding: 2px 16px;
  
`
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: auto;
  height: 300px;
  &:hover{
    box-shadow: 0 8px 30px 0 rgba(0,0,0,0.2);
  }
  margin:10px;
`
export const Pic = styled.div`
 display: flex;

background-image: url(${Img});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 250px;
width: 1057px;
`
export const LineHot = styled.div`
  height: 6px;
  width: 1056px;
  background-color: red;
`
