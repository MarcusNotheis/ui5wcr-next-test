import { ShellBar, ThemeProvider } from "@ui5/webcomponents-react/ssr";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }

    // import("@ui5/webcomponents-react/dist/Assets.js").then(() => {
    //   setTheme("sap_horizon");
    // });
  }, []);
  return (
    <ThemeProvider>
      <ShellBar primaryTitle={"NextJS Demo with UI5 Web Components React"} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
