import { OrderSummary } from './OrderSummary';
import './checkout-header.css';
import './CheckoutPage.css';
import axios from 'axios';
import {useEffect, useState } from 'react';
import { CheckoutHeader } from './checkout-header.jsx';
import { PaymentSummary } from './PaymentSummary';


export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const FetchCheckoutData = async () => {
     let response = await axios.get(
      '/api/delivery-options?expand=estimatedDeliveryTime'
    );
        setDeliveryOptions(response.data);
   
    response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
  };
      FetchCheckoutData(); 
       }, []);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">

        <div className="page-title">
          Review your order
        </div>

        <div className="checkout-grid">

         <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
         <PaymentSummary paymentSummary={paymentSummary} />
      

        </div>

      </div>
    </>
  );
}