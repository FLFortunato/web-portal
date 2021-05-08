import React, { useEffect } from "react";

import RegisterPage from "./components/register";
import { Provider } from "react-redux";
import { store } from "./store/base";

const App = () => {
  return (
    <Provider store={store}>
      <RegisterPage />
    </Provider>
  );
};

export default App;
