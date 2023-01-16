import CONSTANTS from "config/constants";

const { WITH_DARK_MODE } = CONSTANTS;

export const isDarkThemePreferredSync = () => {
  if (typeof window === "undefined") return false;
  if (typeof window === "undefined" || !WITH_DARK_MODE) return false;

  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};
