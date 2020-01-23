import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal';
import RabbitDerby from "./rabbitderby/rabbit_derby";

const App = () => {
  return (
    <div>
      <header>
        <Modal />
        <NavBarContainer />
      </header>
      <Switch>
        <ProtectedRoute exact path="/rabbitderby" component={ RabbitDerby } />
        <AuthRoute exact path="/" component={ MainPage } />
        {/* <AuthRoute exact path="/login" component={ LoginFormContainer } /> */}
        {/* <AuthRoute exact path="/signup" component={ SignupFormContainer } /> */}
      </Switch>
    </div>
  );
};

export default App;