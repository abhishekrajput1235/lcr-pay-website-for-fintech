const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#5F259F] mb-10 text-center">
          Terms & Conditions
        </h1>
        <div className="space-y-8 text-gray-800 text-justify leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p>
              The following are the Terms & Conditions for online payments. Please read them carefully. By accessing this website/app, you agree to be bound by the following Terms & Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Terms</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                The Company/Payment Service Provider will take all reasonable steps to ensure the accuracy of the payment details; however, the Company/Payment Service Provider will not be liable for any error. The User will not hold the Company/Payment Service Provider responsible for any loss, damages, etc., that may be incurred or suffered by the User by using the payment gateway.
              </li>
              <li>
                The User will not hold the Company/Payment Service Provider responsible for rejecting the payment amount due to incorrect or incomplete entries. The User agrees that the debit/credit card details provided for use of the aforesaid Service(s) must be correct and accurate, and that the User shall not use a debit/credit card that is not lawfully owned by them or the use of which is not authorized by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.
              </li>
              <li>
                The Company/Payment Service Provider shall not be liable for any inaccuracy, error, or delay in, or omission of (a) any data, information, or message, or (b) the transmission or delivery of any such data, information, or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay, or omission, non-performance, or interruption in any such data, information, or message.
              </li>
              <li>
                The User agrees that the record of the instructions given and transactions done shall be conclusive proof and binding for all purposes and can be used as evidence in any proceeding.
              </li>
              <li>
                The User agrees that the services will be at the sole discretion of the Company, and the Company will be at liberty to vary the same from time to time without giving any notice.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Usage and Sharing</h2>
            <p>
              The Company may use and retain any information or data supplied by the User and will be at liberty to share the information and data with any other associate company or as may be required by any law or regulation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Communication</h2>
            <p>
              The User agrees to receive all sales or service calls from the Company’s employees, partners, or alliances, notwithstanding their registration for the DND (Do Not Disturb) registry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Refund</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                In the event the User wishes to cancel any of the services under this portal, they shall write to the customer support of the Company no later than 7 days after placing the order. The cancellation will be effective only after due confirmation from the Company, and a notification to this effect will be sent to the User. The amount paid by the User will be refunded within 10 days of effective cancellation.
              </li>
              <li>
                No claims for refund/chargeback shall be made by any User if such a cancellation request is made beyond the time specified above.
              </li>
              <li>
                If the money was deducted from your account while making a payment and your order was unsuccessful, your payment will be refunded to your account within 7 days.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Withdrawal</h2>
            <p>
              The User agrees that the Company is at liberty to withdraw the Online Payment facility, or any services provided thereunder, in respect of any or all the account(s) without assigning any reason whatsoever, without giving any notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Gateway Issues</h2>
            <p>
              In case the Website or Payment Service webpage linked to the Website/app is experiencing server-related issues like “slow down,” “failure,” or “session timeout,” the User shall, before initiating a second payment, check whether their Bank Account has been debited and accordingly resort to one of the following options:
            </p>
            <ul className="space-y-4 list-disc list-inside mt-4">
              <li>
                If the Bank Account appears to be debited, ensure that they do not make the payment twice and immediately contact customer support.
              </li>
              <li>
                If the Bank Account is not debited, the User may initiate a fresh transaction to make payment.
              </li>
              <li>
                The Company/Payment Service Provider assumes no liability whatsoever for any monetary or other damage suffered by the User on account of:
                <ul className="list-roman list-inside mt-2 pl-4">
                  <li>The delay, failure, interruption, or corruption of any data or other information transmitted in connection with the use of the Payment Gateway or Services in connection thereto; and/or</li>
                  <li>Any interruption or errors in the operation of the Payment Gateway.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p>
              The User agrees, understands, and confirms that their personal data, including without limitation details relating to debit card/credit card transmitted over the Internet, may be susceptible to misuse, hacking, theft, and/or fraud, and the Company has no control over such matters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Gateway Disclaimer</h2>
            <p>
              The Service is provided to facilitate access to pay for the services offered online. The Company does not make any representation of any kind, express or implied, as to the operation of the Payment Gateway other than what is specified on the Website for this purpose.
            </p>
            <p className="mt-4">
              By accepting/agreeing to these Terms and Conditions, the User expressly agrees that their use of the aforesaid online payment Service is entirely at their own risk and responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
