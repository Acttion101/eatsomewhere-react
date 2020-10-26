import React, { useState } from 'react'
import {
  InputComment,
  ButtonComment,
  ContentButton,
  Form
} from '../Detail/Content/styled'
export default function TodoFrom (props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }
  return (
    <Form className='todo-form' onSubmit={handleSubmit}>
      <InputComment
        type='text' value={input} name='text' className='todo-input'
        onChange={handleChange} placeholder='แสดงความคิดเห็น'
      />
      <ContentButton>
        <ButtonComment className='todo-button'>ลงความคิดเห็นของคุณ</ButtonComment>
      </ContentButton>
    </Form>
  )
}
