import React from 'react'

export const CardImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={props.className} />
  )
}