import React from 'react'
import { NavContainerLogin, NavButtonLogin } from './styled'
import { Link } from 'react-router-dom'
import {
  Text,
  Logo
} from '/Users/ramita/eatsomewhere-react/src/components/Typography'

function Navbar() {
  return (
    <NavContainerLogin>
      <Logo>
        <Link to="/home">Logo</Link>
        <Text>WHERE TO EAT</Text>
      </Logo>

      <NavButtonLogin>
        <Link to="/register">สมัครสมาชิก</Link>
      </NavButtonLogin>
    </NavContainerLogin>
  )
}

export default Navbar
