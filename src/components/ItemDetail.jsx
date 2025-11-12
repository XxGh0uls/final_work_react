import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({item}){
  const { addItem } = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const handleAdd = (qty) => {
    addItem(item, qty)
    setAdded(true)
  }

  return (
    <div style={{display:'flex',gap:20}}>
      <img src={item.img} alt={item.title} style={{width:260,height:260,objectFit:'cover'}} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Stock: {item.stock}</p>
        <p><strong>${item.price}</strong></p>

        {!added ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div>
            <p>Agregado al carrito ✅</p>
            <a href="/cart">Ir al carrito</a>
          </div>
        )}
      </div>
    </div>
  )
}
