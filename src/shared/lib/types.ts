/**
 * Common type utilities for UI components
 */

/** Variant types for components supporting multiple visual styles */
export type GameVariant = "green" | "orange";

/** Size variants for components */
export type Size = "sm" | "md" | "lg";

/** Icon-only size variant */
export type IconSize = "sm" | "md" | "lg";

/** States for interactive components */
export interface DisabledState {
  disabled?: boolean;
}

/** Class prop support */
export interface ClassProp {
  class?: string;
}

/** Variant support trait */
export interface VariantSupport {
  variant?: GameVariant;
}

/** Size support trait */
export interface SizeSupport {
  size?: Size;
}

/** Controlled component pattern */
export interface ControlledComponent<T> {
  modelValue?: T;
  "onUpdate:modelValue"?: (value: T) => void;
}

/** Uncontrolled component pattern */
export interface UncontrolledComponent<T> {
  defaultValue?: T;
}

/** Aria attributes for accessibility */
export interface AriaAttributes {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
}
