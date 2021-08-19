import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWrapper from "./container/HomeWrapper";
import "./App.css";
//import "./component/StyleComoonent/color.scss";
import ProfileWrapper from "./container/ProfileWrapper";
import GamingWrapper from "./container/GamingWrapper";
import WatchWrapper from "./container/WatchWrapper";
import GroupWrapper from "./container/GroupWrapper";
import MarketPlaceWrapper from "./container/MarketWrapper";
import HeaderWrapper from "./container/HeaderWrapper";
import Check from "./container/check";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  // const [darkMode, setDarkMode] = useState(true);

  // const modeChangeHandler = () => {
  //   setDarkMode(!darkMode);
  // };

  // const [mode, setMode] = useState();

  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`);

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  // const modeHandler = () => {
  //   setMode(darkMode ? "light" : "dark");
  // };

  // const lightModeHandler = () => {
  //   setMode(darkMode ? "dark" : "light");
  // };

  return (
    // <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="App">
      {/* <ThemeProvider theme={theme}>
        <CssBaseline /> */}
      <Router>
        <HeaderWrapper
        // modeChangeHandler={modeHandler}
        // lightModeHandler={lightModeHandler}
        />
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/watch" component={WatchWrapper} />
          <Route exact path="/marketPlace" component={MarketPlaceWrapper} />
          <Route exact path="/group" component={GroupWrapper} />
          <Route exact path="/gaming" component={GamingWrapper} />
          <Route exact path="/profile" component={ProfileWrapper} />
          <Route exact path="/check" component={Check} />
        </Switch>
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
