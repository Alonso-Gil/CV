import type { AppProps } from "next/app";

import ThemeProvider from "contexts/theme/theme.context";

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
