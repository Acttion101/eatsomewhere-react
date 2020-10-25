import React from 'react'
import {
  NavBarContainer,
  ActionContainer,
  Action,
  NavButtonLogin
} from './styled'
import {
  Text,
  Logo
} from '../../Typography'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
    <NavBarContainer>
      <Logo>

        <Link to='/'><Text>WHERE TO EAT</Text>Logo</Link>
      </Logo>
      <ActionContainer>
        <Action>
          <Link to='/news'>ข่าวสาร</Link>
        </Action>
        <Action>
          <Link to='/community'>ชุมชน</Link>
        </Action>
        <NavButtonLogin>
          <Link to='/login'>เข้าสู่ระบบ</Link>
        </NavButtonLogin>
      </ActionContainer>
    </NavBarContainer>
  )
}

export default Navbar
