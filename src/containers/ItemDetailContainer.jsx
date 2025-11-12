import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer(){
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === itemId)
        setItem(found || null)
      })
      .catch(()=> setItem(null))
      .finally(()=> setLoading(false))
  },[itemId])

  if(loading) return <p>Cargando detalle...</p>
  if(!item) return <p>Producto no encontrado.</p>

  return <ItemDetail item={item} />
}
