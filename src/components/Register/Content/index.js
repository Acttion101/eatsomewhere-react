import React, { useState } from 'react'
import styled from 'styled-components'

const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #bf804b;
`
const ContentRegister = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
`
const ContentInputRegister = styled.div`
  padding: 0rem 0rem 2rem 0rem;
  display:flex;
  flex-direction:row;
`
const ContentInputAgeDate = styled.div`
  padding: 0rem 1rem 0rem 0rem;
`

const InputRegister = styled.input`
  padding: 1.5rem 6.5rem;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 0px 5px #f37305;
  font-size: 1rem;
`
const InputAgeDate = styled.input`
  padding: 1.5rem 0.4rem;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 0px 5px #f37305;
  font-size: 1rem;
`
const ButtonRegister = styled.button`
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
  const [value,setValue] = useState('')
  const [password,setPassword] = useState('')
  const [inputName,setName] = useState('')
  const [inputLast,setLast] = useState('')
  const [inputAge,setAge] = useState('')
  const [inputDate,setDate] = useState('')
  const handleInputUser = (event) => setValue(event.target.value);
  const handleInputPassword = (event) => setPassword(event.target.value);
  const handleInputName = (event) => setName(event.target.value);
  const handleInputLast = (event) => setLast(event.target.value);
  const handleInputAge = (event) => setAge(event.target.value);
  const handleInputDate = (event) => setDate(event.target.value);
  return (
    <ContainerRegister>
      <ContentRegister>img</ContentRegister>
      <ContentRegister>
        <FormRegister>
          <ContentInputRegister>
            <InputRegister
              type="text"
              value={inputName}
              placeholder="ชื่อจริง"
              onChange={handleInputName}></InputRegister>
          </ContentInputRegister>
          <ContentInputRegister>
            <InputRegister
              type="text"
              value={inputLast}
              placeholder="นามสกุล"
              onChange={handleInputLast}></InputRegister>
          </ContentInputRegister>
          <ContentInputRegister>
            <ContentInputAgeDate>
              <InputAgeDate
                type="text"
                value={inputAge}
                placeholder="อายุ"
                onChange={handleInputAge}></InputAgeDate>
            </ContentInputAgeDate>
            <ContentInputAgeDate>
              <InputAgeDate
                type="text"
                value={inputDate}
                placeholder="วัน/เดือน/ปี"
                onChange={handleInputDate}></InputAgeDate>
            </ContentInputAgeDate>
          </ContentInputRegister>
          <ContentInputRegister>
            <InputRegister
              type="text"
              value={value}
              placeholder="ชื่อผู้ใช้"
              onChange={handleInputUser}></InputRegister>
          </ContentInputRegister>
          <ContentInputRegister>
            <InputRegister
              type="password"
              value={password}
              placeholder="รหัสผ่าน"
              onChange={handleInputPassword}></InputRegister>
          </ContentInputRegister>

          <ButtonRegister>สมัครสมาชิก</ButtonRegister>
        </FormRegister>
      </ContentRegister>
    </ContainerRegister>
  )
}

export default Content
