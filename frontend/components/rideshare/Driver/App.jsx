import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import CheckoutPage from "./components/CheckoutPage";

const App = () => {
  return (
    <>
      <MaterialLayout>
        <CheckoutPage sx={{ m: 10 }} />
      </MaterialLayout>
    </>
  );
};

export default App;
