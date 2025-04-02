import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

function Home() {
  return (
    <div>
      <p>heyy</p>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Home
