import React from 'react'
import styled from 'styled-components'
import {
  Text,
  Logo
} from '/Users/ramita/eatsomewhere-react/src/components/Typography'

const NavContainerLogin = styled.div`
  background-color: #f37305;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 60px;
  box-shadow: 0px 5px #00000025;
`

const NavButtonLogin = styled.button`
  padding: 1rem 2rem;
  border: #707070 solid 2px;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: 0px 5px #00000025;
  font-size: 20px;
  display: inline-block;
  position: relative;
  transition: 0.5s;
`
function Navbar() {
  
  return (
    <NavContainerLogin>
      <Logo>Logo</Logo>
      <Text>WHERE TO EAT</Text>
      <NavButtonLogin>สมัครสมาชิก</NavButtonLogin>
    </NavContainerLogin>
  )
}

export default Navbar
