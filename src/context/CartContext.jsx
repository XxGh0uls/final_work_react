import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]) // {id,title,price,quantity,stock}

  const addItem = (product, quantity) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      if(exists){
        return prev.map(p => p.id === product.id ? {...p, quantity: Math.min(p.quantity + quantity, p.stock)} : p)
      }
      return [...prev, {...product, quantity: Math.min(quantity, product.stock)}]
    })
  }

  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clear = () => setCart([])
  const totalItems = () => cart.reduce((acc, p) => acc + p.quantity, 0)
  const totalPrice = () => cart.reduce((acc, p) => acc + p.quantity * p.price, 0)

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, totalItems, totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}
