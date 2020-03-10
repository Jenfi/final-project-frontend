import React from 'react'

export const CardList = (props) => {
  return (
    <ul className={props.className}>
      {props.children}
    </ul>
  )
}