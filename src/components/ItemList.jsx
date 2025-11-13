import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
        justifyItems: 'center',
        alignItems: 'start',
      }}
    >
      {items.map(i => (
        <Item key={i.id} item={i} />
      ))}
    </div>
  )
}
