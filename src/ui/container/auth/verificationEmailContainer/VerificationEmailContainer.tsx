import React from "react";
import VerificationEmail from "../../../presentation/auth/verificationEmail/VerificationEmail";
// import { useNavigate } from "react-router";

const VerificationEmailContainer = () => {
  //   const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //   React.useEffect(() => {
  //     if (verificationEmailReducer.status === "succeeded") {
  //       navigate("/verify-code");
  //       dispatch(resetStatus());
  //     }
  //   }, [verificationEmailReducer?.status]);

  return (
    <VerificationEmail
      // verificationEmailReducer={verificationEmailReducer}
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default VerificationEmailContainer;
