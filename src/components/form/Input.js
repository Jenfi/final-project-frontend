import React from 'react'

export const Input = (props) => {
  return (
    <label htmlFor={props.id}>
      <span className={props.className}>
        {props.label}
      </span>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        min={props.min}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required={props.required} />
      <span className="requirements">{props.requirements}</span>
    </label>
  )
}