import React from 'react'
import { NavContainerLogin, NavButtonLogin,NavButtonHome } from './styled'
import { Link } from 'react-router-dom'
import {
  Text,
  Logo
} from '../../Typography'

function Navbar() {
  return (
    <NavContainerLogin>
      <Logo>
        
        <Text>WHERE TO EAT</Text>
      </Logo>

      <NavButtonLogin> <Link to="/register">ชื่อผู้ใช้</Link> </NavButtonLogin>
      <NavButtonHome> <Link to="/">หน้าหลัก</Link></NavButtonHome>
    </NavContainerLogin>
  )
}

export default Navbar
