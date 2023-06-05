import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
const Stripe: React.FC<any> = ({
  setIsLoadingStripeIntent,
  clientSecret,
  completeOrderObserver,
  setCompleteOrderObserver,
  setCheckout,
  checkout,
  setStripePaymentLoader,
}) => {
  var stripePromise = loadStripe(
    "pk_test_51Mg7CLBkrNY4mSjIue5zwA0ng53Y0HAPqk2RaLGsmUPtsGrZripmxc3vwcijGZ09vtIo6ssLRweFwaSxuIq9Arbi004NEV8MB2"
  );
  const appearance: any = {
    theme: "stripe",
    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#fff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
    },
  };
  const options = {
    clientSecret: `${clientSecret}`,
    appearance,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeCheckoutForm
        setIsLoadingStripeIntent={setIsLoadingStripeIntent}
        completeOrderObserver={completeOrderObserver}
        setCompleteOrderObserver={setCompleteOrderObserver}
        setCheckout={setCheckout}
        checkout={checkout}
        setStripePaymentLoader={setStripePaymentLoader}
      />
    </Elements>
  );
};

export default Stripe;
