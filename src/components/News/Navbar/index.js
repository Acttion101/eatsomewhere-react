import React from 'react'
import { NavContainerLogin, NavButtonLogin, NavButtonHome, Hello, NavButtonNews } from './styled'
import { Link } from 'react-router-dom'
import {
  Text,
  Logo
} from '../../Typography'

function Navbar () {
  return (
    <NavContainerLogin>
      <Logo>
        <Text>WHERE TO EAT</Text>
      </Logo>
      <Hello>

        <Link to='/'><NavButtonHome> หน้าหลัก</NavButtonHome></Link>
        <Link to='/community'><NavButtonNews> ชุมนุม</NavButtonNews></Link>
        <Link to='/register'><NavButtonLogin> ชื่อผู้ใช้ </NavButtonLogin></Link>
      </Hello>
    </NavContainerLogin>
  )
}

export default Navbar
