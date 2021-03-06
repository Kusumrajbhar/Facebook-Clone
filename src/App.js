import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWrapper from "./container/HomeWrapper";
import "./App.css";
import ProfileWrapper from "./container/ProfileWrapper";
import GamingWrapper from "./container/GamingWrapper";
import WatchWrapper from "./container/WatchWrapper";
import GroupWrapper from "./container/GroupWrapper";
import MarketWrapper from "./container/MarketWrapper";
import HeaderWrapper from "./container/HeaderWrapper";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  createMuiTheme,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  //manual test
  // const [darkMode, setDarkMode] = useState(true);

  // const modeChangeHandler = () => {
  //   setDarkMode(!darkMode);
  // };

  //first test
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

  //second test
  // const [darkState, setDarkState] = useState(false);
  // const palletType = darkState ? "dark" : "light";
  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: palletType,
  //   },
  // });
  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };

  return (
    // manual try
    // <div className={darkMode ? "dark-mode" : "light-mode"}>

    <div className="App">
      {/* first provider */}
      {/* <ThemeProvider theme={darkTheme}> */}
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Router>
        {/* <HeaderWrapper
            modeChangeHandler={modeHandler}
            lightModeHandler={lightModeHandler}
          /> */}

        {/* wrapper of second */}
        {/* <HeaderWrapper modeChangeHandler={handleThemeChange} /> */}
        <HeaderWrapper />
        <Switch>
          <Route exact path="/" component={HomeWrapper} />
          <Route exact path="/watch" component={WatchWrapper} />
          <Route exact path="/marketPlace" component={MarketWrapper} />
          <Route exact path="/group" component={GroupWrapper} />
          <Route exact path="/gaming" component={GamingWrapper} />
          <Route exact path="/profile" component={ProfileWrapper} />
        </Switch>
      </Router>
      {/* </ThemeProvider> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
