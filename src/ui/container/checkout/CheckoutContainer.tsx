import React from "react";
import Checkout from "../../presentation/checkout/Checkout";
import {
  createStripeIntent,
  // resetStatus as resetStripeIntent,
} from "../../../store/slices/checkout/createStripeIntent";

import { useAppDispatch, useAppSelector } from "../../../services/hooks/hooks";
import { setChallenge1 } from "../../../store/slices/challenge/challengeSlice";
import { setChallenge2 } from "../../../store/slices/challenge/challengeSlice";
import { setChallenge3 } from "../../../store/slices/challenge/challengeSlice";

const CheckoutContainer = () => {
  const dispatch = useAppDispatch();

  const challnegeReducer1 = useAppSelector((state) => ({
    status: state.challenge.status,
    challenge1: state.challenge.challenge1,
    error: state.challenge.error,
  }));

  const challnegeReducer2 = useAppSelector((state) => ({
    status: state.challenge.status,
    challenge2: state.challenge.challenge2,
    error: state.challenge.error,
  }));

  const challnegeReducer3 = useAppSelector((state) => ({
    status: state.challenge.status,
    challenge3: state.challenge.challenge3,
    error: state.challenge.error,
  }));

  const [currency, setCurrency] = React.useState(challnegeReducer1?.challenge1);
  const [mode, setMode] = React.useState(challnegeReducer2?.challenge2);
  const [balance, setBalance] = React.useState(challnegeReducer3?.challenge3);
  const [platform, setPlatform] = React.useState<any>("mt5");

  const onCurrencyHandler = (text: any) => {
    setCurrency(text);
    dispatch(setChallenge1(text));
  };

  const onModeHandler = (text: any) => {
    setMode(text);
    dispatch(setChallenge2(text));
  };

  const onBalanceHandler = (text: any) => {
    setBalance(text);
    dispatch(setChallenge3(text));
  };

  const onPlatformHandler = (text: any) => {
    setPlatform(text);
  };

  const [completeOrderObserver, setCompleteOrderObserver] =
    React.useState(false);
  const [stripePaymentLoader, setStripePaymentLoader] = React.useState(false);
  const [isLoadingStripeIntent, setIsLoadingStripeIntent] =
    React.useState(false);
  const [checkout, setCheckout] = React.useState({
    currency: currency || "usd",
    mode: mode || "normal",
    balance: balance || "10k",
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
      mode={mode}
      currency={currency}
      balance={balance}
      platform={platform}
      checkboxValues={checkboxValues}
      handleChange={handleChange}
      handleCountryChange={handleCountryChange}
      handleCheckboxChange={handleCheckboxChange}
      onPlatformHandler={onPlatformHandler}
      onModeHandler={onModeHandler}
      onCurrencyHandler={onCurrencyHandler}
      onBalanceHandler={onBalanceHandler}
      challnegeReducer1={challnegeReducer1}
      challnegeReducer2={challnegeReducer2}
      challnegeReducer3={challnegeReducer3}
      stripeIntentReducer={stripeIntentReducer}
      placeChallengeReducer={placeChallengeReducer}
      createPaymentIntent={createPaymentIntent}
    />
  );
};

export default CheckoutContainer;
