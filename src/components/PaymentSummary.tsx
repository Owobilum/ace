import { FC } from "react";

import CreditCard from "./CreditCard";

interface PaymentSummaryProps {
  company: string;
  orderNumber: number;
  product: string;
  vat: number;
  companyLogo: string;
  total: number;
}

const dollar = () =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

const PaymentSummary: FC<PaymentSummaryProps> = ({
  company,
  orderNumber,
  product,
  vat,
  companyLogo,
  total,
}) => {
  return (
    <div className="px-[5%] xl:px-[10%] w-full h-full">
      <div className="relative w-full h-full md:overflow-hidden">
        <div className="flex justify-center">
          {" "}
          <CreditCard
            name="Jonathan Michael"
            last4="3456"
            expiryMonth="09"
            expiryYear="22"
          />
        </div>

        <div className="flex flex-col justify-center lg:justify-end bg-gray-200 h-full w-full absolute top-[17.5rem] lg:top-[4.6875rem] lg:pb-[4.6875rem] px-[5%] text-sm rounded-xl">
          <div className="flex justify-between w-full py-2">
            <p className="text-gray-600">Company</p>
            <div className="text-blue-900 font-semibold flex items-center gap-1">
              <p>
                <img
                  src={companyLogo}
                  alt={`${company} logo`}
                  className="h-4 w-4"
                />
              </p>
              <p>{company}</p>
            </div>
          </div>
          <div className="flex justify-between w-full py-2">
            <p className="text-gray-600">Order Number</p>
            <p className="text-blue-900 font-semibold">{orderNumber}</p>
          </div>
          <div className="flex justify-between w-full py-2">
            <p className="text-gray-600">Product</p>
            <p className="text-blue-900 font-semibold">{product}</p>
          </div>
          <div className="flex justify-between w-full pt-2 pb-2 lg:pb-4">
            <p className="text-gray-600">VAT (20%)</p>
            <p className="text-blue-900 font-semibold">
              {dollar().format(vat)}
            </p>
          </div>
          <div className="py-1 lg:py-4 border-t-2 border-dashed border-gray-600 relative">
            <div className="flex justify-between items-center">
              <div>
                {" "}
                <p className="text-gray-600">You have to pay</p>
                <p className="text-gray-600">
                  <span className="font-bold text-blue-900 text-lg">
                    {total}
                  </span>{" "}
                  USD
                </p>
              </div>
              <div>
                <img
                  src="/assets/images/ancient-scroll.png"
                  alt="notes"
                  className="h-6 w-6"
                />
              </div>
            </div>
            <p className="bg-white h-6 w-6 rounded-full -top-3 -left-6 z-30 absolute"></p>
            <p className="bg-white h-6 w-6 rounded-full -top-3 -right-6 z-30 absolute"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
