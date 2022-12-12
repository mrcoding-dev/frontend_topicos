import React from "react";
import Meta from "components/Meta";
import MainSection from "components/MainSection";
import InputComponent from "components/InputComponent";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <hr />
      <MainSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="RESTAURANTE FAST CHEMISTRY"
        subtitle="Cliente de entrada simple para generar un pedido."
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="#"
      />
      <InputComponent />
      <hr />
    </>
  );
}

export default IndexPage;
