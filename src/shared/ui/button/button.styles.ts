import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "relative",
    "rounded-game",
    "border-2",
    "border-game-border-dark",
    "text-white",
    "font-['Poppins:Bold',sans-serif]",
    "leading-[21px]",
    "transition-[filter,box-shadow]",
    "duration-75",
    "active:brightness-95",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-game-border-dark",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        green:
          "bg-game-green shadow-game-btn-green active:shadow-game-btn-green-pressed",
        orange:
          "bg-game-orange shadow-game-btn-orange active:shadow-game-btn-orange-pressed",
      },
      size: {
        sm: "px-4 py-1 text-[12px]",
        md: "px-6 py-2 text-[14px]",
        lg: "px-8 py-3 text-[16px]",
        icon: "p-2",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      variant: "green",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
