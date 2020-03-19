import React from 'react'

export const Textarea = (props) => {
  return (
    <label htmlFor={props.id}>
      <span className={props.className}>
        {props.label}
      </span>
      <textarea
        id={props.id}
        rows={props.rows}
        value={props.value}
        onChange={props.onChange}
        minLength={props.minLength}
        maxLength={props.maxLength}
        placeholder=" "
        required={props.required} />
      <span className="requirements">{props.requirements}</span>
    </label>
  )
}