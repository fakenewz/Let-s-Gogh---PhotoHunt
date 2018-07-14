import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Question from "./pages/Question";
import Books from "./pages/Books";
import Admindash from "./pages/Admindash";
import Adminquiz from "./pages/Adminquiz";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
   <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/admindash" component={Books}/>
        <Route exact path="/adminquiz" component={Books}/>
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div> 
    <div>
      <Nav />
    <Switch> 
        <Route exact path="/" component={Question} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/question/:id" component={Detail} />
        <Route component={NoMatch} />
     </Switch>
    </div>
  </Router>
);

export default App;
