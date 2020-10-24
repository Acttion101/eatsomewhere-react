import React from 'react'
import { NavContainerLogin, NavButtonLogin,NavButtonHome,Hello ,NavButtonNews} from './styled'
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
      <Hello>
      
      <NavButtonHome> <Link to="/">หน้าหลัก</Link></NavButtonHome>
      <NavButtonNews> <Link to="/news">ข่าวสาร</Link></NavButtonNews>
      <NavButtonLogin> <Link to="/register">ชื่อผู้ใช้</Link> </NavButtonLogin>
      </Hello>
    </NavContainerLogin>
  )
}

export default Navbar
