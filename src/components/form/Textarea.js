import React from 'react'

export const Textarea = (props) => {
  return (
    <label htmlFor={props.id}>
      {props.label}
      <textarea rows={props.rows} value={props.value} onChange={props.onChange} id={props.id} />
    </label>
  )
}