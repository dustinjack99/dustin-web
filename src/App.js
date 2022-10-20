import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import "./assets/scss/style.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <Navbar></Navbar>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </main>
        </Router>
        <Footer></Footer>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
