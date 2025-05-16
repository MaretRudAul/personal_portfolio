import React from 'react'

const Footer = () => (
  <footer className="bg-primary text-white py-4">
    <div className="container mx-auto text-center">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </div>
  </footer>
)

export default Footer