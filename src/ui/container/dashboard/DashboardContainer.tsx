import React from "react";
import { useAppSelector, useAppDispatch } from "../../../services/hooks/hooks";
import Dashboard from "../../presentation/dashboard/Dashboard";
import {
  balanceHistoryUser,
  resetStatus as balanceResetStatus,
} from "../../../store/slices/mt5/balanceHistorySlice";

const DashboardContainer = () => {
  const dispatch = useAppDispatch();

  const loginReducer = useAppSelector((state) => ({
    // isLoggedIn: state.login.isLoggedIn,
    user: state.login.user,
  }));

  const balanceHistoryReducer = useAppSelector((state) => ({
    status: state.balanceHistorySlice.status,
    balance: state.balanceHistorySlice.balance,
    error: state.balanceHistorySlice.error,
  }));

  React.useEffect(() => {
    // if (balanceHistoryReducer.status === "succeeded") {
    dispatch(
      balanceHistoryUser({
        token: loginReducer?.user?.access,
      })
    );
    dispatch(balanceResetStatus());
    // }
    // eslint-disable-next-line
  }, []);

  const chartData = balanceHistoryReducer?.balance;

  const dates = chartData?.data?.map((item: any) => item.date);
  const balances = chartData?.data?.map((item: any) => item.balance);

  return <Dashboard dates={dates} balances={balances} />;
};

export default DashboardContainer;
