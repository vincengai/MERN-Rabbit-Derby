import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

import Modal from './modal/modal';
import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
import RabbitDerby from "./rabbitderby/rabbit_derby";
import AllHighscoreContainer from './highscore/all_highscore_container';
import UserHighscoreContainer from './highscore/user_highscore_container';

const App = () => {
  return (
    <div>
      <header>
        <Modal />
        <NavBarContainer />
      </header>
      <Switch>

        <Route path='/highscores/all' component={AllHighscoreContainer} />
        <Route path='/highscores/user' component={UserHighscoreContainer} />
        <ProtectedRoute exact path="/rabbitderby" component={ RabbitDerby } />
        <AuthRoute exact path="/" component={ MainPage } />
      </Switch>
    </div>
  );
};

export default App;