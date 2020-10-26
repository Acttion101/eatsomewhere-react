import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Community/Navbar'
import Content from '../components/Community/Content'

const LoginContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color: #bf7f4bc9;
`

function Community () {
  return (
    <LoginContainer>
      <Navbar />
      <Content />
    </LoginContainer>
  )
}
export default Community
