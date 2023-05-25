import { Variants } from "framer-motion";

export const fromTopAnimation: Variants = {
  initial: {
    transform: "translateY(-100%)",
    opacity: 0,
  },
  final: {
    transform: "translateY(0%)",
    opacity: 1,
  },
};
