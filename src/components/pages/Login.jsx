import React, { useState } from 'react';
import logo from '../../img/logo/LCRPAY_LOGO.png';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const sendOtp = (e) => {
    e.preventDefault();
    // TODO: send OTP logic
    console.log('Send OTP to:', mobile);
    setOtpSent(true);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    // TODO: verify OTP logic
    console.log('Verify OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <img src={logo} alt="LCR PAY Logo" className="mx-auto h-14" />
          <h2 className="mt-2 text-2xl font-bold text-gray-800">Login with OTP</h2>
        </div>

        {!otpSent ? (
          <form onSubmit={sendOtp} className="space-y-4">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-[#5F259F] hover:bg-[#4e1c83] text-white font-bold py-2 rounded-lg"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg"
            >
              Verify & Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
