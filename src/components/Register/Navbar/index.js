import React from 'react'
import { NavContainerRegister, NavButtonRegister } from './styled'
import {
  Text,
  Logo
} from '/Users/ramita/eatsomewhere-react/src/components/Typography'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <NavContainerRegister>
      <Logo>
        <Link to="/home">Logo</Link>
        <Text>WHERE TO EAT</Text>
      </Logo>

      <NavButtonRegister>
        <Link to="/login">เข้าสู่ระบบ</Link>
      </NavButtonRegister>
    </NavContainerRegister>
  )
}

export default Navbar
