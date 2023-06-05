import React from "react";
import Checkout from "../../presentation/checkout/Checkout";
import {
  createStripeIntent,
  resetStatus as resetStripeIntent,
} from "../../../store/slices/checkout/createStripeIntent";

import { useAppDispatch, useAppSelector } from "../../../services/hooks/hooks";

const CheckoutContainer = () => {
  const dispatch = useAppDispatch();
  const [completeOrderObserver, setCompleteOrderObserver] =
    React.useState(false);
  const [stripePaymentLoader, setStripePaymentLoader] = React.useState(false);
  const [isLoadingStripeIntent, setIsLoadingStripeIntent] =
    React.useState(false);
  const [checkout, setCheckout] = React.useState({
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
  const [platform, setPlatform] = React.useState<any>("mt4");
  const [mode, setMode] = React.useState("aggressive");
  const [country, setCountry] = React.useState("usd");
  const [checkboxValues, setCheckboxValues] = React.useState({
    terms: false,
    policy: false,
  });
  const loginReducer = useAppSelector((state) => ({
    user: state.login.user,
  }));
  const stripeIntentReducer = useAppSelector((state) => ({
    status: state.createStripeIntent.status,
    payment: state.createStripeIntent.payment,
    error: state.createStripeIntent.error,
  }));
  const placeChallengeReducer = useAppSelector((state) => ({
    status: state.placeChallenge.status,
    checkout: state.placeChallenge.checkout,
    error: state.placeChallenge.error,
  }));
  const handleChange = (e: any) => {
    setCheckout({ ...checkout, [e.target.name]: e.target.value });
  };
  const handleCountryChange = (value: any) => {
    setCheckout({ ...checkout, country: value });
  };
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onPlatformHandler = (text: any) => {
    setPlatform(text);
  };

  const onModeHandler = (text: any) => {
    setMode(text);
  };

  const onCurrencyHandler = (text: any) => {
    setCountry(text);
  };
  const createPaymentIntent = React.useCallback(() => {
    setIsLoadingStripeIntent(true);
    dispatch(
      createStripeIntent({
        amount: 450,
        token: loginReducer?.user?.access,
      })
    );
  }, [dispatch, loginReducer]);

  return (
    <Checkout
      completeOrderObserver={completeOrderObserver}
      setCompleteOrderObserver={setCompleteOrderObserver}
      stripePaymentLoader={stripePaymentLoader}
      setStripePaymentLoader={setStripePaymentLoader}
      isLoadingStripeIntent={isLoadingStripeIntent}
      setIsLoadingStripeIntent={setIsLoadingStripeIntent}
      checkout={checkout}
      setCheckout={setCheckout}
      platform={platform}
      mode={mode}
      country={country}
      checkboxValues={checkboxValues}
      handleChange={handleChange}
      handleCountryChange={handleCountryChange}
      handleCheckboxChange={handleCheckboxChange}
      onPlatformHandler={onPlatformHandler}
      onModeHandler={onModeHandler}
      onCurrencyHandler={onCurrencyHandler}
      stripeIntentReducer={stripeIntentReducer}
      placeChallengeReducer={placeChallengeReducer}
      createPaymentIntent={createPaymentIntent}
    />
  );
};

export default CheckoutContainer;
