import { FC } from "react";

interface CreditCardProps {
  name: string;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
}
const CreditCard: FC<CreditCardProps> = ({
  expiryMonth,
  expiryYear,
  last4,
  name,
}) => {
  return (
    <div className="w-fit">
      <div className="pt-2 relative w-fit">
        <div className="bg-blue-600 h-6 w-[5.1875rem] rounded-b-full absolute top-0 left-[5.25rem]"></div>
        <div className="relative z-20 w-[15.625rem] h-[18.75rem] bg-gray-100/95 rounded-lg p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img
              src="/assets/images/chip.png"
              alt="chip"
              className="w-10 h-10"
            />
            <img
              src="/assets/images/wifi.png"
              alt="connect_icon"
              className="w-6 h-6"
            />
          </div>
          <div className="text-blue-900">
            <p>{name}</p>
            <p className="font-bold">
              <span className="text-3xl pr-4">.....</span> {last4}
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="font-medium">
                {expiryMonth} / {expiryYear}
              </p>
              <p>
                <img
                  src="/assets/images/mastercard_logo.svg"
                  alt="provider_logo"
                  className="h-12 w-12"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
