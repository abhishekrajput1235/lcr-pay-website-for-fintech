import React, { useState } from 'react';
import logo from '../../img/logo/LCRPAY_LOGO.png';

const RegisterWithOtp = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    otp: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = (e) => {
    e.preventDefault();
    // TODO: Integrate backend OTP service
    console.log('OTP sent to:', form.mobile);
    setStep(2);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    // TODO: Verify OTP from backend
    console.log('Verifying OTP:', form.otp);
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit registration form to backend
    console.log('Final Registration Data:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <img src={logo} alt="LCR PAY Logo" className="mx-auto h-14" />
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {step === 1 && 'Register with Mobile Number'}
            {step === 2 && 'Enter OTP'}
            {step === 3 && 'Complete Registration'}
          </h2>
        </div>

        {step === 1 && (
          <form onSubmit={sendOtp} className="space-y-4">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-[#5F259F] text-white font-bold py-2 rounded-lg"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOtp} className="space-y-4">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 rounded-lg"
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-[#5F259F] text-white font-bold py-2 rounded-lg"
            >
              Complete Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterWithOtp;
