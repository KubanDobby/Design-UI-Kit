export const gameColors = {
  green: { base: "#71c638", top: "#b5ff84", bottom: "#46881b" },
  orange: { base: "#ee9448", top: "#ffc89a", bottom: "#a85f1f" },
  yellow: { base: "#fdc25b", bottom: "#ee9448" },
  brown: "#94633a",
  text: { primary: "#3c415c", white: "#ffffff" },
  border: { dark: "#263f2a", red: "#4a1c25" },
  icon: "#3b2f2a",
  bg: "#020202",
} as const;

export type GameVariant = "green" | "orange";
