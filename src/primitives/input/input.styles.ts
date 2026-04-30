/**
 * Input component styles using class-variance-authority
 * Supports variants (green/orange), sizes (sm/md/lg), and states (disabled, error)
 */
import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  [
    "relative",
    "rounded-game",
    "border-2",
    "border-game-border-dark",
    "bg-game-yellow",
    "text-game-text",
    "font-['Poppins:Regular',sans-serif]",
    "placeholder-game-text/60",
    "transition-[border-color,box-shadow]",
    "duration-75",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-game-border-dark",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "invalid:border-game-border-red",
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-1 text-[12px]",
        md: "px-4 py-2 text-[14px]",
        lg: "px-6 py-3 text-[16px]",
      },
      error: {
        true: "border-game-border-red bg-game-bg text-game-text",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
