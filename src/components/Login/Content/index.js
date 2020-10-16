import React, { useState } from 'react'
import {
  ContainerLogin,
  ContentLogin,
  FormLogin,
  InputLogin,
  ButtonLogin
} from './styled'

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
          <InputLogin
            type="text"
            value={value}
            placeholder="ชื่อผู้ใช้"
            onChange={handleInput}></InputLogin>
          <InputLogin
            type="password"
            value={password}
            placeholder="รหัสผ่าน"
            onChange={handleInputPassword}></InputLogin>
          <ButtonLogin>เข้าสู่ระบบ</ButtonLogin>
        </FormLogin>
      </ContentLogin>
    </ContainerLogin>
  )
}

export default Content
