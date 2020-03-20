import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";

const Routes = withRouter(({ history }) => {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
});

const mapStateToProps = state => ({

});

export default compose(
  withRouter,
  connect(mapStateToProps, {})
)(Routes);
