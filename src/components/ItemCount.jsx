import React, { useState } from 'react'
export default function ItemCount({stock, initial, onAdd}){
  const [qty, setQty] = useState(initial || 1)

  const inc = () => setQty(q => Math.min(q+1, stock))
  const dec = () => setQty(q => Math.max(1, q-1))
  return (
    <div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button onClick={dec}>-</button>
        <span>{qty}</span>
        <button onClick={inc}>+</button>
      </div>
      <div style={{marginTop:8}}>
        <button onClick={()=> onAdd(qty)} disabled={stock===0}>Agregar al carrito</button>
      </div>
      {stock === 0 && <p>Producto sin stock</p>}
    </div>
  )
}
