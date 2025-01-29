import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "../style/Pay.css";

const CheckoutForm = () => {
    const [amount, setAmount] = useState(5000); // Default amount in cents (5000 = $50)
    const [loading, setLoading] = useState(false); // Loading state for payment button
    const [errorMessage, setErrorMessage] = useState(null); // To display error messages
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true); // Set loading to true while processing payment

        try {
            // Request the client secret from the backend
            const { clientSecret } = await fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            }).then((res) => res.json());

            // Confirm the card payment using the client secret
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                setErrorMessage(error.message); // Set error message if payment fails
            } else if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful!');
                // Optionally, show success message or redirect
            }
        } catch (error) {
            console.error('Payment error: ', error);
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className='app'>
            {/* Amount input (optional for user to change amount) */}
            <div className='pay'>
                <label>Amount: </label>
                <input 
                    type="number" 
                    value={amount / 100} 
                    onChange={(e) => setAmount(e.target.value * 100)} // Update amount in cents
                    min="1"
                />
            </div>

            {/* Error message display */}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

            {/* Payment form */}
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe || loading}>
                    {loading ? 'Processing...' : `Pay $${amount / 100}`}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
