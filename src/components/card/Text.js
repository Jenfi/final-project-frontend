import React from 'react'

export const Text = (props) => {
  return <p className={props.className}>{props.children}</p>
}