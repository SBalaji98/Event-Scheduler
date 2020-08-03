import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "react-big-calendar/lib/css/react-big-calendar.css";
//components
import Alert from "./components/layout/alert";
import Navbar from "./components/layout/navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routing/privateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/landing";
import Calendar from "./components/layout/calendar";
import Charts from "./components/layout/charts";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/calendar' component={Calendar} />
            <PrivateRoute exact path='/charts' component={Charts} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
