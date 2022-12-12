import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uft.cl/images/la_universidad/imagen-corporativa/Institucional/Logo_FINIS_institucional.png"
      />

      <Component {...pageProps} />

      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright={`© ${new Date().getFullYear()}`}
        logo="https://uft.cl/images/la_universidad/imagen-corporativa/Institucional/Logo_FINIS_institucional.png"
      />
    </>
  );
}

export default MyApp;
