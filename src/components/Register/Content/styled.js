import styled from 'styled-components'

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  border: solid #707070 2px;
  border-radius: 1rem;
  padding: 4rem 2rem;
  background-color: #fff;
  box-shadow: 6px 6px rgb(65, 65, 65);
  
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
  box-shadow: 0px 5px #f37305;
  font-size: 1rem;
  margin: 0rem 1rem 2rem 0rem;
`
export const ButtonRegister = styled.button`
  width: 45%;
  font-size: 1rem;
  padding: 1rem;
  border: solid #707070 1px;
  background-color: #ffffff;
  border-radius: 3rem;
  margin: 0rem 3rem;
  cursor: pointer;
  box-shadow: 0px 5px #00000025;
  &:active {
    background-color: #f37305;
    box-shadow: 0 5px #00000063;
    transform: translateY(4px);
  }
`