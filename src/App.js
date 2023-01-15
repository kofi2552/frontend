import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import TermsAndConditions from "./pages/TermsAndConditions";
import KnowUs from "./pages/KnowUs";
import PrivacyPage from "./pages/PrivacyPage";
import PartnerUs from "./pages/PartnerUs";
import Legal from "./components/Legal";
import Layout2 from "./components/Layout2";
import BlogPage from "./pages/BlogPage";
import Usage from "./pages/Usage";
import OurCommunity from "./pages/OurCommunity";
import Community from "./pages/Community";
import CookiePolicy from "./pages/CookiePolicy";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import LandMain from "./pages/LandMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandMain />}>
            <Route index element={<Landing />} />
            <Route path="sell" element={<Sell />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/company/" element={<Layout2 />}>
            <Route path="about-us" element={<KnowUs />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="join-us" element={<Community />} />

            <Route path="legal/" element={<Legal />}>
              <Route path="usage" element={<Usage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="community" element={<OurCommunity />} />
              <Route path="partner-us" element={<PartnerUs />} />
              <Route path="terms-conditions" element={<TermsAndConditions />} />
              <Route path="cookies" element={<CookiePolicy />} />
            </Route>
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="trending" element={<Trending />} />
            <Route path="product/:id" element={<SingleProduct />} />
          </Route>

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
