import PrepaidRechargeForm from "./PrepaidRechargeForm";

const operators = [
  { name: "Airtel Recharge", color: "bg-red-600", logo: "📶" },
  { name: "BSNL Recharge", color: "bg-gray-200", logo: "📡" },
  { name: "Jio Recharge", color: "bg-red-500", logo: "📲" },
  { name: "MTNL Recharge", color: "bg-green-600", logo: "📞" },
  { name: "Vi Recharge", color: "bg-red-500", logo: "📴" },
];

export default function PostpaidRecharge() {
  return (
    <PrepaidRechargeForm
      title="Postpaid Recharge"
      subtitle="Clearing your mobile bills instantly"
      operatorCardsImgHeading = "Select Postpaid Bill Operators"
      inputFields={[
        { type: "text", name: "mobile", placeholder: "Enter Mobile Number" },
        { type: "text", name: "amount", placeholder: "Enter Amount" },
      ]}
      operatorOptions={["Airtel", "Jio", "Vi", "BSNL"]}
      circleOptions={["Delhi", "Mumbai", "UP", "Bihar"]}
      operatorCards={operators}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    />
  );
}
