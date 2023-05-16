import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AccountMerge from "./pages/AccountMerge";
import ErrorPage from "./pages/ErrorPage";
import AccountOrders from "./pages/AccountOrders";
import AccountDownloads from "./pages/AccountDownloads";
import AccountWithdrawals from "./pages/AccountWithdrawals";
import AccountInformation from "./pages/AccountInformation";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Policy from "./pages/Policy";
import AccountAffiliatePortal from "./pages/AccountAffiliatePortal";
import Certificates from "./pages/Certificates";
import AccountAffiliate from "./pages/AccountAffiliate";
import Leaderboard from "./pages/Leaderboard";
import Simulator from "./pages/Simulator";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route
            path="/layout/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/information" element={<AccountInformation />} />
                  <Route path="/accountmerge" element={<AccountMerge />} />
                  <Route path="/affiliate" element={<AccountAffiliate />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/withdrawals" element={<AccountWithdrawals />} />
                  <Route path="/simulator" element={<Simulator />} />
                  <Route
                    path="/affiliateportal"
                    element={<AccountAffiliatePortal />}
                  />
                  <Route path="/orders" element={<AccountOrders />} />
                  <Route path="/downloads" element={<AccountDownloads />} />
                </Routes>
              </Layout>
            }
          />

          {/* <Route path="/layout/dashboard" element={<Dashboard />} />
          <Route path="/layout/leaderboard" element={<Leaderboard />} />
          <Route path="/layout/information" element={<AccountInformation />} />
          <Route path="/layout/accountmerge" element={<AccountMerge />} />
          <Route path="/layout/affiliate" element={<AccountAffiliate />} />
          <Route path="/layout/certificates" element={<Certificates />} />
          <Route path="/layout/withdrawals" element={<AccountWithdrawals />} />
          <Route path="/layout/simulator" element={<Simulator />} />
          <Route
            path="/layout/affiliateportal"
            element={<AccountAffiliatePortal />}
          />
          <Route path="/layout/orders" element={<AccountOrders />} />
          <Route path="/layout/downloads" element={<AccountDownloads />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
