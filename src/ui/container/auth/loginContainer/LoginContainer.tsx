import React from "react";
import Login from "../../../presentation/auth/login/Login";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import {
  loginUser,
  resetStatus,
} from "../../../../store/slices/auth/loginSlice";
import {
  ctxUser,
  resetStatus as ctxResetStatus,
} from "../../../../store/slices/mt5/ctxSlice";
import { useNavigate } from "react-router";

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginReducer = useAppSelector((state) => ({
    status: state.login.status,
    user: state.login.user,
    error: state.login.error,
  }));
  const [user, setUser] = React.useState({ username: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLoginUser = React.useCallback(() => {
    dispatch(loginUser(user));
    dispatch(ctxUser());
  }, [dispatch, user]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLoginUser();
  };
  React.useEffect(() => {
    if (loginReducer.status === "succeeded") {
      navigate("/home/dashboard");
      dispatch(resetStatus());
      dispatch(ctxResetStatus());
    }
    // eslint-disable-next-line
  }, [loginReducer?.status]);
  return (
    <Login
      user={user}
      loginReducer={loginReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
