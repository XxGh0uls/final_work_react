import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { createOrder } from '../services/firebase'

export default function Checkout(){
  const {cart, totalPrice, clear} = useContext(CartContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const order = { buyer:{name,email,phone}, items:cart, total: totalPrice(), date: new Date() }
    setLoading(true)
    try{
      const id = await createOrder(order) // si no configuras firebase, createOrder devuelve mock
      setOrderId(id)
      clear()
    }catch(err){
      console.error(err)
      alert('Error creando orden')
    }finally{ setLoading(false) }
  }

  if(orderId) return <div><h2>Compra realizada ✅</h2><p>Id de la orden: <strong>{orderId}</strong></p></div>

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Teléfono" value={phone} onChange={e=>setPhone(e.target.value)} required />
        <button type="submit" disabled={loading}>Confirmar compra</button>
      </form>
    </div>
  )
}
