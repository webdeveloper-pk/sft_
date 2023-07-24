import React from "react";
import Verification from "../../../presentation/auth/verification/Verification";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import {
  ctxUser,
  resetStatus as ctxResetStatus,
} from "../../../../store/slices/mt5/ctxSlice";
import {
  verificationUser,
  resetStatus,
} from "../../../../store/slices/auth/verificationSlice";
import { resetStatus as resetStatusForSignup } from "../../../../store/slices/auth/signupSlice";
import {
  mt5User,
  resetStatus as mt5UserResetStatus,
} from "../../../../store/slices/mt5/mt5UserRegisterSlice";
import { useNavigate } from "react-router";
import {
  addUserAction,
  resetStatus as userAddResetStatus,
} from "../../../../store/slices/mt5/core/addUser";
const VerificationContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const signupReducer = useAppSelector((state) => ({
    user: state.signup.user,
  }));

  const [user, setUser] = React.useState({
    email: signupReducer?.user?.detail?.email,
    code: "",
    // for_password: 0,
  });

  const [mt5UserData, setMt5UserData] = React.useState({
    user_id: signupReducer?.user?.detail?.id,
    mt5_login: "850844",
    mt5_password: "thisispassword",
  });

  const [addUser, setAddUser] = React.useState({
    FirstName: "hamza",
    LastName: "asif",
    Login: 0,
    Group: "group",
    master_pass: "1233@aasd1HA!",
    ctx: "",
  });

  const verificationReducer = useAppSelector((state) => ({
    status: state.verification.status,
    user: state.verification.user,
    error: state.verification.error,
  }));

  const ctxReducer = useAppSelector((state) => ({
    status: state.ctx.status,
    ctx: state.ctx.ctx,
    error: state.ctx.error,
  }));

  const mt5UserReducer = useAppSelector((state) => ({
    status: state.mt5User.status,
    mt5user: state.mt5User.mt5user,
    error: state.mt5User.error,
  }));

  const addUserReducer = useAppSelector((state) => ({
    status: state.addUser.status,
    user: state.addUser.user,
    error: state.addUser.error,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = name === "code" ? parseInt(value) : value;
    setUser((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleVerificationUser = React.useCallback(() => {
    dispatch(verificationUser(user));
  }, [dispatch, user]);

  const handleAddUser = React.useCallback(() => {
    dispatch(addUserAction(addUser));
  }, [dispatch, addUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleVerificationUser();
  };
  React.useEffect(() => {
    if (verificationReducer?.status === "succeeded") {
      dispatch(ctxUser());
      dispatch(resetStatusForSignup());
      dispatch(resetStatus());
    }
    // eslint-disable-next-line
  }, [verificationReducer?.status]);
  React.useEffect(() => {
    if (ctxReducer.status === "succeeded") {
      dispatch(ctxResetStatus());
      setAddUser({ ...addUser, ctx: ctxReducer.ctx.ctx });
      handleAddUser();
    }
    // eslint-disable-next-line
  }, [ctxReducer?.status]);

  React.useEffect(() => {
    if (addUserReducer.status === "succeeded") {
      dispatch(userAddResetStatus());
      dispatch(mt5User(mt5UserData));
    }
    // eslint-disable-next-line
  }, [addUserReducer?.status]);

  React.useEffect(() => {
    if (mt5UserReducer.status === "succeeded") {
      dispatch(mt5UserResetStatus());
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [mt5UserReducer?.status]);
  return (
    <Verification
      user={user}
      verificationReducer={verificationReducer}
      ctxReducer={ctxReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default VerificationContainer;
