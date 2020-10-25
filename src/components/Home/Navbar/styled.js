import styled from 'styled-components'

export const NavBarContainer = styled.div`
  background-color: #FF7700;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 60px;
  box-shadow: 0px 4px 7px 3px rgba(0, 0, 0, 0.301);
 
`

export const NavButtonLogin = styled.button`
  padding: 0.75rem 1rem;
  border: #707070 solid 2px;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: 0px 5px #00000025;
  font-size: 20px;
  position: relative;
  transition: 0.5s;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ActionContainer = styled.ul`
   display: flex;
   flex: 1;
   justify-content: flex-end;
   align-items:center;
 `
export const Action = styled.li`
  padding: 1rem 1rem;
  border: #707070 solid 2px;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  cursor: pointer;
  box-shadow: 0px 5px #00000025;
  font-size: 20px;
  position: relative;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:1rem;

 `
