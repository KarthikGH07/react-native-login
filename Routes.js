import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './Home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="login" />
      <Scene key="signup" component={SignUp} title="signup" initial={true} />
      <Scene key="home" component={Home} title="Home" />
    </Scene>
  </Router>
);
export default Routes;
