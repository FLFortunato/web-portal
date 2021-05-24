import React from "react";
import { Provider } from "react-redux";
import { theme } from "./config/miu.config";
import { MainRoutes } from "./routes/routes";
import { store } from "./store/base";
import { MuiThemeProvider } from "@material-ui/core";
import { GlobalStyle } from "./globalStyle";

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
