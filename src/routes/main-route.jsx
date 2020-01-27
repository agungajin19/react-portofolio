import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotMatch from '../pages/NotMatch';
import ProductDetail from '../pages/ProductDetail';
import Transaction from '../pages/Transaction';
import Cart from '../pages/Cart';
import Collection from '../pages/Collection';
import Category from '../pages/Category';

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/SD" component={Category} />
        <Route exact path="/SMP" component={Category} />
        <Route exact path="/SMA" component={Category} />
        <Route exact path="/ProductDetail/:id" component={ProductDetail} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Collection" component={Collection} />
        <Route exact path="/Transaction" component={Transaction} />
        <Route component={NotMatch} />
      </Switch>
    </BrowserRouter>
  );
};
export default MainRoute;
