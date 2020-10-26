import React, { useState } from 'react'

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
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text' value={input} name='text' className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>ลงความคิดเห็นของคุณ</button>
    </form>
  )
}
