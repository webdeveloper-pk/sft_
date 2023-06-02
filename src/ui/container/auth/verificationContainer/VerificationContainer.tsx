import React from "react";
import Verification from "../../../presentation/auth/verification/Verification";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../services/hooks/hooks";
import {
  verificationUser,
  resetStatus,
} from "../../../../store/slices/auth/verificationSlice";
import { useNavigate } from "react-router";

const VerificationContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const verificationReducer = useAppSelector((state) => ({
    status: state.verification.status,
    user: state.verification.user,
    error: state.verification.error,
  }));
  const [user, setUser] = React.useState({
    email: "",
    code: "",
    // for_password: 0,
  });
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleVerificationUser();
  };
  React.useEffect(() => {
    if (verificationReducer?.status === "succeeded") {
      // make a condition if this call from forget password then make it navigate to "/change-password" else "/home/dashboar"
      navigate("/home/dashboard");

      dispatch(resetStatus());
    }
    // eslint-disable-next-line
  }, [verificationReducer?.status]);
  return (
    <Verification
      user={user}
      verificationReducer={verificationReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default VerificationContainer;
