import React from 'react'
import Header from './Header/Header'
import ProductsList from './ProductsList/ProductsList'
import ProductSort from './ProductSort/ProductSort'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'
import './app-styles.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <ProductSort />
      <main className="shop-container">
        <ProductsList />
        <Cart />
      </main>
      <Footer />
    </div>
  )
}
