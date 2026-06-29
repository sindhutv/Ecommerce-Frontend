import axios from 'axios';
import { HomePage } from './pages/home/HomePage.jsx'
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import { OrderPage } from './pages/orders/OrderPage.jsx';
import './App.css';
import { TrackingPage } from './pages/TrackingPage.jsx';

function App() {

  const [cart, setCart] = useState([]);

   const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    };

    useEffect(() => {
     loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />

    </Routes>
  )
}

export default App
