import { FC, ReactNode } from "react";

const ModalBase: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/10 ">
      <div className="relative z-50 grid h-full w-full max-w-full place-items-center px-8">
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
