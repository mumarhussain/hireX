import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * @param  {...any} inputs - Class names or conditional class values.
 * @returns {string} A single merged className string.
 */
export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
};
