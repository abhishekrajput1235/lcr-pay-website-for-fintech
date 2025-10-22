
import React, { useState } from "react";

export default function PrepaidRechargeForm({
  title = "Prepaid Recharge",
  subtitle = "Instant mobile bill payments",
  operatorCardsImgHeading = "Select Mobile Prepaid Operators",
  inputFields = [
    { type: "text", name: "mobile", placeholder: "Enter Mobile Number" },
    { type: "text", name: "amount", placeholder: "Enter Amount" }
  ],
  operatorOptions = ["Airtel", "Jio", "Vi", "BSNL"],
  circleOptions = ["Delhi", "Mumbai", "Uttar Pradesh", "Bihar"],
  operatorCards = [],
  onSubmit = (formData) => console.log("Submitted:", formData),
}) {
  const initialFormData = inputFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, { operator: "", circle: "" });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <>
    <div className="p-8  w-full mx-auto bg-white  rounded-lg text-black">
      <h2 className="text-2xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 mb-6">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
        {inputFields.map((field, idx) => (
          <input
            key={idx}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className="border rounded-lg p-3 w-full focus:outline-blue-500"
          />
        ))}

        <select
          value={formData.operator}
          onChange={(e) => handleChange("operator", e.target.value)}
          className="border rounded-lg p-3 w-full text-gray-500"
        >
          <option value="">Select Operator</option>
          {operatorOptions.map((op, idx) => (
            <option key={idx} value={op}>
              {op}
            </option>
          ))}
        </select>

        <select
          value={formData.circle}
          onChange={(e) => handleChange("circle", e.target.value)}
          className="border rounded-lg p-3 w-full text-gray-500"
        >
          <option value="">Select Circle</option>
          {circleOptions.map((circle, idx) => (
            <option key={idx} value={circle}>
              {circle}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-4 py-3 font-medium"
        >
          Proceed to Pay
        </button>
      </div>

      {operatorCards.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-4">
            {operatorCardsImgHeading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {operatorCards.map((op, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow hover:shadow-lg cursor-pointer ${op.color} text-white`}
              >
                {op.logo && <span className="text-4xl mb-2">{op.logo}</span>}
                <span className="text-center text-sm">{op.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
   
    </>
  );
}
