import styled from 'styled-components'
import Store from '../../../assets/store.jpg'

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
  height: auto;
  width: 50%;
  align-items: center;
  border: solid 5px #ffffff;
  border-radius: 30px;
  padding: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
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
  padding-left: 2rem;
`

// endBox

// img

export const DetailImage = styled.div`
  margin: 1rem;
  height: 60vh;
  width: 100%;
  position: relative;
`
export const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Store});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`
// endimg

// Comment
export const ContentButton = styled.div`
  width: auto;
  align-items: flex-end;
  margin-bottom: 20px;
`

export const ButtonComment = styled.button`
  width: auto;
  font-size: 15px;
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
  padding: 0rem 2rem 0rem 2rem;
  height: 6vh;
  width: 35vw;
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const CommentText = styled.div`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #f37305;
  margin: 1rem;
`

export const Text = styled.h1`
padding: 0rem 0rem 0rem 1rem;
`
// endComment
