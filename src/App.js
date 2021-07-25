import React from "react";
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

import { store } from "./app/store";
import Shopping from "./catalog/pages/phone";
import NoMatch from "./catalog/noMatch";
import Checkout from "./catalog/pages/checkout";

function App() {
  // const theme = createTheme({
  //   palette: {
  //     type: "light",
  //     text: "rgb(17, 24, 39)",
  //     common: {
  //       black: "rgb(17, 24, 39)",
  //       white: "rgb(255, 255, 255)",
  //     },
      
  //     background: {
  //       paper: "#FFFFFF",
  //       default: "#f6f7f9",
  //     },
  //     error: red,
  //   },
  // });

  return (
    // <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/shopping" component={Shopping} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/" component={Shopping} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Provider>
    // </ThemeProvider>
  );
}

export default App;
