import React from 'react'

export const Button = (props) => {
  return (
    <button
      className={props.className}
      type="submit">
      {props.text}
    </button>
  )
}