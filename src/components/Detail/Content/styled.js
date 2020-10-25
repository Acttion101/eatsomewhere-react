import styled from 'styled-components'

export const ContentDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  background-color: #bf804b;
  height: 100%;
  width: 100vw;
`

// Box
export const Box = styled.div`
  background-color: #ffffff;
  height:auto;
  width: 50%;
  align-items: center;
  border: solid 5px #ffffff;
  border-radius: 30px;
  padding: 100px;
  margin-bottom: 20px;
  margin-top:20px;
  box-shadow: 6px 6px 7px 3px rgba(0, 0, 0, 0.301);
`

export const Line = styled.div`
  height: 6px;
  width: 100%;
  background-color: red;
`
export const TopicDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

// endBox

// img

export const DetailImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background-image: url(Promotion.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`
// endimg

// Comment
export const ContentButton = styled.div`
  width: auto;
  align-self: flex-end;
  margin-bottom: 20px;
`

export const ButtonComment = styled.button`
  width: auto;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  background-color: #ffffff;
  border-radius: 3rem;
  margin: 0rem 3rem;
  cursor: pointer;
  box-shadow: 0px 4px 7px 3px rgba(0, 0, 0, 0.301);
  &:active {
    background-color: #f37305;
    box-shadow: 0 5px #00000063;
    transform: translateY(4px);
  }
`

export const InputComment = styled.input`
  padding: 0rem 2rem 0rem 2rem ;
  height: 10vh;
  width: 40vw;
  border: solid 1px #000000;
  border-radius: 40px;
  font-size: 1rem;
  margin-bottom: 10px;
  margin-top: 10px;
`
export const BoxInput = styled.form`

  justify-content: center;
  align-items: center;
  height: auto;
  width: 50vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  border: solid 2px #f37305;
  border-radius: 30px;
  box-shadow: 2px 4px 9px -3px #f37305;
`
export const ListComment = styled.ul`
color: #000;

`
export const Comment = styled.li`

color: #000;
`
export const Error = styled.h1`

color: red;
`

// endComment
