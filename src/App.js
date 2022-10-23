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
import { Container } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <Navbar></Navbar>
          <Container
            sx={{
              backgroundColor: "secondary.light",
              border: "solid",
              borderColor: "secondary.light",
              borderRadius: "1rem",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              height: "35rem",
              alignItems: "center",
              border: "1px solid blue",
              display: "flex",
              flexGrow: "unset",
              justifyContent: "center",
              marginTop: "5rem",
              marginBottom: "10rem",
              width: {
                xs: "95%",
                md: "75%",
                lg: "65&",
              },
            }}
          >
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
          </Container>
          <Footer></Footer>
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
