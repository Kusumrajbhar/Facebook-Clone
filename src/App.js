import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWrapper from "./container/HomeWrapper";
import "./App.css";
import ProfileWrapper from "./container/ProfileWrapper";
import GamingWrapper from "./container/GamingWrapper";
import WatchWrapper from "./container/WatchWrapper";
import GroupWrapper from "./container/GroupWrapper";
import MarketPlaceWrapper from "./container/MarketWrapper";
import HeaderWrapper from "./container/HeaderWrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderWrapper />
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/watch" component={WatchWrapper} />
          <Route exact path="/marketPlace" component={MarketPlaceWrapper} />
          <Route exact path="/group" component={GroupWrapper} />
          <Route exact path="/gaming" component={GamingWrapper} />
          <Route exact path="/profile" component={ProfileWrapper} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
