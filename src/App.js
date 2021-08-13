import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/home/Home";
import "./App.css";
import Header from "./component/header/Header";
import Watch from "./component/watch/Watch";
import MarketPlace from "./component/marketPlace/MarketPlace";
import Gaming from "./component/gaming/Gaming";
import Group from "./component/group/Group";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/watch" component={Watch} />
          <Route exact path="/marketPlace" component={MarketPlace} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/gaming" component={Gaming} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
