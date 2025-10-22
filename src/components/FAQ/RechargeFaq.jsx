import FaqAccordion from './FaqAccordion';

const rechargeFaqs = [
  {
    question: "How can I recharge my mobile?",
    answer: "Go to the Recharges section, select your operator, enter details and pay securely.",
  },
  {
    question: "Are there any extra charges?",
    answer: "No, LCR PAY does not charge any extra fees for mobile recharges.",
  },
    {
    question: "How do I load money into my wallet?",
    answer: "Use UPI, Debit/Credit Card, or Net Banking to add money instantly.",
  },
  {
    question: "Do I get cashback?",
    answer: "Yes! We offer exciting rewards on every wallet transaction.",
  },
];

const walletFaqs = [
  {
    question: "How do I load money into my wallet?",
    answer: "Use UPI, Debit/Credit Card, or Net Banking to add money instantly.",
  },
  {
    question: "Do I get cashback?",
    answer: "Yes! We offer exciting rewards on every wallet transaction.",
  },
];

const RechargeFaq = () => {
  return (
    <>
      <FaqAccordion faqs={rechargeFaqs} title="Recharge & Bill FAQs" />
      {/* <FaqAccordion faqs={walletFaqs} title="Wallet & Rewards FAQs" /> */}
    </>
  );
};

export default RechargeFaq;