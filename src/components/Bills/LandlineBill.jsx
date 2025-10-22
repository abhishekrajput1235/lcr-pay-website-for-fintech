import PrepaidRechargeForm from "../Recharge/PrepaidRechargeForm";

const operators = [
  { name: "Airtel Recharge", color: "bg-red-600", logo: "📶" },
  { name: "BSNL Recharge", color: "bg-gray-200", logo: "📡" },
  { name: "Jio Recharge", color: "bg-red-500", logo: "📲" },
  { name: "MTNL Recharge", color: "bg-green-600", logo: "📞" },
  { name: "Vi Recharge", color: "bg-red-500", logo: "📴" },
];

export default function LandlineBill() {
  return (
    <PrepaidRechargeForm
      title="Pay your LandLine Bill"
      subtitle="Life's better staying connected"
      operatorCardsImgHeading = "Select Landline Bill Operator"
      inputFields={[
        { type: "text", name: "custid", placeholder: "Landline Number with STD code" },
        { type: "text", name: "amount", placeholder: "Enter Amount" },
      ]}
      operatorOptions={["Airtel", "Jio", "Vi", "BSNL"]}
      circleOptions={["Delhi", "Mumbai", "UP", "Bihar"]}
      operatorCards={operators}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    />
  );
}
