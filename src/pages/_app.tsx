import type { AppProps } from "next/app";

import ThemeProvider from "contexts/theme/theme.context";
import GlobalProvider from "contexts/global/global.context";

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
