import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './assets/scss/style.css';

function App() {
  return (
    <React.StrictMode>
      <Router basename='/'>
        <Navbar></Navbar>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer></Footer>
    </React.StrictMode>
  );
}

export default App;
