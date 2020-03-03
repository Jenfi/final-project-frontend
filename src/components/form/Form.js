import React from 'react'

export const Form = (props) => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}