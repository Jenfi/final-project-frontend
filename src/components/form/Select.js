import React from 'react'

export const Select = (props) => {
  return (
    <label htmlFor={props.id}>
      <span className={props.className}>{props.label}</span>
      <select
        onChange={props.onChange}
        value={props.value}
        id={props.id}
        required={props.required}>
        {props.children}
      </select>
    </label>
  )
}