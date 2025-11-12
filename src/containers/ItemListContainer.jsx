import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer(){
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        if(categoryId) setItems(data.filter(p => p.category === categoryId))
        else setItems(data)
      })
      .catch(()=> setItems([]))
      .finally(()=> setLoading(false))
  },[categoryId])

  if(loading) return <p>Cargando productos...</p>
  if(items.length === 0) return <p>No hay productos en esta categoría.</p>

  return <ItemList items={items} />
}
