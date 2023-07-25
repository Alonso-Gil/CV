import defaultTheme from "./default";

const palette = { ...defaultTheme.palette };
palette.background = palette["gray-s0-l75"];

const theme = { ...defaultTheme, palette };

export default theme;
