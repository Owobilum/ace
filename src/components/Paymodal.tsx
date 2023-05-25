import { Dispatch, SetStateAction, FC } from "react";
import { motion } from "framer-motion";

import { fromTopAnimation } from "../utils/animations";
import ModalBase from "./ModalBase";
import PayForm from "./PayForm";
import PaymentSummary from "./PaymentSummary";

const PayModal: FC<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <ModalBase>
      <motion.div
        className="w-full lg:w-[90%] bg-white px-[5%] py-10 font-montserrat"
        variants={fromTopAnimation}
        initial="initial"
        animate="final"
        exit="initial"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="flex justify-end text-white">
          <button
            className="mb-1 h-6 w-6 font-openSans text-sm font-thin transition-transform 
              hover:scale-110 lg:h-8 lg:w-10 lg:pb-0 lg:text-base text-black bg-gray-100"
            onClick={handleClose}
            aria-label="close"
          >
            X
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="grow">
            <header className="flex justify-between font-montserrat py-4">
              <div className="flex gap-4 items-center">
                <p className="h-10 w-10 bg-blue-500 rounded-full grid place-items-center">
                  <img
                    src="/assets/images/credit-card.png"
                    alt="logo"
                    className="w-5 h-5"
                  />
                </p>
                <p className="font-bold text-blue-900 lg:text-lg">
                  AceCoin<span className="font-normal">Pay</span>
                </p>
              </div>
              <div className="flex gap-1">
                <div className="date_value">0</div>
                <div className="date_value">1</div>{" "}
                <div className="flex items-center">:</div>
                <div className="date_value">1</div>{" "}
                <div className="date_value">9</div>{" "}
              </div>{" "}
            </header>
            <PayForm />
          </div>
          <div className="grow-0 w-full xl:w-[28.125rem] min-h-[555px] lg:min-h-[400px]">
            <PaymentSummary
              company="Apple"
              orderNumber={1266201}
              product="Macbook Air"
              vat={100}
              companyLogo="/assets/images/apple-logo.svg"
              total={549.99}
            />
          </div>
        </div>
      </motion.div>
    </ModalBase>
  );
};

export default PayModal;
