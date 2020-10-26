import React from 'react'
import { NavContainerLogin, NavButtonLogin } from './styled'
import { Link } from 'react-router-dom'
import {
  Text,
  Logo
} from '../../Typography'

function Navbar () {
  return (
    <NavContainerLogin>
      <Logo>
        <Link to='/home'>Logo</Link>
        <Text>WHERE TO EAT</Text>
      </Logo>
      <Link to='/register'>
        <NavButtonLogin>
          สมัครสมาชิก
        </NavButtonLogin>
      </Link>
    </NavContainerLogin>
  )
}

export default Navbar
