import React, { useState } from "react";
import Challenge from "../../../presentation/auth/challenge/Challenge";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import { loginUser } from "../../../../store/slices/auth/loginSlice";
// import { useNavigate } from "react-router";

const ChallengeContainer = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const loginReducer = useAppSelector((state) => ({
  //   status: state.login.status,
  //   user: state.login.user,
  //   error: state.login.error,
  // }));

  const [country, setCountry] = useState("usd");
  const [mode, setMode] = useState("normal");
  const [currency, setCurrency] = useState("10k");

  const onSubmithandler = (text) => {
    setCurrency(text);
  };

  const onModeHandler = (text) => {
    setMode(text);
  };

  const onCurrencyHandler = (text) => {
    setCountry(text);
  };

  // const handleLoginUser = React.useCallback(() => {
  //   dispatch(loginUser(user));
  // }, [dispatch, user]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleLoginUser();
  // };

  return (
    <Challenge
      currency={currency}
      mode={mode}
      country={country}
      // loginReducer={loginReducer}
      onSubmithandler={onSubmithandler}
      onModeHandler={onModeHandler}
      onCurrencyHandler={onCurrencyHandler}
    />
  );
};

export default ChallengeContainer;
