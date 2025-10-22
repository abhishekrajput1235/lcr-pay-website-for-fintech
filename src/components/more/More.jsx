import { 
  FaTv, FaCreditCard, FaHeartbeat, FaHome, FaShieldAlt, 
  FaHandHoldingUsd, FaHospital, FaRegNewspaper, FaUserShield, 
  FaBookOpen, FaCar, FaGasPump, FaCity, FaLandmark, FaMoneyCheckAlt 
} from "react-icons/fa";

const services = [
  { label: "Cable", icon: <FaTv /> },
  { label: "Credit Card", icon: <FaCreditCard /> },
  { label: "Health Insurance", icon: <FaHeartbeat /> },
  { label: "Housing Society", icon: <FaHome /> },
  { label: "Insurance", icon: <FaShieldAlt /> },
  { label: "Loan Repayment", icon: <FaHandHoldingUsd /> },
  { label: "Hospital", icon: <FaHospital /> },
  { label: "Subscription", icon: <FaRegNewspaper /> },
  { label: "Life Insurance", icon: <FaUserShield /> },
  { label: "Education Fees", icon: <FaBookOpen /> },
  { label: "FASTag", icon: <FaCar /> },
  { label: "LPG", icon: <FaGasPump /> },
  { label: "Municipal Services", icon: <FaCity /> },
  { label: "Municipal Taxes", icon: <FaLandmark /> },
  { label: "DMT", icon: <FaMoneyCheckAlt /> },
];

export default function More() {
  return (
    <div className="bg-transparent p-4 rounded-lg  max-w-4xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-[#5F259F]">
            <div className="text-2xl mb-2">{service.icon}</div>
            <span className="text-sm text-center">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
