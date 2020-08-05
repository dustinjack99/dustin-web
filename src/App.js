import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Navbar></Navbar>
      <main>
        <Router basename='/'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
      </main>
      <Footer></Footer>
    </React.StrictMode>
  );
}

export default App;
