import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { CartContext } from '../context/CartContext'

export default function NavBar(){
  const { totalItems } = useContext(CartContext)
  return (
    <nav>
      <Link to="/"><strong>Mi Tienda</strong></Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/accesorios">Accesorios</Link>
      <Link to="/category/hogar">Hogar</Link>
      <div style={{marginLeft:'auto'}}>
        <Link to="/cart"><CartWidget count={totalItems} /></Link>
      </div>
    </nav>
  )
}
