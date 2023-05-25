import { ReactElement, useState } from "react";

const initialCardDetails = {
  cardNumber: "2412751234123456",
  cvv: "327",
  expiryMonth: "09",
  expiryYear: "22",
};

function PayForm(): ReactElement {
  const [{ cardNumber, cvv, expiryMonth, expiryYear }, setCardDetails] =
    useState(initialCardDetails);
  const [password, setPassword] = useState("12345678A.");
  const [isVerified] = useState(true);

  const parseString = (string: string) => {
    const parsedString = string.replaceAll(" - ", ""); //remove all dashes with space to it's left and right
    return parsedString?.match(/.{1,4}/g)?.join(" - ") || ""; // regex adds a spaced dashed after every 4 characters
  };

  const cardDetailsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCardDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="font-montserrat pt-6 text-blue-900"
      onSubmit={submitHandler}
    >
      <div className="flex items-center justify-between">
        <div>
          <label className="font-semibold" htmlFor="card_number">
            Card Number
          </label>
          <p className="font-light text-[.75rem] mt-2">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <button type="button" className="flex gap-1 items-center text-blue-600">
          {" "}
          <img
            src="/assets/images/edit_icon.svg"
            alt="edit_icon"
            className="h-3 w-3 md:h-4 md:w-6"
          />
          <span className="text-[.75rem] md:text-sm font-medium">Edit</span>{" "}
        </button>
      </div>
      <div className="py-4">
        <div className="relative h-9">
          <img
            src="/assets/images/mastercard_icon.svg"
            alt="mastercard logo"
            className="absolute left-3 top-2 md:top-1 h-5 w-5 md:w-10 md:h-10 z-20"
          />
          <input
            type="text"
            id="card_number"
            name="cardNumber"
            className="w-full h-full border border-gray-300 focus:outline-blue-500 rounded-lg pl-12 md:pl-20 md:h-11"
            value={parseString(cardNumber)}
            onChange={cardDetailsHandler}
            disabled={isVerified}
            maxLength={25}
          />
          <img
            src="/assets/images/verified_icon.svg"
            alt="verified icon"
            className="absolute right-3 top-3 h-3 w-3 md:w-5 md:h-5 z-20 md:top-3"
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <div className="flex-1">
          <label className="font-semibold" htmlFor="cvv">
            CVV Number
          </label>
          <p className="font-light text-[.75rem] mt-2">
            Enter the 3 or 4 digit number on the card
          </p>
        </div>
        <div className="py-4 flex-1">
          <div className="relative h-9">
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-full h-full border border-gray-300 focus:outline-blue-500 rounded-lg pl-[40%] md:h-11 focus:text-blue-600
              font-medium"
              value={cvv}
              onChange={cardDetailsHandler}
              maxLength={4}
            />
            <img
              src="/assets/images/dots.svg"
              alt="dots"
              className="absolute right-3 top-2 w-5 h-5 z-20 md:top-3 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-1 py-2">
        <div className="flex-1">
          <label className="font-semibold" htmlFor="expiryMonth">
            Expiry Date
          </label>
          <p className="font-light text-[.75rem] mt-2">
            Enter the expiry date of the card
          </p>
        </div>
        <div className="py-4 flex-1">
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              className="block w-full h-9 border border-gray-300 focus:outline-blue-500 rounded-lg md:h-11 pl-[20%] focus:text-blue-600
              font-medium"
              value={expiryMonth}
              onChange={cardDetailsHandler}
              maxLength={2}
            />
            <span>/</span>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              className="w-full h-9 border border-gray-300 focus:outline-blue-500 rounded-lg md:h-11 pl-[20%] focus:text-blue-600
              font-medium"
              value={expiryYear}
              onChange={cardDetailsHandler}
              maxLength={2}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-2">
        <div className="flex-1">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <p className="font-light text-[.75rem] mt-2">
            Enter your dynamic password
          </p>
        </div>
        <div className="py-4 flex-1">
          <div className="relative h-9">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-full border border-gray-300 focus:outline-blue-500 rounded-lg pl-[40%] md:h-11 focus:text-blue-600
              font-medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src="/assets/images/dots.svg"
              alt="dots"
              className="absolute right-3 top-2 w-5 h-5 z-20 md:top-3 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="capitalize text-white w-full h-11 md:h-14 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 
      hover:from-blue-700 hover:to-blue-800 rounded-lg"
      >
        pay now
      </button>
    </form>
  );
}

export default PayForm;
