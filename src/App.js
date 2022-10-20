import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme/Theme";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <ErrorBoundary>
            <Navbar></Navbar>
          </ErrorBoundary>
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
