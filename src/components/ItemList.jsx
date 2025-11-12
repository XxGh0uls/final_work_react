import React from 'react'
import Item from './Item'
export default function ItemList({items}){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
      {items.map(i => <Item key={i.id} item={i} />)}
    </div>
  )
}
