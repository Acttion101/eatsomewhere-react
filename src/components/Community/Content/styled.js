import styled from 'styled-components'
import Img from '../../../assets/img1.jpg'

export const BackContent = styled.div`
  display: flex;
  margin: 50px 0 0 50px;
  padding: 0 10px 10px;
  border-radius: 2rem;
  align-items: top;
  height: 100vh;
  width: 70vw;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  input{
    width: 600px;
    height:50px;
    display:flex;
    flex-direction:column;
    margin: 10px;
  }
  button{
    
  }
`
export const Container = styled.div`
  padding: 2px 16px;

`
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 200px;
  &:hover{
    box-shadow: 0 8px 30px 0 rgba(0,0,0,0.2);
  }

`
export const NavButtonHome = styled.button`
  padding: 0.5rem 1rem;
  border: #707070 solid 2px;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: 0px 5px #00000025;
  font-size: 20px;
  position: relative;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Pic = styled.div`
background-image:url(${Img});
`
