import PrepaidRechargeForm from "../Recharge/PrepaidRechargeForm";

const operators = [
  { name: "Airtel Recharge", color: "bg-red-600", logo: "📶" },
  { name: "BSNL Recharge", color: "bg-gray-200", logo: "📡" },
  { name: "Jio Recharge", color: "bg-red-500", logo: "📲" },
  { name: "MTNL Recharge", color: "bg-green-600", logo: "📞" },
  { name: "Vi Recharge", color: "bg-red-500", logo: "📴" },
];

export default function BroadBandBill() {
  return (
    <PrepaidRechargeForm
      title="Pay your BroadBand Bill"
      subtitle="Stay connected with people across"
      operatorCardsImgHeading = "Select Broadband Operator"
      inputFields={[
        { type: "text", name: "userID", placeholder: "Enter User ID" },
        { type: "text", name: "amount", placeholder: "Enter Amount" },
      ]}
      operatorOptions={["Airtel", "Jio", "Vi", "BSNL"]}
      circleOptions={["Delhi", "Mumbai", "UP", "Bihar"]}
      operatorCards={operators}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    />
  );
}
