import styled from 'styled-components'
import Logo from '../../../assets/Logo.jpg'
export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81vh;
  width: 100vw;
  background-color: #bf804b;
`
export const ContentRegister = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
`
export const FormRegister = styled.form`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  
`

export const ContentInputAgeDate = styled.div`
  width: 65%;
  padding: 0rem 1rem 0rem 0rem;
  display: flex;
  flex-direction: row;
`
export const InputRegister = styled.input`
  width: 55%;
  padding: 1rem 1rem 1rem 1rem;
  border: solid #707070 1px;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 5px 6px 8px 4px #f37305;
  font-size: 1rem;
  margin: 0rem 1rem 2rem 0rem;
`
export const ButtonRegister = styled.button`
  width: 45%;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  margin: 0rem 3rem;
  cursor: pointer;
  box-shadow: 0px 4px 7px 3px rgba(0, 0, 0, 0.301);
  &:active {
    background-color: #f37305;
    box-shadow: 0 5px #00000063;
    transform: translateY(4px);
  }
`
export const ImageLogo = styled.div`
  
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 450px;
  width: 450px;
`
