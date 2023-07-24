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
    user: state.login.user,
  }));

  const balanceHistoryReducer = useAppSelector((state) => ({
    status: state.balanceHistory.status,
    balance: state.balanceHistory.balance,
    error: state.balanceHistory.error,
  }));

  React.useEffect(() => {
    dispatch(balanceHistoryUser(loginReducer?.user?.access));
  }, []);

  React.useEffect(() => {
    if (balanceHistoryReducer.status === "succeeded") {
      dispatch(balanceResetStatus());
    }
  }, [balanceHistoryReducer]);

  return <Dashboard balanceHistoryReducer={balanceHistoryReducer} />;
};

export default DashboardContainer;
