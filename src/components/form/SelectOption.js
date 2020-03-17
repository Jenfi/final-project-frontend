import React from 'react'

export const SelectOption = (props) => {
  return (
    <option
      value={props.value}
      disabled={props.disabled}>
      {props.option}
    </option>
  )
}