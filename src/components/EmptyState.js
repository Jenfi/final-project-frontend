import React from 'react'
import { ReactComponent as Sofa } from '../assets/images/sofa.svg'
import { Link } from 'react-router-dom'
import '../styling/emptystate.css'

// Attribution:
//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export const EmptyState = (props) => {
  return (
    <div className="empty-list-container">
      <Sofa />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Link className="call-to-action" to={props.url}>{props.linkText}</Link>
    </div>
  )
}