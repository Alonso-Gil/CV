import defaultTheme from "./default";

const palette = { ...defaultTheme.palette };
palette.background = palette.primary;

const theme = { ...defaultTheme, palette };

export default theme;
