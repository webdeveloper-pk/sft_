import React, { useState } from "react";
import Challenge from "../../../ui/presentation/challenge/Challenge";
import { useAppSelector, useAppDispatch } from "../../../services/hooks/hooks";
import { setChallenge1 } from "../../../store/slices/challenge/challengeSlice";
import { setChallenge2 } from "../../../store/slices/challenge/challengeSlice";
import { setChallenge3 } from "../../../store/slices/challenge/challengeSlice";
// import { loginUser } from "../../../../store/slices/auth/loginSlice";
// import { useNavigate } from "react-router";

const ChallengeContainer = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currency, setCurrency] = useState("usd");
  const [mode, setMode] = useState("normal");
  const [balance, setBalance] = useState("10k");

  const onCurrencyHandler = (text) => {
    setCurrency(text);
    dispatch(setChallenge1(text));
  };

  const onModeHandler = (text) => {
    setMode(text);
    dispatch(setChallenge2(text));
  };

  const onBalancehandler = (text) => {
    setBalance(text);
    dispatch(setChallenge3(text));
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
      balance={balance}
      // loginReducer={loginReducer}
      onCurrencyHandler={onCurrencyHandler}
      onModeHandler={onModeHandler}
      onBalancehandler={onBalancehandler}
    />
  );
};

export default ChallengeContainer;
