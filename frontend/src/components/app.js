import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal';
import RabbitDerby from "./rabbitderby/rabbit_derby";
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="content">
      <header>
        <Modal />
        <NavBarContainer />
      </header>
      <Switch>
        <Route exact path="/" component={ RabbitDerby } />
        {/* <Route exact path="/" component={ MainPage } /> */}
      </Switch>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;