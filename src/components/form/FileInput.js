import React from 'react'

export const FileInput = (props) => {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <input
        type={props.type}
        className={props.className}
        id={props.id} />
    </label>
  )
}