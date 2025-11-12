import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(){
  const {cart, removeItem, clear, totalPrice} = useContext(CartContext)
  if(cart.length === 0) return <div><p>Carrito vacío</p><Link to="/">Volver al catálogo</Link></div>

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{marginBottom:10}}>
            <strong>{item.title}</strong> - {item.quantity} x ${item.price} = ${item.quantity*item.price}
            <button onClick={()=> removeItem(item.id)} style={{marginLeft:10}}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${totalPrice()}</strong></p>
      <div style={{display:'flex',gap:8}}>
        <button onClick={()=> clear()}>Vaciar carrito</button>
        <Link to="/checkout"><button>Finalizar compra</button></Link>
      </div>
    </div>
  )
}
