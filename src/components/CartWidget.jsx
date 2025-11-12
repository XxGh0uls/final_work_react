import React from 'react'
export default function CartWidget({count}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:8}}>
      <img src="/assets/cart.png" alt="cart" style={{width:24,height:24}} />
      <span>({count()})</span>
    </div>
  )
}
