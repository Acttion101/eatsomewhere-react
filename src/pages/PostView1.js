import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/PostView1/Navbar'
import Content from '../components/PostView1/Content'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #bf7f4bc9;
`

function PostView () {
  return (
    <LoginContainer>
      <Navbar />
      <Content />
    </LoginContainer>
  )
}
export default PostView
