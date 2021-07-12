import type { AppProps } from "next/app";
import { ThemeContextProvider } from "context";
import { Theme } from "theme";
import { GlobalStyle } from "styles";
import { AnimatePresence } from "framer-motion";

import "nprogress/nprogress.css";
import nProgress from "nprogress";
import { Router } from "next/dist/client/router";
import { Layout } from "layout";

nProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeContextProvider>
      <Theme>
        <GlobalStyle />

        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Theme>
    </ThemeContextProvider>
  );
}
export default MyApp;
