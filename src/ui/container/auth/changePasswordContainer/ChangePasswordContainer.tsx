import React from "react";
import ChangePassword from "../../../presentation/auth/changePassword/ChangePassword";
// import { useNavigate } from "react-router";

const ChangePasswordContainer = () => {
  //   const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
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
  //     if (changePasswordReducer.status === "succeeded") {
  //       navigate("/home/dashboard");
  //       dispatch(resetStatus());
  //     }
  //   }, [changePasswordReducer?.status]);

  return (
    <ChangePassword
      user={user}
      //   changePasswordReducer={changePasswordReducer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ChangePasswordContainer;
