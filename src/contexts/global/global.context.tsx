import React, { createContext, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";

import { GlobalProviderProps as Props } from "./global.context.types";
import { GlobalProviderValue } from "./global.context.types";

// @ts-ignore
export const GlobalContext = createContext<GlobalProviderValue>();

const GlobalProvider: React.FC<Props> = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const value: GlobalProviderValue = useMemo(() => {
    return { showSideMenu, setShowSideMenu };
  }, [showSideMenu]);

  return (
    <GlobalContext.Provider value={value}>
      <ContextDevTool
        context={GlobalContext}
        id="global"
        displayName="Global"
      />
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
