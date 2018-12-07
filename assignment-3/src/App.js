import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  navStyle = {
    ul: {
      listStyle: "none",
      margin: "auto",
      padding: "0"
    },
    li: {
      margin: "16px",
      display: "inline-block"
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav style={this.navStyle.ul}>
            <li style={this.navStyle.li}>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li style={this.navStyle.li}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </nav>
          <Switch>
            <Route path="/users" component={Users} />
            {/* <Route path="/courses/detail/:id" component={Course} /> */}
            <Route path="/courses" component={Courses} />
            <Redirect path="/all-courses" to="/courses" />
            <Route component={NotFound} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
