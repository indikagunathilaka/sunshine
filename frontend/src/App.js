import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "./logo.svg";
//import './App.css';
import LoginLayoutRoute from "./layouts/LoginLayoutRoute";
import AppLayoutRoute from "./layouts/AppLayoutRoute";

import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import RolePage from "./containers/RolePage";
import UserPage from "./containers/UserPage";
import CustomerTypePage from "./containers/CustomerTypePage";
import DeliveryTypePage from "./containers/DeliveryTypePage";
import PaymentTypePage from "./containers/PaymentTypePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          <LoginLayoutRoute path="/login" component={LoginPage} />

          <AppLayoutRoute path="/dashboard" component={DashboardPage} />
          <AppLayoutRoute path="/customer-types" component={CustomerTypePage} />
          <AppLayoutRoute path="/delivery-types" component={DeliveryTypePage} />
          <AppLayoutRoute path="/payment-types" component={PaymentTypePage} />
          <AppLayoutRoute path="/roles" component={RolePage} />
          <AppLayoutRoute path="/users" component={UserPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
