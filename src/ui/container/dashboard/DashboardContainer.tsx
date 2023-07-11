import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../../services/hooks/hooks";
import { loginManagerUser } from "../../../store/slices/mt5/manager/loginManagerSlice";
import { userAddUser } from "../../../store/slices/mt5/manager/userAddSlice";
import { getInfo } from "../../../store/slices/mt5/user/getInfoSlice";
import { getAccountInfo } from "../../../store/slices/mt5/user/getAccountInfoSlice";
import { deals } from "../../../store/slices/mt5/user/dealsSlice";
import Dashboard from "../../presentation/dashboard/Dashboard";

const DashboardContainer = () => {
  const dispatch = useAppDispatch();

  const loginManagerReducer = useAppSelector((state) => ({
    server: state.loginManager.server,
    login: state.loginManager.login,
    password: state.loginManager.password,
    statusLogin: state.loginManager.status,
    errorLogin: state.loginManager.error,
  }));

  const userAddReducer = useAppSelector((state) => ({
    login: state.userAdd.login,
    group: state.userAdd.group,
    master_pass: state.userAdd.master_pass,
    ctx: state.userAdd.ctx,
    statusUser: state.userAdd.status,
    errorUser: state.userAdd.error,
  }));

  const getInfoReducer = useAppSelector((state) => ({
    ctx: state.getInfo.ctx,
    user: state.getInfo.user,
    statusInfo: state.getInfo.status,
    errorInfo: state.getInfo.error,
  }));

  const getAccountInfoReducer = useAppSelector((state) => ({
    ctxAccount: state.getAccountInfo.ctx,
    userAccount: state.getAccountInfo.user,
    statusAccount: state.getAccountInfo.status,
    errorAccount: state.getAccountInfo.error,
  }));

  const dealsReducer = useAppSelector((state) => ({
    userDeals: state.deals.user,
    fromDeals: state.deals.from,
    toDeals: state.deals.to,
    latestDeals: state.deals.latest,
    statusAccount: state.deals.status,
    errorAccount: state.deals.error,
  }));

  const [userLogin, setUserLogin] = React.useState({
    server: "",
    login: "",
    password: "",
  });

  const [userAdd, setUserAdd] = React.useState({
    login: "",
    group: "",
    master_pass: "",
    ctx: "",
  });

  const [getInfo, setGetInfo] = React.useState({
    ctx: "",
    user: "",
  });

  const [getAccountInfo, setGetAccountInfo] = React.useState({
    ctx: "",
    user: "",
  });

  const [deals, setDeals] = React.useState({
    user: "",
    from: "",
    to: "",
    latest: "",
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleLoginManagerUser = React.useCallback(() => {
  //   dispatch(loginManagerUser(user));
  // }, [dispatch, user]);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   handleLoginManagerUser();
  // };

  // React.useEffect(() => {
  //   if (loginManagerReducer.status === "succeeded") {
  //     dispatch(resetStatus());
  //   }
  // }, [loginMnagerReducer?.status]);

  return <Dashboard />;
};

export default DashboardContainer;
