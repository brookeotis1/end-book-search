import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
            
            
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
