import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Admindash from "./pages/Admindash";
import Studentquiz from "./pages/Studentquiz";
import Sign_In from "./pages/Sign_In";
import Quiz_Creation from "./pages/Quiz_Creation";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Timer from "./components/Timer";


 
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Sign_In} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/admindash" component={Admindash}/>
        <Route exact path="/studentquiz" component={Studentquiz}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
