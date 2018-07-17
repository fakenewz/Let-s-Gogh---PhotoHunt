import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Sign_In from "./pages/Sign_In";
import Quiz_Creation from "./pages/Quiz_Creation";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

 
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Sign_In} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/quizcreation" component={Quiz_Creation} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
