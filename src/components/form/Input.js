import React from 'react'

export const Input = (props) => {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        id={props.id}
        name={props.name} />
    </label>
  )
}