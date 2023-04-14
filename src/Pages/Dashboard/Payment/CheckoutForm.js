import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { email, name, plan, price, serviceName, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("paymentMethod", paymentMethod);
    }
   
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      return setCardError(confirmError.message);
    }
    // console.log("paymentIntent", paymentIntent);
    setSuccess("");
    setProcessing(true);
    if (paymentIntent.status === "succeeded") {
      // data send to the server
      const payment = {
        name,
        email,
        serviceName,
        plan,
        price,
        bookingId: _id,
        transactionId : paymentIntent.id
      };

      fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((paymentData) => {
          console.log(paymentData);
          if (paymentData.insertedId) {
            setSuccess("Payment Successful");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };
  return (
    <div className="mt-10 w-96">
      <form onSubmit={handleCheckout}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-800 text-md mt-4">{cardError}</p>}
        <button
          className="btn btn-sm my-6 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {success && (
        <div className="mt-6">
          <p className="text-green-800">{success}</p>
          <p className="text-green-800">
            Your TransactionId :{" "}
            <strong className="font-bold">{transactionId}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
