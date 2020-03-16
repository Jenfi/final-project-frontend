import React from 'react'

export const Heading = ({ level, text, className, ...props }) => {
  if (level === "2") return <h2 className={className}>{props.children}</h2>
  if (level === "3") return <h3 className={className}>{props.children}</h3>
  if (level === "4") return <h4 className={className}>{props.children}</h4>
  return <h1 className={className}>{props.children}</h1>
}