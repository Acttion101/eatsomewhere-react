import React, { useState } from 'react'
import styled from 'styled-components'

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #bf804b;
`
const ContentLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 13rem;
`
const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`
const ContentInputLogin = styled.div`
  padding: 0rem 0rem 2rem 0rem;
`

const InputLogin = styled.input`
  padding: 1.5rem 6.5rem;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 0px 5px #f37305;
  font-size: 1rem;
`
const ButtonLogin = styled.button`
  font-size: 1rem;
  padding: 1rem;
  border: none;
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
function Content() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const handleInput = event => setValue(event.target.value)
  const handleInputPassword = event => setPassword(event.target.value)
  return (
    <ContainerLogin>
      <ContentLogin>img</ContentLogin>
      <ContentLogin>
        <FormLogin>
          <ContentInputLogin>
            <InputLogin
              type="text"
              value={value}
              placeholder="ชื่อผู้ใช้"
              onChange={handleInput}></InputLogin>
          </ContentInputLogin>
          <ContentInputLogin>
            <InputLogin
              type="password"
              value={password}
              placeholder="รหัสผ่าน"
              onChange={handleInputPassword}></InputLogin>
          </ContentInputLogin>
          <ButtonLogin>เข้าสู่ระบบ</ButtonLogin>
        </FormLogin>
      </ContentLogin>
    </ContainerLogin>
  )
}

export default Content
