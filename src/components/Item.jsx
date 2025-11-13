import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({item}){
  return (
    <div style={{border:'1px solid #ddd',padding:10,borderRadius:6}}>
      <img src={item.img} alt={item.title} style={{width:'100%',height:120,objectFit:'fill'}} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><strong>${item.price}</strong></p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  )
}
