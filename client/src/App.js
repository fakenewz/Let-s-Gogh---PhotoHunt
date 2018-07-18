import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Admindash from "./pages/Admindash";
import Adminquiz from "./pages/Adminquiz";
import Sign_In from "./pages/Sign_In";
import Quiz_Creation from "./pages/Quiz_Creation";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";

 
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Sign_In} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/login" component={Sign_In} /> */}
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/admindash" component={Admindash}/>
        <Route exact path="/adminquiz" component={Adminquiz}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
