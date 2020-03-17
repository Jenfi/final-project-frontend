import React from 'react'

export const Textarea = (props) => {
  return (
    <label htmlFor={props.id}>
      <span className={props.className}>
        {props.label}
      </span>
      <textarea
        rows={props.rows}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        required={props.required} />
    </label>
  )
}