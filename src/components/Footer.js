import React from 'react'
import '../styling/footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <section className="footer-section">
          <h2 className="footer-header">About</h2>
          <ul className="footer-link-list">
            <li>Who we are</li>
            <li>Contact</li>
          </ul>
        </section>
        <section className="footer-section">
          <h2 className="footer-header">Support</h2>
          <ul className="footer-link-list">
            <li>Selling</li>
            <li>Buying</li>
          </ul>
        </section>
        <section className="footer-section">
          <h2 className="footer-header">Press</h2>
          <ul className="footer-link-list">
            <li>Useful links</li>
            <li>Tools</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}