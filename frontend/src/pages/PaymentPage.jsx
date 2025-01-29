import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "../style/Pay.css"
// Load Stripe with your public key
const stripePromise = loadStripe('pk_test_51Pqvc2Ag4hqJmskOwA2qvmViAhhJUCmdQTPSBoWJBZADRRoEDiEKEsJbSCFuvj1zp89GgXxAYxkGmm1sZK6vFTGc00Es8RGKPe');

const CheckoutForm = () => {
    const [amount, setAmount] = useState(5000); // Default amount for the payment in cents (e.g., 5000 = $50)
    const [loading, setLoading] = useState(false); // Loading state to disable button during payment
    const [errorMessage, setErrorMessage] = useState(null); // For error messages
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true); // Set loading to true when starting payment process

        try {
            // Request the client secret from your backend
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
                setErrorMessage(error.message); // Display error message if any
            } else if (paymentIntent.status === 'succeeded') {
                console.log('Payment successful!');
                // Optionally, show a success message to the user
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
            {/* Input for amount (optional, you can hide this in a production environment) */}
            <div className='pay'>
                <label>Amount: </label>
                <input 
                    type="number" 
                    value={amount / 100} 
                    onChange={(e) => setAmount(e.target.value * 100)} // Update amount in cents
                    min="1"
                />
            </div>

            {/* Display error message */}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe || loading}>
                    {loading ? 'Processing...' : `Pay $${amount / 100}`}
                </button>
            </form>
        </div>
    );
};

const PaymentPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default PaymentPage;
