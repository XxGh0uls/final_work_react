import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <>
    <header
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    background: '#222',
    color: '#fff',
    padding: '20px',
  }}
>
  {/* LOGO */}
  <img
    src="/assets/logo.jpg"
    alt="Logo"
    style={{ width: 55, height: 55, borderRadius: '50%' }}
  />

  {/* NAVBAR CON FONDO BLANCO, REDONDEADO Y MÁS GRANDE */}
  <div
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        background: '#ffffff',
        padding: '12px 25px',
        borderRadius: '14px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      }}
    >
      <NavBar />
    </div>
  </div>
</header>

      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </>
  )
}
