import React, { useState } from "react";
import RechargePage from "./Recharge/RechargePage";
import PostpaidRecharge from "./Recharge/PostPaidRecharge";
import DTHRecharge from "./Recharge/DTHRecharge";
import WaterBill from "./Bills/WaterBill";
import PipedGasBill from "./Bills/PipedGasBill";
import ElectricityBill from "./Bills/ElectricityBill";
import LandlineBill from "./Bills/LandlineBill";
import BroadBandBill from "./Bills/BroadbandBill";
import More from "./more/More";

import {
  Smartphone,
  Receipt,
  Ticket,
  Gift,
  Grid,
  RadioTower,
  PhoneCall,
  SatelliteDish,
  Zap,
  Droplet,
  Flame,
  Phone,
  Wifi, Plane, BedDouble, BusFront
} from "lucide-react";
import FlightBooking from "./Booking/FlightBooking";
import HotelBooking from "./Booking/HotelBooking";
import BusBooking from "./Booking/BusBooking";

const tabs = [
  {
    label: "Mobile Recharge & DTH",
    icon: Smartphone,
    subTabs: [
      { label: "Mobile Prepaid", icon: RadioTower },
      { label: "Postpaid Bill", icon: PhoneCall },
      { label: "DTH Recharge", icon: SatelliteDish },
    ],
  },
  {
    label: "Bill Payments",
    icon: Receipt,
    subTabs: [
      { label: "Electricity", icon: Zap },
      { label: "Water", icon: Droplet },
      { label: "Piped Gas", icon: Flame },
      { label: "Landline Bill", icon: Phone },
      { label: "Broadband", icon: Wifi },
    ],
  },
  {
    label: "Travel Bookings", icon: Ticket,
    subTabs: [
      { label: "Flight Booking", icon: Plane },
      { label: "Hotel Booking", icon: BedDouble },
      { label: "Bus Booking", icon: BusFront },
    ],
  },
  { label: "eGift Card", icon: Gift },
  { label: "More", icon: Grid },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(null);

  const renderForm = (label) => {
    switch (label) {
      case "Mobile Prepaid":
        return <RechargePage />;
      case "Postpaid Bill":
        return <PostpaidRecharge />;
      case "DTH Recharge":
        return <DTHRecharge />;
      case "Electricity":
        return <ElectricityBill />;
      case "Water":
        return <WaterBill />;
      case "Piped Gas":
        return <PipedGasBill />;
      case "Landline Bill":
        return <LandlineBill />;
      case "Broadband":
        return <BroadBandBill />;
      // Booking
      case "Flight Booking":
        return <FlightBooking />
      case "Hotel Booking":
        return <HotelBooking />
      case "Bus Booking":
        return <BusBooking />
      case "More":
        return <More />;

      // Add others as needed
      default:
        return null;
    }
  };

  const currentTab = tabs[activeTab];
  const shouldRenderForm = activeSubTab || (!currentTab.subTabs && currentTab.label);

  return (
    <section className="bg-[#5F259F] text-[#5F259F] py-10 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  const hasSubTabs = tabs[index].subTabs;
                  setActiveSubTab(hasSubTabs ? null : tab.label);
                }}
                className={`flex flex-col items-center px-6 py-4 rounded-xl bg-white text-sm font-medium transition shadow-sm hover:shadow-md ${isActive ? "text-indigo-800 shadow-lg" : "text-gray-500"
                  }`}
              >
                <Icon className="h-6 w-6 mb-1 text-[#5F259F]" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-tabs */}
        {currentTab.subTabs && (
          <div className="bg-white rounded-lg p-4 shadow-lg flex flex-wrap justify-start gap-6 text-gray-800">
            {currentTab.subTabs.map((sub, i) => {
              const SubIcon = sub.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveSubTab(sub.label)}
                  className={`flex flex-col items-center text-sm transition ${activeSubTab === sub.label ? "text-[#5F259F]" : "text-gray-700"
                    }`}
                >
                  <SubIcon className="h-5 w-5 mb-1" />
                  {sub.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Content Renderer */}
        <div className="mt-4  bg-white p-6 rounded-lg shadow-lg text-gray-900">
          {renderForm(activeSubTab || (!currentTab.subTabs && currentTab.label))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

