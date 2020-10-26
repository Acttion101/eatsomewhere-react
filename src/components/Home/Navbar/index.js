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
        <Link to='/news'>
          <Action>
            ข่าวสาร
          </Action>
        </Link>
        <Link to='/community'>
          <Action>
            ชุมชน
          </Action>
        </Link>
        <Link to='/login'>
          <NavButtonLogin>
            เข้าสู่ระบบ
          </NavButtonLogin>
        </Link>
      </ActionContainer>
    </NavBarContainer>
  )
}

export default Navbar
