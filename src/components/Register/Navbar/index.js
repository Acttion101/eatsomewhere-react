import React from 'react'
import {
  NavContainerLogin,
  NavButtonLogin,
  Hello
} from '../../Login/Navbar/styled'
import {
  Text,
  Logo
} from '../../Typography'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <NavContainerLogin>
      <Logo>
        <Text>WHERE TO EAT</Text>
      </Logo>
      <Hello>
        <Link to='/login'>
          <NavButtonLogin> เข้าสู่ระบบ </NavButtonLogin>
        </Link>

      </Hello>
    </NavContainerLogin>
  )
}

export default Navbar
