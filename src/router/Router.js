import React from 'react';

import App from '../components/Index/app';
import Booking from '../components/Index/Booking';
import Orderlist from '../components/Index/Orderlist';
import Mycenter from '../components/Index/Mycenter';

import Goods from '../components/Goods/GoodsDetail';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Booking}/>
            <Route path="about" component={Booking} />
            <Route path="concat" component={Mycenter} />
            <Route path="list/:id" component={Orderlist} />
        </Route>
        <Route path="/goods" component={Goods}></Route>
    </Router>
);

export default router;