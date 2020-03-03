import React from 'react'

export const Select = (props) => {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <select
        onChange={props.onChange}
        value={props.value}
        id={props.id}>
        {props.children}
      </select>
    </label>
  )
}