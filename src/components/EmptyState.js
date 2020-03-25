import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Sofa } from '../assets/images/sofa.svg'
import '../styling/emptystate.css'

export const EmptyState = (props) => {
  return (
    <div className="empty-list-container">
      <Sofa />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Link
        className="call-to-action"
        to={props.url}>
        {props.linkText}
      </Link>
    </div>
  )
}