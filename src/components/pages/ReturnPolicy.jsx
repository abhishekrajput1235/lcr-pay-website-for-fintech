import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto text-gray-800 mt-[50px]">
      <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
      <p className="mb-4">
        Return is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same Return policy. For all products, the Return/replacement policy provided on the product page shall prevail over the general Return policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this Return policy and the table below.
      </p>
      <p className="mb-4">
        The return policy is divided into three parts; Do read all sections carefully to understand the conditions and cases under which Return will be accepted.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Part 1 – Category, Return Window and Actions Possible</h2>
      <div className="overflow-x-auto mb-6">
        <table className="table-auto w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Category</th>
              <th className="border p-2">Return Window, Actions Possible and Conditions (if any)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Lifestyle: T-Shirt, Footwear, Sari, Short, Dress, Kid’s (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt, Formals, Jeans, Clothing Accessory), Women’s (Ethnic Wear, Fabric, Blouse, Jean, Skirt, Trousers, Bra), Bags, Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase, Luggage, etc...</td>
              <td className="border p-2">14 days<br/>Refund, Replacement or Exchange</td>
            </tr>
            <tr>
              <td className="border p-2">All Mobiles (except Apple & Google phones)</td>
              <td className="border p-2">
                7 days<br />
                Replacement only<br />
                In order to help you resolve issues with your product, we may troubleshoot your product either through online tools, over the phone, and/or through an in-person technical visit.
                <br /><br />
                If a defect is determined within the Return Window, a replacement of the same model will be provided at no additional cost. If no defect is confirmed or the issue is not diagnosed within 7 days of delivery, you will be directed to a brand service centre to resolve any subsequent issues.
                <br /><br />
                In any case, only one replacement shall be provided.
              </td>
            </tr>
            <tr>
              <td className="border p-2">Try & Buy</td>
              <td className="border p-2">
                10 days<br />
                Refund only<br />
                This policy shall be applicable selectively (geographical coverage, product, customer and time periods).
                <br /><br />
                Try & Buy benefits shall be applicable only if the product was bought when the item was on Try & Buy. Else normal category policy shall apply on the order. In any case, only one replacement shall be provided.
              </td>
            </tr>
            <tr>
              <td className="border p-2">No Questions Asked</td>
              <td className="border p-2">
                10 days<br />
                Refund or replacement<br />
                This policy enables easy product return requests for customers through the Platform, subject to product validations at the time of pick-up and fraud prevention mechanisms.
                <br /><br />
                This policy shall be applicable only if the product was bought when this policy was applicable to the product. If not, the policy provided here shall apply to the order. It is clarified that a customer may only be able to seek a one-time replacement under this Policy, subject to the other terms provided herein.
                <br /><br />
                <strong>Exceptions to this policy:</strong> Following claims will be covered under the policy provided here and through corresponding validation processes:
                <ul className="list-disc ml-5">
                  <li>product undelivered</li>
                  <li>product/accessories missing</li>
                  <li>wrong product/accessories delivered</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        <strong>No Return categories:</strong> Some products in the above categories are not returnable due to their nature or other reasons. For all products, the policy on the product page shall prevail. You can view the complete list of non-returnable products here.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Part 2 - Return Pick-Up and Processing</h2>
      <p className="mb-4">
        In case of Return where you would like item(s) to be picked up from a different address, the address can only be changed if pick-up service is available at the new address.
      </p>
      <p className="mb-4">During pick-up, your product will be checked for the following conditions:</p>
      <div className="overflow-x-auto mb-6">
        <table className="table-auto w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Category</th>
              <th className="border p-2">Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Correct Product</td>
              <td className="border p-2">IMEI/ name/ image/ brand/ serial number/ article number/ bar code should match and MRP tag should be undetached and clearly visible.</td>
            </tr>
            <tr>
              <td className="border p-2">Complete Product</td>
              <td className="border p-2">All in-the-box accessories (like remote control, starter kits, instruction manuals, chargers, headphones, etc.), freebies and combos (if any) should be present.</td>
            </tr>
            <tr>
              <td className="border p-2">Unused Product</td>
              <td className="border p-2">The product should be unused, unwashed, unsoiled, without any stains and with non-tampered quality check seals/return tags/warranty seals (wherever applicable). Before returning a Mobile/ Laptop/ Tablet, the device should be formatted and Screen Lock (Pin, Pattern or Fingerprint) must be disabled. iCloud lock must be disabled for Apple devices.</td>
            </tr>
            <tr>
              <td className="border p-2">Undamaged Product</td>
              <td className="border p-2">The product (including SIM trays/ charging port/ headphone port, back-panel etc.) should be undamaged and without any scratches, dents, tears or holes.</td>
            </tr>
            <tr>
              <td className="border p-2">Undamaged Packaging</td>
              <td className="border p-2">The product’s original packaging/ box should be undamaged.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-6">
        The field executive will refuse to accept the return if any of the above conditions are not met.
        <br /><br />
        For any products for which a refund is to be given, the refund will be processed once the returned product has been received by the seller.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Part 3 - General Rules for a successful Return</h2>
      <p className="mb-4">
        In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.
      </p>
      <p className="mb-4">
        During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund (on the spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except for manufacturing defects. In such cases, these category-specific replacement/return general conditions will be applicable. Click here to know more about Open Box Delivery.
      </p>
      <p className="mb-4">
        For products where installation is provided by Vypaarlist's service partners, do not open the product packaging by yourself. Vypaarlist authorised personnel shall help in unboxing and installation of the product.
      </p>
      <p className="mb-4">
        For Furniture, any product-related issues will be checked by authorised service personnel (free of cost) and attempted to be resolved by replacing the faulty/ defective part of the product. Full replacement will be provided only in cases where the service personnel opines that replacing the faulty/defective part will not resolve the issue.
      </p>
    </div>
  );
};

export default ReturnPolicy;
