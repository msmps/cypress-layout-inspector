import { getConfiguration } from "./configure";

const isWithinThreshold = (a: number, b: number) => {
  const threshold = getConfiguration("threshold");
  return a >= b - threshold && a <= b + threshold;
};

export { isWithinThreshold };
