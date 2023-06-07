import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  placeChallengeAction,
  resetStatus,
} from "../../../../store/slices/checkout/placeChallenge";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/hooks/hooks";

const StripeCheckoutForm = ({
  setIsLoadingStripeIntent,
  completeOrderObserver,
  setCompleteOrderObserver,
  setCheckout,
  checkout,
  setStripePaymentLoader,
}: any) => {
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const paymentElementRef = React.useRef<any>(null);
  // eslint-disable-next-line
  const [message, setMessage] = React.useState<any>();
  const loginReducer = useAppSelector((state) => ({
    user: state.login.user,
  }));
  React.useEffect(() => {
    if (!stripe) {
      return;
    }
    setIsLoadingStripeIntent(false);
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then((value: any) => {
      switch (value.paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
    // eslint-disable-next-line
  }, [stripe]);

  const handleSubmit = async () => {
    // e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setStripePaymentLoader(true);
    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (response.error) {
      setMessage(response.error.message);
      setStripePaymentLoader(false);
    } else {
      setMessage(`Payment Succeeded: ${response.paymentIntent.id}`);
      //   makePayment();

      handlePlaceChallenge();
    }
    setCompleteOrderObserver(false);
  };
  React.useEffect(() => {
    if (completeOrderObserver) {
      handleSubmit();
    }
    // eslint-disable-next-line
  }, [completeOrderObserver]);
  const placeChallengeReducer = useAppSelector((state) => ({
    status: state.placeChallenge.status,
    checkout: state.placeChallenge.checkout,
    error: state.placeChallenge.error,
  }));
  const handlePlaceChallenge = React.useCallback(() => {
    dispatch(
      placeChallengeAction({
        checkout: checkout,
        token: loginReducer?.user?.access,
      })
    );
  }, [checkout, dispatch, loginReducer]);
  React.useEffect(() => {
    if (placeChallengeReducer.status === "succeeded") {
      setCheckout({
        currency: "usd",
        risk: "aggressive",
        platform: "mt5",
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        address_line_1: "",
        town_city: "",
        postal_code: "",
        country: "",
        state: "",
        additional_notes: "",
        amount: 450,
      });
      if (paymentElementRef.current) {
        paymentElementRef.current.clear();
      }
      setStripePaymentLoader(false);
      dispatch(resetStatus());
    }
    // eslint-disable-next-line
  }, [placeChallengeReducer?.status]);
  return (
    <div>
      <form id="payment-form">
        <PaymentElement
          onReady={(element: any) => {
            paymentElementRef.current = element;
          }}
        />
        {/* {message && <div className={`styles.paymentMessage`}>{message}</div>} */}
      </form>
    </div>
  );
};

export default StripeCheckoutForm;
