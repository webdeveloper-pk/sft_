import React from "react";
import Signup from "../../../presentation/auth/signUp/Signup";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import {
  signupUser,
  resetStatus,
  // getCtx,
  // userRegister,
} from "../../../../store/slices/auth/signupSlice";
import { useNavigate } from "react-router";

const SignupContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signupReducer = useAppSelector((state) => ({
    status: state.signup.status,
    user: state.signup.user,
    error: state.signup.error,
  }));

  const [user, setUser] = React.useState({
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    username: "",
    password: "",
  });

  // const [usmt5Userer, setMt5User] = React.useState({
  //   user_id: "",
  //   mt5_login: "",
  //   mt5_password: "",
  // });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignupUser = React.useCallback(() => {
    dispatch(signupUser(user));
    // dispatch(getCtx());
    // dispatch(userRegister(mt5User));
  }, [dispatch, user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignupUser();
  };

  const setEmailInLocalStorage = () => {
    localStorage.setItem("email", user.email);
  };

  React.useEffect(() => {
    if (signupReducer.status === "succeeded") {
      navigate("/verify-code");
      dispatch(resetStatus());
      setEmailInLocalStorage();
    }
    // eslint-disable-next-line
  }, [signupReducer?.status]);

  return (
    <Signup
      user={user}
      signupReducer={signupReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
