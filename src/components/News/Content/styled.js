import styled from 'styled-components'

export const BackContent = styled.div`
  display: flex;
  margin: 50px 0 0 50px;
  padding: 10px;
  border-radius: 2rem;
  align-items: top;
  height: 100vh;
  width: 70vw;
  background-color: #ffffff;
  flex-direction: column;
`
export const Container = styled.div`
  padding: 2px 16px;
  
`
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 1200px;
  height: 300px;
  &:hover{
    box-shadow: 0 8px 30px 0 rgba(0,0,0,0.2);
  }
`
