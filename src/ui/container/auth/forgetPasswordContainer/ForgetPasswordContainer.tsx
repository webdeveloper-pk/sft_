import React from "react";
import ForgetPassword from "../../../presentation/auth/forgetPassword/ForgetPassword";
// import { useNavigate } from "react-router";

const ForgetPasswordContainer = () => {
  //   const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
    code: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //   React.useEffect(() => {
  //     if (forgetPaswordReducer.status === "succeeded") {
  //       navigate("/dashboard");
  //       dispatch(resetStatus());
  //     }
  //   }, [forgetPaswordReducer?.status]);

  return (
    <ForgetPassword
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ForgetPasswordContainer;
