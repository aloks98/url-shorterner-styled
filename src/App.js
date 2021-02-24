import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Shorten from "./pages/shorten";
import Home from "./pages/home";
import NotFound from "./pages/404";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shorten">
            <Shorten />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
