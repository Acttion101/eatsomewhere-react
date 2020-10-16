import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #bf7f4bc9;
`
export const ContentLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid #707070 2px;
  border-radius: 1rem;
  padding: 4rem 2rem;
  background-color: #fff;
  box-shadow: 6px 6px rgb(65, 65, 65);
`

export const InputLogin = styled.input`
  width: 55%;
  padding: 1rem 5rem 1rem 1rem;
  border: solid #707070 1px;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 0px 5px #ff7700;
  font-size: 1rem;
  margin: 0rem 1rem 2rem 0rem;
`
export const ButtonLogin = styled.button`
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