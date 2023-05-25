import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import PayModal from "../components/Paymodal";

const PaymentPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="px-[2%]">
      <section
        className="bg-cover h-screen px-[5%] grid place-items-center"
        style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
      >
        <button
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 font-bold font-montserrat"
        >
          Make Payment
        </button>
      </section>
      <AnimatePresence>
        {isOpen && <PayModal setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </main>
  );
};

export default PaymentPage;
