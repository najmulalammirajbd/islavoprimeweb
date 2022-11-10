import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Redy from './components/Redy/Redy';
import Prime from './components/Redy/Prime';
import Show from './components/Redy/Show';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ClickNow from './components/ClickNow/ClickNow';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ThankYou from './components/ThankYou/ThankYou';
import SucccessScreen from './components/Success/Success';
import Pay from './components/Pay/Pay';
import Home from './components/Home/Home';



export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
          <Login></Login>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <PrivateRoute path="/music">
            <Redy></Redy>
          </PrivateRoute>
          <PrivateRoute path="/prime">
            <Prime/>
          </PrivateRoute>
          <PrivateRoute path="/show">
            <Show/>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path="/clicknow">
            <ClickNow></ClickNow>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/resetpassword">
            <ResetPassword></ResetPassword>
          </Route>
          <Route path="/success">
            <SucccessScreen></SucccessScreen>
          </Route>
          <Route path="/thankyou">
            <ThankYou></ThankYou>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
