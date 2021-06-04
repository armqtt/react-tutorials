import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ShopDetail from './ShopDetail';
import AddShop from './AddShop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ShopProvider } from './ShopContext';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ShopDetail} />
            <Route path="/addshop" exact component={AddShop} />
          </Switch>
        </div>
      </Router>
    </ShopProvider>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
