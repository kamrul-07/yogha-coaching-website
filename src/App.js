
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Moreservices from './Component/Moreservices/Moreservices';

import About from './Component/About/About';
import Gallary from './Component/Gallary/Gallary';
import NotFound from './Component/NotFound/NotFound';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/moreservices">
            <Moreservices></Moreservices>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/gallary">
            <Gallary></Gallary>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
