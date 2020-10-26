import React from 'react'
import {
  NavContainerLogin,
  NavButtonLogin,
  Hello
} from './styled'
import { Link } from 'react-router-dom'
import { Text, Logo } from '../../Typography'

function Navbar () {
  return (
    <NavContainerLogin>
      <Logo>
        <Text>WHERE TO EAT</Text>
      </Logo>
      <Hello>
        <Link to='/register'>
          <NavButtonLogin> ลงทะเบียน </NavButtonLogin>
        </Link>

      </Hello>
    </NavContainerLogin>
  )
}

export default Navbar
