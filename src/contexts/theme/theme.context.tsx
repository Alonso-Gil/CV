import React, { createContext, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";
import { ThemeProvider as ThemeProviderLib } from "styled-components";

import CONSTANTS from "config/constants";
import { isDarkThemePreferredSync } from "utils/theme.utils";
import themes from "styles/theme";
import { ThemeProviderProps as Props } from "./theme.context.types";
import { ThemeProviderValue } from "./theme.context.types";
import GlobalStyles from "styles/base";

// @ts-ignore
export const ThemeContext = createContext<ThemeProviderValue>();

const { WITH_DARK_MODE } = CONSTANTS;

const ThemeProvider: React.FC<Props> = (props) => {
  const { theme } = props;
  const { light, dark } = themes;
  const initialTheme =
    isDarkThemePreferredSync() && WITH_DARK_MODE ? dark : light;
  const [selectedTheme, setSelectedTheme] = useState(theme ?? initialTheme);

  const value: ThemeProviderValue = useMemo(() => {
    return {
      selectedTheme,
      setSelectedTheme,
    };
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles theme={selectedTheme} />
      <ThemeProviderLib theme={selectedTheme}>
        <ContextDevTool context={ThemeContext} id="theme" displayName="Theme" />
        {props.children}
      </ThemeProviderLib>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
