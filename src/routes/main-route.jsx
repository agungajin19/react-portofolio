import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp'
import ProductDetail from '../pages/ProductDetail'
import Transaction from '../pages/Transaction'
import Cart from '../pages/Cart'
import Collection from '../pages/Collection'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path='/SignUp' component={SignUp}/>
                <Route exact path='/SD' component={Home}/>
                <Route exact path='/SMP' component={Home}/>
                <Route exact path='/SMA' component={Home}/>
                <Route exact path='/SBMPTN' component={Home}/>
                <Route exact path='/ProductDetail' component={ProductDetail}/>
                <Route exact path='/Cart' component={Cart}/>
                <Route exact path='/Collection' component={Collection}/>
                <Route exact path='/Transaction' component={Transaction}/>
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;