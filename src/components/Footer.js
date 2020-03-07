import React from 'react'
import '../styling/footer.css'

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="footer-header">About</li>
        <li>Who we are</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li className="footer-header">Support</li>
        <li>Selling</li>
        <li>Buying</li>
      </ul>
      <ul>
        <li className="footer-header">Press</li>
        <li>Useful links</li>
        <li>Tools</li>
      </ul>
    </footer>
  )
}