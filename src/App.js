import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './component/Cart'
import Home from './component/Home'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <h1>React-Redux Store</h1>
        <p>Welcome to the React Store</p>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>

      </div>
    </BrowserRouter>
    )
  }
}




export default App;
