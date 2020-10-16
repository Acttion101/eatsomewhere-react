import React, { useState } from 'react'
import {
  ContainerRegister,
  ContentRegister,
  FormRegister,
  InputRegister,
  ButtonRegister,
  ContentInputAgeDate,
} from './styled'

function Content() {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [inputName, setName] = useState('')
  const [inputLast, setLast] = useState('')
  const [inputAge, setAge] = useState('')
  const [inputDate, setDate] = useState('')
  const handleInputUser = event => setValue(event.target.value)
  const handleInputPassword = event => setPassword(event.target.value)
  const handleInputName = event => setName(event.target.value)
  const handleInputLast = event => setLast(event.target.value)
  const handleInputAge = event => setAge(event.target.value)
  const handleInputDate = event => setDate(event.target.value)
  return (
    <ContainerRegister>
      <ContentRegister>img</ContentRegister>
      <ContentRegister>
        <FormRegister>
          <InputRegister
            type="text"
            value={inputName}
            placeholder="ชื่อจริง"
            onChange={handleInputName}></InputRegister>
          <InputRegister
            type="text"
            value={inputLast}
            placeholder="นามสกุล"
            onChange={handleInputLast}></InputRegister>
          <ContentInputAgeDate>
            <InputRegister
              type="text"
              value={inputAge}
              placeholder="อายุ"
              onChange={handleInputAge}></InputRegister>
            <InputRegister
              type="text"
              value={inputDate}
              placeholder="วัน/เดือน/ปี"
              onChange={handleInputDate}></InputRegister>
          </ContentInputAgeDate>
          <InputRegister
            type="text"
            value={value}
            placeholder="ชื่อผู้ใช้"
            onChange={handleInputUser}></InputRegister>
          <InputRegister
            type="password"
            value={password}
            placeholder="รหัสผ่าน"
            onChange={handleInputPassword}></InputRegister>
          <ButtonRegister>สมัครสมาชิก</ButtonRegister>
        </FormRegister>
      </ContentRegister>
    </ContainerRegister>
  )
}

export default Content
