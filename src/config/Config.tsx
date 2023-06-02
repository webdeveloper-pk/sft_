import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PreLoader from "../components/preLoader/PreLoader";

// Lazy load the components
const Homepage = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Verification = lazy(() => import("../pages/Verification"));
const VerificationEmail = lazy(() => import("../pages/VerificationEmail"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const AccountMerge = lazy(() => import("../pages/AccountMerge"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const AccountOrders = lazy(() => import("../pages/AccountOrders"));
const AccountDownloads = lazy(() => import("../pages/AccountDownloads"));
const AccountWithdrawals = lazy(() => import("../pages/AccountWithdrawals"));
const AccountInformation = lazy(() => import("../pages/AccountInformation"));
const Contact = lazy(() => import("../pages/Contact"));
const Faq = lazy(() => import("../pages/Faq"));
const Policy = lazy(() => import("../pages/Policy"));
const AccountAffiliatePortal = lazy(
  () => import("../pages/AccountAffiliatePortal")
);
const Certificates = lazy(() => import("../pages/Certificates"));
const AccountAffiliate = lazy(() => import("../pages/AccountAffiliate"));
const Leaderboard = lazy(() => import("../pages/Leaderboard"));
const Simulator = lazy(() => import("../pages/Simulator"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Layout = lazy(() => import("../components/Layout"));
const Checkout = lazy(() => import("../pages/Checkout"));

const Config = () => {
  return (
    <Router>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Verify-code" element={<Verification />} />
          <Route path="/forget-password" element={<VerificationEmail />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route
            path="/home/*"
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
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
