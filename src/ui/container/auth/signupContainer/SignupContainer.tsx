import React from "react";
import Signup from "../../../presentation/auth/signUp/Signup";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import {
  signupUser,
  resetStatus,
} from "../../../../store/slices/auth/signupSlice";
import {
  ctxUser,
  resetStatus as ctxResetStatus,
} from "../../../../store/slices/mt5/ctxSlice";
import {
  mt5User,
  resetStatus as mt5UserResetStatus,
} from "../../../../store/slices/mt5/mt5UserRegisterSlice";
import { useNavigate } from "react-router";

const SignupContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const ctxReducer = useAppSelector((state) => ({
    status: state.ctxSlice.status,
    ctx: state.ctxSlice.ctx,
    error: state.ctxSlice.error,
  }));

  const signupReducer = useAppSelector((state) => ({
    status: state.signup.status,
    user: state.signup.user,
    error: state.signup.error,
  }));

  const mt5UserReducer = useAppSelector((state) => ({
    status: state.mt5User.status,
    mt5user: state.mt5User.mt5user,
    error: state.mt5User.error,
  }));

  const [user, setUser] = React.useState({
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    username: "",
    password: "",
  });

  const [mt5UserData, setMt5UserData] = React.useState({
    user_id: "123",
    mt5_login: "12345",
    mt5_password: "abc123",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignupUser = React.useCallback(() => {
    dispatch(signupUser(user));
  }, [dispatch, user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(ctxUser());
  };

  const setEmailInLocalStorage = () => {
    localStorage.setItem("email", user.email);
  };

  React.useEffect(() => {
    if (ctxReducer.status === "succeeded") {
      dispatch(ctxResetStatus());
      handleSignupUser();
      dispatch(mt5User(mt5UserData));
    }
    // eslint-disable-next-line
  }, [ctxReducer?.status]);

  React.useEffect(() => {
    if (
      signupReducer.status === "succeeded" &&
      mt5UserReducer.status === "succeeded"
    ) {
      navigate("/verify-code");
      dispatch(resetStatus());
      dispatch(mt5UserResetStatus());
      setEmailInLocalStorage();
    }
    // eslint-disable-next-line
  }, [signupReducer?.status, mt5UserReducer?.status]);

  return (
    <Signup
      user={user}
      signupReducer={signupReducer}
      mt5UserReducer={mt5UserReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
