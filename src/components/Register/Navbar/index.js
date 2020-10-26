import React from 'react'
import { NavContainerRegister, NavButtonRegister } from './styled'
import {
  Text,
  Logo
} from '../../Typography'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <NavContainerRegister>
      <Logo>
        <Text>WHERE TO EAT</Text>
      </Logo>
      <Link to='/login'>
        <NavButtonRegister>
          เข้าสู่ระบบ
        </NavButtonRegister>
      </Link>
    </NavContainerRegister>
  )
}

export default Navbar
