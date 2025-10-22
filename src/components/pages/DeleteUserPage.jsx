import React, { useState } from "react";
import logo from "../../img/logo/LCRPAY_LOGO.png";
import { ShieldAlert } from "lucide-react";
import axios from "axios";

// ✅ Create an Axios instance with base URL
const api = axios.create({
  baseURL: "https://newapi.lcrpay.com", // Main API base
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const DeleteUserPage = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null); // Auth token

  // Step 1️⃣: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // ✅ Call send-otp endpoint
      await api.post(`/misc/send-otp?mobile_number=${mobile}`);
      console.log("✅ OTP sent successfully");
      setStep(2);
    } catch (err) {
      console.error("❌ Error sending OTP:", err.response?.data || err.message);
      setError(
        "Failed to send OTP. Please check the mobile number and try again."
      );
    }
  };

  // Step 2️⃣: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // ✅ Call verify-otp endpoint
      const response = await api.post(`/misc/verify-otp?mobile_number=${mobile}&otp=${otp}`);
      console.log("✅ OTP verification successful:", response.data);

      // ✅ Extract and store the access token
      const accessToken = response.data.access_token;
      if (!accessToken) {
        throw new Error("Access token not found in response.");
      }
      setToken(accessToken);
      setStep(3);
    } catch (err) {
      console.error("❌ OTP verification failed:", err.response?.data || err.message);
      setError(
        `Invalid OTP. Please try again. Details: ${err.response?.data?.detail || err.message}`
      );
    }
  };

  // Step 3️⃣: Delete Account
  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // ✅ Use correct endpoint and method (PUT)
      const response = await api.put(
        "/misc/delete_user",
        { phone_number: mobile }, // Send phone_number in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send bearer token
          },
        }
      );

      console.log("✅ Account deleted:", response.data);
      setSuccess("Your account has been permanently deleted.");
      setStep(4);
    } catch (err) {
      console.error("❌ Error deleting user:", err.response?.data || err.message);
      setError(
        `Failed to delete account: ${err.response?.data?.detail || err.message}`
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50/50 px-4 pt-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-500">
        <div className="text-center mb-8">
          <img src={logo} alt="LCR PAY Logo" className="mx-auto h-14 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            Delete Your Account
          </h2>
          <p className="text-gray-500 mt-2">
            {step === 1 && "Enter your mobile number to begin."}
            {step === 2 &&
              `We've sent a 6-digit OTP to ${mobile}. Please enter it below.`}
            {step === 3 &&
              "Please confirm you want to permanently delete your account."}
            {step === 4 &&
              "Your account has been successfully deleted from LCR PAY."}
          </p>
        </div>

        {error && (
          <p className="text-red-600 bg-red-100 rounded-lg py-2 px-4 mb-4 text-sm text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 bg-green-100 rounded-lg py-2 px-4 mb-4 text-sm text-center">
            {success}
          </p>
        )}

        {/* STEP 1: ENTER MOBILE */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <input
              id="mobile"
              type="tel"
              placeholder="Your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
            />
            <button
              type="submit"
              className="w-full bg-[#5F259F] text-white font-bold py-3 rounded-lg hover:bg-[#4a1c7c] transition-colors"
            >
              Send OTP to Verify
            </button>
          </form>
        )}

        {/* STEP 2: VERIFY OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <input
              id="otp"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-center tracking-widest"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* STEP 3: DELETE CONFIRMATION */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
              <div className="flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 mr-3" />
                <p className="font-bold">This action is irreversible.</p>
              </div>
              <p className="mt-2">
                All your data, including transaction history and rewards, will
                be permanently removed from LCR PAY.
              </p>
            </div>
            <button
              onClick={handleDeleteAccount}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Yes, Delete My Account
            </button>
          </div>
        )}

        {/* STEP 4: SUCCESS MESSAGE */}
        {step === 4 && (
          <div className="text-center space-y-4">
            <p className="text-green-700 font-semibold">
              Your account has been deleted successfully.
            </p>
            <p className="text-gray-500 text-sm">
              We’re sorry to see you go. You can always sign up again anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteUserPage;
