import React from 'react'
import { Link } from 'react-router-dom'

export const CardLink = (props) => {
  return (
    <Link to={props.to}>
      {props.children}
    </Link>
  )
}