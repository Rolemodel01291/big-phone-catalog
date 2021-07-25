import React from "react";
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "./app/store";
import Shopping from "./catalog/pages/phone";
import NoMatch from "./catalog/noMatch";
import Checkout from "./catalog/pages/checkout";

function App() {
  return (
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
  );
}

export default App;
